(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    pssB: function(e, t, a) {
      'use strict';
      var u = a('g09b');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('J+/v');
      var n = u(a('MoRW'));
      a('+L6B');
      var o = u(a('2/Rp')),
        r = u(a('q1tI')),
        i = u(a('3a4m')),
        s = function() {
          return r.default.createElement(n.default, {
            status: '404',
            title: '404',
            subTitle: 'Sorry, the page you visited does not exist.',
            extra: r.default.createElement(
              o.default,
              {
                type: 'primary',
                onClick: function() {
                  return i.default.push('/');
                },
              },
              'Back Home',
            ),
          });
        },
        d = s;
      t.default = d;
    },
  },
]);
