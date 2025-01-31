'use client';

import { useState, useEffect, useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useGeolocation } from '../hooks/useGeolocation';
import { WeatherData } from '@/types/weather';

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { latitude, longitude, error: geoError } = useGeolocation();

  const fetchWeather = useCallback(async (city?: string) => {
    setLoading(true);
    setError(null);
    try {
      const params = city
        ? `city=${encodeURIComponent(city)}`
        : `lat=${latitude}&lon=${longitude}`;
      const res = await fetch(`/api/weather?${params}`);
      if (!res.ok) throw new Error('Failed to fetch weather data');
      const data = await res.json();
      setWeather(data);
    } catch {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeather();
    }
  }, [fetchWeather, latitude, longitude]);

  const handleSearch = (city: string) => {
    fetchWeather(city);
  };

  const handleUseCurrentLocation = () => {
    if (latitude && longitude) {
      fetchWeather();
    } else if (geoError) {
      setError('Unable to get your location. Please try entering a city name.');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-4 sm:p-8 overflow-y-auto">
        <h1 className="text-4xl sm:py-4 sm:text-5xl font-extrabold text-white mb-4 sm:mb-8 drop-shadow-lg">
        Weather Dashboard
      </h1>
      <div className="w-full max-w-4xl">
        <SearchBar onSearch={handleSearch} onUseCurrentLocation={handleUseCurrentLocation} />
        {loading && <LoadingSpinner />}
        {error && <p className="text-red-500 mt-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4">{error}</p>}
        {weather && (
          <div className="mt-8">
            <WeatherCard data={weather} />
          </div>
        )}
      </div>
    </main>
  );
}