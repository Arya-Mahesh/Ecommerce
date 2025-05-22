import { CardMedia } from "@mui/material";

type ProductMediaProps = {
    src: string;
    alt: string;
    };

export default function ProductMedia({ src, alt }: ProductMediaProps) {
    return (
        <>
         <CardMedia
        component="img"
        height="180"
        image={src}
        alt={alt}
        sx={{ objectFit: 'contain', mb: 1 }}
      />
      </>
      
    );
    }
