import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import productLegging from "@/assets/product-legging.jpg";
import productTop from "@/assets/product-top.jpg";
import productShorts from "@/assets/product-shorts.jpg";
import productSet from "@/assets/product-set.jpg";
import ConjuntoPreto from "@/assets/ConjuntoPreto01.jpg";
import ConjuntoLaranja from "@/assets/ConjuntoLaranja.jpg";
import ConjuntoMarrom from "@/assets/ConjuntoMarrom.jpg";
import ConjuntoAzul from "@/assets/ConjuntoAzul.jpg";
import ConjuntoVinho from "@/assets/ConjuntoVinho.jpg";
import ConjuntoRoxo from "@/assets/ConjuntoRoxo.jpg";
import ConjuntoRosa from "@/assets/ConjuntoRosa.jpg";
import BlusaNoTulePreto from "@/assets/BlusaNoTulePreto.jpg";
import BlusaNoTuleRosa from "@/assets/BlusaNoTuleRosa.jpg";
import BlusaNoTuleRosaClaro from "@/assets/BlusaNoTuleRosaClaro.jpg";
import BlusaNoTuleMarrom from "@/assets/BlusaNoTuleMarrom.jpg";
import BlusaNoTuleBranco from "@/assets/BlusaNoTuleBranco.jpg";
import BlusaNoTuleBeje from "@/assets/BlusaNoTuleBeje.jpg";
import BlusaNoTuleAzulClaro from "@/assets/BlusaNoTule AzulClaro.jpg";
import ConjuntoCaneladoBicolor from "@/assets/ConjuntoCaneladoBicolor.jpg";
import ConjuntoCaneladoBicolor01 from "@/assets/ConjuntoCaneladoBicolor01.jpg";
import ConjuntoCaneladoRosa from "@/assets/ConjuntoCaneladoRosa.jpg";
import ConjuntoCaneladoRosa01 from "@/assets/ConjuntoCaneladoRosa01.jpg";
import ConjuntoPoliamidaAzulClaro from "@/assets/ConjuntoPoliamidaAzulClaro.jpg";
import ConjuntoPoliamidaAzulClaro01 from "@/assets/ConjuntoPoliamidaAzulClaro01.jpg";
import ConjuntoPoliamidaBranco from "@/assets/ConjuntoPoliamidaBranco.jpg";
import ConjuntoPoliamidaBranco01 from "@/assets/ConjuntoPoliamidaBranco01.jpg";
import ShortBeachTenis from "@/assets/ShortBeachTenis.jpg";
import ShortBeachTenisBranco from "@/assets/ShortBeachTenisBranco.jpg";
import ShortBeachTenisBranco01 from "@/assets/ShortBeachTenisBranco01.jpg";
import ShortBeachTenisBranco03 from "@/assets/ShortBeachTenisBranco03.jpg";



const Colecoes = () => {
  const [filter, setFilter] = useState("all");

  const products = [
    { image: ConjuntoAzul, title: "Conjunto No Suplex", price: 69.90, originalPrice: 89.90, category: "conjuntos", images: [ConjuntoAzul], sizes: ["P", "M"] },
    { image: ConjuntoVinho, title: "Conjunto No Suplex", price: 69.90, originalPrice: 89.90, category: "conjuntos", images: [ConjuntoVinho], sizes: ["P", "M"] },
    { image: ConjuntoRoxo, title: "Conjunto No Suplex", price: 69.90, originalPrice: 89.90, category: "conjuntos", images: [ConjuntoRoxo], sizes: ["P", "M"] },
    { image: ConjuntoRosa, title: "Conjunto No Suplex", price: 69.90, originalPrice: 89.90, category: "conjuntos", images: [ConjuntoRosa], sizes: ["P", "M"] },
    { image: ConjuntoPreto, title: "Conjunto No Suplex", price: 69.90, originalPrice: 89.90, category: "conjuntos", images: [ConjuntoPreto], sizes: ["P", "M"] },
    { image: ConjuntoLaranja, title: "Conjunto No Suplex", price: 69.90, originalPrice: 89.90, category: "conjuntos", images: [ConjuntoLaranja], sizes: ["P", "M"] },
    { image: ConjuntoMarrom, title: "Conjunto No Suplex", price: 69.90, originalPrice: 89.90, category: "conjuntos", images: [ConjuntoMarrom], sizes: ["P", "M"] },
    { image: ShortBeachTenisBranco, title: "Short Beach Tenis", price: 99.99, originalPrice: 129.99, category: "shorts", images: [ShortBeachTenisBranco, ShortBeachTenisBranco01, ShortBeachTenisBranco03], sizes: ["P", "M", "G"] },
    { image: ShortBeachTenis, title: "Short Beach Tenis", price: 99.99, originalPrice: 129.99, category: "shorts", images: [ShortBeachTenis], sizes: ["P", "M", "G"] },
  ];

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = [
    { id: "all", label: "Todos" },
    { id: "conjuntos", label: "Conjuntos" },
    { id: "leggings", label: "Leggings" },
    { id: "tops", label: "Tops" },
    { id: "shorts", label: "Shorts" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4">
              Nossas Coleções
            </h1>
            <p className="text-base md:text-xl text-muted-foreground px-4">
              Encontre o look perfeito para seus treinos
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "default" : "outline"}
                onClick={() => setFilter(cat.id)}
                className="transition-all text-sm md:text-base"
                size={typeof window !== 'undefined' && window.innerWidth < 768 ? "sm" : "default"}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Nenhum produto encontrado nesta categoria
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Colecoes;
