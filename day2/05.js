function leap_year(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "閏年";
  }
  return "平年";
}

console.log(leap_year(2020));
