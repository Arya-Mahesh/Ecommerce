import { Typography } from "@mui/material";

type ProductTitleProps = {
    name : string;
}
export default function ProductTitle({name} : ProductTitleProps) {
    return(
        <>
        <Typography variant="subtitle2" color="error" fontWeight="bold" mb={1}>
          New!{' '}
          <Typography component="span" variant="body2" color="text.primary">
            {name}
          </Typography>
        </Typography>
        </>
    )
}