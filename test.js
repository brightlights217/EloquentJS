WHAT???

function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    console.log(base * power(base, exponent - 1));
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));