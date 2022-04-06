import { ProductClient } from "./product_client";

type Item = {
  item: string;
  available: boolean;
};

export class ProductService {
  public productClient: ProductClient;
  constructor() {
    this.productClient = new ProductClient();
  }
  //target
  fetchAvailableItems = () => {
    // const availableItems = this.productClient
    //   .fetchItems()
    //   .then((items: Item[]) => items.filter((item) => item.available === true));
    // return availableItems;
    return this.productClient.fetchItems().then((items: Item[]) => items.filter((item) => item.available));
  };
}
