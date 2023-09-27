import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import StarRatingDataService from '../services/starRating.service';

export function StarRatingComponent() {
  const [, setRating] = useState<any | null>(null)
  const [businessId, setBusinessId] = useState<any | null>(null)
  const [, setSubmitted] = useState(false); 

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    var data = {
      starRating: rate,
      businessId: businessId
    };

    StarRatingDataService.create(data)
      .then(response => {
        setRating({
          rating: response.data.starRating
        });
        setBusinessId({
          businessId: response.data.businessId
        })
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
      />
    </div>
  )
}