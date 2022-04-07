import { ProductClientInterface } from "./product_client";

type Item = {
  item: string;
  available: boolean;
};

export class ProductServiceDI {
  public productClient;
  constructor(productClient: ProductClientInterface) {
    this.productClient = productClient;
  }
  fetchAvailableItems = async () => {
    return this.productClient.fetchItems().then((items: Item[]) => items.filter((item) => item.available));
  };
}
