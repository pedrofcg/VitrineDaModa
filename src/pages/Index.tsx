import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-image.jpg";
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

const Index = () => {
  const featuredProducts = [
    {
      image: ConjuntoPreto,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
    },
    {
      image: ConjuntoAzul,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
    },
    {
      image: ConjuntoRosa,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
    },
    {
      image: ConjuntoRoxo,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
    },
    {
      image: ConjuntoMarrom,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
    },
    {
      image: ConjuntoVinho,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
    },
    {
      image: ConjuntoLaranja,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
    },
    {
      image: BlusaNoTuleAzulClaro,
      title: "Blusa No Tule Azul Claro",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
    },
    {
      image: BlusaNoTuleBeje,
      title: "Blusa No Tule Bege",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
    },
    {
      image: BlusaNoTuleBranco,
      title: "Blusa No Tule Branco",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
    },
    {
      image: BlusaNoTuleMarrom,
      title: "Blusa No Tule Marrom",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
    },
    {
      image: BlusaNoTuleRosaClaro,
      title: "Blusa No Tule Rosa Claro",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
    },
    {
      image: BlusaNoTuleRosa,
      title: "Blusa No Tule Rosa",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
    },
    {
      image: BlusaNoTulePreto,
      title: "Blusa No Tule Preto",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
    },
    {
      image: ConjuntoCaneladoBicolor,
      title: "Conjunto Canelado Bicolor",
      price: 129.99,
      originalPrice: 149.99,
      sizes: ["M", "G"],
    },
    {
      image: ConjuntoCaneladoRosa01,
      title: "Conjunto Canelado",
      price: 119.90,
      originalPrice: 139.90,
      sizes: ["M", "G"],
    },
    {
      image: ConjuntoPoliamidaAzulClaro01,
      title: "Conjunto Poliamida",
      price: 109.90,
      originalPrice: 129.90,
      sizes: ["M", "G"],
    },
    {
      image: ConjuntoPoliamidaBranco,
      title: "Conjunto Poliamida Duplo",
      price: 119.90,
      originalPrice: 139.90,
      sizes: ["M", "G"],
    },
    {
      image: ShortBeachTenis,
      title: "Short Beach Tênis Com Bolso",
      price: 99.90,
      originalPrice: 129.90,
      sizes: ["P", "M", "G"],
    },
    {
      image: ShortBeachTenisBranco,
      title: "Short Beach Tênis Com Bolso",
      price: 99.90,
      originalPrice: 129.90,
      sizes: ["P", "M", "G"],
      
    },
  
  ];

  const bestSellers = [
    {
      image: BlusaNoTuleRosaClaro,
      title: "Blusa No Tule Rosa Claro",
      price: 32.99,
      sizes: ["P", "M"],
    },
    {
      image: ConjuntoPreto,
      title: "Conjunto No Suplex",
      price: 69.90,
      sizes: ["P", "M"],
    },
    {
      image: BlusaNoTuleAzulClaro,
      title: "Blusa No Tule Azul Claro",
      price: 32.99,
      sizes: ["P", "M"],
    },
    {
      image: ConjuntoRosa,
      title: "Conjunto No Suplex",
      price: 69.90,
      sizes: ["P", "M"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Nova Coleção 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Vista sua melhor versão
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Moda fitness que combina estilo, conforto e performance para mulheres que não abrem mão de nada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/colecoes">
                <Button size="lg" className="text-lg px-8">
                  Compre Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary">
                  Conheça a Marca
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Destaques da Semana
            </h2>
            <p className="text-lg text-muted-foreground">
              Peças selecionadas especialmente para você arrasar nos treinos
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Mais Vendidos
            </h2>
            <p className="text-lg text-muted-foreground">
              Os favoritos das nossas clientes
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronta para se sentir poderosa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Descubra a coleção completa e encontre o look perfeito para seus treinos
          </p>
          <Link to="/colecoes">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Ver Todas as Coleções
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
