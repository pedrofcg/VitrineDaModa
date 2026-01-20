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
import azul3 from "@/assets/azul3.jpeg";
import azul4 from "@/assets/azul4.jpeg"; 
import AzulEscuro2 from "@/assets/AzulEscuro2.jpeg";
import rosa1 from "@/assets/rosa1.jpeg";
import rosa2 from "@/assets/rosa2.jpeg";
import rosa3 from "@/assets/rosa3.jpeg";
import verde3 from "@/assets/verde3.jpeg";
import roxo from "@/assets/roxo.jpeg";
import vermelho1 from "@/assets/vermelho1.jpeg";
import vinho1 from "@/assets/vinho1.jpeg";
import vinho2 from "@/assets/vinho2.jpeg";
import vinho3 from "@/assets/vinho3.jpeg";
import vinho4 from "@/assets/vinho4.jpeg";
import vermelho2 from "@/assets/vermelho2.jpeg";
import vermelho3 from "@/assets/vermelho3.jpeg";
import vermelho4 from "@/assets/vermelho4.jpeg";
import verde from "@/assets/verde.jpeg";
import verde2 from "@/assets/verde2.jpeg";
import verde4 from "@/assets/verde4.jpeg";
import AzulEscuro1 from "@/assets/AzulEscuro1.jpeg";
import AzulEscuro3 from "@/assets/AzulEscuro3.jpeg";
import AzulEscuro4 from "@/assets/AzulEscuro4.jpeg";
import AzulClaro1 from "@/assets/AzulClaro1.jpeg";
import AzulClaro2 from "@/assets/AzulClaro2.jpeg";
import AzulClaro3 from "@/assets/AzulClaro3.jpeg";
import AzulClaro4 from "@/assets/AzulClaro4.jpeg";
import AzulClaro5 from "@/assets/AzulClaro5.jpeg";
import AzulClaro6 from "@/assets/AzulClaro6.jpeg";
import marrom1 from "@/assets/marrom1.jpeg";
import marrom2 from "@/assets/marrom2.jpeg";
import roxo2 from "@/assets/roxo2.jpeg";
import roxo3 from "@/assets/roxo3.jpeg";
import lilas1 from "@/assets/lilas1.jpeg";
import lilas2 from "@/assets/lilas2.jpeg";
import lilas3 from "@/assets/lilas3.jpeg";  
import lilas4 from "@/assets/lilas4.jpeg";
import lilas5 from "@/assets/lilas5.jpeg";
import lilas6 from "@/assets/lilas6.jpeg";
import lilas7 from "@/assets/lilas7.jpeg";
import roxo4 from "@/assets/roxo4.jpeg";
import roxo5 from "@/assets/roxo5.jpeg";
import roxo6 from "@/assets/roxo6.jpeg";



const Index = () => {
  const featuredProducts = [
    {
      image: ConjuntoPreto,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
      images: [ConjuntoPreto],
    },
    {
      image: ConjuntoAzul,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
      images: [ConjuntoAzul],
    },
    {
      image: ConjuntoRosa,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
      images: [ConjuntoRosa],
    },
    {
      image: ConjuntoRoxo,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
      images: [ConjuntoRoxo],
    },
    {
      image: ConjuntoMarrom,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
      images: [ConjuntoMarrom],
    },
    {
      image: ConjuntoVinho,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
      images: [ConjuntoVinho],
    },
    {
      image: ConjuntoLaranja,
      title: "Conjunto No Suplex ",
      price: 69.90,
      originalPrice: 89.90,
      sizes: ["P", "M"],
      images: [ConjuntoLaranja],
    },
    {
      image: BlusaNoTuleAzulClaro,
      title: "Blusa No Tule Azul Claro",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
      images: [BlusaNoTuleAzulClaro],
    },
    {
      image: BlusaNoTuleBeje,
      title: "Blusa No Tule Bege",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
      images: [BlusaNoTuleBeje],
    },
    {
      image: BlusaNoTuleBranco,
      title: "Blusa No Tule Branco",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
      images: [BlusaNoTuleBranco],
    },
    {
      image: BlusaNoTuleMarrom,
      title: "Blusa No Tule Marrom",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
      images: [BlusaNoTuleMarrom],
    },
    {
      image: BlusaNoTuleRosaClaro,
      title: "Blusa No Tule Rosa Claro",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
      images: [BlusaNoTuleRosaClaro],
    },
    {
      image: BlusaNoTuleRosa,
      title: "Blusa No Tule Rosa",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
      images: [BlusaNoTuleRosa],
    },
    {
      image: BlusaNoTulePreto,
      title: "Blusa No Tule Preto",
      price: 32.99,
      originalPrice: 49.99,
      sizes: ["P", "M"],
      images: [BlusaNoTulePreto],
    },
    {
      image: ConjuntoCaneladoBicolor,
      title: "Conjunto Canelado Bicolor",
      price: 159.99,
      originalPrice: 169.90,
      sizes: ["M", "G"],
      images: [ConjuntoCaneladoBicolor, ConjuntoCaneladoBicolor01],
    },
    {
      image: ConjuntoCaneladoRosa01,
      title: "Conjunto Canelado",
      price: 159.99,
      originalPrice: 169.90,
      sizes: ["M", "G"],
      images: [ConjuntoCaneladoRosa, ConjuntoCaneladoRosa01],
    },
    {
      image: ConjuntoPoliamidaAzulClaro01,
      title: "Conjunto Poliamida",
      price: 129.99,
      originalPrice: 139.90,
      sizes: ["M", "G"],
      images: [ConjuntoPoliamidaAzulClaro, ConjuntoPoliamidaAzulClaro01],
    },
    {
      image: ConjuntoPoliamidaBranco,
      title: "Conjunto Poliamida Duplo",
      price: 129.99,
      originalPrice: 139.90,
      sizes: ["M", "G"],
      images: [ConjuntoPoliamidaBranco, ConjuntoPoliamidaBranco01],
    },
    {
      image: ShortBeachTenis,
      title: "Short Beach Tênis Com Bolso",
      price: 99.90,
      originalPrice: 129.90,
      sizes: ["P", "M", "G"],
      images: [ShortBeachTenis],
    },
    {
      image: ShortBeachTenisBranco,
      title: "Short Beach Tênis",
      price: 99.90,
      originalPrice: 129.90,
      sizes: ["P", "M", "G"],
      images: [ShortBeachTenisBranco, ShortBeachTenisBranco01, ShortBeachTenisBranco03],
    },
    {
      image: azul3,
      title: "Macacão sem costura",
      price: 129.90,
      originalPrice: 139.90,
      sizes: ["P", "M", "G"],
      images: [azul3, azul4],
    },
    {
      image: AzulEscuro2,
      title: "Conjunto Canelado Bicolor",
      price: 159.99,
      originalPrice: 169.90,
      sizes: ["P", "M", "G"],
      images: [AzulEscuro2, AzulEscuro1, AzulEscuro3, AzulEscuro4],
    },
    {
      image: rosa1,
      title: "Conjunto Canelado",
      price: 139.99,
      originalPrice: 149.99,
      sizes: ["P", "M", "G"],
      images: [rosa1, rosa2, rosa3],
    },
    {
      image: verde3,
      title: "Conjunto Canelado Jacquard",
      price: 149.99,
      originalPrice: 169.90,
      sizes: ["P", "M", "G"],
      images: [verde , verde2, verde3, verde4],
    },
    {
      image: roxo,
      title: "Conjunto Canelado Poliamida",
      price: 119.99,
      originalPrice: 129.90,
      sizes: ["P", "M", "G"],
      images: [roxo, roxo2, roxo3],
    },
    {
      image: vermelho1,
      title: "Conjunto Canelado",
      price: 159.99,
      originalPrice: 169.90,
      sizes: ["P", "M", "G"],
      images: [vermelho1 , vermelho2, vermelho3, vermelho4],
    },
    {
      image: vinho4,
      title: "Macaquinho Sem Costura",
      price: 119.99,
      originalPrice: 129.90,
      sizes: ["P", "M", "G"],
      images: [vinho1, vinho2, vinho3, vinho4],
    },
    {
      image: AzulClaro1,
      title: "Conjunto Canelado Mula Manca",
      price: 159.99,
      originalPrice: 169.90,
      sizes: ["P", "M", "G"],
      images: [AzulClaro1, AzulClaro2, AzulClaro3, AzulClaro4, AzulClaro5, AzulClaro6],
    },
    {
      image: marrom1,
      title: "Macacão Longo Canelado",
      price: 169.99,
      sizes: ["P", "M", "G"],
      images: [marrom1, marrom2],
    },
    {
      image: lilas1,
      title: "Conjunto IZA Canelado",
      price: 159.99,
      originalPrice: 169.90,
      sizes: ["P", "M", "G"],
      images: [lilas1, lilas2, lilas3, lilas4, lilas5, lilas6, lilas7],
    },
    {
      image: roxo4,
      title: "Conjunto Canelado",
      price: 139.99,
      sizes: ["P", "M", "G"],
      images: [roxo4, roxo5, roxo6],
    },


    
  
  ];

  const bestSellers = [
    {
      image: BlusaNoTuleRosaClaro,
      title: "Blusa No Tule Rosa Claro",
      price: 32.99,
      sizes: ["P", "M"],
      images: [BlusaNoTuleRosaClaro],
    },
    {
      image: ConjuntoPreto,
      title: "Conjunto No Suplex",
      price: 69.90,
      sizes: ["P", "M"],
      images: [ConjuntoPreto],
    },
    {
      image: BlusaNoTuleAzulClaro,
      title: "Blusa No Tule Azul Claro",
      price: 32.99,
      sizes: ["P", "M"],
      images: [BlusaNoTuleAzulClaro],
    },
    {
      image: ConjuntoRosa,
      title: "Conjunto No Suplex",
      price: 69.90,
      sizes: ["P", "M"],
      images: [ConjuntoRosa],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground mb-4 md:mb-6">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
              <span className="text-xs md:text-sm font-medium">Nova Coleção 2025</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Vista sua melhor versão
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
              Cada peça é criada com tecidos de alta qualidade, cuidadosamente selecionados para oferecer conforto absoluto, excelente caimento e durabilidade, valorizando seu corpo e acompanhando você em todos os momentos — do treino intenso à rotina do dia a dia
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/colecoes" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8">
                  Compre Agora
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
              <Link to="/sobre" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary">
                  Conheça a Marca
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Destaques da Semana
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Peças selecionadas especialmente para você arrasar nos treinos
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Mais Vendidos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Os favoritos das nossas clientes
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {bestSellers.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            Pronta para se sentir poderosa?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90 px-4">
            Descubra a coleção completa e encontre o look perfeito para seus treinos
          </p>
          <Link to="/colecoes">
            <Button size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8">
              Ver Todas as Coleções
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

