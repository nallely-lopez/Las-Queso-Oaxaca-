
'use client'

import { useRouter } from "next/navigation";
import { ConnectButton } from "@/components/ConnectButton";
import { InfoList } from "@/components/InfoList";
import { ActionButtonList } from "@/components/ActionButtonList";

import Img from 'next/image';

// Sample product data
const products = [
  {
    id: 1,
    name: "olla de barro",
    description: "olla de baro originaria del itsmo de tehuantepec perfecta para decorados",
    price: 33060,
    originalPrice: 38000,
    discount: 13,
    image: "https://tse2.mm.bing.net/th/id/OIP.ETmH-K3sUB-fR7W7RyylQgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    installments: 6,
    installmentPrice: 5510,
    shipping: "Llega gratis el lunes"
  },
  {
    id: 2,
    name: "Alebrije multicolor",
    description: "Figura de armadillo elaborado con madera y pintada a mano ",
    price: 52250,
    originalPrice: null,
    discount: null,
    image: "https://tse2.mm.bing.net/th/id/OIP.lRIeTjG9aNtaw8UJhl-yLwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    installments: 12,
    installmentPrice: 6746,
    shipping: "Envío gratis"
  },
  {
    id: 3,
    name: "Juego de tenates",
    description: "Tenates elaborado de plama perfecto para decorar y almacenar cosas",
    price: 72952,
    originalPrice: 82900,
    discount: 12,
    image: "https://tse2.mm.bing.net/th/id/OIP.bCnmbccu8qWbt9sI2rusJgHaJ3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    installments: 12,
    installmentPrice: 9419,
    shipping: "Llega gratis el lunes"
  },
  {
    id: 4,
    name: "Bajilla de barro",
    description: "Bajilla de barro negro elaborado a mano perfecto para tu cocina",
    price: 65510,
    originalPrice: null,
    discount: null,
    image: "https://http2.mlstatic.com/D_NQ_NP_695141-MLM48392797725_112021-O.webp",
    installments: 12,
    installmentPrice: 8458,
    shipping: "Envío gratis"
  },
  {
    id: 5,
    name: "Peine multicolor",
    description: "Peine de madera con flores pintadas a mano",
    price: 52999,
    originalPrice: null,
    discount: null,
    image: "https://i.etsystatic.com/9529611/r/il/e75583/2312368747/il_794xN.2312368747_o8db.jpg",
    installments: 12,
    installmentPrice: 6843,
    shipping: "Envío gratis"
  },
  {
    id: 6,
    name: "Abanico de palma",
    description: "Abanico de palma ideal para esta temporada de calor",
    price: 72404,
    originalPrice: 78700,
    discount: 8,
    image: "https://tse3.mm.bing.net/th/id/OIP.oEmHH1vbqEvcryT8wVpwcQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    installments: 12,
    installmentPrice: 9348,
    shipping: "Llega gratis el lunes",
    badge: "FULL"
  }
];

export default function Home() {
  const router = useRouter();

  const handleProductClick = (productId: number) => {
    router.push(`/producto/${productId}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="marketplace-container">
      {/* Header */}
      <header className="marketplace-header">
        
        <h1>ESENCIA</h1>
        <div className="header-actions">
          <ConnectButton />
          <ActionButtonList />
        </div>
      </header>

      {/* Product Grid */}
      <main className="products-section">
        <h2>Productos Destacados</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              //onClick={() => handleProductClick(product.id)}
              onClick={() => console.log("clicked")} // Placeholder for navigation)}
            >
              <div className="product-image-container">
                <img
                  src={product.image} 
                  alt={product.name}
                  width={300}
                  height={200}
                  className="product-image"
                />
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
                {product.discount && (
                  <span className="discount-badge">{product.discount}% OFF</span>
                )}
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-pricing">
                  {product.originalPrice && (
                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  )}
                  <span className="current-price">{formatPrice(product.price)}</span>
                </div>
                
                <div className="product-details">
                  <p className="installments">
                    {product.installments > 1 
                      ? `en ${product.installments} cuotas de ${formatPrice(product.installmentPrice)}`
                      : 'Pago en efectivo'
                    }
                  </p>
                  <p className="shipping">{product.shipping}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="marketplace-footer">
        <div className="advice">
          <p>
            Este marketplace funciona con Web3. <br/>
            Ve a <a href="https://cloud.reown.com" target="_blank" className="link-button" rel="noopener noreferrer">Reown Cloud</a> para obtener tu propio proyecto.
          </p>
        </div>
        <InfoList />
      </footer>
    </div>
  );
}