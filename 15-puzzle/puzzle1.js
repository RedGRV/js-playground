const input = {};

input.example = ["HELLO", "WORLD", "COMPUTER", "PHONE", "KEYBOARD", "MOUSE", "WORD", "PUZZLE", "HTML", "TALK"];
input.answer = [];

input.getAnswer = function () {
    const ans = input.example[action.getRandom(10)];
    const display = document.getElementById('ans');
    display.innerHTML = ans;
    this.answer = ans.split('');
};

input.createBtn = function () {
    const word = document.getElementById('word');
    for (let i = 0; i < this.answer.length; i++) {
        output.btn[i] = document.createElement('div');
        word.appendChild(output.btn[i]);
        output.btn[i].innerHTML = this.answer[i];
    }
    output.printResult();
};


const action = {};

action.getRandom = function (count) {
    const random = Math.floor(Math.random() * count);
    return random;
};

action.copyAns = function (arr) {
    const tmp = [];
    for (let i = 0; i < arr.length; i++) {
        tmp[i] = arr[i];
    }
    return tmp;
};

action.reverse = function () {
    // input.answer.reverse();
    const tmp = this.copyAns(input.answer);
    for (let i = 0; i < input.answer.length; i++) {
        input.answer[i] = tmp.pop();
    }
    output.printBtn();
    output.printResult();
};

action.pushRight = function () {
    const tmp = input.answer.pop();
    input.answer.unshift(tmp);
    output.printBtn();
    output.printResult();
};

action.pushLeft = function () {
    const tmp = input.answer.shift();
    input.answer.push(tmp);
    output.printBtn();
    output.printResult();
};

action.mix = function () {
    if (this.getRandom(2) === 0) {
        this.reverse();
    }
    for (let i = 0; i < this.getRandom(input.answer.length); i++) {
        this.pushRight();
    }
};

// action.mix = function () {
//     const tmp = this.copyAns(input.answer);
//     for (let i = 0; i < tmp.length; i++) {
//         while (true) {
//             const num = this.getRandom(tmp.length);
//             if (tmp[num] !== undefined) {
//                 input.answer[i] = tmp[num];
//                 tmp[num] = undefined;
//                 break;
//             }
//         }
//     }
//     output.printBtn();
//     output.printResult();
// };

const output = {};

output.btn = [];
output.printBtn = function () {
    for (let i = 0; i < input.answer.length; i++) {
        output.btn[i].innerHTML = input.answer[i];
    }
    this.printResult();
};

output.result = document.getElementById('result');
output.printResult = function () {
    const ans = document.getElementById('ans').innerHTML;
    if (input.answer.join('') === ans) {
        this.result.innerHTML = "일치합니다.";
    } else {
        this.result.innerHTML = "일치하지 않습니다.";
    }
};

function main() {
    input.getAnswer();
    input.createBtn();
    action.mix();
}

main();