import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Depoimentos = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Simplesmente apaixonada! As leggings são super confortáveis e não marcam nada. Me sinto incrível em todos os treinos.",
      date: "Há 2 dias",
    },
    {
      name: "Fernanda Oliveira",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Melhor compra que fiz! Além de lindo, o conjunto é super durável. Já lavei várias vezes e continua como novo. Recomendo de olhos fechados!",
      date: "Há 1 semana",
    },
    {
      name: "Amanda Santos",
      location: "Brasília, DF",
      rating: 5,
      text: "Estou viciada! Os conjuntos têm um caimento perfeito e oferecem ótimo suporte. Me sinto empoderada e confiante.",
      date: "Há 1 semana",
    },
    
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              O Que Nossas Clientes Dizem
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milhares de mulheres já se apaixonaram pela Vitrine Da Moda. Veja o que elas têm a dizer!
            </p>
          </div>

          {/* Rating Summary */}
          <div className="bg-muted rounded-3xl p-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">5.0 de 5</p>
            <p className="text-muted-foreground">Baseado em avaliações</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <section className="mt-20 bg-gradient-to-r from-primary to-primary-hover rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Junte-se às Milhares de Mulheres Satisfeitas
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Experimente a diferença da Vitrine Da Moda e entenda por que somos a marca favorita de quem ama fitness e estilo
            </p>
            <a href="/colecoes">
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                Comprar Agora
              </button>
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Depoimentos;
