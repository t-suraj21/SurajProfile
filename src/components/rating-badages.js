import React from "react";
import './RatingBadges.css'; // Optional: CSS file for styling

const RatingBadge = () => {
  return (
    <div className="rating-badge">
      <div className="avatars">
        <div className="avatar">
          <img
            src="/placeholder.svg"
            alt="User avatar"
            className="avatar-img"
          />
        </div>
        <div className="avatar">
          <img
            src="/placeholder.svg"
            alt="User avatar"
            className="avatar-img"
          />
        </div>
      </div>
      <div className="rating">4.9</div>
    </div>
  );
};

export default RatingBadge;
