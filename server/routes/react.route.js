import express from 'express';
const router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match , browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../../react/containers/App';
import configureStore from '../../react/store/configureStore';


import qs from 'qs'; // 添加到文件开头

//import routes from '../../react/routes/routes';
//import configureStore from '../views/react/store';
//import { LOGIN_RECEIVE } from '../views/react/actions'
//import reducers from '../views/react/reducers'


// send all requests to index.html so browserHistory works
//router.get('/*', (req, res,next) => {
//    match({ routes, location: req.url }, (err, redirect, props) => {
//        if (err) {
//            res.status(500).send(err.message)
//        } else if (redirect) {
//            res.redirect(redirect.pathname + redirect.search)
//        } else if (props) {
//            // hey we made it!
//            const appHtml = renderToString(<RouterContext {...props}/>);
//            res.render('index',{
//               html:appHtml
//            });
//        } else {
//            res.status(404).send('Not Found')
//        }
//    })
//});


router.get('/*', (req, res,next) => {
    handleRender(req,res);
});

//同步请求版本
/*
function handleRender(req,res) {
    //对每个请求创建一个新的 Redux store实例。这个store惟一作用是提供应用初始的state
    //创建新的redux store
    // 如果存在的话，从 request 读取 counter




    //在服务端，渲染是同步执行的而且我们只有一次渲染 view 的机会。
    //在收到请求时，
    //可能需要根据请求参数或者外部 state（如访问 API 或者数据库），
    //计算后得到初始 state

    //请求会包含 URL 请求相关信息，
    //包括请求参数，它们对于做 React Router 路由时可能会有用。
    //也可能在请求头里包含 cookies，鉴权信息或者 POST 内容数据。
    //下面演示如何基于请求参数来得到初始 state。



    //在浏览器中输入下面链接,counter就变了,也就是初始值就变了
    //http://localhost:3000/?counter=100

    const params = qs.parse(req.query);
    const counter = parseInt(params.counter) || 0;
    console.log(counter);
    const preloadedState = { counter };
    const store = configureStore(preloadedState);    //初始state等于1




    //把组件渲染成字符串
    const appHtml = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );


    //从store中获取state,把state一同返回给客户端
    //Redux 在服务端惟一要做的事情就是，提供应用所需的初始 state
    const initialState = store.getState();
    console.log(initialState);

    //把渲染后的页面内容发送给客户端
    res.send(renderFullPage(appHtml, initialState));
}
*/


//实际在数据库渲染的时候当然要发起异步请求,因为会访问数据库等操作


//再次说明一下，这只是一个模拟的 API，
//我们使用 setTimeout 模拟一个需要 5000 毫秒的请求（实现项目中 API 请求一般会更快）。
//传入一个回调函数，它异步返回一个随机数字。
//如果你使用了基于 Promise 的 API 工具，那么要把回调函数放到 then 中。



//在服务端，把代码使用 fetchCounter 包起来，在回调函数里拿到结果：



function handleRender(req,res) {

    //产生一个随机数
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }


    //这里模拟一个异步请求,延时5000ms,当然真实的数据库操作时间更短
    function fetchCounter(callback) {
        // Rather than immediately returning, we delay our code with a timeout to simulate asynchronous behavior
        setTimeout(() => {
            callback(getRandomInt(1, 100))
        }, 5000);

        // In the case of a real world API call, you'll normally run into a Promise like this:
        // API.getUser().then(user => callback(user))
    }


    fetchCounter( randomCounter => {
        // Read the counter from the request, if provided
        const params = qs.parse(req.query);
        const counter = parseInt(params.counter, 10) || randomCounter || 0;
        console.log(counter);
        const preloadedState = { counter };
        const store = configureStore(preloadedState);    //初始state等于1


        //把组件渲染成字符串
        const appHtml = renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        );


        //从store中获取state,把state一同返回给客户端
        //Redux 在服务端惟一要做的事情就是，提供应用所需的初始 state
        const initialState = store.getState();
        console.log(initialState);

        //把渲染后的页面内容发送给客户端
        res.send(renderFullPage(appHtml, initialState));
    })




}



function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Counter Example</title>
      </head>
      <body>
        <h1>Hello,Redux-Server</h1>
        <h2>Hello,Supervisor</h2>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/js/react.min.js"></script>
        <script src="/js/react-dom.min.js"></script>
        <script src="/js/common.js"></script>
        <script src="/js/bundle.js"></script>
      </body>
    </html>
    `
}


//如何传递 state 呢，我们添加一个 <script> 标签来把 initialState 赋给 window.__PRELOADED_STATE__


module.exports = router;


