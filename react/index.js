import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';


//在客户端，使用服务器返回的 state 创建并初始化一个全新的 Redux store
// 使用初始 state 创建 Redux store
const preloadedState = window.__PRELOADED_STATE__;
console.log(preloadedState);




const store = configureStore(preloadedState);
const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);


//当页面加载时，打包后的 js 会启动，
//并调用 React.render()，
//然后会与服务端渲染的 HTML 的 data-react-id 属性做关联。
//这会把新生成的 React 实例与服务端的虚拟 DOM 连接起来。
//因为同样使用了来自 Redux store 的初始 state，
//并且 view 组件代码是一样的，
//结果就是我们得到了相同的 DOM
//就是这样！这就是实现服务端渲染的所有步骤