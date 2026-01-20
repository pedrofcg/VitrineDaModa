import { useState } from "react";
import { MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ProductDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id: string;
  image: string;
  images?: string[];
  title: string;
  price: number;
  originalPrice?: number;
  sizes?: string[];
  color?: string;
  stock?: number;
}

const ProductDetailDialog = ({
  open,
  onOpenChange,
  id,
  image,
  images,
  title,
  price,
  originalPrice,
  sizes,
  color,
  stock,
}: ProductDetailDialogProps) => {
  // Usa apenas os tamanhos informados no produto
  const availableSizes = sizes && sizes.length > 0 ? sizes : [];
  const [selectedSize, setSelectedSize] = useState(
    availableSizes.length > 0 ? availableSizes[0] : "Tamanho Único"
  );

  // Configurar imagens da galeria
  const galleryImages = images && images.length > 0 ? images : [image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleWhatsAppOrder = () => {
    let message = `Olá! Gostaria de comprar:\n\n*${title}*\nPreço: R$ ${price.toFixed(
      2
    )}`;
    if (selectedSize) {
      message += `\nTamanho: ${selectedSize}`;
    }
    const whatsappUrl = `https://wa.me/5562996904380?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-3 top-3 md:right-4 md:top-4 z-10 rounded-full bg-background/80 backdrop-blur-sm p-1.5 md:p-2 hover:bg-background transition-colors"
          aria-label="Fechar"
        >
          <X className="h-3 w-3 md:h-4 md:w-4" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Seção da Imagem */}
          <div className="relative aspect-square bg-muted flex flex-col">
            {/* Imagem Principal */}
            <div className="flex-1 relative">
              <img
                src={galleryImages[currentImageIndex]}
                alt={title}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  -{discount}%
                </div>
              )}

              {/* Navegação de Imagens */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={goToPreviousImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all z-5"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={goToNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all z-5"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Miniaturas das Imagens */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2 p-3 bg-muted border-t overflow-x-auto">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                    aria-label={`Imagem ${index + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Seção de Detalhes */}
          <div className="p-4 md:p-6 flex flex-col justify-between">
            <div>
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                  {title}
                </DialogTitle>
              </DialogHeader>

              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  R$ {price.toFixed(2)}
                </span>
                {originalPrice && (
                  <span className="text-base md:text-lg text-muted-foreground line-through">
                    R$ {originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Exibe seletor de tamanhos apenas se houver */}
              {availableSizes.length > 0 ? (
                <div className="mb-4 md:mb-6">
                  <Label className="text-sm md:text-base font-semibold mb-2 md:mb-3 block">
                    Selecione o Tamanho
                  </Label>
                  <RadioGroup
                    value={selectedSize}
                    onValueChange={setSelectedSize}
                    className="flex gap-3 flex-wrap"
                  >
                    {availableSizes.map((size) => (
                      <div key={size} className="flex items-center">
                        <RadioGroupItem
                          value={size}
                          id={`size-${size}`}
                          className="sr-only peer"
                        />
                        <Label
                          htmlFor={`size-${size}`}
                          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg border-2 border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground hover:border-primary/50 font-semibold text-sm md:text-base"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ) : (
                <div className="mb-4 md:mb-6">
                  <Label className="text-sm md:text-base font-semibold mb-2 md:mb-3 block">
                    Tamanho
                  </Label>
                  <p className="text-sm md:text-base font-medium text-muted-foreground">
                    Tamanho Único
                  </p>
                </div>
              )}

              {/* Detalhes do Produto */}
              <div className="mb-4 md:mb-6 space-y-2">
                {color && (
                  <p className="text-xs md:text-sm text-muted-foreground">
                    <span className="font-semibold">Cor:</span> {color}
                  </p>
                )}
                {stock !== undefined && (
                  <p className="text-xs md:text-sm text-muted-foreground">
                    <span className="font-semibold">Estoque:</span> {stock}{" "}
                    unidades disponíveis
                  </p>
                )}
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Peça confeccionada com tecido de alta qualidade, proporcionando conforto e liberdade de movimento durante seus treinos.
                </p>
              </div>
            </div>

            {/* Botão do WhatsApp */}
            <Button
              className="w-full h-11 md:h-12 text-sm md:text-base group/btn"
              size="lg"
              onClick={handleWhatsAppOrder}
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover/btn:animate-pulse" />
              Comprar no WhatsApp - {selectedSize}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailDialog;
