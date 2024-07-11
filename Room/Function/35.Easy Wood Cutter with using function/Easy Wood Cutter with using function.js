const yesno=()=> {
    let a = document.getElementById('num1').value;
    let result = document.getElementById('result');

    if (a % 3 == 0) {
        document.getElementById('result').innerHTML = `yes`;
    } else {
        document.getElementById('result').innerHTML = `no`;
    }
}
