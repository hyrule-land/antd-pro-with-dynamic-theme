(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    L9NX: function(e, t, r) {
      'use strict';
      var n = r('g09b');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(r('2Taf')),
        u = n(r('vZ4D')),
        i = n(r('l4Ni')),
        o = n(r('ujKo')),
        s = n(r('MhPg')),
        d = n(r('q1tI')),
        c = r('MuoO'),
        l = r('ArA+'),
        f = r('s4NR'),
        p = n(r('Jdo2')),
        h = (function(e) {
          function t() {
            var e, r;
            (0, a.default)(this, t);
            for (var n = arguments.length, u = new Array(n), s = 0; s < n; s++) u[s] = arguments[s];
            return (
              (r = (0, i.default)(this, (e = (0, o.default)(t)).call.apply(e, [this].concat(u)))),
              (r.state = { isReady: !1 }),
              r
            );
          }
          return (
            (0, s.default)(t, e),
            (0, u.default)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.setState({ isReady: !0 });
                  var e = this.props.dispatch;
                  e && e({ type: 'user/fetchCurrent' });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state.isReady,
                    t = this.props,
                    r = t.children,
                    n = t.loading,
                    a = t.currentUser,
                    u = a && a.userid,
                    i = (0, f.stringify)({ redirect: window.location.href });
                  return (!u && n) || !e
                    ? d.default.createElement(p.default, null)
                    : u
                    ? r
                    : d.default.createElement(l.Redirect, { to: '/user/login?'.concat(i) });
                },
              },
            ]),
            t
          );
        })(d.default.Component),
        v = (0, c.connect)(function(e) {
          var t = e.user,
            r = e.loading;
          return { currentUser: t.currentUser, loading: r.models.user };
        })(h);
      t.default = v;
    },
    o2JA: function(e, t, r) {
      'use strict';
    },
  },
]);
