(()=>{
    var de = Object.create;
    var D = Object.defineProperty;
    var pe = Object.getOwnPropertyDescriptor;
    var ye = Object.getOwnPropertyNames;
    var me = Object.getPrototypeOf
      , ge = Object.prototype.hasOwnProperty;
    var be = r=>D(r, "__esModule", {
        value: !0
    });
    var he = (r,i)=>()=>(i || r((i = {
        exports: {}
    }).exports, i),
    i.exports);
    var ve = (r,i,u)=>{
        if (i && typeof i == "object" || typeof i == "function")
            for (let o of ye(i))
                !ge.call(r, o) && o !== "default" && D(r, o, {
                    get: ()=>i[o],
                    enumerable: !(u = pe(i, o)) || u.enumerable
                });
        return r
    }
      , xe = r=>ve(be(D(r != null ? de(me(r)) : {}, "default", r && r.__esModule && "default"in r ? {
        get: ()=>r.default,
        enumerable: !0
    } : {
        value: r,
        enumerable: !0
    })), r);
    var z = he((C,M)=>{
        (function(i, u) {
            typeof C == "object" && typeof M == "object" ? M.exports = u() : typeof define == "function" && define.amd ? define([], u) : typeof C == "object" ? C.ClipboardJS = u() : i.ClipboardJS = u()
        }
        )(C, function() {
            return function() {
                var r = {
                    134: function(o, s, e) {
                        "use strict";
                        e.d(s, {
                            default: function() {
                                return ce
                            }
                        });
                        var c = e(279)
                          , l = e.n(c)
                          , f = e(370)
                          , y = e.n(f)
                          , p = e(817)
                          , x = e.n(p);
                        function g(a) {
                            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? g = function(t) {
                                return typeof t
                            }
                            : g = function(t) {
                                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            }
                            ,
                            g(a)
                        }
                        function h(a, n) {
                            if (!(a instanceof n))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function b(a, n) {
                            for (var t = 0; t < n.length; t++) {
                                var d = n[t];
                                d.enumerable = d.enumerable || !1,
                                d.configurable = !0,
                                "value"in d && (d.writable = !0),
                                Object.defineProperty(a, d.key, d)
                            }
                        }
                        function S(a, n, t) {
                            return n && b(a.prototype, n),
                            t && b(a, t),
                            a
                        }
                        var $ = function() {
                            function a(n) {
                                h(this, a),
                                this.resolveOptions(n),
                                this.initSelection()
                            }
                            return S(a, [{
                                key: "resolveOptions",
                                value: function() {
                                    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                    this.action = t.action,
                                    this.container = t.container,
                                    this.emitter = t.emitter,
                                    this.target = t.target,
                                    this.text = t.text,
                                    this.trigger = t.trigger,
                                    this.selectedText = ""
                                }
                            }, {
                                key: "initSelection",
                                value: function() {
                                    this.text ? this.selectFake() : this.target && this.selectTarget()
                                }
                            }, {
                                key: "createFakeElement",
                                value: function() {
                                    var t = document.documentElement.getAttribute("dir") === "rtl";
                                    this.fakeElem = document.createElement("textarea"),
                                    this.fakeElem.style.fontSize = "12pt",
                                    this.fakeElem.style.border = "0",
                                    this.fakeElem.style.padding = "0",
                                    this.fakeElem.style.margin = "0",
                                    this.fakeElem.style.position = "absolute",
                                    this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                                    var d = window.pageYOffset || document.documentElement.scrollTop;
                                    return this.fakeElem.style.top = "".concat(d, "px"),
                                    this.fakeElem.setAttribute("readonly", ""),
                                    this.fakeElem.value = this.text,
                                    this.fakeElem
                                }
                            }, {
                                key: "selectFake",
                                value: function() {
                                    var t = this
                                      , d = this.createFakeElement();
                                    this.fakeHandlerCallback = function() {
                                        return t.removeFake()
                                    }
                                    ,
                                    this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                                    this.container.appendChild(d),
                                    this.selectedText = x()(d),
                                    this.copyText(),
                                    this.removeFake()
                                }
                            }, {
                                key: "removeFake",
                                value: function() {
                                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                                    this.fakeHandler = null,
                                    this.fakeHandlerCallback = null),
                                    this.fakeElem && (this.container.removeChild(this.fakeElem),
                                    this.fakeElem = null)
                                }
                            }, {
                                key: "selectTarget",
                                value: function() {
                                    this.selectedText = x()(this.target),
                                    this.copyText()
                                }
                            }, {
                                key: "copyText",
                                value: function() {
                                    var t;
                                    try {
                                        t = document.execCommand(this.action)
                                    } catch (d) {
                                        t = !1
                                    }
                                    this.handleResult(t)
                                }
                            }, {
                                key: "handleResult",
                                value: function(t) {
                                    this.emitter.emit(t ? "success" : "error", {
                                        action: this.action,
                                        text: this.selectedText,
                                        trigger: this.trigger,
                                        clearSelection: this.clearSelection.bind(this)
                                    })
                                }
                            }, {
                                key: "clearSelection",
                                value: function() {
                                    this.trigger && this.trigger.focus(),
                                    document.activeElement.blur(),
                                    window.getSelection().removeAllRanges()
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.removeFake()
                                }
                            }, {
                                key: "action",
                                set: function() {
                                    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "copy";
                                    if (this._action = t,
                                    this._action !== "copy" && this._action !== "cut")
                                        throw new Error('Invalid "action" value, use either "copy" or "cut"')
                                },
                                get: function() {
                                    return this._action
                                }
                            }, {
                                key: "target",
                                set: function(t) {
                                    if (t !== void 0)
                                        if (t && g(t) === "object" && t.nodeType === 1) {
                                            if (this.action === "copy" && t.hasAttribute("disabled"))
                                                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                            if (this.action === "cut" && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                                                throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                                            this._target = t
                                        } else
                                            throw new Error('Invalid "target" value, use a valid Element')
                                },
                                get: function() {
                                    return this._target
                                }
                            }]),
                            a
                        }()
                          , N = $;
                        function E(a) {
                            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? E = function(t) {
                                return typeof t
                            }
                            : E = function(t) {
                                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            }
                            ,
                            E(a)
                        }
                        function L(a, n) {
                            if (!(a instanceof n))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function H(a, n) {
                            for (var t = 0; t < n.length; t++) {
                                var d = n[t];
                                d.enumerable = d.enumerable || !1,
                                d.configurable = !0,
                                "value"in d && (d.writable = !0),
                                Object.defineProperty(a, d.key, d)
                            }
                        }
                        function re(a, n, t) {
                            return n && H(a.prototype, n),
                            t && H(a, t),
                            a
                        }
                        function oe(a, n) {
                            if (typeof n != "function" && n !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            a.prototype = Object.create(n && n.prototype, {
                                constructor: {
                                    value: a,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            n && F(a, n)
                        }
                        function F(a, n) {
                            return F = Object.setPrototypeOf || function(d, m) {
                                return d.__proto__ = m,
                                d
                            }
                            ,
                            F(a, n)
                        }
                        function ie(a) {
                            var n = le();
                            return function() {
                                var d = _(a), m;
                                if (n) {
                                    var v = _(this).constructor;
                                    m = Reflect.construct(d, arguments, v)
                                } else
                                    m = d.apply(this, arguments);
                                return se(this, m)
                            }
                        }
                        function se(a, n) {
                            return n && (E(n) === "object" || typeof n == "function") ? n : ae(a)
                        }
                        function ae(a) {
                            if (a === void 0)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return a
                        }
                        function le() {
                            if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
                                return !1;
                            if (typeof Proxy == "function")
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                                !0
                            } catch (a) {
                                return !1
                            }
                        }
                        function _(a) {
                            return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t)
                            }
                            ,
                            _(a)
                        }
                        function I(a, n) {
                            var t = "data-clipboard-".concat(a);
                            if (!!n.hasAttribute(t))
                                return n.getAttribute(t)
                        }
                        var ue = function(a) {
                            oe(t, a);
                            var n = ie(t);
                            function t(d, m) {
                                var v;
                                return L(this, t),
                                v = n.call(this),
                                v.resolveOptions(m),
                                v.listenClick(d),
                                v
                            }
                            return re(t, [{
                                key: "resolveOptions",
                                value: function() {
                                    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                    this.action = typeof m.action == "function" ? m.action : this.defaultAction,
                                    this.target = typeof m.target == "function" ? m.target : this.defaultTarget,
                                    this.text = typeof m.text == "function" ? m.text : this.defaultText,
                                    this.container = E(m.container) === "object" ? m.container : document.body
                                }
                            }, {
                                key: "listenClick",
                                value: function(m) {
                                    var v = this;
                                    this.listener = y()(m, "click", function(A) {
                                        return v.onClick(A)
                                    })
                                }
                            }, {
                                key: "onClick",
                                value: function(m) {
                                    var v = m.delegateTarget || m.currentTarget;
                                    this.clipboardAction && (this.clipboardAction = null),
                                    this.clipboardAction = new N({
                                        action: this.action(v),
                                        target: this.target(v),
                                        text: this.text(v),
                                        container: this.container,
                                        trigger: v,
                                        emitter: this
                                    })
                                }
                            }, {
                                key: "defaultAction",
                                value: function(m) {
                                    return I("action", m)
                                }
                            }, {
                                key: "defaultTarget",
                                value: function(m) {
                                    var v = I("target", m);
                                    if (v)
                                        return document.querySelector(v)
                                }
                            }, {
                                key: "defaultText",
                                value: function(m) {
                                    return I("text", m)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.listener.destroy(),
                                    this.clipboardAction && (this.clipboardAction.destroy(),
                                    this.clipboardAction = null)
                                }
                            }], [{
                                key: "isSupported",
                                value: function() {
                                    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"]
                                      , v = typeof m == "string" ? [m] : m
                                      , A = !!document.queryCommandSupported;
                                    return v.forEach(function(fe) {
                                        A = A && !!document.queryCommandSupported(fe)
                                    }),
                                    A
                                }
                            }]),
                            t
                        }(l())
                          , ce = ue
                    },
                    828: function(o) {
                        var s = 9;
                        if (typeof Element != "undefined" && !Element.prototype.matches) {
                            var e = Element.prototype;
                            e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector
                        }
                        function c(l, f) {
                            for (; l && l.nodeType !== s; ) {
                                if (typeof l.matches == "function" && l.matches(f))
                                    return l;
                                l = l.parentNode
                            }
                        }
                        o.exports = c
                    },
                    438: function(o, s, e) {
                        var c = e(828);
                        function l(p, x, g, h, b) {
                            var S = y.apply(this, arguments);
                            return p.addEventListener(g, S, b),
                            {
                                destroy: function() {
                                    p.removeEventListener(g, S, b)
                                }
                            }
                        }
                        function f(p, x, g, h, b) {
                            return typeof p.addEventListener == "function" ? l.apply(null, arguments) : typeof g == "function" ? l.bind(null, document).apply(null, arguments) : (typeof p == "string" && (p = document.querySelectorAll(p)),
                            Array.prototype.map.call(p, function(S) {
                                return l(S, x, g, h, b)
                            }))
                        }
                        function y(p, x, g, h) {
                            return function(b) {
                                b.delegateTarget = c(b.target, x),
                                b.delegateTarget && h.call(p, b)
                            }
                        }
                        o.exports = f
                    },
                    879: function(o, s) {
                        s.node = function(e) {
                            return e !== void 0 && e instanceof HTMLElement && e.nodeType === 1
                        }
                        ,
                        s.nodeList = function(e) {
                            var c = Object.prototype.toString.call(e);
                            return e !== void 0 && (c === "[object NodeList]" || c === "[object HTMLCollection]") && "length"in e && (e.length === 0 || s.node(e[0]))
                        }
                        ,
                        s.string = function(e) {
                            return typeof e == "string" || e instanceof String
                        }
                        ,
                        s.fn = function(e) {
                            var c = Object.prototype.toString.call(e);
                            return c === "[object Function]"
                        }
                    },
                    370: function(o, s, e) {
                        var c = e(879)
                          , l = e(438);
                        function f(g, h, b) {
                            if (!g && !h && !b)
                                throw new Error("Missing required arguments");
                            if (!c.string(h))
                                throw new TypeError("Second argument must be a String");
                            if (!c.fn(b))
                                throw new TypeError("Third argument must be a Function");
                            if (c.node(g))
                                return y(g, h, b);
                            if (c.nodeList(g))
                                return p(g, h, b);
                            if (c.string(g))
                                return x(g, h, b);
                            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                        }
                        function y(g, h, b) {
                            return g.addEventListener(h, b),
                            {
                                destroy: function() {
                                    g.removeEventListener(h, b)
                                }
                            }
                        }
                        function p(g, h, b) {
                            return Array.prototype.forEach.call(g, function(S) {
                                S.addEventListener(h, b)
                            }),
                            {
                                destroy: function() {
                                    Array.prototype.forEach.call(g, function(S) {
                                        S.removeEventListener(h, b)
                                    })
                                }
                            }
                        }
                        function x(g, h, b) {
                            return l(document.body, g, h, b)
                        }
                        o.exports = f
                    },
                    817: function(o) {
                        function s(e) {
                            var c;
                            if (e.nodeName === "SELECT")
                                e.focus(),
                                c = e.value;
                            else if (e.nodeName === "INPUT" || e.nodeName === "TEXTAREA") {
                                var l = e.hasAttribute("readonly");
                                l || e.setAttribute("readonly", ""),
                                e.select(),
                                e.setSelectionRange(0, e.value.length),
                                l || e.removeAttribute("readonly"),
                                c = e.value
                            } else {
                                e.hasAttribute("contenteditable") && e.focus();
                                var f = window.getSelection()
                                  , y = document.createRange();
                                y.selectNodeContents(e),
                                f.removeAllRanges(),
                                f.addRange(y),
                                c = f.toString()
                            }
                            return c
                        }
                        o.exports = s
                    },
                    279: function(o) {
                        function s() {}
                        s.prototype = {
                            on: function(e, c, l) {
                                var f = this.e || (this.e = {});
                                return (f[e] || (f[e] = [])).push({
                                    fn: c,
                                    ctx: l
                                }),
                                this
                            },
                            once: function(e, c, l) {
                                var f = this;
                                function y() {
                                    f.off(e, y),
                                    c.apply(l, arguments)
                                }
                                return y._ = c,
                                this.on(e, y, l)
                            },
                            emit: function(e) {
                                var c = [].slice.call(arguments, 1)
                                  , l = ((this.e || (this.e = {}))[e] || []).slice()
                                  , f = 0
                                  , y = l.length;
                                for (f; f < y; f++)
                                    l[f].fn.apply(l[f].ctx, c);
                                return this
                            },
                            off: function(e, c) {
                                var l = this.e || (this.e = {})
                                  , f = l[e]
                                  , y = [];
                                if (f && c)
                                    for (var p = 0, x = f.length; p < x; p++)
                                        f[p].fn !== c && f[p].fn._ !== c && y.push(f[p]);
                                return y.length ? l[e] = y : delete l[e],
                                this
                            }
                        },
                        o.exports = s,
                        o.exports.TinyEmitter = s
                    }
                }
                  , i = {};
                function u(o) {
                    if (i[o])
                        return i[o].exports;
                    var s = i[o] = {
                        exports: {}
                    };
                    return r[o](s, s.exports, u),
                    s.exports
                }
                return function() {
                    u.n = function(o) {
                        var s = o && o.__esModule ? function() {
                            return o.default
                        }
                        : function() {
                            return o
                        }
                        ;
                        return u.d(s, {
                            a: s
                        }),
                        s
                    }
                }(),
                function() {
                    u.d = function(o, s) {
                        for (var e in s)
                            u.o(s, e) && !u.o(o, e) && Object.defineProperty(o, e, {
                                enumerable: !0,
                                get: s[e]
                            })
                    }
                }(),
                function() {
                    u.o = function(o, s) {
                        return Object.prototype.hasOwnProperty.call(o, s)
                    }
                }(),
                u(134)
            }().default
        })
    }
    );
    var k = class {
        static activateAlerts() {
            this.alertsActivated = !0
        }
        static alert(i, u) {
            if (this.alertsActivated && window.alert(i),
            u === "error")
                throw new Error(i)
        }
    }
    ;
    k.alertsActivated = !1;
    var V = r=>{
        let i = r.split("-")
          , u = parseInt(i[i.length - 1]);
        if (!isNaN(u))
            return u
    }
    ;
    var w = r=>{
        let i;
        for (let u of r.childNodes)
            if (u instanceof HTMLElement && u.childNodes.length ? i = w(u) : u.nodeType === Node.TEXT_NODE && (i = u),
            i)
                break;
        return i
    }
    ;
    var U = "fs-attributes"
      , j = {
        preventLoad: {
            key: `${U}-preventload`
        },
        debugMode: {
            key: `${U}-debug`
        }
    };
    var K = ()=>{
        window.fsAttributes || (window.fsAttributes = {
            cms: {}
        })
    }
      , J = r=>{
        let {preventLoad: i, debugMode: u} = j
          , o = typeof (r == null ? void 0 : r.getAttribute(i.key)) == "string";
        return typeof (r == null ? void 0 : r.getAttribute(u.key)) == "string" && k.activateAlerts(),
        {
            preventsLoad: o
        }
    }
      , q = r=>i=>`${r}${i ? `-${i}` : ""}`
      , B = r=>{
        let i = (o,s,e)=>{
            let c = r[o], {key: l, values: f} = c, y;
            if (!s)
                return `[${l}]`;
            let p = f == null ? void 0 : f[s];
            if (typeof p == "string" ? y = p : y = p(e && "instanceIndex"in e ? e.instanceIndex : void 0),
            !(e == null ? void 0 : e.operator))
                return `[${l}="${y}"]`;
            switch (e.operator) {
            case "prefixed":
                return `[${l}^="${y}"]`;
            case "suffixed":
                return `[${l}$="${y}"]`;
            case "contains":
                return `[${l}*="${y}"]`
            }
        }
        ;
        return [i, (o,s)=>{
            let e = i("element", o, s);
            return ((s == null ? void 0 : s.scope) || document).querySelector(e)
        }
        ]
    }
      , G = (r,i)=>{
        let u = r.getAttribute(i);
        return u ? V(u) : void 0
    }
    ;
    var T = "fs-copyclip"
      , R = {
        element: {
            key: `${T}-element`,
            values: {
                trigger: "click",
                target: q("copy-this"),
                sibling: "copy-sibling"
            }
        },
        text: {
            key: `${T}-text`
        },
        successMessage: {
            key: `${T}-message`
        },
        successDuration: {
            key: `${T}-duration`
        },
        successClass: {
            key: `${T}-active`
        },
        globalSelector: {
            key: `${T}-selector`
        }
    }
      , [O,$e] = B(R)
      , W = 1e3
      , X = `${T}_active`;
    var Y = xe(z())
      , Q = ({trigger: r, textToCopy: i, target: u, textNode: o, originalText: s, successMessage: e, successDuration: c, successClass: l})=>{
        let f = new Y.default(r,{
            text: ()=>i || (u == null ? void 0 : u.textContent) || r.textContent || ""
        })
          , y = !1;
        return f.on("success", p=>{
            p.clearSelection(),
            !y && (y = !0,
            r.classList.add(l),
            o && e && (o.textContent = e),
            setTimeout(()=>{
                r.classList.remove(l),
                o && (o.textContent = s || ""),
                y = !1
            }
            , c))
        }
        ),
        f.destroy
    }
    ;
    var {element: {key: Se}, text: {key: Ee}, globalSelector: {key: Te}, successMessage: {key: Z}, successDuration: {key: ee}, successClass: {key: te}} = R
      , P = r=>{
        var y;
        let i = null
          , u = null
          , o = null
          , s = null
          , e = null
          , c = null;
        r instanceof HTMLScriptElement || r instanceof SVGScriptElement ? (i = r.getAttribute(Te),
        s = r.getAttribute(Z),
        e = r.getAttribute(ee),
        c = r.getAttribute(te)) : r && (i = r.selector,
        u = r.targetSelector,
        o = r.text,
        s = r.successMessage,
        e = r.successDuration,
        c = r.successClass);
        let l = document.querySelectorAll(`${O("element", "trigger", {
            operator: "prefixed"
        })}${i ? `, ${i}` : ""}`)
          , f = [];
        for (let p of l) {
            if (!(p instanceof HTMLElement))
                continue;
            let x = p.getAttribute(Ee) || o
              , g = p.getAttribute(Z) || s
              , h = +(p.getAttribute(ee) || e || W)
              , b = p.getAttribute(te) || c || X
              , S = G(p, Se)
              , N = ((y = p.parentElement) == null ? void 0 : y.querySelector(O("element", "sibling", {
                operator: "prefixed"
            }))) || document.querySelector(u || O("element", "target", {
                instanceIndex: S
            }))
              , E = w(p)
              , L = E ? E.textContent : void 0;
            f.push(Q({
                trigger: p,
                target: N,
                textToCopy: x,
                originalText: L,
                textNode: E,
                successDuration: h,
                successMessage: g,
                successClass: b
            }))
        }
        return f
    }
    ;
    K();
    var {currentScript: ne} = document
      , {preventsLoad: Ae} = J(ne);
    Ae ? window.fsAttributes.copyclip = {
        init: P
    } : (window.Webflow || (window.Webflow = []),
    window.Webflow.push(()=>P(ne)));
}
)();
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
