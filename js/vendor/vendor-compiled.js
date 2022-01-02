/*
 Sticky-kit v1.1.4 | MIT | Leaf Corcoran 2015 | http://leafo.net
*/
(function() {
    var d = window.jQuery;
    var k = d(window);
    var J = d(document);
    d.fn.stick_in_parent = function(b) {
        var w;
        null == b && (b = {});
        var u = b.sticky_class;
        var E = b.inner_scrolling;
        var K = b.recalc_every;
        var x = b.parent;
        var n = b.offset_top;
        var q = b.spacer;
        var y = b.bottoming;
        var F = k.height();
        var G = J.height();
        null == n && (n = 0);
        null == x && (x = void 0);
        null == E && (E = !0);
        null == u && (u = "is_stuck");
        null == y && (y = !0);
        var M = function(a) {
            if (window.getComputedStyle) {
                a = window.getComputedStyle(a[0]);
                var b = parseFloat(a.getPropertyValue("width")) +
                    parseFloat(a.getPropertyValue("margin-left")) + parseFloat(a.getPropertyValue("margin-right"));
                "border-box" !== a.getPropertyValue("box-sizing") && (b += parseFloat(a.getPropertyValue("border-left-width")) + parseFloat(a.getPropertyValue("border-right-width")) + parseFloat(a.getPropertyValue("padding-left")) + parseFloat(a.getPropertyValue("padding-right")));
                return b
            }
            return a.outerWidth(!0)
        };
        var N = function(a, b, t, z, A, r, p, H) {
            var l, e;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                var w = G;
                var g = a.parent();
                null !=
                    x && (g = g.closest(x));
                if (!g.length) throw "failed to find stick parent";
                var c = 0;
                var v = l = !1;
                (e = null != q ? q && a.closest(q) : d("<div />")) && e.css("position", a.css("position"));
                var B = function() {
                    if (!H) {
                        F = k.height();
                        w = G = J.height();
                        var d = parseInt(g.css("border-top-width"), 10);
                        var m = parseInt(g.css("padding-top"), 10);
                        b = parseInt(g.css("padding-bottom"), 10);
                        t = g.offset().top + d + m;
                        z = g.height();
                        if (l) {
                            v = l = !1;
                            c = n;
                            null == q && (a.insertAfter(e), e.detach());
                            a.css({
                                position: "",
                                top: "",
                                width: "",
                                bottom: ""
                            }).removeClass(u);
                            var h = !0
                        }
                        A =
                            a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - n;
                        r = a.outerHeight(!0);
                        p = a.css("float");
                        e && e.css({
                            width: M(a),
                            height: r,
                            display: a.css("display"),
                            "vertical-align": a.css("vertical-align"),
                            "float": p
                        });
                        if (h) return f()
                    }
                };
                B();
                var I = void 0;
                c = n;
                var C = K;
                var f = function() {
                    var d;
                    if (!H && r !== z) {
                        var m = !1;
                        null != C && (--C, 0 >= C && (C = K, B(), m = !0));
                        m || G === w || B();
                        var h = k.scrollTop();
                        null != I && (d = h - I);
                        I = h;
                        if (l) {
                            if (y) {
                                var f = h + r + c > z + t;
                                v && !f && (v = !1, a.css({
                                    position: "fixed",
                                    bottom: "",
                                    top: c
                                }).trigger("sticky_kit:unbottom"))
                            }
                            if (h <
                                A || 0 === h && h === A) l = !1, c = n, null == q && ("left" !== p && "right" !== p || a.insertAfter(e), e.detach()), m = {
                                position: "",
                                width: "",
                                top: ""
                            }, a.css(m).removeClass(u).trigger("sticky_kit:unstick");
                            E && r + n > F && !v && (c -= d, c = Math.max(F - r, c), c = Math.min(n, c), l && a.css({
                                top: c + "px"
                            }))
                        } else h > A && (l = !0, m = {
                            position: "fixed",
                            top: c
                        }, m.width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px", a.css(m).addClass(u), null == q && (a.after(e), "left" !== p && "right" !== p || e.append(a)), a.trigger("sticky_kit:stick"));
                        if (l && y && (null ==
                                f && (f = h + r + c > z + t), !v && f)) return v = !0, "static" === g.css("position") && g.css({
                            position: "relative"
                        }), a.css({
                            position: "absolute",
                            bottom: b,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")
                    }
                };
                var D = function() {
                    B();
                    return f()
                };
                var L = function() {
                    H = !0;
                    k.off("touchmove", f);
                    k.off("scroll", f);
                    k.off("resize", D);
                    d(document.body).off("sticky_kit:recalc", D);
                    a.off("sticky_kit:detach", L);
                    a.removeData("sticky_kit");
                    a.css({
                        position: "",
                        bottom: "",
                        top: "",
                        width: ""
                    });
                    g.position("position", "");
                    if (l) return null == q && ("left" !== p && "right" !==
                        p || a.insertAfter(e), e.remove()), a.removeClass(u)
                };
                k.on("touchmove", f);
                k.on("scroll", f);
                k.on("resize", D);
                d(document.body).on("sticky_kit:recalc", D);
                a.on("sticky_kit:detach", L);
                return setTimeout(f, 0)
            }
        };
        var t = 0;
        for (w = this.length; t < w; t++) b = this[t], N(d(b));
        return this
    }
}).call(this);

(function defineMustache(global, factory) {
    if (typeof exports === "object" && exports && typeof exports.nodeName !== "string") {
        factory(exports)
    } else if (typeof define === "function" && define.amd) {
        define(["exports"], factory)
    } else {
        global.Mustache = {};
        factory(global.Mustache)
    }
})(this, function mustacheFactory(mustache) {
    var objectToString = Object.prototype.toString;
    var isArray = Array.isArray || function isArrayPolyfill(object) {
        return objectToString.call(object) === "[object Array]"
    };

    function isFunction(object) {
        return typeof object === "function"
    }

    function typeStr(obj) {
        return isArray(obj) ? "array" : typeof obj
    }

    function escapeRegExp(string) {
        return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function hasProperty(obj, propName) {
        return obj != null && typeof obj === "object" && propName in obj
    }
    var regExpTest = RegExp.prototype.test;

    function testRegExp(re, string) {
        return regExpTest.call(re, string)
    }
    var nonSpaceRe = /\S/;

    function isWhitespace(string) {
        return !testRegExp(nonSpaceRe, string)
    }
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    };

    function escapeHtml(string) {
        return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
            return entityMap[s]
        })
    }
    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var equalsRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;

    function parseTemplate(template, tags) {
        if (!template) return [];
        var sections = [];
        var tokens = [];
        var spaces = [];
        var hasTag = false;
        var nonSpace = false;

        function stripSpace() {
            if (hasTag && !nonSpace) {
                while (spaces.length) delete tokens[spaces.pop()]
            } else {
                spaces = []
            }
            hasTag = false;
            nonSpace = false
        }
        var openingTagRe, closingTagRe, closingCurlyRe;

        function compileTags(tagsToCompile) {
            if (typeof tagsToCompile === "string") tagsToCompile = tagsToCompile.split(spaceRe, 2);
            if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) throw new Error("Invalid tags: " + tagsToCompile);
            openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
            closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
            closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]))
        }
        compileTags(tags || mustache.tags);
        var scanner = new Scanner(template);
        var start, type, value, chr, token, openSection;
        while (!scanner.eos()) {
            start = scanner.pos;
            value = scanner.scanUntil(openingTagRe);
            if (value) {
                for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
                    chr = value.charAt(i);
                    if (isWhitespace(chr)) {
                        spaces.push(tokens.length)
                    } else {
                        nonSpace = true
                    }
                    tokens.push(["text", chr, start, start + 1]);
                    start += 1;
                    if (chr === "\n") stripSpace()
                }
            }
            if (!scanner.scan(openingTagRe)) break;
            hasTag = true;
            type = scanner.scan(tagRe) || "name";
            scanner.scan(whiteRe);
            if (type === "=") {
                value = scanner.scanUntil(equalsRe);
                scanner.scan(equalsRe);
                scanner.scanUntil(closingTagRe)
            } else if (type === "{") {
                value = scanner.scanUntil(closingCurlyRe);
                scanner.scan(curlyRe);
                scanner.scanUntil(closingTagRe);
                type = "&"
            } else {
                value = scanner.scanUntil(closingTagRe)
            }
            if (!scanner.scan(closingTagRe)) throw new Error("Unclosed tag at " + scanner.pos);
            token = [type, value, start, scanner.pos];
            tokens.push(token);
            if (type === "#" || type === "^") {
                sections.push(token)
            } else if (type === "/") {
                openSection = sections.pop();
                if (!openSection) throw new Error('Unopened section "' + value + '" at ' + start);
                if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start)
            } else if (type === "name" || type === "{" || type === "&") {
                nonSpace = true
            } else if (type === "=") {
                compileTags(value)
            }
        }
        openSection = sections.pop();
        if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
        return nestTokens(squashTokens(tokens))
    }

    function squashTokens(tokens) {
        var squashedTokens = [];
        var token, lastToken;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            token = tokens[i];
            if (token) {
                if (token[0] === "text" && lastToken && lastToken[0] === "text") {
                    lastToken[1] += token[1];
                    lastToken[3] = token[3]
                } else {
                    squashedTokens.push(token);
                    lastToken = token
                }
            }
        }
        return squashedTokens
    }

    function nestTokens(tokens) {
        var nestedTokens = [];
        var collector = nestedTokens;
        var sections = [];
        var token, section;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            token = tokens[i];
            switch (token[0]) {
                case "#":
                case "^":
                    collector.push(token);
                    sections.push(token);
                    collector = token[4] = [];
                    break;
                case "/":
                    section = sections.pop();
                    section[5] = token[2];
                    collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
                    break;
                default:
                    collector.push(token)
            }
        }
        return nestedTokens
    }

    function Scanner(string) {
        this.string = string;
        this.tail = string;
        this.pos = 0
    }
    Scanner.prototype.eos = function eos() {
        return this.tail === ""
    };
    Scanner.prototype.scan = function scan(re) {
        var match = this.tail.match(re);
        if (!match || match.index !== 0) return "";
        var string = match[0];
        this.tail = this.tail.substring(string.length);
        this.pos += string.length;
        return string
    };
    Scanner.prototype.scanUntil = function scanUntil(re) {
        var index = this.tail.search(re),
            match;
        switch (index) {
            case -1:
                match = this.tail;
                this.tail = "";
                break;
            case 0:
                match = "";
                break;
            default:
                match = this.tail.substring(0, index);
                this.tail = this.tail.substring(index)
        }
        this.pos += match.length;
        return match
    };

    function Context(view, parentContext) {
        this.view = view;
        this.cache = {
            ".": this.view
        };
        this.parent = parentContext
    }
    Context.prototype.push = function push(view) {
        return new Context(view, this)
    };
    Context.prototype.lookup = function lookup(name) {
        var cache = this.cache;
        var value;
        if (cache.hasOwnProperty(name)) {
            value = cache[name]
        } else {
            var context = this,
                names, index, lookupHit = false;
            while (context) {
                if (name.indexOf(".") > 0) {
                    value = context.view;
                    names = name.split(".");
                    index = 0;
                    while (value != null && index < names.length) {
                        if (index === names.length - 1) lookupHit = hasProperty(value, names[index]);
                        value = value[names[index++]]
                    }
                } else {
                    value = context.view[name];
                    lookupHit = hasProperty(context.view, name)
                }
                if (lookupHit) break;
                context = context.parent
            }
            cache[name] = value
        }
        if (isFunction(value)) value = value.call(this.view);
        return value
    };

    function Writer() {
        this.cache = {}
    }
    Writer.prototype.clearCache = function clearCache() {
        this.cache = {}
    };
    Writer.prototype.parse = function parse(template, tags) {
        var cache = this.cache;
        var tokens = cache[template];
        if (tokens == null) tokens = cache[template] = parseTemplate(template, tags);
        return tokens
    };
    Writer.prototype.render = function render(template, view, partials) {
        var tokens = this.parse(template);
        var context = view instanceof Context ? view : new Context(view);
        return this.renderTokens(tokens, context, partials, template)
    };
    Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate) {
        var buffer = "";
        var token, symbol, value;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            value = undefined;
            token = tokens[i];
            symbol = token[0];
            if (symbol === "#") value = this.renderSection(token, context, partials, originalTemplate);
            else if (symbol === "^") value = this.renderInverted(token, context, partials, originalTemplate);
            else if (symbol === ">") value = this.renderPartial(token, context, partials, originalTemplate);
            else if (symbol === "&") value = this.unescapedValue(token, context);
            else if (symbol === "name") value = this.escapedValue(token, context);
            else if (symbol === "text") value = this.rawValue(token);
            if (value !== undefined) buffer += value
        }
        return buffer
    };
    Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
        var self = this;
        var buffer = "";
        var value = context.lookup(token[1]);

        function subRender(template) {
            return self.render(template, context, partials)
        }
        if (!value) return;
        if (isArray(value)) {
            for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
                buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate)
            }
        } else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
            buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate)
        } else if (isFunction(value)) {
            if (typeof originalTemplate !== "string") throw new Error("Cannot use higher-order sections without the original template");
            value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
            if (value != null) buffer += value
        } else {
            buffer += this.renderTokens(token[4], context, partials, originalTemplate)
        }
        return buffer
    };
    Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
        var value = context.lookup(token[1]);
        if (!value || isArray(value) && value.length === 0) return this.renderTokens(token[4], context, partials, originalTemplate)
    };
    Writer.prototype.renderPartial = function renderPartial(token, context, partials) {
        if (!partials) return;
        var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if (value != null) return this.renderTokens(this.parse(value), context, partials, value)
    };
    Writer.prototype.unescapedValue = function unescapedValue(token, context) {
        var value = context.lookup(token[1]);
        if (value != null) return value
    };
    Writer.prototype.escapedValue = function escapedValue(token, context) {
        var value = context.lookup(token[1]);
        if (value != null) return mustache.escape(value)
    };
    Writer.prototype.rawValue = function rawValue(token) {
        return token[1]
    };
    mustache.name = "mustache.js";
    mustache.version = "2.2.1";
    mustache.tags = ["{{", "}}"];
    var defaultWriter = new Writer;
    mustache.clearCache = function clearCache() {
        return defaultWriter.clearCache()
    };
    mustache.parse = function parse(template, tags) {
        return defaultWriter.parse(template, tags)
    };
    mustache.render = function render(template, view, partials) {
        if (typeof template !== "string") {
            throw new TypeError('Invalid template! Template should be a "string" ' + 'but "' + typeStr(template) + '" was given as the first ' + "argument for mustache#render(template, view, partials)")
        }
        return defaultWriter.render(template, view, partials)
    };
    mustache.to_html = function to_html(template, view, partials, send) {
        var result = mustache.render(template, view, partials);
        if (isFunction(send)) {
            send(result)
        } else {
            return result
        }
    };
    mustache.escape = escapeHtml;
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer
});


/*
 Pikaday

 Copyright ? 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
*/
(function(p, n) {
    if ("object" === typeof exports) {
        try {
            var u = require("moment")
        } catch (k) {}
        module.exports = n(u)
    } else "function" === typeof define && define.amd ? define(function(k) {
        try {
            u = k("moment")
        } catch (y) {}
        return n(u)
    }) : p.Pikaday = n(p.moment)
})(this, function(p) {
    var n = "function" === typeof p,
        u = !!window.addEventListener,
        k = window.document,
        y = window.setTimeout,
        q = function(a, b, d, c) {
            u ? a.addEventListener(b, d, !!c) : a.attachEvent("on" + b, d)
        },
        v = function(a, b, d, c) {
            u ? a.removeEventListener(b, d, !!c) : a.detachEvent("on" + b, d)
        },
        C = function(a,
            b, d) {
            if (k.createEvent) {
                var c = k.createEvent("HTMLEvents");
                c.initEvent(b, !0, !1);
                c = w(c, d);
                a.dispatchEvent(c)
            } else k.createEventObject && (c = k.createEventObject(), c = w(c, d), a.fireEvent("on" + b, c))
        },
        f = function(a, b) {
            return -1 !== (" " + a.className + " ").indexOf(" " + b + " ")
        },
        D = function(a) {
            return /Array/.test(Object.prototype.toString.call(a))
        },
        m = function(a) {
            return /Date/.test(Object.prototype.toString.call(a)) && !isNaN(a.getTime())
        },
        M = function(a, b) {
            return [31, 0 === a % 4 && 0 !== a % 100 || 0 === a % 400 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31,
                30, 31
            ][b]
        },
        A = function(a) {
            m(a) && a.setHours(0, 0, 0, 0)
        },
        F = function(a, b) {
            a = new Date(a.getTime());
            b = new Date(b.getTime());
            A(a);
            A(b);
            return a.getTime() === b.getTime()
        },
        w = function(a, b, d) {
            var c, l;
            for (c in b)
                if ((l = void 0 !== a[c]) && "object" === typeof b[c] && null !== b[c] && void 0 === b[c].nodeName) m(b[c]) ? d && (a[c] = new Date(b[c].getTime())) : D(b[c]) ? d && (a[c] = b[c].slice(0)) : a[c] = w({}, b[c], d);
                else if (d || !l) a[c] = b[c];
            return a
        },
        G = function(a) {
            0 > a.month && (a.year -= Math.ceil(Math.abs(a.month) / 12), a.month += 12);
            11 < a.month && (a.year +=
                Math.floor(Math.abs(a.month) / 12), a.month -= 12);
            return a
        },
        r = {
            field: null,
            bound: void 0,
            position: "bottom left",
            reposition: !0,
            format: null,
            inputFormats: null,
            defaultDate: null,
            setDefaultDate: !1,
            firstDay: 0,
            formatStrict: !1,
            minDate: null,
            maxDate: null,
            yearRange: 10,
            showWeekNumber: !1,
            minYear: 0,
            maxYear: 9999,
            minMonth: void 0,
            maxMonth: void 0,
            startRange: null,
            endRange: null,
            isRTL: !1,
            yearSuffix: "",
            showMonthAfterYear: !1,
            showDaysInNextAndPreviousMonths: !1,
            numberOfMonths: 1,
            showTime: !0,
            showMinutes: !0,
            showSeconds: !1,
            use24hour: !1,
            incrementHourBy: 1,
            incrementMinuteBy: 1,
            incrementSecondBy: 1,
            timeLabel: null,
            autoClose: !0,
            mainCalendar: "left",
            container: void 0,
            i18n: {
                previousMonth: "Previous Month",
                nextMonth: "Next Month",
                months: "January February March April May June July August September October November December".split(" "),
                weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                midnight: "Midnight",
                noon: "Noon"
            },
            theme: null,
            onSelect: null,
            onOpen: null,
            onClose: null,
            onDraw: null
        },
        N = function(a, b, d) {
            for (b += a.firstDay; 7 <= b;) b -= 7;
            return d ? a.i18n.weekdaysShort[b] : a.i18n.weekdays[b]
        },
        O = function(a) {
            var b = [],
                d = "false";
            if (a.isEmpty)
                if (a.showDaysInNextAndPreviousMonths) b.push("is-outside-current-month");
                else return '<td class="is-empty"></td>';
            a.isDisabled && b.push("is-disabled");
            a.isToday && b.push("is-today");
            a.isSelected && (b.push("is-selected"), d = "true");
            a.isInRange && b.push("is-inrange");
            a.isStartRange && b.push("is-startrange");
            a.isEndRange && b.push("is-endrange");
            return '<td data-day="' +
                a.day + '" class="' + b.join(" ") + '" aria-selected="' + d + '"><button class="pika-button pika-day" type="button" data-pika-year="' + a.year + '" data-pika-month="' + a.month + '" data-pika-day="' + a.day + '">' + a.day + "</button></td>"
        },
        P = function(a, b, d) {
            var c = new Date(d, 0, 1);
            return '<td class="pika-week">' + Math.ceil(((new Date(d, b, a) - c) / 864E5 + c.getDay() + 1) / 7) + "</td>"
        },
        Q = function(a, b) {
            return "<tr>" + (b ? a.reverse() : a).join("") + "</tr>"
        },
        J = function(a, b, d, c, l, h) {
            var e, g = a._o,
                k = d === g.minYear,
                f = d === g.maxYear;
            h = '<div id="' + h + '" class="pika-title" role="heading" aria-live="assertive">';
            var m = !0,
                p = !0;
            var n = [];
            for (e = 0; 12 > e; e++) n.push('<option value="' + (d === l ? e - b : 12 + e - b) + '"' + (e === c ? ' selected="selected"' : "") + (k && e < g.minMonth || f && e > g.maxMonth ? 'disabled="disabled"' : "") + ">" + g.i18n.months[e] + "</option>");
            l = '<div class="pika-label">' + g.i18n.months[c] + '<select class="pika-select pika-select-month" tabindex="-1">' + n.join("") + "</select></div>";
            if (D(g.yearRange)) {
                e = g.yearRange[0];
                var q = g.yearRange[1] + 1
            } else e = d - g.yearRange, q = 1 + d + g.yearRange;
            for (n = []; e < q && e <= g.maxYear; e++) e >= g.minYear && n.push('<option value="' +
                e + '"' + (e === d ? ' selected="selected"' : "") + ">" + e + "</option>");
            d = '<div class="pika-label">' + d + g.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + n.join("") + "</select></div>";
            h = g.showMonthAfterYear ? h + (d + l) : h + (l + d);
            k && (0 === c || g.minMonth >= c) && (m = !1);
            f && (11 === c || g.maxMonth <= c) && (p = !1);
            0 === b && (h += '<button class="pika-prev' + (m ? "" : " is-disabled") + '" type="button">' + g.i18n.previousMonth + "</button>");
            b === a._o.numberOfMonths - 1 && (h += '<button class="pika-next' + (p ? "" : " is-disabled") + '" type="button">' +
                g.i18n.nextMonth + "</button>");
            return h + "</div>"
        },
        E = function(a, b, d, c, l) {
            l = l || 1;
            d = '<td><select class="pika-select ' + d + '">';
            for (var h = 0; h < a; h += l) d += '<option value="' + h + '" ' + (h == b ? "selected" : "") + ">" + c(h) + "</option>";
            return d + "</select></td>"
        },
        R = function(a, b, d, c) {
            a = '<table cellpadding="0" cellspacing="0" class="pika-time"><tbody><tr>' + (null !== c.timeLabel ? '<td class="pika-time-label">' + c.timeLabel + "</td>" : "") + E(24, a, "pika-select-hour", function(a) {
                if (c.use24hour) return a;
                a = a % 12 + (12 > a ? " AM" : " PM");
                return "0 AM" ==
                    a ? c.i18n.midnight : "0 PM" == a ? c.i18n.noon : a
            }, c.incrementHourBy);
            c.showMinutes && (a += "<td>:</td>" + E(60, b, "pika-select-minute", function(a) {
                return 10 > a ? "0" + a : a
            }, c.incrementMinuteBy));
            c.showSeconds && (a += "<td>:</td>" + E(60, d, "pika-select-second", function(a) {
                return 10 > a ? "0" + a : a
            }, c.incrementSecondBy));
            return a + "</tr></tbody></table>"
        },
        H = function(a) {
            var b = this,
                d = b.config(a);
            b._onMouseDown = function(a) {
                if (b._v) {
                    a = a || window.event;
                    var c = a.target || a.srcElement;
                    if (c) {
                        if (!f(c, "is-disabled"))
                            if (!f(c, "pika-button") ||
                                f(c, "is-empty") || f(c.parentNode, "is-disabled")) f(c, "pika-prev") ? b.prevMonth() : f(c, "pika-next") && b.nextMonth();
                            else {
                                var h = new Date(c.getAttribute("data-pika-year"), c.getAttribute("data-pika-month"), c.getAttribute("data-pika-day")),
                                    e = b._d || d.defaultDate;
                                e && m(e) && d.showTime && (h.setHours(e.getHours()), h.setMinutes(e.getMinutes()), d.showSeconds && h.setSeconds(e.getSeconds()));
                                b.setDate(h);
                                d.bound && y(function() {
                                    d.autoClose && b.hide();
                                    d.field && d.field.blur()
                                }, 100)
                            }
                        if (f(c, "pika-select")) b._c = !0;
                        else if (a.preventDefault) a.preventDefault();
                        else return a.returnValue = !1
                    }
                }
            };
            b._onChange = function(a) {
                a = a || window.event;
                (a = a.target || a.srcElement) && (f(a, "pika-select-month") ? b.gotoMonth(a.value) : f(a, "pika-select-year") ? b.gotoYear(a.value) : f(a, "pika-select-hour") ? b.setTime(a.value) : f(a, "pika-select-minute") ? b.setTime(null, a.value) : f(a, "pika-select-second") && b.setTime(null, null, a.value))
            };
            b._onKeyChange = function(a) {
                a = a || window.event;
                if (b.isVisible()) switch (a.keyCode) {
                    case 13:
                    case 27:
                        d.field.blur();
                        break;
                    case 37:
                        a.preventDefault();
                        b.adjustDate("subtract",
                            1);
                        break;
                    case 38:
                        b.adjustDate("subtract", 7);
                        break;
                    case 39:
                        b.adjustDate("add", 1);
                        break;
                    case 40:
                        b.adjustDate("add", 7)
                }
            };
            b._onInputChange = function(a) {
                a.firedBy !== b && (a = n ? (a = p(d.field.value, d.inputFormats, d.formatStrict)) && a.isValid() ? a.toDate() : null : new Date(Date.parse(d.field.value)), m(a) && b.setDate(a), b._v || b.show())
            };
            b._onInputFocus = function() {
                b.show()
            };
            b._onInputClick = function() {
                b.show()
            };
            b._onInputBlur = function() {
                var a = k.activeElement;
                do
                    if (f(a, "pika-single")) return; while (a = a.parentNode);
                d.autoClose &&
                    !b._c && (b._b = y(function() {
                        b.hide()
                    }, 50));
                b._c = !1
            };
            b._onClick = function(a) {
                a = a || window.event;
                var c = a = a.target || a.srcElement;
                if (a) {
                    u || !f(a, "pika-select") || a.onchange || (a.setAttribute("onchange", "return;"), q(a, "change", b._onChange));
                    do
                        if (f(c, "pika-single") || c === d.trigger || d.showTime && f(c, "pika-time-container")) return; while (c = c.parentNode);
                    b._v && a !== d.trigger && c !== d.trigger && b.hide()
                }
            };
            b.el = k.createElement("div");
            b.el.className = "pika-single" + (d.isRTL ? " is-rtl" : "") + (d.theme ? " " + d.theme : "");
            q(b.el, "mousedown",
                b._onMouseDown, !0);
            q(b.el, "touchend", b._onMouseDown, !0);
            q(b.el, "change", b._onChange);
            q(k, "keydown", b._onKeyChange);
            d.field && (d.container ? d.container.appendChild(b.el) : d.bound ? k.body.appendChild(b.el) : d.field.parentNode.insertBefore(b.el, d.field.nextSibling), q(d.field, "change", b._onInputChange), d.defaultDate || (d.defaultDate = n && d.field.value ? p(d.field.value, d.inputFormats).toDate() : new Date(Date.parse(d.field.value)), d.setDefaultDate = !0));
            a = d.defaultDate;
            m(a) ? d.setDefaultDate ? b.setDate(a, !0) : b.gotoDate(a) :
                b.gotoDate(new Date);
            d.bound ? (this.hide(), b.el.className += " is-bound", q(d.trigger, "click", b._onInputClick), q(d.trigger, "focus", b._onInputFocus), q(d.trigger, "blur", b._onInputBlur)) : this.show()
        };
    H.prototype = {
        config: function(a) {
            this._o || (this._o = w({}, r, !0));
            a = w(this._o, a, !0);
            a.isRTL = !!a.isRTL;
            a.autoClose = !!a.autoClose;
            a.field = a.field && a.field.nodeName ? a.field : null;
            a.theme = "string" === typeof a.theme && a.theme ? a.theme : null;
            a.bound = !!(void 0 !== a.bound ? a.field && a.bound : a.field);
            a.trigger = a.trigger && a.trigger.nodeName ?
                a.trigger : a.field;
            a.disableWeekends = !!a.disableWeekends;
            a.disableDayFn = "function" === typeof a.disableDayFn ? a.disableDayFn : null;
            var b = parseInt(a.numberOfMonths, 10) || 1;
            a.numberOfMonths = 4 < b ? 4 : b;
            m(a.minDate) || (a.minDate = !1);
            m(a.maxDate) || (a.maxDate = !1);
            a.minDate && a.maxDate && a.maxDate < a.minDate && (a.maxDate = a.minDate = !1);
            a.minDate && this.setMinDate(a.minDate);
            a.maxDate && this.setMaxDate(a.maxDate);
            D(a.yearRange) ? (b = (new Date).getFullYear() - 10, a.yearRange[0] = parseInt(a.yearRange[0], 10) || b, a.yearRange[1] = parseInt(a.yearRange[1],
                10) || b) : (a.yearRange = Math.abs(parseInt(a.yearRange, 10)) || r.yearRange, 100 < a.yearRange && (a.yearRange = 100));
            null === a.format && (a.format = "YYYY-MM-DD", a.showTime && (a.format += " HH:mm:ss"));
            a.inputFormats || (a.inputFormats = a.format);
            return a
        },
        toString: function(a) {
            return m(this._d) ? n ? p(this._d).format(a || this._o.format) : this._o.showTime ? this._d.toString() : this._d.toDateString() : ""
        },
        getMoment: function() {
            return n ? p(this._d) : null
        },
        setMoment: function(a, b) {
            n && p.isMoment(a) && this.setDate(a.toDate(), b)
        },
        getDate: function() {
            return m(this._d) ?
                new Date(this._d.getTime()) : new Date
        },
        setTime: function(a, b, d) {
            this._d || (this._d = new Date, this._d.setHours(0, 0, 0, 0));
            a && this._d.setHours(a);
            b && this._d.setMinutes(b);
            d && this._d.setSeconds(d);
            this.setDate(this._d)
        },
        setDate: function(a, b) {
            if (!a) return this._d = null, this._o.field && (this._o.field.value = "", C(this._o.field, "change", {
                firedBy: this
            })), this.draw();
            "string" === typeof a && (a = new Date(Date.parse(a)));
            if (m(a)) {
                var d = this._o.minDate,
                    c = this._o.maxDate;
                m(d) && a < d ? a = d : m(c) && a > c && (a = c);
                this._d = new Date(a.getTime());
                this._o.showTime && !this._o.showSeconds ? this._d.setSeconds(0) : this._o.showTime || A(this._d);
                this.gotoDate(this._d);
                this._o.field && (this._o.field.value = this.toString(), C(this._o.field, "change", {
                    firedBy: this
                }));
                b || "function" !== typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate())
            }
        },
        gotoDate: function(a) {
            var b = !0;
            if (m(a)) {
                if (this.calendars) {
                    b = new Date(this.calendars[0].year, this.calendars[0].month, 1);
                    var d = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length -
                            1].month, 1),
                        c = a.getTime();
                    d.setMonth(d.getMonth() + 1);
                    d.setDate(d.getDate() - 1);
                    b = c < b.getTime() || d.getTime() < c
                }
                b && (this.calendars = [{
                    month: a.getMonth(),
                    year: a.getFullYear(),
                    hour: a.getHours(),
                    minute: a.getMinutes(),
                    second: a.getSeconds()
                }], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths));
                this.adjustCalendars()
            }
        },
        adjustDate: function(a, b) {
            var d = this.getDate(),
                c = 864E5 * parseInt(b),
                l;
            "add" === a ? l = new Date(d.valueOf() + c) : "subtract" === a && (l = new Date(d.valueOf() - c));
            n && ("add" ===
                a ? l = p(d).add(b, "days").toDate() : "subtract" === a && (l = p(d).subtract(b, "days").toDate()));
            this.setDate(l)
        },
        adjustCalendars: function() {
            this.calendars[0] = G(this.calendars[0]);
            for (var a = 1; a < this._o.numberOfMonths; a++) this.calendars[a] = G({
                month: this.calendars[0].month + a,
                year: this.calendars[0].year
            });
            this.draw()
        },
        gotoToday: function() {
            this.gotoDate(new Date)
        },
        gotoMonth: function(a) {
            isNaN(a) || (this.calendars[0].month = parseInt(a, 10), this.adjustCalendars())
        },
        nextMonth: function() {
            this.calendars[0].month++;
            this.adjustCalendars()
        },
        prevMonth: function() {
            this.calendars[0].month--;
            this.adjustCalendars()
        },
        gotoYear: function(a) {
            isNaN(a) || (this.calendars[0].year = parseInt(a, 10), this.adjustCalendars())
        },
        setMinDate: function(a) {
            a instanceof Date ? (this._o.showTime || A(a), this._o.minDate = a, this._o.minYear = a.getFullYear(), this._o.minMonth = a.getMonth()) : (this._o.minDate = r.minDate, this._o.minYear = r.minYear, this._o.minMonth = r.minMonth, this._o.startRange = r.startRange);
            this.draw()
        },
        setMaxDate: function(a) {
            a instanceof Date ? (this._o.showTime || A(a),
                this._o.maxDate = a, this._o.maxYear = a.getFullYear(), this._o.maxMonth = a.getMonth()) : (this._o.maxDate = r.maxDate, this._o.maxYear = r.maxYear, this._o.maxMonth = r.maxMonth, this._o.endRange = r.endRange);
            this.draw()
        },
        setStartRange: function(a) {
            this._o.startRange = a
        },
        setEndRange: function(a) {
            this._o.endRange = a
        },
        draw: function(a) {
            if (this._v || a) {
                var b = this._o,
                    d = b.minYear,
                    c = b.maxYear,
                    l = b.minMonth,
                    h = b.maxMonth;
                a = "";
                this._y <= d && (this._y = d, !isNaN(l) && this._m < l && (this._m = l));
                this._y >= c && (this._y = c, !isNaN(h) && this._m > h && (this._m =
                    h));
                d = "pika-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                for (c = 0; c < b.numberOfMonths; c++) a += '<div class="pika-lendar">' + J(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, d) + this.render(this.calendars[c].year, this.calendars[c].month, d) + "</div>";
                b.showTime && (d = this._d || this._o.defaultDate, a += '<div class="pika-time-container">' + R(d && m(d) ? d.getHours() : 0, d && m(d) ? d.getMinutes() : 0, d && m(d) ? d.getSeconds() : 0, b) + "</div>");
                this.el.innerHTML = a;
                b.bound && "hidden" !==
                    b.field.type && y(function() {
                        b.trigger.focus()
                    }, 1);
                if ("function" === typeof this._o.onDraw) this._o.onDraw(this);
                b.bound && b.field.setAttribute("aria-label", "Use the arrow keys to pick a date")
            }
        },
        adjustPosition: function() {
            var a;
            if (!this._o.container) {
                this.el.style.position = "absolute";
                var b = a = this._o.trigger;
                var d = this.el.offsetWidth;
                var c = this.el.offsetHeight;
                var l = window.innerWidth || k.documentElement.clientWidth;
                var h = window.innerHeight || k.documentElement.clientHeight;
                var e = window.pageYOffset || k.body.scrollTop ||
                    k.documentElement.scrollTop;
                if ("function" === typeof a.getBoundingClientRect) {
                    b = a.getBoundingClientRect();
                    var g = b.left + window.pageXOffset;
                    var f = b.bottom + window.pageYOffset
                } else
                    for (g = b.offsetLeft, f = b.offsetTop + b.offsetHeight; b = b.offsetParent;) g += b.offsetLeft, f += b.offsetTop;
                if (this._o.reposition && g + d > l || -1 < this._o.position.indexOf("right") && 0 < g - d + a.offsetWidth) g = g - d + a.offsetWidth;
                if (this._o.reposition && f + c > h + e || -1 < this._o.position.indexOf("top") && 0 < f - c - a.offsetHeight) f = f - c - a.offsetHeight;
                this.el.style.left =
                    g + "px";
                this.el.style.top = f + "px"
            }
        },
        render: function(a, b, d) {
            var c = this._o,
                f = new Date,
                h = M(a, b),
                e = (new Date(a, b, 1)).getDay(),
                g = [],
                k = [];
            c.showTime || A(f);
            0 < c.firstDay && (e -= c.firstDay, 0 > e && (e += 7));
            for (var n = 0 === b ? 11 : b - 1, p = 11 === b ? 0 : b + 1, q = 0 === b ? a - 1 : a, r = 11 === b ? a + 1 : a, v = M(q, n), u = h + e, B = u; 7 < B;) B -= 7;
            u += 7 - B;
            B = c.minDate ? new Date(c.minDate.getFullYear(), c.minDate.getMonth(), c.minDate.getDate()) : null;
            for (var w = c.maxDate ? new Date(c.maxDate.getFullYear(), c.maxDate.getMonth(), c.maxDate.getDate()) : null, x = 0, y = 0; x < u; x++) {
                var t =
                    new Date(a, b, 1 + (x - e)),
                    D = m(this._d) ? F(t, this._d) : !1,
                    E = F(t, f),
                    C = x < e || x >= h + e,
                    I = 1 + (x - e),
                    K = b,
                    L = a,
                    G = c.startRange && F(c.startRange, t),
                    H = c.endRange && F(c.endRange, t),
                    J = c.startRange && c.endRange && c.startRange < t && t < c.endRange,
                    z;
                !(z = B && t < B || w && t > w) && (z = c.disableWeekends) && (z = t.getDay(), z = 0 === z || 6 === z);
                t = z || c.disableDayFn && c.disableDayFn(t);
                C && (x < e ? (I = v + I, K = n, L = q) : (I -= h, K = p, L = r));
                k.push(O({
                    day: I,
                    month: K,
                    year: L,
                    isSelected: D,
                    isToday: E,
                    isDisabled: t,
                    isEmpty: C,
                    isStartRange: G,
                    isEndRange: H,
                    isInRange: J,
                    showDaysInNextAndPreviousMonths: c.showDaysInNextAndPreviousMonths
                }));
                7 === ++y && (c.showWeekNumber && k.unshift(P(x - e, b, a)), g.push(Q(k, c.isRTL)), k = [], y = 0)
            }
            b = [];
            c.showWeekNumber && b.push("<th></th>");
            for (a = 0; 7 > a; a++) b.push('<th scope="col"><abbr title="' + N(c, a) + '">' + N(c, a, !0) + "</abbr></th>");
            c = "<thead><tr>" + (c.isRTL ? b.reverse() : b).join("") + "</tr></thead>";
            return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + d + '">' + c + ("<tbody>" + g.join("") + "</tbody>") + "</table>"
        },
        isVisible: function() {
            return this._v
        },
        show: function() {
            if (!this.isVisible()) {
                var a =
                    this.el;
                var b = (" " + a.className + " ").replace(" is-hidden ", " ");
                b = b.trim ? b.trim() : b.replace(/^\s+|\s+$/g, "");
                a.className = b;
                this._v = !0;
                this.draw();
                this._o.bound && (q(k, "click", this._onClick), this.adjustPosition());
                "function" === typeof this._o.onOpen && this._o.onOpen.call(this)
            }
        },
        hide: function() {
            var a = this._v;
            if (!1 !== a) {
                this._o.bound && v(k, "click", this._onClick);
                this.el.style.position = "static";
                this.el.style.left = "auto";
                this.el.style.top = "auto";
                var b = this.el;
                f(b, "is-hidden") || (b.className = "" === b.className ?
                    "is-hidden" : b.className + " is-hidden");
                this._v = !1;
                void 0 !== a && "function" === typeof this._o.onClose && this._o.onClose.call(this)
            }
        },
        destroy: function() {
            this.hide();
            v(this.el, "mousedown", this._onMouseDown, !0);
            v(this.el, "touchend", this._onMouseDown, !0);
            v(this.el, "change", this._onChange);
            this._o.field && (v(this._o.field, "change", this._onInputChange), this._o.bound && (v(this._o.trigger, "click", this._onInputClick), v(this._o.trigger, "focus", this._onInputFocus), v(this._o.trigger, "blur", this._onInputBlur)));
            this.el.parentNode &&
                this.el.parentNode.removeChild(this.el)
        }
    };
    return H
});


/*
 Pikaday jQuery plugin.

 Copyright ? 2013 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
*/
(function(c, d) {
    "object" === typeof exports ? d(require("jquery"), require("../pikaday")) : "function" === typeof define && define.amd ? define(["jquery", "pikaday"], d) : d(c.jQuery, c.Pikaday)
})(this, function(c, d) {
    c.fn.pikaday = function() {
        var a = arguments;
        a && a.length || (a = [{}]);
        return this.each(function() {
            var e = c(this),
                b = e.data("pikaday");
            b instanceof d ? "string" === typeof a[0] && "function" === typeof b[a[0]] && (b[a[0]].apply(b, Array.prototype.slice.call(a, 1)), "destroy" === a[0] && e.removeData("pikaday")) : "object" === typeof a[0] &&
                (b = c.extend({}, a[0]), b.field = e[0], e.data("pikaday", new d(b)))
        })
    }
});


/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
! function(e, t) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], t);
    else if ("undefined" != typeof exports) t(module, exports);
    else {
        var n = {
            exports: {}
        };
        t(n, n.exports), e.autosize = n.exports
    }
}(this, function(e, t) {
    "use strict";
    var n, o, p = "function" == typeof Map ? new Map : (n = [], o = [], {
            has: function(e) {
                return -1 < n.indexOf(e)
            },
            get: function(e) {
                return o[n.indexOf(e)]
            },
            set: function(e, t) {
                -1 === n.indexOf(e) && (n.push(e), o.push(t))
            },
            delete: function(e) {
                var t = n.indexOf(e); - 1 < t && (n.splice(t, 1), o.splice(t, 1))
            }
        }),
        c = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch (e) {
        c = function(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !1), t
        }
    }

    function r(r) {
        if (r && r.nodeName && "TEXTAREA" === r.nodeName && !p.has(r)) {
            var e, n = null,
                o = null,
                i = null,
                d = function() {
                    r.clientWidth !== o && a()
                },
                l = function(t) {
                    window.removeEventListener("resize", d, !1), r.removeEventListener("input", a, !1), r.removeEventListener("keyup", a, !1), r.removeEventListener("autosize:destroy", l, !1), r.removeEventListener("autosize:update", a, !1), Object.keys(t).forEach(function(e) {
                        r.style[e] = t[e]
                    }), p.delete(r)
                }.bind(r, {
                    height: r.style.height,
                    resize: r.style.resize,
                    overflowY: r.style.overflowY,
                    overflowX: r.style.overflowX,
                    wordWrap: r.style.wordWrap
                });
            r.addEventListener("autosize:destroy", l, !1), "onpropertychange" in r && "oninput" in r && r.addEventListener("keyup", a, !1), window.addEventListener("resize", d, !1), r.addEventListener("input", a, !1), r.addEventListener("autosize:update", a, !1), r.style.overflowX = "hidden", r.style.wordWrap = "break-word", p.set(r, {
                destroy: l,
                update: a
            }), "vertical" === (e = window.getComputedStyle(r, null)).resize ? r.style.resize = "none" : "both" === e.resize && (r.style.resize = "horizontal"), n = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(n) && (n = 0), a()
        }

        function s(e) {
            var t = r.style.width;
            r.style.width = "0px", r.offsetWidth, r.style.width = t, r.style.overflowY = e
        }

        function u() {
            if (0 !== r.scrollHeight) {
                var e = function(e) {
                        for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                            node: e.parentNode,
                            scrollTop: e.parentNode.scrollTop
                        }), e = e.parentNode;
                        return t
                    }(r),
                    t = document.documentElement && document.documentElement.scrollTop;
                r.style.height = "", r.style.height = r.scrollHeight + n + "px", o = r.clientWidth, e.forEach(function(e) {
                    e.node.scrollTop = e.scrollTop
                }), t && (document.documentElement.scrollTop = t)
            }
        }

        function a() {
            u();
            var e = Math.round(parseFloat(r.style.height)),
                t = window.getComputedStyle(r, null),
                n = "content-box" === t.boxSizing ? Math.round(parseFloat(t.height)) : r.offsetHeight;
            if (n < e ? "hidden" === t.overflowY && (s("scroll"), u(), n = "content-box" === t.boxSizing ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight) : "hidden" !== t.overflowY && (s("hidden"), u(), n = "content-box" === t.boxSizing ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight), i !== n) {
                i = n;
                var o = c("autosize:resized");
                try {
                    r.dispatchEvent(o)
                } catch (e) {}
            }
        }
    }

    function i(e) {
        var t = p.get(e);
        t && t.destroy()
    }

    function d(e) {
        var t = p.get(e);
        t && t.update()
    }
    var l = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((l = function(e) {
        return e
    }).destroy = function(e) {
        return e
    }, l.update = function(e) {
        return e
    }) : ((l = function(e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
            return r(e)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], i), e
    }, l.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], d), e
    }), t.default = l, e.exports = t.default
});

/**
 * @license Rangy Inputs, a jQuery plug-in for selection and caret manipulation within textareas and text inputs.
 *
 * https://github.com/timdown/rangyinputs
 *
 * For range and selection features for contenteditable, see Rangy.

 * http://code.google.com/p/rangy/
 *
 * Depends on jQuery 1.0 or later.
 *
 * Copyright 2014, Tim Down
 * Licensed under the MIT license.
 * Version: 1.2.0
 * Build date: 30 November 2014
 */
! function(e) {
    function t(e, t) {
        var n = typeof e[t];
        return "function" === n || !("object" != n || !e[t]) || "unknown" == n
    }

    function n(e, t) {
        return typeof e[t] != x
    }

    function r(e, t) {
        return !("object" != typeof e[t] || !e[t])
    }

    function o(e) {
        window.console && window.console.log && window.console.log("RangyInputs not supported in your browser. Reason: " + e)
    }

    function a(e, t, n) {
        return 0 > t && (t += e.value.length), typeof n == x && (n = t), 0 > n && (n += e.value.length), {
            start: t,
            end: n
        }
    }

    function c(e, t, n) {
        return {
            start: t,
            end: n,
            length: n - t,
            text: e.value.slice(t, n)
        }
    }

    function l() {
        return r(document, "body") ? document.body : document.getElementsByTagName("body")[0]
    }
    var i, u, s, d, f, v, p, m, g, x = "undefined";
    e(document).ready(function() {
        function h(e, t) {
            var n = e.value,
                r = i(e),
                o = r.start;
            return {
                value: n.slice(0, o) + t + n.slice(r.end),
                index: o,
                replaced: r.text
            }
        }

        function y(e, t) {
            e.focus();
            var n = i(e);
            return u(e, n.start, n.end), "" == t ? document.execCommand("delete", !1, null) : document.execCommand("insertText", !1, t), {
                replaced: n.text,
                index: n.start
            }
        }

        function T(e, t) {
            e.focus();
            var n = h(e, t);
            return e.value = n.value, n
        }

        function E(e, t) {
            return function() {
                var n = this.jquery ? this[0] : this,
                    r = n.nodeName.toLowerCase();
                if (1 == n.nodeType && ("textarea" == r || "input" == r && /^(?:text|email|number|search|tel|url|password)$/i.test(n.type))) {
                    var o = [n].concat(Array.prototype.slice.call(arguments)),
                        a = e.apply(this, o);
                    if (!t) return a
                }
                return t ? this : void 0
            }
        }
        var S = document.createElement("textarea");
        if (l().appendChild(S), n(S, "selectionStart") && n(S, "selectionEnd")) i = function(e) {
            var t = e.selectionStart,
                n = e.selectionEnd;
            return c(e, t, n)
        }, u = function(e, t, n) {
            var r = a(e, t, n);
            e.selectionStart = r.start, e.selectionEnd = r.end
        }, g = function(e, t) {
            t ? e.selectionEnd = e.selectionStart : e.selectionStart = e.selectionEnd
        };
        else {
            if (!(t(S, "createTextRange") && r(document, "selection") && t(document.selection, "createRange"))) return l().removeChild(S), void o("No means of finding text input caret position");
            i = function(e) {
                var t, n, r, o, a = 0,
                    l = 0,
                    i = document.selection.createRange();
                return i && i.parentElement() == e && (r = e.value.length, t = e.value.replace(/\r\n/g, "\n"), n = e.createTextRange(), n.moveToBookmark(i.getBookmark()), o = e.createTextRange(), o.collapse(!1), n.compareEndPoints("StartToEnd", o) > -1 ? a = l = r : (a = -n.moveStart("character", -r), a += t.slice(0, a).split("\n").length - 1, n.compareEndPoints("EndToEnd", o) > -1 ? l = r : (l = -n.moveEnd("character", -r), l += t.slice(0, l).split("\n").length - 1))), c(e, a, l)
            };
            var w = function(e, t) {
                return t - (e.value.slice(0, t).split("\r\n").length - 1)
            };
            u = function(e, t, n) {
                var r = a(e, t, n),
                    o = e.createTextRange(),
                    c = w(e, r.start);
                o.collapse(!0), r.start == r.end ? o.move("character", c) : (o.moveEnd("character", w(e, r.end)), o.moveStart("character", c)), o.select()
            }, g = function(e, t) {
                var n = document.selection.createRange();
                n.collapse(t), n.select()
            }
        }
        l().removeChild(S);
        var b = function(e, t) {
            var n = h(e, t);
            try {
                var r = y(e, t);
                if (e.value == n.value) return b = y, r
            } catch (o) {}
            return b = T, e.value = n.value, n
        };
        d = function(e, t, n, r) {
            t != n && (u(e, t, n), b(e, "")), r && u(e, t)
        }, s = function(e) {
            u(e, b(e, "").index)
        }, m = function(e) {
            var t = b(e, "");
            return u(e, t.index), t.replaced
        };
        var R = function(e, t, n, r) {
            var o = t + n.length;
            if (r = "string" == typeof r ? r.toLowerCase() : "", ("collapsetoend" == r || "select" == r) && /[\r\n]/.test(n)) {
                var a = n.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                o = t + a.length;
                var c = t + a.indexOf("\n");
                "\r\n" == e.value.slice(c, c + 2) && (o += a.match(/\n/g).length)
            }
            switch (r) {
                case "collapsetostart":
                    u(e, t, t);
                    break;
                case "collapsetoend":
                    u(e, o, o);
                    break;
                case "select":
                    u(e, t, o)
            }
        };
        f = function(e, t, n, r) {
            u(e, n), b(e, t), "boolean" == typeof r && (r = r ? "collapseToEnd" : ""), R(e, n, t, r)
        }, v = function(e, t, n) {
            var r = b(e, t);
            R(e, r.index, t, n || "collapseToEnd")
        }, p = function(e, t, n, r) {
            typeof n == x && (n = t);
            var o = i(e),
                a = b(e, t + o.text + n);
            R(e, a.index + t.length, o.text, r || "select")
        }, e.fn.extend({
            getSelection: E(i, !1),
            setSelection: E(u, !0),
            collapseSelection: E(g, !0),
            deleteSelectedText: E(s, !0),
            deleteText: E(d, !0),
            extractSelectedText: E(m, !1),
            insertText: E(f, !0),
            replaceSelectedText: E(v, !0),
            surroundSelectedText: E(p, !0)
        })
    })
}(jQuery);

/*!
  SerializeJSON jQuery plugin.
  https://github.com/marioizquierdo/jquery.serializeJSON
  version 2.8.1 (Dec, 2016)

  Copyright (c) 2012, 2017 Mario Izquierdo
  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/
! function(a) {
    if ("function" == typeof define && define.amd) define(["jquery"], a);
    else if ("object" == typeof exports) {
        var b = require("jquery");
        module.exports = a(b)
    } else a(window.jQuery || window.Zepto || window.$)
}(function(a) {
    "use strict";
    a.fn.serializeJSON = function(b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o;
        return c = a.serializeJSON, d = this, e = c.setupOpts(b), f = d.serializeArray(), c.readCheckboxUncheckedValues(f, e, d), g = {}, a.each(f, function(a, b) {
            h = b.name, i = b.value, k = c.extractTypeAndNameWithNoType(h), l = k.nameWithNoType, m = k.type, m || (m = c.attrFromInputWithName(d, h, "data-value-type")), c.validateType(h, m, e), "skip" !== m && (n = c.splitInputNameIntoKeysArray(l), j = c.parseValue(i, h, m, e), o = !j && c.shouldSkipFalsy(d, h, l, m, e), o || c.deepSet(g, n, j, e))
        }), g
    }, a.serializeJSON = {
        defaultOptions: {
            checkboxUncheckedValue: void 0,
            parseNumbers: !1,
            parseBooleans: !1,
            parseNulls: !1,
            parseAll: !1,
            parseWithFunction: null,
            skipFalsyValuesForTypes: [],
            skipFalsyValuesForFields: [],
            customTypes: {},
            defaultTypes: {
                string: function(a) {
                    return String(a)
                },
                number: function(a) {
                    return Number(a)
                },
                boolean: function(a) {
                    var b = ["false", "null", "undefined", "", "0"];
                    return b.indexOf(a) === -1
                },
                null: function(a) {
                    var b = ["false", "null", "undefined", "", "0"];
                    return b.indexOf(a) === -1 ? a : null
                },
                array: function(a) {
                    return JSON.parse(a)
                },
                object: function(a) {
                    return JSON.parse(a)
                },
                auto: function(b) {
                    return a.serializeJSON.parseValue(b, null, null, {
                        parseNumbers: !0,
                        parseBooleans: !0,
                        parseNulls: !0
                    })
                },
                skip: null
            },
            useIntKeysAsArrayIndex: !1
        },
        setupOpts: function(b) {
            var c, d, e, f, g, h;
            h = a.serializeJSON, null == b && (b = {}), e = h.defaultOptions || {}, d = ["checkboxUncheckedValue", "parseNumbers", "parseBooleans", "parseNulls", "parseAll", "parseWithFunction", "skipFalsyValuesForTypes", "skipFalsyValuesForFields", "customTypes", "defaultTypes", "useIntKeysAsArrayIndex"];
            for (c in b)
                if (d.indexOf(c) === -1) throw new Error("serializeJSON ERROR: invalid option '" + c + "'. Please use one of " + d.join(", "));
            return f = function(a) {
                return b[a] !== !1 && "" !== b[a] && (b[a] || e[a])
            }, g = f("parseAll"), {
                checkboxUncheckedValue: f("checkboxUncheckedValue"),
                parseNumbers: g || f("parseNumbers"),
                parseBooleans: g || f("parseBooleans"),
                parseNulls: g || f("parseNulls"),
                parseWithFunction: f("parseWithFunction"),
                skipFalsyValuesForTypes: f("skipFalsyValuesForTypes"),
                skipFalsyValuesForFields: f("skipFalsyValuesForFields"),
                typeFunctions: a.extend({}, f("defaultTypes"), f("customTypes")),
                useIntKeysAsArrayIndex: f("useIntKeysAsArrayIndex")
            }
        },
        parseValue: function(b, c, d, e) {
            var f, g;
            return f = a.serializeJSON, g = b, e.typeFunctions && d && e.typeFunctions[d] ? g = e.typeFunctions[d](b) : e.parseNumbers && f.isNumeric(b) ? g = Number(b) : !e.parseBooleans || "true" !== b && "false" !== b ? e.parseNulls && "null" == b && (g = null) : g = "true" === b, e.parseWithFunction && !d && (g = e.parseWithFunction(g, c)), g
        },
        isObject: function(a) {
            return a === Object(a)
        },
        isUndefined: function(a) {
            return void 0 === a
        },
        isValidArrayIndex: function(a) {
            return /^[0-9]+$/.test(String(a))
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        optionKeys: function(a) {
            if (Object.keys) return Object.keys(a);
            var b, c = [];
            for (b in a) c.push(b);
            return c
        },
        readCheckboxUncheckedValues: function(b, c, d) {
            var e, f, g, h, i;
            null == c && (c = {}), i = a.serializeJSON, e = "input[type=checkbox][name]:not(:checked):not([disabled])", f = d.find(e).add(d.filter(e)), f.each(function(d, e) {
                if (g = a(e), h = g.attr("data-unchecked-value"), null == h && (h = c.checkboxUncheckedValue), null != h) {
                    if (e.name && e.name.indexOf("[][") !== -1) throw new Error("serializeJSON ERROR: checkbox unchecked values are not supported on nested arrays of objects like '" + e.name + "'. See https://github.com/marioizquierdo/jquery.serializeJSON/issues/67");
                    b.push({
                        name: e.name,
                        value: h
                    })
                }
            })
        },
        extractTypeAndNameWithNoType: function(a) {
            var b;
            return (b = a.match(/(.*):([^:]+)$/)) ? {
                nameWithNoType: b[1],
                type: b[2]
            } : {
                nameWithNoType: a,
                type: null
            }
        },
        shouldSkipFalsy: function(b, c, d, e, f) {
            var g = a.serializeJSON,
                h = g.attrFromInputWithName(b, c, "data-skip-falsy");
            if (null != h) return "false" !== h;
            var i = f.skipFalsyValuesForFields;
            if (i && (i.indexOf(d) !== -1 || i.indexOf(c) !== -1)) return !0;
            var j = f.skipFalsyValuesForTypes;
            return null == e && (e = "string"), !(!j || j.indexOf(e) === -1)
        },
        attrFromInputWithName: function(a, b, c) {
            var d, e, f;
            return d = b.replace(/(:|\.|\[|\]|\s)/g, "\\$1"), e = '[name="' + d + '"]', f = a.find(e).add(a.filter(e)), f.attr(c)
        },
        validateType: function(b, c, d) {
            var e, f;
            if (f = a.serializeJSON, e = f.optionKeys(d ? d.typeFunctions : f.defaultOptions.defaultTypes), c && e.indexOf(c) === -1) throw new Error("serializeJSON ERROR: Invalid type " + c + " found in input name '" + b + "', please use one of " + e.join(", "));
            return !0
        },
        splitInputNameIntoKeysArray: function(b) {
            var c, d;
            return d = a.serializeJSON, c = b.split("["), c = a.map(c, function(a) {
                return a.replace(/\]/g, "")
            }), "" === c[0] && c.shift(), c
        },
        deepSet: function(b, c, d, e) {
            var f, g, h, i, j, k;
            if (null == e && (e = {}), k = a.serializeJSON, k.isUndefined(b)) throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");
            if (!c || 0 === c.length) throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");
            f = c[0], 1 === c.length ? "" === f ? b.push(d) : b[f] = d : (g = c[1], "" === f && (i = b.length - 1, j = b[i], f = k.isObject(j) && (k.isUndefined(j[g]) || c.length > 2) ? i : i + 1), "" === g ? !k.isUndefined(b[f]) && a.isArray(b[f]) || (b[f] = []) : e.useIntKeysAsArrayIndex && k.isValidArrayIndex(g) ? !k.isUndefined(b[f]) && a.isArray(b[f]) || (b[f] = []) : !k.isUndefined(b[f]) && k.isObject(b[f]) || (b[f] = {}), h = c.slice(1), k.deepSet(b[f], h, d, e))
        }
    }
});

/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Clipboard = t()
    }
}(function() {
    var t, e, n;
    return function t(e, n, o) {
        function i(a, c) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!c && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var s = new Error("Cannot find module '" + a + "'");
                    throw s.code = "MODULE_NOT_FOUND", s
                }
                var u = n[a] = {
                    exports: {}
                };
                e[a][0].call(u.exports, function(t) {
                    var n = e[a][1][t];
                    return i(n || t)
                }, u, u.exports, t, e, n, o)
            }
            return n[a].exports
        }
        for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
        return i
    }({
        1: [function(t, e, n) {
            function o(t, e) {
                for (; t && t.nodeType !== i;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
            var i = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var r = Element.prototype;
                r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
            }
            e.exports = o
        }, {}],
        2: [function(t, e, n) {
            function o(t, e, n, o, r) {
                var a = i.apply(this, arguments);
                return t.addEventListener(n, a, r), {
                    destroy: function() {
                        t.removeEventListener(n, a, r)
                    }
                }
            }

            function i(t, e, n, o) {
                return function(n) {
                    n.delegateTarget = r(n.target, e), n.delegateTarget && o.call(t, n)
                }
            }
            var r = t("./closest");
            e.exports = o
        }, {
            "./closest": 1
        }],
        3: [function(t, e, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            }, n.string = function(t) {
                return "string" == typeof t || t instanceof String
            }, n.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }, {}],
        4: [function(t, e, n) {
            function o(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!c.string(e)) throw new TypeError("Second argument must be a String");
                if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
                if (c.node(t)) return i(t, e, n);
                if (c.nodeList(t)) return r(t, e, n);
                if (c.string(t)) return a(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function i(t, e, n) {
                return t.addEventListener(e, n), {
                    destroy: function() {
                        t.removeEventListener(e, n)
                    }
                }
            }

            function r(t, e, n) {
                return Array.prototype.forEach.call(t, function(t) {
                    t.addEventListener(e, n)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(t, function(t) {
                            t.removeEventListener(e, n)
                        })
                    }
                }
            }

            function a(t, e, n) {
                return l(document.body, t, e, n)
            }
            var c = t("./is"),
                l = t("delegate");
            e.exports = o
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function(t, e, n) {
            function o(t) {
                var e;
                if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var n = t.hasAttribute("readonly");
                    n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
                } else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var o = window.getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(t), o.removeAllRanges(), o.addRange(i), e = o.toString()
                }
                return e
            }
            e.exports = o
        }, {}],
        6: [function(t, e, n) {
            function o() {}
            o.prototype = {
                on: function(t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function(t, e, n) {
                    function o() {
                        i.off(t, o), e.apply(n, arguments)
                    }
                    var i = this;
                    return o._ = e, this.on(t, o, n)
                },
                emit: function(t) {
                    var e = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[t] || []).slice(),
                        o = 0,
                        i = n.length;
                    for (o; o < i; o++) n[o].fn.apply(n[o].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {}),
                        o = n[t],
                        i = [];
                    if (o && e)
                        for (var r = 0, a = o.length; r < a; r++) o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
                    return i.length ? n[t] = i : delete n[t], this
                }
            }, e.exports = o
        }, {}],
        7: [function(e, n, o) {
            ! function(i, r) {
                if ("function" == typeof t && t.amd) t(["module", "select"], r);
                else if (void 0 !== o) r(n, e("select"));
                else {
                    var a = {
                        exports: {}
                    };
                    r(a, i.select), i.clipboardAction = a.exports
                }
            }(this, function(t, e) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var i = n(e),
                    r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    a = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var o = e[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                            }
                        }
                        return function(e, n, o) {
                            return n && t(e.prototype, n), o && t(e, o), e
                        }
                    }(),
                    c = function() {
                        function t(e) {
                            o(this, t), this.resolveOptions(e), this.initSelection()
                        }
                        return a(t, [{
                            key: "resolveOptions",
                            value: function t() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function t() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function t() {
                                var e = this,
                                    n = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function() {
                                    return e.removeFake()
                                }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[n ? "right" : "left"] = "-9999px";
                                var o = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = o + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function t() {
                                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function t() {
                                this.selectedText = (0, i.default)(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function t() {
                                var e = void 0;
                                try {
                                    e = document.execCommand(this.action)
                                } catch (t) {
                                    e = !1
                                }
                                this.handleResult(e)
                            }
                        }, {
                            key: "handleResult",
                            value: function t(e) {
                                this.emitter.emit(e ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function t() {
                                this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function t() {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function t() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function t() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function t(e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function t() {
                                return this._target
                            }
                        }]), t
                    }();
                t.exports = c
            })
        }, {
            select: 5
        }],
        8: [function(e, n, o) {
            ! function(i, r) {
                if ("function" == typeof t && t.amd) t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r);
                else if (void 0 !== o) r(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                else {
                    var a = {
                        exports: {}
                    };
                    r(a, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = a.exports
                }
            }(this, function(t, e, n, o) {
                "use strict";

                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function c(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function l(t, e) {
                    var n = "data-clipboard-" + t;
                    if (e.hasAttribute(n)) return e.getAttribute(n)
                }
                var s = i(e),
                    u = i(n),
                    f = i(o),
                    d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    h = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var o = e[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                            }
                        }
                        return function(e, n, o) {
                            return n && t(e.prototype, n), o && t(e, o), e
                        }
                    }(),
                    p = function(t) {
                        function e(t, n) {
                            r(this, e);
                            var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return o.resolveOptions(n), o.listenClick(t), o
                        }
                        return c(e, t), h(e, [{
                            key: "resolveOptions",
                            value: function t() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === d(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function t(e) {
                                var n = this;
                                this.listener = (0, f.default)(e, "click", function(t) {
                                    return n.onClick(t)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function t(e) {
                                var n = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s.default({
                                    action: this.action(n),
                                    target: this.target(n),
                                    text: this.text(n),
                                    container: this.container,
                                    trigger: n,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function t(e) {
                                return l("action", e)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function t(e) {
                                var n = l("target", e);
                                if (n) return document.querySelector(n)
                            }
                        }, {
                            key: "defaultText",
                            value: function t(e) {
                                return l("text", e)
                            }
                        }, {
                            key: "destroy",
                            value: function t() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function t() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    n = "string" == typeof e ? [e] : e,
                                    o = !!document.queryCommandSupported;
                                return n.forEach(function(t) {
                                    o = o && !!document.queryCommandSupported(t)
                                }), o
                            }
                        }]), e
                    }(u.default);
                t.exports = p
            })
        }, {
            "./clipboard-action": 7,
            "good-listener": 4,
            "tiny-emitter": 6
        }]
    }, {}, [8])(8)
});

/*!
 * jQuery Mobile Events
 * by Ben Major
 *
 * Copyright 2011-2017, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

"use strict";
! function(e) {
    e.attrFn = e.attrFn || {};
    var t = "ontouchstart" in window,
        a = {
            tap_pixel_range: 5,
            swipe_h_threshold: 50,
            swipe_v_threshold: 50,
            taphold_threshold: 750,
            doubletap_int: 500,
            shake_threshold: 15,
            touch_capable: t,
            orientation_support: "orientation" in window && "onorientationchange" in window,
            startevent: t ? "touchstart" : "mousedown",
            endevent: t ? "touchend" : "mouseup",
            moveevent: t ? "touchmove" : "mousemove",
            tapevent: t ? "tap" : "click",
            scrollevent: t ? "touchmove" : "scroll",
            hold_timer: null,
            tap_timer: null
        };
    e.touch = {}, e.isTouchCapable = function() {
        return a.touch_capable
    }, e.getStartEvent = function() {
        return a.startevent
    }, e.getEndEvent = function() {
        return a.endevent
    }, e.getMoveEvent = function() {
        return a.moveevent
    }, e.getTapEvent = function() {
        return a.tapevent
    }, e.getScrollEvent = function() {
        return a.scrollevent
    }, e.touch.setSwipeThresholdX = function(e) {
        if ("number" != typeof e) throw new Error("Threshold parameter must be a type of number");
        a.swipe_h_threshold = e
    }, e.touch.setSwipeThresholdY = function(e) {
        if ("number" != typeof e) throw new Error("Threshold parameter must be a type of number");
        a.swipe_v_threshold = e
    }, e.touch.setDoubleTapInt = function(e) {
        if ("number" != typeof e) throw new Error("Interval parameter must be a type of number");
        a.doubletap_int = e
    }, e.touch.setTapHoldThreshold = function(e) {
        if ("number" != typeof e) throw new Error("Threshold parameter must be a type of number");
        a.taphold_threshold = e
    }, e.touch.setTapRange = function(e) {
        if ("number" != typeof e) throw new Error("Ranger parameter must be a type of number");
        a.tap_pixel_range = threshold
    }, e.each(["tapstart", "tapend", "tapmove", "tap", "singletap", "doubletap", "taphold", "swipe", "swipeup", "swiperight", "swipedown", "swipeleft", "swipeend", "scrollstart", "scrollend", "orientationchange", "tap2", "taphold2"], function(t, a) {
        e.fn[a] = function(e) {
            return e ? this.on(a, e) : this.trigger(a)
        }, e.attrFn[a] = !0
    }), e.event.special.tapstart = {
        setup: function() {
            var t = this,
                o = e(t);
            o.on(a.startevent, function e(n) {
                if (o.data("callee", e), n.which && 1 !== n.which) return !1;
                var i = n.originalEvent,
                    r = {
                        position: {
                            x: a.touch_capable ? i.touches[0].pageX : n.pageX,
                            y: a.touch_capable ? i.touches[0].pageY : n.pageY
                        },
                        offset: {
                            x: a.touch_capable ? Math.round(i.changedTouches[0].pageX - (o.offset() ? o.offset().left : 0)) : Math.round(n.pageX - (o.offset() ? o.offset().left : 0)),
                            y: a.touch_capable ? Math.round(i.changedTouches[0].pageY - (o.offset() ? o.offset().top : 0)) : Math.round(n.pageY - (o.offset() ? o.offset().top : 0))
                        },
                        time: Date.now(),
                        target: n.target
                    };
                return w(t, "tapstart", n, r), !0
            })
        },
        remove: function() {
            e(this).off(a.startevent, e(this).data.callee)
        }
    }, e.event.special.tapmove = {
        setup: function() {
            var t = this,
                o = e(t);
            o.on(a.moveevent, function e(n) {
                o.data("callee", e);
                var i = n.originalEvent,
                    r = {
                        position: {
                            x: a.touch_capable ? i.touches[0].pageX : n.pageX,
                            y: a.touch_capable ? i.touches[0].pageY : n.pageY
                        },
                        offset: {
                            x: a.touch_capable ? Math.round(i.changedTouches[0].pageX - (o.offset() ? o.offset().left : 0)) : Math.round(n.pageX - (o.offset() ? o.offset().left : 0)),
                            y: a.touch_capable ? Math.round(i.changedTouches[0].pageY - (o.offset() ? o.offset().top : 0)) : Math.round(n.pageY - (o.offset() ? o.offset().top : 0))
                        },
                        time: Date.now(),
                        target: n.target
                    };
                return w(t, "tapmove", n, r), !0
            })
        },
        remove: function() {
            e(this).off(a.moveevent, e(this).data.callee)
        }
    }, e.event.special.tapend = {
        setup: function() {
            var t = this,
                o = e(t);
            o.on(a.endevent, function e(n) {
                o.data("callee", e);
                var i = n.originalEvent,
                    r = {
                        position: {
                            x: a.touch_capable ? i.changedTouches[0].pageX : n.pageX,
                            y: a.touch_capable ? i.changedTouches[0].pageY : n.pageY
                        },
                        offset: {
                            x: a.touch_capable ? Math.round(i.changedTouches[0].pageX - (o.offset() ? o.offset().left : 0)) : Math.round(n.pageX - (o.offset() ? o.offset().left : 0)),
                            y: a.touch_capable ? Math.round(i.changedTouches[0].pageY - (o.offset() ? o.offset().top : 0)) : Math.round(n.pageY - (o.offset() ? o.offset().top : 0))
                        },
                        time: Date.now(),
                        target: n.target
                    };
                return w(t, "tapend", n, r), !0
            })
        },
        remove: function() {
            e(this).off(a.endevent, e(this).data.callee)
        }
    }, e.event.special.taphold = {
        setup: function() {
            var t, o = this,
                n = e(o),
                i = {
                    x: 0,
                    y: 0
                },
                r = 0,
                s = 0;
            n.on(a.startevent, function e(p) {
                if (p.which && 1 !== p.which) return !1;
                n.data("tapheld", !1), t = p.target;
                var h = p.originalEvent,
                    c = Date.now();
                a.touch_capable ? h.touches[0].pageX : p.pageX, a.touch_capable ? h.touches[0].pageY : p.pageY, a.touch_capable ? (h.touches[0].pageX, h.touches[0].target.offsetLeft) : p.offsetX, a.touch_capable ? (h.touches[0].pageY, h.touches[0].target.offsetTop) : p.offsetY;
                i.x = p.originalEvent.targetTouches ? p.originalEvent.targetTouches[0].pageX : p.pageX, i.y = p.originalEvent.targetTouches ? p.originalEvent.targetTouches[0].pageY : p.pageY, r = i.x, s = i.y;
                var u = n.parent().data("threshold") ? n.parent().data("threshold") : n.data("threshold"),
                    f = void 0 !== u && !1 !== u && parseInt(u) ? parseInt(u) : a.taphold_threshold;
                return a.hold_timer = window.setTimeout(function() {
                    var u = i.x - r,
                        f = i.y - s;
                    if (p.target == t && (i.x == r && i.y == s || u >= -a.tap_pixel_range && u <= a.tap_pixel_range && f >= -a.tap_pixel_range && f <= a.tap_pixel_range)) {
                        n.data("tapheld", !0);
                        for (var l = Date.now() - c, g = p.originalEvent.targetTouches ? p.originalEvent.targetTouches : [p], d = [], v = 0; v < g.length; v++) {
                            var _ = {
                                position: {
                                    x: a.touch_capable ? h.changedTouches[v].pageX : p.pageX,
                                    y: a.touch_capable ? h.changedTouches[v].pageY : p.pageY
                                },
                                offset: {
                                    x: a.touch_capable ? Math.round(h.changedTouches[v].pageX - (n.offset() ? n.offset().left : 0)) : Math.round(p.pageX - (n.offset() ? n.offset().left : 0)),
                                    y: a.touch_capable ? Math.round(h.changedTouches[v].pageY - (n.offset() ? n.offset().top : 0)) : Math.round(p.pageY - (n.offset() ? n.offset().top : 0))
                                },
                                time: Date.now(),
                                target: p.target,
                                duration: l
                            };
                            d.push(_)
                        }
                        var T = 2 == g.length ? "taphold2" : "taphold";
                        n.data("callee1", e), w(o, T, p, d)
                    }
                }, f), !0
            }).on(a.endevent, function e() {
                n.data("callee2", e), n.data("tapheld", !1), window.clearTimeout(a.hold_timer)
            }).on(a.moveevent, function e(t) {
                n.data("callee3", e), r = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageX : t.pageX, s = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageY : t.pageY
            })
        },
        remove: function() {
            e(this).off(a.startevent, e(this).data.callee1).off(a.endevent, e(this).data.callee2).off(a.moveevent, e(this).data.callee3)
        }
    }, e.event.special.doubletap = {
        setup: function() {
            var t, o, n = this,
                i = e(n),
                r = null,
                s = !1;
            i.on(a.startevent, function t(n) {
                return (!n.which || 1 === n.which) && (i.data("doubletapped", !1), n.target, i.data("callee1", t), o = n.originalEvent, r || (r = {
                    position: {
                        x: a.touch_capable ? o.touches[0].pageX : n.pageX,
                        y: a.touch_capable ? o.touches[0].pageY : n.pageY
                    },
                    offset: {
                        x: a.touch_capable ? Math.round(o.changedTouches[0].pageX - (i.offset() ? i.offset().left : 0)) : Math.round(n.pageX - (i.offset() ? i.offset().left : 0)),
                        y: a.touch_capable ? Math.round(o.changedTouches[0].pageY - (i.offset() ? i.offset().top : 0)) : Math.round(n.pageY - (i.offset() ? i.offset().top : 0))
                    },
                    time: Date.now(),
                    target: n.target,
                    element: n.originalEvent.srcElement,
                    index: e(n.target).index()
                }), !0)
            }).on(a.endevent, function p(h) {
                var c = Date.now(),
                    u = c - (i.data("lastTouch") || c + 1);
                if (window.clearTimeout(t), i.data("callee2", p), u < a.doubletap_int && e(h.target).index() == r.index && u > 100) {
                    i.data("doubletapped", !0), window.clearTimeout(a.tap_timer);
                    var f = {
                            position: {
                                x: a.touch_capable ? h.originalEvent.changedTouches[0].pageX : h.pageX,
                                y: a.touch_capable ? h.originalEvent.changedTouches[0].pageY : h.pageY
                            },
                            offset: {
                                x: a.touch_capable ? Math.round(o.changedTouches[0].pageX - (i.offset() ? i.offset().left : 0)) : Math.round(h.pageX - (i.offset() ? i.offset().left : 0)),
                                y: a.touch_capable ? Math.round(o.changedTouches[0].pageY - (i.offset() ? i.offset().top : 0)) : Math.round(h.pageY - (i.offset() ? i.offset().top : 0))
                            },
                            time: Date.now(),
                            target: h.target,
                            element: h.originalEvent.srcElement,
                            index: e(h.target).index()
                        },
                        l = {
                            firstTap: r,
                            secondTap: f,
                            interval: f.time - r.time
                        };
                    s || (w(n, "doubletap", h, l), r = null), s = !0, window.setTimeout(function() {
                        s = !1
                    }, a.doubletap_int)
                } else i.data("lastTouch", c), t = window.setTimeout(function() {
                    r = null, window.clearTimeout(t)
                }, a.doubletap_int, [h]);
                i.data("lastTouch", c)
            })
        },
        remove: function() {
            e(this).off(a.startevent, e(this).data.callee1).off(a.endevent, e(this).data.callee2)
        }
    }, e.event.special.singletap = {
        setup: function() {
            var t = this,
                o = e(t),
                n = null,
                i = null,
                r = {
                    x: 0,
                    y: 0
                };
            o.on(a.startevent, function e(t) {
                return (!t.which || 1 === t.which) && (i = Date.now(), n = t.target, o.data("callee1", e), r.x = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageX : t.pageX, r.y = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageY : t.pageY, !0)
            }).on(a.endevent, function e(s) {
                if (o.data("callee2", e), s.target == n) {
                    var p = s.originalEvent.changedTouches ? s.originalEvent.changedTouches[0].pageX : s.pageX,
                        h = s.originalEvent.changedTouches ? s.originalEvent.changedTouches[0].pageY : s.pageY;
                    a.tap_timer = window.setTimeout(function() {
                        var e = r.x - p,
                            n = r.y - h;
                        if (!o.data("doubletapped") && !o.data("tapheld") && (r.x == p && r.y == h || e >= -a.tap_pixel_range && e <= a.tap_pixel_range && n >= -a.tap_pixel_range && n <= a.tap_pixel_range)) {
                            var c = s.originalEvent,
                                u = {
                                    position: {
                                        x: a.touch_capable ? c.changedTouches[0].pageX : s.pageX,
                                        y: a.touch_capable ? c.changedTouches[0].pageY : s.pageY
                                    },
                                    offset: {
                                        x: a.touch_capable ? Math.round(c.changedTouches[0].pageX - (o.offset() ? o.offset().left : 0)) : Math.round(s.pageX - (o.offset() ? o.offset().left : 0)),
                                        y: a.touch_capable ? Math.round(c.changedTouches[0].pageY - (o.offset() ? o.offset().top : 0)) : Math.round(s.pageY - (o.offset() ? o.offset().top : 0))
                                    },
                                    time: Date.now(),
                                    target: s.target
                                };
                            u.time - i < a.taphold_threshold && w(t, "singletap", s, u)
                        }
                    }, a.doubletap_int)
                }
            })
        },
        remove: function() {
            e(this).off(a.startevent, e(this).data.callee1).off(a.endevent, e(this).data.callee2)
        }
    }, e.event.special.tap = {
        setup: function() {
            var t, o, n = this,
                i = e(n),
                r = !1,
                s = null,
                p = {
                    x: 0,
                    y: 0
                };
            i.on(a.startevent, function e(a) {
                return i.data("callee1", e), (!a.which || 1 === a.which) && (r = !0, p.x = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageX : a.pageX, p.y = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageY : a.pageY, t = Date.now(), s = a.target, o = a.originalEvent.targetTouches ? a.originalEvent.targetTouches : [a], !0)
            }).on(a.endevent, function e(h) {
                i.data("callee2", e);
                var c = h.originalEvent.targetTouches ? h.originalEvent.changedTouches[0].pageX : h.pageX,
                    u = h.originalEvent.targetTouches ? h.originalEvent.changedTouches[0].pageY : h.pageY,
                    f = p.x - c,
                    l = p.y - u;
                if (s == h.target && r && Date.now() - t < a.taphold_threshold && (p.x == c && p.y == u || f >= -a.tap_pixel_range && f <= a.tap_pixel_range && l >= -a.tap_pixel_range && l <= a.tap_pixel_range)) {
                    for (var g = h.originalEvent, d = [], v = 0; v < o.length; v++) {
                        var _ = {
                            position: {
                                x: a.touch_capable ? g.changedTouches[v].pageX : h.pageX,
                                y: a.touch_capable ? g.changedTouches[v].pageY : h.pageY
                            },
                            offset: {
                                x: a.touch_capable ? Math.round(g.changedTouches[v].pageX - (i.offset() ? i.offset().left : 0)) : Math.round(h.pageX - (i.offset() ? i.offset().left : 0)),
                                y: a.touch_capable ? Math.round(g.changedTouches[v].pageY - (i.offset() ? i.offset().top : 0)) : Math.round(h.pageY - (i.offset() ? i.offset().top : 0))
                            },
                            time: Date.now(),
                            target: h.target
                        };
                        d.push(_)
                    }
                    var T = 2 == o.length ? "tap2" : "tap";
                    w(n, T, h, d)
                }
            })
        },
        remove: function() {
            e(this).off(a.startevent, e(this).data.callee1).off(a.endevent, e(this).data.callee2)
        }
    }, e.event.special.swipe = {
        setup: function() {
            var t, o = e(this),
                n = !1,
                i = !1,
                r = {
                    x: 0,
                    y: 0
                },
                s = {
                    x: 0,
                    y: 0
                };
            o.on(a.startevent, function i(p) {
                (o = e(p.currentTarget)).data("callee1", i), r.x = p.originalEvent.targetTouches ? p.originalEvent.targetTouches[0].pageX : p.pageX, r.y = p.originalEvent.targetTouches ? p.originalEvent.targetTouches[0].pageY : p.pageY, s.x = r.x, s.y = r.y, n = !0;
                var h = p.originalEvent;
                t = {
                    position: {
                        x: a.touch_capable ? h.touches[0].pageX : p.pageX,
                        y: a.touch_capable ? h.touches[0].pageY : p.pageY
                    },
                    offset: {
                        x: a.touch_capable ? Math.round(h.changedTouches[0].pageX - (o.offset() ? o.offset().left : 0)) : Math.round(p.pageX - (o.offset() ? o.offset().left : 0)),
                        y: a.touch_capable ? Math.round(h.changedTouches[0].pageY - (o.offset() ? o.offset().top : 0)) : Math.round(p.pageY - (o.offset() ? o.offset().top : 0))
                    },
                    time: Date.now(),
                    target: p.target
                }
            }), o.on(a.moveevent, function p(h) {
                var c;
                (o = e(h.currentTarget)).data("callee2", p), s.x = h.originalEvent.targetTouches ? h.originalEvent.targetTouches[0].pageX : h.pageX, s.y = h.originalEvent.targetTouches ? h.originalEvent.targetTouches[0].pageY : h.pageY;
                var u = o.parent().data("xthreshold") ? o.parent().data("xthreshold") : o.data("xthreshold"),
                    f = o.parent().data("ythreshold") ? o.parent().data("ythreshold") : o.data("ythreshold"),
                    l = void 0 !== u && !1 !== u && parseInt(u) ? parseInt(u) : a.swipe_h_threshold,
                    g = void 0 !== f && !1 !== f && parseInt(f) ? parseInt(f) : a.swipe_v_threshold;
                if (r.y > s.y && r.y - s.y > g && (c = "swipeup"), r.x < s.x && s.x - r.x > l && (c = "swiperight"), r.y < s.y && s.y - r.y > g && (c = "swipedown"), r.x > s.x && r.x - s.x > l && (c = "swipeleft"), void 0 != c && n) {
                    r.x = 0, r.y = 0, s.x = 0, s.y = 0, n = !1;
                    var d = h.originalEvent,
                        v = {
                            position: {
                                x: a.touch_capable ? d.touches[0].pageX : h.pageX,
                                y: a.touch_capable ? d.touches[0].pageY : h.pageY
                            },
                            offset: {
                                x: a.touch_capable ? Math.round(d.changedTouches[0].pageX - (o.offset() ? o.offset().left : 0)) : Math.round(h.pageX - (o.offset() ? o.offset().left : 0)),
                                y: a.touch_capable ? Math.round(d.changedTouches[0].pageY - (o.offset() ? o.offset().top : 0)) : Math.round(h.pageY - (o.offset() ? o.offset().top : 0))
                            },
                            time: Date.now(),
                            target: h.target
                        },
                        w = Math.abs(t.position.x - v.position.x),
                        _ = Math.abs(t.position.y - v.position.y),
                        T = {
                            startEvnt: t,
                            endEvnt: v,
                            direction: c.replace("swipe", ""),
                            xAmount: w,
                            yAmount: _,
                            duration: v.time - t.time
                        };
                    i = !0, o.trigger("swipe", T).trigger(c, T)
                }
            }), o.on(a.endevent, function r(s) {
                var p = "";
                if ((o = e(s.currentTarget)).data("callee3", r), i) {
                    var h = o.data("xthreshold"),
                        c = o.data("ythreshold"),
                        u = void 0 !== h && !1 !== h && parseInt(h) ? parseInt(h) : a.swipe_h_threshold,
                        f = void 0 !== c && !1 !== c && parseInt(c) ? parseInt(c) : a.swipe_v_threshold,
                        l = s.originalEvent,
                        g = {
                            position: {
                                x: a.touch_capable ? l.changedTouches[0].pageX : s.pageX,
                                y: a.touch_capable ? l.changedTouches[0].pageY : s.pageY
                            },
                            offset: {
                                x: a.touch_capable ? Math.round(l.changedTouches[0].pageX - (o.offset() ? o.offset().left : 0)) : Math.round(s.pageX - (o.offset() ? o.offset().left : 0)),
                                y: a.touch_capable ? Math.round(l.changedTouches[0].pageY - (o.offset() ? o.offset().top : 0)) : Math.round(s.pageY - (o.offset() ? o.offset().top : 0))
                            },
                            time: Date.now(),
                            target: s.target
                        };
                    t.position.y > g.position.y && t.position.y - g.position.y > f && (p = "swipeup"), t.position.x < g.position.x && g.position.x - t.position.x > u && (p = "swiperight"), t.position.y < g.position.y && g.position.y - t.position.y > f && (p = "swipedown"), t.position.x > g.position.x && t.position.x - g.position.x > u && (p = "swipeleft");
                    var d = Math.abs(t.position.x - g.position.x),
                        v = Math.abs(t.position.y - g.position.y),
                        w = {
                            startEvnt: t,
                            endEvnt: g,
                            direction: p.replace("swipe", ""),
                            xAmount: d,
                            yAmount: v,
                            duration: g.time - t.time
                        };
                    o.trigger("swipeend", w)
                }
                n = !1, i = !1
            })
        },
        remove: function() {
            e(this).off(a.startevent, e(this).data.callee1).off(a.moveevent, e(this).data.callee2).off(a.endevent, e(this).data.callee3)
        }
    }, e.event.special.scrollstart = {
        setup: function() {
            var t, o, n = this,
                i = e(n);

            function r(e, a) {
                w(n, (t = a) ? "scrollstart" : "scrollend", e)
            }
            i.on(a.scrollevent, function e(a) {
                i.data("callee", e), t || r(a, !0), clearTimeout(o), o = setTimeout(function() {
                    r(a, !1)
                }, 50)
            })
        },
        remove: function() {
            e(this).off(a.scrollevent, e(this).data.callee)
        }
    };
    var o, n, i, r, s = e(window),
        p = {
            0: !0,
            180: !0
        };
    if (a.orientation_support) {
        var h = window.innerWidth || s.width(),
            c = window.innerHeight || s.height();
        i = h > c && h - c > 50, r = p[window.orientation], (i && r || !i && !r) && (p = {
            "-90": !0,
            90: !0
        })
    }

    function u() {
        var e = o();
        e !== n && (n = e, s.trigger("orientationchange"))
    }
    e.event.special.orientationchange = {
        setup: function() {
            return !a.orientation_support && (n = o(), s.on("throttledresize", u), !0)
        },
        teardown: function() {
            return !a.orientation_support && (s.off("throttledresize", u), !0)
        },
        add: function(e) {
            var t = e.handler;
            e.handler = function(e) {
                return e.orientation = o(), t.apply(this, arguments)
            }
        }
    }, e.event.special.orientationchange.orientation = o = function() {
        var e = document.documentElement;
        return (a.orientation_support ? p[window.orientation] : e && e.clientWidth / e.clientHeight < 1.1) ? "portrait" : "landscape"
    }, e.event.special.throttledresize = {
        setup: function() {
            e(this).on("resize", d)
        },
        teardown: function() {
            e(this).off("resize", d)
        }
    };
    var f, l, g, d = function() {
            l = Date.now(), (g = l - v) >= 250 ? (v = l, e(this).trigger("throttledresize")) : (f && window.clearTimeout(f), f = window.setTimeout(u, 250 - g))
        },
        v = 0;

    function w(t, a, o, n) {
        var i = o.type;
        o.type = a, e.event.dispatch.call(t, o, n), o.type = i
    }
    e.each({
        scrollend: "scrollstart",
        swipeup: "swipe",
        swiperight: "swipe",
        swipedown: "swipe",
        swipeleft: "swipe",
        swipeend: "swipe",
        tap2: "tap",
        taphold2: "taphold"
    }, function(t, a) {
        e.event.special[t] = {
            setup: function() {
                e(this).on(a, e.noop)
            }
        }
    })
}(jQuery);

/* Files: sticky-kit/sticky-kit.min.js, mustache/mustache.min.js, pikaday/pikaday.js, pikaday/pikaday.jquery.js, autosize/autosize.min.js, rangyinputs/rangyinputs-jquery.js, serializejson/jquery.serializejson.min.js, clipboard.js/clipboard.min.js, mobile-events/jquery.mobile-events.min.js */