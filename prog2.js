// Matrix Multiplication
const a = [[1,2], [3,4]]
const b = [[1,4], [2,7]]
const c = [[],[]]
for(let i = 0; i < 2; i++)
{
    for(let j = 0; j < 2; j++)
    {
        c[i][j] = 0;
        for(let k = 0; k < y; k++)
        {
            c[i][j] = c[i][j] + a[i][k] * b[k][j]
        }
    }
}
console.log(c)