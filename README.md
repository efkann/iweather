# iWeather

A simple weather app, where you can quickly gather weather information either by specifying a location or by automatically detecting your current location.

[https://iweather-mu.vercel.app](https://iweather-mu.vercel.app)

![Finished preview of the weather app](/mock_desktop.png)

## Installation

To install and run iWeather on your local machine, follow these steps:

Clone the repository:

```bash
git clone https://github.com/efkann/iweather.git
```

Install dependencies:

```bash
cd iweather
npm install
```

Go to `src/lib/axios.ts` and put your OpenWeatherMap API key in the `OPENWEATHERMAP_API_KEY` variable.

Start the server on localhost

```bash
npm run dev
```

## Tech Stack

1.  React, as a UI library.
2.  Vite, as a build tool.
3.  React Query, for async state management (fetching data).
4.  Ariakit, for accessible React components.
5.  Axios, HTTP client for fetching data.
6.  Zustand, as a global state management.
7.  React Router, handling routing in React.
8.  Vercel, for hosting.

## Additional Features

- Responsive design
- Geolocation support
- Dynamic icons
- Installable progressive web app
- Settings screen, ability to change units, language.
- Accesibility

## Important Decisions

### API Key

I used OpenWeatherMap API for fetching weather data. In an ideal scenario, I would have used a `.env` file to store the API key. Then, proxy the API requests through a server. But, as this is a simple client-side app, I decided to hardcode the API key in the code. This is not a good practice, but it is fine for this project.

### Data Fetching and State Management

In this app, there are couple of scenarios where we need to fetch data.

- Find location by a search query
- Find location from coordinates
- Get current weather
- Get forecast for the next 5 days

At first, I thought using a static list of cities for the user to select from would be good. But, I decided to use the OpenWeatherMap API to get the list of cities. This way, the user can search for any location in the world. Including not only cities but also towns, countries, states, etc.

> **_NOTE:_** For some Turkish cities, it returns same city names twice. This is due to how OpenweatherMap collects the data.

I used `react-query` as a data fetching library, because it is a powerful library that makes fetching and caching easier. We use `staleTime` of 10 minutes for the weather data, because OpenWeatherMap updates the data every 10 minutes. So, we can use the cached data for 10 minutes and then refetch the data. For finding a location by a search query, I used `staleTime` of Infinity as the data doesn't change.

As its stated in the [documentation](https://openweathermap.org/appid)

> API care recommendations  
> First, we recommend making API calls no more than once in 10 minutes for each location

I used `zustand` for global state management. It is a simple and fast library for managing global state. We use it only for the settings like units and language.

### Accesibility

I wanted this app to be accesible as much as possible. So, I used `Ariakit` for accessible React components like Combobox, Select. I also tried to make the app as keyboard navigable as possible. adding `aria` attributes to the elements where necessary.
