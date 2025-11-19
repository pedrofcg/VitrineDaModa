import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ProductDetailDialog from "./ProductDetailDialog";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  sizes?: string[]; // 👈 Adicionado suporte a tamanhos
}

const ProductCard = ({ image, title, price, originalPrice, sizes }: ProductCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleWhatsAppOrder = () => {
    const message = `Olá! Gostaria de comprar:\n\n*${title}*\nPreço: R$ ${price.toFixed(
      2
    )}`;
    const whatsappUrl = `https://wa.me/5562998247478?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
        <div
          className="relative overflow-hidden aspect-[3/4] bg-muted cursor-pointer"
          onClick={() => setIsDialogOpen(true)}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label="Adicionar aos favoritos"
          >
            <Heart className="h-4 w-4" />
          </button>

          {discount > 0 && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
              -{discount}%
            </div>
          )}
        </div>

        <CardContent
          className="p-4 cursor-pointer"
          onClick={() => setIsDialogOpen(true)}
        >
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
            {title}
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              R$ {price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* 🔹 Exibição dos tamanhos */}
          {sizes && sizes.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {sizes.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 border rounded-md text-sm hover:bg-primary/10 cursor-pointer"
                >
                  {size}
                </span>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="w-full flex justify-center">
            <Button
              className="
                w-full max-w-[400px]    /* limita largura máxima (ótimo pra desktop) */
                group/btn 
                flex items-center justify-center 
                gap-2
                text-xs sm:text-sm md:text-base
                py-2 sm:py-3
                px-3 sm:px-4
                rounded-xl sm:rounded-2xl
                transition-all duration-200
                text-center whitespace-normal break-words /* 🔹 permite quebra de linha */
              "
              variant="default"
              onClick={handleWhatsAppOrder}
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:animate-pulse flex-shrink-0" />
              <span className="text-wrap">Comprar no WhatsApp</span>
            </Button>
          </div>
        </CardFooter>
      </Card>

      <ProductDetailDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        image={image}
        title={title}
        price={price}
        originalPrice={originalPrice}
        sizes={sizes} // 👈 tamanhos passados ao modal
        id={""}
      />
    </>
  );
};

export default ProductCard;
