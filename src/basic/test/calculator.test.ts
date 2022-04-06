import { Calculator } from "../calculator";

describe("Calculator", () => {
  let cal: Calculator;
  beforeEach(() => {
    cal = new Calculator();
  });

  it("init with 0", () => {
    expect(cal.value).toBe(0);
  });
  it("set value to 3", () => {
    cal.set(3);
    expect(cal.value).toBe(3);
  });
  it("clear to 0", () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });
  describe("add", () => {
    it("add 4 to 0", () => {
      cal.add(2);
      expect(cal.value).toBe(2);
    });
    it("add should throw an error if value is greater than 100", () => {
      expect(() => {
        cal.add(1000);
      }).toThrow("value can not be greater than 100");
    });
  });
  it("subtract 1 to 0", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });
  it("multiply 2 to 2", () => {
    cal.set(2);
    cal.multiply(2);
    expect(cal.value).toBe(4);
  });
  describe("divide", () => {
    it("0/0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1/0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("divide 2 to 2", () => {
      cal.set(2);
      cal.divide(2);
      expect(cal.value).toBe(1);
    });
  });
});
