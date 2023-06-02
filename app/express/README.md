
## Run in dev mode
npm run dev
## Enpoints

### Register user
- HTTP VERB
POST

- URI
/register

- params body
{
  "name":"Pedro",
  "surname":"Martínez",
  "password":"pedro1234",
  "email":"pedro2@gmail.com"
}

### login user
- HTTP VERB
POST

- URI
/login

- params body
{
  "password":"pedro1234",
  "email":"pedro2@gmail.com"
}

### welcome user
- HTTP VERB
GET

- URI
/welcome

- param headers
x-access-token

## Reference
- https://jwt.io/
- https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
- https://www.simplilearn.com/tutorials/nodejs-tutorial/jwt-authentication