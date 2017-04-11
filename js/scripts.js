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
function makeTags(prefix, names, tags){
    var i  = 0;
    var parentElement = document.getElementsByClassName(prefix);
    for ( name in names ) {
        var labels = { element: "label", innerHTML: names[name] };
        var labelsAttr = { class: "tag "+ prefix + '_' + tags[i], for: prefix + '_' + tags[i], style: 'background: ' +getColor()  };
        var checkbox = { element: "input" };
        var checkboxAttr = { type: "checkbox", id: prefix + '_' + tags[i], checked: "checked"};
        parentElement[0].insertBefore( makeElement( checkbox, checkboxAttr ), null );
        parentElement[0].insertBefore( makeElement( labels, labelsAttr ), null );
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
* Присваиваем для тегов в расписании
* аналогичный цвет, как для облака тегов.
*
*/
function getColor(){
    var r=Math.floor(Math.random() * (256));
    var g=Math.floor(Math.random() * (256));
    var b=Math.floor(Math.random() * (256));
    var rgba = "rgba("+r+', '+g+', '+b+", 0.5)";
    return rgba;
}
function colorSheduleTag(){
    var school = document.querySelector('.school');
    var schoolItems = school.querySelectorAll('.tag');
    var schoolTags = {};
    for (var i = 0; i < schoolItems.length; i++) {
        schoolTags[schoolItems[i].innerHTML] = schoolItems[i].style.background;
    }
    for (var i = 0; i < lections.length; i++) {
        var cursTag = lections[i].querySelectorAll('.tag');
        for (var j = 0; j < cursTag.length; j++) {
            cursTag[j].style.background = schoolTags[ cursTag[j].innerText ];
        }
    }
}
/*
*
* Фильтр для лекторов. 
*
*/
function filter( prefix, index, names ) {
    var name = Object.keys(names);
    var lections = document.querySelectorAll('[data-'+ prefix +'="'+ name[index] +'"]');
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
    for (var i = 0; i < checkbox.length; i++) {
        if( ~checkbox[i].id.indexOf( typeOfCheckbox ) ){
            if ( checkbox[i].checked == "" ) {
                checkbox[i].click();
            }
        }
    }
    return true;

}
/*
*
* Для кнопки "Скрыть все". TODO: Объединить функции
*
*/
function hideShedule( typeOfCheckbox, checkbox ){
    for (var i = 0; i < checkbox.length; i++) {
        if( ~checkbox[i].id.indexOf( typeOfCheckbox ) ){
            if ( checkbox[i].checked != "" ) {
                checkbox[i].click();
            }
        }
    }  
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
                    hideLection( item[j] );
            }
        }
    }
    return true;
}
function hideLection( section ){
        lection = section.querySelectorAll('.curs__lection');
        for (var i = 0; i < lection.length; i++) {
            lection[i].classList.add('old-lection')
        }
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
    return {
        link : link, 
        lector : lector };
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
           inner = inner + "<a href='"+ lectorInfo.link[i] +"'>" + 
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
    return selectOLdLections( school );
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
    return [ oldSchool, index ];
}
function addLinkToOld( old ){
    var oldLections = sortSchools(old);
    var list = JSON.parse( loadInfo() )
    for (var i = 0; i < oldLections[0].length; i++) {
    var school  = oldLections[0][i].dataset.tag;
    var index = oldLections[1][i];
        oldLections[0][i].setAttribute("href", list.lections[school][index]);;
    }
    return true;
}
/*
*
* Для удобства объявляю необходимые переменные, которые используются далее по коду.
* 
*/
var curs = document.querySelector('.curs');
var cursSection = curs.querySelectorAll('.curs__section');
var lections = document.getElementsByClassName('curs__lection');
var cursItem = curs.querySelectorAll('.curs__item');
var lectors = document.querySelectorAll(".curs__item__lector");
var form = document.forms["getDate"];
/*
*
* Динамическое создание тегов.
* 
*/
var lectionsTag = {};
var monthTag = {};
var lectorTag = {};
var numberNames = [];
var numberSchools = [];
var numberMonth = [];
for (i = 0; i<lections.length; i++) {  
    lectionsTag[ lections[i].dataset.tag ] = lections[i].querySelector('.tag').innerText;
    numberSchools[i] = i;
}
for (i = 0; i<cursSection.length; i++) {  
    monthTag[ cursSection[i].dataset.month ] = cursSection[i].querySelector('.curs__month').innerText;
    numberMonth[i] = i;
}  
var names = [];
for (var i = 0; i < lections.length; i++) {
    names[i] = lections[i].getAttribute('data-author');
    numberNames[i] = i ;
}
names = getUnique(names);
makeTags('lector', names, numberNames);
makeTags('school', lectionsTag, numberSchools);
makeTags('month', monthTag, numberMonth);
colorSheduleTag();
checkOldLections();
/*
*
* Вешаем на чекбоксы event listeners. 
* Фильтруем теги.
* TODO: Поиск по лекторам
* 
*/
var checkbox = document.querySelectorAll("[type='checkbox']");
for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].onchange = function (el) {
        if ( ~el.target.id.indexOf('lector') ){
                var index = el.target.id.match(/\d+/)[0];
                filter( 'author', index, names );
        }
        if ( ~el.target.id.indexOf('school') ){
                var index = el.target.id.match(/\d+/)[0];
                filter( 'tag', index, lectionsTag );
        }
        if ( ~el.target.id.indexOf('month') ){
                var index = el.target.id.match(/\d+/)[0];
                filter( 'month', index, monthTag );
        }
        checkVisibility();

    }
}
/*
*
* Показать все и скрыть все по клику.
* Вешаем событие.
* 
*/
var show = document.querySelectorAll(".show-all");
for (var i = 0; i < show.length; i++) {
    show[i].onclick = function(event){
        event.preventDefault();
        var typeOfCheckbox = event.target.parentNode.nextElementSibling.className.substring(0, 3);
        showShedule( typeOfCheckbox, document.querySelectorAll("[type='checkbox']") );
    }
}
var hide = document.querySelectorAll(".hide-all");
for (var i = 0; i < hide.length; i++) {
    hide[i].onclick = function(event){
        event.preventDefault();
        var typeOfCheckbox = event.target.parentNode.nextElementSibling.className.substring(0, 3);
        hideShedule( typeOfCheckbox, document.querySelectorAll("[type='checkbox']") );
    }
}
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
for (var i = 0; i < lectors.length; i++) {
    lectors[i].onclick = function(event){
        event.preventDefault();
        var shadow = { element: "div" };
        var shadowAttr = { class: "modal-shadow"};
        var shadow = document.body.insertBefore( makeElement( shadow, shadowAttr ), document.body[0] );
        var modal = document.body.insertBefore( makemodal( lectors ), document.body[0] );   
        document.querySelector(".modalWindow").innerHTML = addmodalInfo( getLectorLinks( event.target.parentNode.dataset.author ) );
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
}
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
for (var i = 0; i < Object.keys(lectionsTag).length; i++) {
    addLinkToOld( Object.keys(lectionsTag)[i] );
}
/*
*
* Разворачивание фильтра по клику
*
*/
document.querySelector('.more-filter').onclick = function(el){
    el.target.classList.toggle('opened');
    document.querySelector('.all-filters').classList.toggle('visible');
}
var sort = document.querySelectorAll('.sort');
for (var i = 0; i < sort.length; i++) {
        sort[i].onclick = function(el){
            if ( el.target.nextElementSibling ) {
                el.target.classList.toggle('opened');
                el.target.nextElementSibling.classList.toggle('visible');
            }
        }
}