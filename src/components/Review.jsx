import React, { useState } from 'react';
import { reviewsData, itemsData } from '../assets/assets'; // Adjust path as necessary
 // Import CSS file

function Review() {
  const [reviews, setReviews] = useState(reviewsData); // State to hold reviews
  const [newReview, setNewReview] = useState({
    itemName: "", // To be selected by user
    rating: 1, // Default rating
    comment: "", // Review comment
    user: "New User" // Default user for new review (can be changed as per your app's logic)
  });

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const updatedReviews = [...reviews, { ...newReview, id: reviews.length + 1 }];
    setReviews(updatedReviews); // Update reviews state with new review
    setNewReview({ itemName: "", rating: 1, comment: "", user: "New User" }); // Reset form fields
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value
    }));
  };

  return (
    <div className="review-container">
      <h2>Reviews</h2>
      {/* Form for submitting a new review */}
      <form className="review-form" onSubmit={handleFormSubmit}>
        <label>
          Item:
          <select name="itemName" value={newReview.itemName} onChange={handleInputChange} required>
            <option value="">Select an item</option>
            {itemsData.map(item => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Rating:
          <input type="number" name="rating" value={newReview.rating} min="1" max="5" onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Comment:
          <textarea name="comment" value={newReview.comment} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Post Review</button>
      </form>

      {/* Displaying existing reviews */}
      <div className="review-list">
        {reviews.map(review => (
          <div key={review.id} className="review-item">
            <h3>{review.itemName}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
            <p>Posted by: {review.user}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
