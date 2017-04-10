ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.734032,37.5861723],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/img/place.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects.add(myPlacemark);
});
function getUnique(allNames) {
  var unique = {};
  for (var i = 0; i < allNames.length; i++) {
    var name = allNames[i];
    unique[name] = name;
  }
  return unique;
}
/*
*
*Задел на будущее, вдруг понадобится разделить авторов, или у них будут индивидуальные лекции
*
*/
function separateAuthor(allPersons){
    var dividedPersons = {};
    var persons = [];
    for ( name in allPersons ) {

        if ( allPersons[name].indexOf(',') != -1 ) {
                persons = allPersons[name].split(', ');
                for ( i = 0; i < persons.length; i++ ) { 
                    var person = persons[i];
                    dividedPersons[person] = person;
                    delete allPersons[name];
                }

        }

    }
    return dividedPersons;
}
/*
*
* Облако тегов для фильтра
*
*/
function makeTags(names){
    var i  = 0;
    var parentElement = document.getElementsByClassName('content');
    var curs = document.querySelector('.curs');
    for ( name in names ) {
        var labels = { element: "label", innerHTML: name };
        var labelsAttr = { class: "tag author"+i, for: "author"+i, style: "background:"+getColor() };
        var checkbox = { element: "input" };
        var checkboxAttr = { type: "checkbox", id: "author" + i, checked: "checked"};
        parentElement[0].insertBefore( makeElement( checkbox, checkboxAttr ), curs );
        parentElement[0].insertBefore( makeElement( labels, labelsAttr ), curs );
        i+=1;
    }
}
function makeTags1(prefix, names, tags){
    var i  = 0;
    var parentElement = document.getElementsByClassName('content');
    var el = document.querySelector('.'+ prefix +'');
    for ( name in names ) {
        var labels = { element: "label", innerHTML: names[name] };
        var labelsAttr = { class: "tag "+ prefix + '_' + tags[i], for: prefix + '_' + tags[i] };
        var checkbox = { element: "input" };
        var checkboxAttr = { type: "checkbox", id: prefix + '_' + tags[i], checked: "checked"};
        parentElement[0].insertBefore( makeElement( checkbox, checkboxAttr ), el );
        parentElement[0].insertBefore( makeElement( labels, labelsAttr ), el );
        i+=1;
    }
}
/*
*
* Функция для создания элементов,
* принимающая элемент и параметры элемента.
*
*/
function makeElement( DOMelement, DOMAttr ){
        var element = document.createElement(DOMelement.element);
        if (DOMelement.innerHTML) {
            element.innerHTML = DOMelement.innerHTML;
        }       
        for ( attribute in DOMAttr ) {
            element.setAttribute(attribute, DOMAttr[attribute]);
        }
        return element;    
}
/*
*
* Создание модального окна
* TODO: Создание закрывающей кнопки и 
* контентной области в этой функции
*
*/
function makemodal( info ){
        var modal = { element: "div" };
        var modalAttr = { class: "modalWindow"}; 
        modal = makeElement( modal, modalAttr );
        return modal;
}
function removemodal(){
    var modal = document.body.querySelector('.modalWindow');
    var shadow = document.body.querySelector('.modal-shadow');
    document.body.removeChild( modal );
    document.body.removeChild( shadow );
    return true;
}
/*
*
* Создание текста для уведомлений
* пользователя. Например, для ошибок.
* принимает класс и текст.
*
*/
function makeText( text, name ){
    var span = document.createElement('span');
    span.className = name;
    span.innerHTML = text;
    return span;
}
/*
*
* Рандомный цвет для облака тегов.
*
*/
function getColor(){
    var r=Math.floor(Math.random() * (256));
    var g=Math.floor(Math.random() * (256));
    var b=Math.floor(Math.random() * (256));
    var rgba = "rgba("+r+', '+g+', '+b+", 0.5)";
    return rgba;
}
/*
*
* Фильтр для лекторов. 
* TODO: сделать функции для остальных
* фильтров
*
*/
function filterLector ( index, names ) {
    var nameOfLector = Object.keys(names);
    var lections = document.querySelectorAll('[data-author="'+ nameOfLector[index] +'"]');
    for (var i = 0; i < lections.length; i++) {

           if ( lections[i].style.display == 'none' ) {
                lections[i].style.display = '';
           } else {
                lections[i].style.display = 'none';
           }

    }    

}
/*
*
* Для кнопки "Показать все"
*
*/
function showShedule( typeOfCheckbox, checkbox ){
    checkbox.forEach(function(element){
        if( ~element.id.indexOf( typeOfCheckbox ) ){
            if ( element.checked == "" ) {
                element.click();
            }
        }
    });

}
/*
*
* Для кнопки "Скрыть все". TODO: Объединить функции
*
*/
function hideShedule( typeOfCheckbox, checkbox ){
    checkbox.forEach(function(element){
        if( ~element.id.indexOf( typeOfCheckbox ) ){
            if ( element.checked != "" ) {
                element.click();
            }
        }
    });    
}
/*
*
* Получаем дату из инпутов и создаем
* через метод Date() дату для сравнения.
*
*/
function splitDate( day ){
    var separateDate = day.split('-');
    var date = new Date(separateDate[0], separateDate[1] - 1, separateDate[2]);
    return date;
}
/*
*
* Собираем дата-параметры для создания даты
* через Date();
*
*/
function makeDate( section, item ) {
    var year = section.dataset.year;
    var month = section.dataset.month - 1;
    var day = item.dataset.day;
    var date = new Date( year, month, day);
    return date;
}
function compareTwoDates(date1, date2){
    if ( +date1 < +date2 || +date1 == +date2 ) {
        return searchDates( date1, date2 );
    }
        return false;
}
/*
*
* Проверяем принадлежность дат к интервалу.
*
*/
function searchDates( date1, date2 ){
    for (var i = 0; i < cursSection.length; i++) {
          var items = cursSection[i].querySelectorAll('.curs__item');
          for (var j = 0; j < items.length; j++) {
            items[j].style.display = 'none'
            if ( +makeDate( cursSection[i], items[j] ) >= +date1 && +makeDate( cursSection[i], items[j] ) <= +date2 ){
               items[j].style.display = '';
            }
          }         
    }
    checkVisibility();
    return true;
}
function errorForm( text ){
        form.classList.add('error');
        var message = document.querySelector('.errorForm');
        if (!message){
            form.insertBefore( makeText( text, "errorForm" ) , null);
        }
        var hide = setTimeout( function () {
            var message = document.querySelector('.errorForm');
            form.classList.remove('error');
            form.removeChild( message );
            
        }, 2000);   
}
/*
*
* Скрываем пустые элементы.
* Общая функция для проверки после
* фильтрации
*
*/
function checkVisibility() {
    for (var i = 0; i < cursItem.length; i++) {
        if ( cursItem[i].offsetHeight < 1){
            cursItem[i].querySelector('.curs__item__date').classList.add("disable");
        } else {
            cursItem[i].querySelector('.curs__item__date').classList.remove("disable");
        }
    }
    for (var i = 0; i < cursSection.length; i++) {
        if ( cursSection[i].offsetHeight < 50){
            cursSection[i].querySelector('.curs__month').classList.add("disable");
        } else {
            cursSection[i].querySelector('.curs__month').classList.remove("disable");
        }
    }
    var message = curs.querySelector('.attention-text');
    if (  curs.offsetHeight < 50 ) {
        var text = 'Ничего не найдено! Выберите другие параметры поиска или нажмите "Показать все"';
        if ( !message ) {
            curs.insertBefore( makeText( text, "attention-text" ), curs[0] );
        }           
    } else {
        if ( message ) {
                curs.removeChild( message );
        }
    }
    return true;  
}
/*
*
* Сверяем даты лекций с сегодняшним днем.
* Помечаем устаревшие.
*
*/
function checkOldLections(){
    for (var i = cursSection.length - 1; i >= 0; i--) {
        var item = cursSection[i].querySelectorAll('.curs__item');
        for (var j = item.length - 1; j >= 0; j--) {
            var scheduleDate = makeDate( cursSection[ i ], item[ j ] );
            var currentDate = new Date();
            if ( +scheduleDate < +currentDate ) {
                item[j].querySelectorAll('.curs__lection').forEach(function(el){
                    el.classList.add('old-lection');
                });
            }
        }
    }
    return true;

}
/*
*
* Запрос к json-файлу
* со ссылками на лекции и лекторов.
*
*/
function loadInfo() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'info.json', false);
  xhr.send();

  if (xhr.status != 200) {
    // обработать ошибку
    alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
  } else {
    // вывести результат
    return xhr.responseText;
  }
}
/*
*
* Собираем информацию для модального окна.
* Можно проставить всем лекторам ссылки.
* Окно сделано для демонстрации.
*
*/
function getLectorLinks( lector ){
    var list = JSON.parse( loadInfo() );
    var link = list.lectors[lector];
    return { link, lector};
}
function addmodalInfo( info ){
    lectorInfo = info;
    var i  = 0;
    var name = lectorInfo.lector.split(', ');
    var inner = "<p>Эту лекцию курирует</p><p>";
    for ( link in lectorInfo.link){
           if ( i > 0) {
                inner = inner + ' и ';
           }
           inner = inner + "<a href='"+ lectorInfo.link[link] +"'>" + 
           name[i] + "</a>";
           i +=1;
    }
    inner = inner + "</p>";
    return inner;
}
/*
*
* Можно реализовать добавление динамической ссылки через
* запрос json'a.
*
*/
function sortSchools( schools ){
    var school = [];
    var count = 0;     
    for (var i = 0; i < lections.length; i++) {
        if ( lections[i].dataset.tag == schools ) {
            school[count] = lections[i];
            count = count + 1;
        }
    }
    return school;
}
function selectOLdLections( sortedSchool ){
    var oldSchool = [];
    var index = [];
    var count = 0;
    for (var i = 0; i < sortedSchool.length; i++) {
        if ( sortedSchool[i].classList.contains('old-lection') ) {
            index[count] = i;
            oldSchool[count] = sortedSchool[i];
            count +=1;
        }
    }
    return { oldSchool, index };
}
function addLinkToOld( old ){
    var oldLections = old;
    var list = JSON.parse( loadInfo() )
    for (var i = 0; i < oldLections.oldSchool.length; i++) {
    var school  = oldLections.oldSchool[i].dataset.tag;
    var index = oldLections.index[i];
        oldLections.oldSchool[i].setAttribute("href", list.lections[school][index]);;
    }
    return true;
}
/*
*
* Для удобства объявляю необходимые переменные, которые используются далее по коду.
* 
*/
var lections = document.getElementsByClassName('curs__lection');
var names = [];
var curs = document.querySelector('.curs');
var cursSection = curs.querySelectorAll('.curs__section');
var cursItem = curs.querySelectorAll('.curs__item');
var show = document.querySelectorAll(".show-all");
var hide = document.querySelectorAll(".hide-all");
var lectors = document.querySelectorAll(".curs__item__lector");
var checkbox = document.querySelectorAll("[type='checkbox']");
var form = document.forms["getDate"];
var lectionsTag = {};
var monthTag = {};
for (i = 0; i<lections.length; i++) {  
    lectionsTag[ lections[i].dataset.tag ] = lections[i].querySelector('.tag').innerText;
}
for (i = 0; i<cursSection.length; i++) {  
    monthTag[ cursSection[i].dataset.month ] = cursSection[i].querySelector('.curs__month').innerText;
}  
//lectionsTag = Object.keys(lectionsTag);
console.log(monthTag);
makeTags1('school', lectionsTag, Object.keys(lectionsTag));
makeTags1('month', monthTag, Object.keys(monthTag));
checkOldLections();
/*
*
* Динамичское создание лекторов.
* TODO: Сделать то же дял остального.
* 
*/
for (var i = 0; i < lections.length; i++) {
    names[i] = lections[i].getAttribute('data-author');
}
names = getUnique(names);
makeTags(names);
/*
*
* Вешаем на чекбоксы event listeners. 
* Фильтруем лекторов.
* TODO: Поиск по лекторам
* 
*/
checkbox.forEach(function(element){
    element.onchange = function (el) {
        if ( ~el.target.id.indexOf('author') ){
                var index = el.target.id.match(/\d+/)[0];
                filterLector( index, names );
        }
        checkVisibility();

    }
});
/*
*
* Показать все и скрыть все по клику.
* Вешаем событие.
* 
*/
show.forEach( function( el ){
    el.onclick = function(event){
        var typeOfCheckbox = event.target.parentNode.nextElementSibling.id.substring(0, 3);
        showShedule( typeOfCheckbox, checkbox );
    }

});
hide.forEach( function( el ){
    el.onclick = function(event){
        var typeOfCheckbox = event.target.parentNode.nextElementSibling.id.substring(0, 3);
        hideShedule( typeOfCheckbox, checkbox );
    }

});
document.querySelector('.show-date').onclick = function(){
    for (var i = 0; i < cursItem.length; i++) {
        cursItem[i].style.display = "block";
    }
    document.forms.getDate.elements.date_first.value = ''
    document.forms.getDate.elements.date_last.value = ''
    checkVisibility();
};
document.querySelector('.toggle-old').onclick = function( el ){
    var oldLections = document.querySelectorAll('.old-lection');
    if ( el.target.classList.contains('off') ){
        el.target.classList.remove('off');
        el.target.classList.add('on');
        el.target.innerText = "Показать прошедшие лекции";
        for (var i = 0; i < oldLections.length; i++) {
            oldLections[i].style.display = "none";
        }
    } else {
        el.target.classList.remove('on');
        el.target.classList.add('off');
        el.target.innerText = "Скрыть прошедшие лекции";
        for (var i = 0; i < oldLections.length; i++) {
            oldLections[i].style.display = "";
        }
    }
    checkVisibility();
};
/*
*
* Вешаем на лекторов модальные окна.
* Достаем из json информацию о них.
* Добавляем возможность закрыть окно.
* 
*/
lectors.forEach( function( el ){
    el.onclick = function(event){
        event.preventDefault();
        var shadow = { element: "div" };
        var shadowAttr = { class: "modal-shadow"};
        var shadow = document.body.insertBefore( makeElement( shadow, shadowAttr ), document.body[0] );
        var modal = document.body.insertBefore( makemodal( lectors ), document.body[0] );   
        document.querySelector(".modalWindow").innerHTML = addmodalInfo( getLectorLinks( el.parentNode.dataset.author ) );
        var close = { element: "span", innerHTML: "×" };
        var closeAttr = { class: "close"}; 
        document.querySelector(".modalWindow").insertBefore( makeElement( close, closeAttr ), modal[0] );
        document.querySelector(".close").onclick = function(){
            removemodal();
        } 
        shadow.onclick = function(){
            removemodal();
        }
    }
});
/*
*
*Фильтр по датам
*
*/
document.querySelector('.sort-date__submit').onclick = function( el ) {
    el.preventDefault();
    if ( form.elements.date_first.value != '' && form.elements.date_last.value != '' ) {
        var date1 = splitDate( form.elements.date_first.value );
        var date2 = splitDate( form.elements.date_last.value );
        if ( !compareTwoDates(date1, date2) ) {
            errorForm('Первая дата не может быть больше второй!');
        } 
    } else {
        errorForm('Заполните поля!');
    }
}
/*
*
* Сортируем все школы по названию,
* находим среди них старые школы и добавляем атрибут href
*
*/

var oldShri = addLinkToOld( selectOLdLections( sortSchools("shri") ) );
var oldShmd = addLinkToOld( selectOLdLections( sortSchools("shmd") ) );
var oldShmr = addLinkToOld( selectOLdLections( sortSchools("shmr") ) );
var oldAll = addLinkToOld( selectOLdLections( sortSchools("all") ) );