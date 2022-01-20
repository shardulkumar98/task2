// fabonacci
var a = 0, b = 1, c;
console.log(a);
console.log(b);
for(i=0; i<=10; i++){   
    c = a + b;
    a = b;
    b = c;    
    console.log(c);
}