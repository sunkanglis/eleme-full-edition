
const gulp = require('gulp');
const server = require('gulp-webserver');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const watch = require('gulp-watch');
const del = require('del');

//全局的配置
const config = require('./config');
const {server_config, sass_config, webpack_config} = config;

//开启热更新服务器
gulp.task('server',()=>{
    return gulp.src('./dist')
        .pipe(server(server_config));
})


//输出html页面
gulp.task('copy:html',()=>{
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist/'));
})
//输出静态文件
gulp.task('copy:static',()=>{
    return gulp.src('./src/static/**/*.*')
        .pipe(gulp.dest('./dist/static'))
})

//处理scss
gulp.task('compile:scss',()=>{
    return gulp.src('./src/css/*.scss')
        .pipe(sass(sass_config).on('error',sass.logError))
        .pipe(gulp.dest('./dist/css'));
})
//模块打包js
gulp.task('compile:js',()=>{
    return gulp.src('./src/js/**/*.js')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('./dist/js'));
})

//监听任务
gulp.task('watch',()=>{
    gulp.watch('./src/**/*.html',['copy:html']);
    gulp.watch('./src/css/**/*.scss',['compile:scss']);
    gulp.watch('./src/js/**/*.*',['compile:js']); //为了热更新视图文件
    gulp.watch('src/static',['copy:static']);

    watch('src/static', (v) => { // 当src/static中文件变化后执行
        if ( v.event === 'unlink' ) { // 如果文件删除了
            let _path = v.history[0].replace('\src', '\dist'); // 要删除的路径
            del(_path);// 删除dist中的文件
        }else {
            gulp.start(['copy:static'])
        }
    })
})

//默认任务
gulp.task('default',['server','copy:html','compile:scss','compile:js','copy:static','watch'],()=>{
    console.log('Everything is done ...')
})