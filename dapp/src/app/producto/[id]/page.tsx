"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

// Datos de ejemplo (en producción, obtén esto de una API o contexto global)
const products = [
  {
    id: 1,
    name: "olla de barro",
    material: "Barro",
    author: "Artesano del Itsmo de Tehuantepec",
    description: "Olla de barro originaria del itsmo de tehuantepec perfecta para decorados",
    price: 33060,
    image: "https://tse2.mm.bing.net/th/id/OIP.ETmH-K3sUB-fR7W7RyylQgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Alebrije multicolor",
    material: "Madera pintada a mano",
    author: "Artesano oaxaqueño",
    description: "Figura de armadillo elaborado con madera y pintada a mano ",
    price: 52250,
    image: "https://tse2.mm.bing.net/th/id/OIP.lRIeTjG9aNtaw8UJhl-yLwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  // ...agrega los demás productos aquí...
];

export default function ProductPage() {
  const params = useParams();
  const id = Number(params.id);

  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail-container" style={{ maxWidth: 600, margin: "2rem auto", background: "#fff", borderRadius: 16, boxShadow: "0 2px 8px #0001", padding: 24 }}>
      <img
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        style={{ borderRadius: 12, objectFit: "cover", width: "100%", height: "auto" }}
      />
      <h1 style={{ fontSize: 32, margin: "1rem 0 0.5rem" }}>{product.name}</h1>
      <p style={{ color: "#666", marginBottom: 8 }}><b>Material:</b> {product.material}</p>
      <p style={{ color: "#666", marginBottom: 8 }}><b>Autor:</b> {product.author}</p>
      <p style={{ marginBottom: 16 }}>{product.description}</p>
      <div style={{ fontSize: 28, fontWeight: 700, color: "#2fa700", marginBottom: 24 }}>
        ${product.price.toLocaleString("es-MX")}
      </div>
      <Button colorScheme="purple" size="lg">Agregar al carrito</Button>
    </div>
  );
}
