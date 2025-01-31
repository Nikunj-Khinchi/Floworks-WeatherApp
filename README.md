# Weather Dashboard

## Overview

This project is a simple, yet visually appealing weather dashboard built with Next.js and Node.js/Express. It allows users to enter the name of a city and retrieve weather data from the OpenWeatherMap API.

## About Project

### Introduction

A weather application that allows users to retrieve current weather information for any city using the city name or the coordinates of the location as inputs.

### Technologies Used

- Next.js
- TypeScript
- GitHub
- Node.js
- Express
- TailwindCSS
- Jest
- Supertest
- Vercel
- OpenWeatherMap API

### Functionalities

- Takes the user's location (or user input) to retrieve current coordinates and fetch weather data.
- Allows users to input a city name to retrieve weather data if coordinates are not provided.
- Displays weather data including: Current Temperature, Feels Like Temperature, Humidity, Wind Speed, Visibility, Description, Date and Time, City Name, and Weather Icon.
- Additional features include: Loading state, gradient colors, code reusability, comments for code description, unit testing, and a deployed link.

### Error Handling

- Provides readable error messages for invalid inputs or errors in retrieving data using try/catch blocks and alert messages.
- Backend error handling and error state management on the frontend.

### Testing

- Implemented unit testing using Jest for the frontend WeatherData component and the weatherData.ts action used to fetch data.
- Attempted unit testing on the route.ts file using Supertest for backend testing, with some issues encountered.

## Features

- An input field for users to enter the name of a city.
- A 'Get Weather' button that sends the city name to the backend when clicked.
- Displays the returned weather data in a clean and user-friendly manner. The weather data includes:
  - Temperature
  - Humidity
  - Wind speed
  - A brief description of the weather condition
- Error handling mechanisms to display appropriate error messages if a city does not exist or the backend does not return data.
- A Node.js/Express server that accepts city names from the frontend.
- Makes a request to the OpenWeatherMap API using the received city name and retrieves the weather data.
- Parses the received data and returns a JSON object containing the temperature, humidity, wind speed, and weather description to the frontend.
- Implements proper error handling to return appropriate error messages if the OpenWeatherMap API does not return data.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd weather-dashboard
   ```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd weather-dashboard
   ```
2. Install dependencies:
   ```bash
    npm install
   ```
3. Create a `.env` file in the root directory of the project and add the following environment variables:
    ```bash
    OPENWEATHERMAP_API_KEY=<your-openweathermap-api-key>
    ```
    Replace `<your-openweathermap-api-key>` with your OpenWeatherMap API key.


4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000` to view the application.

## Testing

- Unit tests for the frontend are created using Jest. To run the tests
- Integration tests for the backend are created using Mocha/Chai or Jest/Supertest. To run the tests:

```bash
npm test
```

## Deployment

The project is deployed on Vercel. Use this link to access it: [Deployed Weather Dashboard](https://floworks-weather-app.vercel.app/)