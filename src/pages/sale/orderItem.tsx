import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Img from "../../assets/images/Lead Still shot - Top of page.jpg.webp";
export default function orderItem() {
  return (
    <Card sx={{ display: "flex", margin:1 }}>
      <CardMedia
        component="img"
        sx={{  width: 100, height: 100 }}
        image={Img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="body1">
            water
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Qty: 10
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            10,000 LAK
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
