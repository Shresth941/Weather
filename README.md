Real-Time Weather Monitoring App
This project is a Real-Time Weather Monitoring Application that allows users to view the current weather conditions of selected cities in real-time. The app fetches weather data using the OpenWeatherMap API and provides configurable temperature alerts. It also offers dynamic visualizations and theming based on weather conditions.

Features
Real-Time Weather Data: Fetches live weather data for cities using the OpenWeatherMap API.
Weather Summaries: Provides daily weather summaries, including average, max, and min temperatures.
Configurable Alerts: Alerts are generated when temperatures exceed a configurable threshold for multiple consecutive updates.
Dynamic Background and Theme: The UI dynamically changes based on the weather condition (e.g., sunny, cloudy, rainy, night).
City Search: Users can search for specific cities to view their real-time weather conditions.
Tech Stack
Backend
Node.js and Express: Provides the backend service to fetch and aggregate weather data.
Axios: For making API calls to OpenWeatherMap.
MongoDB: Stores daily weather summaries for each city.
Frontend
React.js: For building the user interface.
Material UI: A UI library used for styling components.
Axios: To handle HTTP requests from the frontend to the backend.
Data Source
OpenWeatherMap API: Provides real-time weather data for various cities worldwide.
Setup Instructions
Prerequisites
Ensure you have the following installed:

Node.js: v12 or higher
MongoDB: To store weather summary data locally or remotely
OpenWeatherMap API Key: You can get your free API key here.
Backend Setup
Clone the repository:


Install dependencies:



npm install
Create a .env file in the backend directory and add your OpenWeatherMap API key:


OPENWEATHER_API_KEY=your_openweather_api_key
Start the backend server:

npm run start
Frontend Setup
Navigate to the frontend directory:


cd ../frontend
Install dependencies:


npm install
Start the frontend server:

npm start

Backend: Every 5 minutes, the backend fetches weather data for multiple cities from the OpenWeatherMap API. It aggregates this data and stores daily summaries in MongoDB. If a city's temperature exceeds the configured threshold for two consecutive updates, an alert is generated.

Frontend: The React frontend displays weather summaries for the cities, including max, min, and average temperatures. Based on the weather condition (e.g., sunny, cloudy, rainy), the app changes the background theme dynamically. Users can search for specific cities to get real-time data.

Configurable Options
Update Interval: By default, the backend fetches weather updates every 5 minutes. You can configure this in controller.js.
Temperature Threshold: The default temperature threshold for alerts is set to 35°C. You can adjust this in controller.js.
Future Improvements
Add more weather metrics like humidity and wind speed.
Implement user authentication for personalized alerts.
Expand the app to support notifications for severe weather conditions.
