export function lf(flower1: number, flower2: number): boolean {
  const isEven = (recivedNumber: number): boolean => recivedNumber % 2 !== 0;
  const bothEven = isEven(flower1) === true && isEven(flower2) === true;
  const oneEven = isEven(flower1) === true || isEven(flower2) === true;
  console.log(bothEven, oneEven);

  if (bothEven) {
    return false;
  } else if (oneEven) {
    return true;
  } else {
    return false;
  }
}

console.log(lf(3, 2));
