function calculateTriangleArea(a, b, c)
{  
    // 检测是否是一个有效的三角形  
    if (!isValidTriangle(a, b, c))
    {  
        console.log("您输入的三条边长无法构成一个三角形！");
    }  
    
    else
    {
    // 计算半周长  
    var s = (a + b + c) / 2;  
  
    // 使用海伦公式计算面积  
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));  
    console.log(area);  
    }
}  

//检测是否是一个有效的三角形
function isValidTriangle(a, b, c)
{  
    return (a + b > c) && (a + c > b) && (b + c > a);  
}

//输入三角形三条边长
calculateTriangleArea(1, 2, 3);