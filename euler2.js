var current = 1;
var next = 2;
var temp;
var sum = 0;

while (current < 4000000) {
  if (current % 2 == 0)
    sum += current;
  
  temp = current + next;
  current = next;
  next = temp;
}

console.log(sum)
