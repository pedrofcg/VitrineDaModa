import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Target, Award } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Sobre a Vitrine Da Moda
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais do que roupas de academia, somos um movimento que inspira mulheres a se sentirem poderosas dentro e fora da academia.
            </p>
          </div>

          {/* Nossa História */}
          <section className="mb-20">
            <div className="bg-muted rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Nossa História</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  A Vitrine Da Moda nasceu do sonho de criar roupas de academia que não fossem apenas funcionais, mas que fizessem cada mulher se sentir confiante, elegante e poderosa.
                </p>
                <p className="text-muted-foreground mb-4">
                  Acreditamos que a moda fitness vai além do desempenho - ela é uma forma de expressão, uma declaração de autoconfiança e um convite para você abraçar sua melhor versão todos os dias.
                </p>
                <p className="text-muted-foreground">
                  Cada peça é cuidadosamente desenvolvida pensando no conforto, na qualidade e no estilo que toda mulher moderna merece.
                </p>
              </div>
            </div>
          </section>

          {/* Missão e Valores */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Nossa Missão e Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Missão */}
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Inspirar mulheres a se sentirem poderosas, confiantes e estilosas em cada movimento, dentro e fora da academia.
                </p>
              </div>

              {/* Qualidade */}
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Qualidade</h3>
                <p className="text-muted-foreground">
                  Tecidos de alta performance, costuras reforçadas e modelagens que valorizam o corpo feminino.
                </p>
              </div>

              {/* Autoestima */}
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Autoestima</h3>
                <p className="text-muted-foreground">
                  Acreditamos que quando você se sente bem com o que veste, nada pode te parar.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-primary to-primary-hover rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Faça Parte do Movimento
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Junte-se a milhares de mulheres que já escolheram a Vitrine Da Moda para transformar seus treinos em momentos de empoderamento
            </p>
            <a href="/colecoes">
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                Conheça Nossas Coleções
              </button>
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
