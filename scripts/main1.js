let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox.jpg')  {
    myImage.setAttribute('src' , 'images/fierfox1.jpg');
} else { 
    myImage.setAttribute('src' , 'images/firefox2.jpeg');
}
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {    // используем тут функцию установить имя пользователя а потом прописуем для нее условия
    let myName = prompt('Plese enter your name');  // promt-это функция которая просит пользователя ввести эти данные и сохраняет их в переменной
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);// здесь мы просим API под названием localStorage запомнить имя и вывести его в переменную myname
        myHeading.innerHTML = 'Mozila is cool,' + myName;

    }
}



if (!localStorage.getItem('name')) {//тут мы проверяем есть ли вообще что то в name тем что используем операцию отрицания (!)
    setUserName();
    }else {
        let storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'Mozila is cool,' + storedName;
    }
 myButton.onclick = function() {
    setUserName();
 }
