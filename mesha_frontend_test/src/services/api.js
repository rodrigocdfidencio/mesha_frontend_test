import axios from 'axios';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_API_KEY = 'c9f7dfe3a358ca7a55cc3fb42a9bbebf';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(WEATHER_URL, {
        params: {
            q: query,
            units: 'metric',
            lang: 'pt_br',
            APPID: WEATHER_API_KEY,
        }
    });
    return data;
}

export const fetchMusic = async (musicalStyle) => {
  const data = await axios.get("https://shazam.p.rapidapi.com/search", {
  method: 'GET',
  params: {
  term: musicalStyle,
  locale: 'pt-br',
  limit: '5',
},
headers: {
  'x-rapidapi-host': 'shazam.p.rapidapi.com',
  'x-rapidapi-key': 'a73d3918demshdd7bd31bd74dbd4p1a61dcjsn9ca453de8010'
}
});
return data;
} 