import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';


type ProductAttributeValue = {
  identifier: string;
  value: string;
  uniqueID: string;
};

type ProductAttribute = {
  identifier: string;
  usage: string;
  displayable: boolean;
  name: string;
  uniqueID: string;
  values: ProductAttributeValue[];
};

type DisplayPrice = {
  ribbon: string;
  offer_price_min: string;
  pricetype: string;
  is_Mapp: boolean;
  pricetype_selected: string;
};

type ProductCardProps = {
  data: {
    hasSingleSKU: boolean;
    manufacturer: string;
    resourceId: string;
    uniqueID: string;
    partNumber: string;
    shortDescription: string;
    catalogEntryTypeCode: string;
    productColorOptions: Record<string, unknown>;
    thumbnail: string;
    buyable: string;
    storeID: string;
    name: string;
    priceType: string;
    price: number;
    offerPriceMax: number;
    attributes: ProductAttribute[];
    offerPriceMin: number;
    displayPrice: DisplayPrice;
    newMultiVariant: string;
    stdDeliveryAvailable: boolean;
    pickupAvailable: boolean;
    defaultChildSKU: string;
    defaultChildCatentryId: string;
    seo_token_ntk: string;
    xf_thumbnail: string;
    mfPartNumber_ntk: string;
    xf_sku: string[];
    shippingpromodesc: string;
  };
};

export default function ProductCard({ data }: ProductCardProps) {
  const { name, price, thumbnail, partNumber } = data;

  return (
    <Card sx={{ maxWidth: 350, borderRadius: 2, boxShadow: 3, p: 2, position: 'relative' }}>
     
      <Box position="absolute" top={10} right={10}>
        <FavoriteBorderIcon fontSize="small" />
      </Box>

      <CardMedia
        component="img"
        height="180"
        image={thumbnail}
        alt={name}
        sx={{ objectFit: 'contain', mb: 1 }}
      />

      <CardContent sx={{ p: 0 }}>
        <Typography variant="caption" color="text.secondary">
          More options available
        </Typography>

        <Typography variant="subtitle2" color="error" fontWeight="bold" mb={1}>
          New!{' '}
          <Typography component="span" variant="body2" color="text.primary">
            {name}
          </Typography>
        </Typography>

        <Box display="flex" alignItems="center" gap={1}   mb={2}>
        <Rating value={0} precision={0.5} readOnly size="small" />
         <Typography variant="body2" color="text.secondary" >
          0.0 (0) | Item # {partNumber}
         </Typography>
       </Box>

        <Box display="flex" alignItems="center" gap={1} mt={1}  flexWrap="wrap" mb={3}>
          <LocalShippingIcon fontSize="small" />
          <Typography variant="body2" fontWeight="bold" sx={{ whiteSpace: 'nowrap' }} >
            Standard Delivery
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
            - Ships after Rx approval
          </Typography>
        </Box>

        <Typography variant="h5" fontWeight="bold" mt={1}>
          ₹{price.toFixed(2)}
        </Typography>

        <Typography variant="body2" color="success.main" mt={1}>
          Save <strong>40%</strong> on your first{' '}
          <Typography component="span" fontWeight="bold">
            Autoship
          </Typography>{' '}
          order with Standard Delivery
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={1}>
          Free Delivery for orders over ₹30.
        </Typography>
      </CardContent>

      <CardActions sx={{ mt: 2, px: 0 }}>
  <Button
    variant="contained"
    color="error"
    fullWidth
    sx={{
      borderRadius: '9999px',
       textTransform: 'none',
      fontWeight: 'bold',
      py: 1.2,
      backgroundColor: '#d32f2f',
      '&:hover': {
        backgroundColor: '#b71c1c',
      },
    }}
  >
    Choose options
  </Button>
</CardActions>
    </Card>
  );
}
