import { ProductClientInterface } from "../product_client";

export class StubProductClient implements ProductClientInterface {
  fetchItems = async () => {
    return [
      { item: "Milk", available: true },
      { item: "banana", available: false },
    ];
  };
}
