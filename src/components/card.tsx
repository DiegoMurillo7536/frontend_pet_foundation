import React from "react";
import { Foundation } from "types/foundation";

const Card = ({ foundation }: { foundation: Foundation }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-mountain-meadow-200 overflow-hidden group w-full max-w-md">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 text-mountain-meadow-800 group-hover:text-mountain-meadow-600 transition-colors line-clamp-2">
          {foundation.name}
        </h2>
        <p className="text-mountain-meadow-700 text-sm leading-relaxed mb-4 line-clamp-4 h-20">
          {foundation.description}
        </p>
      </div>
      
      <div className="relative">
        <img
          src={`/${foundation.image_url}`}
          alt={foundation.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="p-6 pt-4">
        <button className="w-full bg-mountain-meadow-500 hover:bg-mountain-meadow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
          Donar ahora
        </button>
      </div>
    </div>
  );
};

export default Card;