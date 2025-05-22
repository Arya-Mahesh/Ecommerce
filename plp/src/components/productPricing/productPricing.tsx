import { Typography } from "@mui/material";

type ProductTitleProps = {
    price: number;
};
export default function ProductPricing({price}: ProductTitleProps) {
    return(
        <>
        <Typography variant="h5" fontWeight="bold" mt={1}>
          ${price.toFixed(2)}
        </Typography>
        </>
    )
}