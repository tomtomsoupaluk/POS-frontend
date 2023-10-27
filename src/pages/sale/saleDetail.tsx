import { Container, Divider, Paper, Typography, Grid } from "@mui/material";
import OrderItem from "./orderItem";
import { Box } from "@mui/system";

type Props = {};
const products = [1, 2, 3, 4, 5];
const saleDetial = ({}: Props) => {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h6">Order Details</Typography>
        <Divider />
        <Box
          height={"70vh"}
          overflow={"scroll"}
          padding={1}
          sx={{ backgroundColor: "#d3d3d3" }}
        >
          {products.map((product) => (
            <OrderItem />
          ))}
        </Box>
        <br />
        <Divider />
        <Box display={"flex"}>
          <Box flex={1}>
            <Typography variant="body1">Subtotal:</Typography>
            <Typography variant="body1">VAT:</Typography>
            <Typography variant="h6">total:</Typography>
          </Box>

          <Box
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-end"}
          >
            <Typography variant="body1">100,000 LAK</Typography>
            <Typography variant="body1">7%</Typography>
            <Typography variant="h6">107,000 LAK</Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default saleDetial;
