// Matrix Multiplication
const a = [[1,1], [3,2]]
const b = [[1,2], [2,7]]
const c = [[],[]]
for(let i = 0; i < 2; i++)
{
    for(let j = 0; j < 2; j++)
    {
        c[i][j] = 0;
        for(let k = 0; k < 2; k++)
        {
            c[i][j] += a[i][k] * b[k][j]
        }
    }
}
console.log(c)