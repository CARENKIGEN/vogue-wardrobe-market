
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-pink-50 rounded-lg overflow-hidden border border-pink-100">
        <img
          src={images[selectedImage]}
          alt={`${productName} ${selectedImage + 1}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Image Thumbnails */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`aspect-square bg-pink-50 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
              selectedImage === index ? 'border-pink-500' : 'border-pink-100 hover:border-pink-300'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image}
              alt={`${productName} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Carousel for Mobile */}
      <div className="md:hidden">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-square bg-pink-50 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${productName} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
