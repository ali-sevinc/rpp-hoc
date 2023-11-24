import { faker } from "@faker-js/faker";

import List from "./List";
import ProductItem from "./ProductItem";
import CompanyItem from "./CompanyItem";

import withToggles from "./HOC";
import ProductList from "./ProductList";

import "./index.css";

export interface ProductType {
  productName: string;
  description: string;
  price: string;
}
export interface Companytype {
  companyName: string;
  phrase: string;
}

const products: ProductType[] = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

const companies: Companytype[] = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

const ProductListWithToggles = withToggles(ProductList);

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      <div className="col-2">
        <List
          title="Products"
          items={products}
          render={(product: ProductType) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />
        <List
          title="Companies"
          items={companies}
          render={(company: Companytype) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={true}
            />
          )}
        />
      </div>
      <div className="col-2">
        <ProductList title="Products HOC" items={products} />
        <ProductListWithToggles title="Products HOC" items={products} />
      </div>
    </div>
  );
}
