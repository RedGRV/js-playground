//input objects
const input = { 'answer': [] };

//words
input.example = ["HELLO", "WORLD", "COMPUTER", "PHONE", "KEYBOARD", "MOUSE", "WORD", "PUZZLE", "HTML", "TALK"];

//get random number
input.getRandom = function(count) {
    const random = Math.floor(Math.random() * count);
    return random;
};

//choose 1 word from words
input.getAnswer = function() {
    const ans = this.example[this.getRandom(10)];
    this.answer = ans.split('');
    const display = document.getElementById('ans');
    display.innerHTML = ans;
};

//create buttons
input.createBtn = function() {
    const word = document.getElementById('word');
    for (let i = 0; i < this.answer.length; i++) {
        output.btn[i] = document.createElement('div');
        word.appendChild(output.btn[i]);
        output.btn[i].innerHTML = this.answer[i];
    }
};

//mix buttons random
input.mix = function() {
    if (this.getRandom(2) === 0) {
        action.reverse();
    }
    for (let i = 0; i < this.getRandom(this.answer.length - 2) + 2; i++) {
        action.pushRight();
    }
};

//copy answer array
input.copyAns = function(arr) {
    const tmp = [];
    for (let i = 0; i < arr.length; i++) {
        tmp[i] = arr[i];
    }
    return tmp;
};

//action objects
const action = {};

//reverse buttons
action.reverse = function() {
    const tmp = input.copyAns(input.answer);
    for (let i = 0; i < input.answer.length; i++) {
        input.answer[i] = tmp.pop();
    }
    output.printBtn();
    output.printResult();
};

//push buttons right
action.pushRight = function() {
    const tmp = input.answer.pop();
    input.answer.unshift(tmp);
    output.printBtn();
    output.printResult();
};

//push buttons left
action.pushLeft = function() {
    const tmp = input.answer.shift();
    input.answer.push(tmp);
    output.printBtn();
    output.printResult();
};


//output objects
const output = {
    'btn': [],
    'result': document.getElementById('result'),
    'score': 0
};

//print buttons
output.printBtn = function() {
    for (let i = 0; i < input.answer.length; i++) {
        this.btn[i].innerHTML = input.answer[i];
    }
};

//initialize buttons
output.init = function() {
    const word = document.getElementById('word');
    while (word.firstChild) {
        word.removeChild(word.firstChild);
    }
};

//print result
output.printResult = function() {
    const ans = document.getElementById('ans').innerHTML;
    if (input.answer.join('') === ans) {
        this.score++;
        if (this.score === 3) {
            document.write("<h1>Thank you for playing!!!</h1>");
        } else {
            output.init();
            main();
        }
    }
};

//print score
output.printScore = function() {
    const score = document.getElementById('score');
    let str = "SCORE : ";
    for (let i = 0; i < this.score; i++) {
        str += "●";
    }
    score.innerHTML = str;
}

//main
function main() {
    input.getAnswer();
    input.createBtn();
    input.mix();
    output.printScore();
}

main();