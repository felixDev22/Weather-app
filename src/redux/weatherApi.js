import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const Url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'a04ae402db5b7b18b3013ff97a878d15';

export const getWeather = createAsyncThunk('weather/fetch', async () => {
  const response = await fetch(
    `${Url}?lat=0.0236&lon=37.9062&appid=${apiKey}&units=metric`,
  );

  const result = await response.json();
  const weather = {
    id: result.id,
    name: result.name,
    description: result.weather[0].description,
    humidity: result.main.humidity,
    pressure: result.main.pressure,
    temp: result.main.temp,
    wind: result.wind.speed,
  };
  return weather;
});

const initialState = {
  weather: {},
};

const weatherSlice = createSlice({
  name: 'weather-Slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, { payload }) => {
      const updatedState = { ...state, weather: payload };
      return updatedState;
    });
  },
});

export default weatherSlice.reducer;
