// good code

import { ProductServiceDI } from "../product_service_with_DI";
import { StubProductClient } from "./stub_product_client";

describe("productService", () => {
  let productService: ProductServiceDI;

  beforeEach(() => {
    productService = new ProductServiceDI(new StubProductClient());
  });

  it("should filter out only available items", async () => {
    const availableItems = await productService.fetchAvailableItems();
    expect(availableItems.length).toBe(1);
    expect(availableItems).toEqual([{ item: "Milk", available: true }]);
  });
});
