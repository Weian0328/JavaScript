function bmi(height, weight) {
  return (weight / (height * height)).toFixed(2);
}
console.log(bmi(173, 60));
console.log(bmi(160, 48));
