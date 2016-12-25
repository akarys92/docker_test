#create image based on the official Node 6 image 
FROM node:6

# create a directory where the app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that commands run inside the new directory
WORKDIR /usr/src/app

# Copy depenedency definitions
COPY package.json /usr/src/app

# Install dependencies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs on
EXPOSE 4200

# Run the app
CMD ["npm", "start"]