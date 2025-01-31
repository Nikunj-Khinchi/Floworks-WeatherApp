import Image from 'next/image';
import { WeatherData } from '../types/weather';
import { Wind, Droplets, Thermometer, ArrowDown, Sunrise, Sunset } from 'lucide-react';

interface WeatherCardProps {
    data: WeatherData;
}

export default function WeatherCard({ data }: WeatherCardProps) {
    const formatTime = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    const currentTime = new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="bg-gray-50 bg-opacity-20 backdrop-blur-xl rounded-3xl shadow-2xl p-4 sm:p-8 w-full mx-auto text-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 sm:mb-8">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl sm:text-4xl font-bold">{data.city}, {data.country}</h2>
                    <p className="text-lg sm:text-xl mt-2 text-gray-600">{currentTime}</p>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <Image
                        src={`http://openweathermap.org/img/wn/${data.icon}@4x.png`}
                        alt={data.description}
                        width={80}
                        height={80}
                        className="w-20 h-20 sm:w-24 sm:h-24"
                    />
                    <div className="ml-4 text-center md:text-left">
                        <p className="text-4xl sm:text-6xl font-bold">{data.temperature}°C</p>
                        <p className="text-xl sm:text-2xl capitalize">{data.description}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <WeatherDetail icon={<Thermometer size={24} />} label="Feels Like" value={`${data.feelsLike}°C`} />
                <WeatherDetail icon={<Droplets size={24} />} label="Humidity" value={`${data.humidity}%`} />
                <WeatherDetail icon={<Wind size={24} />} label="Wind Speed" value={`${data.windSpeed} km/h`} />
                <WeatherDetail icon={<ArrowDown size={24} />} label="Pressure" value={`${data.pressure} hPa`} />
                <WeatherDetail icon={<Sunrise size={24} />} label="Sunrise" value={formatTime(data.sunrise)} />
                <WeatherDetail icon={<Sunset size={24} />} label="Sunset" value={formatTime(data.sunset)} />
            </div>
        </div>
    );
}

function WeatherDetail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="bg-white bg-opacity-30 rounded-xl p-4 flex items-center">
            <div className="mr-4 text-blue-500">{icon}</div>
            <div>
                <p className="text-sm text-gray-600">{label}</p>
                <p className="font-bold text-lg">{value}</p>
            </div>
        </div>
    );
}