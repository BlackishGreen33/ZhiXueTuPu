'use client';

import { useState } from 'react';

interface WeatherInfo {
  temperature?: number;
  feelsLike?: number;
  humidity?: number;
  windSpeed?: number;
  conditions?: string;
  location?: string;
}

const Weather: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);
  const [streamText, setStreamText] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setWeatherInfo(null);
    setStreamText('');
    const formData = new FormData(e.currentTarget);
    const city = formData.get('city') as string;

    try {
      const response = await fetch('/api/weather', {
        method: 'POST',
        body: JSON.stringify({ city }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get weather data');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullResponse = '';

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        fullResponse += chunk;

        try {
          const jsonData = JSON.parse(chunk);
          if (jsonData.a?.result) {
            setWeatherInfo(jsonData.a.result);
          } else if (jsonData['0']) {
            setStreamText((prev) => prev + jsonData['0']);
          }
        } catch {
          setStreamText((prev) => prev + chunk);
        }
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(
        error instanceof Error ? error.message : 'Failed to get weather data'
      );
    }
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full rounded border p-2"
          name="city"
          placeholder="Enter city name"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Get Weather
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {weatherInfo && (
        <div className="mt-6 rounded-lg bg-gray-100 p-4">
          <h2 className="mb-2 text-xl font-bold">
            Weather in {weatherInfo.location}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <p>Temperature: {weatherInfo.temperature}°C</p>
            <p>Feels like: {weatherInfo.feelsLike}°C</p>
            <p>Conditions: {weatherInfo.conditions}</p>
            <p>Humidity: {weatherInfo.humidity}%</p>
            <p>Wind speed: {weatherInfo.windSpeed} m/s</p>
          </div>
        </div>
      )}

      {streamText && (
        <div className="mt-4 whitespace-pre-wrap rounded-lg bg-gray-100 p-4">
          {streamText}
        </div>
      )}
    </div>
  );
};

export default Weather;
