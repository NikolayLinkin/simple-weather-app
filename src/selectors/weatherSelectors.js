export const getWoeid = state => state.location.woeid;

export const getWeatherWeekItems = state => state.weather.consolidatedWeather;
export const getTodayWeather = state => state.weather.today;
export const getWeatherActiveTab = state => state.weather.activeTab;
export const weatherFetching = state => state.weather.isFetching;