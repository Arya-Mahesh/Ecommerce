import { products } from "../Data/productData";
import ProductCard from "@/components/productCard/productCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function ProductListPage() {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item key={product.uniqueID || index} xs={12} sm={6} md={4} lg={3}>
            <ProductCard data={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
