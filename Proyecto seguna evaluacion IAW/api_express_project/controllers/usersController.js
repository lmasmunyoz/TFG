import Users from "./../models/Users.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    try {
        // Get user input
        const { name, surname, email, password } = req.body;
    
        console.log("registerUser", req.body);

        // Validate user input
        if (!(email && password && name && surname)) {
            //res.status(400).send("All input is required");
            return res.status(400).json({
                "error":true,
                "message":"All input is required"
            });
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await Users.findOne({ email });

        if (oldUser) {
            //return res.status(409).send("User Already Exist. Please Login");
            return res.status(409).json({
                "error":true,
                "message":"User Already Exist. Please Login"
            });
        }

        //Encrypt user password
        const encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await Users.create({
            name,
            surname,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
}

export const loginUser = async (req, res) => {
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).json({
                "error":true,
                "message":"All input is required"
            });
        }
        // Validate if user exist in our database
        const user = await Users.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            user.token = token; // save user token
            res.status(200).json(user); // user data
        }else{
            res.status(400).json({
                "error":true,
                "message":"Invalid Credentials"
            });
        }
        
    } catch (err) {
        console.log(err);
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id:_id } = req.params;
        const user = await Users.findOne({ _id });
        if (!user) {
            return res.status(409).json({
                "error":true,
                "message":"User not found"
            });
        }
        user.password="";
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
}