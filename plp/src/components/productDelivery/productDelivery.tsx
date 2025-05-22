    import { DirectionsBike } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeliveryDining from '@mui/icons-material/LocalMall';

type ProductDeliveryProps = {
  isPickupAvailable: boolean;
  isStandardDelivery: boolean;
  isSameDayDelivery: boolean;
};

export default function ProductDelivery({isPickupAvailable, isStandardDelivery, isSameDayDelivery}: ProductDeliveryProps) {

    return(
    <>
    <Box display="flex" flexDirection="column" gap={1} mt={1} mb={3} ml={0}>         

            {isPickupAvailable && (
              <Box display="flex" alignItems="center" gap={1}>
                <DirectionsBike fontSize="small" />
                <Typography variant="body2" fontWeight="bold">
                  Pickup 
                </Typography>
                    <Box component="span"  fontWeight="light" fontSize="10px">•</Box>

                <Typography variant="caption" color="success.main">
                   <Box component="span" fontWeight="bold" display="inline">
                         Free
                    </Box>{" "}available today
                </Typography>
              </Box>
            )}


            {isStandardDelivery && (
           <Box display="flex" alignItems="center" gap={1}>
            <LocalShippingIcon fontSize="small" />
            <Typography variant="body2" fontWeight="bold">
                Standard Delivery
            </Typography>
           </Box>
         )}

            {isSameDayDelivery && (
            <Box display="flex" alignItems="center" gap={1}>
            <DeliveryDining fontSize="small" />
            <Typography variant="body2" fontWeight="bold">
              Same Day Delivery
            </Typography>
            </Box>
          )}


    </Box>
</>
    )
}