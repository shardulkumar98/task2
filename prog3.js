n = 4;
string = "";
for (i = 1; i <= n; i++) {
  for (j = 1; j <= n - i; j++) {
    string = string + " ";
  }
  for (k = 0; k < 2 * i - 1; k++) {
    string = string + "*";
  }
  string = string + "\n";
}
console.log(string);