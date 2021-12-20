import { useFetch } from "../../hooks/useFetch";

// import styles
import "./Home.css";

// components
import RecipeList from "../../components/RecipeList";

export default function Home() {
  const {
    data: recipies,
    error,
    isPending,
  } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <div className="loading">Loading...</div>}
      {recipies && <RecipeList recipes={recipies} />}
    </div>
  );
}
