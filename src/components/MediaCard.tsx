import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  image: string;
  description: string;
  stock: number;
}

export default function MediaCard({ title, image, description, stock }: Props) {
  const isInStock = stock > 0;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent sx={{ height: 180 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="success" disabled={!isInStock}>
          {isInStock ? `There are ${stock} left` : "Out of stock"}
        </Button>
      </CardActions>
    </Card>
  );
}
