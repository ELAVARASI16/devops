# Use Node.js as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application
COPY . .

# Build the application for production
RUN npm run build

# Expose the port Render uses
EXPOSE 3000

# Serve the production build
RUN npm install -g serve
CMD ["serve", "-s", "build"]
