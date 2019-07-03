'use strict';
let DEPACK_EXPORT;
const http = require('http');'use strict';
const h = /^[^[]*/, k = /^\[(\d+)\]/, l = /^\[([^\]]+)\]/;
function m(a) {
  function c() {
    return [{type:"object", key:a, a:!0}];
  }
  var b = h.exec(a)[0];
  if (!b) {
    return c();
  }
  const e = a.length;
  let d = b.length;
  b = {type:"object", key:b};
  const g = [b];
  for (; d < e;) {
    let f;
    if ("[" === a[d] && "]" === a[d + 1]) {
      if (d += 2, b.append = !0, d !== e) {
        return c();
      }
    } else {
      if (f = k.exec(a.substring(d)), null !== f) {
        d += f[0].length, b.b = "array", b = {type:"array", key:parseInt(f[1], 10)}, g.push(b);
      } else {
        if (f = l.exec(a.substring(d)), null !== f) {
          d += f[0].length, b.b = "object", b = {type:"object", key:f[1]}, g.push(b);
        } else {
          return c();
        }
      }
    }
  }
  b.a = !0;
  return g;
}
;function n(a) {
  return void 0 === a ? "undefined" : Array.isArray(a) ? "array" : "object" == typeof a ? "object" : "scalar";
}
function p(a, c, b, e) {
  switch(n(b)) {
    case "undefined":
      a[c.key] = c.append ? [e] : e;
      break;
    case "array":
      a[c.key].push(e);
      break;
    case "object":
      return p(b, {type:"object", key:"", a:!0}, b[""], e);
    case "scalar":
      a[c.key] = [a[c.key], e];
  }
  return a;
}
function q(a, c, b, e) {
  if (c.a) {
    return p(a, c, b, e);
  }
  let d;
  switch(n(b)) {
    case "undefined":
      return a[c.key] = "array" == c.b ? [] : {}, a[c.key];
    case "object":
      return a[c.key];
    case "array":
      if ("array" == c.b) {
        return b;
      }
      d = {};
      a[c.key] = d;
      b.forEach(function(g, f) {
        void 0 !== g && (d["" + f] = g);
      });
      return d;
    case "scalar":
      return d = {}, d[""] = b, a[c.key] = d;
  }
}
;DEPACK_EXPORT = {_appendField:function(a, c, b) {
  m(c).reduce(function(e, d) {
    return q(e, d, e[d.key], b);
  }, a);
}};


module.exports = DEPACK_EXPORT