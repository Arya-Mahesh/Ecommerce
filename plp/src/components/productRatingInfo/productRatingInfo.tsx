import { Box, Rating, Typography } from "@mui/material";

type ProductRatingInfoProps = {
    ratingValue: number;
    reviewCount: number;
    partNumber: string;
};

export default function ProductRatingInfo({ratingValue, reviewCount, partNumber} : ProductRatingInfoProps) {
    return(
        <>
        <Box display="flex" alignItems="center" gap={1}   mb={2}>
        <Rating value={ratingValue} precision={0.5} readOnly size="small" />
        <Typography variant="body2" color="text.secondary"  >
          {ratingValue.toFixed(1)} ({reviewCount}) | Item # {partNumber}
        </Typography>
       </Box>
        </>
    )
}