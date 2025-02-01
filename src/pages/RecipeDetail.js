import React from 'react';

function RecipeDetail() {
  const recipe = {
    title: "Hyderabadi Dum Biryani",
    date: "January 25, 2025",
    content: "Step into the world of Hyderabad! Dum Biryani as we unveil the captivating history..."
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.date}</p>
      <p>{recipe.content}</p>
    </div>
  );
}

export default RecipeDetail;