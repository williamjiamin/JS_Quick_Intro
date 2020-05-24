// 以下内容是我们想在浏览器的log里面看到的
// console.log('这个是乐学偶得William隐藏在log里面的一条信息：公众号是：乐学Fintech， 网址是：lexueoude.com');


// 变量
// let name = 'William';
// console.log(name);

// name = 'Tom';
// console.log(name);

// let firstName = 'William';
// console.log(firstName);

// let lastName = 'jiamin';
// console.log(lastName);

// 常量

// const riskFreeRate = 0.03;
// 不能这样写，因为const不能继续赋值
// riskFreeRate = 0.05;
// console.log(riskFreeRate);


// 数据类型

// let my_name = 'William'; //String
// let age = 10 ; //number 不管整形与浮点型
// let isMale = false;//Boolean (True or False)
// let isAI = true; // Boolean
// let company = undefined; //undefined也是一种数据类型
// let favColor = null;



//在JavaScript中，有两大类数据类型
// 1.Primitives Types
// 1)String
// 2)Number
// 3)Boolean
// 4)undefined
// 5)null

// 2.Reference Types
// 1）Object 东西
// 2) Array
// 3) Function

// let person = {
//     name: 'Williamjiamin',
//     age : 1,
//     isAI : true,
//     favColor : 'Black'
// };

// console.log(person.name);


// 如果需要对这个person的相应特征/特性进行更改
// 1.Dot notaion(通过将这个对象后面加一个点的方式)

// person.name = 'lxodxgj';
// person.age = 2;

// console.log(person.age);

// 2.Bracket Notation(通过将这个对象后面加一个括号方式)
// 当我们不知道用户输入的是什么的时候，可以用这种方法

// let userSelection = 'favColor';
// person[userSelection] = 'Blue';

// console.log(person.favColor);


// Array

// let favColors = ['Black','Blue'];
// favColors[2] = 'Red';
// console.log(favColors.length);

// Function

// 1.要么去执行一系列命令
// 这里的叫做parameter（占位的“参数”）
function welcome(name,isAI){
    console.log('Welcome 【'+ name +'】注意，是否是AI（'+isAI+'） to lexueoude.com，公众号：乐学Fintech');
}

// 这里的叫做argument（真正传进去的“参数”）
welcome('William','是');

// 2.要么去进行一系列的计算

function calculate_add(num1,num2){
    return num1+num2;
}


function calculate_square(num1,num2){
    return num1 * num2;
}

console.log(calculate_square(2,8));