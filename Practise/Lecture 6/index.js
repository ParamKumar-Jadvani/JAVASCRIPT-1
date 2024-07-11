

// aanu output console ma aave che 
// const sum=()=>{
//     // value form input field 
//     let num1 =document.getElementById('num1').value;
//     let num2 =document.getElementById('num2').value;
//     console.log(num1,num2);
// }

// const sum=()=>{
//     // value form input field 
//     let num1 =document.getElementById('num1').value;
//     let num2 =document.getElementById('num2').value;
//     console.log(num1,num2);
//     // 
//     console.log(Number(num1)+Number(num2));
// }


const sum=()=>{
    // value form input field 
    let num1 =document.getElementById('num1').value;
    let num2 =document.getElementById('num2').value;
    console.log(num1,num2);
    // sum 
    let sum = Number(Number(num1+(num2)))
    document.getElementById('result').innerHTML=`sum of ${num1} and ${num2} total    ${sum}`;
}


// const sum =()=>{

//     // value form input field 
//     let num1 =document.getElementById('num1').value;
//     let num2 =document.getElementById('num2').value;

//     // sum 
//     let sum=Number(num1)+Number(num2)
//     // display to the  screen 
//     document.getElementById('result').innerHTML=`sum of num1 and num2 ${sum}`;
// }