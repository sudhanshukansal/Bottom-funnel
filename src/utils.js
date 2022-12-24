
export const CheckPalindrome = (number) => {
  var r,
    result = 0,
    temp = number;
  while (number > 0) {
    r = number % 10;
    number = parseInt(number / 10);
    result = result * 10 + r;
  }
  if (result === temp) {
    console.log(result);
    return true;
  }

  return false;
};
