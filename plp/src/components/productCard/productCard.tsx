type ProductCardProps = {
  data: {
    title: string;
    description: string;
  };
};

export default function ProductCard(props: ProductCardProps) {
  const { title, description } = props.data;
  return (
    <>
      <h1>This is {title}</h1>
      <h1>{description}</h1>
    </>
  );
}