# Step 1: Use the official Node.js image as the base image
FROM node:16

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the application (if needed)
RUN npm run build

# Step 7: Expose the port your application uses
EXPOSE 3000

# Step 8: Define the command to run your application
CMD ["npm", "start"]
