"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,r){var o={};for(var t in e)r.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o}function make(){return name||(name=(0,_globals.animation)(rule))}function Spin(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,r=e.children,o=(e.out,e.timeout),t=e.duration,n=void 0===t?_globals.defaults.duration:t,a=e.delay,u=void 0===a?_globals.defaults.delay:a,p=e.count,i=void 0===p?_globals.defaults.count:p,l=e.forever,s=_objectWithoutProperties(e,["children","out","timeout","duration","delay","count","forever"]),d={make:make,duration:void 0===o?n:o,delay:u,forever:l,count:i,style:{animationFillMode:"both"}};return(0,_wrap2.default)(s,d,!1,r,!0)}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=require("prop-types"),_wrap=require("./wrap"),_wrap2=_interopRequireDefault(_wrap),_globals=require("./globals"),propTypes={duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},rule="\nfrom {\n    transform: rotate(360deg);\n    animation-timing-function: linear;\n  }\n\nto {\n  transform: rotate(0deg);\n}\n",name=!1;Spin.propTypes=propTypes,exports.default=Spin,module.exports=exports.default;