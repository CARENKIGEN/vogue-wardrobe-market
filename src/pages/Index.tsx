
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { ProductGallery } from "@/components/ProductGallery";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductReviews } from "@/components/ProductReviews";

const Index = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
    ]
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Cotton Casual Shirt",
      price: 4549,
      originalPrice: 6499,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      rating: 4.6,
      discount: "30% OFF"
    },
    {
      id: 3,
      name: "Canvas Backpack",
      price: 7149,
      originalPrice: 9749,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      rating: 4.7,
      discount: "27% OFF"
    },
    {
      id: 4,
      name: "Denim Jacket",
      price: 10399,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=300&fit=crop",
      rating: 4.5,
      discount: "20% OFF"
    },
    {
      id: 5,
      name: "Silk Blouse",
      price: 8299,
      originalPrice: 11999,
      image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=300&h=300&fit=crop",
      rating: 4.9,
      discount: "31% OFF"
    },
    {
      id: 6,
      name: "Leather Tote Bag",
      price: 13499,
      originalPrice: 17999,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop",
      rating: 4.8,
      discount: "25% OFF"
    },
    {
      id: 7,
      name: "Knit Sweater",
      price: 6799,
      originalPrice: 9499,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop",
      rating: 4.6,
      discount: "28% OFF"
    },
    {
      id: 8,
      name: "Designer Clutch",
      price: 5899,
      originalPrice: 7999,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop",
      rating: 4.7,
      discount: "26% OFF"
    },
    {
      id: 9,
      name: "Maxi Dress",
      price: 9299,
      originalPrice: 12499,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop",
      rating: 4.8,
      discount: "26% OFF"
    }
  ];

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color");
      return;
    }
    
    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
      quantity,
      cartId: Date.now()
    };
    
    setCartItems(prev => [...prev, cartItem]);
    toast.success("Added to cart!");
  };

  const handleAddToWishlist = () => {
    toast.success("Added to wishlist!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">Saraphina Lux</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-pink-50 hover:text-pink-600">
                <Heart className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-pink-50 hover:text-pink-600 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-pink-600">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-pink-600/70 mb-8">
          Home / Bags / Crossbody Bags / {product.name}
        </nav>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-pink-400 text-pink-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6 p-4 bg-pink-50 rounded-lg border border-pink-100">
                <span className="text-3xl font-bold text-pink-600">KES {product.price.toLocaleString()}</span>
                <span className="text-xl text-gray-500 line-through">KES {product.originalPrice.toLocaleString()}</span>
                <Badge className="bg-pink-600 hover:bg-pink-700">25% OFF</Badge>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-800">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Color</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger className="border-pink-200 focus:ring-pink-500 focus:border-pink-500">
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
                <label className="block text-sm font-medium mb-2 text-gray-700">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="border-pink-200 focus:ring-pink-500 focus:border-pink-500">
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
                <label className="block text-sm font-medium mb-2 text-gray-700">Quantity</label>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="border-pink-200 hover:bg-pink-50 hover:border-pink-300"
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="border-pink-200 hover:bg-pink-50 hover:border-pink-300"
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
                className="flex-1 bg-pink-600 hover:bg-pink-700 text-white"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button 
                onClick={handleAddToWishlist}
                variant="outline" 
                size="lg"
                className="border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="border border-pink-200 rounded-lg p-4 space-y-3 bg-pink-50/50">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-pink-600" />
                <span className="text-sm text-gray-700">Free shipping on orders over KES 6,500</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-pink-600" />
                <span className="text-sm text-gray-700">30-day return policy</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-pink-600" />
                <span className="text-sm text-gray-700">2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details and Reviews Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Material & Care</h4>
                    <p className="text-gray-600">Made from premium genuine leather. Clean with a soft, dry cloth. Store in dust bag when not in use.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Dimensions</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>Small: 8" W x 6" H x 2" D</li>
                      <li>Medium: 10" W x 7" H x 3" D</li>
                      <li>Large: 12" W x 8" H x 4" D</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <ProductReviews />
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-gray-800">You Might Also Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Card key={item.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-pink-100 hover:border-pink-200">
                <CardContent className="p-0">
                  <div className="aspect-square bg-pink-50 overflow-hidden rounded-t-lg relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 right-2 bg-pink-600 hover:bg-pink-700">
                      {item.discount}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-gray-800">{item.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < Math.floor(item.rating) ? 'fill-pink-400 text-pink-400' : 'text-gray-300'}`} />
                        ))}
                        <span className="ml-1 text-xs text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-pink-50 rounded">
                      <span className="font-bold text-pink-600 text-lg">KES {item.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 line-through">KES {item.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        setCartItems={setCartItems}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-pink-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Saraphina Lux. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
