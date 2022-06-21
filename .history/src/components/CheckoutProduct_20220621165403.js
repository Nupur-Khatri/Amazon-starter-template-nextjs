import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
}) {
  return (
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING -MIN_RATING + 1)) + MIN_RATING
    );
    <div className="grid grid-cols-5">
      <img src={image} height={200} width={200} objectFit="contain" />

      {/* MIddlesection  */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
