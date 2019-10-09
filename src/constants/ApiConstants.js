const API_ROOT = "https://cors-anywhere.herokuapp.com/metaweather.com";

export const SEARCH_CITY_URL = cityName => `${API_ROOT}/api/location/search/?query=${cityName}`;
export const WEEK_WEATHER_URL = woeid => `${API_ROOT}/api/location/${woeid}/`;