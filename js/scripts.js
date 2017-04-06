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
function makeTags(names){
    var i  = 0;
    var parentElement = document.getElementsByClassName('content');
    var curs = document.querySelector('.curs');
    for ( name in names ) {
        parentElement[0].insertBefore( makeCheckboxes(names)[i], curs );
        parentElement[0].insertBefore( makeLabels(names)[i], curs );
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
function makeLabels(names){
    var i  = 0;
    var labels = [];
    for ( name in names ) {
        var label = document.createElement('label');
        label.className = "tag author"+i;
        label.innerHTML = name;
        label.setAttribute('for',"author"+i);
        label.style.backgroundColor = getColor();
        labels[i] = label;
        i+=1;
    }
    return labels;    
}
function makeText( text ){
    var span = document.createElement('span');
    span.className = "attention-text";
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
* Если в секции курсов не осталось элементов, 
* секция скрывается. Заодно фильтруем лекторов.
* TODO: Поиск по лекторам
* 
*/
checkbox.forEach(function(element){
    element.onchange = function (el) {
        cursItem = curs.querySelectorAll('.curs__item');
        cursSection = curs.querySelectorAll('.curs__section');
        if ( ~el.target.id.indexOf('author') ){
                var index = el.target.id.match(/\d+/)[0];
                filterLector( index, names );
        }
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
                curs.insertBefore( makeText( text ), curs[0] );
            }           
        } else {
            if ( message ) {
                    curs.removeChild( message );
            }
        }

    }
});
var curs = document.querySelector('.curs');
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
var date = {};
var year = {};
var month = {};
var day = {};
var cursSection = document.querySelectorAll('.curs__section');
        // var cursItem = cursSection[i].querySelectorAll('.curs__item');
        // var monthName = cursSection[i].getAttribute('data-month');
        // var yearName = cursSection[i].getAttribute('data-year');
cursSection.forEach(function(element){
     var monthName = element.getAttribute('data-month');  
     var cursItem = element.querySelectorAll('.curs__item');
     for (var i = 0; i < cursItem.length; i++) {
        console.log(cursItem.length);
            var dayName = cursItem[i].getAttribute("data-day");
            var day = {};
            day[i] = dayName;
            month[monthName] = day;
     }
     console.log(cursItem);
});