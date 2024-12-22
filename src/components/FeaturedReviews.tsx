import React from "react";
import Box from "./BoxComponent";

interface Review {
  name: string;
  consultation: string;
  date: string;
  review: string;
}

const reviews: Review[] = [
  {
    name: "Alicent Hightower",
    consultation: "Skin care",
    date: "20 January 2023",
    review:
      "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods.",
  },
  {
    name: "Alicent Hightower",
    consultation: "Pregnancy",
    date: "20 January 2023",
    review:
      "Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods.",
  },
];

const FeaturedReviews: React.FC = () => {
  return (
    <Box title="Featured Reviews (102)">
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img
                  src="src/assets/reviewer-img.png"
                  alt="avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">{review.name}</p>
                  <p className="text-sm text-gray-500">
                    Consulted for {review.consultation}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">
                  &#9733;
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default FeaturedReviews;
