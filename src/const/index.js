export const API_key = '016ffb5da7e350594fc84a74016e415b'
export const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather}'

export const getTime = (seconds) => {
    return new Date(seconds * 1000).toLocaleTimeString('ru-RU', {timeZone: 'Atlantic/Reykjavik'})
}