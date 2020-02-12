const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css를 추출해서 파일로 저장하는 플러그인
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// import path from 'path'
// import {CleanWebpackPlugin} from 'clean-webpack-plugin'

module.exports = {
    entry : './src/index.js', //웹팩 빌드 대상 파일 위치. 해당 파일 기준으로 import된 모듈들을 찾아 하나의 파일로 번들링.
    output:{   //웹팩 빌드 완료 시, 빌드파일 생성을 위한 설정
        filename: 'index.js',
        path:path.resolve(__dirname+'/build')
    },
    //소스 구독방식의 자동 webpack 실행
    devServer: {
        contentBase: path.resolve("./build"),
        index: "index.html",
        port: 9000
      },
    mode:'none', //웹팩 빌드 옵션. production : 최적화, development : 빠른속도 , 

    //------아래는 담당 로더 할당을 위한 코드
    module : {
        rules: [ //로더 등록
            //리액트 적용하기 위해 es6에서 es5로 js변환해주는 바벨 사용한다는 말
            {   
                test:/\.(js|jsx)$/,
                exclude:'/node_modules',
                use:['babel-loader']
            },
            {
                test : /\.html$/, //해당 정규표현식에 match되는 파일 대상
                use : [
                    {
                        loader : 'html-loader',   //loader는 자바스크립트 파일이 아닌 파일을 웹팩이 이해할 수 있도록 해줌
                        options : {minimize : true}  //code 최적화 옵션
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'   //use에 있는 loader의 순서는 오른쪽에서 왼쪽으로. css-loader로 파일을 읽고, mini.loader로 읽은 css를 추출해냄
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',  //use에 있는 loader의 순서는 오른쪽에서 왼쪽으로. css-loader로 파일을 읽고, mini.loader로 읽은 css를 추출해냄
                    'sass-loader'   //sass loader가 sass를 읽어서 css로 변환함
                ]
            }
        ]
    },
    plugins: [  //플러그인 등록
        new HtmlWebPackPlugin({ //html을 읽어서 빌드할 수 있게 해줌.
            template : './public/index.html',// 해당 파일을 읽는다
            filename : 'index.html' //output 파일 명
        }),
        new MiniCssExtractPlugin({
            filename:'style-test.css' //빌드 후 분리한 css파일
        }),
        new CleanWebpackPlugin()
    ]
}