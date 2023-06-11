import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import FocusLockUI from './Lock';
import FocusTrap from './Trap';
/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/

var FocusLockCombination = React.forwardRef(function (props, ref) {
  return React.createElement(FocusLockUI, _extends({
    sideCar: FocusTrap,
    ref: ref
  }, props));
});

var _ref = FocusLockUI.propTypes || {},
    sideCar = _ref.sideCar,
    propTypes = _objectWithoutPropertiesLoose(_ref, ["sideCar"]);

FocusLockCombination.propTypes = propTypes;
export default FocusLockCombination;