import React from "react";
import { Foundation } from "types/foundation";

const Card = ({ foundation }: { foundation: Foundation }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="border border-gray-300 bg-blue-50 p-8 rounded-xl shadow-xl w-[500px] h-[420px] flex flex-col items-stretch">
        <h2 className="text-2xl font-bold mb-4 text-center">{foundation.name}</h2>
        <p className="text-center mb-6">{foundation.description}</p>
        <picture>
          <img
            src={`/${foundation.image_url}`}
            alt={foundation.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
        </picture>
      </div>
    </div>
  );
};

export default Card;