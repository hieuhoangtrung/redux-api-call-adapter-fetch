"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var throwOnNetworkError =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(endpoint, others) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch(endpoint, others);

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            throw {
              error: true,
              payload: new Error(_context.t0.message),
              meta: {}
            };

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function throwOnNetworkError(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = function _default(next) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(_ref2) {
        var endpoint, others, resp, meta, error;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                endpoint = _ref2.endpoint, others = (0, _objectWithoutProperties2["default"])(_ref2, ["endpoint"]);
                _context2.next = 3;
                return throwOnNetworkError(endpoint, others);

              case 3:
                resp = _context2.sent;
                meta = {};
                resp.headers.forEach(function (value, key) {
                  return meta[key] = value;
                });

                if (resp.ok) {
                  _context2.next = 14;
                  break;
                }

                error = new Error('Bad Response');
                error.statusCode = resp.status;
                _context2.next = 11;
                return resp.text();

              case 11:
                error.payload = _context2.sent;
                error.meta = meta;
                throw error;

              case 14:
                _context2.t0 = next;
                _context2.next = 17;
                return resp.text();

              case 17:
                _context2.t1 = _context2.sent;
                _context2.t2 = meta;
                _context2.t3 = {
                  payload: _context2.t1,
                  meta: _context2.t2
                };
                return _context2.abrupt("return", (0, _context2.t0)(_context2.t3));

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports["default"] = _default;