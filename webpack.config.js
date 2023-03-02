const path = require('path')

const Dotenv = require('dotenv-webpack')

const config = {
    entry:['@babel/polyfill','./src/index.js'],
    output:{
        path: path.resolve(__dirname,'build/'),
        filename:'main.js'
    },
    devServer:{
        static:path.resolve(__dirname,'build'),
        compress:true,
        port:3000,
    },
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env',['@babel/preset-react',{'runtime':'automatic'}]],
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            }
        ],
    },
    plugins:[
        new Dotenv({path:path.resolve(__dirname,'./.env')})
    ]
}

module.exports=config