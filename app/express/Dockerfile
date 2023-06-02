# Establecer la imagen base
FROM node:14-slim

# Crear el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install


# Copiar el código fuente de la aplicación
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 4001

# Establecer el comando de inicio del contenedor
CMD ["node", "index.js"]