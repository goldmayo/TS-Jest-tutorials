import { check } from "../check";

describe("check", () => {
  let onSuccess: jest.Mock<any, any>;
  let onFail: jest.Mock<any, any>;
  beforeEach(() => {
    // mock funtion
    onSuccess = jest.fn();
    onFail = jest.fn();
  });
  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);
    // onSuccess의 mock object가 호출된 횟수(calls.length)가 1번은 되어야 한다.
    // expect(onSuccess.mock.calls.length).toBe(1); 아래와 같은 의미
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // onSuccess의 mock object중 calls에 첫벗째로 호출된 함수(calls[0])의 첫번째 인자(calls[0][0])
    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("should call onFail when predicate is false", () => {
    check(() => false, onSuccess, onFail);
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith("no");
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
