import React from 'react';
import '../styles/RecipeCard.css';

function RecipeCard({ title, date }) {
  return (
    <div className="recipe-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <a href={`/recipe/${title.toLowerCase().replace(/ /g, '-')}`}>Read more</a>
    </div>
  );
}

export default RecipeCard;