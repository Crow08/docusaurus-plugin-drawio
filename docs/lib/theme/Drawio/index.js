'use strict';

var BrowserOnly = require('@docusaurus/BrowserOnly');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BrowserOnly__default = /*#__PURE__*/_interopDefaultLegacy(BrowserOnly);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".docusaurus-plugin-drawio {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  text-align: center;\n  overflow-x: auto;\n}\n\nhtml[data-theme='dark'] .docusaurus-plugin-drawio {\n  background-color: #242526;\n  color: #fff;\n}\nbody > div:nth-child(3) {\n  background: var(--ifm-background-surface-color) !important;\n}\n\nbody > div:nth-child(3) > div {\n  top: initial !important;\n}\n\n.docusaurus-plugin-drawio > div {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid transparent;\n  min-width: 180px;\n}\n";
styleInject(css_248z);

var Drawio = function (_a) {
    var content = _a.content, maxHeight = _a.maxHeight, autoFit = _a.autoFit, autoCrop = _a.autoCrop, autoOrigin = _a.autoOrigin, allowZoomOut = _a.allowZoomOut, allowZoomIn = _a.allowZoomIn, checkVisibleState = _a.checkVisibleState, toolbarPosition = _a.toolbarPosition, toolbarNohide = _a.toolbarNohide, toolbarButtons = _a.toolbarButtons, restConfig = __rest(_a, ["content", "maxHeight", "autoFit", "autoCrop", "autoOrigin", "allowZoomOut", "allowZoomIn", "checkVisibleState", "toolbarPosition", "toolbarNohide", "toolbarButtons"]);
    var el = React.useRef(null);
    var GraphViewer = window.GraphViewer;
    React.useEffect(function () {
        if (!GraphViewer) {
            console.error('GraphViewer is not loaded');
            return;
        }
        if (!content) {
            console.error('drawio file is empty');
            return;
        }
        var data = __assign({ editable: '_blank', highlight: '#0000ff', nav: true, resize: true, toolbar: 'zoom lightbox', xml: content, 'max-height': maxHeight, 'auto-fit': autoFit, 'auto-crop': autoCrop, 'auto-origin': autoOrigin, 'allow-zoom-out': allowZoomOut, 'allow-zoom-in': allowZoomIn, 'check-visible-state': checkVisibleState, 'toolbar-position': toolbarPosition, 'toolbar-nohide': toolbarNohide, 'toolbar-buttons': toolbarButtons }, restConfig);
        var json = JSON.stringify(data);
        el.current.dataset.mxgraph = json;
        setTimeout(function () {
            GraphViewer.createViewerForElement(el.current);
        }, 0);
    }, []);
    return (React__default["default"].createElement("div", { className: "docusaurus-plugin-drawio" },
        React__default["default"].createElement("div", { className: "docusaurus-plugin-drawio__content", ref: el })));
};
var Wrapper = function (props) {
    return (React__default["default"].createElement(BrowserOnly__default["default"], { fallback: React__default["default"].createElement(React__default["default"].Fragment, null, "loading...") }, function () { return React__default["default"].createElement(Drawio, __assign({}, props)); }));
};
var drawio = React.memo(Wrapper);

module.exports = drawio;
