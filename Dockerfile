# Use Node LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy all project files
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "index.js"]
