import React from "react";

const categorias = [
  "Barro",
  "Piel",
  "Madera",
  "Palma",
  "Tlapalería",
  "Textiles",
  "Gastronomía",
  "Cerámica",
];

export default function Categorias() {
  return (
    <div className="grid grid-cols-2 gap-2 p-4 bg-white">
      {categorias.map((cat) => (
        <button
          key={cat}
          className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
