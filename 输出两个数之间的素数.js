function printPrimes(start, end)
{  
    // 检查输入是否有效  
    if (start < 1 || end < start)
    {  
        console.log('输入错误，“start”必须大于或等于1，“end”必须大于等于“start”。');  
        return;  
    }  
  
    // 打印所有素数  
    for (let i = start; i <= end; i++)
    {  
        if (isPrime(i))
        {  
            console.log(i);  
        }  
    }  
}  
  
// 检查一个数是否为素数  
function isPrime(num)
{  
    if (num < 2)
    {  
        return false;  
    }  
    for (let i = 2; i <= Math.sqrt(num); i++)
    {  
        if (num % i == 0)
        {  
            return false;  
        }  
    }  
    return true;
}

printPrimes(777, 1000)