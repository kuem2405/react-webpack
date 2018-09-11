// index.js
// import sum from './math' (ES6)
// var sum = require('./math')

// const total = sum(3, 5)
// console.log(total)
// document.write(total)

// var para = document.createElement("P");
// var t = document.createTextNode(`Sum: ${total}`);
// para.appendChild(t);
// document.body.appendChild(para);
import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(
    `<h1>React - Webpack - Test Cache</h1><img src="/public/image.png" />`,
    document.getElementById('root')
)