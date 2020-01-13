'use script'
console.log('Hello World! from main');

// 定数（const）
const price = 150;
console.log(price * 100);

// 変数（let） ※古い書き方でvarもあるが使わない方がいい
let kakaku = 180;
console.log(kakaku * 110);
kakaku = 200;
console.log(kakaku * 120);

// 型の参照
console.log(typeof 'hello'); //string
console.log(typeof 100); //number
console.log(typeof true); //boolean

// if文
const score = 85;

if (score >= 80) {
    console.log("Great!");
} else if ( score >= 70) {
    console.log("Good");
} else {
    console.log("OK");
}

// 条件演算子(可読性を考えると微妙)
score >= 80 ? console.log("Great!") : console.log("OK");

// switch文
const signale = 'red'
switch (signale) {
    case 'red':
        console.log("red!");
        break;
    case 'blue':
        console.log("blue");
        break;
    default:
        console.log("Other");
}

// for文
for (let i = 0; i < 10; i++) {
    console.log('hello' + i);
}

// while文
let hp = 100;
while (hp > 0) {
    console.log(`${hp} HP Left`);
    hp -= 15;
}

// 関数
function showAd(message = 'AD') {
    console.log('----------');
    console.log(`----${message}----`);
    console.log('----------');
}

showAd('Heder Ad');
showAd();
showAd('Footer Ad');

// 関数（戻り値あり）
function sum(a, b, c) {
    // console.log(a + b + c);
    return a + b + c;
}

let total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);

// 関数式（関数を変数で定義する）
const sum2 = function(a, b, c) {
    return a + b + c;
};

total = sum2(1, 2, 3) + sum2(3, 4, 5);
console.log(total);

//　アロー関数
const sum3 = (a, b, c) => a + b + c;
total = sum3(1, 2, 3) + sum3(3, 4, 5);
console.log(total);
