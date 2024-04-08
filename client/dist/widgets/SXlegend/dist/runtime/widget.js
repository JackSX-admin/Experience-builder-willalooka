System.register(["jimu-core","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/SXlegend/icon.svg":
/*!***************************************************!*\
  !*** ./your-extensions/widgets/SXlegend/icon.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 20\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M3 5 1.5 2 0 5h3Zm16.318-2c.377 0 .682.224.682.5s-.305.5-.682.5H5.682C5.305 4 5 3.776 5 3.5s.305-.5.682-.5h13.636ZM20 9.5c0-.276-.305-.5-.682-.5H5.682C5.305 9 5 9.224 5 9.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5Zm0 6c0-.276-.305-.5-.682-.5H5.682c-.377 0-.682.224-.682.5s.305.5.682.5h13.636c.377 0 .682-.224.682-.5Zm-17 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM3 8v3H0V8h3Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./your-extensions/widgets/SXlegend/src/runtime/translations/default.ts":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/SXlegend/src/runtime/translations/default.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Legend'
});


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/SXlegend/src/runtime/widget.tsx ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadStatus: () => (/* binding */ LoadStatus),
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/SXlegend/src/runtime/translations/default.ts");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icon.svg */ "./your-extensions/widgets/SXlegend/icon.svg");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icon_svg__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let j = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("link", { rel: "stylesheet", href: "c:/users/jackhann/4.28/esri/themes/main.css" });
/** @jsx jsx */





var LoadStatus;
(function (LoadStatus) {
    LoadStatus["Pending"] = "Pending";
    LoadStatus["Fulfilled"] = "Fulfilled";
    LoadStatus["Rejected"] = "Rejected";
})(LoadStatus || (LoadStatus = {}));
class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.componentDidMount = () => {
            // window.addEventListener('resize', this.onResize);
        };
        this.componentWillUnmount = () => {
            // window.removeEventListener('resize', this.onResize);
        };
        this.createWebMapView = (MapView, resolve, reject) => {
            this.destoryView();
            const mapViewOption = {
                map: this.dataSource.map,
                container: this.refs.mapContainer
            };
            this.mapView = new MapView(mapViewOption);
            this.mapView.when(() => {
                resolve(this.mapView);
            }, (error) => reject(error));
        };
        this.createSceneView = (SceneView, resolve, reject) => {
            this.destoryView();
            const mapViewOption = {
                map: this.dataSource.map,
                container: this.refs.mapContainer
            };
            this.sceneView = new this.SceneView(mapViewOption);
            this.sceneView.when(() => {
                resolve(this.sceneView);
            }, (error) => reject(error));
        };
        this.loadViewModules = (dataSource) => __awaiter(this, void 0, void 0, function* () {
            if (dataSource.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.WebMap) {
                if (this.MapView) {
                    return yield Promise.resolve(this.MapView);
                }
                return yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                    'esri/views/MapView'
                ]).then(modules => {
                    [
                        this.MapView
                    ] = modules;
                    return this.MapView;
                });
            }
            else if (dataSource.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.WebScene) {
                if (this.SceneView) {
                    return Promise.resolve(this.SceneView);
                }
                return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                    'esri/views/SceneView'
                ]).then(modules => {
                    [
                        this.SceneView
                    ] = modules;
                    return this.SceneView;
                });
            }
            else {
                return Promise.reject();
            }
        });
        this.destoryLegend = () => {
            this.legend && !this.legend.destroyed && this.legend.destroy();
        };
        this.createLegend = (view) => {
            let legendModulePromise;
            if (this.Legend) {
                legendModulePromise = Promise.resolve();
            }
            else {
                legendModulePromise = (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                    'esri/widgets/Legend'
                ]).then(modules => {
                    [
                        this.Legend
                    ] = modules;
                });
            }
            return legendModulePromise.then(() => {
                const container = document && document.createElement('div');
                // container.className = 'jimu-widget';
                this.refs.legendContainer.appendChild(container);
                this.destoryLegend();
                view.when(() => {
                    this.legend = new this.Legend({
                        view: view,
                        container: container
                    });
                    this.configLegend();
                });
            });
        };
        this.configLegend = () => {
            if (this.legend) {
                // const style = this.props.config.cardStyle ? {type: 'card' as 'card', layout: this.props.config.cardLayout || 'auto'} : 'classic';
                const basemapLegendVisible = this.props.config.showBaseMap;
                this.legend.style = j;
                this.legend.basemapLegendVisible = basemapLegendVisible;
            }
        };
        this.calculateStyle = () => {
            let style;
            const currentWidth = this.currentWidth || 100000; // window.innerWidth;
            if (this.legend) {
                if (this.props.config.cardStyle) {
                    let layout;
                    if (!this.props.config.cardLayout || this.props.config.cardLayout === 'side-by-side') {
                        if (currentWidth <= 600) {
                            layout = 'side-by-side';
                        }
                        else {
                            layout = 'side-by-side';
                        }
                    }
                    else {
                        layout = this.props.config.cardLayout;
                    }
                    style = {
                        type: 'card',
                        layout: layout
                    };
                }
                else {
                    style = 'classic';
                }
            }
            else {
                style = 'classic';
            }
            return style;
        };
        this.onActiveViewChange = (jimuMapView) => {
            if (jimuMapView && jimuMapView.view) {
                // this.setState({ loadStatus: LoadStatus.Pending})
                this.createLegend(jimuMapView.view).then(() => {
                    this.setState({
                        loadStatus: LoadStatus.Fulfilled
                    });
                }).catch((error) => { console.error(error); });
            }
            else {
                this.destoryLegend();
                // this.setState({ loadStatus: LoadStatus.Rejected })
            }
        };
        this.onDataSourceCreated = (dataSource) => {
            this.dataSource = dataSource;
            this.createViewByDataSource(dataSource).then((view) => {
                return this.createLegend(view);
            }).then(() => {
                this.setState({
                    loadStatus: LoadStatus.Fulfilled
                });
            }).catch((error) => { console.error(error); });
        };
        // eslint-disable-next-line
        this.onCreateDataSourceFailed = (error) => {
        };
        this.onResize = (width) => {
            // const width = window.innerWidth;
            this.currentWidth = width;
            if (this.legend && this.props.config.cardLayout === 'auto') {
                const style = this.calculateStyle();
                this.legend.style = style;
            }
        };
        this.state = {
            loadStatus: LoadStatus.Pending
        };
    }
    createViewByDataSource(dataSource) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.loadViewModules(dataSource).then(() => __awaiter(this, void 0, void 0, function* () {
                if (dataSource.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.WebMap) {
                    return yield new Promise((resolve, reject) => { this.createWebMapView(this.MapView, resolve, reject); });
                }
                else if (dataSource.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.WebScene) {
                    return new Promise((resolve, reject) => { this.createSceneView(this.SceneView, resolve, reject); });
                }
                else {
                    return Promise.reject();
                }
            }));
        });
    }
    destoryView() {
        this.mapView && !this.mapView.destroyed && this.mapView.destroy();
        this.sceneView && !this.sceneView.destroyed && this.sceneView.destroy();
    }
    getDefaultStyleConfig() {
        return {
            useCustom: true,
            background: {
                color: '',
                fillType: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.FillType.FILL
            },
            fontColor: ''
        };
    }
    getStyleConfig() {
        if (this.props.config.style && this.props.config.style.useCustom) {
            return this.props.config.style;
        }
        else {
            return this.getDefaultStyleConfig();
        }
    }
    render() {
        var _a;
        const useMapWidget = this.props.useMapWidgetIds &&
            this.props.useMapWidgetIds[0];
        const useDataSource = this.props.useDataSources &&
            this.props.useDataSources[0];
        let content = null;
        let dataSourceContent = null;
        if (useMapWidget) {
            dataSourceContent = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.onActiveViewChange }));
        }
        else if (useDataSource) {
            dataSourceContent = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: useDataSource, onDataSourceCreated: this.onDataSourceCreated, onCreateDataSourceFailed: this.onCreateDataSourceFailed }));
        }
        if (!useMapWidget && !useDataSource) {
            this.destoryLegend();
            content = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'widget-legend' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.WidgetPlaceholder, { icon: (_icon_svg__WEBPACK_IMPORTED_MODULE_4___default()), autoFlip: true, message: this.props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"]._widgetLabel }), widgetId: this.props.id })));
        }
        else {
            let loadingContent = null;
            if (this.state.loadStatus === LoadStatus.Pending) {
                loadingContent = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'jimu-secondary-loading' }));
            }
            // else if(this.state.loadStatus === LoadStatus.Rejected){
            //  loadingContent = (
            //    <div style={{padding: '5px 10px'}}> Invalid map widget! </div>
            //  );
            // }
            if (window.jimuConfig.isInBuilder) {
                this.configLegend();
            }
            content = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'widget-legend' },
                loadingContent,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { ref: 'legendContainer', style: { height: '50%' } }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { position: 'absolute', display: 'none' }, ref: 'mapContainer' }, "mapContainer"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { position: 'absolute', display: 'none' } }, dataSourceContent),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactResizeDetector, { handleHeight: true, handleWidth: true, onResize: this.onResize })));
        }
        return (j);
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9TWGxlZ2VuZC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZTtJQUNiLFlBQVksRUFBRSxRQUFRO0NBQ3ZCOzs7Ozs7Ozs7Ozs7QUNGRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxJQUFJLENBQUMsR0FBRyxxRUFBTSxHQUFHLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyw2Q0FBNkMsR0FBUTtBQUN6RixlQUFlO0FBQ3NGO0FBQzRCO0FBQzVFO0FBSUQ7QUFDYjtBQUV2QyxJQUFZLFVBSVg7QUFKRCxXQUFZLFVBQVU7SUFDcEIsaUNBQW1CO0lBQ25CLHFDQUF1QjtJQUN2QixtQ0FBcUI7QUFDdkIsQ0FBQyxFQUpXLFVBQVUsS0FBVixVQUFVLFFBSXJCO0FBU2MsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUF1QztJQWUvRSxZQUFh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SUFDbEQsaUJBQWlCLENBQ2Q7Z0JBQ04sMkRBQUMsMERBQW1CLElBQUMsWUFBWSxRQUFDLFdBQVcsUUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBSSxDQUNyRSxDQUNQO1NBQ0Y7UUFDRCxPQUFPLENBQ0wsQ0FBQyxDQUNGO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvU1hsZWdlbmQvaWNvbi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL1NYbGVnZW5kL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9TWGxlZ2VuZC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zIDUgMS41IDIgMCA1aDNabTE2LjMxOC0yYy4zNzcgMCAuNjgyLjIyNC42ODIuNXMtLjMwNS41LS42ODIuNUg1LjY4MkM1LjMwNSA0IDUgMy43NzYgNSAzLjVzLjMwNS0uNS42ODItLjVoMTMuNjM2Wk0yMCA5LjVjMC0uMjc2LS4zMDUtLjUtLjY4Mi0uNUg1LjY4MkM1LjMwNSA5IDUgOS4yMjQgNSA5LjVzLjMwNS41LjY4Mi41aDEzLjYzNmMuMzc3IDAgLjY4Mi0uMjI0LjY4Mi0uNVptMCA2YzAtLjI3Ni0uMzA1LS41LS42ODItLjVINS42ODJjLS4zNzcgMC0uNjgyLjIyNC0uNjgyLjVzLjMwNS41LjY4Mi41aDEzLjYzNmMuMzc3IDAgLjY4Mi0uMjI0LjY4Mi0uNVptLTE3IDBhMS41IDEuNSAwIDEgMC0zIDAgMS41IDEuNSAwIDAgMCAzIDBaTTMgOHYzSDBWOGgzWlxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnTGVnZW5kJ1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwibGV0IGogPSA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImM6L3VzZXJzL2phY2toYW5uLzQuMjgvZXNyaS90aGVtZXMvbWFpbi5jc3NcIj48L2xpbms+XHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCB0eXBlIEFsbFdpZGdldFByb3BzLCBEYXRhU291cmNlQ29tcG9uZW50LCBSZWFjdFJlc2l6ZURldGVjdG9yIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIE1hcERhdGFTb3VyY2UsIERhdGFTb3VyY2VUeXBlcywgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcywgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgV2lkZ2V0UGxhY2Vob2xkZXIsIEZpbGxUeXBlIH0gZnJvbSAnamltdS11aSdcclxuLy8gaW1wb3J0IHsgSU1EYXRhU291cmNlSnNvbiwgSU1Vc2VEYXRhU291cmNlIH0gZnJvbSAnLi90eXBlcy9hcHAtY29uZmlnJztcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZywgdHlwZSBTdHlsZSB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgZ2V0U3R5bGUgfSBmcm9tICcuL2xpYi9zdHlsZSdcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgbGVnZW5kSWNvbiBmcm9tICcuLi8uLi9pY29uLnN2ZydcclxuXHJcbmV4cG9ydCBlbnVtIExvYWRTdGF0dXMge1xyXG4gIFBlbmRpbmcgPSAnUGVuZGluZycsXHJcbiAgRnVsZmlsbGVkID0gJ0Z1bGZpbGxlZCcsXHJcbiAgUmVqZWN0ZWQgPSAnUmVqZWN0ZWQnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0UHJvcHMgZXh0ZW5kcyBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4ge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFN0YXRlIHtcclxuICBsb2FkU3RhdHVzOiBMb2FkU3RhdHVzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8V2lkZ2V0UHJvcHMsIFdpZGdldFN0YXRlPiB7XHJcbiAgcHJpdmF0ZSBkYXRhU291cmNlOiBNYXBEYXRhU291cmNlXHJcbiAgcHJpdmF0ZSBtYXBWaWV3OiBfX2VzcmkuTWFwVmlld1xyXG4gIHByaXZhdGUgc2NlbmVWaWV3OiBfX2VzcmkuU2NlbmVWaWV3XHJcbiAgcHJpdmF0ZSBNYXBWaWV3OiB0eXBlb2YgX19lc3JpLk1hcFZpZXdcclxuICBwcml2YXRlIFNjZW5lVmlldzogdHlwZW9mIF9fZXNyaS5TY2VuZVZpZXdcclxuICBwcml2YXRlIGxlZ2VuZDogX19lc3JpLkxlZ2VuZFxyXG4gIHByaXZhdGUgTGVnZW5kOiB0eXBlb2YgX19lc3JpLkxlZ2VuZFxyXG4gIHByaXZhdGUgY3VycmVudFdpZHRoOiBudW1iZXJcclxuXHJcbiAgcHVibGljIHJlZnM6IHtcclxuICAgIG1hcENvbnRhaW5lcjogSFRNTElucHV0RWxlbWVudFxyXG4gICAgbGVnZW5kQ29udGFpbmVyOiBIVE1MSW5wdXRFbGVtZW50XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbG9hZFN0YXR1czogTG9hZFN0YXR1cy5QZW5kaW5nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgLy8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY3JlYXRlVmlld0J5RGF0YVNvdXJjZSAoZGF0YVNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubG9hZFZpZXdNb2R1bGVzKGRhdGFTb3VyY2UpLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoZGF0YVNvdXJjZS50eXBlID09PSBEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsgdGhpcy5jcmVhdGVXZWJNYXBWaWV3KHRoaXMuTWFwVmlldywgcmVzb2x2ZSwgcmVqZWN0KSB9KVxyXG4gICAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2UudHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsgdGhpcy5jcmVhdGVTY2VuZVZpZXcodGhpcy5TY2VuZVZpZXcsIHJlc29sdmUsIHJlamVjdCkgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlV2ViTWFwVmlldyA9IChNYXBWaWV3LCByZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHRoaXMuZGVzdG9yeVZpZXcoKVxyXG4gICAgY29uc3QgbWFwVmlld09wdGlvbjogX19lc3JpLk1hcFZpZXdQcm9wZXJ0aWVzID0ge1xyXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5tYXAsXHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5yZWZzLm1hcENvbnRhaW5lclxyXG4gICAgfVxyXG4gICAgdGhpcy5tYXBWaWV3ID0gbmV3IE1hcFZpZXcobWFwVmlld09wdGlvbilcclxuICAgIHRoaXMubWFwVmlldy53aGVuKCgpID0+IHtcclxuICAgICAgcmVzb2x2ZSh0aGlzLm1hcFZpZXcpXHJcbiAgICB9LCAoZXJyb3IpID0+IHJlamVjdChlcnJvcikpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVTY2VuZVZpZXcgPSAoU2NlbmVWaWV3LCByZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHRoaXMuZGVzdG9yeVZpZXcoKVxyXG4gICAgY29uc3QgbWFwVmlld09wdGlvbjogX19lc3JpLlNjZW5lVmlld1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgIG1hcDogdGhpcy5kYXRhU291cmNlLm1hcCxcclxuICAgICAgY29udGFpbmVyOiB0aGlzLnJlZnMubWFwQ29udGFpbmVyXHJcbiAgICB9XHJcbiAgICB0aGlzLnNjZW5lVmlldyA9IG5ldyB0aGlzLlNjZW5lVmlldyhtYXBWaWV3T3B0aW9uKVxyXG4gICAgdGhpcy5zY2VuZVZpZXcud2hlbigoKSA9PiB7XHJcbiAgICAgIHJlc29sdmUodGhpcy5zY2VuZVZpZXcpXHJcbiAgICB9LCAoZXJyb3IpID0+IHJlamVjdChlcnJvcikpXHJcbiAgfVxyXG5cclxuICBkZXN0b3J5VmlldyAoKSB7XHJcbiAgICB0aGlzLm1hcFZpZXcgJiYgIXRoaXMubWFwVmlldy5kZXN0cm95ZWQgJiYgdGhpcy5tYXBWaWV3LmRlc3Ryb3koKVxyXG4gICAgdGhpcy5zY2VuZVZpZXcgJiYgIXRoaXMuc2NlbmVWaWV3LmRlc3Ryb3llZCAmJiB0aGlzLnNjZW5lVmlldy5kZXN0cm95KClcclxuICB9XHJcblxyXG4gIGxvYWRWaWV3TW9kdWxlcyA9IGFzeW5jIChkYXRhU291cmNlOiBNYXBEYXRhU291cmNlKTogUHJvbWlzZSA8dHlwZW9mIF9fZXNyaS5NYXBWaWV3IHwgdHlwZW9mIF9fZXNyaS5TY2VuZVZpZXc+ID0+IHtcclxuICAgIGlmIChkYXRhU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHtcclxuICAgICAgaWYgKHRoaXMuTWFwVmlldykgeyByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHRoaXMuTWFwVmlldykgfVxyXG4gICAgICByZXR1cm4gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICAgJ2Vzcmkvdmlld3MvTWFwVmlldydcclxuICAgICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgICBbXHJcbiAgICAgICAgICB0aGlzLk1hcFZpZXdcclxuICAgICAgICBdID0gbW9kdWxlc1xyXG4gICAgICAgIHJldHVybiB0aGlzLk1hcFZpZXdcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZS50eXBlID09PSBEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHtcclxuICAgICAgaWYgKHRoaXMuU2NlbmVWaWV3KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5TY2VuZVZpZXcpIH1cclxuICAgICAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAgICdlc3JpL3ZpZXdzL1NjZW5lVmlldydcclxuICAgICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgICBbXHJcbiAgICAgICAgICB0aGlzLlNjZW5lVmlld1xyXG4gICAgICAgIF0gPSBtb2R1bGVzXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuU2NlbmVWaWV3XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVzdG9yeUxlZ2VuZCA9ICgpID0+IHtcclxuICAgIHRoaXMubGVnZW5kICYmICF0aGlzLmxlZ2VuZC5kZXN0cm95ZWQgJiYgdGhpcy5sZWdlbmQuZGVzdHJveSgpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVMZWdlbmQgPSAodmlldykgPT4ge1xyXG4gICAgbGV0IGxlZ2VuZE1vZHVsZVByb21pc2VcclxuICAgIGlmICh0aGlzLkxlZ2VuZCkge1xyXG4gICAgICBsZWdlbmRNb2R1bGVQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxlZ2VuZE1vZHVsZVByb21pc2UgPSBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgICAnZXNyaS93aWRnZXRzL0xlZ2VuZCdcclxuICAgICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgICBbXHJcbiAgICAgICAgICB0aGlzLkxlZ2VuZFxyXG4gICAgICAgIF0gPSBtb2R1bGVzXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVnZW5kTW9kdWxlUHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgLy8gY29udGFpbmVyLmNsYXNzTmFtZSA9ICdqaW11LXdpZGdldCc7XHJcbiAgICAgIHRoaXMucmVmcy5sZWdlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG5cclxuICAgICAgdGhpcy5kZXN0b3J5TGVnZW5kKClcclxuXHJcbiAgICAgIHZpZXcud2hlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sZWdlbmQgPSBuZXcgdGhpcy5MZWdlbmQoe1xyXG4gICAgICAgICAgdmlldzogdmlldyxcclxuICAgICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWdMZWdlbmQoKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbmZpZ0xlZ2VuZCA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmxlZ2VuZCkge1xyXG4gICAgICAvLyBjb25zdCBzdHlsZSA9IHRoaXMucHJvcHMuY29uZmlnLmNhcmRTdHlsZSA/IHt0eXBlOiAnY2FyZCcgYXMgJ2NhcmQnLCBsYXlvdXQ6IHRoaXMucHJvcHMuY29uZmlnLmNhcmRMYXlvdXQgfHwgJ2F1dG8nfSA6ICdjbGFzc2ljJztcclxuICAgICAgY29uc3QgYmFzZW1hcExlZ2VuZFZpc2libGUgPSB0aGlzLnByb3BzLmNvbmZpZy5zaG93QmFzZU1hcFxyXG4gICAgICB0aGlzLmxlZ2VuZC5zdHlsZSA9IGpcclxuICAgICAgdGhpcy5sZWdlbmQuYmFzZW1hcExlZ2VuZFZpc2libGUgPSBiYXNlbWFwTGVnZW5kVmlzaWJsZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlU3R5bGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgc3R5bGVcclxuICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IHRoaXMuY3VycmVudFdpZHRoIHx8IDEwMDAwMC8vIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgaWYgKHRoaXMubGVnZW5kKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZy5jYXJkU3R5bGUpIHtcclxuICAgICAgICBsZXQgbGF5b3V0XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNvbmZpZy5jYXJkTGF5b3V0IHx8IHRoaXMucHJvcHMuY29uZmlnLmNhcmRMYXlvdXQgPT09ICdzaWRlLWJ5LXNpZGUnKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudFdpZHRoIDw9IDYwMCkge1xyXG4gICAgICAgICAgICBsYXlvdXQgPSAnc2lkZS1ieS1zaWRlJ1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGF5b3V0ID0gJ3NpZGUtYnktc2lkZSdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGF5b3V0ID0gdGhpcy5wcm9wcy5jb25maWcuY2FyZExheW91dFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdHlsZSA9IHtcclxuICAgICAgICAgIHR5cGU6ICdjYXJkJyBhcyBjb25zdCxcclxuICAgICAgICAgIGxheW91dDogbGF5b3V0XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0eWxlID0gJ2NsYXNzaWMnXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0eWxlID0gJ2NsYXNzaWMnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3R5bGVcclxuICB9XHJcblxyXG4gIGdldERlZmF1bHRTdHlsZUNvbmZpZyAoKTogU3R5bGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlQ3VzdG9tOiB0cnVlLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgY29sb3I6ICcnLFxyXG4gICAgICAgIGZpbGxUeXBlOiBGaWxsVHlwZS5GSUxMXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvbnRDb2xvcjogJydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN0eWxlQ29uZmlnICgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZy5zdHlsZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5zdHlsZS51c2VDdXN0b20pIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29uZmlnLnN0eWxlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0U3R5bGVDb25maWcoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25BY3RpdmVWaWV3Q2hhbmdlID0gKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykgPT4ge1xyXG4gICAgaWYgKGppbXVNYXBWaWV3ICYmIGppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGxvYWRTdGF0dXM6IExvYWRTdGF0dXMuUGVuZGluZ30pXHJcbiAgICAgIHRoaXMuY3JlYXRlTGVnZW5kKGppbXVNYXBWaWV3LnZpZXcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZFN0YXR1czogTG9hZFN0YXR1cy5GdWxmaWxsZWRcclxuICAgICAgICB9KVxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHsgY29uc29sZS5lcnJvcihlcnJvcikgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGVzdG9yeUxlZ2VuZCgpXHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBsb2FkU3RhdHVzOiBMb2FkU3RhdHVzLlJlamVjdGVkIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGFTb3VyY2VDcmVhdGVkID0gKGRhdGFTb3VyY2UpOiB2b2lkID0+IHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2VcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVZpZXdCeURhdGFTb3VyY2UoZGF0YVNvdXJjZSkudGhlbigodmlldykgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVMZWdlbmQodmlldylcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsb2FkU3RhdHVzOiBMb2FkU3RhdHVzLkZ1bGZpbGxlZFxyXG4gICAgICB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpIH0pXHJcbiAgfVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICBvbkNyZWF0ZURhdGFTb3VyY2VGYWlsZWQgPSAoZXJyb3IpOiB2b2lkID0+IHtcclxuICB9XHJcblxyXG4gIG9uUmVzaXplID0gKHdpZHRoKSA9PiB7XHJcbiAgICAvLyBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgdGhpcy5jdXJyZW50V2lkdGggPSB3aWR0aFxyXG4gICAgaWYgKHRoaXMubGVnZW5kICYmIHRoaXMucHJvcHMuY29uZmlnLmNhcmRMYXlvdXQgPT09ICdhdXRvJykge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY3VsYXRlU3R5bGUoKVxyXG4gICAgICB0aGlzLmxlZ2VuZC5zdHlsZSA9IHN0eWxlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgdXNlTWFwV2lkZ2V0ID0gdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF1cclxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2UgPSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF1cclxuXHJcbiAgICBsZXQgY29udGVudCA9IG51bGxcclxuICAgIGxldCBkYXRhU291cmNlQ29udGVudCA9IG51bGxcclxuXHJcbiAgICBpZiAodXNlTWFwV2lkZ2V0KSB7XHJcbiAgICAgIGRhdGFTb3VyY2VDb250ZW50ID0gKFxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX0gb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX0gLz5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIGlmICh1c2VEYXRhU291cmNlKSB7XHJcbiAgICAgIGRhdGFTb3VyY2VDb250ZW50ID0gKFxyXG4gICAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XHJcbiAgICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEYXRhU291cmNlfVxyXG4gICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17dGhpcy5vbkRhdGFTb3VyY2VDcmVhdGVkfVxyXG4gICAgICAgICAgb25DcmVhdGVEYXRhU291cmNlRmFpbGVkPXt0aGlzLm9uQ3JlYXRlRGF0YVNvdXJjZUZhaWxlZH1cclxuICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1c2VNYXBXaWRnZXQgJiYgIXVzZURhdGFTb3VyY2UpIHtcclxuICAgICAgdGhpcy5kZXN0b3J5TGVnZW5kKClcclxuICAgICAgY29udGVudCA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LWxlZ2VuZCc+XHJcbiAgICAgICAgICA8V2lkZ2V0UGxhY2Vob2xkZXIgaWNvbj17bGVnZW5kSWNvbn0gYXV0b0ZsaXAgbWVzc2FnZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ193aWRnZXRMYWJlbCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuX3dpZGdldExhYmVsIH0pfSB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGxvYWRpbmdDb250ZW50ID0gbnVsbFxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkU3RhdHVzID09PSBMb2FkU3RhdHVzLlBlbmRpbmcpIHtcclxuICAgICAgICBsb2FkaW5nQ29udGVudCA9IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdqaW11LXNlY29uZGFyeS1sb2FkaW5nJyAvPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICAvLyBlbHNlIGlmKHRoaXMuc3RhdGUubG9hZFN0YXR1cyA9PT0gTG9hZFN0YXR1cy5SZWplY3RlZCl7XHJcbiAgICAgIC8vICBsb2FkaW5nQ29udGVudCA9IChcclxuICAgICAgLy8gICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6ICc1cHggMTBweCd9fT4gSW52YWxpZCBtYXAgd2lkZ2V0ISA8L2Rpdj5cclxuICAgICAgLy8gICk7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIGlmICh3aW5kb3cuamltdUNvbmZpZy5pc0luQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnTGVnZW5kKClcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQtbGVnZW5kJz5cclxuICAgICAgICAgIHtsb2FkaW5nQ29udGVudH1cclxuICAgICAgICAgIDxkaXYgcmVmPSdsZWdlbmRDb250YWluZXInIHN0eWxlPXt7IGhlaWdodDogJzUwJScgfX0gLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGRpc3BsYXk6ICdub25lJyB9fSByZWY9J21hcENvbnRhaW5lcic+bWFwQ29udGFpbmVyPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBkaXNwbGF5OiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtkYXRhU291cmNlQ29udGVudH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFJlYWN0UmVzaXplRGV0ZWN0b3IgaGFuZGxlSGVpZ2h0IGhhbmRsZVdpZHRoIG9uUmVzaXplPXt0aGlzLm9uUmVzaXplfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBqXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=