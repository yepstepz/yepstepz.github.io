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
function getUnique(arr) {
  var obj = {},
  newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true;
  }

  return obj;
}
var lectures = document.getElementsByClassName('curs__lection');
var names = [];
for (var i = 0; i < lectures.length; i++) {
    names[i] = lectures[i].getAttribute('data-author');
}
names = getUnique(names);
console.log(names);