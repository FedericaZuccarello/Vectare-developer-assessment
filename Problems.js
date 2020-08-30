//PROBLEM 1
//Time spent 6m
{   
    function Problem1() {
        var i = 0;
        var sum = 0;
        
        while(i<100){
            if(i%3 == 0 || i%5 == 0){
                sum = sum + i;
                console.log("[Multiples of 3 or 5: " + i  + ", sum: " + sum + "]"); 
            }
            i++;
        }
        document.getElementById('textbox1').value = sum;
    }
}
//PROBLEM 2
//Time spent 17m
{
    function Problem2() {
        var n= 500;
        var arr = [0, 1];
        var num = 0;
        var sum = 0;

        for (var i = 2; i < n + 1; i++){
            num=arr[i - 2] + arr[i -1];
            if(num%2 == 0){
                sum = sum + num;
            }
            if (num>4000000){
                console.log("Value exceed four million!");
                break;
            }
            console.log("[Fibonacci num: " + num  + ", sum : " + sum + "]"); 
            arr.push(num)
        }
        document.getElementById('textbox2').value = sum;
    }
}

//PROBLEM 3
//Time spent 1h7m
//When a number doesn’t change it’ s value or meaning even after rotation 
//from left to right or vice versa, then the number is palindrome number.
{
    function Problem3() {
        var number;
        for(var i=100; i<999; i++){
            for(var j=100; j<999; j++){

                number=i*j;

                var rem, temp, final = 0;
                temp = number;
                while(number>0)
                {
                    rem = number%10;
                    number = parseInt(number/10);
                    final = final*10+rem;
                    if(final==temp)
                    {
                        console.log("["+ i + "x"+ j + "= " + temp + "]");
                        document.getElementById('textbox3').value = "["+ i + "x"+ j + " = " + temp + "]";                        
                    }
                }
            }
        }
    }

}

//PROBLEM 4
//Time spent 15m
{
    function Problem4() {

        var number;
        var maxNum= 240000000;
        var divisible = 20;
        for(var i=1; i<maxNum; i++){
            
            var arrayNum = [];
            for(var j=1; j<=divisible; j++){
                number=i%j;
                if(number == 0){
                    arrayNum.push(number);
                    if(arrayNum.length == divisible){
                        //console.log("["+ i + "/"+ j + " = " + number + "]");
                        document.getElementById('textbox4').value = "["+ i + "/"+ j + " = " + number + "]";
                        break;
                    }
                }
            }
        }
    }
}
  
//PROBLEM 5
//Time spent 24m
{
    function Problem5() {
        var num = 1;
        var limit = 1001;
        var arrayNum = [];
        while(num<30000){
            div = 2;
            count = 0;
            while(div<=2 && count == 0){
                if(num%div==0){
                    count+=1;
                }
                div+=1;
            }
            if (count == 0){
                console.log(arrayNum);
                arrayNum.push(num);
                if(arrayNum.length===limit+1){
                    console.log(num);
                    document.getElementById('textbox5').value = num;
                    break;
                }
            }
            num++;
        }
        
    }
}

//PROBLEM 6
//Time spent 41m
{
    function Problem6() {
        var gridSize = 20;
        var grid = [gridSize+1, gridSize+1];
        
        for (var i = 0; i < gridSize; i++) { 
            grid[i, gridSize] = 1; grid[gridSize,i] = 1; 
        }
        
        for (var i = gridSize - 1; i >= 0; i--) {
            for (var j = gridSize - 1; j >= 0; j--) {
                grid[i, j] = grid[i+1, j] + grid[i, j+1];
                console.log(grid);
                // return the top element 
                // which stores the maximum sum
                document.getElementById('textbox6').value = grid[0];
            }
        }
    }
}

//PROBLEM 7
//Time spent 2h  
//at two hours I stopped programming.
//it only remains to fix the 'readFile' function. 
//Using the created triangle named 'tri' works.
{
    function Problem7() {
        var N = 3; 
        
        //var tri = readFile('triangle.txt');
        var tri= [ [1, 0, 0],[4, 8, 0],[1, 5, 3] ]; 
        
        document.getElementById('textbox7').value = maxPathSum(tri, 2, 2);
    
    } 
    // Function for finding maximum sum 
    function maxPathSum(tri, m,  n) 
    { 
        // loop for bottom-up calculation 
        for (var i = m - 1; i >= 0; i--) 
        { 
            for (var j = 0; j <= i; j++) 
            { 
                // for each element, check both 
                // elements just below the number 
                // and below right to the number 
                // add the maximum of them to it 
                if (tri[i + 1][j] > tri[i + 1][j + 1]) 
                    tri[i][j] += tri[i + 1][j]; 
                else
                    tri[i][j] += tri[i + 1][j + 1]; 
            } 
        }
        // return the top element 
        // which stores the maximum sum 
        return tri[0][0]; 
    }
    function readFile(file)
    {
        var f = new XMLHttpRequest();
        f.open("GET", file, false);
        f.onreadystatechange = function ()
        {
            if(f.readyState === 4)
            {
                if(f.status === 200 || f.status == 0)
                {
                    var res = JSON.parse(f.responseText)
                    alert(res);
                }
            }
        }
        f.send(null);
    } 
}

