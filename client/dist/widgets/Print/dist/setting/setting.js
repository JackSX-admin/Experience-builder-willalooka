System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
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

/***/ "./your-extensions/widgets/Print/src/setting/translations/default.ts":
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/Print/src/setting/translations/default.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
  Licensing

  Copyright 2020 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    sourceLabel: 'Widget Settings',
    selectMapWidget: 'Select a Map widget',
    serviceURL: 'Print Service URL',
    defaultsSectionLabel: 'Defaults for output',
    defaultTitle: 'Title',
    defaultAuthor: 'Author',
    defaultCopyright: 'Copyright',
    defaultFormat: 'Format',
    defaultLayout: 'Layout'
});


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

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!***************************************************************!*\
  !*** ./your-extensions/widgets/Print/src/setting/setting.tsx ***!
  \***************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/Print/src/setting/translations/default.ts");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/**
  Licensing

  Copyright 2020 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/




class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.esriRequest = null;
        this.initPrintServiceParams = () => {
            this.esriRequest(this.props.config.serviceURL, {
                responseType: "json",
                query: {
                    f: 'json'
                },
                timeout: 10000,
                useProxy: false
            }).then(results => {
                let printJSON = results.data;
                printJSON.parameters.map(param => {
                    if (param.name === 'Format') {
                        this.setState({ formatChoiceList: param.choiceList });
                    }
                    if (param.name === 'Layout_Template') {
                        this.setState({ layoutChoiceList: param.choiceList });
                    }
                });
            });
        };
        this.getLayoutOptions = () => {
            const optionsArray = [];
            this.state.layoutChoiceList.map((val, index) => {
                optionsArray.push(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: index, value: val }, val));
            });
            return optionsArray;
        };
        this.getFormatOptions = () => {
            const optionsArray = [];
            this.state.formatChoiceList.map((val, index) => {
                optionsArray.push(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: index, value: val }, val));
            });
            return optionsArray;
        };
        this.onPropertyChange = (name, value) => {
            const { config } = this.props;
            if (value === config[name]) {
                return;
            }
            const newConfig = config.set(name, value);
            const alterProps = {
                id: this.props.id,
                config: newConfig
            };
            this.props.onSettingChange(alterProps);
        };
        this.onMapWidgetSelected = (useMapWidgetsId) => {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: useMapWidgetsId
            });
        };
        this.formatMessage = (id, values) => {
            const messages = Object.assign({}, _translations_default__WEBPACK_IMPORTED_MODULE_1__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
            return this.props.intl.formatMessage({ id: id, defaultMessage: messages[id] }, values);
        };
        this.serviceURLChanged = (evt) => {
            var _a;
            const value = (_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.value;
            this.onPropertyChange('serviceURL', value);
        };
        this.titleChanged = (evt) => {
            var _a;
            const value = (_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.value;
            this.onPropertyChange('defaultTitle', value);
        };
        this.authorChanged = (evt) => {
            var _a;
            const value = (_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.value;
            this.onPropertyChange('defaultAuthor', value);
        };
        this.copyrightChanged = (evt) => {
            var _a;
            const value = (_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.value;
            this.onPropertyChange('defaultCopyright', value);
        };
        this.formatChanged = (evt) => {
            var _a;
            const value = (_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.value;
            this.setState({ selectedFormat: value });
            this.onPropertyChange('defaultFormat', value);
        };
        this.layoutChanged = (evt) => {
            var _a;
            const value = (_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.value;
            this.setState({ selectedLayout: value });
            this.onPropertyChange('defaultLayout', value);
        };
        this.state = {
            layoutChoiceList: [],
            formatChoiceList: [],
            selectedLayout: this.props.config.defaultLayout,
            selectedFormat: this.props.config.defaultFormat
        };
    }
    componentDidMount() {
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
            'esri/request'
        ]).then(module => {
            [this.esriRequest] = module;
            this.initPrintServiceParams();
        });
    }
    render() {
        const { config } = this.props;
        const { selectedLayout, selectedFormat } = this.state;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-print" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "map-selector-section", title: this.props.intl.formatMessage({ id: 'sourceLabel', defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_1__["default"].sourceLabel }) },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.formatMessage('selectMapWidget') }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.formatMessage('serviceURL'), flow: 'wrap' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { value: config.serviceURL, onChange: this.serviceURLChanged }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "defaults-section", title: this.formatMessage('defaultsSectionLabel') },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.formatMessage('defaultTitle'), flow: 'wrap' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { value: config.defaultTitle, onChange: this.titleChanged })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.formatMessage('defaultAuthor'), flow: 'wrap' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { value: config.defaultAuthor, onChange: this.authorChanged })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.formatMessage('defaultCopyright'), flow: 'wrap' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { value: config.defaultCopyright, onChange: this.copyrightChanged })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.formatMessage('defaultFormat'), flow: 'wrap' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { style: { display: 'inline-block', width: 'calc(100% -70px)' }, onChange: this.formatChanged, className: "top-drop", value: selectedFormat }, this.getFormatOptions())),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.formatMessage('defaultLayout'), flow: 'wrap' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { style: { display: 'inline-block', width: 'calc(100% -70px)' }, onChange: this.layoutChanged, className: "top-drop", value: selectedLayout }, this.getLayoutOptions()))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9QcmludC9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDRixpRUFBZTtJQUNiLFdBQVcsRUFBRSxpQkFBaUI7SUFDOUIsZUFBZSxFQUFFLHFCQUFxQjtJQUN0QyxVQUFVLEVBQUUsbUJBQW1CO0lBQy9CLG9CQUFvQixFQUFFLHFCQUFxQjtJQUMzQyxZQUFZLEVBQUUsT0FBTztJQUNyQixhQUFhLEVBQUUsUUFBUTtJQUN2QixnQkFBZ0IsRUFBRSxXQUFXO0lBQzdCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLGFBQWEsRUFBRSxRQUFRO0NBQ3hCOzs7Ozs7Ozs7Ozs7QUM3QkQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUMyRjtBQUd4QztBQUM2QztBQUNkO0FBU3JFLE1BQU0sT0FBUSxTQUFRLDRDQUFLLENBQUMsYUFBa0U7SUFFM0csWUFBYSxLQUFLO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFGZCxn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UywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvUHJpbnQvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9QcmludC9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjAgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlTGFiZWw6ICdXaWRnZXQgU2V0dGluZ3MnLFxuICBzZWxlY3RNYXBXaWRnZXQ6ICdTZWxlY3QgYSBNYXAgd2lkZ2V0JyxcbiAgc2VydmljZVVSTDogJ1ByaW50IFNlcnZpY2UgVVJMJyxcbiAgZGVmYXVsdHNTZWN0aW9uTGFiZWw6ICdEZWZhdWx0cyBmb3Igb3V0cHV0JyxcbiAgZGVmYXVsdFRpdGxlOiAnVGl0bGUnLFxuICBkZWZhdWx0QXV0aG9yOiAnQXV0aG9yJyxcbiAgZGVmYXVsdENvcHlyaWdodDogJ0NvcHlyaWdodCcsXG4gIGRlZmF1bHRGb3JtYXQ6ICdGb3JtYXQnLFxuICBkZWZhdWx0TGF5b3V0OiAnTGF5b3V0J1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqXG4gIExpY2Vuc2luZ1xuXG4gIENvcHlyaWdodCAyMDIwIEVzcmlcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXG4gIExJQ0VOU0UgZmlsZS5cbiovXG5pbXBvcnQge1JlYWN0LCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdUNvcmVNZXNzYWdlcywgbG9hZEFyY0dJU0pTQVBJTW9kdWxlc30gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7QWxsV2lkZ2V0U2V0dGluZ1Byb3BzfSBmcm9tICdqaW11LWZvci1idWlsZGVyJztcbmltcG9ydCB7SU1Db25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnO1xuaW1wb3J0IHtNYXBXaWRnZXRTZWxlY3RvciwgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3d9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJztcbmltcG9ydCB7U2VsZWN0LCBUZXh0SW5wdXQsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VUlEZWZhdWx0TWVzc2FnZXN9IGZyb20gJ2ppbXUtdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFNldHRpbmdTdGF0ZXtcbiAgbGF5b3V0Q2hvaWNlTGlzdDogW10sXG4gIGZvcm1hdENob2ljZUxpc3Q6IFtdLFxuICBzZWxlY3RlZExheW91dDogYW55LFxuICBzZWxlY3RlZEZvcm1hdDogYW55XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4sIFdpZGdldFNldHRpbmdTdGF0ZT57XG4gIGVzcmlSZXF1ZXN0OiB0eXBlb2YgX19lc3JpLnJlcXVlc3QgPSBudWxsO1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGF5b3V0Q2hvaWNlTGlzdDogW10sXG4gICAgICBmb3JtYXRDaG9pY2VMaXN0OiBbXSxcbiAgICAgIHNlbGVjdGVkTGF5b3V0OiB0aGlzLnByb3BzLmNvbmZpZy5kZWZhdWx0TGF5b3V0LFxuICAgICAgc2VsZWN0ZWRGb3JtYXQ6IHRoaXMucHJvcHMuY29uZmlnLmRlZmF1bHRGb3JtYXRcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAnZXNyaS9yZXF1ZXN0J1xuICAgIF0pLnRoZW4obW9kdWxlID0+IHtcbiAgICAgIFt0aGlzLmVzcmlSZXF1ZXN0XSA9IG1vZHVsZTtcbiAgICAgIHRoaXMuaW5pdFByaW50U2VydmljZVBhcmFtcygpO1xuICAgIH0pXG4gIH1cblxuICBpbml0UHJpbnRTZXJ2aWNlUGFyYW1zID0gKCkgPT4ge1xuICAgIHRoaXMuZXNyaVJlcXVlc3QodGhpcy5wcm9wcy5jb25maWcuc2VydmljZVVSTCwge1xuICAgICAgcmVzcG9uc2VUeXBlOiBcImpzb25cIixcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIGY6ICdqc29uJ1xuICAgICAgfSxcbiAgICAgIHRpbWVvdXQ6IDEwMDAwLFxuICAgICAgdXNlUHJveHk6IGZhbHNlfVxuICAgICkudGhlbihyZXN1bHRzPT57XG4gICAgICBsZXQgcHJpbnRKU09OID0gcmVzdWx0cy5kYXRhO1xuICAgICAgcHJpbnRKU09OLnBhcmFtZXRlcnMubWFwKHBhcmFtPT57XG4gICAgICAgIGlmKHBhcmFtLm5hbWUgPT09ICdGb3JtYXQnKXtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtYXRDaG9pY2VMaXN0OiBwYXJhbS5jaG9pY2VMaXN0fSlcbiAgICAgICAgfVxuICAgICAgICBpZihwYXJhbS5uYW1lID09PSAnTGF5b3V0X1RlbXBsYXRlJyl7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGF5b3V0Q2hvaWNlTGlzdDogcGFyYW0uY2hvaWNlTGlzdH0pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGF5b3V0T3B0aW9ucyA9ICgpOiBKU1guRWxlbWVudFtdID0+IHtcbiAgICBjb25zdCBvcHRpb25zQXJyYXkgPSBbXTtcbiAgICB0aGlzLnN0YXRlLmxheW91dENob2ljZUxpc3QubWFwKCh2YWwsIGluZGV4KSA9PntcbiAgICAgIG9wdGlvbnNBcnJheS5wdXNoKDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e3ZhbH0+e3ZhbH08L29wdGlvbj4pO1xuICAgIH0pO1xuICAgIHJldHVybiBvcHRpb25zQXJyYXk7XG4gIH1cblxuICBnZXRGb3JtYXRPcHRpb25zID0gKCk6IEpTWC5FbGVtZW50W10gPT4ge1xuICAgIGNvbnN0IG9wdGlvbnNBcnJheSA9IFtdO1xuICAgIHRoaXMuc3RhdGUuZm9ybWF0Q2hvaWNlTGlzdC5tYXAoKHZhbCwgaW5kZXgpID0+e1xuICAgICAgb3B0aW9uc0FycmF5LnB1c2goPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17dmFsfT57dmFsfTwvb3B0aW9uPik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9wdGlvbnNBcnJheTtcbiAgfVxuXG4gIG9uUHJvcGVydHlDaGFuZ2UgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh2YWx1ZSA9PT0gY29uZmlnW25hbWVdKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnLnNldChuYW1lLCB2YWx1ZSlcbiAgICBjb25zdCBhbHRlclByb3BzID0ge1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBjb25maWc6IG5ld0NvbmZpZ1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZShhbHRlclByb3BzKVxuICB9XG5cbiAgb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRzSWQ6IHN0cmluZ1tdKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWRzOiB1c2VNYXBXaWRnZXRzSWRcbiAgICB9KTtcbiAgfVxuXG4gIGZvcm1hdE1lc3NhZ2UgPSAoaWQ6IHN0cmluZywgdmFsdWVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE1lc3NhZ2VzLCBqaW11VUlEZWZhdWx0TWVzc2FnZXMsIGppbXVDb3JlTWVzc2FnZXMpXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6IGlkLCBkZWZhdWx0TWVzc2FnZTogbWVzc2FnZXNbaWRdIH0sIHZhbHVlcylcbiAgfVxuXG4gIHNlcnZpY2VVUkxDaGFuZ2VkID0gKGV2dCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZ0Py50YXJnZXQ/LnZhbHVlXG4gICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlKCdzZXJ2aWNlVVJMJywgdmFsdWUpXG4gIH1cblxuICB0aXRsZUNoYW5nZWQgPSAoZXZ0KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldnQ/LnRhcmdldD8udmFsdWVcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UoJ2RlZmF1bHRUaXRsZScsIHZhbHVlKVxuICB9XG5cbiAgYXV0aG9yQ2hhbmdlZCA9IChldnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2dD8udGFyZ2V0Py52YWx1ZVxuICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSgnZGVmYXVsdEF1dGhvcicsIHZhbHVlKVxuICB9XG5cbiAgY29weXJpZ2h0Q2hhbmdlZCA9IChldnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2dD8udGFyZ2V0Py52YWx1ZVxuICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSgnZGVmYXVsdENvcHlyaWdodCcsIHZhbHVlKVxuICB9XG5cbiAgZm9ybWF0Q2hhbmdlZCA9IChldnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2dD8udGFyZ2V0Py52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEZvcm1hdDogdmFsdWV9KTtcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UoJ2RlZmF1bHRGb3JtYXQnLCB2YWx1ZSk7XG4gIH1cblxuICBsYXlvdXRDaGFuZ2VkID0gKGV2dCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZ0Py50YXJnZXQ/LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTGF5b3V0OiB2YWx1ZX0pO1xuICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSgnZGVmYXVsdExheW91dCcsIHZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtjb25maWd9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtzZWxlY3RlZExheW91dCwgc2VsZWN0ZWRGb3JtYXR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctcHJpbnRcIj5cbiAgICAgICAgICAgIDxTZXR0aW5nU2VjdGlvbiBjbGFzc05hbWU9XCJtYXAtc2VsZWN0b3Itc2VjdGlvblwiIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdzb3VyY2VMYWJlbCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuc291cmNlTGFiZWx9KX0+XG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3NlbGVjdE1hcFdpZGdldCcpfT5cbiAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvciBvblNlbGVjdD17dGhpcy5vbk1hcFdpZGdldFNlbGVjdGVkfSB1c2VNYXBXaWRnZXRJZHM9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzfSAvPlxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3NlcnZpY2VVUkwnKX0gZmxvdz0nd3JhcCc+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCB2YWx1ZT17Y29uZmlnLnNlcnZpY2VVUkx9IG9uQ2hhbmdlPXt0aGlzLnNlcnZpY2VVUkxDaGFuZ2VkfT48L1RleHRJbnB1dD5cbiAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbiA+XG4gICAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24gY2xhc3NOYW1lPVwiZGVmYXVsdHMtc2VjdGlvblwiIHRpdGxlPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2RlZmF1bHRzU2VjdGlvbkxhYmVsJyl9PlxuICAgICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdkZWZhdWx0VGl0bGUnKX0gZmxvdz0nd3JhcCc+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCB2YWx1ZT17Y29uZmlnLmRlZmF1bHRUaXRsZX0gb25DaGFuZ2U9e3RoaXMudGl0bGVDaGFuZ2VkfT48L1RleHRJbnB1dD5cbiAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdkZWZhdWx0QXV0aG9yJyl9IGZsb3c9J3dyYXAnPlxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgdmFsdWU9e2NvbmZpZy5kZWZhdWx0QXV0aG9yfSBvbkNoYW5nZT17dGhpcy5hdXRob3JDaGFuZ2VkfT48L1RleHRJbnB1dD5cbiAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdkZWZhdWx0Q29weXJpZ2h0Jyl9IGZsb3c9J3dyYXAnPlxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgdmFsdWU9e2NvbmZpZy5kZWZhdWx0Q29weXJpZ2h0fSBvbkNoYW5nZT17dGhpcy5jb3B5cmlnaHRDaGFuZ2VkfT48L1RleHRJbnB1dD5cbiAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdkZWZhdWx0Rm9ybWF0Jyl9IGZsb3c9J3dyYXAnPlxuICAgICAgICAgICAgICAgIDxTZWxlY3Qgc3R5bGU9e3tkaXNwbGF5OidpbmxpbmUtYmxvY2snLCB3aWR0aDonY2FsYygxMDAlIC03MHB4KSd9fSBvbkNoYW5nZT17dGhpcy5mb3JtYXRDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWRyb3BcIiB2YWx1ZT17c2VsZWN0ZWRGb3JtYXR9PlxuICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0Rm9ybWF0T3B0aW9ucygpfVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2RlZmF1bHRMYXlvdXQnKX0gZmxvdz0nd3JhcCc+XG4gICAgICAgICAgICAgICAgPFNlbGVjdCBzdHlsZT17e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsIHdpZHRoOidjYWxjKDEwMCUgLTcwcHgpJ319IG9uQ2hhbmdlPXt0aGlzLmxheW91dENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtZHJvcFwiIHZhbHVlPXtzZWxlY3RlZExheW91dH0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5nZXRMYXlvdXRPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=