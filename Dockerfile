FROM cypress/browsers:node16.16.0-chrome106-ff99-edge
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "dashboardEdge"]