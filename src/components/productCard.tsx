import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Images from "../assets/images/plastic-water-bottle-500x500.webp";
export default function productCard() {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia sx={{ height: 160 }} image={Images} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Water
        </Typography>
        <Typography variant="body2" color="text.secondary">
          10000 LAK
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add</Button>
      </CardActions>
    </Card>
  );
}
