import { useEffect, useState, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";

// import styles
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setcookingTime] = useState("");
  const [newIngredient, setNewIgnredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const ingredientInput = useRef(null);
  const history = useHistory();

  const { data, error, postData } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    });
  };

  useEffect(() => {
    if (data && !error) {
      history.push("/");
    }
  }, [data, history, error]);

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredient) => [...prevIngredient, ing]);
    }
    setNewIgnredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIgnredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd}>Add</button>
          </div>
        </label>
        <p>
          Current Ingredients:{" "}
          {ingredients.map((ingredient) => (
            <span key={ingredient}>{ingredient}, </span>
          ))}
        </p>

        <label>
          <span>Recipe method</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Coocking time</span>
          <input
            type="number"
            onChange={(e) => setcookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
