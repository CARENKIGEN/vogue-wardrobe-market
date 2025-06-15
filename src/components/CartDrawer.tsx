
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface CartItem {
  id: number;
  name: string;
  price: number;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  images: string[];
  cartId: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
}

export const CartDrawer = ({ isOpen, onClose, cartItems, setCartItems }: CartDrawerProps) => {
  const removeFromCart = (cartId: number) => {
    setCartItems(cartItems.filter(item => item.cartId !== cartId));
    toast.success("Item removed from cart");
  };

  const updateQuantity = (cartId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.cartId === cartId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    toast.success("Checkout functionality coming soon!");
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Shopping Cart
            {cartItems.length > 0 && (
              <Badge className="bg-pink-600">{cartItems.length}</Badge>
            )}
          </SheetTitle>
          <SheetDescription>
            {cartItems.length === 0 ? "Your cart is empty" : `${cartItems.length} item(s) in your cart`}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <ShoppingCart className="h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-1">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.cartId} className="flex gap-4 p-4 border border-pink-100 rounded-lg">
                  <div className="w-20 h-20 bg-pink-50 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.selectedColor} • {item.selectedSize}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 border-pink-200"
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 border-pink-200"
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeFromCart(item.cartId)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="font-semibold text-pink-600 mt-2">
                      KES {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
              
              <Separator />
              
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-xl font-bold text-pink-600">
                    KES {getTotalPrice().toLocaleString()}
                  </span>
                </div>
                
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-pink-600 hover:bg-pink-700"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={onClose}
                  className="w-full border-pink-200 text-pink-600 hover:bg-pink-50"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
