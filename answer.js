// *** YOUR ANSWER BELOW ***
let str = "The numbers between 1 and 100 that are divisible by 6 or 7 but not both are:";

function findInts(n){
  while(n >= 1 && n <= 100){
    if((n % 6 === 0 && n % 7 !== 0) || (n % 7 === 0 && n % 6 !== 0)){
      str += ` ${n},`;
    }
    n++;
  }
  return str;
}

findInts (1);
