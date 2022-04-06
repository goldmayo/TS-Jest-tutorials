// bad code
import { ProductService } from "../product_service_no_DI";

const fetchItems = jest.fn(async () => [
  { item: "Milk", available: true },
  { item: "banana", available: false },
]);

jest.mock("../product_client", () => {
  return {
    ProductClient: jest.fn().mockImplementation(() => {
      return {
        fetchItems: fetchItems,
      };
    }),
  };
});

describe("productService", () => {
  let productService: ProductService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out only available items", async () => {
    const availableItems = await productService.fetchAvailableItems();
    expect(availableItems.length).toBe(1);
    expect(availableItems).toEqual([{ item: "Milk", available: true }]);
  });

  it("should fetchItems have been called once", async () => {
    const availableItems = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
