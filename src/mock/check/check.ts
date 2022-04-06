interface PredicateInterface {
  (): boolean;
}
interface OnSuccessInterface {
  (message: string): boolean;
}
interface OnFailInterface {
  (message: string): boolean;
}
interface CheckInterface {
  (predicate: PredicateInterface, onSuccess: OnSuccessInterface, onFail: OnFailInterface): void;
}

export const check: CheckInterface = (
  predicate: PredicateInterface,
  onSuccess: OnSuccessInterface,
  onFail: OnFailInterface
) => {
  if (predicate()) {
    onSuccess("yes");
  } else {
    onFail("no");
  }
};
