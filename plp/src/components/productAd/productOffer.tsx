import { Typography } from "@mui/material";

type ProductTitleProps = {
    shippingpromodesc: string;
};
export default function ProductOffer({shippingpromodesc}: ProductTitleProps) {
    return(
        <>
        <Typography variant="body2" color="success.main" mt={1}>
          {shippingpromodesc}
        </Typography>
        </>
    )}