const input = {};
input.answer = [];
input.getAnswer = function() {
    const ans = document.getElementById('ans').innerHTML;
    this.answer = ans.split('');
};

const action = {};
action.createBtn = function() {
    const word = document.getElementById('word');
    for (let i = 0; i < input.answer.length; i++) {
        const btn = document.createElement('div');
        btn.id = "btn" + i;
        word.appendChild(btn);
        btn.innerHTML = input.answer[i];
    }
    output.printResult();
};
action.reverse = function() {
    input.answer.reverse();
    output.btn();
    output.printResult();
};
action.pushRight = function() {
    const tmp = input.answer.pop();
    input.answer.unshift(tmp);
    output.btn();
    output.printResult();
};
action.pushLeft = function() {
    const tmp = input.answer.shift();
    input.answer.push(tmp);
    output.btn();
    output.printResult();
};

const output = {};
output.result = document.getElementById('result');
output.btn = function() {
    const word = document.getElementById('word');
    for (let i = 0; i < input.answer.length; i++) {
        const btn = document.getElementById('btn' + i);
        btn.innerHTML = input.answer[i];
    }
    this.printResult();
};
output.printResult = function() {
    const ans = document.getElementById('ans').innerHTML;
    if (input.answer.join('') === ans) {
        this.result.innerHTML = "일치합니다.";
    } else {
        this.result.innerHTML = "일치하지 않습니다.";
    }
};

function main() {
    input.getAnswer();
    action.createBtn();
}

main();