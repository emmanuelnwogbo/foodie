(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(_,e,r){"use strict";(function(_){var t;r.d(e,"b",function(){return i}),r.d(e,"a",function(){return o}),(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&t(_);var a,n,i="https://cors-anywhere.herokuapp.com/",o="aab5372034a011d2e22680ec60e6bdd6";(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(a.register(i,"proxy","C:\\Users\\USER\\Desktop\\MY WORK\\foodie-react\\config.js"),a.register(o,"key","C:\\Users\\USER\\Desktop\\MY WORK\\foodie-react\\config.js")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&n(_)}).call(this,r(10)(_))},22:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),axios__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(23),axios__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__),_scss_main_scss__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(54),_scss_main_scss__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_9__),_config__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(14),_components_SearchBar__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(24),_components_Container__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(25),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var App=function(_Component){function App(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,App),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"handleScroll",function(_){var r=e.state,t=r.scrolling,a=r.count,n=r.limit;if(!(t||a<=n)){var i=document.querySelector("div.container > div.container__card--parent:last-child"),o=i.offsetTop+i.clientHeight;window.pageYOffset+window.innerHeight>o-20&&e.loadMore()}}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"loadMore",function(){e.setState(function(_){return{limit:_.limit+10,scrolling:!0}},function(){e.setState({scrolling:!1})})}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"getResults",function(_){e.setState({recipes:null,count:null,loaderVisibility:"block"},function(){e.setState({limit:12},function(){axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_10__.b,"http://food2fork.com/api/search?key=").concat(_config__WEBPACK_IMPORTED_MODULE_10__.a,"&q=").concat(_)).then(function(_){window.removeEventListener("scroll",e.handleScroll,!1);var r=_.data,t=r.recipes,a=r.count,n=Object(react__WEBPACK_IMPORTED_MODULE_7__.lazy)(function(){return __webpack_require__.e(3).then(__webpack_require__.bind(null,63))});e.setState({recipeCard:n,recipes:t,count:a,loaderVisibility:"none"},function(){window.addEventListener("scroll",e.handleScroll,!1)})}).catch(function(_){console.log(_)})})})}),e.state={recipes:null,count:null,recipeCard:null,limit:12,scrolling:!1,loaderVisibility:"none"},window.addEventListener("scroll",e.handleScroll,!1),e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App,[{key:"componentDidMount",value:function(){this.getResults("pizza")}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"app"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SearchBar__WEBPACK_IMPORTED_MODULE_11__.a,{getResults:this.getResults}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_12__.a,{card:this.state.recipeCard,recipes:this.state.recipes,count:this.state.count,limit:this.state.limit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"loader__loader",style:{display:this.state.loaderVisibility}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"loader__loader--animation",id:"loader--animation"})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(react__WEBPACK_IMPORTED_MODULE_7__.Component),_default=App,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(App,"App","C:\\Users\\USER\\Desktop\\MY WORK\\foodie-react\\src\\App.jsx"),reactHotLoader.register(_default,"default","C:\\Users\\USER\\Desktop\\MY WORK\\foodie-react\\src\\App.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(10)(module))},24:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_scss_components_searchBar_scss__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(57),_scss_components_searchBar_scss__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_scss_components_searchBar_scss__WEBPACK_IMPORTED_MODULE_8__),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var SearchBar=function(_Component){function SearchBar(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,SearchBar),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SearchBar).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"getQuery",function(_){var r;"Enter"===_.key&&(r=_.target.value,e.props.getResults(r))}),e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SearchBar,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SearchBar,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"searchBar"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1",{className:"searchBar--name"},"Foodie"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"searchBar__input--parent"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{type:"text",onKeyPress:this.getQuery,className:"searchBar--input",placeholder:"find recipes"})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),SearchBar}(react__WEBPACK_IMPORTED_MODULE_7__.Component),_default=SearchBar,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(SearchBar,"SearchBar","C:\\Users\\USER\\Desktop\\MY WORK\\foodie-react\\src\\components\\SearchBar.jsx"),reactHotLoader.register(_default,"default","C:\\Users\\USER\\Desktop\\MY WORK\\foodie-react\\src\\components\\SearchBar.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(10)(module))},25:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_scss_components_container_scss__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(59),_scss_components_container_scss__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_scss_components_container_scss__WEBPACK_IMPORTED_MODULE_8__),_scss_components_lazyLoadingCard_scss__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(61),_scss_components_lazyLoadingCard_scss__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_scss_components_lazyLoadingCard_scss__WEBPACK_IMPORTED_MODULE_9__),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var Container=function(_Component){function Container(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Container),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Container).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"returnRecipes",function(){if(void 0===e.props.recipes)return console.log("api calls finished");if(null!==e.props.recipes&&e.props.recipes.length&&0!==e.props.recipes.length){var _=e.props.card;return e.props.recipes.map(function(r){if(e.props.recipes.indexOf(r)<=e.props.limit)return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Suspense,{key:r.recipe_id,fallback:react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"lazyLoading--placeholder"})},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_,{key:r.recipe_id,id:r.recipe_id,recipe:r}))})}}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"returnCount",function(){if(null!==e.props.count)return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",null,"Found ",e.props.count," results")}),e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Container,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Container,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"container",id:"container"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"container--count"},this.returnCount()),this.returnRecipes())}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Container}(react__WEBPACK_IMPORTED_MODULE_7__.Component),_default=Container,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(Container,"Container","C:\\Users\\USER\\Desktop\\MY WORK\\foodie-react\\src\\components\\Container.jsx"),reactHotLoader.register(_default,"default","C:\\Users\\USER\\Desktop\\MY WORK\\foodie-react\\src\\components\\Container.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(10)(module))},26:function(_,e,r){"use strict";r.r(e);var t=r(0),a=r.n(t),n=r(21),i=r.n(n),o=r(22);i.a.render(a.a.createElement(o.a,null),document.getElementById("app"))},54:function(_,e,r){var t=r(55);"string"==typeof t&&(t=[[_.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(12)(t,a);t.locals&&(_.exports=t.locals)},55:function(_,e,r){(_.exports=r(11)(!1)).push([_.i,'*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}html{box-sizing:border-box;font-size:69%}@media only screen and (max-width: 194.5em){html{font-size:90%}}@media only screen and (max-width: 167.5em){html{font-size:97%}}@media only screen and (max-width: 125em){html{font-size:90%}}@media only screen and (max-width: 64em){html{font-size:74%}}@media only screen and (max-width: 50em){html{font-size:58%}}@media only screen and (max-width: 48em){html{font-size:56%}}@media only screen and (max-width: 37.5em){html{font-size:73%}}@media only screen and (max-width: 25.875em){html{font-size:55%}}@media only screen and (max-width: 25.688em){html{font-size:50%}}@media only screen and (min-width: 230em){html{font-size:133%}}body{font-family:"Lato", sans-serif;font-weight:400;line-height:1.7}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes pulse{0%{background:linear-gradient(to left, #e6e6e6)}100%{background:linear-gradient(to left, #e6e6e6, #ccc)}}.app{position:relative;background:#fff}.loader__loader{position:absolute;top:50%;width:100%;left:0;padding:3rem;transform:translateY(8rem);z-index:3000}.loader__loader--animation{width:7rem;height:7rem;border-radius:50%;border:.5rem solid;border-color:#e67e22 #e67e22 #e67e22 #fff;transition:all .5s ease-in;background:transparent;position:relative;animation:spin 1s linear 1s infinite;margin:0 auto}\n',""])},57:function(_,e,r){var t=r(58);"string"==typeof t&&(t=[[_.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(12)(t,a);t.locals&&(_.exports=t.locals)},58:function(_,e,r){(_.exports=r(11)(!1)).push([_.i,".searchBar{position:fixed;top:0;left:0;padding:2rem 10rem;background:#fff;width:100%;box-shadow:0 0.5rem 1rem #e67e22;z-index:9000;display:flex;align-items:center;align-content:center;background:#B71C1C}@media only screen and (max-width: 64em){.searchBar{padding:2rem 2rem;flex-direction:column}}.searchBar--name{color:#e67e22;font-size:2.5rem}@media only screen and (max-width: 64em){.searchBar--name{font-size:4.5rem}}.searchBar__input--parent{width:86%;margin:0 auto}@media only screen and (max-width: 64em){.searchBar__input--parent{width:100%}}.searchBar--input{width:100%;padding:1.3rem 1.6rem;font-size:2rem;transition:all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);font-family:inherit;font-weight:700;color:rgba(30,39,46,0.9);border-radius:3.5px;background-color:#f5f6fa;border:1.5px solid #e67e22;display:block;margin:0 auto}@media only screen and (max-width: 64em){.searchBar--input{padding:1.5rem 1.6rem;font-size:3.3rem}}.searchBar--input:focus{outline:none}.searchBar--input::placeholder{color:rgba(245,127,23,0.5)}\n",""])},59:function(_,e,r){var t=r(60);"string"==typeof t&&(t=[[_.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(12)(t,a);t.locals&&(_.exports=t.locals)},60:function(_,e,r){(_.exports=r(11)(!1)).push([_.i,".container{position:relative;display:flex;flex-wrap:wrap;align-content:flex-start;margin:0 auto;margin-top:9rem;padding:6rem 0rem;width:91%;z-index:4000;transition:all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)}@media only screen and (max-width: 64em){.container{padding:17rem 0}}@media only screen and (max-width: 37.5em){.container{flex-direction:column;align-content:center}}.container--count{position:absolute;top:0;padding:1rem 2rem;color:rgba(96,112,124,0.5);font-weight:900;font-size:3.5rem}@media only screen and (max-width: 64em){.container--count{padding:11rem 2rem}}@media only screen and (max-width: 37.5em){.container--count{width:100%;text-align:center}}.container__card--parent{position:relative;margin:1.5rem}.container--card{border-bottom:0.2rem solid rgba(245,127,23,0.5);padding-bottom:6rem;width:36rem;overflow:hidden;border-radius:.2rem}.container--figure{position:relative;height:36rem;width:36rem;overflow:hidden;border-radius:.1rem}.container__img--placeholder{background:linear-gradient(to left, #ccc, #e6e6e6);position:absolute;top:0;left:0;animation:pulse 1s linear 1s infinite;width:100%;height:100%;transition:all 1s ease-in}.container--img{width:100%;height:100%;object-fit:cover;display:block;transition:all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)}.container--details{font-weight:900;font-size:2rem;color:#000000;padding:1rem;width:36rem}.container--title{font-size:1.7rem;height:3rem;overflow:hidden}.container--publisher{font-size:1.5rem;color:rgba(30,39,46,0.5);cursor:pointer;outline:none}.container__viewmore{padding:0 1rem;transition:all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);position:absolute;bottom:5%}.container__viewmore--btn{background:#e67e22;display:inline-block;padding:.7rem 2.5rem;color:#fff;font-weight:900;font-size:1.3rem;text-transform:uppercase;text-align:center;border-radius:.5rem;outline:none;cursor:pointer;z-index:3000}.container__viewmore--btn:hover{cursor:pointer}\n",""])},61:function(_,e,r){var t=r(62);"string"==typeof t&&(t=[[_.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(12)(t,a);t.locals&&(_.exports=t.locals)},62:function(_,e,r){(_.exports=r(11)(!1)).push([_.i,".lazyLoading{position:absolute;top:0;left:0;height:100%;width:100%;background:#f5f6fa}.lazyLoading--placeholder{width:36rem;height:50rem;background:#f5f6fa;margin:1.5rem}\n",""])}},[[26,1,2]]]);