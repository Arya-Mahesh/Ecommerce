import { Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function FavouriteIcon(){
    return(
         <Box position="absolute" top={10} right={10}>
        <FavoriteBorderIcon fontSize="small" />
      </Box>
    )
}
