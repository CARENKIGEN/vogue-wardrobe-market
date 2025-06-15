
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2024-01-15",
    title: "Perfect everyday bag!",
    content: "I absolutely love this crossbody bag! The leather quality is exceptional and it goes with everything. The size is perfect for daily essentials.",
    verified: true
  },
  {
    id: 2,
    author: "Grace K.",
    rating: 4,
    date: "2024-01-10",
    title: "Great quality but smaller than expected",
    content: "Beautiful bag with excellent craftsmanship. The leather feels premium and the hardware is solid. Just wish it was slightly larger.",
    verified: true
  },
  {
    id: 3,
    author: "Mary W.",
    rating: 5,
    date: "2024-01-08",
    title: "Exceeded my expectations",
    content: "This bag is even more beautiful in person. The brown color is rich and the adjustable strap is very convenient. Highly recommend!",
    verified: false
  },
  {
    id: 4,
    author: "Jane D.",
    rating: 4,
    date: "2024-01-05",
    title: "Good value for money",
    content: "Really happy with this purchase. The bag is well-made and the price was reasonable. The delivery was also very fast.",
    verified: true
  }
];

const ratingDistribution = [
  { stars: 5, count: 78, percentage: 63 },
  { stars: 4, count: 32, percentage: 26 },
  { stars: 3, count: 10, percentage: 8 },
  { stars: 2, count: 3, percentage: 2 },
  { stars: 1, count: 1, percentage: 1 }
];

export const ProductReviews = () => {
  const averageRating = 4.8;
  const totalReviews = 124;

  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Overall Rating */}
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">{averageRating}</div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(averageRating) ? 'fill-pink-400 text-pink-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600">Based on {totalReviews} reviews</p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-12">
                    <span className="text-sm">{item.stars}</span>
                    <Star className="h-3 w-3 fill-gray-300 text-gray-300" />
                  </div>
                  <Progress value={item.percentage} className="flex-1 h-2" />
                  <span className="text-sm text-gray-600 w-8">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{review.author}</span>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs bg-green-50 text-green-700">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'fill-pink-400 text-pink-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              
              <h4 className="font-semibold mb-2">{review.title}</h4>
              <p className="text-gray-600 leading-relaxed">{review.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Write Review Button */}
      <div className="text-center pt-6">
        <Button 
          variant="outline" 
          className="border-pink-200 text-pink-600 hover:bg-pink-50"
        >
          Write a Review
        </Button>
      </div>
    </div>
  );
};
