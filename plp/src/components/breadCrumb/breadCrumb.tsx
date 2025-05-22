import { Breadcrumbs, Typography, Link as MUILink, Box, Container } from "@mui/material";
import NextLink from "next/link";
import { useParams } from "next/navigation";

export default function Breadcrumb() {

    const params = useParams();
    console.log("Arya", params);
    const slug = params?.slug;

  return (
    <Box sx={{ py: 2, alignItems: "center", backgroundColor: "#000" }}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Breadcrumbs separator={<span style={{ color: "#fff" }}>/</span>} aria-label="breadcrumb">
          <MUILink
            component={NextLink}
            href="/"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            Home
          </MUILink>
          <MUILink
            component={NextLink}
            href="/plp"
            sx={{ color: "#fff", textDecoration: "none" }}
          >Plp</MUILink>
          <MUILink
            component={NextLink}
            href="/catalog"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            Catalog
          </MUILink>
          <Typography sx={{ color: "#fff" , fontWeight: "bold"}}>
            {slug? decodeURIComponent(slug.toString()) : ""}
          </Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
}
