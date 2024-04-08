System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-arcgis","jimu-ui/advanced/data-source-selector","jimu-layouts/layout-runtime","jimu-ui/basic/color-picker"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-ui/lib/icons/uppercase.svg":
/*!*****************************************!*\
  !*** ./jimu-ui/lib/icons/uppercase.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 12\"><path fill=\"#000\" fill-rule=\"nonzero\" d=\"m6.828.535 4.966 11.01A.323.323 0 0 1 11.5 12a.776.776 0 0 1-.707-.455L9.182 8H2.818l-1.611 3.545A.776.776 0 0 1 .5 12a.323.323 0 0 1-.294-.456L5.172.535a.909.909 0 0 1 1.656 0ZM6 1 3.272 7h5.456L6 1Z\"></path></svg>"

/***/ }),

/***/ "./your-extensions/widgets/SXlegend/src/setting/lib/style.ts":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/SXlegend/src/setting/lib/style.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyle: () => (/* binding */ getStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function getStyle(theme) {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .widget-setting-legend{
      font-weight: lighter;
      font-size: 8px;

      .source-descript {
        color: ${theme.colors.palette.dark[600]};
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 50%;
        height: 60
        px;
        overflow: hidden;
        padding: 0px;
        border: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(2)} solid initial;
        img, div{
          width: 100%;
          height: 100%;
        }
      }

      .card-layout-content{
        width: 50%;
      }

      .legend-tools{
        .legend-tools-item{
          display: flex;
          margin-bottom: 4px;
        }
      }

      .advanced-setting-row .jimu-widget-setting--row-label {
        color: #c5c5c5;
        font-size: 0.1rem;
      }

      .map-selector-section .component-map-selector .form-control{
        width: 50%;
      }

      .jimu-builder--background-setting .background-image {
        display: none;
      }

      .jimu-builder--background-setting .background-image-fill-type {
        display: none;
      }
    }
  `;
}


/***/ }),

/***/ "./your-extensions/widgets/SXlegend/src/setting/translations/default.ts":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/SXlegend/src/setting/translations/default.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    sourceLabel: 'Source',
    sourceDescript: 'A web map or web scene, or any combination of the two.',
    options: 'Options',
    showBaseMap: 'Show basemap legends',
    cardStyle: 'Use card style'
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

/***/ "jimu-layouts/layout-runtime":
/*!**********************************************!*\
  !*** external "jimu-layouts/layout-runtime" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }),

/***/ "jimu-ui/basic/color-picker":
/*!*********************************************!*\
  !*** external "jimu-ui/basic/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__;

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
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/SXlegend/src/setting/setting.tsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardLayout: () => (/* binding */ CardLayout),
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/SXlegend/src/setting/translations/default.ts");
/* harmony import */ var _lib_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/style */ "./your-extensions/widgets/SXlegend/src/setting/lib/style.ts");
/** @jsx jsx */








// import MapThumb from './components/map-thumb';

const textIcon = __webpack_require__(/*! jimu-ui/lib/icons/uppercase.svg */ "./jimu-ui/lib/icons/uppercase.svg");
var CardLayout;
(function (CardLayout) {
    CardLayout["Auto"] = "auto";
    CardLayout["SideBySide"] = "side-by-side";
    CardLayout["Stack"] = "stack";
})(CardLayout || (CardLayout = {}));
class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.supportedDsTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([
            jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.DataSourceTypes.WebMap,
            jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.DataSourceTypes.WebScene
        ]);
        this.getPortUrl = () => {
            const portUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
            return portUrl;
        };
        this.onOptionsChanged = (checked, name) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set(name, checked)
            });
            if (name === 'cardStyle') {
                this.setState({
                    cardStyle: checked
                });
            }
        };
        this.onRadioChange = (cardLayout) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('cardLayout', cardLayout)
            });
            this.setState({
                cardLayoutValue: cardLayout
            });
        };
        this.onToggleUseDataEnabled = (useDataSourcesEnabled) => {
            this.props.onSettingChange({
                id: this.props.id,
                useDataSourcesEnabled
            });
        };
        this.onDataSourceChange = (useDataSources) => {
            if (!useDataSources) {
                return;
            }
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources: useDataSources
            });
        };
        this.onMapWidgetSelected = (useMapWidgetIds) => {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: useMapWidgetIds
            });
        };
        this.onUseCustomStyleChanged = (checked) => {
            // const style = this.props.config.style ? Immutable(this.props.config.style) : Immutable({} as Style);
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.setIn(['style', 'useCustom'], checked)
            });
        };
        this.onFontStyleChanged = (color) => {
            // const style = this.props.config.style ? Immutable(this.props.config.style) : Immutable({} as Style);
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.setIn(['style', 'fontColor'], color)
            });
        };
        this.onBackgroundStyleChange = (backgroundColor) => {
            var _a, _b, _c;
            const bg = {
                color: backgroundColor,
                fillType: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.FILL
            };
            let background = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)((_c = (_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.background) !== null && _c !== void 0 ? _c : {});
            for (const key in bg) {
                switch (key) {
                    case 'fillType':
                        if (background.fillType !== bg[key]) {
                            background = background.set('fillType', bg[key]);
                        }
                        break;
                    case 'color':
                        background = background.set('color', bg[key]);
                        break;
                    case 'image':
                        background = background.set('image', bg[key]);
                        break;
                }
            }
            // const style = this.props.config.style ? Immutable(this.props.config.style) : Immutable({} as Style);
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.setIn(['style', 'background'], background)
            });
        };
        this.state = {
            cardStyle: this.props.config.cardStyle || false,
            cardLayoutValue: this.props.config.cardLayout || CardLayout.Auto
        };
    }
    getDefaultStyleConfig() {
        return {
            useCustom: false,
            background: {
                color: '',
                fillType: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.FILL
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
        // const portalUrl = this.getPortUrl();
        var _a, _b, _c, _d, _e;
        let cardLayoutContent = null;
        if (this.state.cardStyle) {
            cardLayoutContent = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "card-layout-content pl-2", role: "radiogroup" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100 legend-tools" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "legend-tools-item card-style-radio" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { id: "auto", style: { cursor: 'pointer' }, name: "card-style-type", onChange: (e) => { this.onRadioChange(CardLayout.Auto); }, checked: this.state.cardLayoutValue === CardLayout.Auto }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { style: { cursor: 'pointer' }, for: "auto", className: "ml-1" }, this.props.intl.formatMessage({
                            id: 'auto',
                            defaultMessage: 'Auto'
                        })))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100 legend-tools" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "legend-tools-item card-style-radio" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { id: "side-by-side", style: { cursor: 'pointer' }, name: "card-style-type", onChange: (e) => { this.onRadioChange(CardLayout.SideBySide); }, checked: this.state.cardLayoutValue === CardLayout.SideBySide }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { style: { cursor: 'pointer' }, for: "side-by-side", className: "ml-1" }, this.props.intl.formatMessage({
                            id: 'sideBySide',
                            defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.sideBySide
                        })))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100 legend-tools" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "legend-tools-item card-style-radio" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { id: "stack", style: { cursor: 'pointer' }, name: "card-style-type", onChange: (e) => { this.onRadioChange(CardLayout.Stack); }, checked: this.state.cardLayoutValue === CardLayout.Stack }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { style: { cursor: 'pointer' }, for: "stack", className: "ml-1" }, this.props.intl.formatMessage({
                            id: 'stack',
                            defaultMessage: jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_5__.defaultMessages.stack
                        }))))));
        }
        let displayStyleContent;
        if ((_a = this.props.config.style) === null || _a === void 0 ? void 0 : _a.useCustom) {
            displayStyleContent = 'block';
        }
        else {
            displayStyleContent = 'none';
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,_lib_style__WEBPACK_IMPORTED_MODULE_8__.getStyle)(this.props.theme) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-legend" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "map-selector-section", title: this.props.intl.formatMessage({
                        id: 'sourceLabel',
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].sourceLabel
                    }), role: "group", "aria-label": this.props.intl.formatMessage({
                        id: 'sourceLabel',
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].sourceLabel
                    }) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "selectMapWidget", defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.selectMapWidget }) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({
                        id: 'options',
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].options
                    }), role: "group", "aria-label": this.props.intl.formatMessage({
                        id: 'options',
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].options
                    }) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "showBaseMap", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].showBaseMap }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { className: "can-x-switch", checked: (this.props.config && this.props.config.showBaseMap) || false, "data-key": "showBaseMap", onChange: (evt) => {
                                this.onOptionsChanged(evt.target.checked, 'showBaseMap');
                            }, "aria-label": this.props.intl.formatMessage({
                                id: 'showBaseMap',
                                defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].showBaseMap
                            }) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "cardStyle", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].cardStyle }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { className: "can-x-switch", checked: (this.props.config && this.props.config.cardStyle) || false, "data-key": "cardStyle", onChange: (evt) => {
                                this.onOptionsChanged(evt.target.checked, 'cardStyle');
                            }, "aria-label": this.props.intl.formatMessage({
                                id: 'cardStyle',
                                defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].cardStyle
                            }) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: "wrap", role: "radiogroup" }, cardLayoutContent)),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { className: "advanced-setting-row", label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "advance", defaultMessage: "Advanced" }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { className: "can-x-switch", checked: this.getStyleConfig().useCustom || false, "data-key": "showBaseMap", onChange: (evt) => {
                                this.onUseCustomStyleChanged(evt.target.checked);
                            }, "aria-label": this.props.intl.formatMessage({
                                id: 'advance',
                                defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.advance
                            }) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-3", style: { display: displayStyleContent } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "font", defaultMessage: "Font" }) },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_6__.ThemeColorPicker, { icon: textIcon, type: "with-icon", specificTheme: this.props.theme2, value: this.getStyleConfig().fontColor ||
                                    ((_d = (_c = (_b = this.props.theme2.arcgis.widgets.legend.variants) === null || _b === void 0 ? void 0 : _b.default) === null || _c === void 0 ? void 0 : _c.root) === null || _d === void 0 ? void 0 : _d.color) ||
                                    '', onChange: this.onFontStyleChanged, "aria-label": this.props.intl.formatMessage({
                                    id: 'fontColor',
                                    defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.fontColor
                                }) })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "background", defaultMessage: "Background" }) },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_6__.ThemeColorPicker, { specificTheme: this.props.theme2, value: ((_e = this.getStyleConfig().background) === null || _e === void 0 ? void 0 : _e.color) ||
                                    this.props.theme2.surfaces[1].bg ||
                                    '', onChange: this.onBackgroundStyleChange, "aria-label": this.props.intl.formatMessage({
                                    id: 'backgroundColor',
                                    defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.backgroundColor
                                }) })))))));
    }
}
Setting.mapExtraStateProps = (state) => {
    return {
        dsJsons: state.appStateInBuilder.appConfig.dataSources
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9TWGxlZ2VuZC9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdUY7QUFFaEYsU0FBUyxRQUFRLENBQUUsS0FBdUI7SUFDL0MsT0FBTyw4Q0FBRzs7Ozs7O2lCQU1LLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7a0JBVTdCLCtDQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQzlCO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERCxpRUFBZTtJQUNiLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGNBQWMsRUFBRSx3REFBd0Q7SUFDeEUsT0FBTyxFQUFFLFNBQVM7SUFDbEIsV0FBVyxFQUFFLHNCQUFzQjtJQUNuQyxTQUFTLEVBQUUsZ0JBQWdCO0NBQzVCOzs7Ozs7Ozs7Ozs7QUNORDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFB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SUFDSCxDQUFDOztBQXBYTSwwQkFBa0IsR0FBRyxDQUFDLEtBQWMsRUFBYyxFQUFFO0lBQ3pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxXQUFXO0tBQ3ZEO0FBQ0gsQ0FBQztpRUFia0IsT0FBTztBQWdZcEIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9saWIvaWNvbnMvdXBwZXJjYXNlLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvU1hsZWdlbmQvc3JjL3NldHRpbmcvbGliL3N0eWxlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9TWGxlZ2VuZC9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtbGF5b3V0cy9sYXlvdXQtcnVudGltZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9TWGxlZ2VuZC9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMiAxMlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJub256ZXJvXFxcIiBkPVxcXCJtNi44MjguNTM1IDQuOTY2IDExLjAxQS4zMjMuMzIzIDAgMCAxIDExLjUgMTJhLjc3Ni43NzYgMCAwIDEtLjcwNy0uNDU1TDkuMTgyIDhIMi44MThsLTEuNjExIDMuNTQ1QS43NzYuNzc2IDAgMCAxIC41IDEyYS4zMjMuMzIzIDAgMCAxLS4yOTQtLjQ1Nkw1LjE3Mi41MzVhLjkwOS45MDkgMCAwIDEgMS42NTYgMFpNNiAxIDMuMjcyIDdoNS40NTZMNiAxWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHsgdHlwZSBJTVRoZW1lVmFyaWFibGVzLCBjc3MsIHR5cGUgU2VyaWFsaXplZFN0eWxlcywgcG9saXNoZWQgfSBmcm9tICdqaW11LWNvcmUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUgKHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKTogU2VyaWFsaXplZFN0eWxlcyB7XHJcbiAgcmV0dXJuIGNzc2BcclxuICAgIC53aWRnZXQtc2V0dGluZy1sZWdlbmR7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICBmb250LXNpemU6IDhweDtcclxuXHJcbiAgICAgIC5zb3VyY2UtZGVzY3JpcHQge1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmRhcmtbNjAwXX07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC53ZWJtYXAtdGh1bWJuYWlse1xyXG4gICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogNjBcclxuICAgICAgICBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBib3JkZXI6ICR7cG9saXNoZWQucmVtKDIpfSBzb2xpZCBpbml0aWFsO1xyXG4gICAgICAgIGltZywgZGl2e1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1sYXlvdXQtY29udGVudHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGVnZW5kLXRvb2xze1xyXG4gICAgICAgIC5sZWdlbmQtdG9vbHMtaXRlbXtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtc2V0dGluZy1yb3cgLmppbXUtd2lkZ2V0LXNldHRpbmctLXJvdy1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICNjNWM1YzU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXAtc2VsZWN0b3Itc2VjdGlvbiAuY29tcG9uZW50LW1hcC1zZWxlY3RvciAuZm9ybS1jb250cm9se1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5qaW11LWJ1aWxkZXItLWJhY2tncm91bmQtc2V0dGluZyAuYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmppbXUtYnVpbGRlci0tYmFja2dyb3VuZC1zZXR0aW5nIC5iYWNrZ3JvdW5kLWltYWdlLWZpbGwtdHlwZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGBcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgc291cmNlTGFiZWw6ICdTb3VyY2UnLFxyXG4gIHNvdXJjZURlc2NyaXB0OiAnQSB3ZWIgbWFwIG9yIHdlYiBzY2VuZSwgb3IgYW55IGNvbWJpbmF0aW9uIG9mIHRoZSB0d28uJyxcclxuICBvcHRpb25zOiAnT3B0aW9ucycsXHJcbiAgc2hvd0Jhc2VNYXA6ICdTaG93IGJhc2VtYXAgbGVnZW5kcycsXHJcbiAgY2FyZFN0eWxlOiAnVXNlIGNhcmQgc3R5bGUnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2xheW91dHNfbGF5b3V0X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYmFzaWNfY29sb3JfcGlja2VyX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAgUmVhY3QsXHJcbiAgSW1tdXRhYmxlLFxyXG4gIHR5cGUgSW1tdXRhYmxlT2JqZWN0LFxyXG4gIHR5cGUgRGF0YVNvdXJjZUpzb24sXHJcbiAgdHlwZSBJTVN0YXRlLFxyXG4gIEZvcm1hdHRlZE1lc3NhZ2UsXHJcbiAganN4LFxyXG4gIGdldEFwcFN0b3JlLFxyXG4gIHR5cGUgVXNlRGF0YVNvdXJjZVxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtcclxuICBTd2l0Y2gsXHJcbiAgUmFkaW8sXHJcbiAgTGFiZWwsXHJcbiAgdHlwZSBCYWNrZ3JvdW5kU3R5bGUsXHJcbiAgRmlsbFR5cGUsXHJcbiAgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVpRGVmYXVsdE1lc3NhZ2VcclxufSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQge1xyXG4gIE1hcFdpZGdldFNlbGVjdG9yLFxyXG4gIFNldHRpbmdTZWN0aW9uLFxyXG4gIFNldHRpbmdSb3dcclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IHR5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IC8qIERhdGFTb3VyY2VTZWxlY3RvciAqLyAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcclxuaW1wb3J0IHsgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVMYXlvdXRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtbGF5b3V0cy9sYXlvdXQtcnVudGltZSdcclxuaW1wb3J0IHsgVGhlbWVDb2xvclBpY2tlciB9IGZyb20gJ2ppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnLCB0eXBlIFN0eWxlIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbi8vIGltcG9ydCBNYXBUaHVtYiBmcm9tICcuL2NvbXBvbmVudHMvbWFwLXRodW1iJztcclxuaW1wb3J0IHsgZ2V0U3R5bGUgfSBmcm9tICcuL2xpYi9zdHlsZSdcclxuY29uc3QgdGV4dEljb24gPSByZXF1aXJlKCdqaW11LXVpL2xpYi9pY29ucy91cHBlcmNhc2Uuc3ZnJylcclxuXHJcbmV4cG9ydCBlbnVtIENhcmRMYXlvdXQge1xyXG4gIEF1dG8gPSAnYXV0bycsXHJcbiAgU2lkZUJ5U2lkZSA9ICdzaWRlLWJ5LXNpZGUnLFxyXG4gIFN0YWNrID0gJ3N0YWNrJyxcclxufVxyXG5cclxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xyXG4gIGRzSnNvbnM6IEltbXV0YWJsZU9iamVjdDx7IFtkc0lkOiBzdHJpbmddOiBEYXRhU291cmNlSnNvbiB9PlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFNldHRpbmdTdGF0ZSB7XHJcbiAgY2FyZFN0eWxlOiBib29sZWFuXHJcbiAgY2FyZExheW91dFZhbHVlOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbkFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4gJiBFeHRyYVByb3BzLFxyXG5XaWRnZXRTZXR0aW5nU3RhdGVcclxuPiB7XHJcbiAgc3VwcG9ydGVkRHNUeXBlcyA9IEltbXV0YWJsZShbXHJcbiAgICBEYXRhU291cmNlVHlwZXMuV2ViTWFwLFxyXG4gICAgRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lXHJcbiAgXSlcclxuXHJcbiAgc3RhdGljIG1hcEV4dHJhU3RhdGVQcm9wcyA9IChzdGF0ZTogSU1TdGF0ZSk6IEV4dHJhUHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZHNKc29uczogc3RhdGUuYXBwU3RhdGVJbkJ1aWxkZXIuYXBwQ29uZmlnLmRhdGFTb3VyY2VzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2FyZFN0eWxlOiB0aGlzLnByb3BzLmNvbmZpZy5jYXJkU3R5bGUgfHwgZmFsc2UsXHJcbiAgICAgIGNhcmRMYXlvdXRWYWx1ZTogdGhpcy5wcm9wcy5jb25maWcuY2FyZExheW91dCB8fCBDYXJkTGF5b3V0LkF1dG9cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFBvcnRVcmwgPSAoKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IHBvcnRVcmwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucG9ydGFsVXJsXHJcbiAgICByZXR1cm4gcG9ydFVybFxyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdFN0eWxlQ29uZmlnICgpOiBTdHlsZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VDdXN0b206IGZhbHNlLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgY29sb3I6ICcnLFxyXG4gICAgICAgIGZpbGxUeXBlOiBGaWxsVHlwZS5GSUxMXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvbnRDb2xvcjogJydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN0eWxlQ29uZmlnICgpOiBTdHlsZSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWcuc3R5bGUgJiYgdGhpcy5wcm9wcy5jb25maWcuc3R5bGUudXNlQ3VzdG9tKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbmZpZy5zdHlsZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdFN0eWxlQ29uZmlnKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3B0aW9uc0NoYW5nZWQgPSAoY2hlY2tlZCwgbmFtZSk6IHZvaWQgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQobmFtZSwgY2hlY2tlZClcclxuICAgIH0pXHJcbiAgICBpZiAobmFtZSA9PT0gJ2NhcmRTdHlsZScpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgY2FyZFN0eWxlOiBjaGVja2VkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJhZGlvQ2hhbmdlID0gKGNhcmRMYXlvdXQ6IENhcmRMYXlvdXQpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdjYXJkTGF5b3V0JywgY2FyZExheW91dClcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhcmRMYXlvdXRWYWx1ZTogY2FyZExheW91dFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlVXNlRGF0YUVuYWJsZWQgPSAodXNlRGF0YVNvdXJjZXNFbmFibGVkOiBib29sZWFuKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICB1c2VEYXRhU291cmNlc0VuYWJsZWRcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xyXG4gICAgaWYgKCF1c2VEYXRhU291cmNlcykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbk1hcFdpZGdldFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIHVzZU1hcFdpZGdldElkczogdXNlTWFwV2lkZ2V0SWRzXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25Vc2VDdXN0b21TdHlsZUNoYW5nZWQgPSAoY2hlY2tlZCkgPT4ge1xyXG4gICAgLy8gY29uc3Qgc3R5bGUgPSB0aGlzLnByb3BzLmNvbmZpZy5zdHlsZSA/IEltbXV0YWJsZSh0aGlzLnByb3BzLmNvbmZpZy5zdHlsZSkgOiBJbW11dGFibGUoe30gYXMgU3R5bGUpO1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXRJbihbJ3N0eWxlJywgJ3VzZUN1c3RvbSddLCBjaGVja2VkKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uRm9udFN0eWxlQ2hhbmdlZCA9IChjb2xvcikgPT4ge1xyXG4gICAgLy8gY29uc3Qgc3R5bGUgPSB0aGlzLnByb3BzLmNvbmZpZy5zdHlsZSA/IEltbXV0YWJsZSh0aGlzLnByb3BzLmNvbmZpZy5zdHlsZSkgOiBJbW11dGFibGUoe30gYXMgU3R5bGUpO1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXRJbihbJ3N0eWxlJywgJ2ZvbnRDb2xvciddLCBjb2xvcilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkJhY2tncm91bmRTdHlsZUNoYW5nZSA9IChiYWNrZ3JvdW5kQ29sb3IpID0+IHtcclxuICAgIGNvbnN0IGJnID0ge1xyXG4gICAgICBjb2xvcjogYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICBmaWxsVHlwZTogRmlsbFR5cGUuRklMTFxyXG4gICAgfVxyXG4gICAgbGV0IGJhY2tncm91bmQgPSBJbW11dGFibGUoXHJcbiAgICAgIHRoaXMucHJvcHMuY29uZmlnPy5zdHlsZT8uYmFja2dyb3VuZCA/PyAoe30gYXMgQmFja2dyb3VuZFN0eWxlKVxyXG4gICAgKVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gYmcpIHtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlICdmaWxsVHlwZSc6XHJcbiAgICAgICAgICBpZiAoYmFja2dyb3VuZC5maWxsVHlwZSAhPT0gYmdba2V5XSkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZC5zZXQoJ2ZpbGxUeXBlJywgYmdba2V5XSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnY29sb3InOlxyXG4gICAgICAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmQuc2V0KCdjb2xvcicsIGJnW2tleV0pXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kLnNldCgnaW1hZ2UnLCBiZ1trZXldKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IHN0eWxlID0gdGhpcy5wcm9wcy5jb25maWcuc3R5bGUgPyBJbW11dGFibGUodGhpcy5wcm9wcy5jb25maWcuc3R5bGUpIDogSW1tdXRhYmxlKHt9IGFzIFN0eWxlKTtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0SW4oWydzdHlsZScsICdiYWNrZ3JvdW5kJ10sIGJhY2tncm91bmQpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIC8vIGNvbnN0IHBvcnRhbFVybCA9IHRoaXMuZ2V0UG9ydFVybCgpO1xyXG5cclxuICAgIGxldCBjYXJkTGF5b3V0Q29udGVudCA9IG51bGxcclxuICAgIGlmICh0aGlzLnN0YXRlLmNhcmRTdHlsZSkge1xyXG4gICAgICBjYXJkTGF5b3V0Q29udGVudCA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGF5b3V0LWNvbnRlbnQgcGwtMlwiIHJvbGU9XCJyYWRpb2dyb3VwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGxlZ2VuZC10b29sc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZC10b29scy1pdGVtIGNhcmQtc3R5bGUtcmFkaW9cIj5cclxuICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgIGlkPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhcmQtc3R5bGUtdHlwZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5vblJhZGlvQ2hhbmdlKENhcmRMYXlvdXQuQXV0bykgfX1cclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2FyZExheW91dFZhbHVlID09PSBDYXJkTGF5b3V0LkF1dG99XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8TGFiZWwgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gZm9yPVwiYXV0b1wiIGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiAnQXV0bydcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGxlZ2VuZC10b29sc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZC10b29scy1pdGVtIGNhcmQtc3R5bGUtcmFkaW9cIj5cclxuICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgIGlkPVwic2lkZS1ieS1zaWRlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2FyZC1zdHlsZS10eXBlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLm9uUmFkaW9DaGFuZ2UoQ2FyZExheW91dC5TaWRlQnlTaWRlKSB9fVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jYXJkTGF5b3V0VmFsdWUgPT09IENhcmRMYXlvdXQuU2lkZUJ5U2lkZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxMYWJlbFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICAgIGZvcj1cInNpZGUtYnktc2lkZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICBpZDogJ3NpZGVCeVNpZGUnLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogamltdWlEZWZhdWx0TWVzc2FnZS5zaWRlQnlTaWRlXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBsZWdlbmQtdG9vbHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmQtdG9vbHMtaXRlbSBjYXJkLXN0eWxlLXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICBpZD1cInN0YWNrXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2FyZC1zdHlsZS10eXBlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLm9uUmFkaW9DaGFuZ2UoQ2FyZExheW91dC5TdGFjaykgfX1cclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2FyZExheW91dFZhbHVlID09PSBDYXJkTGF5b3V0LlN0YWNrfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPExhYmVsIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IGZvcj1cInN0YWNrXCIgY2xhc3NOYW1lPVwibWwtMVwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgaWQ6ICdzdGFjaycsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBqaW11TGF5b3V0TWVzc2FnZXMuc3RhY2tcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGlzcGxheVN0eWxlQ29udGVudFxyXG4gICAgaWYgKHRoaXMucHJvcHMuY29uZmlnLnN0eWxlPy51c2VDdXN0b20pIHtcclxuICAgICAgZGlzcGxheVN0eWxlQ29udGVudCA9ICdibG9jaydcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BsYXlTdHlsZUNvbnRlbnQgPSAnbm9uZSdcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNzcz17Z2V0U3R5bGUodGhpcy5wcm9wcy50aGVtZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctbGVnZW5kXCI+XHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwLXNlbGVjdG9yLXNlY3Rpb25cIlxyXG4gICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgIGlkOiAnc291cmNlTGFiZWwnLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuc291cmNlTGFiZWxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHJvbGU9XCJncm91cFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e1xyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIGlkOiAnc291cmNlTGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5zb3VyY2VMYWJlbFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3dcclxuICAgICAgICAgICAgICBsYWJlbD17XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNlbGVjdE1hcFdpZGdldFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXtqaW11aURlZmF1bHRNZXNzYWdlLnNlbGVjdE1hcFdpZGdldH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uTWFwV2lkZ2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgPFNldHRpbmdTZWN0aW9uXHJcbiAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgaWQ6ICdvcHRpb25zJyxcclxuICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm9wdGlvbnNcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHJvbGU9XCJncm91cFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e1xyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIGlkOiAnb3B0aW9ucycsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm9wdGlvbnNcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93XHJcbiAgICAgICAgICAgICAgbGFiZWw9e1xyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzaG93QmFzZU1hcFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0TWVzc2FnZXMuc2hvd0Jhc2VNYXB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbi14LXN3aXRjaFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtcclxuICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLnNob3dCYXNlTWFwKSB8fCBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YS1rZXk9XCJzaG93QmFzZU1hcFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm9uT3B0aW9uc0NoYW5nZWQoZXZ0LnRhcmdldC5jaGVja2VkLCAnc2hvd0Jhc2VNYXAnKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgaWQ6ICdzaG93QmFzZU1hcCcsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuc2hvd0Jhc2VNYXBcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3dcclxuICAgICAgICAgICAgICBsYWJlbD17XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICBpZD1cImNhcmRTdHlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0TWVzc2FnZXMuY2FyZFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYW4teC1zd2l0Y2hcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17XHJcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5jYXJkU3R5bGUpIHx8IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWtleT1cImNhcmRTdHlsZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm9uT3B0aW9uc0NoYW5nZWQoZXZ0LnRhcmdldC5jaGVja2VkLCAnY2FyZFN0eWxlJylcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiAnY2FyZFN0eWxlJyxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5jYXJkU3R5bGVcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgZmxvdz1cIndyYXBcIiByb2xlPVwicmFkaW9ncm91cFwiPlxyXG4gICAgICAgICAgICAgIHtjYXJkTGF5b3V0Q29udGVudH1cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWR2YW5jZWQtc2V0dGluZy1yb3dcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiYWR2YW5jZVwiIGRlZmF1bHRNZXNzYWdlPVwiQWR2YW5jZWRcIiAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbi14LXN3aXRjaFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmdldFN0eWxlQ29uZmlnKCkudXNlQ3VzdG9tIHx8IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGF0YS1rZXk9XCJzaG93QmFzZU1hcFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm9uVXNlQ3VzdG9tU3R5bGVDaGFuZ2VkKGV2dC50YXJnZXQuY2hlY2tlZClcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiAnYWR2YW5jZScsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBqaW11aURlZmF1bHRNZXNzYWdlLmFkdmFuY2VcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCIgc3R5bGU9e3sgZGlzcGxheTogZGlzcGxheVN0eWxlQ29udGVudCB9fT5cclxuICAgICAgICAgICAgICA8U2V0dGluZ1Jvd1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9ezxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiZm9udFwiIGRlZmF1bHRNZXNzYWdlPVwiRm9udFwiIC8+fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUaGVtZUNvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGljb249e3RleHRJY29ufVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwid2l0aC1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNUaGVtZT17dGhpcy5wcm9wcy50aGVtZTJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN0eWxlQ29uZmlnKCkuZm9udENvbG9yIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50aGVtZTIuYXJjZ2lzLndpZGdldHMubGVnZW5kLnZhcmlhbnRzPy5kZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICA/LnJvb3Q/LmNvbG9yIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZvbnRTdHlsZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2ZvbnRDb2xvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGppbXVpRGVmYXVsdE1lc3NhZ2UuZm9udENvbG9yXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdSb3dcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPVwiQmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxCYWNrZ3JvdW5kU2V0dGluZyBiYWNrZ3JvdW5kPXt0aGlzLmdldFN0eWxlQ29uZmlnKCkuYmFja2dyb3VuZH0gb25DaGFuZ2U9e3RoaXMub25CYWNrZ3JvdW5kU3R5bGVDaGFuZ2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPFRoZW1lQ29sb3JQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNUaGVtZT17dGhpcy5wcm9wcy50aGVtZTJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN0eWxlQ29uZmlnKCkuYmFja2dyb3VuZD8uY29sb3IgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRoZW1lMi5zdXJmYWNlc1sxXS5iZyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25CYWNrZ3JvdW5kU3R5bGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2JhY2tncm91bmRDb2xvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGppbXVpRGVmYXVsdE1lc3NhZ2UuYmFja2dyb3VuZENvbG9yXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=