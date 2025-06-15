
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Premium Leather Crossbody Bag",
    price: 11699,
    originalPrice: 15599,
    rating: 4.8,
    reviews: 124,
    description: "Crafted from genuine leather, this versatile crossbody bag combines style and functionality. Perfect for daily use with its spacious interior and adjustable strap.",
    features: [
      "100% Genuine Leather",
      "Adjustable Strap (24-48 inches)",
      "Multiple Interior Compartments",
      "Gold-tone Hardware",
      "Dust Bag Included"
    ],
    colors: ["Black", "Brown", "Tan"],
    sizes: ["Small", "Medium", "Large"],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400"
    ]
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Cotton Casual Shirt",
      price: 4549,
      originalPrice: 6499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6
    },
    {
      id: 3,
      name: "Canvas Backpack",
      price: 7149,
      originalPrice: 9749,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7
    },
    {
      id: 4,
      name: "Denim Jacket",
      price: 10399,
      originalPrice: 12999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5
    }
  ];

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color");
      return;
    }
    toast.success("Added to cart!");
  };

  const handleAddToWishlist = () => {
    toast.success("Added to wishlist!");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">StyleHub</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          Home / Bags / Crossbody Bags / {product.name}
        </nav>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-primary">KES {product.price.toLocaleString()}</span>
                <span className="text-xl text-muted-foreground line-through">KES {product.originalPrice.toLocaleString()}</span>
                <Badge variant="destructive">25% OFF</Badge>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Color</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.colors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={handleAddToCart}
                className="flex-1"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button 
                onClick={handleAddToWishlist}
                variant="outline" 
                size="lg"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="text-sm">Free shipping on orders over KES 6,500</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-blue-600" />
                <span className="text-sm">30-day return policy</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-purple-600" />
                <span className="text-sm">2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Card key={item.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < Math.floor(item.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                        <span className="ml-1 text-xs text-muted-foreground">{item.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">KES {item.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">KES {item.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 StyleHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
