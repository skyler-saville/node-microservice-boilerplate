# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents to the container at /app
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Define environment variable
ENV NODE_ENV=production

# Command to run the application
CMD ["npm", "run", "start"]
