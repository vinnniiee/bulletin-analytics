# Bulletin Analytics

Bulletin Analytics is a powerful application designed to fetch, analyze, and visualize bulletin data. The project is built using a modern tech stack featuring React, D3, and Vite for the frontend, along with Express, MongoDB, and Mongoose for the backend.

Deployed On :- [Render](https://bulletin-analytics.onrender.com/)


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Key Dependencies](#key-dependencies)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Data Visualization**: Interactive data visualizations using D3 and TopoJSON.
- **Global Analytics**: Fetch and display global bulletin data by region, country, topic, and more.
- **User Authentication**: Secure user management with registration and login.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **API Integration**: Backend API built with Express and MongoDB to manage and serve bulletin data.

## Installation

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/bulletin-api.git
    cd bulletin-api
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm run start:backend
    ```

### Frontend

1. Navigate to the frontend directory and install dependencies:
    ```bash
    cd frontend
    npm install
    cd ..
    ```

2. Start the frontend development server:
    ```bash
    npm run start:frontend
    ```

## Usage

### Development

1. Start the development server:
    ```bash
    npm run start
    ```

2. Open your browser and navigate to `http://localhost:3000` for the frontend and `http://localhost:5174` for the backend.

### Production

1. Build the project:
    ```bash
    npm run build
    ```

2. Start the production server:
    ```bash
    npm run prod
    ```

## Scripts

- `dev`: Start the development server for the frontend.
- `prod`: Start the production server for the backend.
- `start:backend`: Start the backend server.
- `start:frontend`: Start the frontend development server.
- `build`: Install dependencies and build both the frontend and backend.
- `start`: Run both backend and frontend servers concurrently.

## Key Dependencies

### Backend

- **express**: Web framework for building the API.
- **mongoose**: MongoDB object modeling tool.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.

### Frontend

- **d3 & topojson**: Libraries for creating data visualizations.
- **react-icons**: Collection of popular icons.
- **framer-motion**: Library for animations.
- **axios**: Promise-based HTTP client for making API requests.

## API Endpoints

- **POST /bulletins**: Create a new bulletin entry.
- **GET /bulletins**: Retrieve all bulletins.
- **GET /map**: Retrieve features for the world map.
- **GET /bulletins/topics**: Retrieve and count bulletins by topic.
- **GET /bulletins/regions**: Retrieve and count bulletins by region.
- **GET /bulletins/countries**: Retrieve and count bulletins by country.
- **GET /bulletins/pestles**: Retrieve and count bulletins by pestle.
- **GET /bulletins/sectors**: Retrieve and count bulletins by sector.
- **GET /bulletins/sources**: Retrieve and count bulletins by source.
- **GET /bulletins/chronic**: Group bulletins by day.
- **GET /bulletins/:id**: Retrieve a specific bulletin by ID.
- **PATCH /bulletins/:id**: Update a specific bulletin by ID.
- **DELETE /bulletins/:id**: Delete a bulletin by ID.

## Contributing

If you would like to contribute to the project, please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
