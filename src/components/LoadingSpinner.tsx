import React from 'react';

export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center mt-8">
            <div className="relative w-24 h-24">
                <div className="absolute top-0 left-0 w-12 h-12 bg-yellow-400 rounded-full animate-spin-slow"></div>
                <div className="absolute top-6 left-6 w-16 h-10 bg-white rounded-full shadow-md animate-cloud-move"></div>
                <div className="absolute top-4 left-8 w-8 h-8 bg-white rounded-full shadow-md animate-cloud-move"></div>
                <div className="absolute top-8 left-4 w-10 h-10 bg-white rounded-full shadow-md animate-cloud-move"></div>
            </div>
        </div>
    );
}