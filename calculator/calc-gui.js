// JS calculator
// by TTOzzi
// 2019.07.15

// input object
// 입력을 담당하는 객체
var input = { 'array': [] };

// 입력받은 수식을 문자열로 리턴
input.getInput = function () {
    return this.array.join("");
}

// 입력 배열을 초기화
input.removeAll = function (value) {
    this.array = [];
    this.array.push(value);
};

// 수식이 비었는지 검사
input.isEmpty = function () {
    return this.array.length == 0;
};

// 계산 실행 전 준비
// getValue() 호출 전 반드시 수행
input.prepareCalculate = function() {
    this.array = this.array.join("").split(" ");
};

// 수식에서 값을 읽어옴
input.getValue = function () {
    var str = this.array.shift();
    var n = Number(str);
    return n;
};

// 수식에서 연산자를 읽어옴
input.getOperator = function () {
    var op = this.array.shift();
    if (op === "+" || op === "-" || op === "*" || op === "/") {
        return op;
    } else {
        return "$";
    }
};

// output object
// 출력을 담당하는 객체
var output = {};
output.text = document.getElementById('output');

// 계산 결과 출력
output.print = function(str) {
    this.text.innerHTML = str;
};

// 수식 출력
output.display = function() {
    this.text.innerHTML = input.getInput();
};

// calculator object
// 계산을 담당하는 객체
var calculator = {};
calculator.calculate = function (first, second, op) {
    var ret;
    switch (op) {
        case "+":
            ret = first + second;
            break;
        case "-":
            ret = first - second;
            break;
        case "*":
            ret = first * second;
            break;
        case "/":
            ret = first / second;
            break;
        default:
            return NaN;
    }
    return ret;
};

//버튼의 핸들러
var clickNumbers = function (event) {
    var str = event.target.innerHTML;
    console.log(str);

    if (str === 'BS') {
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '*' || str === '/') {
        input.array.push(' ' + str + ' ');
    } else {
        input.array.push(str);
    }

    if (input.isEmpty()) {
        output.text.innerHTML = "Empty";
    } else {
        output.display();
    }
};

// ' = ' 버튼의 핸들러
var showResult = function (event) {
    input.prepareCalculate();

    var result = input.getValue();
    while (!input.isEmpty()) {
        var op = input.getOperator();
        var second = input.getValue();
        result = calculator.calculate(result, second, op);
    }
    output.print(result);

    input.removeAll(result);
};