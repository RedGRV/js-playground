//html elements
const score = document.getElementById('score');
const ans = document.getElementById('ans');
const word = document.getElementById('word');
const result = document.getElementById('result');

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
    const word = this.example[this.getRandom(10)];
    ans.innerHTML = word;
    this.answer = ans.innerHTML.split('');
};

//create buttons
input.createBtn = function() {
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

//initialize buttons
action.init = function() {
    this.ableButtons();
    while (word.firstChild) {
        word.removeChild(word.firstChild);
    }
};

action.ableButtons = function() {
    for (let i = 1; i <= 3; i++) {
        const btn = document.getElementById('btn' + i);
        btn.disabled = false;
    }
}

action.disableButtons = function() {
    for (let i = 1; i <= 3; i++) {
        const btn = document.getElementById('btn' + i);
        btn.disabled = true;
    }
};

action.countScore = function() {
    output.score++;
    if (output.score === 3) {
        alert("Thank you for playing!!!");
    } else {
        action.init();
        main();
    }
};


//output objects
const output = {
    'btn': [],
    'score': 0
};

//print buttons
output.printBtn = function() {
    for (let i = 0; i < input.answer.length; i++) {
        this.btn[i].innerHTML = input.answer[i];
    }
};

//print result
output.printResult = function() {
    if (input.answer.join('') === ans.innerHTML) {
        action.disableButtons();
        result.innerHTML = "일치합니다."
        setTimeout('action.countScore()', 3000);
    } else {
        result.innerHTML = "일치하지 않습니다."
    }
};

//print score
output.printScore = function() {
    let str = "SCORE : ";
    for (let i = 0; i < this.score; i++) {
        str += "●";
    }
    score.innerHTML = str;
};

//main
function main() {
    input.getAnswer();
    input.createBtn();
    input.mix();
    output.printScore();
}

main();