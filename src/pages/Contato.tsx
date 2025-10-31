import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Retornaremos em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar! Envie sua mensagem ou fale conosco pelos nossos canais
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Envie sua Mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Como podemos ajudar?"
                        className="w-full min-h-[150px]"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Outros Canais de Atendimento
              </h2>

              {/* WhatsApp */}
              <Card className="border-border hover:shadow-lg transition-all cursor-pointer">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Fale conosco diretamente pelo WhatsApp
                      </p>
                      <p className="text-primary font-medium">+55 (11) 99999-9999</p>
                    </div>
                  </CardContent>
                </a>
              </Card>

              {/* Instagram */}
              <Card className="border-border hover:shadow-lg transition-all cursor-pointer">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Siga-nos para novidades e promoções
                      </p>
                      <p className="text-primary font-medium">@vitrinedamoda</p>
                    </div>
                  </CardContent>
                </a>
              </Card>

              {/* E-mail */}
              <Card className="border-border hover:shadow-lg transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Envie um e-mail para nosso suporte
                    </p>
                    <p className="text-primary font-medium">contato@vitrinedamoda.com.br</p>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Visite nossa loja física
                    </p>
                    <p className="text-foreground">
                      Av. Paulista, 1000 - São Paulo, SP
                      <br />
                      CEP: 01310-100
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Seg a Sex: 9h às 18h
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
