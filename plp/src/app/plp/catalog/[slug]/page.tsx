import ProductCard from "@/components/productCard/productCard";

export default function ProductPage( ) {

  const props  = {
    title: "Arya",
    description: "Hi ",
  }
  return (
    <>
      <ProductCard data={props}/>
    </>
  );
}