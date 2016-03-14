//     Underscore.js 1.5.1
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function() {
    var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, v = e.reduce, h = e.reduceRight, d = e.filter, g = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, _ = Object.keys, w = i.bind, j = function(n) {
        return n instanceof j ? n : this instanceof j ? (this._wrapped = n, void 0) : new j(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = "1.5.1";
    var A = j.each = j.forEach = function(n, t, e) {
        if (null != n)
            if (s && n.forEach === s)
                n.forEach(t, e);
            else if (n.length ===+ n.length) {
                for (var u = 0, i = n.length; i > u; u++)
                    if (t.call(e, n[u], u, n) === r)
                        return
            } else
                for (var a in n)
                    if (j.has(n, a) && t.call(e, n[a], a, n) === r)
                        return
    };
    j.map = j.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e.push(t.call(r, n, u, i))
        }), e)
    };
    var E = "Reduce of empty array with no initial value";
    j.reduce = j.foldl = j.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduce === v)
            return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
                u ? r = t.call(e, r, n, i, a) : (r = n, u=!0)
            }), !u)
            throw new TypeError(E);
        return r
    }, j.reduceRight = j.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduceRight === h)
            return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i!==+i) {
            var a = j.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
                c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u=!0)
            }), !u)
            throw new TypeError(E);
        return r
    }, j.find = j.detect = function(n, t, r) {
        var e;
        return O(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, j.filter = j.select = function(n, t, r) {
        var e = [];
        return null == n ? e : d && n.filter === d ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && e.push(n)
        }), e)
    }, j.reject = function(n, t, r) {
        return j.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, j.every = j.all = function(n, t, e) {
        t || (t = j.identity);
        var u=!0;
        return null == n ? u : g && n.every === g ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var O = j.some = j.any = function(n, t, e) {
        t || (t = j.identity);
        var u=!1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !!u)
    };
    j.contains = j.include = function(n, t) {
        return null == n?!1 : y && n.indexOf === y ? n.indexOf(t)!=-1 : O(n, function(n) {
            return n === t
        })
    }, j.invoke = function(n, t) {
        var r = o.call(arguments, 2), e = j.isFunction(t);
        return j.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }, j.pluck = function(n, t) {
        return j.map(n, function(n) {
            return n[t]
        })
    }, j.where = function(n, t, r) {
        return j.isEmpty(t) ? r ? void 0 : [] : j[r ? "find": "filter"](n, function(n) {
            for (var r in t)
                if (t[r] !== n[r])
                    return !1;
            return !0
        })
    }, j.findWhere = function(n, t) {
        return j.where(n, t, !0)
    }, j.max = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] ===+ n[0] && n.length < 65535)
            return Math.max.apply(Math, n);
        if (!t && j.isEmpty(n))
            return - 1 / 0;
        var e = {
            computed: - 1 / 0,
            value: - 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i): n;
            a > e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, j.min = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] ===+ n[0] && n.length < 65535)
            return Math.min.apply(Math, n);
        if (!t && j.isEmpty(n))
            return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i): n;
            a < e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, j.shuffle = function(n) {
        var t, r = 0, e = [];
        return A(n, function(n) {
            t = j.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    };
    var F = function(n) {
        return j.isFunction(n) ? n : function(t) {
            return t[n]
        }
    };
    j.sortBy = function(n, t, r) {
        var e = F(t);
        return j.pluck(j.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria, e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0)
                    return 1;
                if (e > r || e === void 0)
                    return - 1
            }
            return n.index < t.index?-1 : 1
        }), "value")
    };
    var k = function(n, t, r, e) {
        var u = {}, i = F(null == t ? j.identity : t);
        return A(n, function(t, a) {
            var o = i.call(r, t, a, n);
            e(u, o, t)
        }), u
    };
    j.groupBy = function(n, t, r) {
        return k(n, t, r, function(n, t, r) {
            (j.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    }, j.countBy = function(n, t, r) {
        return k(n, t, r, function(n, t) {
            j.has(n, t) || (n[t] = 0), n[t]++
        })
    }, j.sortedIndex = function(n, t, r, e) {
        r = null == r ? j.identity : F(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a>>>1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o
        }
        return i
    }, j.toArray = function(n) {
        return n ? j.isArray(n) ? o.call(n) : n.length ===+ n.length ? j.map(n, j.identity) : j.values(n) : []
    }, j.size = function(n) {
        return null == n ? 0 : n.length ===+ n.length ? n.length : j.keys(n).length
    }, j.first = j.head = j.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, j.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, j.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, j.rest = j.tail = j.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, j.compact = function(n) {
        return j.filter(n, j.identity)
    };
    var R = function(n, t, r) {
        return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function(n) {
            j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
        }), r)
    };
    j.flatten = function(n, t) {
        return R(n, t, [])
    }, j.without = function(n) {
        return j.difference(n, o.call(arguments, 1))
    }, j.uniq = j.unique = function(n, t, r, e) {
        j.isFunction(t) && (e = r, r = t, t=!1);
        var u = r ? j.map(n, r, e): n, i = [], a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, j.union = function() {
        return j.uniq(j.flatten(arguments, !0))
    }, j.intersection = function(n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n), function(n) {
            return j.every(t, function(t) {
                return j.indexOf(t, n) >= 0
            })
        })
    }, j.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n, function(n) {
            return !j.contains(t, n)
        })
    }, j.zip = function() {
        for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++)
            t[r] = j.pluck(arguments, "" + r);
        return t
    }, j.object = function(n, t) {
        if (null == n)
            return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++)
            t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, j.indexOf = function(n, t, r) {
        if (null == n)
            return - 1;
        var e = 0, u = n.length;
        if (r) {
            if ("number" != typeof r)
                return e = j.sortedIndex(n, t), n[e] === t ? e : - 1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y)
            return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t)
                return e;
        return - 1
    }, j.lastIndexOf = function(n, t, r) {
        if (null == n)
            return - 1;
        var e = null != r;
        if (b && n.lastIndexOf === b)
            return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)
            if (n[u] === t)
                return u;
        return - 1
    }, j.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;)
            i[u++] = n, n += r;
        return i
    };
    var M = function() {};
    j.bind = function(n, t) {
        var r, e;
        if (w && n.bind === w)
            return w.apply(n, o.call(arguments, 1));
        if (!j.isFunction(n))
            throw new TypeError;
        return r = o.call(arguments, 2), e = function() {
            if (!(this instanceof e))
                return n.apply(t, r.concat(o.call(arguments)));
            M.prototype = n.prototype;
            var u = new M;
            M.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, j.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(o.call(arguments)))
        }
    }, j.bindAll = function(n) {
        var t = o.call(arguments, 1);
        if (0 === t.length)
            throw new Error("bindAll must be passed function names");
        return A(t, function(t) {
            n[t] = j.bind(n[t], n)
        }), n
    }, j.memoize = function(n, t) {
        var r = {};
        return t || (t = j.identity), function() {
            var e = t.apply(this, arguments);
            return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, j.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, j.defer = function(n) {
        return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)))
    }, j.throttle = function(n, t, r) {
        var e, u, i, a = null, o = 0;
        r || (r = {});
        var c = function() {
            o = r.leading===!1 ? 0 : new Date, a = null, i = n.apply(e, u)
        };
        return function() {
            var l = new Date;
            o || r.leading!==!1 || (o = l);
            var f = t - (l - o);
            return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing===!1 || (a = setTimeout(c, f)), i
        }
    }, j.debounce = function(n, t, r) {
        var e, u = null;
        return function() {
            var i = this, a = arguments, o = function() {
                u = null, r || (e = n.apply(i, a))
            }, c = r&&!u;
            return clearTimeout(u), u = setTimeout(o, t), c && (e = n.apply(i, a)), e
        }
    }, j.once = function(n) {
        var t, r=!1;
        return function() {
            return r ? t : (r=!0, t = n.apply(this, arguments), n = null, t)
        }
    }, j.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, j.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--)
                t = [n[r].apply(this, t)];
            return t[0]
        }
    }, j.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }, j.keys = _ || function(n) {
            if (n !== Object(n))
                throw new TypeError("Invalid object");
            var t = [];
            for (var r in n)
                j.has(n, r) && t.push(r);
            return t
        }, j.values = function(n) {
        var t = [];
        for (var r in n)
            j.has(n, r) && t.push(n[r]);
        return t
    }, j.pairs = function(n) {
        var t = [];
        for (var r in n)
            j.has(n, r) && t.push([r, n[r]]);
        return t
    }, j.invert = function(n) {
        var t = {};
        for (var r in n)
            j.has(n, r) && (t[n[r]] = r);
        return t
    }, j.functions = j.methods = function(n) {
        var t = [];
        for (var r in n)
            j.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, j.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t)
                    n[r] = t[r]
        }), n
    }, j.pick = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, j.omit = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        for (var u in n)
            j.contains(r, u) || (t[u] = n[u]);
        return t
    }, j.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t)
                    n[r] === void 0 && (n[r] = t[r])
        }), n
    }, j.clone = function(n) {
        return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n
    }, j.tap = function(n, t) {
        return t(n), n
    };
    var S = function(n, t, r, e) {
        if (n === t)
            return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t)
            return n === t;
        n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t))
            return !1;
        switch (u) {
            case"[object String]":
                return n == String(t);
            case"[object Number]":
                return n!=+n ? t!=+t : 0 == n ? 1 / n == 1 / t : n ==+ t;
            case"[object Date]":
            case"[object Boolean]":
                return + n ==+ t;
            case"[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t)
            return !1;
        for (var i = r.length; i--;)
            if (r[i] == n)
                return e[i] == t;
        var a = n.constructor, o = t.constructor;
        if (a !== o&&!(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o))
            return !1;
        r.push(n), e.push(t);
        var c = 0, f=!0;
        if ("[object Array]" == u) {
            if (c = n.length, f = c == t.length)
                for (; c--&&(f = S(n[c], t[c], r, e)););
        } else {
            for (var s in n)
                if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e))))
                    break;
            if (f) {
                for (s in t)
                    if (j.has(t, s)&&!c--)
                        break;
                f=!c
            }
        }
        return r.pop(), e.pop(), f
    };
    j.isEqual = function(n, t) {
        return S(n, t, [], [])
    }, j.isEmpty = function(n) {
        if (null == n)
            return !0;
        if (j.isArray(n) || j.isString(n))
            return 0 === n.length;
        for (var t in n)
            if (j.has(n, t))
                return !1;
        return !0
    }, j.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, j.isArray = x || function(n) {
            return "[object Array]" == l.call(n)
        }, j.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        j["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), j.isArguments(arguments) || (j.isArguments = function(n) {
        return !(!n ||!j.has(n, "callee"))
    }), "function" != typeof/./ && (j.isFunction = function(n) {
        return "function" == typeof n
    }), j.isFinite = function(n) {
        return isFinite(n)&&!isNaN(parseFloat(n))
    }, j.isNaN = function(n) {
        return j.isNumber(n) && n!=+n
    }, j.isBoolean = function(n) {
        return n===!0 || n===!1 || "[object Boolean]" == l.call(n)
    }, j.isNull = function(n) {
        return null === n
    }, j.isUndefined = function(n) {
        return n === void 0
    }, j.has = function(n, t) {
        return f.call(n, t)
    }, j.noConflict = function() {
        return n._ = t, this
    }, j.identity = function(n) {
        return n
    }, j.times = function(n, t, r) {
        for (var e = Array(Math.max(0, n)), u = 0; n > u; u++)
            e[u] = t.call(r, u);
        return e
    }, j.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    var I = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    I.unescape = j.invert(I.escape);
    var T = {
        escape: new RegExp("[" + j.keys(I.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")", "g")
    };
    j.each(["escape", "unescape"], function(n) {
        j[n] = function(t) {
            return null == t ? "" : ("" + t).replace(T[n], function(t) {
                return I[n][t]
            })
        }
    }), j.result = function(n, t) {
        if (null == n)
            return void 0;
        var r = n[t];
        return j.isFunction(r) ? r.call(n) : r
    }, j.mixin = function(n) {
        A(j.functions(n), function(t) {
            var r = j[t] = n[t];
            j.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), z.call(this, r.apply(j, n))
            }
        })
    };
    var N = 0;
    j.uniqueId = function(n) {
        var t=++N + "";
        return n ? n + t : t
    }, j.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/, B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    j.template = function(n, t, r) {
        var e;
        r = j.defaults({}, r, j.templateSettings);
        var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"), i = 0, a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(D, function(n) {
                return "\\" + B[n]
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = new Function(r.variable || "obj", "_", a)
        } catch (o) {
            throw o.source = a, o
        }
        if (t)
            return e(t, j);
        var c = function(n) {
            return e.call(this, n, j)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
    }, j.chain = function(n) {
        return j(n).chain()
    };
    var z = function(n) {
        return this._chain ? j(n).chain() : n
    };
    j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }), j.extend(j.prototype, {
        chain: function() {
            return this._chain=!0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this);
/*

 Copyright (c) Manuel Stofer 2012 - rtp.ch - RTP.PinchZoom.js
 This is free software; you can redistribute it and/or modify it under the terms
 of the [GNU General Public License](http://www.gnu.org/licenses/gpl-3.0.txt),
 either version 3 of the License, or (at your option) any later version.

 */


/*global jQuery, console, define, setTimeout, _, window*/
(function () {
    'use strict';
    var definePinchZoom = function ($, _) {

        /**
         * Pinch zoom using jQuery and Underscore.js
         * @author Manuel Stofer <mst@rtp.ch>
         * @param el
         * @param options
         * @constructor
         */
        var PinchZoom = function (el, options) {
                this.el = $(el);
                this.zoomFactor = 1;
                this.lastScale = 1;
                this.offset = {
                    x: 0,
                    y: 0
                };
                this.options = _.extend(this.defaults, options);
                this.setupMarkup();
                this.bindEvents();
                this.update();

            },
            sum = function (a, b) {
                return a + b;
            },
            isCloseTo = function (value, expected) {
                return value > expected - 0.01 && value < expected + 0.01;
            };

        PinchZoom.prototype = {

            defaults: {
                tapZoomFactor: 2,
                zoomOutFactor: 1.3,
                animationDuration: 300,
                animationInterval: 5,
                maxZoom: 4,
                minZoom: 0.5,
                use2d: true
            },

            /**
             * Event handler for 'dragstart'
             * @param event
             */
            handleDragStart: function (event) {
                this.stopAnimation();
                this.lastDragPosition = false;
                this.hasInteraction = true;
                this.handleDrag(event);
            },

            /**
             * Event handler for 'drag'
             * @param event
             */
            handleDrag: function (event) {

                if (this.zoomFactor > 1.0) {
                    var touch = this.getTouches(event)[0];
                    this.drag(touch, this.lastDragPosition);
                    this.offset = this.sanitizeOffset(this.offset);
                    this.lastDragPosition = touch;
                }
            },

            handleDragEnd: function () {
                this.end();
            },

            /**
             * Event handler for 'zoomstart'
             * @param event
             */
            handleZoomStart: function (event) {
                this.stopAnimation();
                this.lastScale = 1;
                this.nthZoom = 0;
                this.lastZoomCenter = false;
                this.hasInteraction = true;
            },

            /**
             * Event handler for 'zoom'
             * @param event
             */
            handleZoom: function (event, newScale) {

                // a relative scale factor is used
                var touchCenter = this.getTouchCenter(this.getTouches(event)),
                    scale = newScale / this.lastScale;
                this.lastScale = newScale;

                // the first touch events are thrown away since they are not precise
                this.nthZoom += 1;
                if (this.nthZoom > 3) {

                    this.scale(scale, touchCenter);
                    this.drag(touchCenter, this.lastZoomCenter);
                }
                this.lastZoomCenter = touchCenter;
            },

            handleZoomEnd: function () {
                this.end();
            },

            /**
             * Event handler for 'doubletap'
             * @param event
             */
            handleDoubleTap: function (event) {
                var center = this.getTouches(event)[0],
                    zoomFactor = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor,
                    startZoomFactor = this.zoomFactor,
                    updateProgress = _.bind(function (progress) {
                        this.scaleTo(startZoomFactor + progress * (zoomFactor - startZoomFactor), center);
                    }, this);

                if (this.hasInteraction) {
                    return;
                }
                if (startZoomFactor > zoomFactor) {
                    center = this.getCurrentZoomCenter();
                }

                this.animate(this.options.animationDuration, this.options.animationInterval, updateProgress, this.swing);
            },

            /**
             * Max / min values for the offset
             * @param offset
             * @return {Object} the sanitized offset
             */
            sanitizeOffset: function (offset) {
                var maxX = (this.zoomFactor - 1) * this.getContainerX(),
                    maxY = (this.zoomFactor - 1) * this.getContainerY(),
                    maxOffsetX = Math.max(maxX, 0),
                    maxOffsetY = Math.max(maxY, 0),
                    minOffsetX = Math.min(maxX, 0),
                    minOffsetY = Math.min(maxY, 0);

                return {
                    x: Math.min(Math.max(offset.x, minOffsetX), maxOffsetX),
                    y: Math.min(Math.max(offset.y, minOffsetY), maxOffsetY)
                };
            },

            /**
             * Scale to a specific zoom factor (not relative)
             * @param zoomFactor
             * @param center
             */
            scaleTo: function (zoomFactor, center) {
                this.scale(zoomFactor / this.zoomFactor, center);
            },

            /**
             * Scales the element from specified center
             * @param scale
             * @param center
             */
            scale: function (scale, center) {
                scale = this.scaleZoomFactor(scale);
                this.addOffset({
                    x: (scale - 1) * (center.x + this.offset.x),
                    y: (scale - 1) * (center.y + this.offset.y)
                });
            },

            /**
             * Scales the zoom factor relative to current state
             * @param scale
             * @return the actual scale (can differ because of max min zoom factor)
             */
            scaleZoomFactor: function (scale) {
                var originalZoomFactor = this.zoomFactor;
                this.zoomFactor *= scale;
                this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom));
                return this.zoomFactor / originalZoomFactor;
            },

            /**
             * Drags the element
             * @param center
             * @param lastCenter
             */
            drag: function (center, lastCenter) {
                if (lastCenter) {
                    this.addOffset({
                        x: -(center.x - lastCenter.x),
                        y: -(center.y - lastCenter.y)
                    });
                }
            },

            /**
             * Calculates the touch center of multiple touches
             * @param touches
             * @return {Object}
             */
            getTouchCenter: function (touches) {
                return this.getVectorAvg(touches);
            },

            /**
             * Calculates the average of multiple vectors (x, y values)
             */
            getVectorAvg: function (vectors) {
                return {
                    x: _.reduce(_.pluck(vectors, 'x'), sum) / vectors.length,
                    y: _.reduce(_.pluck(vectors, 'y'), sum) / vectors.length
                };
            },

            /**
             * Adds an offset
             * @param offset the offset to add
             * @return return true when the offset change was accepted
             */
            addOffset: function (offset) {
                this.offset = {
                    x: this.offset.x + offset.x,
                    y: this.offset.y + offset.y
                };
            },

            sanitize: function () {
                if (this.zoomFactor < this.options.zoomOutFactor) {
                    this.zoomOutAnimation();
                } else if (this.isInsaneOffset(this.offset)) {
                    this.sanitizeOffsetAnimation();
                }
            },

            /**
             * Checks if the offset is ok with the current zoom factor
             * @param offset
             * @return {Boolean}
             */
            isInsaneOffset: function (offset) {
                var sanitizedOffset = this.sanitizeOffset(offset);
                return sanitizedOffset.x !== offset.x ||
                    sanitizedOffset.y !== offset.y;
            },

            /**
             * Creates an animation moving to a sane offset
             */
            sanitizeOffsetAnimation: function () {
                var targetOffset = this.sanitizeOffset(this.offset),
                    startOffset = {
                        x: this.offset.x,
                        y: this.offset.y
                    },
                    updateProgress = _.bind(function (progress) {
                        this.offset.x = startOffset.x + progress * (targetOffset.x - startOffset.x);
                        this.offset.y = startOffset.y + progress * (targetOffset.y - startOffset.y);
                        this.update();
                    }, this);

                this.animate(
                    this.options.animationDuration,
                    this.options.animationInterval,
                    updateProgress,
                    this.swing
                );
            },

            /**
             * Zooms back to the original position,
             * (no offset and zoom factor 1)
             */
            zoomOutAnimation: function () {
                var startZoomFactor = this.zoomFactor,
                    zoomFactor = 1,
                    center = this.getCurrentZoomCenter(),
                    updateProgress = _.bind(
                        function (progress) {
                            this.scaleTo(startZoomFactor + progress * (zoomFactor - startZoomFactor), center);
                        },
                        this
                    );

                this.animate(
                    this.options.animationDuration,
                    this.options.animationInterval,
                    updateProgress,
                    this.swing
                );
            },

            /**
             * Updates the aspect ratio
             */
            updateAspectRatio: function () {
                this.setContainerY(this.getContainerX() / this.getAspectRatio());
            },

            /**
             * Calculates the initial zoom factor (for the element to fit into the container)
             * @return the initial zoom factor
             */
            getInitialZoomFactor: function () {
                return this.container.width() / this.el.width();
            },

            /**
             * Calculates the aspect ratio of the element
             * @return the aspect ratio
             */
            getAspectRatio: function () {
                return this.el.width() / this.el.height();
            },

            /**
             * Calculates the virtual zoom center for the current offset and zoom factor
             * (used for reverse zoom)
             * @return {Object} the current zoom center
             */
            getCurrentZoomCenter: function () {

                // uses following formula to calculate the zoom center x value
                // offset_left / offset_right = zoomcenter_x / (container_x - zoomcenter_x)
                var length = this.container.width() * this.zoomFactor,
                    offsetLeft  = this.offset.x,
                    offsetRight = length - offsetLeft - this.container.width(),
                    widthOffsetRatio = offsetLeft / offsetRight,
                    centerX = widthOffsetRatio * this.container.width() / (widthOffsetRatio + 1),

                // the same for the zoomcenter y
                    height = this.container.height() * this.zoomFactor,
                    offsetTop  = this.offset.y,
                    offsetBottom = height - offsetTop - this.container.height(),
                    heightOffsetRatio = offsetTop / offsetBottom,
                    centerY = heightOffsetRatio * this.container.height() / (heightOffsetRatio + 1);

                // prevents division by zero
                if (offsetRight === 0) { centerX = this.container.width(); }
                if (offsetBottom === 0) { centerY = this.container.height(); }

                return {
                    x: centerX,
                    y: centerY
                };
            },

            canDrag: function () {
                return !isCloseTo(this.zoomFactor, 1);
            },

            /**
             * Returns the touches of an event relative to the container offset
             * @param event
             * @return array touches
             */
            getTouches: function (event) {
                var position = this.container.offset();
                return _.map(event.touches, function (touch) {
                    return {
                        x: touch.pageX - position.left,
                        y: touch.pageY - position.top
                    };
                });
            },

            /**
             * Animation loop
             * does not support simultaneous animations
             * @param duration
             * @param interval
             * @param framefn
             * @param timefn
             * @param callback
             */
            animate: function (duration, interval, framefn, timefn, callback) {
                var startTime = new Date().getTime(),
                    renderFrame = _.bind(function () {
                        if (!this.inAnimation) { return; }
                        var frameTime = new Date().getTime() - startTime,
                            progress = frameTime / duration;
                        if (frameTime >= duration) {
                            framefn(1);
                            if (callback) {
                                callback();
                            }
                            this.update();
                            this.stopAnimation();
                            this.update();
                        } else {
                            if (timefn) {
                                progress = timefn(progress);
                            }
                            framefn(progress);
                            this.update();
                            setTimeout(renderFrame, interval);
                        }
                    }, this);
                this.inAnimation = true;
                renderFrame();
            },

            /**
             * Stops the animation
             */
            stopAnimation: function () {
                this.inAnimation = false;
            },

            /**
             * Swing timing function for animations
             * @param p
             * @return {Number}
             */
            swing: function (p) {
                return -Math.cos(p * Math.PI) / 2  + 0.5;
            },

            getContainerX: function () {
                return this.container.width();
            },

            getContainerY: function () {
                return this.container.height();
            },

            setContainerY: function (y) {
                return this.container.height(y);
            },

            /**
             * Creates the expected html structure
             */
            setupMarkup: function () {
                this.container = $('<div class="pinch-zoom-container"></div>');
                this.el.before(this.container);
                this.container.append(this.el);

                this.container.css({
                    'overflow': 'hidden',
                    'position': 'relative'
                });

                this.el.css({
                    'webkitTransformOrigin': '0% 0%',
                    'mozTransformOrigin': '0% 0%',
                    'msTransformOrigin': '0% 0%',
                    'oTransformOrigin': '0% 0%',
                    'transformOrigin': '0% 0%',
                    'position': 'absolute'
                });
            },

            end: function () {
                this.hasInteraction = false;
                this.sanitize();
                this.update();
            },

            /**
             * Binds all required event listeners
             */
            bindEvents: function () {
                detectGestures(this.container.get(0), this);
                $(window).bind('resize', _.bind(this.update, this));
                $(this.el).find('img').bind('load', _.bind(this.update, this));
            },

            /**
             * Updates the css values according to the current zoom factor and offset
             */
            update: function () {

                if (this.updatePlaned) {
                    return;
                }
                this.updatePlaned = true;

                setTimeout(_.bind(function () {
                    this.updatePlaned = false;
                    this.updateAspectRatio();

                    var zoomFactor = this.getInitialZoomFactor() * this.zoomFactor,
                        offsetX = -this.offset.x / zoomFactor,
                        offsetY = -this.offset.y / zoomFactor,
                        transform3d =   'scale3d('     + zoomFactor + ', '  + zoomFactor + ',1) ' +
                            'translate3d(' + offsetX    + 'px,' + offsetY    + 'px,0px)',
                        transform2d =   'scale('       + zoomFactor + ', '  + zoomFactor + ') ' +
                            'translate('   + offsetX    + 'px,' + offsetY    + 'px)',
                        removeClone = _.bind(function () {
                            if (this.clone) {
                                this.clone.remove();
                                delete this.clone;
                            }
                        }, this);

                    // Scale 3d and translate3d are faster (at least on ios)
                    // but they also reduce the quality.
                    // PinchZoom uses the 3d transformations during interactions
                    // after interactions it falls back to 2d transformations
                    if (!this.options.use2d || this.hasInteraction || this.inAnimation) {
                        this.is3d = true;
                        removeClone();
                        this.el.css({
                            'webkitTransform':  transform3d,
                            'oTransform':       transform2d,
                            'msTransform':      transform2d,
                            'mozTransform':     transform2d,
                            'transform':        transform3d
                        });
                    } else {

                        // When changing from 3d to 2d transform webkit has some glitches.
                        // To avoid this, a copy of the 3d transformed element is displayed in the
                        // foreground while the element is converted from 3d to 2d transform
                        if (this.is3d) {
                            this.clone = this.el.clone();
                            this.clone.css('pointer-events', 'none');
                            this.clone.appendTo(this.container);
                            setTimeout(removeClone, 200);
                        }
                        this.el.css({
                            'webkitTransform':  transform2d,
                            'oTransform':       transform2d,
                            'msTransform':      transform2d,
                            'mozTransform':     transform2d,
                            'transform':        transform2d
                        });
                        this.is3d = false;
                    }
                }, this), 0);
            }
        };

        var detectGestures = function (el, target) {
            var interaction = null,
                fingers = 0,
                lastTouchStart = null,
                startTouches = null,

                setInteraction = function (newInteraction, event) {
                    if (interaction !== newInteraction) {

                        if (interaction && !newInteraction) {
                            switch (interaction) {
                                case "zoom":
                                    target.handleZoomEnd(event);
                                    break;
                                case 'drag':
                                    target.handleDragEnd(event);
                                    break;
                            }
                        }

                        switch (newInteraction) {
                            case 'zoom':
                                target.handleZoomStart(event);
                                break;
                            case 'drag':
                                target.handleDragStart(event);
                                break;
                        }
                    }
                    interaction = newInteraction;
                },

                updateInteraction = function (event) {
                    if (fingers === 2) {
                        setInteraction('zoom');
                    } else if (fingers === 1 && target.canDrag()) {
                        setInteraction('drag', event);
                    } else {
                        setInteraction(null, event);
                    }
                },

                targetTouches = function (touches) {
                    return _.map(touches, function (touch) {
                        return {
                            x: touch.pageX,
                            y: touch.pageY
                        };
                    });
                },

                getDistance = function (a, b) {
                    var x, y;
                    x = a.x - b.x;
                    y = a.y - b.y;
                    return Math.sqrt(x * x + y * y);
                },

                calculateScale = function (startTouches, endTouches) {
                    var startDistance = getDistance(startTouches[0], startTouches[1]),
                        endDistance = getDistance(endTouches[0], endTouches[1]);
                    return endDistance / startDistance;
                },

                cancelEvent = function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                },

                detectDoubleTap = function (event) {
                    var time = (new Date()).getTime();

                    if (fingers > 1) {
                        lastTouchStart = null;
                    }

                    if (time - lastTouchStart < 300) {
                        cancelEvent(event);

                        target.handleDoubleTap(event);
                        switch (interaction) {
                            case "zoom":
                                target.handleZoomEnd(event);
                                break;
                            case 'drag':
                                target.handleDragEnd(event);
                                break;
                        }
                    }

                    if (fingers === 1) {
                        lastTouchStart = time;
                    }
                },
                firstMove = true;

            el.addEventListener('touchstart', function (event) {
                firstMove = true;
                fingers = event.touches.length;
                detectDoubleTap(event);
            });

            el.addEventListener('touchmove', function (event) {

                if (firstMove) {
                    updateInteraction(event);
                    if (interaction) {
                        cancelEvent(event);
                    }
                    startTouches = targetTouches(event.touches);
                } else {
                    switch (interaction) {
                        case 'zoom':
                            target.handleZoom(event, calculateScale(startTouches, targetTouches(event.touches)));
                            break;
                        case 'drag':
                            target.handleDrag(event);
                            break;
                    }
                    if (interaction) {
                        cancelEvent(event);
                        target.update();
                    }
                }

                firstMove = false;
            });

            el.addEventListener('touchend', function (event) {
                fingers = event.touches.length;
                updateInteraction(event);
            });
        };

        return PinchZoom;
    };

    if (typeof define !== 'undefined' && define.amd) {
        define(['jquery', 'underscore'], function ($, _) {
            return definePinchZoom($, _);
        });
    } else {
        window.RTP = window.RTP || {};
        window.RTP.PinchZoom = definePinchZoom(jQuery, _);
    }
}).call(this);