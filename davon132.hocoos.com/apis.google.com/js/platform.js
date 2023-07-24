(function() {
    var m, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        r = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    r("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.la = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.la
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    r("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        fa = function(a) {
            return a.raw = a
        },
        ha = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var ka = {
                    a: !0
                },
                la = {};
            try {
                la.__proto__ = ka;
                ja = la.a;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ma = ia,
        pa = function(a, b, c) {
            if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        };
    r("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = pa(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    var qa = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    r("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return qa(this, function(b, c) {
                return [b, c]
            })
        }
    });
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return qa(this, function(b) {
                return b
            })
        }
    });
    r("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    r("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    r("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== pa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    window.gapi = window.gapi || {};
    window.gapi.ya = (new Date).getTime();
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var t = this || self,
        ra = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        sa = function(a) {
            var b = ra(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        u = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ta = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ua = 0,
        va = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        wa = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        xa = function(a, b, c) {
            xa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? va : wa;
            return xa.apply(null, arguments)
        },
        ya = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.xa = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.D = function(d, e, f) {
                for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
                return b.prototype[e].apply(d,
                    g)
            }
        },
        za = function(a) {
            return a
        },
        Aa = function(a) {
            var b = null,
                c = t.trustedTypes;
            if (!c || !c.createPolicy) return b;
            try {
                b = c.createPolicy(a, {
                    createHTML: za,
                    createScript: za,
                    createScriptURL: za
                })
            } catch (d) {
                t.console && t.console.error(d.message)
            }
            return b
        };

    function Ba(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ba);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    ya(Ba, Error);
    Ba.prototype.name = "CustomError";
    var Ca;

    function Da(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ba.call(this, c + a[d])
    }
    ya(Da, Ba);
    Da.prototype.name = "AssertionError";

    function Ea(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new Da("" + e, f || []);
    }
    var Fa = function(a, b, c) {
            a || Ea("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ga = function(a, b) {
            throw new Da("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Ha = function(a, b, c) {
            "string" !== typeof a && Ea("Expected string but got %s: %s.", [ra(a), a], b, Array.prototype.slice.call(arguments, 2))
        };
    var Ia = Array.prototype.forEach ? function(a, b) {
        Fa(null != a.length);
        Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };

    function Ja(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Ka(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    var Ma;
    var v = function(a, b) {
        this.U = a === Na && b || "";
        this.ma = Oa
    };
    v.prototype.A = !0;
    v.prototype.v = function() {
        return this.U
    };
    v.prototype.toString = function() {
        return "Const{" + this.U + "}"
    };
    var Pa = function(a) {
            if (a instanceof v && a.constructor === v && a.ma === Oa) return a.U;
            Ga("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        },
        Oa = {},
        Na = {};
    var x = function(a, b) {
        if (b !== Qa) throw Error("SafeUrl is not meant to be built directly");
        this.S = a
    };
    x.prototype.toString = function() {
        return this.S.toString()
    };
    x.prototype.A = !0;
    x.prototype.v = function() {
        return this.S.toString()
    };
    var Ra = function(a) {
            if (a instanceof x && a.constructor === x) return a.S;
            Ga("expected object of type SafeUrl, got '" + a + "' of type " + ra(a));
            return "type_error:SafeUrl"
        },
        Sa;
    try {
        new URL("s://g"), Sa = !0
    } catch (a) {
        Sa = !1
    }
    var Ta = Sa,
        Ua = function(a) {
            if (a instanceof x) return a;
            a = "object" == typeof a && a.A ? a.v() : String(a);
            a: {
                var b = a;
                if (Ta) {
                    try {
                        var c = new URL(b)
                    } catch (d) {
                        b = "https:";
                        break a
                    }
                    b = c.protocol
                } else b: {
                    c = document.createElement("a");
                    try {
                        c.href = b
                    } catch (d) {
                        b = void 0;
                        break b
                    }
                    b = c.protocol;b = ":" === b || "" === b ? "https:" : b
                }
            }
            Fa("javascript:" !== b, "%s is a javascript: URL", a) || (a = "about:invalid#zClosurez");
            return new x(a, Qa)
        },
        Qa = {};
    new x("about:invalid#zClosurez", Qa);
    new x("about:blank", Qa);
    var Va = {},
        Wa = function() {
            if (Va !== Va) throw Error("SafeStyle is not meant to be built directly");
            this.ga = "";
            this.A = !0
        };
    Wa.prototype.v = function() {
        return this.ga
    };
    Wa.prototype.toString = function() {
        return this.ga.toString()
    };
    new Wa;
    var Xa = {},
        Ya = function() {
            if (Xa !== Xa) throw Error("SafeStyleSheet is not meant to be built directly");
            this.fa = "";
            this.A = !0
        };
    Ya.prototype.toString = function() {
        return this.fa.toString()
    };
    Ya.prototype.v = function() {
        return this.fa
    };
    new Ya;
    var Za = {},
        y = function(a, b) {
            if (b !== Za) throw Error("SafeHtml is not meant to be built directly");
            this.R = a;
            this.A = !0
        };
    y.prototype.v = function() {
        return this.R.toString()
    };
    y.prototype.toString = function() {
        return this.R.toString()
    };
    new y(t.trustedTypes && t.trustedTypes.emptyHTML || "", Za);
    var $a = function(a, b) {
        this.name = a;
        this.value = b
    };
    $a.prototype.toString = function() {
        return this.name
    };
    var ab = new $a("OFF", Infinity),
        bb = new $a("WARNING", 900),
        cb = new $a("CONFIG", 700),
        db = function() {
            this.F = 0;
            this.clear()
        },
        eb;
    db.prototype.clear = function() {
        this.X = Array(this.F);
        this.Z = -1;
        this.ba = !1
    };
    var fb = function(a, b, c) {
        this.reset(a || ab, b, c, void 0, void 0)
    };
    fb.prototype.reset = function() {};
    var gb = function(a, b) {
            this.level = null;
            this.ra = [];
            this.parent = (void 0 === b ? null : b) || null;
            this.children = [];
            this.sa = {
                N: function() {
                    return a
                }
            }
        },
        hb = function(a) {
            if (a.level) return a.level;
            if (a.parent) return hb(a.parent);
            Ga("Root logger has no level set.");
            return ab
        },
        ib = function(a, b) {
            for (; a;) a.ra.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        jb = function() {
            this.entries = {};
            var a = new gb("");
            a.level = cb;
            this.entries[""] = a
        },
        kb, lb = function(a, b) {
            var c = a.entries[b];
            if (c) return c;
            c = lb(a, b.slice(0, Math.max(b.lastIndexOf("."),
                0)));
            var d = new gb(b, c);
            a.entries[b] = d;
            c.children.push(d);
            return d
        },
        mb = function() {
            kb || (kb = new jb);
            return kb
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var nb = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
    var ob = {};
    var z = function(a, b) {
            if (b !== ob) throw Error("Bad secret");
            this.ha = a
        },
        B = function() {};
    z.prototype = ha(B.prototype);
    z.prototype.constructor = z;
    if (ma) ma(z, B);
    else
        for (var qb in B)
            if ("prototype" != qb)
                if (Object.defineProperties) {
                    var rb = Object.getOwnPropertyDescriptor(B, qb);
                    rb && Object.defineProperty(z, qb, rb)
                } else z[qb] = B[qb];
    z.xa = B.prototype;
    z.prototype.toString = function() {
        return this.ha
    };
    var sb = fa([""]),
        tb = -1 === function() {
            return ""
        }.toString().indexOf("`");

    function ub() {
        var a = vb;
        if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !tb && a === a.raw || !(tb && (!Object.isFrozen(sb) || !Object.isFrozen(sb.raw)) || Object.isFrozen(a) && Object.isFrozen(a.raw)) || 1 !== a.length) throw new TypeError("\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################");
        var b = a[0].toLowerCase();
        if (0 === b.indexOf("on") || 0 === "on".indexOf(b)) throw Error("Prefix '" + a[0] + "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers.");
        nb.forEach(function(c) {
            if (0 === c.indexOf(b)) throw Error("Prefix '" + a[0] + "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" + (c + "'. Please use native or safe DOM APIs to set the attribute."));
        });
        return new z(b, ob)
    };
    var wb = [],
        xb = function(a) {
            var b;
            if (b = lb(mb(), "safevalues").sa) {
                var c = "A URL with content '" + a + "' was sanitized away.",
                    d = bb;
                if (a = b)
                    if (a = b && d) {
                        a = d.value;
                        var e = b ? hb(lb(mb(), b.N())) : ab;
                        a = a >= e.value
                    }
                if (a) {
                    d = d || ab;
                    a = lb(mb(), b.N());
                    "function" === typeof c && (c = c());
                    eb || (eb = new db);
                    e = eb;
                    b = b.N();
                    if (0 < e.F) {
                        var f = (e.Z + 1) % e.F;
                        e.Z = f;
                        e.ba ? (e = e.X[f], e.reset(d, c, b), b = e) : (e.ba = f == e.F - 1, b = e.X[f] = new fb(d, c, b))
                    } else b = new fb(d, c, b);
                    ib(a, b)
                }
            }
        }; - 1 === wb.indexOf(xb) && wb.push(xb);
    var yb = function(a, b) {
        if (!u(a) || !u(a) || !u(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI || a.tagName.toUpperCase() !== b.toString()) {
            b = b.toString() + "; got: ";
            if (u(a)) try {
                var c = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
            } catch (d) {
                c = "<object could not be stringified>"
            } else c = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
            Ga("Argument is not an HTML Element with tag name " + (b + c))
        }
        return a
    };
    var Ab = function(a, b) {
            Ka(b, function(c, d) {
                c && "object" == typeof c && c.A && (c = c.v());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : zb.hasOwnProperty(d) ? a.setAttribute(zb[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        zb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        Bb = function(a, b, c, d) {
            function e(k) {
                k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!sa(f) || u(f) && 0 < f.nodeType) e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (u(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    Ia(g ? Ja(f) : f, e)
                }
            }
        },
        Cb = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        Db = function(a) {
            Fa(a,
                "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Eb = function(a) {
            this.G = a || t.document || document
        };
    m = Eb.prototype;
    m.getElementsByTagName = function(a, b) {
        return (b || this.G).getElementsByTagName(String(a))
    };
    m.qa = function(a, b, c) {
        var d = this.G,
            e = arguments,
            f = e[1],
            g = Cb(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Ab(g, f));
        2 < e.length && Bb(d, g, e, 2);
        return g
    };
    m.createElement = function(a) {
        return Cb(this.G, a)
    };
    m.createTextNode = function(a) {
        return this.G.createTextNode(String(a))
    };
    m.appendChild = function(a, b) {
        Fa(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    m.append = function(a, b) {
        Bb(Db(a), a, arguments, 1)
    };
    m.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    m.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    m.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var C = window,
        D = document,
        Fb = C.location,
        Gb = function() {},
        Hb = /\[native code\]/,
        E = function(a, b, c) {
            return a[b] = a[b] || c
        },
        Ib = function(a) {
            for (var b = 0; b < this.length; b++)
                if (this[b] === a) return b;
            return -1
        },
        Jb = function(a) {
            a = a.sort();
            for (var b = [], c = void 0, d = 0; d < a.length; d++) {
                var e = a[d];
                e != c && b.push(e);
                c = e
            }
            return b
        },
        Kb = /&/g,
        Lb = /</g,
        Mb = />/g,
        Nb = /"/g,
        Ob = /'/g,
        Pb = function(a) {
            return String(a).replace(Kb, "&amp;").replace(Lb, "&lt;").replace(Mb, "&gt;").replace(Nb, "&quot;").replace(Ob, "&#39;")
        },
        F = function() {
            var a;
            if ((a = Object.create) &&
                Hb.test(a)) a = a(null);
            else {
                a = {};
                for (var b in a) a[b] = void 0
            }
            return a
        },
        G = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        Qb = function(a) {
            if (Hb.test(Object.keys)) return Object.keys(a);
            var b = [],
                c;
            for (c in a) G(a, c) && b.push(c);
            return b
        },
        I = function(a, b) {
            a = a || {};
            for (var c in a) G(a, c) && (b[c] = a[c])
        },
        Rb = function(a) {
            return function() {
                C.setTimeout(a, 0)
            }
        },
        J = function(a, b) {
            if (!a) throw Error(b || "");
        },
        N = E(C, "gapi", {});

    function Sb(a) {
        var b = [ub()];
        if (0 === b.length) throw Error("No prefixes are provided");
        if (b.map(function(c) {
                if (c instanceof z) c = c.ha;
                else throw Error("Unexpected type when unwrapping SafeAttributePrefix");
                return c
            }).every(function(c) {
                return 0 !== "data-gapiscan".indexOf(c)
            })) throw Error('Attribute "data-gapiscan" does not match any of the allowed prefixes.');
        a.setAttribute("data-gapiscan", "true")
    };
    var O = function(a, b, c) {
            var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
            b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
            if (a = a && (d.exec(a) || b.exec(a))) try {
                c = decodeURIComponent(a[2])
            } catch (e) {}
            return c
        },
        Tb = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source),
        Ub = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g,
        Vb = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
            "g"),
        Wb = /%([a-f]|[0-9a-fA-F][a-f])/g,
        Xb = /^(https?|ftp|file|chrome-extension):$/i,
        Yb = function(a) {
            a = String(a);
            a = a.replace(Ub, function(e) {
                try {
                    return encodeURIComponent(e)
                } catch (f) {
                    return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
                }
            }).replace(Vb, function(e) {
                return e.replace(/%/g, "%25")
            }).replace(Wb, function(e) {
                return e.toUpperCase()
            });
            a = a.match(Tb) || [];
            var b = F(),
                c = function(e) {
                    return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g,
                        "%7D")
                },
                d = !!(a[1] || "").match(Xb);
            b.D = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
            d = function(e) {
                return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
            };
            b.query = a[5] ? [d(a[5])] : [];
            b.j = a[7] ? [d(a[7])] : [];
            return b
        },
        Zb = function(a) {
            return a.D + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.j.length ? "#" + a.j.join("&") : "")
        },
        $b = function(a, b) {
            var c = [];
            if (a)
                for (var d in a)
                    if (G(a, d) && null != a[d]) {
                        var e = b ? b(a[d]) : a[d];
                        c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                    }
            return c
        },
        ac = function(a, b, c, d) {
            a = Yb(a);
            a.query.push.apply(a.query, $b(b, d));
            a.j.push.apply(a.j, $b(c, d));
            return Zb(a)
        },
        bc = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i"),
        cc = function(a, b) {
            var c = Yb(b);
            b = c.D;
            c.query.length && (b += "?" + c.query.join(""));
            c.j.length && (b += "#" + c.j.join(""));
            var d = "";
            2E3 < b.length && (d = b, b = b.substr(0, 2E3), b = b.replace(bc, ""), d = d.substr(b.length));
            var e = a.createElement("div");
            a = a.createElement("a");
            c = Yb(b);
            b = c.D;
            c.query.length && (b += "?" + c.query.join(""));
            c.j.length && (b += "#" + c.j.join(""));
            b = null === b ? "null" : void 0 === b ? "undefined" : b;
            if ("string" !== typeof b) throw Error("Expected a string");
            b = new x(b, Qa);
            yb(a, "A");
            b = b instanceof x ? b : Ua(b);
            a.href = Ra(b);
            e.appendChild(a);
            a = e.innerHTML;
            b = new v(Na, "Assignment to self.");
            Ha(Pa(b), "must provide justification");
            Fa(!/^[\s\xa0]*$/.test(Pa(b)), "must provide non-empty justification");
            void 0 === Ma && (Ma = Aa("gapi#html"));
            a = (b = Ma) ? b.createHTML(a) : a;
            a = new y(a, Za);
            if (1 ===
                e.nodeType && (b = e.tagName, "SCRIPT" === b || "STYLE" === b)) throw Error("SCRIPT" === b ? "Use safeScriptEl.setTextContent with a SafeScript." : "Use safeStyleEl.setTextContent with a SafeStyleSheet.");
            a instanceof y && a.constructor === y ? a = a.R : (Ga("expected object of type SafeHtml, got '" + a + "' of type " + ra(a)), a = "type_error:SafeHtml");
            e.innerHTML = a;
            b = String(e.firstChild.href);
            e.parentNode && e.parentNode.removeChild(e);
            c = Yb(b + d);
            d = c.D;
            c.query.length && (d += "?" + c.query.join(""));
            c.j.length && (d += "#" + c.j.join(""));
            return d
        },
        dc = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    var ec;
    var fc = function(a, b, c, d) {
            if (C[c + "EventListener"]) C[c + "EventListener"](a, b, !1);
            else if (C[d + "tachEvent"]) C[d + "tachEvent"]("on" + a, b)
        },
        gc = function() {
            var a = D.readyState;
            return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
        },
        jc = function(a) {
            var b = hc;
            if (!gc()) try {
                b()
            } catch (c) {}
            ic(a)
        },
        ic = function(a) {
            if (gc()) a();
            else {
                var b = !1,
                    c = function() {
                        if (!b) return b = !0, a.apply(this, arguments)
                    };
                C.addEventListener ? (C.addEventListener("load", c, !1), C.addEventListener("DOMContentLoaded", c, !1)) : C.attachEvent &&
                    (C.attachEvent("onreadystatechange", function() {
                        gc() && c.apply(this, arguments)
                    }), C.attachEvent("onload", c))
            }
        },
        kc = function(a) {
            for (; a.firstChild;) a.removeChild(a.firstChild)
        },
        lc = {
            button: !0,
            div: !0,
            span: !0
        };
    var P = {};
    P = E(C, "___jsl", F());
    E(P, "I", 0);
    E(P, "hel", 10);
    var mc = function(a) {
            return P.dpo ? P.h : O(a, "jsh", P.h)
        },
        nc = function(a) {
            var b = E(P, "sws", []);
            b.push.apply(b, a)
        },
        oc = function(a) {
            return E(P, "watt", F())[a]
        },
        pc = function(a) {
            var b = E(P, "PQ", []);
            P.PQ = [];
            var c = b.length;
            if (0 === c) a();
            else
                for (var d = 0, e = function() {
                        ++d === c && a()
                    }, f = 0; f < c; f++) b[f](e)
        },
        qc = function(a) {
            return E(E(P, "H", F()), a, F())
        };
    var rc = E(P, "perf", F()),
        sc = E(rc, "g", F()),
        tc = E(rc, "i", F());
    E(rc, "r", []);
    F();
    F();
    var uc = function(a, b, c) {
            var d = rc.r;
            "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
        },
        Q = function(a, b, c) {
            sc[a] = !b && sc[a] || c || (new Date).getTime();
            uc(a)
        },
        wc = function(a, b, c) {
            b && 0 < b.length && (b = vc(b), c && 0 < c.length && (b += "___" + vc(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = E(tc, "_p", F()), E(b, c, F())[a] = (new Date).getTime(), uc(a, "_p", c))
        },
        vc = function(a) {
            return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_")
        };
    var xc = F(),
        R = [],
        T = function(a) {
            throw Error("Bad hint: " + a);
        };
    R.push(["jsl", function(a) {
        for (var b in a)
            if (G(a, b)) {
                var c = a[b];
                "object" == typeof c ? P[b] = E(P, b, []).concat(c) : E(P, b, c)
            }
        if (b = a.u) a = E(P, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var yc = /^(\/[a-zA-Z0-9_\-]+)+$/,
        zc = [/\/amp\//, /\/amp$/, /^\/amp$/],
        Ac = /^[a-zA-Z0-9\-_\.,!]+$/,
        Bc = /^gapi\.loaded_[0-9]+$/,
        Cc = /^[a-zA-Z0-9,._-]+$/,
        Gc = function(a, b, c, d, e) {
            var f = a.split(";"),
                g = f.shift(),
                k = xc[g],
                h = null;
            k ? h = k(f, b, c, d) : T("no hint processor for: " + g);
            h || T("failed to generate load url");
            b = h;
            c = b.match(Dc);
            (d = b.match(Ec)) && 1 === d.length && Fc.test(b) && c && 1 === c.length || T("failed sanity: " + a);
            try {
                a = "?";
                if (e && 0 < e.length) {
                    c = b = 0;
                    for (d = {}; c < e.length;) {
                        var l = e[c++],
                            p = u(l) ? "o" + (Object.prototype.hasOwnProperty.call(l,
                                ta) && l[ta] || (l[ta] = ++ua)) : (typeof l).charAt(0) + l;
                        Object.prototype.hasOwnProperty.call(d, p) || (d[p] = !0, e[b++] = l)
                    }
                    e.length = b;
                    h = h + "?le=" + e.join(",");
                    a = "&"
                }
                if (P.rol) {
                    var q = P.ol;
                    q && q.length && (h = "" + h + a + "ol=" + q.length)
                }
            } catch (n) {}
            return h
        },
        Jc = function(a, b, c, d) {
            a = Hc(a);
            Bc.test(c) || T("invalid_callback");
            b = Ic(b);
            d = d && d.length ? Ic(d) : null;
            var e = function(f) {
                return encodeURIComponent(f).replace(/%2C/g, ",")
            };
            return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=",
                e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.W ? "/am=" + e(a.W) : "", a.ia ? "/rs=" + e(a.ia) : "", a.ka ? "/t=" + e(a.ka) : "", "/cb=", e(c)
            ].join("")
        },
        Hc = function(a) {
            "/" !== a.charAt(0) && T("relative path");
            for (var b = a.substring(1).split("/"), c = []; b.length;) {
                a = b.shift();
                if (!a.length || 0 == a.indexOf(".")) T("empty/relative directory");
                else if (0 < a.indexOf("=")) {
                    b.unshift(a);
                    break
                }
                c.push(a)
            }
            a = {};
            for (var d = 0, e = b.length; d < e; ++d) {
                var f = b[d].split("="),
                    g = decodeURIComponent(f[0]),
                    k = decodeURIComponent(f[1]);
                2 == f.length && g && k && (a[g] =
                    a[g] || k)
            }
            b = "/" + c.join("/");
            yc.test(b) || T("invalid_prefix");
            c = 0;
            for (d = zc.length; c < d; ++c) zc[c].test(b) && T("invalid_prefix");
            c = Kc(a, "k", !0);
            d = Kc(a, "am");
            e = Kc(a, "rs");
            a = Kc(a, "t");
            return {
                pathPrefix: b,
                version: c,
                W: d,
                ia: e,
                ka: a
            }
        },
        Ic = function(a) {
            for (var b = [], c = 0, d = a.length; c < d; ++c) {
                var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
                Cc.test(e) && b.push(e)
            }
            return b.join(",")
        },
        Kc = function(a, b, c) {
            a = a[b];
            !a && c && T("missing: " + b);
            if (a) {
                if (Ac.test(a)) return a;
                T("invalid: " + b)
            }
            return null
        },
        Fc = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        Ec = /\/cb=/g,
        Dc = /\/\//g;
    xc.m = function(a, b, c, d) {
        (a = a[0]) || T("missing_hint");
        return "https://apis.google.com" + Jc(a, b, c, d)
    };
    var Lc = decodeURI("%73cript"),
        Mc = /^[-+_0-9\/A-Za-z]+={0,2}$/,
        Nc = function(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && 0 > Ib.call(b, e) && c.push(e)
            }
            return c
        },
        Oc = function() {
            var a = P.nonce;
            return void 0 !== a ? a && a === String(a) && a.match(Mc) ? a : P.nonce = null : D.querySelector ? (a = D.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(Mc) ? P.nonce = a : P.nonce = null) : null : null
        },
        Rc = function(a) {
            if ("loading" != D.readyState) Pc(a);
            else {
                var b = Oc(),
                    c = "";
                null !== b && (c = ' nonce="' +
                    b + '"');
                a = "<" + Lc + ' src="' + encodeURI(a) + '"' + c + "></" + Lc + ">";
                D.write(Qc ? Qc.createHTML(a) : a)
            }
        },
        Pc = function(a) {
            var b = D.createElement(Lc);
            b.setAttribute("src", Qc ? Qc.createScriptURL(a) : a);
            a = Oc();
            null !== a && b.setAttribute("nonce", a);
            b.async = "true";
            (a = D.getElementsByTagName(Lc)[0]) ? a.parentNode.insertBefore(b, a): (D.head || D.body || D.documentElement).appendChild(b)
        },
        Tc = function(a, b, c) {
            Sc(function() {
                var d = b === mc(Fb.href) ? E(N, "_", F()) : F();
                d = E(qc(b), "_", d);
                a(d)
            }, c)
        },
        Vc = function(a, b) {
            var c = b || {};
            "function" == typeof b &&
                (c = {}, c.callback = b);
            var d = (b = c) && b._c;
            if (d)
                for (var e = 0; e < R.length; e++) {
                    var f = R[e][0],
                        g = R[e][1];
                    g && G(d, f) && g(d[f], a, b)
                }
            b = [];
            a ? b = a.split(":") : c.features && (b = c.features);
            if (!(a = c.h) && (a = mc(Fb.href), !a)) throw Error("Bad hint: !hint");
            Uc(b || [], c, a)
        },
        Uc = function(a, b, c) {
            var d = !!P.glrp;
            a = Jb(a) || [];
            var e = b.callback,
                f = b.config,
                g = b.timeout,
                k = b.ontimeout,
                h = b.onerror,
                l = void 0;
            "function" == typeof h && (l = h);
            var p = null,
                q = !1;
            if (g && !k || !g && k) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
            h = E(qc(c), "r", []).sort();
            var n = E(qc(c), "L", []).sort(),
                K = P.le || [],
                A = [].concat(h),
                w = function(S, na) {
                    if (q) return 0;
                    C.clearTimeout(p);
                    n.push.apply(n, H);
                    var oa = ((N || {}).config || {}).update;
                    oa ? oa(f) : f && E(P, "cu", []).push(f);
                    if (na) {
                        wc("me0", S, A);
                        try {
                            Tc(na, c, l)
                        } finally {
                            wc("me1", S, A)
                        }
                    }
                    return 1
                };
            0 < g && (p = C.setTimeout(function() {
                q = !0;
                k()
            }, g));
            var H = Nc(a, n);
            if (H.length) {
                H = Nc(a, h);
                var L = E(P, "CP", []),
                    M = L.length;
                L[M] = function(S) {
                    if (!S) return 0;
                    wc("ml1", H, A);
                    var na = function(La) {
                            d || (L[M] = null);
                            w(H, S) && (d && (L[M] = null),
                                pc(function() {
                                    e && e();
                                    La()
                                }))
                        },
                        oa = function() {
                            var La = L[M + 1];
                            La && La()
                        };
                    0 < M && L[M - 1] ? L[M] = function() {
                        na(oa)
                    } : na(oa)
                };
                if (H.length) {
                    var pb = "loaded_" + P.I++;
                    N[pb] = function(S) {
                        L[M](S);
                        N[pb] = null
                    };
                    a = Gc(c, H, "gapi." + pb, h, K);
                    h.push.apply(h, H);
                    wc("ml0", H, A);
                    b.sync || C.___gapisync ? Rc(a) : Pc(a)
                } else L[M](Gb)
            } else w(H) && e && e()
        },
        Qc = Aa("gapi#gapi");
    var Sc = function(a, b) {
        if (P.hee && 0 < P.hel) try {
            return a()
        } catch (c) {
            b && b(c), P.hel--, Vc("debug_error", function() {
                try {
                    window.___jsl.hefn(c)
                } catch (d) {
                    throw c;
                }
            })
        } else try {
            return a()
        } catch (c) {
            throw b && b(c), c;
        }
    };
    var Wc = N.load;
    Wc && E(P, "ol", []).push(Wc);
    N.load = function(a, b) {
        return Sc(function() {
            return Vc(a, b)
        })
    };
    var Xc = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b[a] = b[a] || [];
            return b[a]
        },
        Yc = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b.cfg = !a && b.cfg || {};
            return b.cfg
        },
        Zc = function(a) {
            return "object" === typeof a && /\[native code\]/.test(a.push)
        },
        $c = function(a, b, c) {
            if (b && "object" === typeof b)
                for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !Zc(a[d]) && !Zc(b[d]) ? $c(a[d], b[d]) : b[d] && "object" ===
                    typeof b[d] ? (a[d] = Zc(b[d]) ? [] : {}, $c(a[d], b[d])) : a[d] = b[d])
        },
        ad = function(a) {
            if (a && !/^\s+$/.test(a)) {
                for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
                try {
                    var b = window.JSON.parse(a)
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return (" + a + "\n)"))()
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return ({" + a + "\n})"))()
                } catch (c) {}
                return "object" === typeof b ? b : {}
            }
        },
        bd = function(a, b) {
            var c = {
                ___goc: void 0
            };
            a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length -
                1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
            $c(c, b);
            a.push(c)
        },
        cd = function(a) {
            Yc(!0);
            var b = window.___gcfg,
                c = Xc("cu"),
                d = window.___gu;
            b && b !== d && (bd(c, b), window.___gu = b);
            b = Xc("cu");
            var e = document.scripts || document.getElementsByTagName("script") || [];
            d = [];
            var f = [];
            f.push.apply(f, Xc("us"));
            for (var g = 0; g < e.length; ++g)
                for (var k = e[g], h = 0; h < f.length; ++h) k.src && 0 == k.src.indexOf(f[h]) && d.push(k);
            0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
            for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") ||
                (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (g = f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || "") : f = void 0, (f = ad(f)) && b.push(f));
            a && bd(c, a);
            d = Xc("cd");
            a = 0;
            for (b = d.length; a < b; ++a) $c(Yc(), d[a], !0);
            d = Xc("ci");
            a = 0;
            for (b = d.length; a < b; ++a) $c(Yc(), d[a], !0);
            a = 0;
            for (b = c.length; a < b; ++a) $c(Yc(), c[a], !0)
        },
        U = function(a) {
            var b = Yc();
            if (!a) return b;
            a = a.split("/");
            for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
            return c === a.length && void 0 !== b ? b : void 0
        },
        dd = function(a, b) {
            var c;
            if ("string" ===
                typeof a) {
                var d = c = {};
                a = a.split("/");
                for (var e = 0, f = a.length; e < f - 1; ++e) {
                    var g = {};
                    d = d[a[e]] = g
                }
                d[a[e]] = b
            } else c = a;
            cd(c)
        };
    var ed = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), E(P, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    var fd = {
            callback: 1,
            clientid: 1,
            cookiepolicy: 1,
            openidrealm: -1,
            includegrantedscopes: -1,
            requestvisibleactions: 1,
            scope: 1
        },
        gd = !1,
        hd = F(),
        id = function() {
            if (!gd) {
                for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                    var c = a[b].name.toLowerCase();
                    if (0 == c.lastIndexOf("google-signin-", 0)) {
                        c = c.substring(14);
                        var d = a[b].content;
                        fd[c] && d && (hd[c] = d)
                    }
                }
                if (window.self !== window.top) {
                    a = document.location.toString();
                    for (var e in fd) 0 < fd[e] && (b = O(a, e, "")) && (hd[e] = b)
                }
                gd = !0
            }
            e = F();
            I(hd, e);
            return e
        },
        jd = function(a) {
            return !!(a.clientid &&
                a.scope && a.callback)
        };
    var kd = function() {
        this.i = window.console
    };
    kd.prototype.log = function(a) {
        this.i && this.i.log && this.i.log(a)
    };
    kd.prototype.error = function(a) {
        this.i && (this.i.error ? this.i.error(a) : this.i.log && this.i.log(a))
    };
    kd.prototype.warn = function(a) {
        this.i && (this.i.warn ? this.i.warn(a) : this.i.log && this.i.log(a))
    };
    kd.prototype.debug = function() {};
    var ld = new kd;
    var md = function() {
            return !!P.oa
        },
        nd = function() {};
    var V = E(P, "rw", F()),
        od = function(a) {
            for (var b in V) a(V[b])
        },
        pd = function(a, b) {
            (a = V[a]) && a.state < b && (a.state = b)
        };
    var W = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = b.cfg || {};
        b = b.cfg;
        if (!a) return b;
        a = a.split("/");
        for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
        return c === a.length && void 0 !== b ? b : void 0
    };
    var qd = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//,
        rd = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//,
        sd = function() {
            var a = W("googleapis.config/sessionIndex");
            "string" === typeof a && 254 < a.length && (a = null);
            null == a && (a = window.__X_GOOG_AUTHUSER);
            "string" === typeof a && 254 < a.length && (a = null);
            if (null == a) {
                var b = window.google;
                b && (a = b.authuser)
            }
            "string" === typeof a && 254 < a.length && (a = null);
            null == a && (b = window.location.href, a = O(b, "authuser") ||
                null, null == a && (a = (a = b.match(qd)) ? a[1] : null));
            if (null == a) return null;
            a = String(a);
            254 < a.length && (a = null);
            return a
        },
        td = function() {
            var a = W("googleapis.config/sessionDelegate");
            "string" === typeof a && 21 < a.length && (a = null);
            null == a && (a = (a = window.location.href.match(rd)) ? a[1] : null);
            if (null == a) return null;
            a = String(a);
            21 < a.length && (a = null);
            return a
        };
    var ud, vd, wd = void 0,
        X = function(a) {
            try {
                return t.JSON.parse.call(t.JSON, a)
            } catch (b) {
                return !1
            }
        },
        Y = function(a) {
            return Object.prototype.toString.call(a)
        },
        xd = Y(0),
        yd = Y(new Date(0)),
        zd = Y(!0),
        Ad = Y(""),
        Bd = Y({}),
        Cd = Y([]),
        Dd = function(a, b) {
            if (b)
                for (var c = 0, d = b.length; c < d; ++c)
                    if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
            d = typeof a;
            if ("undefined" !== d) {
                c = Array.prototype.slice.call(b || [], 0);
                c[c.length] = a;
                b = [];
                var e = Y(a);
                if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a,
                        "toJSON") || (e !== Cd || a.constructor !== Array && a.constructor !== Object) && (e !== Bd || a.constructor !== Array && a.constructor !== Object) && e !== Ad && e !== xd && e !== zd && e !== yd)) return Dd(a.toJSON.call(a), c);
                if (null == a) b[b.length] = "null";
                else if (e === xd) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
                else if (e === zd) b[b.length] = String(!!Number(a));
                else {
                    if (e === yd) return Dd(a.toISOString.call(a), c);
                    if (e === Cd && Y(a.length) === xd) {
                        b[b.length] = "[";
                        var f = 0;
                        for (d = Number(a.length) >> 0; f < d; ++f) f &&
                            (b[b.length] = ","), b[b.length] = Dd(a[f], c) || "null";
                        b[b.length] = "]"
                    } else if (e == Ad && Y(a.length) === xd) {
                        b[b.length] = '"';
                        f = 0;
                        for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f), e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                        b[b.length] = '"'
                    } else if ("object" === d) {
                        b[b.length] = "{";
                        d = 0;
                        for (f in a) Object.prototype.hasOwnProperty.call(a,
                            f) && (e = Dd(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = Dd(f), b[b.length] = ":", b[b.length] = e));
                        b[b.length] = "}"
                    } else return
                }
                return b.join("")
            }
        },
        Ed = /[\0-\x07\x0b\x0e-\x1f]/,
        Fd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
        Gd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
        Hd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
        Id = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
        Jd = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
        Kd = /[ \t\n\r]+/g,
        Ld = /[^"]:/,
        Md = /""/g,
        Nd = /true|false|null/g,
        Od = /00/,
        Pd = /[\{]([^0\}]|0[^:])/,
        Qd = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
        Rd = /[^\[,:][\[\{]/,
        Sd = /^(\{|\}|\[|\]|,|:|0)+/,
        Td = /\u2028/g,
        Ud = /\u2029/g,
        Vd = function(a) {
            a = String(a);
            if (Ed.test(a) || Fd.test(a) || Gd.test(a) || Hd.test(a)) return !1;
            var b = a.replace(Id, '""');
            b = b.replace(Jd, "0");
            b = b.replace(Kd, "");
            if (Ld.test(b)) return !1;
            b = b.replace(Md, "0");
            b = b.replace(Nd, "0");
            if (Od.test(b) || Pd.test(b) || Qd.test(b) || Rd.test(b) || !b || (b = b.replace(Sd, ""))) return !1;
            a = a.replace(Td, "\\u2028").replace(Ud,
                "\\u2029");
            b = void 0;
            try {
                b = wd ? [X(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
            } catch (c) {
                return !1
            }
            return b && 1 === b.length ? b[0] : !1
        },
        Wd = function() {
            var a = ((t.document || {}).scripts || []).length;
            if ((void 0 === ud || void 0 === wd || vd !== a) && -1 !== vd) {
                ud = wd = !1;
                vd = -1;
                try {
                    try {
                        wd = !!t.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === t.JSON.stringify.call(t.JSON, {
                            a: [3, !0, new Date(0)],
                            c: function() {}
                        }) && !0 === X("true") && 3 === X('[{"a":3}]')[0].a
                    } catch (b) {}
                    ud = wd && !X("[00]") &&
                        !X('"\u0007"') && !X('"\\0"') && !X('"\\v"')
                } finally {
                    vd = a
                }
            }
        },
        Xd = function(a) {
            if (-1 === vd) return !1;
            Wd();
            return (ud ? X : Vd)(a)
        },
        Yd = function(a) {
            if (-1 !== vd) return Wd(), wd ? t.JSON.stringify.call(t.JSON, a) : Dd(a)
        },
        Zd = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString(),
        $d = function() {
            var a = Date.prototype.getUTCFullYear.call(this);
            return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 +
                Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
        };
    Date.prototype.toISOString = Zd ? $d : Date.prototype.toISOString;
    var ae = function() {
        this.blockSize = -1
    };
    var be = function() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = [];
        this.M = [];
        this.na = [];
        this.J = [];
        this.J[0] = 128;
        for (var a = 1; a < this.blockSize; ++a) this.J[a] = 0;
        this.K = this.B = 0;
        this.reset()
    };
    ya(be, ae);
    be.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.g[4] = 3285377520;
        this.K = this.B = 0
    };
    var ce = function(a, b, c) {
        c || (c = 0);
        var d = a.na;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.g[0];
        c = a.g[1];
        var g = a.g[2],
            k = a.g[3],
            h = a.g[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = k ^ c & (g ^ k);
                    var l = 1518500249
                } else f = c ^ g ^ k, l = 1859775393;
            else 60 > e ? (f = c & g | k & (c | g), l = 2400959708) :
                (f = c ^ g ^ k, l = 3395469782);
            f = (b << 5 | b >>> 27) + f + h + l + d[e] & 4294967295;
            h = k;
            k = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.g[0] = a.g[0] + b & 4294967295;
        a.g[1] = a.g[1] + c & 4294967295;
        a.g[2] = a.g[2] + g & 4294967295;
        a.g[3] = a.g[3] + k & 4294967295;
        a.g[4] = a.g[4] + h & 4294967295
    };
    be.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.M, f = this.B; d < b;) {
                if (0 == f)
                    for (; d <= c;) ce(this, a, d), d += this.blockSize;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                            ce(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                                ce(this, e);
                                f = 0;
                                break
                            }
            }
            this.B = f;
            this.K += b
        }
    };
    be.prototype.digest = function() {
        var a = [],
            b = 8 * this.K;
        56 > this.B ? this.update(this.J, 56 - this.B) : this.update(this.J, this.blockSize - (this.B - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--) this.M[c] = b & 255, b /= 256;
        ce(this, this.M);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.g[c] >> d & 255, ++b;
        return a
    };
    var de = function() {
        this.T = new be
    };
    de.prototype.reset = function() {
        this.T.reset()
    };
    var ee = C.crypto,
        fe = !1,
        ge = 0,
        he = 0,
        ie = 1,
        je = 0,
        ke = "",
        le = function(a) {
            a = a || C.event;
            var b = a.screenX + a.clientX << 16;
            b += a.screenY + a.clientY;
            b *= (new Date).getTime() % 1E6;
            ie = ie * b % je;
            0 < ge && ++he == ge && fc("mousemove", le, "remove", "de")
        },
        me = function(a) {
            var b = new de;
            a = unescape(encodeURIComponent(a));
            for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a.charCodeAt(d));
            b.T.update(c);
            b = b.T.digest();
            a = "";
            for (c = 0; c < b.length; c++) a += "0123456789ABCDEF".charAt(Math.floor(b[c] / 16)) + "0123456789ABCDEF".charAt(b[c] % 16);
            return a
        };
    fe = !!ee && "function" == typeof ee.getRandomValues;
    fe || (je = 1E6 * (screen.width * screen.width + screen.height), ke = me(D.cookie + "|" + D.location + "|" + (new Date).getTime() + "|" + Math.random()), ge = W("random/maxObserveMousemove") || 0, 0 != ge && fc("mousemove", le, "add", "at"));
    var ne = function() {
            var a = P.onl;
            if (!a) {
                a = F();
                P.onl = a;
                var b = F();
                a.e = function(c) {
                    var d = b[c];
                    d && (delete b[c], d())
                };
                a.a = function(c, d) {
                    b[c] = d
                };
                a.r = function(c) {
                    delete b[c]
                }
            }
            return a
        },
        oe = function(a, b) {
            b = b.onload;
            return "function" === typeof b ? (ne().a(a, b), b) : null
        },
        pe = function(a) {
            J(/^\w+$/.test(a), "Unsupported id - " + a);
            return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
        },
        qe = function(a) {
            ne().r(a)
        };
    var re = {
            allowtransparency: "true",
            frameborder: "0",
            hspace: "0",
            marginheight: "0",
            marginwidth: "0",
            scrolling: "no",
            style: "",
            tabindex: "0",
            vspace: "0",
            width: "100%"
        },
        se = {
            allowtransparency: !0,
            onload: !0
        },
        te = 0,
        ue = function(a) {
            J(!a || dc.test(a), "Illegal url for new iframe - " + a)
        },
        ve = function(a, b, c, d, e) {
            ue(c.src);
            var f, g = oe(d, c),
                k = g ? pe(d) : "";
            try {
                document.all && (f = a.createElement('<iframe frameborder="' + Pb(String(c.frameborder)) + '" scrolling="' + Pb(String(c.scrolling)) + '" ' + k + ' name="' + Pb(String(c.name)) + '"/>'))
            } catch (l) {} finally {
                f ||
                    (f = (a ? new Eb(Db(a)) : Ca || (Ca = new Eb)).qa("IFRAME"), g && (f.onload = function() {
                        f.onload = null;
                        g.call(this)
                    }, qe(d)))
            }
            f.setAttribute("ng-non-bindable", "");
            for (var h in c) a = c[h], "style" === h && "object" === typeof a ? I(a, f.style) : se[h] || f.setAttribute(h, String(a));
            (h = e && e.beforeNode || null) || e && e.dontclear || kc(b);
            b.insertBefore(f, h);
            f = h ? h.previousSibling : b.lastChild;
            c.allowtransparency && (f.allowTransparency = !0);
            return f
        };
    var we = /^:[\w]+$/,
        xe = /:([a-zA-Z_]+):/g,
        ye = function() {
            var a = sd() || "0",
                b = td();
            var c = sd() || a;
            var d = td(),
                e = "";
            c && (e += "u/" + encodeURIComponent(String(c)) + "/");
            d && (e += "b/" + encodeURIComponent(String(d)) + "/");
            c = e || null;
            (e = (d = !1 === W("isLoggedIn")) ? "_/im/" : "") && (c = "");
            var f = W("iframes/:socialhost:"),
                g = W("iframes/:im_socialhost:");
            return ec = {
                socialhost: f,
                ctx_socialhost: d ? g : f,
                session_index: a,
                session_delegate: b,
                session_prefix: c,
                im_prefix: e
            }
        },
        ze = function(a, b) {
            return ye()[b] || ""
        },
        Ae = function(a) {
            return function(b,
                c) {
                return a ? ye()[c] || a[c] || "" : ye()[c] || ""
            }
        };
    var Be = function(a) {
            var b;
            a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
            a = b ? b : a;
            return cc(document, a)
        },
        Ce = function(a) {
            a = a || "canonical";
            for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
                var e = b[c],
                    f = e.getAttribute("rel");
                if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = Be(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i)) return e
            }
            return window.location.href
        };
    var De = {
            se: "0"
        },
        Ee = {
            post: !0
        },
        Fe = {
            style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
        },
        Ge = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),
        He = E(P, "WI", F()),
        Ie = function(a, b, c) {
            var d;
            var e = {};
            var f = d = a;
            "plus" == a && b.action && (d = a + "_" + b.action, f = a + "/" + b.action);
            (d = U("iframes/" + d + "/url")) || (d = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
            for (var g in De) e[g] = g + "/" + (b[g] || De[g]) + "/";
            e = cc(D, d.replace(xe,
                Ae(e)));
            g = "iframes/" + a + "/params/";
            f = {};
            I(b, f);
            (d = U("lang") || U("gwidget/lang")) && (f.hl = d);
            Ee[a] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
            f.exp = U(g + "exp");
            if (g = U(g + "location"))
                for (d = 0; d < g.length; d++) {
                    var k = g[d];
                    f[k] = C.location[k]
                }
            switch (a) {
                case "plus":
                case "follow":
                    g = f.href;
                    d = b.action ? void 0 : "publisher";
                    g = (g = "string" == typeof g ? g : void 0) ? Be(g) : Ce(d);
                    f.url = g;
                    delete f.href;
                    break;
                case "plusone":
                    g = (g = b.href) ? Be(g) : Ce();
                    f.url = g;
                    g = b.db;
                    d = U();
                    null == g && d && (g = d.db,
                        null == g && (g = d.gwidget && d.gwidget.db));
                    f.db = g || void 0;
                    g = b.ecp;
                    d = U();
                    null == g && d && (g = d.ecp, null == g && (g = d.gwidget && d.gwidget.ecp));
                    f.ecp = g || void 0;
                    delete f.href;
                    break;
                case "signin":
                    f.url = Ce()
            }
            P.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var h in De) f[h] && delete f[h];
            f.gsrc = U("iframes/:source:");
            h = U("inline/css");
            "undefined" !== typeof h && 0 < c && h >= c && (f.ic = "1");
            h = /^#|^fr-/;
            c = {};
            for (var l in f) G(f, l) && h.test(l) && (c[l.replace(h, "")] = f[l], delete f[l]);
            l = "q" == U("iframes/" + a + "/params/si") ? f :
                c;
            h = id();
            for (var p in h) !G(h, p) || G(f, p) || G(c, p) || (l[p] = h[p]);
            p = [].concat(Ge);
            (l = U("iframes/" + a + "/methods")) && "object" === typeof l && Hb.test(l.push) && (p = p.concat(l));
            for (var q in b) G(b, q) && /^on/.test(q) && ("plus" != a || "onconnect" != q) && (p.push(q), delete f[q]);
            delete f.callback;
            c._methods = p.join(",");
            return ac(e, f, c)
        },
        Je = ["style", "data-gapiscan"],
        Le = function(a) {
            for (var b = F(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = a.attributes.length, e = 0; e < d; e++) {
                var f = a.attributes[e],
                    g = f.name,
                    k = f.value;
                0 <= Ib.call(Je,
                    g) || c && 0 != g.indexOf("data-") || "null" === k || "specified" in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = k)
            }
            a = a.style;
            (c = Ke(a && a.height)) && (b.height = String(c));
            (a = Ke(a && a.width)) && (b.width = String(a));
            return b
        },
        Ke = function(a) {
            var b = void 0;
            "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
            return b
        },
        Oe = function() {
            var a = P.drw;
            od(function(b) {
                if (a !== b.id && 4 != b.state && "share" != b.type) {
                    var c = b.id,
                        d = b.type,
                        e = b.url;
                    b = b.userParams;
                    var f = D.getElementById(c);
                    if (f) {
                        var g = Ie(d, b, 0);
                        g ? (f = f.parentNode,
                            Me(e) !== Me(g) && (b.dontclear = !0, b.rd = !0, b.ri = !0, b.type = d, Ne(f, b), (d = V[f.lastChild.id]) && (d.oid = c), pd(c, 4))) : delete V[c]
                    } else delete V[c]
                }
            })
        },
        Me = function(a) {
            var b = RegExp("(\\?|&)ic=1");
            return a.replace(/#.*/, "").replace(b, "")
        };
    var vb = fa(["data-"]),
        Pe, Qe, Re, Se, Te, Ue = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        Ve = {
            plusone: !0,
            autocomplete: !0,
            profile: !0,
            signin: !0,
            signin2: !0
        };
    Pe = E(P, "SW", F());
    Qe = E(P, "SA", F());
    Re = E(P, "SM", F());
    Se = E(P, "FW", []);
    Te = null;
    var We = function(a, b) {
            return ("string" === typeof a ? document.getElementById(a) : a) || b
        },
        Ye = function(a, b) {
            Xe(void 0, !1, a, b)
        },
        Xe = function(a, b, c, d) {
            Q("ps0", !0);
            c = We(c, D);
            var e = D.documentMode;
            if (c.querySelectorAll && (!e || 8 < e)) {
                e = d ? [d] : Qb(Pe).concat(Qb(Qe)).concat(Qb(Re));
                for (var f = [], g = 0; g < e.length; g++) {
                    var k = e[g];
                    f.push(".g-" + k, "g\\:" + k)
                }
                e = c.querySelectorAll(f.join(","))
            } else e = c.getElementsByTagName("*");
            c = F();
            for (f = 0; f < e.length; f++) {
                g = e[f];
                k = d;
                var h = g.nodeName.toLowerCase(),
                    l = void 0;
                if (g.hasAttribute("data-gapiscan")) k =
                    null;
                else {
                    var p = h.indexOf("g:");
                    0 == p ? l = h.substr(2) : (p = (p = String(g.className || g.getAttribute("class"))) && Ue.exec(p)) && (l = p[1]);
                    k = !l || !(Pe[l] || Qe[l] || Re[l]) || k && l !== k ? null : l
                }
                k && (Ve[k] || 0 == g.nodeName.toLowerCase().indexOf("g:") || 0 != Qb(Le(g)).length) && (Sb(g), E(c, k, []).push(g))
            }
            if (b)
                for (var q in c)
                    for (b = c[q], d = 0; d < b.length; d++) b[d].setAttribute("data-onload", !0);
            for (var n in c) Se.push(n);
            Q("ps1", !0);
            if ((q = Se.join(":")) || a) try {
                N.load(q, a)
            } catch (A) {
                ld.log(A);
                return
            }
            if (Ze(Te || {}))
                for (var K in c) {
                    a = c[K];
                    n =
                        0;
                    for (b = a.length; n < b; n++) a[n].removeAttribute("data-gapiscan");
                    $e(K)
                } else {
                    d = [];
                    for (K in c)
                        for (a = c[K], n = 0, b = a.length; n < b; n++) e = a[n], af(K, e, Le(e), d, b);
                    bf(q, d)
                }
        },
        cf = function(a) {
            var b = E(N, a, {});
            b.go || (b.go = function(c) {
                return Ye(c, a)
            }, b.render = function(c, d) {
                d = d || {};
                d.type = a;
                return Ne(c, d)
            })
        },
        df = function(a) {
            Pe[a] = !0
        },
        ef = function(a) {
            Qe[a] = !0
        },
        ff = function(a) {
            Re[a] = !0
        };
    var $e = function(a, b) {
            var c = oc(a);
            b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : N.load(a, function() {
                var d = oc(a),
                    e = b && b.iframeNode,
                    f = b && b.userParams;
                e && d ? (d(b), e.setAttribute("data-gapiattached", !0)) : (d = N[a].go, "signin2" == a ? d(e, f) : d(e && e.parentNode, f))
            })
        },
        Ze = function() {
            return !1
        },
        bf = function() {},
        af = function(a, b, c, d, e, f) {
            switch (gf(b, a, f)) {
                case 0:
                    a = Re[a] ? a + "_annotation" : a;
                    d = {};
                    d.iframeNode = b;
                    d.userParams = c;
                    $e(a, d);
                    break;
                case 1:
                    if (b.parentNode) {
                        for (var g in c) {
                            if (f = G(c, g)) f = c[g],
                                f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                            if (f) try {
                                c[g] = Yd(c[g])
                            } catch (H) {
                                delete c[g]
                            }
                        }
                        var k = !0;
                        c.dontclear && (k = !1);
                        delete c.dontclear;
                        nd();
                        f = Ie(a, c, e);
                        g = {
                            allowPost: 1,
                            attributes: Fe
                        };
                        g.dontclear = !k;
                        e = {};
                        e.userParams = c;
                        e.url = f;
                        e.type = a;
                        if (c.rd) var h = b;
                        else h = document.createElement("div"), b.setAttribute("data-gapistub", !0), h.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(h, b);
                        e.siteElement =
                            h;
                        h.id || (b = h, E(He, a, 0), k = "___" + a + "_" + He[a]++, b.id = k);
                        b = F();
                        b[">type"] = a;
                        I(c, b);
                        k = f;
                        c = h;
                        f = g || {};
                        b = f.attributes || {};
                        J(!(f.allowPost || f.forcePost) || !b.onload, "onload is not supported by post iframe (allowPost or forcePost)");
                        g = b = k;
                        we.test(b) && (g = W("iframes/" + g.substring(1) + "/url"), J(!!g, "Unknown iframe url config for - " + b));
                        k = cc(D, g.replace(xe, ze));
                        b = c.ownerDocument || D;
                        h = 0;
                        do g = f.id || ["I", te++, "_", (new Date).getTime()].join(""); while (b.getElementById(g) && 5 > ++h);
                        J(5 > h, "Error creating iframe id");
                        h = {};
                        var l = {};
                        b.documentMode && 9 > b.documentMode && (h.hostiemode = b.documentMode);
                        I(f.queryParams || {}, h);
                        I(f.fragmentParams || {}, l);
                        var p = f.pfname;
                        var q = F();
                        W("iframes/dropLegacyIdParam") || (q.id = g);
                        q._gfid = g;
                        q.parent = b.location.protocol + "//" + b.location.host;
                        var n = O(b.location.href, "parent");
                        p = p || "";
                        !p && n && (n = O(b.location.href, "_gfid", "") || O(b.location.href, "id", ""), p = O(b.location.href, "pfname", ""), p = n ? p + "/" + n : "");
                        p || (n = Xd(O(b.location.href, "jcp", ""))) && "object" == typeof n && (p = (p = n.id) ? n.pfname + "/" + p : "");
                        q.pfname =
                            p;
                        f.connectWithJsonParam && (n = {}, n.jcp = Yd(q), q = n);
                        n = O(k, "rpctoken") || h.rpctoken || l.rpctoken;
                        if (!n) {
                            if (!(n = f.rpctoken)) {
                                n = String;
                                p = Math;
                                var K = p.round;
                                if (fe) {
                                    var A = new C.Uint32Array(1);
                                    ee.getRandomValues(A);
                                    A = Number("0." + A[0])
                                } else A = ie, A += parseInt(ke.substr(0, 20), 16), ke = me(ke), A /= je + Math.pow(16, 20);
                                n = n(K.call(p, 1E8 * A))
                            }
                            q.rpctoken = n
                        }
                        f.rpctoken = n;
                        I(q, f.connectWithQueryParams ? h : l);
                        n = b.location.href;
                        q = F();
                        (p = O(n, "_bsh", P.bsh)) && (q._bsh = p);
                        (n = mc(n)) && (q.jsh = n);
                        f.hintInFragment ? I(q, l) : I(q, h);
                        k = ac(k, h, l, f.paramsSerializer);
                        l = F();
                        I(re, l);
                        I(f.attributes, l);
                        l.name = l.id = g;
                        l.src = k;
                        f.eurl = k;
                        h = f || {};
                        q = !!h.allowPost;
                        if (h.forcePost || q && 2E3 < k.length) {
                            h = Yb(k);
                            l.src = "";
                            f.dropDataPostorigin || (l["data-postorigin"] = k);
                            k = ve(b, c, l, g);
                            if (-1 != navigator.userAgent.indexOf("WebKit")) {
                                var w = k.contentWindow.document;
                                w.open();
                                l = w.createElement("div");
                                q = {};
                                n = g + "_inner";
                                q.name = n;
                                q.src = "";
                                q.style = "display:none";
                                ve(b, l, q, n, f)
                            }
                            l = (f = h.query[0]) ? f.split("&") : [];
                            f = [];
                            for (q = 0; q < l.length; q++) n = l[q].split("=", 2), f.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
                            h.query = [];
                            l = Zb(h);
                            J(dc.test(l), "Invalid URL: " + l);
                            h = b.createElement("form");
                            h.method = "POST";
                            h.target = g;
                            h.style.display = "none";
                            g = l instanceof x ? l : Ua(l);
                            yb(h, "FORM").action = Ra(g);
                            for (g = 0; g < f.length; g++) l = b.createElement("input"), l.type = "hidden", l.name = f[g][0], l.value = f[g][1], h.appendChild(l);
                            c.appendChild(h);
                            h.submit();
                            h.parentNode.removeChild(h);
                            w && w.close();
                            w = k
                        } else w = ve(b, c, l, g, f);
                        e.iframeNode = w;
                        e.id = w.getAttribute("id");
                        w = e.id;
                        c = F();
                        c.id = w;
                        c.userParams = e.userParams;
                        c.url = e.url;
                        c.type = e.type;
                        c.state =
                            1;
                        V[w] = c;
                        w = e
                    } else w = null;
                    w && ((e = w.id) && d.push(e), $e(a, w))
            }
        },
        gf = function(a, b, c) {
            if (a && 1 === a.nodeType && b) {
                if (c) return 1;
                if (Re[b]) {
                    if (lc[a.nodeName.toLowerCase()]) return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
                } else {
                    if (Qe[b]) return 0;
                    if (Pe[b]) return 1
                }
            }
            return null
        },
        Ne = function(a, b) {
            var c = b.type;
            delete b.type;
            var d = We(a);
            if (d) {
                a = {};
                for (var e in b) G(b, e) && (a[e.toLowerCase()] = b[e]);
                a.rd = 1;
                (b = !!a.ri) && delete a.ri;
                e = [];
                af(c, d, a, e, 0, b);
                bf(c, e)
            } else ld.log("string" === "gapi." + c + ".render: missing element " +
                typeof a ? a : "")
        };
    E(N, "platform", {}).go = Ye;
    Ze = function(a) {
        for (var b = ["_c", "jsl", "h"], c = 0; c < b.length && a; c++) a = a[b[c]];
        b = mc(Fb.href);
        return !a || 0 != a.indexOf("n;") && 0 != b.indexOf("n;") && a !== b
    };
    bf = function(a, b) {
        hf(a, b)
    };
    var hc = function(a) {
            Xe(a, !0)
        },
        jf = function(a, b) {
            b = b || [];
            for (var c = 0; c < b.length; ++c) a(b[c]);
            for (a = 0; a < b.length; a++) cf(b[a])
        };
    R.push(["platform", function(a, b, c) {
        Te = c;
        (b || c.features) && Se.push(b || c.features.join(":"));
        jf(df, a);
        jf(ef, c._c.annotation);
        jf(ff, c._c.bimodal);
        ed();
        cd();
        if ("explicit" != U("parsetags")) {
            nc(a);
            jd(id()) && !U("disableRealtimeCallback") && nd();
            if (c && (a = c.callback)) {
                var d = Rb(a);
                delete c.callback
            }
            jc(function() {
                hc(d)
            })
        }
    }]);
    N._pl = !0;
    var kf = function(a) {
        a = (a = V[a]) ? a.oid : void 0;
        if (a) {
            var b = D.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete V[a];
            kf(a)
        }
    };
    var lf = /^\{h:'/,
        mf = /^!_/,
        nf = "",
        hf = function(a, b) {
            function c() {
                fc("message", d, "remove", "de")
            }

            function d(f) {
                var g = f.data,
                    k = f.origin;
                if ( of (g, b)) {
                    var h = e;
                    e = !1;
                    h && Q("rqe");
                    pf(a, function() {
                        h && Q("rqd");
                        c();
                        for (var l = E(P, "RPMQ", []), p = 0; p < l.length; p++) l[p]({
                            data: g,
                            origin: k
                        })
                    })
                }
            }
            if (0 !== b.length) {
                nf = O(Fb.href, "pfname", "");
                var e = !0;
                fc("message", d, "add", "at");
                Vc(a, c)
            }
        },
        of = function(a, b) {
            a = String(a);
            if (lf.test(a)) return !0;
            var c = !1;
            mf.test(a) && (c = !0, a = a.substr(2));
            if (!/^\{/.test(a)) return !1;
            var d = Xd(a);
            if (!d) return !1;
            a = d.f;
            if (d.s && a && -1 != Ib.call(b, a)) {
                if ("_renderstart" === d.s || d.s === nf + "/" + a + "::_renderstart")
                    if (d = d.a && d.a[c ? 0 : 1], b = D.getElementById(a), pd(a, 2), d && b && d.width && d.height) {
                        a: {
                            c = b.parentNode;a = d || {};
                            if (md()) {
                                var e = b.id;
                                if (e) {
                                    d = (d = V[e]) ? d.state : void 0;
                                    if (1 === d || 4 === d) break a;
                                    kf(e)
                                }
                            }(d = c.nextSibling) && d.getAttribute && d.getAttribute("data-gapistub") && (c.parentNode.removeChild(d), c.style.cssText = "");d = a.width;
                            var f = a.height,
                                g = c.style;g.textIndent = "0";g.margin = "0";g.padding = "0";g.background = "transparent";g.borderStyle =
                            "none";g.cssFloat = "none";g.styleFloat = "none";g.lineHeight = "normal";g.fontSize = "1px";g.verticalAlign = "baseline";c = c.style;c.display = "inline-block";g = b.style;g.position = "static";g.left = "0";g.top = "0";g.visibility = "visible";d && (c.width = g.width = d + "px");f && (c.height = g.height = f + "px");a.verticalAlign && (c.verticalAlign = a.verticalAlign);e && pd(e, 3)
                        }
                        b["data-csi-wdt"] = (new Date).getTime()
                    }
                return !0
            }
            return !1
        },
        pf = function(a, b) {
            Vc(a, b)
        };
    var qf = function(a, b) {
        this.P = a;
        a = b || {};
        this.ta = Number(a.maxAge) || 0;
        this.aa = a.domain;
        this.da = a.path;
        this.ua = !!a.secure
    };
    qf.prototype.read = function() {
        for (var a = this.P + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c];
            if (0 == d.indexOf(a)) return d.substr(a.length)
        }
    };
    qf.prototype.write = function(a, b) {
        if (!rf.test(this.P)) throw "Invalid cookie name";
        if (!sf.test(a)) throw "Invalid cookie value";
        a = this.P + "=" + a;
        this.aa && (a += ";domain=" + this.aa);
        this.da && (a += ";path=" + this.da);
        b = "number" === typeof b ? b : this.ta;
        if (0 <= b) {
            var c = new Date;
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString()
        }
        this.ua && (a += ";secure");
        document.cookie = a;
        return !0
    };
    qf.prototype.clear = function() {
        this.write("", 0)
    };
    var sf = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
        rf = /^[A-Z_][A-Z0-9_]{0,63}$/;
    qf.iterate = function(a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("="),
                e = d.shift();
            a(e, d.join("="))
        }
    };
    var tf = function(a) {
        this.H = a
    };
    tf.prototype.read = function() {
        if (Z.hasOwnProperty(this.H)) return Z[this.H]
    };
    tf.prototype.write = function(a) {
        Z[this.H] = a;
        return !0
    };
    tf.prototype.clear = function() {
        delete Z[this.H]
    };
    var Z = {};
    tf.iterate = function(a) {
        for (var b in Z) Z.hasOwnProperty(b) && a(b, Z[b])
    };
    var uf = "https:" === window.location.protocol,
        vf = uf || "http:" === window.location.protocol ? qf : tf,
        wf = function(a) {
            var b = a.substr(1),
                c = "",
                d = window.location.hostname;
            if ("" !== b) {
                c = parseInt(b, 10);
                if (isNaN(c)) return null;
                b = d.split(".");
                if (b.length < c - 1) return null;
                b.length == c - 1 && (d = "." + d)
            } else d = "";
            return {
                l: "S" == a.charAt(0),
                domain: d,
                o: c
            }
        },
        xf = function() {
            var a, b = null;
            vf.iterate(function(c, d) {
                0 === c.indexOf("G_AUTHUSER_") && (c = wf(c.substring(11)), !a || c.l && !a.l || c.l == a.l && c.o > a.o) && (a = c, b = d)
            });
            return {
                pa: a,
                L: b
            }
        };

    function yf(a) {
        if (0 !== a.indexOf("GCSC")) return null;
        var b = {
            ca: !1
        };
        a = a.substr(4);
        if (!a) return b;
        var c = a.charAt(0);
        a = a.substr(1);
        var d = a.lastIndexOf("_");
        if (-1 == d) return b;
        var e = wf(a.substr(d + 1));
        if (null == e) return b;
        a = a.substring(0, d);
        if ("_" !== a.charAt(0)) return b;
        d = "E" === c && e.l;
        return !d && ("U" !== c || e.l) || d && !uf ? b : {
            ca: !0,
            l: d,
            za: a.substr(1),
            domain: e.domain,
            o: e.o
        }
    }
    var zf = function(a) {
            if (!a) return [];
            a = a.split("=");
            return a[1] ? a[1].split("|") : []
        },
        Af = function(a) {
            a = a.split(":");
            return {
                clientId: a[0].split("=")[1],
                wa: zf(a[1]),
                Ba: zf(a[2]),
                Aa: zf(a[3])
            }
        },
        Bf = function() {
            var a = xf(),
                b = a.pa;
            a = a.L;
            if (null !== a) {
                var c;
                vf.iterate(function(f, g) {
                    (f = yf(f)) && f.ca && f.l == b.l && f.o == b.o && (c = g)
                });
                if (c) {
                    var d = Af(c),
                        e = d && d.wa[Number(a)];
                    d = d && d.clientId;
                    if (e) return {
                        L: a,
                        va: e,
                        clientId: d
                    }
                }
            }
            return null
        };
    var Df = function() {
        this.Y = Cf
    };
    m = Df.prototype;
    m.ja = function() {
        this.O || (this.C = 0, this.O = !0, this.ea())
    };
    m.ea = function() {
        this.O && (this.Y() ? this.C = this.V : this.C = Math.min(2 * (this.C || this.V), 120), window.setTimeout(xa(this.ea, this), 1E3 * this.C))
    };
    m.C = 0;
    m.V = 2;
    m.Y = null;
    m.O = !1;
    var Ef = null;
    md = function() {
        return P.oa = !0
    };
    nd = function() {
        P.oa = !0;
        var a = Bf();
        (a = a && a.L) && dd("googleapis.config/sessionIndex", a);
        Ef || (Ef = E(P, "ss", new Df));
        a = Ef;
        a.ja && a.ja()
    };
    var Cf = function() {
        var a = Bf(),
            b = a && a.va || null,
            c = a && a.clientId;
        Vc("auth", {
            callback: function() {
                var d = C.gapi.auth,
                    e = {
                        client_id: c,
                        session_state: b
                    };
                d.checkSessionState(e, function(f) {
                    var g = e.session_state,
                        k = !!U("isLoggedIn");
                    f = U("debug/forceIm") ? !1 : g && f || !g && !f;
                    if (k = k !== f) dd("isLoggedIn", f), nd(), Oe(), f || ((f = d.signOut) ? f() : (f = d.setToken) && f(null));
                    f = id();
                    var h = U("savedUserState");
                    g = d._guss(f.cookiepolicy);
                    h = h != g && "undefined" != typeof h;
                    dd("savedUserState", g);
                    (k || h) && jd(f) && !U("disableRealtimeCallback") && d._pimf(f, !0)
                })
            }
        });
        return !0
    };
    R.unshift(["url", function(a, b, c) {
        !a || b && "" !== b || !a.endsWith(".js") || (a = a.substring(0, a.length - 3), b = a.lastIndexOf("/") + 1, b >= a.length || (a = a.substr(b).split(":").filter(function(d) {
            return !["api", "platform"].includes(d)
        }), c.features = a))
    }]);
    Q("bs0", !0, window.gapi._bs);
    Q("bs1", !0);
    delete window.gapi._bs;
    window.gapi.load("", {
        callback: window["gapi_onload"],
        _c: {
            url: "https://apis.google.com/js/platform.js",
            jsl: {
                ci: {
                    "oauth-flow": {
                        authUrl: "https://accounts.google.com/o/oauth2/auth",
                        proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
                        disableOpt: !0,
                        idpIframeUrl: "https://accounts.google.com/o/oauth2/iframe",
                        usegapi: !1
                    },
                    debug: {
                        reportExceptionRate: 1,
                        forceIm: !1,
                        rethrowException: !0,
                        host: "https://apis.google.com"
                    },
                    enableMultilogin: !0,
                    "googleapis.config": {
                        auth: {
                            useFirstPartyAuthV2: !0
                        },
                        root: "https://content.googleapis.com",
                        "root-1p": "https://clients6.google.com"
                    },
                    inline: {
                        css: 1
                    },
                    disableRealtimeCallback: !1,
                    drive_share: {
                        skipInitCommand: !0
                    },
                    csi: {
                        rate: .01
                    },
                    client: {
                        cors: !1
                    },
                    signInDeprecation: {
                        rate: 0
                    },
                    include_granted_scopes: !0,
                    llang: "en",
                    iframes: {
                        youtube: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ytsubscribe: {
                            url: "https://www.youtube.com/subscribe_embed?usegapi=1"
                        },
                        plus_circle: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"
                        },
                        plus_share: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"
                        },
                        rbr_s: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
                        },
                        ":source:": "3p",
                        playemm: {
                            url: "https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"
                        },
                        savetoandroidpay: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        blogger: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        evwidget: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/events/widget?usegapi=1"
                        },
                        partnersbadge: {
                            url: "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"
                        },
                        dataconnector: {
                            url: "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"
                        },
                        surveyoptin: {
                            url: "https://www.google.com/shopping/customerreviews/optin?usegapi=1"
                        },
                        ":socialhost:": "https://apis.google.com",
                        shortlists: {
                            url: ""
                        },
                        hangout: {
                            url: "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
                        },
                        plus_followers: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
                        },
                        post: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"
                        },
                        signin: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",
                            methods: ["onauth"]
                        },
                        rbr_i: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
                        },
                        share: {
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"
                        },
                        plusone: {
                            params: {
                                count: "",
                                size: "",
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"
                        },
                        comments: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ":im_socialhost:": "https://plus.googleapis.com",
                        backdrop: {
                            url: "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"
                        },
                        visibility: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"
                        },
                        autocomplete: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/autocomplete"
                        },
                        ":signuphost:": "https://plus.google.com",
                        ratingbadge: {
                            url: "https://www.google.com/shopping/customerreviews/badge?usegapi=1"
                        },
                        appcirclepicker: {
                            url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                        },
                        follow: {
                            url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
                        },
                        community: {
                            url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
                        },
                        sharetoclassroom: {
                            url: "https://classroom.google.com/sharewidget?usegapi=1"
                        },
                        ytshare: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"
                        },
                        plus: {
                            url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
                        },
                        family_creation: {
                            params: {
                                url: ""
                            },
                            url: "https://families.google.com/webcreation?usegapi=1&usegapi=1"
                        },
                        commentcount: {
                            url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
                        },
                        configurator: {
                            url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
                        },
                        zoomableimage: {
                            url: "https://ssl.gstatic.com/microscope/embed/"
                        },
                        appfinder: {
                            url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
                        },
                        savetowallet: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        person: {
                            url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
                        },
                        savetodrive: {
                            url: "https://drive.google.com/savetodrivebutton?usegapi=1",
                            methods: ["save"]
                        },
                        page: {
                            url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
                        },
                        card: {
                            url: ":socialhost:/:session_prefix:_/hovercard/card"
                        }
                    }
                },
                h: "m;/_/scs/abc-static/_/js/k=gapi.lb.en.5o5-TAFr18s.O/d=1/rs=AHpOoo_qgszOsFrBH7bZ1Rmfwa9Mc03wLQ/m=__features__",
                u: "https://apis.google.com/js/platform.js",
                hee: !0,
                dpo: !1,
                le: ["scs"],
                glrp: false
            },
            platform: "backdrop blogger comments commentcount community donation family_creation follow hangout health page partnersbadge person playemm playreview plus plusone post ratingbadge savetoandroidpay savetodrive savetowallet sharetoclassroom shortlists signin2 surveyoptin visibility youtube ytsubscribe zoomableimage".split(" "),
            annotation: ["interactivepost", "recobar", "signin2", "autocomplete"]
        }
    });
}).call(this);