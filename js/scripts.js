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
        parentElement[0].insertBefore( makeCheckboxes(names)[i], curs );
        parentElement[0].insertBefore( makeLabels( Object.keys(names)[i], i ), curs );
        i+=1;
    }
}
function makeCheckboxes(names){
    var i  = 0;
    var checkboxes = [];
    for ( name in names ) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = "author" + i;
        checkbox.setAttribute('checked','checked');
        checkbox.onclick = function(){
            a = checkbox.id.match(/\d+/)[0];
        };
        checkboxes[i] = checkbox;
        i+=1;
    }
    return checkboxes;  
}
// собрать в одну функцию, придумать, как
function makeLabels( name, i ){
        var label = document.createElement('label');
        label.className = "tag author"+i;
        label.innerHTML = name;
        label.setAttribute('for',"author"+i);
        label.style.backgroundColor = getColor();
        return label;    
}
// makeElement(  ){

// }
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
                item[j].classList.add('old-lection');
                addInfoToOldLection( item[j] );
            }
        }
    }
    return true;

}
function addInfoToOldLection( old ){

    var oldLection = old;
    //oldLection.querySelector('.curs__item__name').insertBefore();

}
var lectures = document.getElementsByClassName('curs__lection');
var names = [];
for (var i = 0; i < lectures.length; i++) {
    names[i] = lectures[i].getAttribute('data-author');
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