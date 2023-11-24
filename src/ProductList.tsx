import { ProductType } from "./App";
import ProductItem from "./ProductItem";

interface PropsType {
  title?: string;
  items: ProductType[];
}
export default function ProductList({ items }: PropsType) {
  return (
    <ul className="list">
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}
