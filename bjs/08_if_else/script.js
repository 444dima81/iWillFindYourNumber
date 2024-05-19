// Окно для ввода
let minValue = parseInt(prompt('Минимальное знание числа для игры','-1000'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','1000'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

// Заново
document.getElementById('btnRetry').addEventListener('click', function () {
        answerField.innerText = alert('Давай еще раз?');
        minValue = parseInt(prompt('Минимальное знание числа для игры','-1000'));
        maxValue = parseInt(prompt('Максимальное знание числа для игры','1000'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        if (Number.isNaN(minValue)){
            minValue = -1000 === 'default';
            console.log(minValue);
        } 
        if (Number.isNaN(maxValue)){
            maxValue = 1000 === 'default';
            console.log(maxValue);
        } 

        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText = `Вы загадали число ${answerNumber }?`
        orderNumber = '0';
        orderNumberField.innerText = orderNumber;
        gameRun = true;
    })
    // смотреть ошибку в заново и вводе nswerNumber orderNumber


// Больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Что то пошло не так!\n\u{1F631}` ;
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        } 
    }
})


// Меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Что то пошло не так!\n\u{1F631}` ;
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        } 
    }
})

// Верно
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random());
        const answerPhrase = (phraseRandom === 1) ?
        `ТЫ молодец!\n\u{1F60D}` :
        `Победа!\n\u{1F911}` ;
        `УРАААА ТЫ КРУТ!\n\u{1F60E}`;
        answerField.innerText = answerPhrase;
        
        gameRun = false;
        orderNumber = '0';
        orderNumberField.innerText = orderNumber;
    }
})
