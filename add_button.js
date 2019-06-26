var readInput = function() {
    var input = document.getElementById('input1');
    console.log(input.value);
};

var btn2 = document.createElement('button');
btn2.innerHTML = "클릭";
var test = document.getElementById('test');
test.appendChild(btn2);
test.appendChild(document.createElement('br'));
btn2.onclick = readInput;