export interface WeatherData {
  daily: DailyData[],
  hourly: HourlyData[],
  alerts: {
    description: string
  }
}

interface DailyData {
  temp: {
    max: number,
    min: number
  },
  pop: number,
  humidity: number,
  clouds: number,
  uvi: number,
  sunrise: number,
  sunset: number
}

interface HourlyData {
  temp: number,
  pop: number
}
