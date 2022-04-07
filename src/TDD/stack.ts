interface StackInterface<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

export class Stack<T> implements StackInterface<T> {
  private _size: number = 0;
  private _top?: StackNode<T>;
  private _capacity: number;
  constructor(capacity: number) {
    this._capacity = capacity;
  }
  get size() {
    return this._size;
  }
  push = (value: T) => {
    if (this._size === this._capacity) {
      throw new Error("stack is full");
    }
    const newNode: StackNode<T> = {
      value: value,
      next: this._top,
    };
    this._top = newNode;
    this._size++;
  };
  pop = (): T => {
    if (this._top == null) {
      throw new Error("stack is empty");
    }
    const topNode = this._top;
    this._top = topNode.next;
    this._size--;
    return topNode.value;
  };
}
