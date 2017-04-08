/* VARIÁVEIS PARA O FUNCIONAMENTO DO GULP */
var gulp =       require('gulp'),
    uglify =     require('gulp-uglify'),
    server =     require('gulp-live-server'),
    browserify = require('gulp-browserify'),
    rename =     require('gulp-rename');

/* TAREFAS A SEREM EXECUTADAS */
gulp.task('default', ['browserify', 'watch', 'serve']);

/*
* OBSERVA TODOS OS ARQUIVOS .js DENTRO DA PASTA /app.
* QUAISQUER MODIFICAÇÕES NESSES ARQUIVOS, SERÁ EXECUTADA
* A TAREFA browserify QUE ESTÁ LOGO ABAIXO
* */
gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['browserify']);
});

/*
* CRIA UM SERVIDOR ESTÁTICO DENTRO DA PASTA /public, RECONHECENDO
* O ARQUIVO index.html E ABRIRÁ UM SERVIDOR NA PORTA 8000
* */
gulp.task('serve', function() {
    var serve = server.static('./public', 8000);
    serve.start();

    /*
    * OBSERVA TODOS ARQUIVOS .js DENTRO DE /public/js
    * E QUAISQUER MODIFICAÇÕES NOS ARQUIVOS, ELES SERÃO
    * ATUALIZADOS E SERÁ EXECUTADO O SERVER NOVAMETE
    * */
    gulp.watch('public/js/**/*.js', function(file) {
        server.notify.apply(serve, [file]);
    });

    /*
     * OBSERVA TODOS ARQUIVOS .html DENTRO DE /public
     * E QUAISQUER MODIFICAÇÕES NOS ARQUIVOS, ELES SERÃO
     * ATUALIZADOS E SERÁ EXECUTADO O SERVER NOVAMETE
     * */
    gulp.watch('public/**/*.html', function(file) {
        server.notify.apply(serve, [file]);
    });
});

/*
* OBSERVA O ARQUIVO app/app.js E SUAS MODIFICAÇÕES
* */
gulp.task('browserify', function() {
    return gulp.src(['app/app.js'])
        .pipe(browserify()) // Reconhece os arquivos JavaScript e os coloca de modo organizado para que o JS funcione corretamente
        .pipe(uglify()) // Minifica o arquivo app.js
        .pipe(rename("main.js")) // Renomeia o arquivo app.js para main.js
        .pipe(gulp.dest('public/js/')); // Configura a pasta de destino do arquivo renomeado anteriormente
});