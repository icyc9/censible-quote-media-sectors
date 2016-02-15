var gulp   = require('gulp')
var mocha  = require('gulp-mocha')

gulp.task('default', ['test', 'spec']);

gulp.task('watch', function(){
  var spec = function(file) {
    return file.replace(/(.spec)?.js$/gi, '.spec.js');
  };

  gulp.watch('./**/*.{js,es}', function () {
    gulp.run('clear')

    return gulp.src( spec( arguments[0].path ), { read: false })
      .pipe( mocha({ reporter: 'spec', globals: {} }) )
      .on('error', function ( error ) {
        console.log( error.toString() )
      })
  })
});

gulp.task('clear', function(){
  var _
//  , clear = '\u001B[2J'
//  , clear = '\033[2J'
//  , home  = '\u001B[0;0f'
//  , home  = '\033[;H'
    , clear = '\033[2J'     // same thing
    , home  = '\033[0f'     // but shorter (Tom)?
    , reset_colour = '\033[0m'
    , sequence = clear + home + reset_colour

  console.log(sequence)
})
