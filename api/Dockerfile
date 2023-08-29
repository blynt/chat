FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the app code
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]
