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
            console.log()
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
function getColor(){
    var r=Math.floor(Math.random() * (256));
    var g=Math.floor(Math.random() * (256));
    var b=Math.floor(Math.random() * (256));
    var rgba = "rgba("+r+', '+g+', '+b+", 0.5)";
    return rgba;
}
var lectures = document.getElementsByClassName('curs__lection');
var names = [];
for (var i = 0; i < lectures.length; i++) {
    names[i] = lectures[i].getAttribute('data-author');
}
names = getUnique(names);
makeTags(names);
var checkbox = document.querySelectorAll("[type='checkbox']");
checkbox.forEach(function(element){
    element.onchange = function () {
        cursItem = checkbox.getElementsByClassName('curs__item');
        console.log(cursItem);
        for (var i = 0; i < cursItem.length; i++) {

            if ( cursItem[i].offsetHeight < 1){
                cursItem[i].classList.add("disable");
            }else{
                cursItem[i].classList.remove("disable");
            }

        }
    }
});