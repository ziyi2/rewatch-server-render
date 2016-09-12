/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _serveFavicon = __webpack_require__(3);

	var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

	var _bodyParser = __webpack_require__(4);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _morgan = __webpack_require__(5);

	var _morgan2 = _interopRequireDefault(_morgan);

	var _ejs = __webpack_require__(6);

	var _ejs2 = _interopRequireDefault(_ejs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	// view engine setup
	app.set('views', _path2.default.join(__dirname, 'view'));
	app.engine('.html', _ejs2.default.__express);
	app.set('view engine', 'html');

	// uncomment after placing your favicon in /public
	//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use((0, _morgan2.default)('dev'));
	app.use(_bodyParser2.default.json());
	app.use(_bodyParser2.default.urlencoded({ extended: false }));
	app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

	app.use('/', __webpack_require__(7));

	//app.use('/users', users);

	// catch 404 and forward to error handler
	//app.use(function(req, res, next) {
	//  var err = new Error('Not Found');
	//  err.status = 404;
	//  next(err);
	//});

	// error handlers

	// development error handler
	// will print stacktrace
	//if (app.get('env') === 'development') {
	//  app.use(function(err, req, res, next) {
	//    res.status(err.status || 500);
	//    res.render('error', {
	//      message: err.message,
	//      error: err
	//    });
	//  });
	//}
	//
	//// production error handler
	//// no stacktraces leaked to user
	//app.use(function(err, req, res, next) {
	//  res.status(err.status || 500);
	//  res.render('error', {
	//    message: err.message,
	//    error: {}
	//  });
	//});


	var PORT = process.env.PORT || 3000;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("ejs");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(9);

	var _reactRouter = __webpack_require__(10);

	var _reactRedux = __webpack_require__(11);

	var _redux = __webpack_require__(12);

	var _App = __webpack_require__(13);

	var _App2 = _interopRequireDefault(_App);

	var _configureStore = __webpack_require__(16);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _qs = __webpack_require__(21);

	var _qs2 = _interopRequireDefault(_qs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = _express2.default.Router();

	// 添加到文件开头

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


	router.get('/*', function (req, res, next) {
	    handleRender(req, res);
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


	function handleRender(req, res) {

	    //产生一个随机数
	    function getRandomInt(min, max) {
	        return Math.floor(Math.random() * (max - min)) + min;
	    }

	    //这里模拟一个异步请求,延时5000ms,当然真实的数据库操作时间更短
	    function fetchCounter(callback) {
	        // Rather than immediately returning, we delay our code with a timeout to simulate asynchronous behavior
	        setTimeout(function () {
	            callback(getRandomInt(1, 100));
	        }, 5000);

	        // In the case of a real world API call, you'll normally run into a Promise like this:
	        // API.getUser().then(user => callback(user))
	    }

	    fetchCounter(function (randomCounter) {
	        // Read the counter from the request, if provided
	        var params = _qs2.default.parse(req.query);
	        var counter = parseInt(params.counter, 10) || randomCounter || 0;
	        console.log(counter);
	        var preloadedState = { counter: counter };
	        var store = (0, _configureStore2.default)(preloadedState); //初始state等于1


	        //把组件渲染成字符串
	        var appHtml = (0, _server.renderToString)(_react2.default.createElement(
	            _reactRedux.Provider,
	            { store: store },
	            _react2.default.createElement(_App2.default, null)
	        ));

	        //从store中获取state,把state一同返回给客户端
	        //Redux 在服务端惟一要做的事情就是，提供应用所需的初始 state
	        var initialState = store.getState();
	        console.log(initialState);

	        //把渲染后的页面内容发送给客户端
	        res.send(renderFullPage(appHtml, initialState));
	    });
	}

	function renderFullPage(html, initialState) {
	    return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Counter Example</title>\n      </head>\n      <body>\n        <h1>Hello,Redux-Server</h1>\n        <h2>Hello,Supervisor</h2>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(initialState) + '\n        </script>\n        <script src="/js/react.min.js"></script>\n        <script src="/js/react-dom.min.js"></script>\n        <script src="/js/common.js"></script>\n        <script src="/js/bundle.js"></script>\n      </body>\n    </html>\n    ';
	}

	//如何传递 state 呢，我们添加一个 <script> 标签来把 initialState 赋给 window.__PRELOADED_STATE__


	module.exports = router;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(12);

	var _reactRedux = __webpack_require__(11);

	var _Counter = __webpack_require__(14);

	var _Counter2 = _interopRequireDefault(_Counter);

	var _actions = __webpack_require__(15);

	var CounterActions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function mapStateToProps(state) {
	    return {
	        counter: state.counter
	    };
	}

	function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)(CounterActions, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Counter2.default);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Counter = function (_Component) {
	    _inherits(Counter, _Component);

	    function Counter() {
	        _classCallCheck(this, Counter);

	        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
	    }

	    _createClass(Counter, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var increment = _props.increment;
	            var incrementIfOdd = _props.incrementIfOdd;
	            var incrementAsync = _props.incrementAsync;
	            var decrement = _props.decrement;
	            var counter = _props.counter;

	            return _react2.default.createElement(
	                'p',
	                null,
	                'Clicked: ',
	                counter,
	                ' times',
	                ' ',
	                _react2.default.createElement(
	                    'button',
	                    { onClick: increment },
	                    '+'
	                ),
	                ' ',
	                _react2.default.createElement(
	                    'button',
	                    { onClick: decrement },
	                    '-'
	                ),
	                ' ',
	                _react2.default.createElement(
	                    'button',
	                    { onClick: incrementIfOdd },
	                    'Increment if odd'
	                ),
	                ' ',
	                _react2.default.createElement(
	                    'button',
	                    { onClick: function onClick() {
	                            return incrementAsync();
	                        } },
	                    'Increment async'
	                )
	            );
	        }
	    }]);

	    return Counter;
	}(_react.Component);

	Counter.propTypes = {
	    increment: _react.PropTypes.func.isRequired,
	    incrementIfOdd: _react.PropTypes.func.isRequired,
	    incrementAsync: _react.PropTypes.func.isRequired,
	    decrement: _react.PropTypes.func.isRequired,
	    counter: _react.PropTypes.number.isRequired
	};

	exports.default = Counter;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.set = set;
	exports.increment = increment;
	exports.decrement = decrement;
	exports.incrementIfOdd = incrementIfOdd;
	exports.incrementAsync = incrementAsync;
	var SET_COUNTER = exports.SET_COUNTER = 'SET_COUNTER';
	var INCREMENT_COUNTER = exports.INCREMENT_COUNTER = 'INCREMENT_COUNTER';
	var DECREMENT_COUNTER = exports.DECREMENT_COUNTER = 'DECREMENT_COUNTER';

	function set(value) {
	    return {
	        type: SET_COUNTER,
	        payload: value
	    };
	}

	function increment() {
	    return {
	        type: INCREMENT_COUNTER
	    };
	}

	function decrement() {
	    return {
	        type: DECREMENT_COUNTER
	    };
	}

	function incrementIfOdd() {
	    return function (dispatch, getState) {
	        var _getState = getState();

	        var counter = _getState.counter;


	        if (counter % 2 === 0) {
	            return;
	        }

	        dispatch(increment());
	    };
	}

	function incrementAsync() {
	    var delay = arguments.length <= 0 || arguments[0] === undefined ? 1000 : arguments[0];

	    return function (dispatch) {
	        setTimeout(function () {
	            dispatch(increment());
	        }, delay);
	    };
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(12);

	var _reduxThunk = __webpack_require__(17);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(18);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reduxLogger = __webpack_require__(20);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loggerMiddleware = (0, _reduxLogger2.default)();

	function configureStore(preloadedState) {
	    var store = (0, _redux.createStore)(_reducers2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware));

	    //if (module.hot) {//
	    //    // Enable Webpack hot module replacement for reducers
	    //    module.hot.accept('../reducers', () => {
	    //        const nextRootReducer = require('../reducers').default
	    //        store.replaceReducer(nextRootReducer)
	    //    })
	    //}

	    return store;
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(12);

	var _counter = __webpack_require__(19);

	var _counter2 = _interopRequireDefault(_counter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	    counter: _counter2.default
	});

	exports.default = rootReducer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = counter;

	var _actions = __webpack_require__(15);

	function counter() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _actions.SET_COUNTER:
	            return action.payload;
	        case _actions.INCREMENT_COUNTER:
	            return state + 1;
	        case _actions.DECREMENT_COUNTER:
	            return state - 1;
	        default:
	            return state;
	    }
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("qs");

/***/ }
/******/ ]);