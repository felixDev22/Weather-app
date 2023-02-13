import { configureStore } from '@reduxjs/toolkit';
import countries from './countryApi';
import weather from './weatherApi';

const store = configureStore({
  reducer: { weather, countries },
});

export default store;
