"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _admin = _interopRequireDefault(require("../models/admin"));
var _user = _interopRequireDefault(require("../../models/user"));
var _account = _interopRequireDefault(require("../../models/account"));
var _card = _interopRequireDefault(require("../../models/card"));
var _transaction = _interopRequireDefault(require("../../models/transaction"));
var _authenticateToken = _interopRequireDefault(require("../../utils/authenticateToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require('date-fns'),
  formatDistanceToNow = _require.formatDistanceToNow;
var adminauth = (0, _express["default"])();
adminauth.get('/currentadmin', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var id, foundAdmin;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(!req.user || !req.user._id)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", res.status(401).send({
            error: 'Unauthorized access'
          }));
        case 2:
          id = req.query.id;
          if (!(req.user._id !== id)) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", res.status(403).send({
            error: 'Forbidden access'
          }));
        case 5:
          _context.prev = 5;
          _context.next = 8;
          return _admin["default"].findOne({
            _id: id
          });
        case 8:
          foundAdmin = _context.sent;
          if (foundAdmin) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", res.status(404).send({
            error: 'Admin not found'
          }));
        case 11:
          return _context.abrupt("return", res.status(200).send({
            success: {
              message: 'success',
              type: 'admin auth',
              content: foundAdmin
            }
          }));
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](5);
          console.error('Database error:', _context.t0);
          return _context.abrupt("return", res.status(500).send({
            error: 'Internal Server Error'
          }));
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[5, 14]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
adminauth.post('/admin/create', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, username, password, success, statusCode;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          if (!(!username || !password)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(400).send({
            error: 'Username and password are required'
          }));
        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return _admin["default"].register({
            username: username,
            password: password
          });
        case 6:
          success = _context2.sent;
          res.status(200).send({
            success: success
          });
          _context2.next = 15;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](3);
          console.error('Error creating admin:', _context2.t0);
          // Determine if it's a client error (like duplicate username) or a server error
          statusCode = _context2.t0.isClientError ? 400 : 500;
          res.status(statusCode).send({
            error: _context2.t0.message
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
adminauth.post('/admin/signin', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body2, username, password, success;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
          if (!(!username || !password)) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", res.status(400).send({
            error: 'Username and password are required'
          }));
        case 3:
          _context3.prev = 3;
          _context3.next = 6;
          return _admin["default"].login({
            username: username,
            password: password
          });
        case 6:
          success = _context3.sent;
          res.status(200).send({
            success: success
          });
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](3);
          console.error('Error during admin sign-in:', _context3.t0);
          // Here, you might want to provide a generic error message for security reasons
          res.status(401).send({
            error: 'Invalid username or password'
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
adminauth.get('/admin/getusers', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var administrator, _req$query, currentPageQuery, searchquery, currentPage, itemsPerPage, query, totalItems, totalPages, validatedCurrentPage, skip, remainingItems, pageNumbers, users, enrichedUsers;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!(!req.user || !req.user._id)) {
            _context5.next = 2;
            break;
          }
          return _context5.abrupt("return", res.status(401).send({
            error: 'Unauthorized'
          }));
        case 2:
          _context5.prev = 2;
          _context5.next = 5;
          return _admin["default"].findOne({
            _id: req.user._id
          });
        case 5:
          administrator = _context5.sent;
          if (!(!administrator || !administrator.admin)) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(403).send({
            error: 'Forbidden: Insufficient privileges'
          }));
        case 8:
          _req$query = req.query, currentPageQuery = _req$query.currentPageQuery, searchquery = _req$query.searchquery;
          currentPage = Math.max(parseInt(currentPageQuery) || 1, 1);
          itemsPerPage = 30;
          console.log(currentPage, searchquery, 'checker');
          query = {}; // Add search conditions only if searchquery exists and has length
          if (searchquery && searchquery.length > 0) {
            query = {
              $or: [{
                firstname: {
                  $regex: searchquery,
                  $options: 'i'
                }
              }, {
                lastname: {
                  $regex: searchquery,
                  $options: 'i'
                }
              }, {
                email: {
                  $regex: searchquery,
                  $options: 'i'
                }
              }]
            };
          }

          // Get total count of users (for pagination)
          _context5.next = 16;
          return _user["default"].countDocuments(query);
        case 16:
          totalItems = _context5.sent;
          totalPages = Math.ceil(totalItems / itemsPerPage);
          validatedCurrentPage = Math.min(currentPage, totalPages || 1);
          skip = (validatedCurrentPage - 1) * itemsPerPage;
          remainingItems = Math.max(totalItems - validatedCurrentPage * itemsPerPage, 0);
          pageNumbers = totalPages > 0 ? _toConsumableArray(Array(totalPages).keys()).map(function (i) {
            return i + 1;
          }) : []; // Get paginated users
          _context5.next = 24;
          return _user["default"].find(query).select('_id firstname lastname email phonenumber account online').skip(skip).limit(itemsPerPage).sort({
            _id: -1
          });
        case 24:
          users = _context5.sent;
          _context5.next = 27;
          return Promise.all(users.map( /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(user) {
              var _yield$Promise$all, _yield$Promise$all2, account, cards;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Promise.all([_account["default"].findOne({
                      _id: user.account
                    }), _card["default"].find({
                      user: user._id
                    })]);
                  case 2:
                    _yield$Promise$all = _context4.sent;
                    _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                    account = _yield$Promise$all2[0];
                    cards = _yield$Promise$all2[1];
                    return _context4.abrupt("return", {
                      details: user,
                      account: account,
                      cards: cards
                    });
                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function (_x9) {
              return _ref5.apply(this, arguments);
            };
          }()));
        case 27:
          enrichedUsers = _context5.sent;
          res.status(200).send({
            success: {
              message: 'success',
              type: 'platform users',
              content: enrichedUsers,
              totalPages: totalPages,
              remainingItems: remainingItems,
              pageNumbers: pageNumbers,
              currentPage: validatedCurrentPage,
              totalItems: totalItems
            }
          });
          _context5.next = 35;
          break;
        case 31:
          _context5.prev = 31;
          _context5.t0 = _context5["catch"](2);
          console.log(_context5.t0);
          res.status(500).send({
            error: 'Internal server error'
          });
        case 35:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 31]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

/*adminauth.get('/admin/getusers', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const administrator = await Admin.findOne({ _id: req.user._id });

        if (!administrator || !administrator.admin) {
            return res.status(403).send({ error: 'Forbidden: Insufficient privileges' });
        }

        const { currentPageQuery } = req.query;

        if (currentPageQuery) {
            const totalItems = await User.countDocuments();
            const itemsPerPage = 10;
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            let currentPage = Math.max(currentPageQuery, 1);

            if (totalPages > 0) {
                currentPage = Math.min(currentPage, totalPages);
            }

            const skip = (currentPage - 1) * itemsPerPage;
            const remainingItems = Math.max(totalItems - (currentPage * itemsPerPage), 0);

            const pageNumbers = [...Array(totalPages).keys()].map(i => i + 1);

            const useritems = await User.find().select('_id firstname lastname email phonenumber account').skip(skip).limit(itemsPerPage);

            const users = await Promise.all(useritems.map(async user => {
                const [account, cards] = await Promise.all([
                    Account.findOne({ _id: user.account }),
                    Card.find({ user: user._id })
                ]);

                return {
                    details: user,
                    account,
                    cards
                };
            }));

            res.status(200).send({
                success: {
                    message: 'success',
                    type: 'platform users',
                    content: users,
                    totalPages,
                    remainingItems,
                    pageNumbers,
                    totalItems
                }
            });
        }
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});*/

adminauth.get('/admin/getuser', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var administrator, userid, user, _yield$Promise$all3, _yield$Promise$all4, account, cards, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (!(!req.user || !req.user._id)) {
            _context6.next = 2;
            break;
          }
          return _context6.abrupt("return", res.status(401).send({
            error: 'Unauthorized'
          }));
        case 2:
          _context6.prev = 2;
          _context6.next = 5;
          return _admin["default"].findOne({
            _id: req.user._id
          });
        case 5:
          administrator = _context6.sent;
          if (!(!administrator || !administrator.admin)) {
            _context6.next = 8;
            break;
          }
          return _context6.abrupt("return", res.status(403).send({
            error: 'Forbidden: Insufficient privileges'
          }));
        case 8:
          userid = req.query.userid;
          if (userid) {
            _context6.next = 11;
            break;
          }
          return _context6.abrupt("return", res.status(400).send({
            error: 'User ID is required'
          }));
        case 11:
          _context6.next = 13;
          return _user["default"].findOne({
            _id: userid
          });
        case 13:
          user = _context6.sent;
          if (user) {
            _context6.next = 16;
            break;
          }
          return _context6.abrupt("return", res.status(404).send({
            error: 'User not found'
          }));
        case 16:
          _context6.next = 18;
          return Promise.all([_account["default"].findOne({
            _id: user.account
          }), _card["default"].find({
            user: user._id
          })]);
        case 18:
          _yield$Promise$all3 = _context6.sent;
          _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
          account = _yield$Promise$all4[0];
          cards = _yield$Promise$all4[1];
          console.log(user, 'user');
          result = {
            details: user,
            account: account,
            cards: cards,
            lastOnline: user.lastSeen === null ? 'not available yet' : formatDistanceToNow(new Date(user.lastSeen), {
              addSuffix: true
            })
          };
          res.status(200).send({
            success: {
              message: 'success',
              type: 'platform user',
              content: result
            }
          });
          _context6.next = 31;
          break;
        case 27:
          _context6.prev = 27;
          _context6.t0 = _context6["catch"](2);
          console.error('Error fetching user:', _context6.t0);
          res.status(500).send({
            error: 'Internal Server Error'
          });
        case 31:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 27]]);
  }));
  return function (_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}());
adminauth.get('/admin/getusertxns', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var administrator, userid, transactions;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          if (!(!req.user || !req.user._id)) {
            _context7.next = 2;
            break;
          }
          return _context7.abrupt("return", res.status(401).send({
            error: 'Unauthorized'
          }));
        case 2:
          _context7.prev = 2;
          _context7.next = 5;
          return _admin["default"].findOne({
            _id: req.user._id
          });
        case 5:
          administrator = _context7.sent;
          if (!(!administrator || !administrator.admin)) {
            _context7.next = 8;
            break;
          }
          return _context7.abrupt("return", res.status(403).send({
            error: 'Forbidden: Insufficient privileges'
          }));
        case 8:
          userid = req.query.userid;
          if (userid) {
            _context7.next = 11;
            break;
          }
          return _context7.abrupt("return", res.status(400).send({
            error: 'User ID is required'
          }));
        case 11:
          _context7.next = 13;
          return _user["default"].getTransactions(userid);
        case 13:
          transactions = _context7.sent;
          res.status(200).send({
            success: transactions
          });
          _context7.next = 21;
          break;
        case 17:
          _context7.prev = 17;
          _context7.t0 = _context7["catch"](2);
          console.error('Error fetching transactions:', _context7.t0);
          res.status(500).send({
            error: 'Internal Server Error'
          });
        case 21:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 17]]);
  }));
  return function (_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}());
var _default = exports["default"] = adminauth;