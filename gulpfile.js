//---//Конфиг Gulp//---//
//--//вставь в консоль: npm install gulp gulp.spritesmith browser-sync gulp-livereload path gulp-less gulp-sass --save-dev//--//

var gulp = require('gulp'),
	path = require('path'),
  spritesmith = require('gulp.spritesmith');

  //---//Sass или Less//---//
  //--//закомментировать ненужное//--//
  //var less = require('gulp-less');
  var sass = require('gulp-sass');


  //---//Browser Sync или Livereload//---//
  //--//закомментировать ненужное//--//
  var livereload = require('gulp-livereload');
  //var browserSync = require('browser-sync').create();


  //---//Настройки путей//---//
  var site = "ya.dev";
  var reloadStyle = "watchMyStylesLR";
  var cssStyler = "wsass";
  var paths = { 

    src: { 
      css: '*.css',
      sass: 'sass/**/*.scss',
    }, 

    dest: { 
      css: '',
      sass: 'sass/',
    } 
  };

  //Настройки

gulp.task('html', function() {
  gulp.src(paths.src.html)
  //.pipe(browserSync.reload());
});
gulp.task('watchMyHtml', function() {
    gulp.watch(paths.src.html, ['html']);
});

gulp.task('js', function() {
  gulp.src(paths.src.js)
  //.pipe(browserSync.reload());
});
gulp.task('watchMyJs', function() {
    gulp.watch(paths.src.js, ['js']);
});


//стили CSS и Less

gulp.task('myStyles', function () {
    gulp.src(paths.src.css)
      .pipe(livereload());
      //.pipe(browserSync.stream());
});

gulp.task('less', function () {
  return gulp.src(paths.src.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
    }))
    .pipe(gulp.dest(paths.dest.css))
});

gulp.task('sass', function () {
  return gulp.src(paths.src.sass)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(paths.dest.css))
});

//изменения в CSS

gulp.task('watchMyStylesBS', function() {
    // browserSync.init({
    //     proxy: site
    // });
    gulp.watch(paths.src.css, ['myStyles']);
});
gulp.task('watchMyStylesLR', function() {
    livereload.listen();
    gulp.watch(paths.src.css, ['myStyles']);
});

gulp.task('wless', function () {
    gulp.watch(paths.src.less, ['less']);
});
gulp.task('wsass', function () {
    gulp.watch(paths.src.sass, ['sass']);
});


//sprite

gulp.task('spriteLess', function() {
  var fileName = 'sprite.png';
  var spriteData = 
        gulp.src(paths.src.sprite) // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: fileName,
                cssName: 'sprite.less',
                cssFormat: 'less',
                algorithm: 'binary-tree',
                padding: 20,
                cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name
                },
                imgPath: '/sprite/' + fileName
            }));

    spriteData.img.pipe(gulp.dest(paths.dest.sprite));// путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest(paths.dest.less)); // путь, куда сохраняем стили
});
gulp.task('spriteSass', function() {
  var fileName = 'sprite.png';
  var spriteData = 
        gulp.src(paths.src.sprite) // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: fileName,
                cssName: '_sprite.scss',
                cssFormat: 'scss',
                algorithm: 'binary-tree',
                cssTemplate: paths.src.mustache,
                padding:20,
                cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name
                },
                imgPath: '/sprite/' + fileName
            }));

    spriteData.img.pipe(gulp.dest(paths.dest.sprite));// путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest(paths.dest.spritescss)); // путь, куда сохраняем стили
});

gulp.task('prefix', function () {
  return gulp.src(paths.src.css)
    .pipe(autoprefixer({
      browsers: [
        'last 3 versions'
      ],
      cascade: false
    }))
    .pipe(gulp.dest(paths.dest.css))
});

gulp.task('dev', [reloadStyle, cssStyler, 'watchMyJs']);
gulp.task('easy', [reloadStyle, cssStyler]);