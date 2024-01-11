import Grid from "@mui/material/Grid";
import MediaCard from "./components/MediaCard";
import { products } from "./products.json";

export default function App() {
  console.log(products);
  return (
    <div className="centered-container">
      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid item md={3}>
            <MediaCard
              title={item.title}
              image={item.images[0]}
              description={item.description}
              stock={item.stock}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
