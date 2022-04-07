import { Stack } from "../stack";

describe("Stack", () => {
  //stack 생성자에 용량 인자 없이 생성
  it("check stack constructor get 0 capacity", () => {
    const stack = new Stack(0);
    const noCapacity = () => {
      stack.push("any capacity?");
    };
    expect(noCapacity).toThrow(new Error("stack is full"));
  });
  describe("push", () => {
    it("check push over the stack size", () => {
      const stack = new Stack(1);
      const overCapacity = () => {
        stack.push(1);
        stack.push(2);
      };
      expect(overCapacity).toThrow(new Error("stack is full"));
    });

    it("check push data to stack", () => {
      const stack = new Stack(1);
      stack.push(22);
      expect(stack.size).toBe(1);
    });
  });
  describe("pop", () => {
    it("check pop empty stack", () => {
      const stack = new Stack(0);
      const popEmptyStack = () => {
        stack.pop();
      };
      expect(popEmptyStack).toThrow(new Error("stack is empty"));
    });

    it("check pop data from stack", () => {
      const stack = new Stack(2);
      stack.push("foo");
      stack.push("bar");
      const poped = stack.pop();
      expect(poped).toBe("bar");
      expect(stack.size).toBe(1);
    });
  });
});
