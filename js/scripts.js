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
*
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
function makemodal( info ){
        var modal = { element: "div" };
        var modalAttr = { class: "modalWindow"}; 
        modal = makeElement( modal, modalAttr );
        return modal;
}
function makeText( text, name ){
    var span = document.createElement('span');
    span.className = name;
    span.innerHTML = text;
    return span;
}
function getColor(){
    var r=Math.floor(Math.random() * (256));
    var g=Math.floor(Math.random() * (256));
    var b=Math.floor(Math.random() * (256));
    var rgba = "rgba("+r+', '+g+', '+b+", 0.5)";
    return rgba;
}
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
function showShedule( typeOfCheckbox, checkbox ){
    checkbox.forEach(function(element){
        if( ~element.id.indexOf( typeOfCheckbox ) ){
            if ( element.checked == "" ) {
                element.click();
            }
        }
    });

}
function hideShedule( typeOfCheckbox, checkbox ){
    checkbox.forEach(function(element){
        if( ~element.id.indexOf( typeOfCheckbox ) ){
            if ( element.checked != "" ) {
                element.click();
            }
        }
    });    
}
function splitDate( day ){
    var separateDate = day.split('-');
    var date = new Date(separateDate[0], separateDate[1] - 1, separateDate[2]);
    return date;
}
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
    addInfoToOldLection();
    return true;

}
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
function getLectorLinks( lector ){
    list = JSON.parse( loadInfo() );
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
function addInfoToOldLection(){
    var shri = sortSchools("shri");
    var shmd = sortSchools("shmd");
    var shmr = sortSchools("shmr");
    console.log(shri, shmd, shmr);
    return true;
}
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
function removemodal(){
    var modal = document.body.querySelector('.modalWindow');
    var shadow = document.body.querySelector('.modal-shadow');
    document.body.removeChild( modal );
    document.body.removeChild( shadow );
    return true;
}
var lections = document.getElementsByClassName('curs__lection');
var names = [];
for (var i = 0; i < lections.length; i++) {
    names[i] = lections[i].getAttribute('data-author');
}
names = getUnique(names);
makeTags(names);

var checkbox = document.querySelectorAll("[type='checkbox']");
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
var curs = document.querySelector('.curs');
var cursSection = curs.querySelectorAll('.curs__section');
var cursItem = curs.querySelectorAll('.curs__item');
var show = document.querySelectorAll(".show-all");
var hide = document.querySelectorAll(".hide-all");
var lectors = document.querySelectorAll(".curs__item__lector");
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
/*
*
* Вешаем на лекторов модальные окна.
* Достаем из json информацию о них.
* Добавляем возможность закрыть окно.
* 
*/
lectors.forEach( function( el ){
    el.onclick = function(event){
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
var form = document.forms["getDate"];
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
document.querySelector('.show-date').onclick = function(){
    for (var i = 0; i < cursItem.length; i++) {
        cursItem[i].style.display = "block";
    }
    document.forms.getDate.elements.date_first.value = ''
    document.forms.getDate.elements.date_last.value = ''
    checkVisibility();
};
checkOldLections();