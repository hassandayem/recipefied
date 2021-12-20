import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// import styles
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    `http://localhost:3000/recipes/${id}`
  );

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <div className="loading">Loading...</div>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
}
