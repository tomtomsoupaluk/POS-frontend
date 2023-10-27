import React from "react";
import ProductCard from "../../components/productCard";
import { Container, Grid, Paper, Typography } from "@mui/material";
type Props = {};
const products = [1, 2, 3, 4, 5];
const saleProduct = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{p:5}}>
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid key={product} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default saleProduct;
