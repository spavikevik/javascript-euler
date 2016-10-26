var number = 600851475143;
var i = 2;

while (true) {
  if (i == number)
    break;
  else if (number % i == 0)
    number /= i;
  else 
    i++;
}

console.log(number);
