// var tempArr=[];
// function check(number) {
//   for(var i= 0 ; i<number.length;i++){

//      var r,result=0,temp=number[i];
//     while (number[i] > 0) {
//       r = number[i] % 10;
//       number[i] = parseInt(number[i]/10);
//       result  = result*10+r;

//     }
//     if (result === temp){
//       tempArr.push(result)
//     }

//   }

//   }

// check(props.number);
// console.log(tempArr)

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
