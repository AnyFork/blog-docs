const import_meta = {};
import { _ as _export_sfc, e as defineComponent, k as computed, r as resolveComponent, o as openBlock, c as createElementBlock, h as unref, i as createBlock, l as createCommentVNode, m as useThemeData, a as createBaseVNode, n as withBase, g as createVNode, w as withCtx, b as createTextVNode, t as toDisplayString, p as withModifiers, q as ref, s as useRouter, v as useRoute, u as useRouteLocale, x as usePageFrontmatter, y as x, F as Fragment, z as renderList, A as normalizeStyle, B as reactive, C as normalizeClass, D as onMounted, E as nextTick, G as onUnmounted, H as __vitePreload, I as useSiteLocaleData, f as useThemeLocaleData, J as useDarkMode, K as h, L as ClientOnly, M as toRefs, N as mergeProps, O as renderSlot, P as isLinkHttp, Q as isLinkMailto, R as isLinkTel, S as useSiteData, T as Transition, U as watch, V as withDirectives, W as vShow, X as removeLeadingSlash, Y as removeEndingSlash, Z as isString, $ as useNavLink, d as createStaticVNode, j as usePageData, a0 as useSidebarItems, a1 as isPlainObject, a2 as useToggle, a3 as onBeforeUnmount, a4 as withKeys, a5 as useScrollPromise } from "./app.ed27189e.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u2 = "hour", a = "day", o = "week", f = "month", h2 = "quarter", c2 = "year", d = "date", $ = "Invalid Date", l2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m2 = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, g = { s: m2, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m2(r2, 2, "0") + ":" + m2(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u3 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - u3 : u3 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: f, y: c2, w: o, d: a, D: d, h: u2, m: s, s: i, ms: r, Q: h2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return void 0 === t2;
    } }, v = "en", D = {};
    D[v] = M;
    var p = function(t2) {
      return t2 instanceof _;
    }, S = function t2(e2, n2, r2) {
      var i2;
      if (!e2)
        return v;
      if ("string" == typeof e2) {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u3 = e2.split("-");
        if (!i2 && u3.length > 1)
          return t2(u3[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }
      return !r2 && i2 && (v = i2), i2 || !r2 && v;
    }, w = function(t2, e2) {
      if (p(t2))
        return t2.clone();
      var n2 = "object" == typeof e2 ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    }, O = g;
    O.l = S, O.i = p, O.w = function(t2, e2) {
      return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _ = function() {
      function M2(t2) {
        this.$L = S(t2.locale, null, true), this.parse(t2);
      }
      var m3 = M2.prototype;
      return m3.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2)
            return new Date(NaN);
          if (O.u(e2))
            return new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match(l2);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, m3.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m3.$utils = function() {
        return O;
      }, m3.isValid = function() {
        return !(this.$d.toString() === $);
      }, m3.isSame = function(t2, e2) {
        var n2 = w(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m3.isAfter = function(t2, e2) {
        return w(t2) < this.startOf(e2);
      }, m3.isBefore = function(t2, e2) {
        return this.endOf(e2) < w(t2);
      }, m3.$g = function(t2, e2, n2) {
        return O.u(t2) ? this[e2] : this.set(n2, t2);
      }, m3.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m3.valueOf = function() {
        return this.$d.getTime();
      }, m3.startOf = function(t2, e2) {
        var n2 = this, r2 = !!O.u(e2) || e2, h3 = O.p(t2), $2 = function(t3, e3) {
          var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, l3 = function(t3, e3) {
          return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m4 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
        switch (h3) {
          case c2:
            return r2 ? $2(1, 0) : $2(31, 11);
          case f:
            return r2 ? $2(1, M3) : $2(0, M3 + 1);
          case o:
            var v2 = this.$locale().weekStart || 0, D2 = (y2 < v2 ? y2 + 7 : y2) - v2;
            return $2(r2 ? m4 - D2 : m4 + (6 - D2), M3);
          case a:
          case d:
            return l3(g2 + "Hours", 0);
          case u2:
            return l3(g2 + "Minutes", 1);
          case s:
            return l3(g2 + "Seconds", 2);
          case i:
            return l3(g2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m3.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m3.$set = function(t2, e2) {
        var n2, o2 = O.p(t2), h3 = "set" + (this.$u ? "UTC" : ""), $2 = (n2 = {}, n2[a] = h3 + "Date", n2[d] = h3 + "Date", n2[f] = h3 + "Month", n2[c2] = h3 + "FullYear", n2[u2] = h3 + "Hours", n2[s] = h3 + "Minutes", n2[i] = h3 + "Seconds", n2[r] = h3 + "Milliseconds", n2)[o2], l3 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === f || o2 === c2) {
          var y2 = this.clone().set(d, 1);
          y2.$d[$2](l3), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          $2 && this.$d[$2](l3);
        return this.init(), this;
      }, m3.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m3.get = function(t2) {
        return this[O.p(t2)]();
      }, m3.add = function(r2, h3) {
        var d2, $2 = this;
        r2 = Number(r2);
        var l3 = O.p(h3), y2 = function(t2) {
          var e2 = w($2);
          return O.w(e2.date(e2.date() + Math.round(t2 * r2)), $2);
        };
        if (l3 === f)
          return this.set(f, this.$M + r2);
        if (l3 === c2)
          return this.set(c2, this.$y + r2);
        if (l3 === a)
          return y2(1);
        if (l3 === o)
          return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u2] = n, d2[i] = t, d2)[l3] || 1, m4 = this.$d.getTime() + r2 * M3;
        return O.w(m4, this);
      }, m3.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m3.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || $;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u3 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h3 = function(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
        }, c3 = function(t3) {
          return O.s(s2 % 12 || 12, t3, "0");
        }, d2 = n2.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, l3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h3(n2.monthsShort, a2, f2, 3), MMMM: h3(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h3(n2.weekdaysMin, this.$W, o2, 2), ddd: h3(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c3(1), hh: c3(2), a: d2(s2, u3, true), A: d2(s2, u3, false), m: String(u3), mm: O.s(u3, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
        return r2.replace(y, function(t3, e3) {
          return e3 || l3[t3] || i2.replace(":", "");
        });
      }, m3.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m3.diff = function(r2, d2, $2) {
        var l3, y2 = O.p(d2), M3 = w(r2), m4 = (M3.utcOffset() - this.utcOffset()) * e, g2 = this - M3, v2 = O.m(this, M3);
        return v2 = (l3 = {}, l3[c2] = v2 / 12, l3[f] = v2, l3[h2] = v2 / 3, l3[o] = (g2 - m4) / 6048e5, l3[a] = (g2 - m4) / 864e5, l3[u2] = g2 / n, l3[s] = g2 / e, l3[i] = g2 / t, l3)[y2] || g2, $2 ? v2 : O.a(v2);
      }, m3.daysInMonth = function() {
        return this.endOf(f).$D;
      }, m3.$locale = function() {
        return D[this.$L];
      }, m3.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = S(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m3.clone = function() {
        return O.w(this.$d, this);
      }, m3.toDate = function() {
        return new Date(this.valueOf());
      }, m3.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m3.toISOString = function() {
        return this.$d.toISOString();
      }, m3.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), T = _.prototype;
    return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u2], ["$W", a], ["$M", f], ["$y", c2], ["$D", d]].forEach(function(t2) {
      T[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), w.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _, w), t2.$i = true), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
      return w(1e3 * t2);
    }, w.en = D[v], w.Ls = D, w.p = {}, w;
  });
})(dayjs_min);
var dayjs = dayjs_min.exports;
var utc$1 = { exports: {} };
(function(module, exports) {
  !function(t, i) {
    module.exports = i();
  }(commonjsGlobal, function() {
    var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
    return function(s, f, n) {
      var u2 = f.prototype;
      n.utc = function(t2) {
        var i2 = { date: t2, utc: true, args: arguments };
        return new f(i2);
      }, u2.utc = function(i2) {
        var e2 = n(this.toDate(), { locale: this.$L, utc: true });
        return i2 ? e2.add(this.utcOffset(), t) : e2;
      }, u2.local = function() {
        return n(this.toDate(), { locale: this.$L, utc: false });
      };
      var o = u2.parse;
      u2.parse = function(t2) {
        t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
      };
      var r = u2.init;
      u2.init = function() {
        if (this.$u) {
          var t2 = this.$d;
          this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
        } else
          r.call(this);
      };
      var a = u2.utcOffset;
      u2.utcOffset = function(s2, f2) {
        var n2 = this.$utils().u;
        if (n2(s2))
          return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
        if ("string" == typeof s2 && (s2 = function(t2) {
          void 0 === t2 && (t2 = "");
          var s3 = t2.match(i);
          if (!s3)
            return null;
          var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u4 = 60 * +f3[1] + +f3[2];
          return 0 === u4 ? 0 : "+" === n3 ? u4 : -u4;
        }(s2), null === s2))
          return this;
        var u3 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
        if (f2)
          return o2.$offset = u3, o2.$u = 0 === s2, o2;
        if (0 !== s2) {
          var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (o2 = this.local().add(u3 + r2, t)).$offset = u3, o2.$x.$localOffset = r2;
        } else
          o2 = this.utc();
        return o2;
      };
      var h2 = u2.format;
      u2.format = function(t2) {
        var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return h2.call(this, i2);
      }, u2.valueOf = function() {
        var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * t2;
      }, u2.isUTC = function() {
        return !!this.$u;
      }, u2.toISOString = function() {
        return this.toDate().toISOString();
      }, u2.toString = function() {
        return this.toDate().toUTCString();
      };
      var l2 = u2.toDate;
      u2.toDate = function(t2) {
        return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l2.call(this);
      };
      var c2 = u2.diff;
      u2.diff = function(t2, i2, e2) {
        if (t2 && this.$u === t2.$u)
          return c2.call(this, t2, i2, e2);
        var s2 = this.local(), f2 = n(t2).local();
        return c2.call(s2, f2, i2, e2);
      };
    };
  });
})(utc$1);
var utc = utc$1.exports;
var timezone$1 = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
    return function(n, i, o) {
      var r, a = function(t2, n2, i2) {
        void 0 === i2 && (i2 = {});
        var o2 = new Date(t2), r2 = function(t3, n3) {
          void 0 === n3 && (n3 = {});
          var i3 = n3.timeZoneName || "short", o3 = t3 + "|" + i3, r3 = e[o3];
          return r3 || (r3 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: i3 }), e[o3] = r3), r3;
        }(n2, i2);
        return r2.formatToParts(o2);
      }, u2 = function(e2, n2) {
        for (var i2 = a(e2, n2), r2 = [], u3 = 0; u3 < i2.length; u3 += 1) {
          var f2 = i2[u3], s2 = f2.type, m2 = f2.value, c2 = t[s2];
          c2 >= 0 && (r2[c2] = parseInt(m2, 10));
        }
        var d = r2[3], l2 = 24 === d ? 0 : d, v = r2[0] + "-" + r2[1] + "-" + r2[2] + " " + l2 + ":" + r2[4] + ":" + r2[5] + ":000", h2 = +e2;
        return (o.utc(v).valueOf() - (h2 -= h2 % 1e3)) / 6e4;
      }, f = i.prototype;
      f.tz = function(t2, e2) {
        void 0 === t2 && (t2 = r);
        var n2 = this.utcOffset(), i2 = this.toDate(), a2 = i2.toLocaleString("en-US", { timeZone: t2 }), u3 = Math.round((i2 - new Date(a2)) / 1e3 / 60), f2 = o(a2).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i2.getTimezoneOffset() / 15) - u3, true);
        if (e2) {
          var s2 = f2.utcOffset();
          f2 = f2.add(n2 - s2, "minute");
        }
        return f2.$x.$timezone = t2, f2;
      }, f.offsetName = function(t2) {
        var e2 = this.$x.$timezone || o.tz.guess(), n2 = a(this.valueOf(), e2, { timeZoneName: t2 }).find(function(t3) {
          return "timezonename" === t3.type.toLowerCase();
        });
        return n2 && n2.value;
      };
      var s = f.startOf;
      f.startOf = function(t2, e2) {
        if (!this.$x || !this.$x.$timezone)
          return s.call(this, t2, e2);
        var n2 = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return s.call(n2, t2, e2).tz(this.$x.$timezone, true);
      }, o.tz = function(t2, e2, n2) {
        var i2 = n2 && e2, a2 = n2 || e2 || r, f2 = u2(+o(), a2);
        if ("string" != typeof t2)
          return o(t2).tz(a2);
        var s2 = function(t3, e3, n3) {
          var i3 = t3 - 60 * e3 * 1e3, o2 = u2(i3, n3);
          if (e3 === o2)
            return [i3, e3];
          var r2 = u2(i3 -= 60 * (o2 - e3) * 1e3, n3);
          return o2 === r2 ? [i3, o2] : [t3 - 60 * Math.min(o2, r2) * 1e3, Math.max(o2, r2)];
        }(o.utc(t2, i2).valueOf(), f2, a2), m2 = s2[0], c2 = s2[1], d = o(m2).utcOffset(c2);
        return d.$x.$timezone = a2, d;
      }, o.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, o.tz.setDefault = function(t2) {
        r = t2;
      };
    };
  });
})(timezone$1);
var timezone = timezone$1.exports;
const _hoisted_1$g = { class: "w-full h-9 mt-[15px] flex items-center" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "BlogItemInfo",
  props: {
    page: null
  },
  setup(__props) {
    const props = __props;
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const themeData = useThemeData();
    const author = computed(() => props.page.frontmatter.author || themeData.value.author);
    const formatDateValue = (value) => {
      return value ? dayjs.tz(value, "Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss") : "";
    };
    const timeAndWord = computed(() => {
      const { minutes, words } = props.page.readingTime;
      if (minutes && words) {
        if (minutes < 1) {
          return { minutes: "\u5C11\u4E8E1\u5206\u949F", words: `${words}\u5B57` };
        } else {
          return { minutes: `\u5927\u7EA6${Math.floor(minutes)}\u5206\u949F`, words: `${words}\u5B57` };
        }
      } else {
        return { minutes: void 0, words: void 0 };
      }
    });
    return (_ctx, _cache) => {
      const _component_Icon = resolveComponent("Icon");
      return openBlock(), createElementBlock("div", _hoisted_1$g, [
        unref(author) ? (openBlock(), createBlock(_component_Icon, {
          key: 0,
          icon: "UserOutlined",
          text: unref(author),
          class: "text-[#7F7F7F] text-[13px] mr-[1rem]"
        }, null, 8, ["text"])) : createCommentVNode("", true),
        formatDateValue(__props.page.frontmatter.date) ? (openBlock(), createBlock(_component_Icon, {
          key: 1,
          icon: "FieldTimeOutlined",
          text: formatDateValue(__props.page.frontmatter.date),
          class: "text-[#7F7F7F] text-[13px] mr-[1rem]"
        }, null, 8, ["text"])) : createCommentVNode("", true),
        __props.page.frontmatter.category ? (openBlock(), createBlock(_component_Icon, {
          key: 2,
          icon: "AppstoreOutlined",
          text: __props.page.frontmatter.category,
          class: "text-[#7F7F7F] text-[13px] mr-[1rem]"
        }, null, 8, ["text"])) : createCommentVNode("", true),
        __props.page.frontmatter.tag ? (openBlock(), createBlock(_component_Icon, {
          key: 3,
          icon: "TagsOutlined",
          text: __props.page.frontmatter.tag,
          class: "text-[#7F7F7F] text-[13px] mr-[1rem]"
        }, null, 8, ["text"])) : createCommentVNode("", true),
        unref(timeAndWord).words ? (openBlock(), createBlock(_component_Icon, {
          key: 4,
          icon: "ReadOutlined",
          text: unref(timeAndWord).words,
          class: "text-[#7F7F7F] text-[13px] mr-[1rem]"
        }, null, 8, ["text"])) : createCommentVNode("", true),
        unref(timeAndWord).minutes ? (openBlock(), createBlock(_component_Icon, {
          key: 5,
          icon: "HourglassOutlined",
          text: unref(timeAndWord).minutes,
          class: "text-[#7F7F7F] text-[13px] mr-[1rem]"
        }, null, 8, ["text"])) : createCommentVNode("", true)
      ]);
    };
  }
});
var BlogItemInfo = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "BlogItemInfo.vue"]]);
var BlogItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$f = {
  key: 0,
  class: "left-box flex mt-[15px] items-center"
};
const _hoisted_2$a = { class: "img h-[200px] rounded-[8px] overflow-hidden flex-[0_0_50%]" };
const _hoisted_3$8 = ["src"];
const _hoisted_4$5 = { class: "content flex-1 pl-[40px] flex flex-wrap m-0 px-[0.2rem] overflow-hidden" };
const _hoisted_5$4 = { class: "title w-full text-[1.28rem]" };
const _hoisted_6$4 = ["innerHTML"];
const _hoisted_7$4 = {
  key: 1,
  class: "right-box flex mt-[15px] items-center"
};
const _hoisted_8$3 = { class: "content flex-1 pr-[40px] flex flex-wrap m-0 px-[0.2rem] overflow-hidden" };
const _hoisted_9$3 = { class: "title w-full text-[1.28rem]" };
const _hoisted_10$2 = ["innerHTML"];
const _hoisted_11$1 = { class: "img h-[200px] rounded-[8px] overflow-hidden flex-[0_0_50%] mr-[1rem]" };
const _hoisted_12$2 = ["src"];
const _hoisted_13$2 = { class: "toTop absolute top-[10px] right-[10px] z-0" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "BlogItem",
  props: {
    page: null,
    position: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_Icon = resolveComponent("Icon");
      return openBlock(), createElementBlock("div", {
        class: "blog-item relative w-full h-[300px] py-[16px] px-[20px] rounded dark:bg-[#181818] bg-[#fff] shadow-box mb-[20px] cursor-pointer box-border",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$router.push(__props.page.data.path), ["stop"]))
      }, [
        __props.position == "left" ? (openBlock(), createElementBlock("div", _hoisted_1$f, [
          createBaseVNode("div", _hoisted_2$a, [
            createBaseVNode("img", {
              src: __props.page.data.frontmatter.image ? __props.page.data.frontmatter.image : unref(withBase)("/images/index/bg1.jpg"),
              class: "w-full h-full scale-100 transition-transform duration-[.6s]"
            }, null, 8, _hoisted_3$8)
          ]),
          createBaseVNode("div", _hoisted_4$5, [
            createBaseVNode("div", _hoisted_5$4, [
              createVNode(_component_router_link, {
                to: __props.page.data.path,
                class: "font-bold text-[color:var(--text-color)] truncate block",
                title: __props.page.data.title
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.page.data.title), 1)
                ]),
                _: 1
              }, 8, ["to", "title"])
            ]),
            createBaseVNode("div", {
              class: "abstract w-full h-[180px] font-normal indent-6",
              innerHTML: __props.page.data.excerpt
            }, null, 8, _hoisted_6$4)
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_7$4, [
          createBaseVNode("div", _hoisted_8$3, [
            createBaseVNode("div", _hoisted_9$3, [
              createVNode(_component_router_link, {
                to: __props.page.data.path,
                class: "font-bold text-[color:var(--text-color)] truncate block",
                title: __props.page.data.title
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.page.data.title), 1)
                ]),
                _: 1
              }, 8, ["to", "title"])
            ]),
            createBaseVNode("div", {
              class: "abstract w-full h-[180px] font-normal indent-6",
              innerHTML: __props.page.data.excerpt
            }, null, 8, _hoisted_10$2)
          ]),
          createBaseVNode("div", _hoisted_11$1, [
            createBaseVNode("img", {
              src: __props.page.data.frontmatter.image ? __props.page.data.frontmatter.image : unref(withBase)("/images/index/bg1.jpg"),
              class: "w-full h-full scale-100 transition-transform duration-[.6s]"
            }, null, 8, _hoisted_12$2)
          ])
        ])),
        createBaseVNode("div", _hoisted_13$2, [
          createVNode(_component_Icon, {
            icon: "VerticalAlignTopOutlined",
            iconSize: 28,
            iconColor: "#fff"
          })
        ]),
        createVNode(BlogItemInfo, {
          page: __props.page.data
        }, null, 8, ["page"])
      ]);
    };
  }
});
var BlogItem = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-72f8f128"], ["__file", "BlogItem.vue"]]);
const useRandomColor = () => {
  const tagColorArr = [
    "#e15b64",
    "#f47e60",
    "#f8b26a",
    "#abbd81",
    "#849b87",
    "#e15b64",
    "#f47e60",
    "#f8b26a",
    "#f26d6d",
    "#67cc86",
    "#fb9b5f",
    "#3498db"
  ];
  const index = Math.floor(Math.random() * tagColorArr.length);
  return tagColorArr[index];
};
const categoryMap = { "category": { "/": { "path": "/category/", "map": { "category A": { "path": "/category/category-a/", "keys": ["v-37d3574c"] }, "category B": { "path": "/category/category-b/", "keys": ["v-37d3574c"] }, "java": { "path": "/category/java/", "keys": ["v-db9b3b8e"] } } } }, "tag": { "/": { "path": "/tag/", "map": { "\u6807\u7B7EC": { "path": "/tag/%E6%A0%87%E7%AD%BEc/", "keys": ["v-37d3574c"] }, "\u8BBE\u8BA1\u6A21\u5F0F": { "path": "/tag/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/", "keys": ["v-db9b3b8e"] } } } } };
if (import_meta.webpackHot) {
  import_meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  }
}
const typeMap = { "article": { "/": { "path": "/article/", "keys": ["v-37d3574c", "v-db9b3b8e"] } }, "timeline": { "/": { "path": "/timeline/", "keys": ["v-db9b3b8e"] } } };
if (import_meta.webpackHot) {
  import_meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  }
}
const m = ref(categoryMap), u = (t = "") => {
  const a = useRouter(), s = useRoute(), u2 = useRouteLocale();
  return computed(() => {
    var _a;
    const e = t || ((_a = usePageFrontmatter().value.blog) == null ? void 0 : _a.key) || "", n = a.getRoutes();
    if (!m.value[e])
      throw new Error("useBlogCategory: " + (t ? `key ${t} is invalid` : "can not bind to an exisiting key on non blog pages"));
    const p = m.value[e][u2.value], r = { path: p.path, map: {} };
    for (const t2 in p.map) {
      const e2 = p.map[t2];
      r.map[t2] = { path: e2.path, items: [] };
      for (const o of e2.keys) {
        const e3 = n.find(({ name: t3 }) => t3 === o);
        if (e3) {
          const o2 = x(a, e3.path);
          r.map[t2].items.push({ path: o2.path, info: o2.meta["_blog"] });
        }
      }
      s.path === e2.path && (r.currentItems = r.map[t2].items);
    }
    return r;
  });
};
(import_meta.webpackHot || false) && (__VUE_HMR_RUNTIME__.updateBlogCategory = (t) => {
  m.value = t;
});
const l = ref(typeMap), c = (t = "") => {
  const a = useRouter(), r = useRouteLocale();
  return computed(() => {
    var _a;
    const e = t || ((_a = usePageFrontmatter().value.blog) == null ? void 0 : _a.key) || "";
    if (!l.value[e])
      throw new Error("useBlogType: " + (t ? `key ${t} is invalid` : "can not bind to an exisiting key on non blog pages"));
    const n = a.getRoutes(), p = l.value[e][r.value], s = { path: p.path, items: [] };
    for (const t2 of p.keys) {
      const e2 = n.find(({ name: e3 }) => e3 === t2);
      if (e2) {
        const t3 = x(a, e2.path);
        s.items.push({ path: t3.path, info: t3.meta["_blog"] });
      }
    }
    return s;
  });
};
(import_meta.webpackHot || false) && (__VUE_HMR_RUNTIME__.updateBlogType = (t) => {
  l.value = t;
});
const _hoisted_1$e = { class: "w-full pb-[100px] rounded px-[15px] dark:bg-[#181818] bg-[#fff] shadow-box cursor-pointer border-box" };
const _hoisted_2$9 = { class: "w-full flex flex-wrap items-center justify-center" };
const _hoisted_3$7 = ["src"];
const _hoisted_4$4 = {
  key: 1,
  class: "block w-full text-center m-0 font-[500]"
};
const _hoisted_5$3 = { class: "w-[80%] flex flex-wrap items-center justify-center my-[20px] mx-auto" };
const _hoisted_6$3 = { class: "text-center flex-[0_0_33%] border-r-[#333] border-r border-solid border-y-0 border-l-0" };
const _hoisted_7$3 = { class: "m-0" };
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("h6", { class: "m-0 font-normal mt-[10px]" }, "\u6587\u7AE0", -1);
const _hoisted_9$2 = { class: "text-center flex-[0_0_33%] border-r-[#333] border-r border-solid border-y-0 border-l-0" };
const _hoisted_10$1 = { class: "m-0" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h6", { class: "m-0 font-normal mt-[10px]" }, "\u5206\u7C7B", -1);
const _hoisted_12$1 = { class: "text-center flex-[0_0_33%]" };
const _hoisted_13$1 = { class: "m-0" };
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("h6", { class: "m-0 font-normal mt-[10px]" }, "\u6807\u7B7E", -1);
const _hoisted_15$1 = {
  key: 0,
  class: "leading-[30px] border-solid border-l-[10px] border-l-[#67cc86] border-y-0 border-r-0 bg-[#ebe9e9] pl-[10px] my-[10px] dark:text-[#000]"
};
const _hoisted_16 = { key: 1 };
const _hoisted_17 = { style: { "margin-top": "5px" } };
const _hoisted_18 = {
  key: 2,
  style: { "margin-top": "5px" }
};
const _hoisted_19 = { class: "pt-2" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_21 = { class: "w-full flex my-[10px] flex-wrap" };
const _hoisted_22 = { class: "w-full" };
const _hoisted_23 = { class: "text-[13px]" };
const _hoisted_24 = { class: "w-full flex my-[10px] flex-wrap" };
const _hoisted_25 = { class: "w-full" };
const _hoisted_26 = { class: "text-[13px]" };
const _hoisted_27 = { class: "w-full flex my-[10px] flex-wrap" };
const _hoisted_28 = { class: "w-full" };
const _hoisted_29 = ["href"];
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "BlogSider",
  setup(__props) {
    const themeData = useThemeData();
    const frontmatter = usePageFrontmatter();
    const category = u("category");
    const tag = u("tag");
    const post = c("article");
    return (_ctx, _cache) => {
      const _component_Icon = resolveComponent("Icon");
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        createBaseVNode("div", _hoisted_2$9, [
          unref(themeData).authorAvatar ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "rounded-[50%] h-[6rem] w-[6rem] mt-[2rem] mb-[1rem] inline-block",
            src: unref(withBase)(unref(themeData).authorAvatar),
            alt: "author-avatar"
          }, null, 8, _hoisted_3$7)) : createCommentVNode("", true),
          unref(themeData).author ? (openBlock(), createElementBlock("h3", _hoisted_4$4, toDisplayString(unref(themeData).author), 1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_5$3, [
          createBaseVNode("div", _hoisted_6$3, [
            createBaseVNode("h3", _hoisted_7$3, toDisplayString(unref(post).items.length), 1),
            _hoisted_8$2
          ]),
          createBaseVNode("div", _hoisted_9$2, [
            createBaseVNode("h3", _hoisted_10$1, toDisplayString(Object.keys(unref(category).map).length), 1),
            _hoisted_11
          ]),
          createBaseVNode("div", _hoisted_12$1, [
            createBaseVNode("h3", _hoisted_13$1, toDisplayString(Object.keys(unref(tag).map).length), 1),
            _hoisted_14$1
          ])
        ]),
        unref(frontmatter).summary ? (openBlock(), createElementBlock("div", _hoisted_15$1, toDisplayString(unref(frontmatter).summary), 1)) : createCommentVNode("", true),
        unref(frontmatter).hobby ? (openBlock(), createElementBlock("div", _hoisted_16, [
          createVNode(_component_Icon, {
            icon: "DribbbleOutlined",
            text: "\u5174\u8DA3\u7231\u597D",
            textSize: 15
          }),
          createBaseVNode("div", _hoisted_17, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(frontmatter).hobby, (item, index) => {
              return openBlock(), createElementBlock("span", {
                key: index,
                style: normalizeStyle({ backgroundColor: unref(useRandomColor)() }),
                class: "p-[4px_8px] m-[4px_4px_10px] rounded-[0.25rem] inline-block text-[13px] text-[#fff]"
              }, toDisplayString(item), 5);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        unref(themeData).socialLinks ? (openBlock(), createElementBlock("div", _hoisted_18, [
          createVNode(_component_Icon, {
            icon: "FolderOpenOutlined",
            text: "\u535A\u5BA2\u5730\u5740",
            textSize: 15
          }),
          createBaseVNode("div", _hoisted_19, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(themeData).socialLinks, (item, index) => {
              return openBlock(), createBlock(_component_Icon, {
                key: index,
                icon: item.icon,
                iconSize: 25,
                iconColor: unref(useRandomColor)(),
                link: item.link,
                target: "_target",
                class: "mx-2 hover:scale-110"
              }, null, 8, ["icon", "iconColor", "link"]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        _hoisted_20,
        createBaseVNode("div", _hoisted_21, [
          createBaseVNode("div", _hoisted_22, [
            createVNode(_component_Icon, {
              icon: "AppstoreTwotone",
              text: "\u5206\u7C7B\u5217\u8868",
              textSize: 15,
              class: "dark:hover:text-[#fff]"
            })
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(category).map, ({ items, path }, name) => {
            return openBlock(), createBlock(_component_RouterLink, {
              key: name,
              to: path,
              class: "shadow-item w-full flex items-center justify-between text-[#666] px-[14px] my-[5px] font-normal h-[40px] bg-[#fff] hover:bg-[#3eaf7c] hover:text-[#fff] dark:bg-[#181818] dark:hover:bg-[#3eaf7c] dark:text-[#fff] rounded mx-[5px]"
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_23, toDisplayString(name), 1),
                createBaseVNode("span", {
                  class: "ml-[10px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]",
                  style: normalizeStyle({ "background-color": unref(useRandomColor)() })
                }, toDisplayString(items.length), 5)
              ]),
              _: 2
            }, 1032, ["to"]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_24, [
          createBaseVNode("div", _hoisted_25, [
            createVNode(_component_Icon, {
              icon: "TagsOutlined",
              text: "\u6807\u7B7E\u5217\u8868",
              textSize: 15,
              class: "dark:hover:text-[#fff]"
            })
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tag).map, ({ items, path }, name) => {
            return openBlock(), createBlock(_component_RouterLink, {
              key: name,
              to: path,
              class: "shadow-item flex items-center text-[#666] px-[14px] my-[5px] font-normal h-[30px] bg-[#fff] hover:bg-[#3eaf7c] hover:text-[#fff] dark:bg-[#181818] dark:hover:bg-[#3eaf7c] dark:text-[#fff] rounded mx-[5px]"
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_26, toDisplayString(name), 1),
                createBaseVNode("span", {
                  class: "ml-[10px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]",
                  style: normalizeStyle({ "background-color": unref(useRandomColor)() })
                }, toDisplayString(items.length), 5)
              ]),
              _: 2
            }, 1032, ["to"]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_27, [
          createBaseVNode("div", _hoisted_28, [
            createVNode(_component_Icon, {
              icon: "LinkOutlined",
              text: "\u53CB\u60C5\u94FE\u63A5",
              textSize: 15,
              class: "dark:hover:text-[#fff]"
            })
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(themeData).friendLink, (item, index) => {
            return openBlock(), createElementBlock("span", {
              class: "shadow-item mt-[10px] bg-[#fff] dark:bg-[#181818] hover:scale-110",
              key: index
            }, [
              createBaseVNode("a", {
                href: item.link,
                target: "_blank",
                class: "flex items-center justify-between text-[#3eaf7c] py-[8px] px-[14px] text-[13px]"
              }, [
                createBaseVNode("span", null, toDisplayString(item.title), 1)
              ], 8, _hoisted_29)
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
var BlogSider = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "BlogSider.vue"]]);
const _hoisted_1$d = { class: "w-[1120px] my-0 mx-auto mt-5 flex" };
const _hoisted_2$8 = { class: "flex-1" };
const _hoisted_3$6 = { class: "w-[300px] ml-[15px]" };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "HomeBlog",
  setup(__props) {
    const articles = c("article");
    console.log(articles.value.items);
    const pages = reactive({
      pageTotal: articles.value.items.length,
      pageNumber: 1,
      pageSize: 10
    });
    const blogData = computed(() => articles.value.items.slice((pages.pageNumber - 1) * pages.pageSize, pages.pageNumber * pages.pageSize));
    const getBack = (value) => {
      const { page, pageSize } = value;
      pages.pageNumber = page;
      pages.pageSize = pageSize;
    };
    return (_ctx, _cache) => {
      const _component_Pagination = resolveComponent("Pagination");
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        createBaseVNode("div", _hoisted_2$8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(blogData), (item, index) => {
            return openBlock(), createBlock(BlogItem, {
              class: normalizeClass(["border", index % 3 == 0 ? "draw" : index % 3 == 1 ? "draw meet" : "center"]),
              key: index,
              page: item.info,
              position: index % 2 == 0 ? "left" : "right"
            }, null, 8, ["page", "position", "class"]);
          }), 128)),
          createVNode(_component_Pagination, {
            pageTotal: pages.pageTotal,
            pageNumber: pages.pageNumber,
            pageSize: pages.pageSize,
            onClick: getBack
          }, null, 8, ["pageTotal", "pageNumber", "pageSize"])
        ]),
        createBaseVNode("div", _hoisted_3$6, [
          createVNode(BlogSider)
        ])
      ]);
    };
  }
});
var HomeBlog = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "HomeBlog.vue"]]);
const _sfc_main$h = {};
const _hoisted_1$c = { class: "p-[15px] mt-[25px] text-center border-t-[1px] border-t-[color:#eee] border-solid border-x-0 border-b-0" };
function _sfc_render(_ctx, _cache) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("div", _hoisted_1$c, [
    createVNode(_component_Icon, {
      icon: "SketchOutlined",
      iconSize: 20,
      text: "vuepress-theme-AnyFork",
      textSize: 15,
      class: "mr-[30px]"
    }),
    createVNode(_component_Icon, {
      icon: "SafetyCertificateOutlined",
      text: "\u9655ICP\u590717067667\u53F7-1",
      textSize: 15,
      class: "mr-[30px]"
    }),
    createVNode(_component_Icon, {
      icon: "CopyrightCircleOutlined",
      text: "\u5C0F\u7D2B\u5FF5\u6C81 2022",
      textSize: 15,
      class: "mr-[30px]"
    })
  ]);
}
var HomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render], ["__file", "HomeFooter.vue"]]);
const modules = { "../../public/images/index/bg1.jpg": () => true ? __vitePreload(() => import("./bg1.209fc7c3.js"), []) : null, "../../public/images/index/bg2.jpg": () => true ? __vitePreload(() => import("./bg2.54e00d96.js"), []) : null, "../../public/images/index/bg3.jpg": () => true ? __vitePreload(() => import("./bg3.8e18e102.js"), []) : null, "../../public/images/index/bg4.jpg": () => true ? __vitePreload(() => import("./bg4.f47177d1.js"), []) : null, "../../public/images/index/bg5.jpg": () => true ? __vitePreload(() => import("./bg5.3c52e119.js"), []) : null, "../../public/images/index/bg6.jpg": () => true ? __vitePreload(() => import("./bg6.0888bac7.js"), []) : null };
const useBanner = () => {
  const frontmatter = usePageFrontmatter();
  const {
    bgImage,
    bgImageSec = 4e3,
    isBgImagetrigger = true,
    needDefaultImages = true,
    heroText,
    tagline,
    bgImageStyle = { height: "550px", color: "#fff" },
    showArrow = true,
    bubbles = true
  } = frontmatter.value;
  const bannerOptions = {
    bgImageSec,
    isBgImagetrigger,
    showArrow,
    tagline,
    heroText,
    bgImageStyle,
    bubbles
  };
  const getPublicImages = () => {
    const imageArray = [];
    Object.keys(modules).forEach((path) => {
      const fileName = path.replace(/(.*\/)*([\s\S]*?)/gi, "$2");
      const filePath = withBase("/images/index/" + fileName);
      imageArray.push(filePath);
    });
    return imageArray;
  };
  const getRandomImage = () => {
    const imageArray = needDefaultImages ? mixImage(bgImage) : bgImage;
    return isBgImagetrigger ? imageArray : imageArray[Math.floor(Math.random() * imageArray.length)];
  };
  const mixImage = (mixImageArray) => {
    const imageArray = getPublicImages();
    return mixImageArray ? Array.from(new Set(imageArray.concat(mixImageArray))) : imageArray;
  };
  onMounted(() => {
    nextTick(() => {
      new flux.slider("#banner", {
        autoplay: bannerOptions.isBgImagetrigger,
        pagination: false,
        width: "100%",
        height: Number(bgImageStyle.height.slice(0, -2)),
        delay: bannerOptions.bgImageSec
      });
    });
  });
  onUnmounted(() => {
  });
  return { getRandomImage, bannerOptions };
};
function circleMagic(options) {
  let width;
  let height;
  let canvas;
  let ctx;
  let animateHeader = true;
  const circles = [];
  const settings = options || {
    color: "rgba(255,255,255,.5)",
    radius: 10,
    density: 0.3,
    clearOffset: 0.2
  };
  let container = document.getElementById("bubbles");
  if (!container) {
    throw new Error("bubbles dom is not exist !!");
  }
  const initContainer = () => {
    width = container.offsetWidth;
    height = container.offsetHeight - 120;
    initCanvas();
    canvas = document.getElementById("homeTopCanvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.bottom = "0";
    ctx = canvas.getContext("2d");
    for (let x2 = 0; x2 < width * settings.density; x2++) {
      const c2 = new Circle();
      circles.push(c2);
    }
    animate();
  };
  initContainer();
  addListeners();
  function initCanvas() {
    const canvasElement = document.createElement("canvas");
    canvasElement.id = "homeTopCanvas";
    canvasElement.style.pointerEvents = "none";
    container.appendChild(canvasElement);
    canvasElement.parentElement.style.overflow = "hidden";
  }
  function addListeners() {
    window.addEventListener("scroll", scrollCheck, false);
    window.addEventListener("resize", resize, false);
  }
  function scrollCheck() {
    if (document.body.scrollTop > height) {
      animateHeader = false;
    } else {
      animateHeader = true;
    }
  }
  function resize() {
    width = container.clientWidth;
    height = container.clientHeight;
    container.height = height + "px";
    canvas.width = width;
    canvas.height = height;
  }
  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (const i in circles) {
        circles[i].draw();
      }
    }
    requestAnimationFrame(animate);
  }
  function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const alpha = Math.random().toPrecision(2);
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  }
  function Circle() {
    const that = this;
    (function() {
      that.pos = {};
      init();
    })();
    function init() {
      that.pos.x = Math.random() * width;
      that.pos.y = height + Math.random() * 100;
      that.alpha = 0.1 + Math.random() * settings.clearOffset;
      that.scale = 0.1 + Math.random() * 0.2;
      that.speed = Math.random() * 0.6;
      if (settings.color === "random") {
        that.color = randomColor();
      } else {
        that.color = settings.color;
      }
    }
    this.draw = function() {
      if (that.alpha <= 0) {
        init();
      }
      that.pos.y -= that.speed;
      that.alpha -= 5e-4;
      ctx.beginPath();
      ctx.arc(
        that.pos.x,
        that.pos.y,
        that.scale * settings.radius,
        0,
        2 * Math.PI,
        false
      );
      ctx.fillStyle = that.color;
      ctx.fill();
      ctx.closePath();
    };
  }
}
const useCircleMagic = () => {
  onMounted(() => {
    circleMagic({
      radius: 15,
      density: 0.3,
      color: "random",
      clearOffset: 0.2
    });
  });
};
var typed = { exports: {} };
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    return function(modules2) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
          return installedModules[moduleId].exports;
        var module2 = installedModules[moduleId] = {
          exports: {},
          id: moduleId,
          loaded: false
        };
        modules2[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.loaded = true;
        return module2.exports;
      }
      __webpack_require__.m = modules2;
      __webpack_require__.c = installedModules;
      __webpack_require__.p = "";
      return __webpack_require__(0);
    }([
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var _initializerJs = __webpack_require__(1);
        var _htmlParserJs = __webpack_require__(3);
        var Typed2 = function() {
          function Typed3(elementId, options) {
            _classCallCheck(this, Typed3);
            _initializerJs.initializer.load(this, options, elementId);
            this.begin();
          }
          _createClass(Typed3, [{
            key: "toggle",
            value: function toggle() {
              this.pause.status ? this.start() : this.stop();
            }
          }, {
            key: "stop",
            value: function stop() {
              if (this.typingComplete)
                return;
              if (this.pause.status)
                return;
              this.toggleBlinking(true);
              this.pause.status = true;
              this.options.onStop(this.arrayPos, this);
            }
          }, {
            key: "start",
            value: function start() {
              if (this.typingComplete)
                return;
              if (!this.pause.status)
                return;
              this.pause.status = false;
              if (this.pause.typewrite) {
                this.typewrite(this.pause.curString, this.pause.curStrPos);
              } else {
                this.backspace(this.pause.curString, this.pause.curStrPos);
              }
              this.options.onStart(this.arrayPos, this);
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.reset(false);
              this.options.onDestroy(this);
            }
          }, {
            key: "reset",
            value: function reset() {
              var restart = arguments.length <= 0 || arguments[0] === void 0 ? true : arguments[0];
              clearInterval(this.timeout);
              this.replaceText("");
              if (this.cursor && this.cursor.parentNode) {
                this.cursor.parentNode.removeChild(this.cursor);
                this.cursor = null;
              }
              this.strPos = 0;
              this.arrayPos = 0;
              this.curLoop = 0;
              if (restart) {
                this.insertCursor();
                this.options.onReset(this);
                this.begin();
              }
            }
          }, {
            key: "begin",
            value: function begin() {
              var _this = this;
              this.options.onBegin(this);
              this.typingComplete = false;
              this.shuffleStringsIfNeeded(this);
              this.insertCursor();
              if (this.bindInputFocusEvents)
                this.bindFocusEvents();
              this.timeout = setTimeout(function() {
                if (!_this.currentElContent || _this.currentElContent.length === 0) {
                  _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
                } else {
                  _this.backspace(_this.currentElContent, _this.currentElContent.length);
                }
              }, this.startDelay);
            }
          }, {
            key: "typewrite",
            value: function typewrite(curString, curStrPos) {
              var _this2 = this;
              if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
                this.el.classList.remove(this.fadeOutClass);
                if (this.cursor)
                  this.cursor.classList.remove(this.fadeOutClass);
              }
              var humanize = this.humanizer(this.typeSpeed);
              var numChars = 1;
              if (this.pause.status === true) {
                this.setPauseStatus(curString, curStrPos, true);
                return;
              }
              this.timeout = setTimeout(function() {
                curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
                var pauseTime = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === "^") {
                  if (/^\^\d+/.test(substr)) {
                    var skip = 1;
                    substr = /\d+/.exec(substr)[0];
                    skip += substr.length;
                    pauseTime = parseInt(substr);
                    _this2.temporaryPause = true;
                    _this2.options.onTypingPaused(_this2.arrayPos, _this2);
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                    _this2.toggleBlinking(true);
                  }
                }
                if (substr.charAt(0) === "`") {
                  while (curString.substr(curStrPos + numChars).charAt(0) !== "`") {
                    numChars++;
                    if (curStrPos + numChars > curString.length)
                      break;
                  }
                  var stringBeforeSkip = curString.substring(0, curStrPos);
                  var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
                  var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
                  curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
                  numChars--;
                }
                _this2.timeout = setTimeout(function() {
                  _this2.toggleBlinking(false);
                  if (curStrPos >= curString.length) {
                    _this2.doneTyping(curString, curStrPos);
                  } else {
                    _this2.keepTyping(curString, curStrPos, numChars);
                  }
                  if (_this2.temporaryPause) {
                    _this2.temporaryPause = false;
                    _this2.options.onTypingResumed(_this2.arrayPos, _this2);
                  }
                }, pauseTime);
              }, humanize);
            }
          }, {
            key: "keepTyping",
            value: function keepTyping(curString, curStrPos, numChars) {
              if (curStrPos === 0) {
                this.toggleBlinking(false);
                this.options.preStringTyped(this.arrayPos, this);
              }
              curStrPos += numChars;
              var nextString = curString.substr(0, curStrPos);
              this.replaceText(nextString);
              this.typewrite(curString, curStrPos);
            }
          }, {
            key: "doneTyping",
            value: function doneTyping(curString, curStrPos) {
              var _this3 = this;
              this.options.onStringTyped(this.arrayPos, this);
              this.toggleBlinking(true);
              if (this.arrayPos === this.strings.length - 1) {
                this.complete();
                if (this.loop === false || this.curLoop === this.loopCount) {
                  return;
                }
              }
              this.timeout = setTimeout(function() {
                _this3.backspace(curString, curStrPos);
              }, this.backDelay);
            }
          }, {
            key: "backspace",
            value: function backspace(curString, curStrPos) {
              var _this4 = this;
              if (this.pause.status === true) {
                this.setPauseStatus(curString, curStrPos, false);
                return;
              }
              if (this.fadeOut)
                return this.initFadeOut();
              this.toggleBlinking(false);
              var humanize = this.humanizer(this.backSpeed);
              this.timeout = setTimeout(function() {
                curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
                var curStringAtPosition = curString.substr(0, curStrPos);
                _this4.replaceText(curStringAtPosition);
                if (_this4.smartBackspace) {
                  var nextString = _this4.strings[_this4.arrayPos + 1];
                  if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
                    _this4.stopNum = curStrPos;
                  } else {
                    _this4.stopNum = 0;
                  }
                }
                if (curStrPos > _this4.stopNum) {
                  curStrPos--;
                  _this4.backspace(curString, curStrPos);
                } else if (curStrPos <= _this4.stopNum) {
                  _this4.arrayPos++;
                  if (_this4.arrayPos === _this4.strings.length) {
                    _this4.arrayPos = 0;
                    _this4.options.onLastStringBackspaced();
                    _this4.shuffleStringsIfNeeded();
                    _this4.begin();
                  } else {
                    _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
                  }
                }
              }, humanize);
            }
          }, {
            key: "complete",
            value: function complete() {
              this.options.onComplete(this);
              if (this.loop) {
                this.curLoop++;
              } else {
                this.typingComplete = true;
              }
            }
          }, {
            key: "setPauseStatus",
            value: function setPauseStatus(curString, curStrPos, isTyping) {
              this.pause.typewrite = isTyping;
              this.pause.curString = curString;
              this.pause.curStrPos = curStrPos;
            }
          }, {
            key: "toggleBlinking",
            value: function toggleBlinking(isBlinking) {
              if (!this.cursor)
                return;
              if (this.pause.status)
                return;
              if (this.cursorBlinking === isBlinking)
                return;
              this.cursorBlinking = isBlinking;
              if (isBlinking) {
                this.cursor.classList.add("typed-cursor--blink");
              } else {
                this.cursor.classList.remove("typed-cursor--blink");
              }
            }
          }, {
            key: "humanizer",
            value: function humanizer(speed) {
              return Math.round(Math.random() * speed / 2) + speed;
            }
          }, {
            key: "shuffleStringsIfNeeded",
            value: function shuffleStringsIfNeeded() {
              if (!this.shuffle)
                return;
              this.sequence = this.sequence.sort(function() {
                return Math.random() - 0.5;
              });
            }
          }, {
            key: "initFadeOut",
            value: function initFadeOut() {
              var _this5 = this;
              this.el.className += " " + this.fadeOutClass;
              if (this.cursor)
                this.cursor.className += " " + this.fadeOutClass;
              return setTimeout(function() {
                _this5.arrayPos++;
                _this5.replaceText("");
                if (_this5.strings.length > _this5.arrayPos) {
                  _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
                } else {
                  _this5.typewrite(_this5.strings[0], 0);
                  _this5.arrayPos = 0;
                }
              }, this.fadeOutDelay);
            }
          }, {
            key: "replaceText",
            value: function replaceText(str) {
              if (this.attr) {
                this.el.setAttribute(this.attr, str);
              } else {
                if (this.isInput) {
                  this.el.value = str;
                } else if (this.contentType === "html") {
                  this.el.innerHTML = str;
                } else {
                  this.el.textContent = str;
                }
              }
            }
          }, {
            key: "bindFocusEvents",
            value: function bindFocusEvents() {
              var _this6 = this;
              if (!this.isInput)
                return;
              this.el.addEventListener("focus", function(e) {
                _this6.stop();
              });
              this.el.addEventListener("blur", function(e) {
                if (_this6.el.value && _this6.el.value.length !== 0) {
                  return;
                }
                _this6.start();
              });
            }
          }, {
            key: "insertCursor",
            value: function insertCursor() {
              if (!this.showCursor)
                return;
              if (this.cursor)
                return;
              this.cursor = document.createElement("span");
              this.cursor.className = "typed-cursor";
              this.cursor.setAttribute("aria-hidden", true);
              this.cursor.innerHTML = this.cursorChar;
              this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
            }
          }]);
          return Typed3;
        }();
        exports2["default"] = Typed2;
        module2.exports = exports2["default"];
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var _defaultsJs = __webpack_require__(2);
        var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
        var Initializer = function() {
          function Initializer2() {
            _classCallCheck(this, Initializer2);
          }
          _createClass(Initializer2, [{
            key: "load",
            value: function load(self2, options, elementId) {
              if (typeof elementId === "string") {
                self2.el = document.querySelector(elementId);
              } else {
                self2.el = elementId;
              }
              self2.options = _extends({}, _defaultsJs2["default"], options);
              self2.isInput = self2.el.tagName.toLowerCase() === "input";
              self2.attr = self2.options.attr;
              self2.bindInputFocusEvents = self2.options.bindInputFocusEvents;
              self2.showCursor = self2.isInput ? false : self2.options.showCursor;
              self2.cursorChar = self2.options.cursorChar;
              self2.cursorBlinking = true;
              self2.elContent = self2.attr ? self2.el.getAttribute(self2.attr) : self2.el.textContent;
              self2.contentType = self2.options.contentType;
              self2.typeSpeed = self2.options.typeSpeed;
              self2.startDelay = self2.options.startDelay;
              self2.backSpeed = self2.options.backSpeed;
              self2.smartBackspace = self2.options.smartBackspace;
              self2.backDelay = self2.options.backDelay;
              self2.fadeOut = self2.options.fadeOut;
              self2.fadeOutClass = self2.options.fadeOutClass;
              self2.fadeOutDelay = self2.options.fadeOutDelay;
              self2.isPaused = false;
              self2.strings = self2.options.strings.map(function(s) {
                return s.trim();
              });
              if (typeof self2.options.stringsElement === "string") {
                self2.stringsElement = document.querySelector(self2.options.stringsElement);
              } else {
                self2.stringsElement = self2.options.stringsElement;
              }
              if (self2.stringsElement) {
                self2.strings = [];
                self2.stringsElement.style.display = "none";
                var strings = Array.prototype.slice.apply(self2.stringsElement.children);
                var stringsLength = strings.length;
                if (stringsLength) {
                  for (var i = 0; i < stringsLength; i += 1) {
                    var stringEl = strings[i];
                    self2.strings.push(stringEl.innerHTML.trim());
                  }
                }
              }
              self2.strPos = 0;
              self2.arrayPos = 0;
              self2.stopNum = 0;
              self2.loop = self2.options.loop;
              self2.loopCount = self2.options.loopCount;
              self2.curLoop = 0;
              self2.shuffle = self2.options.shuffle;
              self2.sequence = [];
              self2.pause = {
                status: false,
                typewrite: true,
                curString: "",
                curStrPos: 0
              };
              self2.typingComplete = false;
              for (var i in self2.strings) {
                self2.sequence[i] = i;
              }
              self2.currentElContent = this.getCurrentElContent(self2);
              self2.autoInsertCss = self2.options.autoInsertCss;
              this.appendAnimationCss(self2);
            }
          }, {
            key: "getCurrentElContent",
            value: function getCurrentElContent(self2) {
              var elContent = "";
              if (self2.attr) {
                elContent = self2.el.getAttribute(self2.attr);
              } else if (self2.isInput) {
                elContent = self2.el.value;
              } else if (self2.contentType === "html") {
                elContent = self2.el.innerHTML;
              } else {
                elContent = self2.el.textContent;
              }
              return elContent;
            }
          }, {
            key: "appendAnimationCss",
            value: function appendAnimationCss(self2) {
              var cssDataName = "data-typed-js-css";
              if (!self2.autoInsertCss) {
                return;
              }
              if (!self2.showCursor && !self2.fadeOut) {
                return;
              }
              if (document.querySelector("[" + cssDataName + "]")) {
                return;
              }
              var css = document.createElement("style");
              css.type = "text/css";
              css.setAttribute(cssDataName, true);
              var innerCss = "";
              if (self2.showCursor) {
                innerCss += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ";
              }
              if (self2.fadeOut) {
                innerCss += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ";
              }
              if (css.length === 0) {
                return;
              }
              css.innerHTML = innerCss;
              document.body.appendChild(css);
            }
          }]);
          return Initializer2;
        }();
        exports2["default"] = Initializer;
        var initializer = new Initializer();
        exports2.initializer = initializer;
      },
      function(module2, exports2) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var defaults = {
          strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
          stringsElement: null,
          typeSpeed: 0,
          startDelay: 0,
          backSpeed: 0,
          smartBackspace: true,
          shuffle: false,
          backDelay: 700,
          fadeOut: false,
          fadeOutClass: "typed-fade-out",
          fadeOutDelay: 500,
          loop: false,
          loopCount: Infinity,
          showCursor: true,
          cursorChar: "|",
          autoInsertCss: true,
          attr: null,
          bindInputFocusEvents: false,
          contentType: "html",
          onBegin: function onBegin(self2) {
          },
          onComplete: function onComplete(self2) {
          },
          preStringTyped: function preStringTyped(arrayPos, self2) {
          },
          onStringTyped: function onStringTyped(arrayPos, self2) {
          },
          onLastStringBackspaced: function onLastStringBackspaced(self2) {
          },
          onTypingPaused: function onTypingPaused(arrayPos, self2) {
          },
          onTypingResumed: function onTypingResumed(arrayPos, self2) {
          },
          onReset: function onReset(self2) {
          },
          onStop: function onStop(arrayPos, self2) {
          },
          onStart: function onStart(arrayPos, self2) {
          },
          onDestroy: function onDestroy(self2) {
          }
        };
        exports2["default"] = defaults;
        module2.exports = exports2["default"];
      },
      function(module2, exports2) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var HTMLParser = function() {
          function HTMLParser2() {
            _classCallCheck(this, HTMLParser2);
          }
          _createClass(HTMLParser2, [{
            key: "typeHtmlChars",
            value: function typeHtmlChars(curString, curStrPos, self2) {
              if (self2.contentType !== "html")
                return curStrPos;
              var curChar = curString.substr(curStrPos).charAt(0);
              if (curChar === "<" || curChar === "&") {
                var endTag = "";
                if (curChar === "<") {
                  endTag = ">";
                } else {
                  endTag = ";";
                }
                while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
                  curStrPos++;
                  if (curStrPos + 1 > curString.length) {
                    break;
                  }
                }
                curStrPos++;
              }
              return curStrPos;
            }
          }, {
            key: "backSpaceHtmlChars",
            value: function backSpaceHtmlChars(curString, curStrPos, self2) {
              if (self2.contentType !== "html")
                return curStrPos;
              var curChar = curString.substr(curStrPos).charAt(0);
              if (curChar === ">" || curChar === ";") {
                var endTag = "";
                if (curChar === ">") {
                  endTag = "<";
                } else {
                  endTag = "&";
                }
                while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
                  curStrPos--;
                  if (curStrPos < 0) {
                    break;
                  }
                }
                curStrPos--;
              }
              return curStrPos;
            }
          }]);
          return HTMLParser2;
        }();
        exports2["default"] = HTMLParser;
        var htmlParser = new HTMLParser();
        exports2.htmlParser = htmlParser;
      }
    ]);
  });
})(typed);
var Typed = /* @__PURE__ */ getDefaultExportFromCjs(typed.exports);
const useTyped = (domRemark) => {
  const frontmatter = usePageFrontmatter();
  const dom = domRemark ? domRemark : ".typed";
  const typedFction = () => {
    new Typed(dom, {
      strings: frontmatter.value.heroText,
      typeSpeed: 300,
      startDelay: 300,
      backSpeed: 500,
      loop: true,
      smartBackspace: true
    });
  };
  onMounted(() => {
    if (frontmatter.value.heroText && frontmatter.value.heroText instanceof Array) {
      nextTick(() => {
        setTimeout(() => {
          const el = document.querySelector(dom);
          if (el) {
            typedFction();
          }
        }, 500);
      });
    }
  });
  onUnmounted(() => {
  });
};
const _hoisted_1$b = {
  id: "banner",
  class: "w-full absolute z-0 overflow-hidden"
};
const _hoisted_2$7 = ["src"];
const _hoisted_3$5 = { class: "index z-100 absolute text-[#fff] text-center" };
const _hoisted_4$3 = {
  key: 0,
  class: "typed inline-block text-[2.5rem] font-[500]"
};
const _hoisted_5$2 = {
  key: 1,
  class: "typed inline-block text-[2.5rem] font-[500]"
};
const _hoisted_6$2 = {
  key: 0,
  class: "my-5 text-[1.6rem]"
};
const _hoisted_7$2 = {
  key: 0,
  id: "bubbles",
  class: "absolute w-full h-full z-[10]"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "HomeBanner",
  setup(__props) {
    const homeBanner = useBanner();
    useTyped();
    useCircleMagic();
    const mixImage = homeBanner.getRandomImage();
    const scrollFn = () => {
      const windowH = document.getElementsByClassName("hero")[0].clientHeight;
      document.documentElement.scrollTop = windowH;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "hero w-full relative h-[500px] flex justify-center items-center",
        style: normalizeStyle(unref(homeBanner).bannerOptions.bgImageStyle)
      }, [
        createBaseVNode("div", _hoisted_1$b, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(mixImage), (item) => {
            return openBlock(), createElementBlock("img", {
              src: item,
              key: item
            }, null, 8, _hoisted_2$7);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_3$5, [
          createBaseVNode("div", null, [
            `${unref(homeBanner).bannerOptions.heroText instanceof Array}` ? (openBlock(), createElementBlock("h1", _hoisted_4$3)) : (openBlock(), createElementBlock("h1", _hoisted_5$2, " vuePress-theme-Anyfork "))
          ]),
          unref(homeBanner).bannerOptions.tagline ? (openBlock(), createElementBlock("p", _hoisted_6$2, toDisplayString(unref(homeBanner).bannerOptions.tagline || "Welcome to your vuePress-theme-AnyFork site"), 1)) : createCommentVNode("", true),
          unref(homeBanner).bannerOptions.showArrow ? (openBlock(), createElementBlock("a", {
            key: 1,
            class: "anchor-down",
            onClick: scrollFn
          })) : createCommentVNode("", true)
        ]),
        unref(homeBanner).bannerOptions.bubbles ? (openBlock(), createElementBlock("div", _hoisted_7$2)) : createCommentVNode("", true)
      ], 4);
    };
  }
});
var HomeBanner = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "HomeBanner.vue"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", null, [
        createVNode(HomeBanner),
        createVNode(HomeBlog),
        createVNode(HomeFooter)
      ]);
    };
  }
});
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "Home.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "NavbarBrand",
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = computed(
      () => themeLocale.value.home || routeLocale.value
    );
    const navbarBrandTitle = computed(() => siteLocale.value.title);
    const navbarBrandLogo = computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createBlock(_component_RouterLink, { to: unref(navbarBrandLink) }, {
        default: withCtx(() => [
          createVNode(NavbarBrandLogo),
          unref(navbarBrandTitle) ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["site-name", { "can-hide": unref(navbarBrandLogo) }])
          }, toDisplayString(unref(navbarBrandTitle)), 3)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
});
var NavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "NavbarBrand.vue"]]);
const _hoisted_1$a = ["href", "rel", "target", "aria-label"];
const __default__ = defineComponent({
  inheritAttrs: false
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "AutoLink",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const site = useSiteData();
    const { item } = toRefs(props);
    const hasHttpProtocol = computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = computed(
      () => isLinkMailto(item.value.link) || isLinkTel(item.value.link)
    );
    const linkTarget = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isRouterLink = computed(
      () => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value
    );
    const linkRel = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_AutoLinkExternalIcon = resolveComponent("AutoLinkExternalIcon");
      return unref(isRouterLink) ? (openBlock(), createBlock(_component_RouterLink, mergeProps({
        key: 0,
        class: { "router-link-active": unref(isActive) },
        to: unref(item).link,
        "aria-label": unref(linkAriaLabel)
      }, _ctx.$attrs), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "before"),
          createTextVNode(" " + toDisplayString(unref(item).text) + " ", 1),
          renderSlot(_ctx.$slots, "after")
        ]),
        _: 3
      }, 16, ["class", "to", "aria-label"])) : (openBlock(), createElementBlock("a", mergeProps({
        key: 1,
        class: "external-link",
        href: unref(item).link,
        rel: unref(linkRel),
        target: unref(linkTarget),
        "aria-label": unref(linkAriaLabel)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "before"),
        createTextVNode(" " + toDisplayString(unref(item).text) + " ", 1),
        unref(isBlankTarget) ? (openBlock(), createBlock(_component_AutoLinkExternalIcon, { key: 0 })) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "after")
      ], 16, _hoisted_1$a));
    };
  }
});
var AutoLink = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "AutoLink.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DropdownTransition",
  setup(__props) {
    const setHeight = (items) => {
      items.style.height = items.scrollHeight + "px";
    };
    const unsetHeight = (items) => {
      items.style.height = "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "dropdown",
        onEnter: setHeight,
        onAfterEnter: unsetHeight,
        onBeforeLeave: setHeight
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      });
    };
  }
});
var DropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "DropdownTransition.vue"]]);
const _hoisted_1$9 = ["aria-label"];
const _hoisted_2$6 = { class: "title" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("span", { class: "arrow down" }, null, -1);
const _hoisted_4$2 = ["aria-label"];
const _hoisted_5$1 = { class: "title" };
const _hoisted_6$1 = { class: "navbar-dropdown" };
const _hoisted_7$1 = { class: "navbar-dropdown-subtitle" };
const _hoisted_8$1 = { key: 1 };
const _hoisted_9$1 = { class: "navbar-dropdown-subitem-wrapper" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "NavbarDropdown",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = toRefs(props);
    const dropdownAriaLabel = computed(
      () => item.value.ariaLabel || item.value.text
    );
    const open = ref(false);
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        open.value = false;
      }
    );
    const handleDropdown = (e) => {
      const isTriggerByTab = e.detail === 0;
      if (isTriggerByTab) {
        open.value = !open.value;
      } else {
        open.value = false;
      }
    };
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["navbar-dropdown-wrapper", { open: open.value }])
      }, [
        createBaseVNode("button", {
          class: "navbar-dropdown-title",
          type: "button",
          "aria-label": unref(dropdownAriaLabel),
          onClick: handleDropdown
        }, [
          createBaseVNode("span", _hoisted_2$6, toDisplayString(unref(item).text), 1),
          _hoisted_3$4
        ], 8, _hoisted_1$9),
        createBaseVNode("button", {
          class: "navbar-dropdown-title-mobile",
          type: "button",
          "aria-label": unref(dropdownAriaLabel),
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          createBaseVNode("span", _hoisted_5$1, toDisplayString(unref(item).text), 1),
          createBaseVNode("span", {
            class: normalizeClass(["arrow", open.value ? "down" : "right"])
          }, null, 2)
        ], 8, _hoisted_4$2),
        createVNode(DropdownTransition, null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_6$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(item).children, (child) => {
                return openBlock(), createElementBlock("li", {
                  key: child.text,
                  class: "navbar-dropdown-item"
                }, [
                  child.children ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("h4", _hoisted_7$1, [
                      child.link ? (openBlock(), createBlock(AutoLink, {
                        key: 0,
                        item: child,
                        onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && child.children.length === 0 && (open.value = false)
                      }, null, 8, ["item", "onFocusout"])) : (openBlock(), createElementBlock("span", _hoisted_8$1, toDisplayString(child.text), 1))
                    ]),
                    createBaseVNode("ul", _hoisted_9$1, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(child.children, (grandchild) => {
                        return openBlock(), createElementBlock("li", {
                          key: grandchild.link,
                          class: "navbar-dropdown-subitem"
                        }, [
                          createVNode(AutoLink, {
                            item: grandchild,
                            onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, unref(item).children) && (open.value = false)
                          }, null, 8, ["item", "onFocusout"])
                        ]);
                      }), 128))
                    ])
                  ], 64)) : (openBlock(), createBlock(AutoLink, {
                    key: 1,
                    item: child,
                    onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && (open.value = false)
                  }, null, 8, ["item", "onFocusout"]))
                ]);
              }), 128))
            ], 512), [
              [vShow, open.value]
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
var NavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "NavbarDropdown.vue"]]);
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _hoisted_1$8 = {
  key: 0,
  class: "navbar-items inline-flex items-center"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NavbarItems",
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return computed(() => {
        var _a, _b, _c;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const currentHash = router.currentRoute.value.hash;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_c = (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : themeLocale.value.selectLanguageText) != null ? _c : "unknown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c2, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c2 = themeLocale.value.locales) == null ? void 0 : _c2[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = `${targetLocalePage}${currentHash}`;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = computed(() => themeLocale.value.repo);
      const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return {
          ...item,
          children: item.children.map(resolveNavbarItem)
        };
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = computed(() => [...navbarConfig.value, ...navbarSelectLanguage.value, ...navbarRepo.value]);
    return (_ctx, _cache) => {
      const _component_Icon = resolveComponent("Icon");
      return unref(navbarLinks).length ? (openBlock(), createElementBlock("nav", _hoisted_1$8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navbarLinks), (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.text,
            class: "navbar-item"
          }, [
            item.children ? (openBlock(), createBlock(NavbarDropdown, {
              key: 0,
              item,
              class: "!flex !items-center"
            }, null, 8, ["item"])) : item.icon ? (openBlock(), createBlock(AutoLink, {
              key: 1,
              item,
              class: "!flex !items-center !text-[#000]"
            }, {
              before: withCtx(() => [
                createVNode(_component_Icon, {
                  icon: item.icon,
                  iconColor: "#000"
                }, null, 8, ["icon"])
              ]),
              _: 2
            }, 1032, ["item"])) : (openBlock(), createBlock(AutoLink, {
              key: 2,
              item
            }, null, 8, ["item"]))
          ]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var NavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "NavbarItems.vue"]]);
const _hoisted_1$7 = ["title"];
const _hoisted_2$5 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_3$3 = /* @__PURE__ */ createStaticVNode('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>', 9);
const _hoisted_12 = [
  _hoisted_3$3
];
const _hoisted_13 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",
  fill: "currentColor"
}, null, -1);
const _hoisted_15 = [
  _hoisted_14
];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ToggleColorModeButton",
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const toggleColorMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "toggle-color-mode-button",
        title: unref(themeLocale).toggleColorMode,
        onClick: toggleColorMode
      }, [
        withDirectives((openBlock(), createElementBlock("svg", _hoisted_2$5, _hoisted_12, 512)), [
          [vShow, !unref(isDarkMode)]
        ]),
        withDirectives((openBlock(), createElementBlock("svg", _hoisted_13, _hoisted_15, 512)), [
          [vShow, unref(isDarkMode)]
        ])
      ], 8, _hoisted_1$7);
    };
  }
});
var ToggleColorModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "ToggleColorModeButton.vue"]]);
const _hoisted_1$6 = ["title"];
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("span")
], -1);
const _hoisted_3$2 = [
  _hoisted_2$4
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ToggleSidebarButton",
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "toggle-sidebar-button",
        title: unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle"))
      }, _hoisted_3$2, 8, _hoisted_1$6);
    };
  }
});
var ToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "ToggleSidebarButton.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = ref(null);
    const navbarBrand = ref(null);
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _cache) => {
      const _component_NavbarSearch = resolveComponent("NavbarSearch");
      return openBlock(), createElementBlock("header", {
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, [
        createVNode(ToggleSidebarButton, {
          onToggle: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-sidebar"))
        }),
        createBaseVNode("span", {
          ref_key: "navbarBrand",
          ref: navbarBrand
        }, [
          createVNode(NavbarBrand)
        ], 512),
        createBaseVNode("div", {
          class: "navbar-items-wrapper",
          style: normalizeStyle(unref(linksWrapperStyle))
        }, [
          renderSlot(_ctx.$slots, "before"),
          createVNode(NavbarItems, { class: "can-hide" }),
          renderSlot(_ctx.$slots, "after"),
          unref(themeLocale).colorModeSwitch ? (openBlock(), createBlock(ToggleColorModeButton, { key: 0 })) : createCommentVNode("", true),
          createVNode(_component_NavbarSearch)
        ], 4)
      ], 512);
    };
  }
});
var Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "Navbar.vue"]]);
const _hoisted_1$5 = { class: "page-meta" };
const _hoisted_2$3 = {
  key: 0,
  class: "meta-item edit-link"
};
const _hoisted_3$1 = {
  key: 1,
  class: "meta-item last-updated"
};
const _hoisted_4$1 = { class: "meta-item-label" };
const _hoisted_5 = { class: "meta-item-info" };
const _hoisted_6 = {
  key: 2,
  class: "meta-item contributors"
};
const _hoisted_7 = { class: "meta-item-label" };
const _hoisted_8 = { class: "meta-item-info" };
const _hoisted_9 = ["title"];
const _hoisted_10 = /* @__PURE__ */ createTextVNode(", ");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PageMeta",
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("footer", _hoisted_1$5, [
        unref(editNavLink) ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
          createVNode(AutoLink, {
            class: "meta-item-label",
            item: unref(editNavLink)
          }, null, 8, ["item"])
        ])) : createCommentVNode("", true),
        unref(lastUpdated) ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          createBaseVNode("span", _hoisted_4$1, toDisplayString(unref(themeLocale).lastUpdatedText) + ": ", 1),
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_5, toDisplayString(unref(lastUpdated)), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        unref(contributors) && unref(contributors).length ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("span", _hoisted_7, toDisplayString(unref(themeLocale).contributorsText) + ": ", 1),
          createBaseVNode("span", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(contributors), (contributor, index) => {
              return openBlock(), createElementBlock(Fragment, { key: index }, [
                createBaseVNode("span", {
                  class: "contributor",
                  title: `email: ${contributor.email}`
                }, toDisplayString(contributor.name), 9, _hoisted_9),
                index !== unref(contributors).length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  _hoisted_10
                ], 64)) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "PageMeta.vue"]]);
const _hoisted_1$4 = {
  key: 0,
  class: "page-nav"
};
const _hoisted_2$2 = { class: "inner" };
const _hoisted_3 = {
  key: 0,
  class: "prev"
};
const _hoisted_4 = {
  key: 1,
  class: "next"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PageNav",
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index !== -1) {
        const targetItem = sidebarItems2[index + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(
            item.children,
            currentPath,
            offset
          );
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = useRoute();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _cache) => {
      return unref(prevNavLink) || unref(nextNavLink) ? (openBlock(), createElementBlock("nav", _hoisted_1$4, [
        createBaseVNode("p", _hoisted_2$2, [
          unref(prevNavLink) ? (openBlock(), createElementBlock("span", _hoisted_3, [
            createVNode(AutoLink, { item: unref(prevNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("", true),
          unref(nextNavLink) ? (openBlock(), createElementBlock("span", _hoisted_4, [
            createVNode(AutoLink, { item: unref(nextNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("", true)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
var PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "PageNav.vue"]]);
const _hoisted_1$3 = { class: "page" };
const _hoisted_2$1 = { class: "theme-default-content" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Page",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("main", _hoisted_1$3, [
        renderSlot(_ctx.$slots, "top"),
        createBaseVNode("div", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "content-top"),
          createVNode(_component_Content),
          renderSlot(_ctx.$slots, "content-bottom")
        ]),
        createVNode(PageMeta),
        createVNode(PageNav),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
var Page = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "Page.vue"]]);
const _hoisted_1$2 = ["onKeydown"];
const _hoisted_2 = { class: "sidebar-item-children" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const isActive = computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const [isOpen, toggleIsOpen] = useToggle(isActive.value);
    const onClick = (e) => {
      if (item.value.collapsible) {
        e.preventDefault();
        toggleIsOpen();
      }
    };
    const unregisterRouterHook = router.afterEach((to) => {
      nextTick(() => {
        isOpen.value = item.value.collapsible ? isActive.value : true;
      });
    });
    onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_SidebarItem = resolveComponent("SidebarItem", true);
      return openBlock(), createElementBlock("li", null, [
        unref(item).link ? (openBlock(), createBlock(AutoLink, {
          key: 0,
          class: normalizeClass(unref(itemClass)),
          item: unref(item)
        }, null, 8, ["class", "item"])) : (openBlock(), createElementBlock("p", {
          key: 1,
          tabindex: "0",
          class: normalizeClass(unref(itemClass)),
          onClick,
          onKeydown: withKeys(onClick, ["enter"])
        }, [
          createTextVNode(toDisplayString(unref(item).text) + " ", 1),
          unref(item).collapsible ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["arrow", unref(isOpen) ? "down" : "right"])
          }, null, 2)) : createCommentVNode("", true)
        ], 42, _hoisted_1$2)),
        ((_a = unref(item).children) == null ? void 0 : _a.length) ? (openBlock(), createBlock(DropdownTransition, { key: 2 }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(item).children, (child) => {
                return openBlock(), createBlock(_component_SidebarItem, {
                  key: `${unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: unref(depth) + 1
                }, null, 8, ["item", "depth"]);
              }), 128))
            ], 512), [
              [vShow, unref(isOpen)]
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
var SidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "SidebarItem.vue"]]);
const _hoisted_1$1 = {
  key: 0,
  class: "sidebar-items"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItems",
  setup(__props) {
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    onMounted(() => {
      watch(
        () => route.hash,
        (hash) => {
          const sidebar = document.querySelector(".sidebar");
          if (!sidebar)
            return;
          const activeSidebarItem = document.querySelector(
            `.sidebar a.sidebar-item[href="${route.path}${hash}"]`
          );
          if (!activeSidebarItem)
            return;
          const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
          const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
          if (activeSidebarItemTop < sidebarTop) {
            activeSidebarItem.scrollIntoView(true);
          } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
            activeSidebarItem.scrollIntoView(false);
          }
        }
      );
    });
    return (_ctx, _cache) => {
      return unref(sidebarItems).length ? (openBlock(), createElementBlock("ul", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebarItems), (item) => {
          return openBlock(), createBlock(SidebarItem, {
            key: `${item.text}${item.link}`,
            item
          }, null, 8, ["item"]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var SidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "SidebarItems.vue"]]);
const _hoisted_1 = { class: "sidebar" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1, [
        createVNode(NavbarItems),
        renderSlot(_ctx.$slots, "top"),
        createVNode(SidebarItems),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
var Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "Sidebar.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = computed(
      () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
    );
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      }
    };
    const containerClass = computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    onMounted(() => {
      const router = useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    onUnmounted(() => {
      unregisterRouterHook();
    });
    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["theme-container", unref(containerClass)]),
        onTouchstart: onTouchStart,
        onTouchend: onTouchEnd
      }, [
        renderSlot(_ctx.$slots, "navbar", {}, () => [
          unref(shouldShowNavbar) ? (openBlock(), createBlock(Navbar, {
            key: 0,
            onToggleSidebar: toggleSidebar
          }, {
            before: withCtx(() => [
              renderSlot(_ctx.$slots, "navbar-before")
            ]),
            after: withCtx(() => [
              renderSlot(_ctx.$slots, "navbar-after")
            ]),
            _: 3
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", {
          class: "sidebar-mask",
          onClick: _cache[0] || (_cache[0] = ($event) => toggleSidebar(false))
        }),
        renderSlot(_ctx.$slots, "sidebar", {}, () => [
          createVNode(Sidebar, null, {
            top: withCtx(() => [
              renderSlot(_ctx.$slots, "sidebar-top")
            ]),
            bottom: withCtx(() => [
              renderSlot(_ctx.$slots, "sidebar-bottom")
            ]),
            _: 3
          })
        ]),
        renderSlot(_ctx.$slots, "page", {}, () => [
          unref(frontmatter).home ? (openBlock(), createBlock(Home, { key: 0 })) : (openBlock(), createBlock(Transition, {
            key: 1,
            name: "fade-slide-y",
            mode: "out-in",
            onBeforeEnter: unref(onBeforeEnter),
            onBeforeLeave: unref(onBeforeLeave)
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Page, {
                key: unref(page).path
              }, {
                top: withCtx(() => [
                  renderSlot(_ctx.$slots, "page-top")
                ]),
                "content-top": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-content-top")
                ]),
                "content-bottom": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-content-bottom")
                ]),
                bottom: withCtx(() => [
                  renderSlot(_ctx.$slots, "page-bottom")
                ]),
                _: 3
              }))
            ]),
            _: 3
          }, 8, ["onBeforeEnter", "onBeforeLeave"]))
        ])
      ], 34);
    };
  }
});
var ParentLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Layout.vue"]]);
export { BlogItemInfo as B, ParentLayout as P, useRandomColor as a, BlogItem as b, c, u };
