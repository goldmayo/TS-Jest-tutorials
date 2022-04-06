import { fetchProduct } from "../async";

describe("Async", () => {
  it("async-done success not prefered", (done) => {
    fetchProduct().then((data) => {
      expect(data).toEqual({ item: "milk", price: 200 });
      done();
    });
  });
  it("async-return success prefered", () => {
    return fetchProduct().then((data) => {
      expect(data).toEqual({ item: "milk", price: 200 });
    });
  });
  it("async-await success prefered", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "milk", price: 200 });
  });

  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({ item: "milk", price: 200 });
  });
  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
