console.log("Привет, мир!");

let a = 60.5,
    b = 60,
    sum = a + b,
    difference = a - b,
    multiplication = a * b,
    division = a / b,
    modulo = a % b,
    result = [sum, difference, multiplication, division, modulo],
    operation = ['sum', 'difference', 'multiplication', 'division', 'modulo'],
    //doubleInt = ['integer', 'double'],
    isInt = ['', '', '', '', ''],
    maxResult = result[0],
    maxi = 0,
    minResult = result[0],
    mini = 0,
    temp;
isInt[0] = (Number.isInteger(result[0]) ? 'integer' : 'double');
//alert(isInt[0]);
for (let i = 1; i < 5; ++i) {
    temp = result[i];
    if (maxResult < temp) {
        maxResult = temp;
        maxi = i;
    };
    if (minResult > temp) {
        minResult = temp;
        mini = i;
    }
    isInt[i] = Number.isInteger(temp) ? 'integer' : 'double';
    //alert(isInt[i]);
}
alert('a = ' + a + '\nb = ' + b + '\n' +
    operation[0] + ': a + b = ' + result[0] + ' - ' + isInt[0] + '\n' +
    operation[1] + ': a - b = ' + result[1] + ' - ' + isInt[1] + '\n' +
    operation[2] + ': a * b = ' + result[2] + ' - ' + isInt[2] + '\n' +
    operation[3] + ': a / b = ' + result[3] + ' - ' + isInt[3] + '\n' +
    operation[4] + ': a % b = ' + result[4] + ' - ' + isInt[4] + '\n' +
    'minResult = ' + minResult + ' by ' + operation[mini] + '\n' +
    'maxResult = ' + maxResult + ' by ' + operation[maxi]);






/*let Photos = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'];
let a = -1.0;
if (Number(String(a) + ".")) { alert(a + ' целое число') }
else { alert(a + ' дробное число') };/
/*alert('Смотри фокус! Не было фотографий...');
for (let i = 0; i < 12; i++) {
    function img(i) {
        //alert('Сейчас загрузится изображение с номером ' + String(i + 1));
        var img = document.createElement('img');
        img.setAttribute('src', Photos[i]);
        img.setAttribute('alt', 'Фото №' + String(i + 1));
        img.setAttribute('width', '100px');
        img.setAttribute('style', 'padding: 5px');
        document.getElementById('photos').appendChild(img);
    }
    setTimeout(img(i), 5000);
}
alert('...Появились фотографии!');*/

/*function changeDiv() {
        //alert('Сейчас блок HEADER поменяет цвет на синий, граница будет зелёной, а текст оранжевый')
        let divItem = document.getElementById("head");
        divItem.setAttribute(
            "style",
            "background-color: #0047a3; border: 1px solid #3abb01; color: #ff7c00;"
        );
    }
setTimeout(changeDiv(), 5000);*/



