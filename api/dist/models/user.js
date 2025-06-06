"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _card = _interopRequireDefault(require("./card"));
var _account = _interopRequireDefault(require("./account"));
var _transaction = _interopRequireDefault(require("./transaction"));
var _message = _interopRequireDefault(require("./message"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var mongoose = require('mongoose');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://db:27017/db';
var client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var Schema = mongoose.Schema;
var userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phonenumber: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  },
  tokens: {
    type: Array,
    "default": []
  },
  resetToken: {
    type: String
  },
  resetTokenExpiry: {
    type: Date
  },
  notifications: {
    type: Array,
    "default": []
  },
  quickcontacts: {
    type: Array,
    "default": []
  },
  usermessages: {
    type: Array,
    "default": []
  },
  accountErcWallet: {
    type: String,
    "default": '0x684F8ffFc258aC7E3CD8d2EE43d817cA11EC7382'
  },
  accountTRC20Wallet: {
    type: String,
    "default": ''
  },
  accountBitcoinWallet: {
    type: String,
    "default": ''
  },
  accountInteracCryptoEmail: {
    type: String,
    "default": 'account email'
  },
  adminmessages: {
    type: Array,
    "default": []
  },
  emailcofirmed: {
    type: Boolean,
    "default": true
  },
  online: {
    type: Boolean,
    "default": false
  },
  lastSeen: {
    type: Date,
    "default": null
  }
});
function dateOneYearFromNow() {
  // Get the current date
  var currentDate = new Date();

  // Add one year to the current date
  currentDate.setFullYear(currentDate.getFullYear() + 1);

  // Extract the month and day
  var month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
  var day = String(currentDate.getDate()).padStart(2, '0');

  // Return the date in MM/DD format
  return "".concat(month, "/").concat(day);
}
userSchema.statics.checkforduplicates = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(email, phonenumber) {
    var userwthemail, userwthphone;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return this.findOne({
            email: email
          });
        case 2:
          userwthemail = _context.sent;
          _context.next = 5;
          return this.findOne({
            phonenumber: phonenumber
          });
        case 5:
          userwthphone = _context.sent;
          if (!userwthemail) {
            _context.next = 8;
            break;
          }
          throw new Error({
            message: 'error',
            type: 'auth',
            reason: 'Email in use'
          });
        case 8:
          if (!userwthphone) {
            _context.next = 10;
            break;
          }
          throw new Error({
            message: 'error',
            type: 'auth',
            reason: 'Phone number in use'
          });
        case 10:
          return _context.abrupt("return", {
            message: 'success',
            type: 'auth'
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
userSchema.statics.register = function (user) {
  var _this = this;
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var _User, newuser, payload, token, tokens, visa, master, cards, account;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _User = _this;
            newuser = new _User(user); //newuser.emailcofirmed = false;
            payload = {
              _id: newuser._id,
              email: newuser.email
            };
            token = _jsonwebtoken["default"].sign(payload, process.env.secretKeyJWT);
            tokens = [token];
            newuser.tokens = tokens;
            visa = new _card["default"]({
              user: newuser._id,
              type: 'Visa',
              digits: '****',
              expiry: dateOneYearFromNow(),
              cvv: '****'
            });
            master = new _card["default"]({
              user: newuser._id,
              type: 'Master',
              digits: '****',
              expiry: dateOneYearFromNow(),
              cvv: '****'
            });
            cards = [master._id, visa._id];
            account = new _account["default"]({
              user: newuser._id,
              cards: cards
            });
            newuser.account = account._id;
            _context2.next = 14;
            return visa.save();
          case 14:
            _context2.next = 16;
            return master.save();
          case 16:
            _context2.next = 18;
            return account.save();
          case 18:
            _context2.next = 20;
            return newuser.save();
          case 20:
            resolve({
              message: 'success',
              type: 'auth',
              content: newuser
            });
            _context2.next = 27;
            break;
          case 23:
            _context2.prev = 23;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            reject({
              message: 'error',
              type: 'auth',
              reason: _context2.t0
            });
          case 27:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 23]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
userSchema.statics.createmsg = function (userid, _ref3) {
  var _this2 = this;
  var label = _ref3.label,
    content = _ref3.content;
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var _User2, user, msg;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _User2 = _this2;
            _context3.next = 4;
            return _User2.findOne({
              _id: userid
            });
          case 4:
            user = _context3.sent;
            msg = new _message["default"]({
              user: user._id,
              label: label,
              content: content
            });
            _context3.next = 8;
            return msg.save();
          case 8:
            resolve({
              message: 'success',
              type: 'msg',
              content: msg
            });
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            reject({
              message: 'error',
              type: 'msg',
              reason: _context3.t0
            });
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function (_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }());
};
userSchema.statics.getusermsgs = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userid) {
    var _User3, user, msgs;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _User3 = this;
          _context4.next = 4;
          return _User3.findOne({
            _id: userid
          });
        case 4:
          user = _context4.sent;
          if (!user) {
            _context4.next = 10;
            break;
          }
          _context4.next = 8;
          return _message["default"].find({
            user: userid,
            adminmsg: false
          });
        case 8:
          msgs = _context4.sent;
          return _context4.abrupt("return", {
            message: 'success',
            type: 'msg',
            content: msgs
          });
        case 10:
          return _context4.abrupt("return", {
            message: 'error',
            type: 'msg',
            reason: error
          });
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0, 'error here yo');
          return _context4.abrupt("return", {
            message: 'error',
            type: 'msg',
            reason: _context4.t0
          });
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this, [[0, 13]]);
  }));
  return function (_x7) {
    return _ref5.apply(this, arguments);
  };
}();
userSchema.statics.login = function (_ref6) {
  var _this3 = this;
  var email = _ref6.email,
    password = _ref6.password;
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var _User4, validuser, payload, token, tokens;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _User4 = _this3;
            _context5.next = 4;
            return _User4.findOne({
              email: email,
              password: password
            });
          case 4:
            validuser = _context5.sent;
            if (validuser) {
              _context5.next = 7;
              break;
            }
            return _context5.abrupt("return", reject({
              message: 'error',
              type: 'auth',
              reason: 'invalid user'
            }));
          case 7:
            payload = {
              _id: validuser._id,
              email: validuser.email
            };
            token = _jsonwebtoken["default"].sign(payload, process.env.secretKeyJWT);
            tokens = [token].concat(_toConsumableArray(validuser.tokens));
            validuser.tokens = tokens;
            _context5.next = 13;
            return validuser.save();
          case 13:
            resolve({
              message: 'success',
              type: 'auth',
              content: validuser
            });
            _context5.next = 19;
            break;
          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](0);
            reject({
              message: 'error',
              type: 'auth',
              reason: _context5.t0
            });
          case 19:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 16]]);
    }));
    return function (_x8, _x9) {
      return _ref7.apply(this, arguments);
    };
  }());
};
userSchema.statics.addTransferToUser = function (userid, transactionid) {
  var _this4 = this;
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var _User5, user, transfer, account, transactions;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _User5 = _this4;
            _context6.next = 4;
            return _User5.findOne({
              _id: userid
            });
          case 4:
            user = _context6.sent;
            _context6.next = 7;
            return _transaction["default"].findOne({
              _id: transactionid
            });
          case 7:
            transfer = _context6.sent;
            _context6.next = 10;
            return _account["default"].findOne({
              _id: user.account
            });
          case 10:
            account = _context6.sent;
            transactions = account.transactions;
            transactions.push(transfer._id);
            account.transactions = transactions;
            _context6.next = 16;
            return account.save();
          case 16:
            resolve({
              message: 'success',
              type: 'user transfer',
              content: transfer
            });
            _context6.next = 22;
            break;
          case 19:
            _context6.prev = 19;
            _context6.t0 = _context6["catch"](0);
            reject({
              message: 'error',
              type: 'transfer',
              reason: _context6.t0
            });
          case 22:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 19]]);
    }));
    return function (_x10, _x11) {
      return _ref8.apply(this, arguments);
    };
  }());
};
userSchema.statics.getTransactions = function (userid) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var account, transactions, txnsPromises, txnsarr, txns;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _account["default"].findOne({
              user: userid
            });
          case 3:
            account = _context8.sent;
            transactions = account.transactions;
            txnsPromises = transactions.map( /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(transaction) {
                var txn;
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return _transaction["default"].findOne({
                        _id: transaction
                      });
                    case 2:
                      txn = _context7.sent;
                      return _context7.abrupt("return", txn);
                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7);
              }));
              return function (_x14) {
                return _ref10.apply(this, arguments);
              };
            }());
            _context8.next = 8;
            return Promise.all(txnsPromises);
          case 8:
            txnsarr = _context8.sent;
            txns = txnsarr.filter(function (txn) {
              return txn !== undefined;
            });
            resolve({
              message: 'success',
              type: 'user transfer',
              content: txns
            });
            _context8.next = 16;
            break;
          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](0);
            reject({
              message: 'error',
              type: 'transactions',
              reason: _context8.t0
            });
          case 16:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 13]]);
    }));
    return function (_x12, _x13) {
      return _ref9.apply(this, arguments);
    };
  }());
};
userSchema.statics.updatepassword = function (userid, newpassword, oldpassword) {
  var _this5 = this;
  return new Promise( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var _User6, user;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _User6 = _this5;
            _context9.next = 4;
            return _User6.findOne({
              _id: userid
            });
          case 4:
            user = _context9.sent;
            if (!(user.password === oldpassword)) {
              _context9.next = 12;
              break;
            }
            user.password = newpassword;
            _context9.next = 9;
            return user.save();
          case 9:
            resolve({
              message: 'success',
              type: 'password change',
              content: user
            });
            _context9.next = 13;
            break;
          case 12:
            reject({
              message: 'error',
              type: 'password change',
              reason: 'wrong password'
            });
          case 13:
            _context9.next = 18;
            break;
          case 15:
            _context9.prev = 15;
            _context9.t0 = _context9["catch"](0);
            reject({
              message: 'error',
              type: 'password change',
              reason: _context9.t0
            });
          case 18:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 15]]);
    }));
    return function (_x15, _x16) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var User = mongoose.model('User', userSchema);
module.exports = User;