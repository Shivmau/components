// src/components/ProfileCard.jsx

import React from "react";

function ProfileCard({ name, age, location }) {
  return (
    <div>
      <h3>name:{name}</h3>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default ProfileCard;
