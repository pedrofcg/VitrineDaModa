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
              
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Outros Canais de Atendimento
              </h2>

              {/* WhatsApp */}
              <Card className="border-border hover:shadow-lg transition-all cursor-pointer">
                <a href="https://wa.me/5562996904380" target="_blank" rel="noopener noreferrer">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Fale conosco diretamente pelo WhatsApp
                      </p>
                      <p className="text-primary font-medium">+55 (62) 99690-4380</p>
                    </div>
                  </CardContent>
                </a>
              </Card>

              {/* Instagram */}
              <Card className="border-border hover:shadow-lg transition-all cursor-pointer">
                <a href="https://www.instagram.com/vitrine.damoda23" target="_blank" rel="noopener noreferrer">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Siga-nos para novidades e promoções
                      </p>
                      <p className="text-primary font-medium">@vitrine.damoda23</p>
                    </div>
                  </CardContent>
                </a>
              </Card>

              {/* E-mail */}
              

              {/* Address */}
              <Card className="border-border">
                
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
