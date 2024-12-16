// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"faLUp":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "04c3a0646690e0da";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"2OpUZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _checkOutControl = require("./modules/control/checkOutControl");
var _checkOutControlDefault = parcelHelpers.interopDefault(_checkOutControl);
const cardBody = document.querySelector('.card');
document.addEventListener('DOMContentLoaded', ()=>{
    const init = ()=>{
        (0, _checkOutControlDefault.default)(cardBody);
    };
    init();
});

},{"./modules/control/checkOutControl":"9K5a1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9K5a1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redom = require("redom");
var _createCreditCard = require("../create/createCreditCard");
var _createCreditCardDefault = parcelHelpers.interopDefault(_createCreditCard);
var _createForm = require("../create/createForm");
var _createFormDefault = parcelHelpers.interopDefault(_createForm);
var _createCheckoutLabel = require("../create/createCheckoutLabel");
var _createCheckoutLabelDefault = parcelHelpers.interopDefault(_createCheckoutLabel);
var _creditCardInputMask = require("credit-card-input-mask");
var _creditCardInputMaskDefault = parcelHelpers.interopDefault(_creditCardInputMask);
var _airDatepicker = require("air-datepicker");
var _airDatepickerDefault = parcelHelpers.interopDefault(_airDatepicker);
var _validateCard = require("../utility/validateCard");
var _validateCardDefault = parcelHelpers.interopDefault(_validateCard);
const checkOutControl = (parent)=>{
    const p = (0, _createCheckoutLabelDefault.default)();
    const { card, number: cardNum, cardName, cardDate } = (0, _createCreditCardDefault.default)();
    const { formContainer, owner, number, date, cvv, sendBtn, btn } = (0, _createFormDefault.default)();
    const matrix = 'xxxx xxxx xxxx xxxx';
    const dateInput = date.querySelector('input');
    const cvvInput = cvv.querySelector('input');
    const nameInput = owner.querySelector('input');
    // ! Функионал
    const numberInput = number.querySelector('input');
    numberInput.addEventListener('focus', ({ target })=>{
        if (target.value.length === 0) target.value = 'xxxx xxxx xxxx xxxx';
    });
    // ? Имя, начало
    nameInput.addEventListener('input', ({ target })=>{
        const matrix = 'John Doe';
        target.value = target.value.replace(/[^a-z\s]/gim, '');
        cardName.textContent = target.value;
        if (target.value.length === 0) cardName.textContent = matrix;
    });
    // ? Имя, конец
    dateInput.addEventListener('click', ({ target })=>{
        const picker = new (0, _airDatepickerDefault.default)(target, {
            view: 'months',
            minView: 'months',
            dateFormat: 'MM yy'
        });
        picker.show();
    });
    dateInput.addEventListener('blur', ({ target })=>{
        target.value = target.value.replace(/\s/g, '/');
        cardDate.textContent = target.value;
    });
    cvvInput.addEventListener('input', ({ target })=>{
        target.value = target.value.replace(/\D/, '');
        target.value = target.value.slice(0, 3);
    });
    // const isDate = new Promise(resolve => {
    //   dateInput.addEventListener('blur', ({target}) => {
    //     target.value = target.value.replace(/\s/g, '/');
    //     cardDate.textContent = target.value;
    //     if (/(\d{2})\/(\d{2})/.test(target.value)) {
    //       console.log('date - resolved');
    //       resolve();
    //     };
    //   });
    // });
    // const isName = new Promise(resolve => {
    //   let isTyping;
    //   let isPending = true;
    //   clearTimeout(isTyping);
    //   const nameInput = owner.querySelector('input');
    //   nameInput.addEventListener('input', ({target}) => {
    //     const matrix = 'John Doe';
    //     target.value = target.value.replace(/[^a-z\s]/gim, '');
    //     cardName.textContent = target.value;
    //     if (target.value.length === 0) cardName.textContent = matrix;
    //     isTyping = setTimeout(() => {
    //       if (/\w\s{1}\w/i.test(target.value) &&
    //       isPending) {
    //         isPending = false;
    //         clearTimeout(isTyping);
    //         resolve();
    //       }
    //     }, 7000);
    //   });
    // });
    // const isNum = new Promise(resolve => {
    //   numberInput.addEventListener('input', ({target}) => {
    //     new CreditCardInputMask({
    //       element: target,
    //       pattern: '{{9999}} {{9999}} {{9999}} {{9999}}',
    //     });
    //     target.value = target.value + matrix.slice(target.value.length);
    //     cardNum.textContent = target.value + matrix.slice(target.value.length);
    //     if (/(\d{4}\s{1}){3}(\d{4}){1}/gim.test(target.value)) resolve();
    //   });
    // });
    // const isCvv = new Promise(resolve => {
    //   cvvInput.addEventListener('input', ({target}) => {
    //     target.value = target.value.replace(/\D/, '');
    //     target.value = target.value.slice(0, 3);
    //     if (/\d{3}/.test(target.value)) resolve();
    //   });
    // });
    // Promise.all([isDate, isName, isNum, isCvv])
    //   .then(() => {
    //     btn.disabled = false;
    //   });
    formContainer.addEventListener('submit', (ev)=>{
        ev.preventDefault();
        console.log("\u0412\u044B \u043F\u044B\u0442\u0430\u0435\u0442\u0435\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443, \u0443 \u0432\u0430\u0441 \u044D\u0442\u043E \u043D\u0435 \u0432\u044B\u0439\u0434\u0435\u0442!");
    // console.log('123');
    // const target = ev.target;
    // const obj = new FormData(target);
    // console.log(obj);
    // validateCard(obj);
    });
    numberInput.addEventListener('input', (ev)=>{
        const target = ev.target;
        new (0, _creditCardInputMaskDefault.default)({
            element: target,
            pattern: '{{9999}} {{9999}} {{9999}} {{9999}}'
        });
        console.log('333', target.value + matrix.slice(target.value.length));
        cardNum.textContent = target.value + matrix.slice(target.value.length);
    });
    sendBtn.addEventListener('click', (ev)=>{
        const target = ev.target;
        // console.log(target);
        (0, _validateCardDefault.default)(formContainer);
    });
    // ? вставка элементов
    (0, _redom.setChildren)(parent, p, card, formContainer);
    return card;
};
exports.default = checkOutControl;

},{"redom":"cWIuY","../create/createCreditCard":"2T35K","../create/createForm":"5fONl","../create/createCheckoutLabel":"a0uMR","credit-card-input-mask":"bO9Hm","air-datepicker":"grWkP","../utility/validateCard":"aSSob","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cWIuY":[function(require,module,exports,__globalThis) {
(function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    'use strict';
    function createElement(query, ns) {
        var ref = parse(query);
        var tag = ref.tag;
        var id = ref.id;
        var className = ref.className;
        var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
        if (id) element.id = id;
        if (className) {
            if (ns) element.setAttribute("class", className);
            else element.className = className;
        }
        return element;
    }
    function parse(query) {
        var chunks = query.split(/([.#])/);
        var className = "";
        var id = "";
        for(var i = 1; i < chunks.length; i += 2)switch(chunks[i]){
            case ".":
                className += " " + chunks[i + 1];
                break;
            case "#":
                id = chunks[i + 1];
        }
        return {
            className: className.trim(),
            tag: chunks[0] || "div",
            id: id
        };
    }
    function html(query) {
        var args = [], len = arguments.length - 1;
        while(len-- > 0)args[len] = arguments[len + 1];
        var element;
        var type = typeof query;
        if (type === "string") element = createElement(query);
        else if (type === "function") {
            var Query = query;
            element = new (Function.prototype.bind.apply(Query, [
                null
            ].concat(args)));
        } else throw new Error("At least one argument required");
        parseArgumentsInternal(getEl(element), args, true);
        return element;
    }
    var el = html;
    var h = html;
    html.extend = function extendHtml() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return html.bind.apply(html, [
            this
        ].concat(args));
    };
    function unmount(parent, child) {
        var parentEl = getEl(parent);
        var childEl = getEl(child);
        if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
        child = childEl.__redom_view;
        if (childEl.parentNode) {
            doUnmount(child, childEl, parentEl);
            parentEl.removeChild(childEl);
        }
        return child;
    }
    function doUnmount(child, childEl, parentEl) {
        var hooks = childEl.__redom_lifecycle;
        if (hooksAreEmpty(hooks)) {
            childEl.__redom_lifecycle = {};
            return;
        }
        var traverse = parentEl;
        if (childEl.__redom_mounted) trigger(childEl, "onunmount");
        while(traverse){
            var parentHooks = traverse.__redom_lifecycle || {};
            for(var hook in hooks)if (parentHooks[hook]) parentHooks[hook] -= hooks[hook];
            if (hooksAreEmpty(parentHooks)) traverse.__redom_lifecycle = null;
            traverse = traverse.parentNode;
        }
    }
    function hooksAreEmpty(hooks) {
        if (hooks == null) return true;
        for(var key in hooks){
            if (hooks[key]) return false;
        }
        return true;
    }
    /* global Node, ShadowRoot */ var hookNames = [
        "onmount",
        "onremount",
        "onunmount"
    ];
    var shadowRootAvailable = typeof window !== "undefined" && "ShadowRoot" in window;
    function mount(parent, child, before, replace) {
        var parentEl = getEl(parent);
        var childEl = getEl(child);
        if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
        child = childEl.__redom_view;
        if (child !== childEl) childEl.__redom_view = child;
        var wasMounted = childEl.__redom_mounted;
        var oldParent = childEl.parentNode;
        if (wasMounted && oldParent !== parentEl) doUnmount(child, childEl, oldParent);
        if (before != null) {
            if (replace) {
                var beforeEl = getEl(before);
                if (beforeEl.__redom_mounted) trigger(beforeEl, "onunmount");
                parentEl.replaceChild(childEl, beforeEl);
            } else parentEl.insertBefore(childEl, getEl(before));
        } else parentEl.appendChild(childEl);
        doMount(child, childEl, parentEl, oldParent);
        return child;
    }
    function trigger(el, eventName) {
        if (eventName === "onmount" || eventName === "onremount") el.__redom_mounted = true;
        else if (eventName === "onunmount") el.__redom_mounted = false;
        var hooks = el.__redom_lifecycle;
        if (!hooks) return;
        var view = el.__redom_view;
        var hookCount = 0;
        view && view[eventName] && view[eventName]();
        for(var hook in hooks)if (hook) hookCount++;
        if (hookCount) {
            var traverse = el.firstChild;
            while(traverse){
                var next = traverse.nextSibling;
                trigger(traverse, eventName);
                traverse = next;
            }
        }
    }
    function doMount(child, childEl, parentEl, oldParent) {
        var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
        var remount = parentEl === oldParent;
        var hooksFound = false;
        for(var i = 0, list = hookNames; i < list.length; i += 1){
            var hookName = list[i];
            if (!remount) {
                // if already mounted, skip this phase
                if (child !== childEl) // only Views can have lifecycle events
                {
                    if (hookName in child) hooks[hookName] = (hooks[hookName] || 0) + 1;
                }
            }
            if (hooks[hookName]) hooksFound = true;
        }
        if (!hooksFound) {
            childEl.__redom_lifecycle = {};
            return;
        }
        var traverse = parentEl;
        var triggered = false;
        if (remount || traverse && traverse.__redom_mounted) {
            trigger(childEl, remount ? "onremount" : "onmount");
            triggered = true;
        }
        while(traverse){
            var parent = traverse.parentNode;
            var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});
            for(var hook in hooks)parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
            if (triggered) break;
            else {
                if (traverse.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse instanceof ShadowRoot || parent && parent.__redom_mounted) {
                    trigger(traverse, remount ? "onremount" : "onmount");
                    triggered = true;
                }
                traverse = parent;
            }
        }
    }
    function setStyle(view, arg1, arg2) {
        var el = getEl(view);
        if (typeof arg1 === "object") for(var key in arg1)setStyleValue(el, key, arg1[key]);
        else setStyleValue(el, arg1, arg2);
    }
    function setStyleValue(el, key, value) {
        el.style[key] = value == null ? "" : value;
    }
    /* global SVGElement */ var xlinkns = "http://www.w3.org/1999/xlink";
    function setAttr(view, arg1, arg2) {
        setAttrInternal(view, arg1, arg2);
    }
    function setAttrInternal(view, arg1, arg2, initial) {
        var el = getEl(view);
        var isObj = typeof arg1 === "object";
        if (isObj) for(var key in arg1)setAttrInternal(el, key, arg1[key], initial);
        else {
            var isSVG = el instanceof SVGElement;
            var isFunc = typeof arg2 === "function";
            if (arg1 === "style" && typeof arg2 === "object") setStyle(el, arg2);
            else if (isSVG && isFunc) el[arg1] = arg2;
            else if (arg1 === "dataset") setData(el, arg2);
            else if (!isSVG && (arg1 in el || isFunc) && arg1 !== "list") el[arg1] = arg2;
            else {
                if (isSVG && arg1 === "xlink") {
                    setXlink(el, arg2);
                    return;
                }
                if (initial && arg1 === "class") arg2 = el.className + " " + arg2;
                if (arg2 == null) el.removeAttribute(arg1);
                else el.setAttribute(arg1, arg2);
            }
        }
    }
    function setXlink(el, arg1, arg2) {
        if (typeof arg1 === "object") for(var key in arg1)setXlink(el, key, arg1[key]);
        else if (arg2 != null) el.setAttributeNS(xlinkns, arg1, arg2);
        else el.removeAttributeNS(xlinkns, arg1, arg2);
    }
    function setData(el, arg1, arg2) {
        if (typeof arg1 === "object") for(var key in arg1)setData(el, key, arg1[key]);
        else if (arg2 != null) el.dataset[arg1] = arg2;
        else delete el.dataset[arg1];
    }
    function text(str) {
        return document.createTextNode(str != null ? str : "");
    }
    function parseArgumentsInternal(element, args, initial) {
        for(var i = 0, list = args; i < list.length; i += 1){
            var arg = list[i];
            if (arg !== 0 && !arg) continue;
            var type = typeof arg;
            if (type === "function") arg(element);
            else if (type === "string" || type === "number") element.appendChild(text(arg));
            else if (isNode(getEl(arg))) mount(element, arg);
            else if (arg.length) parseArgumentsInternal(element, arg, initial);
            else if (type === "object") setAttrInternal(element, arg, null, initial);
        }
    }
    function ensureEl(parent) {
        return typeof parent === "string" ? html(parent) : getEl(parent);
    }
    function getEl(parent) {
        return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
    }
    function isNode(arg) {
        return arg && arg.nodeType;
    }
    function dispatch(child, data, eventName) {
        if (eventName === void 0) eventName = "redom";
        var childEl = getEl(child);
        var event = new CustomEvent(eventName, {
            bubbles: true,
            detail: data
        });
        childEl.dispatchEvent(event);
    }
    function setChildren(parent) {
        var children = [], len = arguments.length - 1;
        while(len-- > 0)children[len] = arguments[len + 1];
        var parentEl = getEl(parent);
        var current = traverse(parent, children, parentEl.firstChild);
        while(current){
            var next = current.nextSibling;
            unmount(parent, current);
            current = next;
        }
    }
    function traverse(parent, children, _current) {
        var current = _current;
        var childEls = Array(children.length);
        for(var i = 0; i < children.length; i++)childEls[i] = children[i] && getEl(children[i]);
        for(var i$1 = 0; i$1 < children.length; i$1++){
            var child = children[i$1];
            if (!child) continue;
            var childEl = childEls[i$1];
            if (childEl === current) {
                current = current.nextSibling;
                continue;
            }
            if (isNode(childEl)) {
                var next = current && current.nextSibling;
                var exists = child.__redom_index != null;
                var replace = exists && next === childEls[i$1 + 1];
                mount(parent, child, current, replace);
                if (replace) current = next;
                continue;
            }
            if (child.length != null) current = traverse(parent, child, current);
        }
        return current;
    }
    function listPool(View, key, initData) {
        return new ListPool(View, key, initData);
    }
    var ListPool = function ListPool(View, key, initData) {
        this.View = View;
        this.initData = initData;
        this.oldLookup = {};
        this.lookup = {};
        this.oldViews = [];
        this.views = [];
        if (key != null) this.key = typeof key === "function" ? key : propKey(key);
    };
    ListPool.prototype.update = function update(data, context) {
        var ref = this;
        var View = ref.View;
        var key = ref.key;
        var initData = ref.initData;
        var keySet = key != null;
        var oldLookup = this.lookup;
        var newLookup = {};
        var newViews = Array(data.length);
        var oldViews = this.views;
        for(var i = 0; i < data.length; i++){
            var item = data[i];
            var view = void 0;
            if (keySet) {
                var id = key(item);
                view = oldLookup[id] || new View(initData, item, i, data);
                newLookup[id] = view;
                view.__redom_id = id;
            } else view = oldViews[i] || new View(initData, item, i, data);
            view.update && view.update(item, i, data, context);
            var el = getEl(view.el);
            el.__redom_view = view;
            newViews[i] = view;
        }
        this.oldViews = oldViews;
        this.views = newViews;
        this.oldLookup = oldLookup;
        this.lookup = newLookup;
    };
    function propKey(key) {
        return function(item) {
            return item[key];
        };
    }
    function list(parent, View, key, initData) {
        return new List(parent, View, key, initData);
    }
    var List = function List(parent, View, key, initData) {
        this.View = View;
        this.initData = initData;
        this.views = [];
        this.pool = new ListPool(View, key, initData);
        this.el = ensureEl(parent);
        this.keySet = key != null;
    };
    List.prototype.update = function update(data, context) {
        if (data === void 0) data = [];
        var ref = this;
        var keySet = ref.keySet;
        var oldViews = this.views;
        this.pool.update(data, context);
        var ref$1 = this.pool;
        var views = ref$1.views;
        var lookup = ref$1.lookup;
        if (keySet) for(var i = 0; i < oldViews.length; i++){
            var oldView = oldViews[i];
            var id = oldView.__redom_id;
            if (lookup[id] == null) {
                oldView.__redom_index = null;
                unmount(this, oldView);
            }
        }
        for(var i$1 = 0; i$1 < views.length; i$1++){
            var view = views[i$1];
            view.__redom_index = i$1;
        }
        setChildren(this, views);
        if (keySet) this.lookup = lookup;
        this.views = views;
    };
    List.extend = function extendList(parent, View, key, initData) {
        return List.bind(List, parent, View, key, initData);
    };
    list.extend = List.extend;
    /* global Node */ function place(View, initData) {
        return new Place(View, initData);
    }
    var Place = function Place(View, initData) {
        this.el = text("");
        this.visible = false;
        this.view = null;
        this._placeholder = this.el;
        if (View instanceof Node) this._el = View;
        else if (View.el instanceof Node) {
            this._el = View;
            this.view = View;
        } else this._View = View;
        this._initData = initData;
    };
    Place.prototype.update = function update(visible, data) {
        var placeholder = this._placeholder;
        var parentNode = this.el.parentNode;
        if (visible) {
            if (!this.visible) {
                if (this._el) {
                    mount(parentNode, this._el, placeholder);
                    unmount(parentNode, placeholder);
                    this.el = getEl(this._el);
                    this.visible = visible;
                } else {
                    var View = this._View;
                    var view = new View(this._initData);
                    this.el = getEl(view);
                    this.view = view;
                    mount(parentNode, view, placeholder);
                    unmount(parentNode, placeholder);
                }
            }
            this.view && this.view.update && this.view.update(data);
        } else if (this.visible) {
            if (this._el) {
                mount(parentNode, placeholder, this._el);
                unmount(parentNode, this._el);
                this.el = placeholder;
                this.visible = visible;
                return;
            }
            mount(parentNode, placeholder, this.view);
            unmount(parentNode, this.view);
            this.el = placeholder;
            this.view = null;
        }
        this.visible = visible;
    };
    /* global Node */ function router(parent, views, initData) {
        return new Router(parent, views, initData);
    }
    var Router = function Router(parent, views, initData) {
        this.el = ensureEl(parent);
        this.views = views;
        this.Views = views; // backwards compatibility
        this.initData = initData;
    };
    Router.prototype.update = function update(route, data) {
        if (route !== this.route) {
            var views = this.views;
            var View = views[route];
            this.route = route;
            if (View && (View instanceof Node || View.el instanceof Node)) this.view = View;
            else this.view = View && new View(this.initData, data);
            setChildren(this.el, [
                this.view
            ]);
        }
        this.view && this.view.update && this.view.update(data, route);
    };
    var ns = "http://www.w3.org/2000/svg";
    function svg(query) {
        var args = [], len = arguments.length - 1;
        while(len-- > 0)args[len] = arguments[len + 1];
        var element;
        var type = typeof query;
        if (type === "string") element = createElement(query, ns);
        else if (type === "function") {
            var Query = query;
            element = new (Function.prototype.bind.apply(Query, [
                null
            ].concat(args)));
        } else throw new Error("At least one argument required");
        parseArgumentsInternal(getEl(element), args, true);
        return element;
    }
    var s = svg;
    svg.extend = function extendSvg() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return svg.bind.apply(svg, [
            this
        ].concat(args));
    };
    svg.ns = ns;
    function viewFactory(views, key) {
        if (!views || typeof views !== "object") throw new Error("views must be an object");
        if (!key || typeof key !== "string") throw new Error("key must be a string");
        return function(initData, item, i, data) {
            var viewKey = item[key];
            var View = views[viewKey];
            if (View) return new View(initData, item, i, data);
            else throw new Error("view " + viewKey + " not found");
        };
    }
    exports1.List = List;
    exports1.ListPool = ListPool;
    exports1.Place = Place;
    exports1.Router = Router;
    exports1.dispatch = dispatch;
    exports1.el = el;
    exports1.h = h;
    exports1.html = html;
    exports1.list = list;
    exports1.listPool = listPool;
    exports1.mount = mount;
    exports1.place = place;
    exports1.router = router;
    exports1.s = s;
    exports1.setAttr = setAttr;
    exports1.setChildren = setChildren;
    exports1.setData = setData;
    exports1.setStyle = setStyle;
    exports1.setXlink = setXlink;
    exports1.svg = svg;
    exports1.text = text;
    exports1.unmount = unmount;
    exports1.viewFactory = viewFactory;
});

},{}],"2T35K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redom = require("redom");
const creditCard = ()=>{
    const card = (0, _redom.el)('.credit-card', 'lorem');
    const number = (0, _redom.el)('span.card__number', 'xxxx xxxx xxxx xxxx');
    const cardElemsWrap = (0, _redom.el)('.card__personal');
    const cardName = (0, _redom.el)('span.card__name', 'John Doe');
    const cardDate = (0, _redom.el)('span.card__date', '04/24');
    (0, _redom.setChildren)(cardElemsWrap, [
        cardName,
        cardDate
    ]);
    (0, _redom.setChildren)(card, [
        number,
        cardElemsWrap
    ]);
    return {
        card,
        number,
        cardName,
        cardDate
    };
};
exports.default = creditCard;

},{"redom":"cWIuY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5fONl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redom = require("redom");
const createInputGroup = (wrapClass, name, text)=>{
    const wrap = (0, _redom.el)('div', {
        className: `form__input-wrap form__input-wrap_${wrapClass}`
    });
    const label = (0, _redom.el)('label', {
        className: `form__label form__${name}-label`,
        for: `${name}`,
        textContent: `${text}`
    });
    const input = (0, _redom.el)('input', {
        type: 'text',
        className: `input input__${name}`,
        name: `${name}`
    });
    (0, _redom.setChildren)(wrap, label, input);
    return wrap;
};
const createBtn = (text)=>{
    const btn = (0, _redom.el)('button.form__button', `${text}`, {
        disabled: true,
        type: 'submit'
    });
    return btn;
};
const createForm = ()=>{
    const formContainer = (0, _redom.el)('form', {
        action: '#',
        className: 'form',
        id: 'form'
    });
    const owner = createInputGroup('holder', 'owner', 'Card Holder');
    const number = createInputGroup('number', 'number', 'Card Number');
    const date = createInputGroup('date', 'date', 'Card Expiry');
    const cvv = createInputGroup('cvv', 'cvv', 'CVV');
    const sendBtn = (0, _redom.el)('button', {
        type: 'button',
        className: 'form__button form__sendBtn',
        textContent: "\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C"
    });
    const btn = createBtn('CHECK OUT');
    (0, _redom.setChildren)(formContainer, owner, number, date, cvv, sendBtn, btn);
    return {
        formContainer,
        owner,
        number,
        date,
        cvv,
        sendBtn,
        btn
    };
};
exports.default = createForm;

},{"redom":"cWIuY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0uMR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redom = require("redom");
const createCheckoutLabel = ()=>{
    const p = (0, _redom.el)('p.secure', 'Secure Checkout');
    return p;
};
exports.default = createCheckoutLabel;

},{"redom":"cWIuY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bO9Hm":[function(require,module,exports,__globalThis) {
"use strict";
var RestrictedInput = require("5b7da5c00506f039");
module.exports = RestrictedInput;

},{"5b7da5c00506f039":"fPKQq"}],"fPKQq":[function(require,module,exports,__globalThis) {
"use strict";
var device_1 = require("ffc328f4f2080bb3");
var supportsInputFormatting = require("57c19f0c2e4fde16");
var ios_1 = require("2c35002368c1422");
var android_chrome_1 = require("e7198257350d64ab");
var kitkat_chromium_based_webview_1 = require("3178dbaa331da4ad");
var ie9_1 = require("4dcbc98b13b654d3");
var base_1 = require("e35b87cbed1c327d");
var noop_1 = require("15cb6ec3b5a63019");
/**
 * Instances of this class can be used to modify the formatter for an input
 * @class
 * @param {object} options The initialization paramaters for this class
 * @param {object} options.element - A Input DOM object that RestrictedInput operates on
 * @param {string} options.pattern - The pattern to enforce on this element
 */ var RestrictedInput = /** @class */ function() {
    function RestrictedInput(options) {
        if (!RestrictedInput.supportsFormatting()) this.strategy = new noop_1.NoopKeyboardStrategy(options);
        else if (device_1.isIos()) this.strategy = new ios_1.IosStrategy(options);
        else if (device_1.isKitKatWebview()) this.strategy = new kitkat_chromium_based_webview_1.KitKatChromiumBasedWebViewStrategy(options);
        else if (device_1.isAndroidChrome()) this.strategy = new android_chrome_1.AndroidChromeStrategy(options);
        else if (device_1.isIE9()) this.strategy = new ie9_1.IE9Strategy(options);
        else this.strategy = new base_1.BaseStrategy(options);
    }
    /**
     * @public
     * @returns {string} the unformatted value of the element
     */ RestrictedInput.prototype.getUnformattedValue = function() {
        return this.strategy.getUnformattedValue();
    };
    /**
     * @public
     * @param {string} pattern - the pattern to enforce on the element
     * @return {void}
     */ RestrictedInput.prototype.setPattern = function(pattern) {
        this.strategy.setPattern(pattern);
    };
    RestrictedInput.supportsFormatting = function() {
        return supportsInputFormatting();
    };
    return RestrictedInput;
}();
module.exports = RestrictedInput;

},{"ffc328f4f2080bb3":"coyu0","57c19f0c2e4fde16":"jxX5h","2c35002368c1422":"5VqXj","e7198257350d64ab":"6xmWb","3178dbaa331da4ad":"5JFC5","4dcbc98b13b654d3":"1MWrj","e35b87cbed1c327d":"dR402","15cb6ec3b5a63019":"fl4aQ"}],"coyu0":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isIos = exports.isIE9 = exports.isSamsungBrowser = exports.isAndroidChrome = exports.isKitKatWebview = void 0;
// server side rendering check
var UA = typeof window !== "undefined" && window.navigator && window.navigator.userAgent;
// TODO remove this when browser detection is converted to typescript
/* eslint-disable @typescript-eslint/ban-ts-comment */ // @ts-ignore
var isAndroid = require("e02c2f1bd07d6618");
// @ts-ignore
var isChromeOs = require("46919a64a6a31c37");
// @ts-ignore
var isChrome = require("56aec31e93edfc62");
// @ts-ignore
var isIos = require("f04395b81e0b8098");
exports.isIos = isIos;
// @ts-ignore
var isIE9 = require("4298bcecdfbe7e62");
exports.isIE9 = isIE9;
/* eslint-enable @typescript-eslint/ban-ts-comment */ // Old Android Webviews used specific versions of Chrome with 0.0.0 as their version suffix
// https://developer.chrome.com/multidevice/user-agent#webview_user_agent
var KITKAT_WEBVIEW_REGEX = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
function isOldSamsungBrowserOrSamsungWebview(ua) {
    return !isChrome(ua) && ua.indexOf("Samsung") > -1;
}
function isKitKatWebview(ua) {
    if (ua === void 0) ua = UA;
    return isAndroid(ua) && KITKAT_WEBVIEW_REGEX.test(ua);
}
exports.isKitKatWebview = isKitKatWebview;
function isAndroidChrome(ua) {
    if (ua === void 0) ua = UA;
    return (isAndroid(ua) || isChromeOs(ua)) && isChrome(ua);
}
exports.isAndroidChrome = isAndroidChrome;
function isSamsungBrowser(ua) {
    if (ua === void 0) ua = UA;
    return /SamsungBrowser/.test(ua) || isOldSamsungBrowserOrSamsungWebview(ua);
}
exports.isSamsungBrowser = isSamsungBrowser;

},{"e02c2f1bd07d6618":"jtldm","46919a64a6a31c37":"in5Dg","56aec31e93edfc62":"40nLK","f04395b81e0b8098":"kAfY0","4298bcecdfbe7e62":"7rUWx"}],"jtldm":[function(require,module,exports,__globalThis) {
module.exports = require("683e2b9152cf1377");

},{"683e2b9152cf1377":"94VUa"}],"94VUa":[function(require,module,exports,__globalThis) {
"use strict";
module.exports = function isAndroid(ua) {
    ua = ua || window.navigator.userAgent;
    return /Android/i.test(ua);
};

},{}],"in5Dg":[function(require,module,exports,__globalThis) {
module.exports = require("56b6d3afe756b85e");

},{"56b6d3afe756b85e":"hO6nk"}],"hO6nk":[function(require,module,exports,__globalThis) {
"use strict";
module.exports = function isChromeOS(ua) {
    ua = ua || window.navigator.userAgent;
    return /CrOS/i.test(ua);
};

},{}],"40nLK":[function(require,module,exports,__globalThis) {
module.exports = require("2e77d2cdaecfb681");

},{"2e77d2cdaecfb681":"8wlUP"}],"8wlUP":[function(require,module,exports,__globalThis) {
"use strict";
var isEdge = require("cc4a08083f1942d3");
var isSamsung = require("7f9d542d87ce715e");
var isDuckDuckGo = require("8e897396debb4355");
var isOpera = require("58808e221cf98a7");
var isSilk = require("26c55d85b11fa25e");
module.exports = function isChrome(ua) {
    ua = ua || window.navigator.userAgent;
    return (ua.indexOf("Chrome") !== -1 || ua.indexOf("CriOS") !== -1) && !isEdge(ua) && !isSamsung(ua) && !isDuckDuckGo(ua) && !isOpera(ua) && !isSilk(ua);
};

},{"cc4a08083f1942d3":"eanR9","7f9d542d87ce715e":"3YCCg","8e897396debb4355":"3J4Uq","58808e221cf98a7":"5k0Nr","26c55d85b11fa25e":"8i4Xu"}],"eanR9":[function(require,module,exports,__globalThis) {
"use strict";
module.exports = function isEdge(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("Edge/") !== -1 || ua.indexOf("Edg/") !== -1;
};

},{}],"3YCCg":[function(require,module,exports,__globalThis) {
"use strict";
module.exports = function isSamsungBrowser(ua) {
    ua = ua || window.navigator.userAgent;
    return /SamsungBrowser/i.test(ua);
};

},{}],"3J4Uq":[function(require,module,exports,__globalThis) {
"use strict";
module.exports = function isDuckDuckGo(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("DuckDuckGo/") !== -1;
};

},{}],"5k0Nr":[function(require,module,exports,__globalThis) {
"use strict";
module.exports = function isOpera(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("OPR/") !== -1 || ua.indexOf("Opera/") !== -1 || ua.indexOf("OPT/") !== -1;
};

},{}],"8i4Xu":[function(require,module,exports,__globalThis) {
"use strict";
module.exports = function isSilk(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("Silk/") !== -1;
};

},{}],"kAfY0":[function(require,module,exports,__globalThis) {
module.exports = require("7d556d0501305975");

},{"7d556d0501305975":"7ULxF"}],"7ULxF":[function(require,module,exports,__globalThis) {
"use strict";
var isIpadOS = require("e1ff5afcccf3a7d");
module.exports = function isIos(ua, checkIpadOS, document) {
    if (checkIpadOS === void 0) checkIpadOS = true;
    ua = ua || window.navigator.userAgent;
    var iOsTest = /iPhone|iPod|iPad/i.test(ua);
    return checkIpadOS ? iOsTest || isIpadOS(ua, document) : iOsTest;
};

},{"e1ff5afcccf3a7d":"1weq9"}],"1weq9":[function(require,module,exports,__globalThis) {
"use strict";
module.exports = function isIpadOS(ua, document) {
    ua = ua || window.navigator.userAgent;
    document = document || window.document;
    // "ontouchend" is used to determine if a browser is on an iPad, otherwise
    // user-agents for iPadOS behave/identify as a desktop browser
    return /Mac|iPad/i.test(ua) && "ontouchend" in document;
};

},{}],"7rUWx":[function(require,module,exports,__globalThis) {
module.exports = require("67ef016e043b3ea6");

},{"67ef016e043b3ea6":"9wFUI"}],"9wFUI":[function(require,module,exports,__globalThis) {
"use strict";
module.exports = function isIe9(ua) {
    ua = ua || window.navigator.userAgent;
    return ua.indexOf("MSIE 9") !== -1;
};

},{}],"jxX5h":[function(require,module,exports,__globalThis) {
"use strict";
var device_1 = require("7cba154c0b381aa1");
module.exports = function supportsInputFormatting() {
    // Digits get dropped in samsung browser
    return !device_1.isSamsungBrowser();
};

},{"7cba154c0b381aa1":"coyu0"}],"5VqXj":[function(require,module,exports,__globalThis) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IosStrategy = void 0;
var base_1 = require("c887f11c64defc69");
var key_cannot_mutate_value_1 = require("c198b58f639cf342");
var input_selection_1 = require("538d5236c2d02d7");
var IosStrategy = /** @class */ function(_super) {
    __extends(IosStrategy, _super);
    function IosStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosStrategy.prototype.getUnformattedValue = function() {
        return _super.prototype.getUnformattedValue.call(this, true);
    };
    IosStrategy.prototype.attachListeners = function() {
        var _this = this;
        this.inputElement.addEventListener("keydown", function(event) {
            _this.keydownListener(event);
        });
        this.inputElement.addEventListener("input", function(event) {
            var isCustomEvent = event instanceof CustomEvent;
            // Safari AutoFill fires CustomEvents
            // Set state to format before calling format listener
            if (isCustomEvent) _this.stateToFormat = {
                selection: {
                    start: 0,
                    end: 0
                },
                value: _this.inputElement.value
            };
            _this.formatListener();
            if (!isCustomEvent) _this.fixLeadingBlankSpaceOnIos();
        });
        this.inputElement.addEventListener("focus", function() {
            _this.formatListener();
        });
        this.inputElement.addEventListener("paste", function(event) {
            _this.pasteEventHandler(event);
        });
    };
    // When deleting the last character on iOS, the cursor
    // is positioned as if there is a blank space when there
    // is not, setting it to '' in a setTimeout fixes it ¯\_(ツ)_/¯
    IosStrategy.prototype.fixLeadingBlankSpaceOnIos = function() {
        var input = this.inputElement;
        if (input.value === "") setTimeout(function() {
            input.value = "";
        }, 0);
    };
    IosStrategy.prototype.formatListener = function() {
        var input = this.inputElement;
        var stateToFormat = this.getStateToFormat();
        var formattedState = this.formatter.format(stateToFormat);
        input.value = formattedState.value;
        input_selection_1.set(input, formattedState.selection.start, formattedState.selection.end);
    };
    IosStrategy.prototype.keydownListener = function(event) {
        if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
        if (this.isDeletion(event)) this.stateToFormat = this.formatter.simulateDeletion({
            event: event,
            selection: input_selection_1.get(this.inputElement),
            value: this.inputElement.value
        });
    };
    return IosStrategy;
}(base_1.BaseStrategy);
exports.IosStrategy = IosStrategy;

},{"c887f11c64defc69":"dR402","c198b58f639cf342":"cbCy3","538d5236c2d02d7":"2gSp4"}],"dR402":[function(require,module,exports,__globalThis) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseStrategy = void 0;
var strategy_interface_1 = require("ba1a91befbe43d7b");
var key_cannot_mutate_value_1 = require("65a7206985773303");
var input_selection_1 = require("7a945b24f191b921");
var is_backspace_1 = require("80922d69e4261553");
var is_delete_1 = require("baccb21aaedf6528");
var formatter_1 = require("b744c2bea1938f97");
function isSimulatedEvent(event) {
    // 1Password sets input.value then fires keyboard events. Dependent on browser
    // here might be falsy values (key = '', keyCode = 0) or these keys might be omitted
    // Chrome autofill inserts keys all at once and fires a single event without key info
    return !event.key && !event.keyCode;
}
var BaseStrategy = /** @class */ function(_super) {
    __extends(BaseStrategy, _super);
    function BaseStrategy(options) {
        var _this = _super.call(this, options) || this;
        _this.formatter = new formatter_1.PatternFormatter(options.pattern);
        _this.onPasteEvent = options.onPasteEvent;
        _this.attachListeners();
        _this.formatIfNotEmpty();
        return _this;
    }
    BaseStrategy.prototype.getUnformattedValue = function(forceUnformat) {
        var value = this.inputElement.value;
        if (forceUnformat || this.isFormatted) value = this.formatter.unformat({
            value: this.inputElement.value,
            selection: {
                start: 0,
                end: 0
            }
        }).value;
        return value;
    };
    BaseStrategy.prototype.formatIfNotEmpty = function() {
        if (this.inputElement.value) this.reformatInput();
    };
    BaseStrategy.prototype.setPattern = function(pattern) {
        this.unformatInput();
        this.formatter = new formatter_1.PatternFormatter(pattern);
        this.formatIfNotEmpty();
    };
    BaseStrategy.prototype.attachListeners = function() {
        var _this = this;
        this.inputElement.addEventListener("keydown", function(e) {
            var event = e;
            if (isSimulatedEvent(event)) _this.isFormatted = false;
            if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
            if (_this.isDeletion(event)) _this.unformatInput();
        });
        this.inputElement.addEventListener("keypress", function(e) {
            var event = e;
            if (isSimulatedEvent(event)) _this.isFormatted = false;
            if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
            _this.unformatInput();
        });
        this.inputElement.addEventListener("keyup", function() {
            _this.reformatInput();
        });
        this.inputElement.addEventListener("input", function(event) {
            // Safari AutoFill fires CustomEvents
            // LastPass sends an `isTrusted: false` property
            // Since the input is changed all at once, set isFormatted
            // to false so that reformatting actually occurs
            if (event instanceof CustomEvent || !event.isTrusted) _this.isFormatted = false;
            _this.reformatInput();
        });
        this.inputElement.addEventListener("paste", function(event) {
            _this.pasteEventHandler(event);
        });
    };
    BaseStrategy.prototype.isDeletion = function(event) {
        return is_delete_1.isDelete(event) || is_backspace_1.isBackspace(event);
    };
    BaseStrategy.prototype.reformatInput = function() {
        if (this.isFormatted) return;
        this.isFormatted = true;
        var input = this.inputElement;
        var formattedState = this.formatter.format({
            selection: input_selection_1.get(input),
            value: input.value
        });
        input.value = formattedState.value;
        input_selection_1.set(input, formattedState.selection.start, formattedState.selection.end);
        this.afterReformatInput(formattedState);
    };
    // If a strategy needs to impliment specific behavior
    // after reformatting has happend, the strategy just
    // overwrites this method on their own prototype
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BaseStrategy.prototype.afterReformatInput = function(formattedState) {
    // noop
    };
    BaseStrategy.prototype.unformatInput = function() {
        if (!this.isFormatted) return;
        this.isFormatted = false;
        var input = this.inputElement;
        var selection = input_selection_1.get(input);
        var unformattedState = this.formatter.unformat({
            selection: selection,
            value: input.value
        });
        input.value = unformattedState.value;
        input_selection_1.set(input, unformattedState.selection.start, unformattedState.selection.end);
    };
    BaseStrategy.prototype.prePasteEventHandler = function(event) {
        // without this, the paste event is called twice
        // so if you were pasting abc it would result in
        // abcabc
        event.preventDefault();
    };
    BaseStrategy.prototype.postPasteEventHandler = function() {
        this.reformatAfterPaste();
    };
    BaseStrategy.prototype.pasteEventHandler = function(event) {
        var splicedEntry;
        var entryValue = "";
        this.prePasteEventHandler(event);
        this.unformatInput();
        if (event.clipboardData) entryValue = event.clipboardData.getData("Text");
        else if (window.clipboardData) entryValue = window.clipboardData.getData("Text");
        var selection = input_selection_1.get(this.inputElement);
        splicedEntry = this.inputElement.value.split("");
        splicedEntry.splice(selection.start, selection.end - selection.start, entryValue);
        splicedEntry = splicedEntry.join("");
        if (this.onPasteEvent) this.onPasteEvent({
            unformattedInputValue: splicedEntry
        });
        this.inputElement.value = splicedEntry;
        input_selection_1.set(this.inputElement, selection.start + entryValue.length, selection.start + entryValue.length);
        this.postPasteEventHandler();
    };
    BaseStrategy.prototype.reformatAfterPaste = function() {
        var event = document.createEvent("Event");
        this.reformatInput();
        event.initEvent("input", true, true);
        this.inputElement.dispatchEvent(event);
    };
    BaseStrategy.prototype.getStateToFormat = function() {
        var input = this.inputElement;
        var selection = input_selection_1.get(input);
        var stateToFormat = {
            selection: selection,
            value: input.value
        };
        if (this.stateToFormat) {
            stateToFormat = this.stateToFormat;
            delete this.stateToFormat;
        } else if (selection.start === input.value.length && this.isFormatted) stateToFormat = this.formatter.unformat(stateToFormat);
        return stateToFormat;
    };
    return BaseStrategy;
}(strategy_interface_1.StrategyInterface);
exports.BaseStrategy = BaseStrategy;

},{"ba1a91befbe43d7b":"eR489","65a7206985773303":"cbCy3","7a945b24f191b921":"2gSp4","80922d69e4261553":"bCGFT","baccb21aaedf6528":"aA9DZ","b744c2bea1938f97":"6kXTK"}],"eR489":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StrategyInterface = void 0;
var StrategyInterface = /** @class */ function() {
    function StrategyInterface(options) {
        this.inputElement = options.element;
        this.isFormatted = false;
    }
    return StrategyInterface;
}();
exports.StrategyInterface = StrategyInterface;

},{}],"cbCy3":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keyCannotMutateValue = void 0;
var input_selection_1 = require("7ee021c6c8ee0976");
// eslint-disable-next-line complexity
function keyCannotMutateValue(event) {
    var input = event.currentTarget || event.srcElement;
    var selection = input_selection_1.get(input);
    var isAtBeginning = selection.start === 0;
    var isAtEnd = selection.start === input.value.length;
    var isShifted = event.shiftKey === true;
    // https://www.w3.org/TR/DOM-Level-3-Events/#widl-KeyboardEvent-key
    switch(event.key){
        case undefined:
        case "Unidentified":
        case "":
            break;
        case "Backspace":
            return isAtBeginning;
        case "Del":
        case "Delete":
            return isAtEnd;
        default:
            return event.key.length !== 1;
    }
    // http://unixpapa.com/js/key.html
    switch(event.keyCode){
        case 9:
        case 19:
        case 20:
        case 27:
        case 39:
        case 45:
            return true;
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 40:
            return !isShifted;
        case 8:
            return isAtBeginning;
        case 46:
            return isAtEnd;
        default:
            return false;
    }
}
exports.keyCannotMutateValue = keyCannotMutateValue;

},{"7ee021c6c8ee0976":"2gSp4"}],"2gSp4":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.set = exports.get = void 0;
function get(element) {
    var start = element.selectionStart || 0;
    var end = element.selectionEnd || 0;
    return {
        start: start,
        end: end,
        delta: Math.abs(end - start)
    };
}
exports.get = get;
function set(element, start, end) {
    // Some browsers explode if you use setSelectionRange
    // on a non-focused element
    if (document.activeElement === element && element.setSelectionRange) element.setSelectionRange(start, end);
}
exports.set = set;

},{}],"bCGFT":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBackspace = void 0;
function isBackspace(event) {
    return event.key === "Backspace" || event.keyCode === 8;
}
exports.isBackspace = isBackspace;

},{}],"aA9DZ":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDelete = void 0;
var DELETE_REGEX = /^Del(ete)?$/;
function isDelete(event) {
    return DELETE_REGEX.test(event.key) || event.keyCode === 46;
}
exports.isDelete = isDelete;

},{}],"6kXTK":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PatternFormatter = void 0;
var parse_pattern_1 = require("1f5ff224a61c7998");
var is_backspace_1 = require("ef05ada64cf78374");
var PatternFormatter = /** @class */ function() {
    function PatternFormatter(pattern) {
        this.pattern = parse_pattern_1.parsePattern(pattern);
    }
    PatternFormatter.prototype.format = function(options) {
        var originalString = options.value;
        var originalStringIndex = 0;
        var formattedString = "";
        var selection = {
            start: options.selection.start,
            end: options.selection.end
        };
        for(var i = 0; i < this.pattern.length; i++){
            var patternChar = this.pattern[i];
            var inputChar = originalString[originalStringIndex];
            if (originalStringIndex > originalString.length) break;
            if (typeof patternChar.value === "string") {
                if (inputChar != null || formattedString.length === patternChar.index) {
                    formattedString += patternChar.value;
                    if (patternChar.index <= selection.start) selection.start++;
                    if (patternChar.index <= selection.end) selection.end++;
                }
            } else // User input char
            // prettier-ignore
            for(; originalStringIndex < originalString.length; originalStringIndex++){
                inputChar = originalString[originalStringIndex];
                if (patternChar.value.test(inputChar)) {
                    formattedString += inputChar;
                    originalStringIndex++;
                    break;
                } else {
                    if (patternChar.index <= selection.start) selection.start--;
                    if (patternChar.index <= selection.end) selection.end--;
                }
            }
        }
        return {
            value: formattedString,
            selection: selection
        };
    };
    PatternFormatter.prototype.unformat = function(options) {
        var start = options.selection.start;
        var end = options.selection.end;
        var unformattedString = "";
        var formatCompensation = 0;
        function isPatterntChar(patternChar, index) {
            var value = options.value[index - formatCompensation];
            return typeof patternChar.value !== "string" && value != null && patternChar.value.test(value);
        }
        for(var i = 0; i < this.pattern.length; i++){
            var patternChar = this.pattern[i];
            if (isPatterntChar(patternChar, i)) {
                unformattedString += options.value[i - formatCompensation];
                continue;
            }
            if (patternChar.value !== options.value[patternChar.index]) {
                formatCompensation++;
                continue;
            }
            if (patternChar.index < options.selection.start) start--;
            if (patternChar.index < options.selection.end) end--;
        }
        return {
            selection: {
                start: start,
                end: end
            },
            value: unformattedString
        };
    };
    PatternFormatter.prototype.simulateDeletion = function(options) {
        var deletionStart, deletionEnd;
        var state = this.unformat(options);
        var value = state.value;
        var selection = state.selection;
        var delta = Math.abs(state.selection.end - state.selection.start);
        if (delta) {
            deletionStart = selection.start;
            deletionEnd = selection.end;
        } else if (is_backspace_1.isBackspace(options.event)) {
            deletionStart = Math.max(0, selection.start - 1);
            deletionEnd = selection.start;
        } else {
            // Handle forward delete
            deletionStart = selection.start;
            deletionEnd = Math.min(value.length, selection.start + 1);
        }
        return {
            selection: {
                start: deletionStart,
                end: deletionStart
            },
            value: value.substr(0, deletionStart) + value.substr(deletionEnd)
        };
    };
    return PatternFormatter;
}();
exports.PatternFormatter = PatternFormatter;

},{"1f5ff224a61c7998":"jx52n","ef05ada64cf78374":"bCGFT"}],"jx52n":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePattern = void 0;
var ALPHA_REGEX = /[A-Za-z]/;
var DIGIT_REGEX = /\d/;
var WILD_REGEX = /./;
var PLACEHOLDER_REGEX = /^[A-Za-z0-9\*]$/;
var PLACEHOLDER_PATTERN = "({{[^}]+}})";
var PERMACHAR_REGEX = "(\\s|\\S)";
var PATTERN_REGEX = new RegExp(PLACEHOLDER_PATTERN + "|" + PERMACHAR_REGEX, "g");
var PLACEHOLDER_PATTERN_REGEX = new RegExp("^" + PLACEHOLDER_PATTERN + "$");
var replacerRegex = new RegExp("{|}", "g");
function isDigit(char) {
    return DIGIT_REGEX.test(char);
}
function isAlpha(char) {
    return ALPHA_REGEX.test(char);
}
function createRegexForChar(char) {
    if (isDigit(char)) return DIGIT_REGEX;
    else if (isAlpha(char)) return ALPHA_REGEX;
    return WILD_REGEX;
}
function isPlaceholder(char) {
    return PLACEHOLDER_REGEX.test(char);
}
function isPlaceholderPattern(str) {
    return PLACEHOLDER_PATTERN_REGEX.test(str);
}
function parsePattern(patternString) {
    var patternArray = [];
    var patternParts = patternString.match(PATTERN_REGEX);
    if (!patternParts) return patternArray;
    for(var index = 0, i = 0; i < patternParts.length; i++){
        var patternPart = patternParts[i];
        if (isPlaceholderPattern(patternPart)) {
            var placeholderChars = patternPart.replace(replacerRegex, "").split("");
            for(var j = 0; j < placeholderChars.length; j++){
                var placeholderChar = placeholderChars[j];
                if (!isPlaceholder(placeholderChar)) throw new Error("Only alphanumeric or wildcard pattern matchers are allowed");
                patternArray.push({
                    value: createRegexForChar(placeholderChar),
                    isPermaChar: false,
                    index: index++
                });
            }
        } else patternArray.push({
            value: patternPart,
            isPermaChar: true,
            index: index++
        });
    }
    return patternArray;
}
exports.parsePattern = parsePattern;

},{}],"6xmWb":[function(require,module,exports,__globalThis) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AndroidChromeStrategy = void 0;
var key_cannot_mutate_value_1 = require("f4a72b21e56161a8");
var base_1 = require("a7048c4be722dc46");
var input_selection_1 = require("570b54ead3349ba8");
var AndroidChromeStrategy = /** @class */ function(_super) {
    __extends(AndroidChromeStrategy, _super);
    function AndroidChromeStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidChromeStrategy.prototype.attachListeners = function() {
        var _this = this;
        this.inputElement.addEventListener("keydown", function(event) {
            if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
            _this.unformatInput();
        });
        // 'keypress' is not fired with some Android keyboards (see #23)
        this.inputElement.addEventListener("keypress", function(event) {
            if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
            _this.unformatInput();
        });
        this.inputElement.addEventListener("keyup", function() {
            _this.reformatInput();
        });
        this.inputElement.addEventListener("input", function() {
            _this.reformatInput();
        });
        this.inputElement.addEventListener("paste", function(event) {
            event.preventDefault();
            _this.pasteEventHandler(event);
        });
    };
    AndroidChromeStrategy.prototype.prePasteEventHandler = function() {
    // the default strategy calls preventDefault here
    // but that removes the clipboard data in Android chrome
    // so we noop instead
    };
    AndroidChromeStrategy.prototype.postPasteEventHandler = function() {
        var _this = this;
        // the default strategy calls this without a timeout
        setTimeout(function() {
            _this.reformatAfterPaste();
        }, 0);
    };
    AndroidChromeStrategy.prototype.afterReformatInput = function(formattedState) {
        var input = this.inputElement;
        // Some Android Chrome keyboards (notably Samsung)
        // cause the browser to not know that the value
        // of the input has changed when adding
        // permacharacters. This results in the selection
        // putting the cursor before the permacharacter,
        // instead of after.
        //
        // There is also the case of some Android Chrome
        // keyboards reporting a ranged selection on the
        // first character input. Restricted Input maintains
        // that range even though it is incorrect from the
        // keyboard.
        //
        // To resolve these issues we setTimeout and reset
        // the selection to the formatted end position.
        setTimeout(function() {
            var formattedSelection = formattedState.selection;
            input_selection_1.set(input, formattedSelection.end, formattedSelection.end);
        }, 0);
    };
    return AndroidChromeStrategy;
}(base_1.BaseStrategy);
exports.AndroidChromeStrategy = AndroidChromeStrategy;

},{"f4a72b21e56161a8":"cbCy3","a7048c4be722dc46":"dR402","570b54ead3349ba8":"2gSp4"}],"5JFC5":[function(require,module,exports,__globalThis) {
"use strict";
// Android Devices on KitKat use Chromium based webviews. For some reason,
// the value of the inputs are not accessible in the event loop where the
// key event listeners are called. This causes formatting to get stuck
// on permacharacters. By putting them in setTimeouts, this fixes the
// problem. This causes other problems in non-webviews, so we give it
// its own strategy.
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KitKatChromiumBasedWebViewStrategy = void 0;
var android_chrome_1 = require("825dffb36ce60b0f");
var KitKatChromiumBasedWebViewStrategy = /** @class */ function(_super) {
    __extends(KitKatChromiumBasedWebViewStrategy, _super);
    function KitKatChromiumBasedWebViewStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KitKatChromiumBasedWebViewStrategy.prototype.reformatInput = function() {
        var _this = this;
        setTimeout(function() {
            _super.prototype.reformatInput.call(_this);
        }, 0);
    };
    KitKatChromiumBasedWebViewStrategy.prototype.unformatInput = function() {
        var _this = this;
        setTimeout(function() {
            _super.prototype.unformatInput.call(_this);
        }, 0);
    };
    return KitKatChromiumBasedWebViewStrategy;
}(android_chrome_1.AndroidChromeStrategy);
exports.KitKatChromiumBasedWebViewStrategy = KitKatChromiumBasedWebViewStrategy;

},{"825dffb36ce60b0f":"6xmWb"}],"1MWrj":[function(require,module,exports,__globalThis) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IE9Strategy = void 0;
var base_1 = require("b0eb3b16a61e16ca");
var key_cannot_mutate_value_1 = require("2ee95935e0e5a1d0");
var input_selection_1 = require("2a33819b3cc5c8ee");
function padSelection(selection, pad) {
    return {
        start: selection.start + pad,
        end: selection.end + pad
    };
}
var IE9Strategy = /** @class */ function(_super) {
    __extends(IE9Strategy, _super);
    function IE9Strategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IE9Strategy.prototype.getUnformattedValue = function() {
        return base_1.BaseStrategy.prototype.getUnformattedValue.call(this, true);
    };
    IE9Strategy.prototype.attachListeners = function() {
        var _this = this;
        this.inputElement.addEventListener("keydown", function(event) {
            _this.keydownListener(event);
        });
        this.inputElement.addEventListener("focus", function() {
            _this.format();
        });
        this.inputElement.addEventListener("paste", function(event) {
            _this.pasteEventHandler(event);
        });
    };
    IE9Strategy.prototype.format = function() {
        var input = this.inputElement;
        var stateToFormat = this.getStateToFormat();
        var formattedState = this.formatter.format(stateToFormat);
        input.value = formattedState.value;
        input_selection_1.set(input, formattedState.selection.start, formattedState.selection.end);
    };
    IE9Strategy.prototype.keydownListener = function(event) {
        if (key_cannot_mutate_value_1.keyCannotMutateValue(event)) return;
        event.preventDefault();
        if (this.isDeletion(event)) this.stateToFormat = this.formatter.simulateDeletion({
            event: event,
            selection: input_selection_1.get(this.inputElement),
            value: this.inputElement.value
        });
        else {
            // IE9 does not update the input's value attribute
            // during key events, only after they complete.
            // We must retrieve the key from event.key and
            // add it to the input's value before formatting.
            var oldValue = this.inputElement.value;
            var selection = input_selection_1.get(this.inputElement);
            var newValue = oldValue.slice(0, selection.start) + event.key + oldValue.slice(selection.start);
            selection = padSelection(selection, 1);
            this.stateToFormat = {
                selection: selection,
                value: newValue
            };
            if (selection.start === newValue.length) this.stateToFormat = this.formatter.unformat(this.stateToFormat);
        }
        this.format();
    };
    IE9Strategy.prototype.reformatAfterPaste = function() {
        var input = this.inputElement;
        var selection = input_selection_1.get(this.inputElement);
        var value = this.formatter.format({
            selection: selection,
            value: input.value
        }).value;
        selection = padSelection(selection, 1);
        input.value = value;
        // IE9 sets the selection to the end of the input
        // manually setting it in a setTimeout puts it
        // in the correct position after pasting
        setTimeout(function() {
            input_selection_1.set(input, selection.start, selection.end);
        }, 0);
    };
    return IE9Strategy;
}(base_1.BaseStrategy);
exports.IE9Strategy = IE9Strategy;

},{"b0eb3b16a61e16ca":"dR402","2ee95935e0e5a1d0":"cbCy3","2a33819b3cc5c8ee":"2gSp4"}],"fl4aQ":[function(require,module,exports,__globalThis) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NoopKeyboardStrategy = void 0;
var strategy_interface_1 = require("69678c37e1e62446");
var NoopKeyboardStrategy = /** @class */ function(_super) {
    __extends(NoopKeyboardStrategy, _super);
    function NoopKeyboardStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopKeyboardStrategy.prototype.getUnformattedValue = function() {
        return this.inputElement.value;
    };
    NoopKeyboardStrategy.prototype.setPattern = function() {
    // noop
    };
    return NoopKeyboardStrategy;
}(strategy_interface_1.StrategyInterface);
exports.NoopKeyboardStrategy = NoopKeyboardStrategy;

},{"69678c37e1e62446":"eR489"}],"grWkP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _airDatepicker = require("./air-datepicker");
var _airDatepickerDefault = parcelHelpers.interopDefault(_airDatepicker);
exports.default = (0, _airDatepickerDefault.default);

},{"./air-datepicker":"9hsv2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hsv2":[function(require,module,exports,__globalThis) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    return function() {
        "use strict";
        var e = {
            d: function(t, i) {
                for(var s in i)e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: i[s]
                });
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }
        }, t = {};
        e.d(t, {
            default: function() {
                return R;
            }
        });
        var i = {
            days: "days",
            months: "months",
            years: "years",
            day: "day",
            month: "month",
            year: "year",
            eventChangeViewDate: "changeViewDate",
            eventChangeCurrentView: "changeCurrentView",
            eventChangeFocusDate: "changeFocusDate",
            eventChangeSelectedDate: "changeSelectedDate",
            eventChangeTime: "changeTime",
            eventChangeLastSelectedDate: "changeLastSelectedDate",
            actionSelectDate: "selectDate",
            actionUnselectDate: "unselectDate",
            cssClassWeekend: "-weekend-"
        }, s = {
            classes: "",
            inline: !1,
            locale: {
                days: [
                    "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
                    "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
                    "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
                    "\u0421\u0440\u0435\u0434\u0430",
                    "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
                    "\u041F\u044F\u0442\u043D\u0438\u0446\u0430",
                    "\u0421\u0443\u0431\u0431\u043E\u0442\u0430"
                ],
                daysShort: [
                    "\u0412\u043E\u0441",
                    "\u041F\u043E\u043D",
                    "\u0412\u0442\u043E",
                    "\u0421\u0440\u0435",
                    "\u0427\u0435\u0442",
                    "\u041F\u044F\u0442",
                    "\u0421\u0443\u0431"
                ],
                daysMin: [
                    "\u0412\u0441",
                    "\u041F\u043D",
                    "\u0412\u0442",
                    "\u0421\u0440",
                    "\u0427\u0442",
                    "\u041F\u0442",
                    "\u0421\u0431"
                ],
                months: [
                    "\u042F\u043D\u0432\u0430\u0440\u044C",
                    "\u0424\u0435\u0432\u0440\u0430\u043B\u044C",
                    "\u041C\u0430\u0440\u0442",
                    "\u0410\u043F\u0440\u0435\u043B\u044C",
                    "\u041C\u0430\u0439",
                    "\u0418\u044E\u043D\u044C",
                    "\u0418\u044E\u043B\u044C",
                    "\u0410\u0432\u0433\u0443\u0441\u0442",
                    "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
                    "\u041E\u043A\u0442\u044F\u0431\u0440\u044C",
                    "\u041D\u043E\u044F\u0431\u0440\u044C",
                    "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"
                ],
                monthsShort: [
                    "\u042F\u043D\u0432",
                    "\u0424\u0435\u0432",
                    "\u041C\u0430\u0440",
                    "\u0410\u043F\u0440",
                    "\u041C\u0430\u0439",
                    "\u0418\u044E\u043D",
                    "\u0418\u044E\u043B",
                    "\u0410\u0432\u0433",
                    "\u0421\u0435\u043D",
                    "\u041E\u043A\u0442",
                    "\u041D\u043E\u044F",
                    "\u0414\u0435\u043A"
                ],
                today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
                clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
                dateFormat: "dd.MM.yyyy",
                timeFormat: "HH:mm",
                firstDay: 1
            },
            startDate: new Date,
            firstDay: "",
            weekends: [
                6,
                0
            ],
            dateFormat: "",
            altField: "",
            altFieldDateFormat: "T",
            toggleSelected: !0,
            keyboardNav: !0,
            selectedDates: !1,
            container: "",
            isMobile: !1,
            visible: !1,
            position: "bottom left",
            offset: 12,
            view: i.days,
            minView: i.days,
            showOtherMonths: !0,
            selectOtherMonths: !0,
            moveToOtherMonthsOnSelect: !0,
            showOtherYears: !0,
            selectOtherYears: !0,
            moveToOtherYearsOnSelect: !0,
            minDate: "",
            maxDate: "",
            disableNavWhenOutOfRange: !0,
            multipleDates: !1,
            multipleDatesSeparator: ", ",
            range: !1,
            dynamicRange: !0,
            buttons: !1,
            monthsField: "monthsShort",
            showEvent: "focus",
            autoClose: !1,
            fixedHeight: !1,
            prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
            nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
            navTitles: {
                days: "MMMM, <i>yyyy</i>",
                months: "yyyy",
                years: "yyyy1 - yyyy2"
            },
            timepicker: !1,
            onlyTimepicker: !1,
            dateTimeSeparator: " ",
            timeFormat: "",
            minHours: 0,
            maxHours: 24,
            minMinutes: 0,
            maxMinutes: 59,
            hoursStep: 1,
            minutesStep: 1,
            onSelect: !1,
            onChangeViewDate: !1,
            onChangeView: !1,
            onRenderCell: !1,
            onShow: !1,
            onHide: !1,
            onClickDayName: !1
        };
        function a(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
            return "string" == typeof e ? t.querySelector(e) : e;
        }
        function n() {
            let { tagName: e = "div", className: t = "", innerHtml: i = "", id: s = "", attrs: a = {} } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = document.createElement(e);
            return t && n.classList.add(...t.split(" ")), s && (n.id = s), i && (n.innerHTML = i), a && r(n, a), n;
        }
        function r(e, t) {
            for (let [i, s] of Object.entries(t))void 0 !== s && e.setAttribute(i, s);
            return e;
        }
        function o(e) {
            return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
        }
        function h(e) {
            let t = e.getHours(), { hours: i, dayPeriod: s } = l(t);
            return {
                year: e.getFullYear(),
                month: e.getMonth(),
                fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
                date: e.getDate(),
                fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
                day: e.getDay(),
                hours: t,
                fullHours: d(t),
                hours12: i,
                dayPeriod: s,
                fullHours12: d(i),
                minutes: e.getMinutes(),
                fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
            };
        }
        function l(e) {
            return {
                dayPeriod: e > 11 ? "pm" : "am",
                hours: e % 12 == 0 ? 12 : e % 12
            };
        }
        function d(e) {
            return e < 10 ? "0" + e : e;
        }
        function c(e) {
            let t = 10 * Math.floor(e.getFullYear() / 10);
            return [
                t,
                t + 9
            ];
        }
        function u() {
            let e = [];
            for(var t = arguments.length, i = new Array(t), s = 0; s < t; s++)i[s] = arguments[s];
            return i.forEach((t)=>{
                if ("object" == typeof t) for(let i in t)t[i] && e.push(i);
                else t && e.push(t);
            }), e.join(" ");
        }
        function p(e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
            if (!e || !t) return !1;
            let a = h(e), n = h(t);
            return ({
                [i.days]: a.date === n.date && a.month === n.month && a.year === n.year,
                [i.months]: a.month === n.month && a.year === n.year,
                [i.years]: a.year === n.year
            })[s];
        }
        function m(e, t, i) {
            let s = g(e, !1).getTime(), a = g(t, !1).getTime();
            return i ? s >= a : s > a;
        }
        function v(e, t) {
            return !m(e, t, !0);
        }
        function g(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = new Date(e.getTime());
            return "boolean" != typeof t || t || function(e) {
                e.setHours(0, 0, 0, 0);
            }(i), i;
        }
        function D(e, t, i) {
            e.length ? e.forEach((e)=>{
                e.addEventListener(t, i);
            }) : e.addEventListener(t, i);
        }
        function y(e, t) {
            return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : y(e.parentNode, t));
        }
        function f(e, t, i) {
            return e > i ? i : e < t ? t : e;
        }
        function w(e) {
            for(var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)i[s - 1] = arguments[s];
            return i.filter((e)=>e).forEach((t)=>{
                for (let [i, s] of Object.entries(t))if (void 0 !== s && "[object Object]" === s.toString()) {
                    let t = void 0 !== e[i] ? e[i].toString() : void 0, a = s.toString(), n = Array.isArray(s) ? [] : {};
                    e[i] = e[i] ? t !== a ? n : e[i] : n, w(e[i], s);
                } else e[i] = s;
            }), e;
        }
        function b(e) {
            let t = e;
            return e instanceof Date || ("string" == typeof e && /^\d{4}-\d{2}-\d{2}$/.test(e) && (e += "T00:00:00"), t = new Date(e)), isNaN(t.getTime()) && (console.log(`Unable to convert value "${e}" to Date object`), t = !1), t;
        }
        function k(e) {
            let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
            return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
        }
        function $(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class C {
            constructor(){
                let { type: e, date: t, dp: i, opts: s, body: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                $(this, "focus", ()=>{
                    this.$cell.classList.add("-focus-"), this.focused = !0;
                }), $(this, "removeFocus", ()=>{
                    this.$cell.classList.remove("-focus-"), this.focused = !1;
                }), $(this, "select", ()=>{
                    this.$cell.classList.add("-selected-"), this.selected = !0;
                }), $(this, "removeSelect", ()=>{
                    this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = !1;
                }), $(this, "onChangeSelectedDate", ()=>{
                    this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
                }), $(this, "onChangeFocusDate", (e)=>{
                    if (!e) return void (this.focused && this.removeFocus());
                    let t = p(e, this.date, this.type);
                    t ? this.focus() : !t && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
                }), $(this, "render", ()=>(this.$cell.innerHTML = this._getHtml(), this._handleClasses(), this.$cell)), this.type = e, this.singleType = this.type.slice(0, -1), this.date = t, this.dp = i, this.opts = s, this.body = a, this.customData = !1, this.init();
            }
            init() {
                var e;
                let { onRenderCell: t } = this.opts;
                t && (this.customData = t({
                    date: this.date,
                    cellType: this.singleType,
                    datepicker: this.dp
                })), this._createElement(), this._bindDatepickerEvents(), null !== (e = this.customData) && void 0 !== e && e.disabled && this.dp.disableDate(this.date);
            }
            _bindDatepickerEvents() {
                this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            unbindDatepickerEvents() {
                this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            _createElement() {
                var e;
                let { year: t, month: i, date: s } = h(this.date), a = (null === (e = this.customData) || void 0 === e ? void 0 : e.attrs) || {};
                this.$cell = n({
                    attrs: {
                        "data-year": t,
                        "data-month": i,
                        "data-date": s,
                        ...a
                    }
                }), this.$cell.adpCell = this;
            }
            _getClassName() {
                var e;
                let t = new Date, { selectOtherMonths: s, selectOtherYears: a } = this.opts, { minDate: n, maxDate: r, isDateDisabled: o } = this.dp, { day: l } = h(this.date), d = this._isOutOfMinMaxRange(), c = o(this.date), m = u("air-datepicker-cell", `-${this.singleType}-`, {
                    "-current-": p(t, this.date, this.type),
                    "-min-date-": n && p(n, this.date, this.type),
                    "-max-date-": r && p(r, this.date, this.type)
                }), v = "";
                switch(this.type){
                    case i.days:
                        v = u({
                            "-weekend-": this.dp.isWeekend(l),
                            "-other-month-": this.isOtherMonth,
                            "-disabled-": this.isOtherMonth && !s || d || c
                        });
                        break;
                    case i.months:
                        v = u({
                            "-disabled-": d
                        });
                        break;
                    case i.years:
                        v = u({
                            "-other-decade-": this.isOtherDecade,
                            "-disabled-": d || this.isOtherDecade && !a
                        });
                }
                return u(m, v, null === (e = this.customData) || void 0 === e ? void 0 : e.classes).split(" ");
            }
            _getHtml() {
                var e;
                let { year: t, month: s, date: a } = h(this.date), { showOtherMonths: n, showOtherYears: r } = this.opts;
                if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;
                switch(this.type){
                    case i.days:
                        return !n && this.isOtherMonth ? "" : a;
                    case i.months:
                        return this.dp.locale[this.opts.monthsField][s];
                    case i.years:
                        return !r && this.isOtherDecade ? "" : t;
                }
            }
            _isOutOfMinMaxRange() {
                let { minDate: e, maxDate: t } = this.dp, { type: s, date: a } = this, { month: n, year: r, date: o } = h(a), l = s === i.days, d = s === i.years, c = !!e && new Date(r, d ? e.getMonth() : n, l ? o : e.getDate()), u = !!t && new Date(r, d ? t.getMonth() : n, l ? o : t.getDate());
                return e && t ? v(c, e) || m(u, t) : e ? v(c, e) : t ? m(u, t) : void 0;
            }
            destroy() {
                this.unbindDatepickerEvents();
            }
            _handleRangeStatus() {
                const { selectedDates: e, focusDate: t, rangeDateTo: i, rangeDateFrom: s } = this.dp, a = e.length;
                if (!a) return;
                let n = s, r = i;
                if (1 === a && t) {
                    const i = m(t, e[0]);
                    n = i ? e[0] : t, r = i ? t : e[0];
                }
                let o = u({
                    "-in-range-": n && r && (h = this.date, l = n, d = r, m(h, l) && v(h, d)),
                    "-range-from-": n && p(this.date, n, this.type),
                    "-range-to-": r && p(this.date, r, this.type)
                });
                var h, l, d;
                this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), o && this.$cell.classList.add(...o.split(" "));
            }
            _handleSelectedStatus() {
                let e = this.dp._checkIfDateIsSelected(this.date, this.type);
                e ? this.select() : !e && this.selected && this.removeSelect();
            }
            _handleInitialFocusStatus() {
                p(this.dp.focusDate, this.date, this.type) && this.focus();
            }
            _handleClasses() {
                this.$cell.setAttribute("class", ""), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), this.dp.opts.range && this._handleRangeStatus()), this.$cell.classList.add(...this._getClassName());
            }
            get isDisabled() {
                return this.$cell.matches(".-disabled-");
            }
            get isOtherMonth() {
                return this.dp.isOtherMonth(this.date);
            }
            get isOtherDecade() {
                return this.dp.isOtherDecade(this.date);
            }
        }
        function _(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        let M = {
            [i.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,
            [i.months]: `<div class="air-datepicker-body--cells -${i.months}-"></div>`,
            [i.years]: `<div class="air-datepicker-body--cells -${i.years}-"></div>`
        };
        const S = ".air-datepicker-cell";
        class T {
            constructor(e){
                let { dp: t, type: s, opts: a } = e;
                _(this, "handleClick", (e)=>{
                    let t = e.target.closest(S).adpCell;
                    if (t.isDisabled) return;
                    if (!this.dp.isMinViewReached) return void this.dp.down();
                    let i = this.dp._checkIfDateIsSelected(t.date, t.type);
                    i ? this.dp._handleAlreadySelectedDates(i, t.date) : this.dp.selectDate(t.date);
                }), _(this, "handleDayNameClick", (e)=>{
                    let t = e.target.getAttribute("data-day-index");
                    this.opts.onClickDayName({
                        dayIndex: Number(t),
                        datepicker: this.dp
                    });
                }), _(this, "onChangeCurrentView", (e)=>{
                    e !== this.type ? this.hide() : (this.show(), this.render());
                }), _(this, "onMouseOverCell", (e)=>{
                    let t = y(e.target, S);
                    this.dp.setFocusDate(!!t && t.adpCell.date);
                }), _(this, "onMouseOutCell", ()=>{
                    this.dp.setFocusDate(!1);
                }), _(this, "onClickBody", (e)=>{
                    let { onClickDayName: t } = this.opts, i = e.target;
                    i.closest(S) && this.handleClick(e), t && i.closest(".air-datepicker-body--day-name") && this.handleDayNameClick(e);
                }), _(this, "onMouseDown", (e)=>{
                    this.pressed = !0;
                    let t = y(e.target, S), i = t && t.adpCell;
                    p(i.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = !0), p(i.date, this.dp.rangeDateTo) && (this.rangeToFocused = !0);
                }), _(this, "onMouseMove", (e)=>{
                    if (!this.pressed || !this.dp.isMinViewReached) return;
                    e.preventDefault();
                    let t = y(e.target, S), i = t && t.adpCell, { selectedDates: s, rangeDateTo: a, rangeDateFrom: n } = this.dp;
                    if (!i || i.isDisabled) return;
                    let { date: r } = i;
                    if (2 === s.length) {
                        if (this.rangeFromFocused && !m(r, a)) {
                            let { hours: e, minutes: t } = h(n);
                            r.setHours(e), r.setMinutes(t), this.dp.rangeDateFrom = r, this.dp.replaceDate(n, r);
                        }
                        if (this.rangeToFocused && !v(r, n)) {
                            let { hours: e, minutes: t } = h(a);
                            r.setHours(e), r.setMinutes(t), this.dp.rangeDateTo = r, this.dp.replaceDate(a, r);
                        }
                    }
                }), _(this, "onMouseUp", ()=>{
                    this.pressed = !1, this.rangeFromFocused = !1, this.rangeToFocused = !1;
                }), _(this, "onChangeViewDate", (e, t)=>{
                    if (!this.isVisible) return;
                    let s = c(e), a = c(t);
                    switch(this.dp.currentView){
                        case i.days:
                            if (p(e, t, i.months)) return;
                            break;
                        case i.months:
                            if (p(e, t, i.years)) return;
                            break;
                        case i.years:
                            if (s[0] === a[0] && s[1] === a[1]) return;
                    }
                    this.render();
                }), _(this, "render", ()=>{
                    this.destroyCells(), this._generateCells(), this.cells.forEach((e)=>{
                        this.$cells.appendChild(e.render());
                    });
                }), this.dp = t, this.type = s, this.opts = a, this.cells = [], this.$el = "", this.pressed = !1, this.isVisible = !0, this.init();
            }
            init() {
                this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _bindEvents() {
                let { range: e, dynamicRange: t } = this.opts;
                D(this.$el, "mouseover", this.onMouseOverCell), D(this.$el, "mouseout", this.onMouseOutCell), D(this.$el, "click", this.onClickBody), e && t && (D(this.$el, "mousedown", this.onMouseDown), D(this.$el, "mousemove", this.onMouseMove), D(window.document, "mouseup", this.onMouseUp));
            }
            _bindDatepickerEvents() {
                this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            _buildBaseHtml() {
                this.$el = n({
                    className: `air-datepicker-body -${this.type}-`,
                    innerHtml: M[this.type]
                }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
            }
            _getDayNamesHtml() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t = "", s = this.dp.isWeekend, { onClickDayName: a } = this.opts, n = e, r = 0;
                for(; r < 7;){
                    let e = n % 7;
                    t += `<div class="${u("air-datepicker-body--day-name", {
                        [i.cssClassWeekend]: s(e),
                        "-clickable-": !!a
                    })}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`, r++, n++;
                }
                return t;
            }
            renderDayNames() {
                this.$names.innerHTML = this._getDayNamesHtml();
            }
            _generateCell(e) {
                let { type: t, dp: i, opts: s } = this;
                return new C({
                    type: t,
                    dp: i,
                    opts: s,
                    date: e,
                    body: this
                });
            }
            _generateCells() {
                T.getDatesFunction(this.type)(this.dp, (e)=>{
                    this.cells.push(this._generateCell(e));
                });
            }
            show() {
                this.isVisible = !0, this.$el.classList.remove("-hidden-");
            }
            hide() {
                this.isVisible = !1, this.$el.classList.add("-hidden-");
            }
            destroyCells() {
                this.cells.forEach((e)=>e.destroy()), this.cells = [], this.$cells.innerHTML = "";
            }
            destroy() {
                this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            static getDaysDates(e, t) {
                let { viewDate: i, opts: { fixedHeight: s }, locale: { firstDay: a } } = e, n = o(i), { year: r, month: l } = h(i), d = new Date(r, l, 1), c = new Date(r, l, n), u = d.getDay() - a, p = 6 - c.getDay() + a;
                u = u < 0 ? u + 7 : u, p = p > 6 ? p - 7 : p;
                let m = function(e, t) {
                    let { year: i, month: s, date: a } = h(e);
                    return new Date(i, s, a - t);
                }(d, u), v = n + u + p, g = m.getDate(), { year: D, month: y } = h(m), f = 0;
                s && (v = 42);
                const w = [];
                for(; f < v;){
                    let e = new Date(D, y, g + f);
                    t && t(e), w.push(e), f++;
                }
                return w;
            }
            static getMonthsDates(e, t) {
                let { year: i } = e.parsedViewDate, s = 0, a = [];
                for(; s < 12;){
                    const e = new Date(i, s);
                    a.push(e), t && t(e), s++;
                }
                return a;
            }
            static getYearsDates(e, t) {
                let i = c(e.viewDate), s = i[0] - 1, a = i[1] + 1, n = s, r = [];
                for(; n <= a;){
                    const e = new Date(n, 0);
                    r.push(e), t && t(e), n++;
                }
                return r;
            }
            static getDatesFunction() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
                return ({
                    [i.days]: T.getDaysDates,
                    [i.months]: T.getMonthsDates,
                    [i.years]: T.getYearsDates
                })[e];
            }
        }
        function F(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class V {
            constructor(e){
                let { dp: t, opts: i } = e;
                F(this, "onClickNav", (e)=>{
                    let t = y(e.target, ".air-datepicker-nav--action");
                    if (!t) return;
                    let i = t.dataset.action;
                    this.dp[i]();
                }), F(this, "onChangeViewDate", ()=>{
                    this.render(), this._resetNavStatus(), this.handleNavStatus();
                }), F(this, "onChangeCurrentView", ()=>{
                    this.render(), this._resetNavStatus(), this.handleNavStatus();
                }), F(this, "onClickNavTitle", ()=>{
                    this.dp.isFinalView || this.dp.up();
                }), F(this, "update", ()=>{
                    let { prevHtml: e, nextHtml: t } = this.opts;
                    this.$prev.innerHTML = e, this.$next.innerHTML = t, this._resetNavStatus(), this.render(), this.handleNavStatus();
                }), F(this, "renderDelay", ()=>{
                    setTimeout(this.render);
                }), F(this, "render", ()=>{
                    this.$title.innerHTML = this._getTitle(), function(e, t) {
                        for(let i in t)t[i] ? e.classList.add(i) : e.classList.remove(i);
                    }(this.$title, {
                        "-disabled-": this.dp.isFinalView
                    });
                }), this.dp = t, this.opts = i, this.init();
            }
            init() {
                this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _defineDOM() {
                this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), this.$next = a('[data-action="next"]', this.$el);
            }
            _bindEvents() {
                this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
            }
            _bindDatepickerEvents() {
                this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
            }
            destroy() {
                this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
            }
            _createElement() {
                this.$el = n({
                    tagName: "nav",
                    className: "air-datepicker-nav"
                });
            }
            _getTitle() {
                let { dp: e, opts: t } = this, i = t.navTitles[e.currentView];
                return "function" == typeof i ? i(e) : e.formatDate(e.viewDate, i);
            }
            handleNavStatus() {
                let { disableNavWhenOutOfRange: e } = this.opts, { minDate: t, maxDate: s } = this.dp;
                if (!t && !s || !e) return;
                let { year: a, month: n } = this.dp.parsedViewDate, r = !!t && h(t), o = !!s && h(s);
                switch(this.dp.currentView){
                    case i.days:
                        t && r.month >= n && r.year >= a && this._disableNav("prev"), s && o.month <= n && o.year <= a && this._disableNav("next");
                        break;
                    case i.months:
                        t && r.year >= a && this._disableNav("prev"), s && o.year <= a && this._disableNav("next");
                        break;
                    case i.years:
                        {
                            let e = c(this.dp.viewDate);
                            t && r.year >= e[0] && this._disableNav("prev"), s && o.year <= e[1] && this._disableNav("next");
                            break;
                        }
                }
            }
            _disableNav(e) {
                a('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
            }
            _resetNavStatus() {
                !function(e) {
                    for(var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)i[s - 1] = arguments[s];
                    e.length ? e.forEach((e)=>{
                        e.classList.remove(...i);
                    }) : e.classList.remove(...i);
                }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
            }
            _buildBaseHtml() {
                let { prevHtml: e, nextHtml: t } = this.opts;
                this.$el.innerHTML = `<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`;
            }
            get isNavIsFunction() {
                let { navTitles: e } = this.opts;
                return Object.keys(e).find((t)=>"function" == typeof e[t]);
            }
        }
        var x = {
            today: {
                content: (e)=>e.locale.today,
                onClick: (e)=>e.setViewDate(new Date)
            },
            clear: {
                content: (e)=>e.locale.clear,
                onClick: (e)=>e.clear()
            }
        };
        class H {
            constructor(e){
                let { dp: t, opts: i } = e;
                this.dp = t, this.opts = i, this.init();
            }
            init() {
                this.createElement(), this.render();
            }
            createElement() {
                this.$el = n({
                    className: "air-datepicker-buttons"
                });
            }
            destroy() {
                this.$el.parentNode.removeChild(this.$el);
            }
            clearHtml() {
                return this.$el.innerHTML = "", this;
            }
            generateButtons() {
                let { buttons: e } = this.opts;
                Array.isArray(e) || (e = [
                    e
                ]), e.forEach((e)=>{
                    let t = e;
                    "string" == typeof e && x[e] && (t = x[e]);
                    let i = this.createButton(t);
                    t.onClick && this.attachEventToButton(i, t.onClick), this.$el.appendChild(i);
                });
            }
            attachEventToButton(e, t) {
                e.addEventListener("click", ()=>{
                    t(this.dp);
                });
            }
            createButton(e) {
                let { content: t, className: i, tagName: s = "button", attrs: a = {} } = e;
                return n({
                    tagName: s,
                    innerHtml: `<span tabindex='-1'>${"function" == typeof t ? t(this.dp) : t}</span>`,
                    className: u("air-datepicker-button", i),
                    attrs: a
                });
            }
            render() {
                this.generateButtons();
            }
        }
        function E(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class L {
            constructor(){
                let { opts: e, dp: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                E(this, "toggleTimepickerIsActive", (e)=>{
                    this.dp.timepickerIsActive = e;
                }), E(this, "onChangeSelectedDate", (e)=>{
                    let { date: t, updateTime: i = !1 } = e;
                    t && (this.setMinMaxTime(t), this.setCurrentTime(!!i && t), this.addTimeToDate(t));
                }), E(this, "onChangeLastSelectedDate", (e)=>{
                    e && (this.setTime(e), this.render());
                }), E(this, "onChangeInputRange", (e)=>{
                    let t = e.target;
                    this[t.getAttribute("name")] = t.value, this.updateText(), this.dp.trigger(i.eventChangeTime, {
                        hours: this.hours,
                        minutes: this.minutes
                    });
                }), E(this, "onMouseEnterLeave", (e)=>{
                    let t = e.target.getAttribute("name"), i = this.$minutesText;
                    "hours" === t && (i = this.$hoursText), i.classList.toggle("-focus-");
                }), E(this, "onFocus", ()=>{
                    this.toggleTimepickerIsActive(!0);
                }), E(this, "onBlur", ()=>{
                    this.toggleTimepickerIsActive(!1);
                }), this.opts = e, this.dp = t;
                let { timeFormat: s } = this.dp.locale;
                s && (s.match(k("h")) || s.match(k("hh"))) && (this.ampm = !0), this.init();
            }
            init() {
                this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
            }
            bindDatepickerEvents() {
                this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
            }
            bindDOMEvents() {
                let e = "input";
                navigator.userAgent.match(/trident/gi) && (e = "change"), D(this.$ranges, e, this.onChangeInputRange), D(this.$ranges, "mouseenter", this.onMouseEnterLeave), D(this.$ranges, "mouseleave", this.onMouseEnterLeave), D(this.$ranges, "focus", this.onFocus), D(this.$ranges, "mousedown", this.onFocus), D(this.$ranges, "blur", this.onBlur);
            }
            createElement() {
                this.$el = n({
                    className: u("air-datepicker-time", {
                        "-am-pm-": this.dp.ampm
                    })
                });
            }
            destroy() {
                this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
            }
            buildHtml() {
                let { ampm: e, hours: t, displayHours: i, minutes: s, minHours: a, minMinutes: n, maxHours: r, maxMinutes: o, dayPeriod: h, opts: { hoursStep: l, minutesStep: c } } = this;
                this.$el.innerHTML = `<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s)}</span>   ` + (e ? `<span class='air-datepicker-time--current-ampm'>${h}</span>` : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + `      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">` + `      <input type="range" name="minutes" value="${s}" min="${n}" max="${o}" step="${c}"/>   </div></div>`;
            }
            defineDOM() {
                let e = (e)=>a(e, this.$el);
                this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e('[name="hours"]'), this.$minutes = e('[name="minutes"]'), this.$hoursText = e(".air-datepicker-time--current-hours"), this.$minutesText = e(".air-datepicker-time--current-minutes"), this.$ampm = e(".air-datepicker-time--current-ampm");
            }
            setTime(e) {
                this.setMinMaxTime(e), this.setCurrentTime(e);
            }
            addTimeToDate(e) {
                e && (e.setHours(this.hours), e.setMinutes(this.minutes));
            }
            setMinMaxTime(e) {
                if (this.setMinMaxTimeFromOptions(), e) {
                    let { minDate: t, maxDate: i } = this.dp;
                    t && p(e, t) && this.setMinTimeFromMinDate(t), i && p(e, i) && this.setMaxTimeFromMaxDate(i);
                }
            }
            setCurrentTime(e) {
                let { hours: t, minutes: i } = e ? h(e) : this;
                this.hours = f(t, this.minHours, this.maxHours), this.minutes = f(i, this.minMinutes, this.maxMinutes);
            }
            setMinMaxTimeFromOptions() {
                let { minHours: e, minMinutes: t, maxHours: i, maxMinutes: s } = this.opts;
                this.minHours = f(e, 0, 23), this.minMinutes = f(t, 0, 59), this.maxHours = f(i, 0, 23), this.maxMinutes = f(s, 0, 59);
            }
            setMinTimeFromMinDate(e) {
                let { lastSelectedDate: t } = this.dp;
                this.minHours = e.getHours(), t && t.getHours() > e.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e.getMinutes();
            }
            setMaxTimeFromMaxDate(e) {
                let { lastSelectedDate: t } = this.dp;
                this.maxHours = e.getHours(), t && t.getHours() < e.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e.getMinutes();
            }
            updateSliders() {
                r(this.$hours, {
                    min: this.minHours,
                    max: this.maxHours
                }).value = this.hours, r(this.$minutes, {
                    min: this.minMinutes,
                    max: this.maxMinutes
                }).value = this.minutes;
            }
            updateText() {
                this.$hoursText.innerHTML = d(this.displayHours), this.$minutesText.innerHTML = d(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
            }
            set hours(e) {
                this._hours = e;
                let { hours: t, dayPeriod: i } = l(e);
                this.displayHours = this.ampm ? t : e, this.dayPeriod = i;
            }
            get hours() {
                return this._hours;
            }
            render() {
                this.updateSliders(), this.updateText();
            }
        }
        function O(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class A {
            constructor(e){
                let { dp: t, opts: i } = e;
                O(this, "pressedKeys", new Set), O(this, "hotKeys", new Map([
                    [
                        [
                            [
                                "Control",
                                "ArrowRight"
                            ],
                            [
                                "Control",
                                "ArrowUp"
                            ]
                        ],
                        (e)=>e.month++
                    ],
                    [
                        [
                            [
                                "Control",
                                "ArrowLeft"
                            ],
                            [
                                "Control",
                                "ArrowDown"
                            ]
                        ],
                        (e)=>e.month--
                    ],
                    [
                        [
                            [
                                "Shift",
                                "ArrowRight"
                            ],
                            [
                                "Shift",
                                "ArrowUp"
                            ]
                        ],
                        (e)=>e.year++
                    ],
                    [
                        [
                            [
                                "Shift",
                                "ArrowLeft"
                            ],
                            [
                                "Shift",
                                "ArrowDown"
                            ]
                        ],
                        (e)=>e.year--
                    ],
                    [
                        [
                            [
                                "Alt",
                                "ArrowRight"
                            ],
                            [
                                "Alt",
                                "ArrowUp"
                            ]
                        ],
                        (e)=>e.year += 10
                    ],
                    [
                        [
                            [
                                "Alt",
                                "ArrowLeft"
                            ],
                            [
                                "Alt",
                                "ArrowDown"
                            ]
                        ],
                        (e)=>e.year -= 10
                    ],
                    [
                        [
                            "Control",
                            "Shift",
                            "ArrowUp"
                        ],
                        (e, t)=>t.up()
                    ]
                ])), O(this, "handleHotKey", (e)=>{
                    let t = this.hotKeys.get(e), i = h(this.getInitialFocusDate());
                    t(i, this.dp);
                    let { year: s, month: a, date: n } = i, r = o(new Date(s, a));
                    r < n && (n = r);
                    let l = this.dp.getClampedDate(new Date(s, a, n));
                    this.dp.setFocusDate(l, {
                        viewDateTransition: !0
                    });
                }), O(this, "isHotKeyPressed", ()=>{
                    let e = !1, t = this.pressedKeys.size, i = (e)=>this.pressedKeys.has(e);
                    for (let [s] of this.hotKeys){
                        if (e) break;
                        if (Array.isArray(s[0])) s.forEach((a)=>{
                            e || t !== a.length || (e = a.every(i) && s);
                        });
                        else {
                            if (t !== s.length) continue;
                            e = s.every(i) && s;
                        }
                    }
                    return e;
                }), O(this, "isArrow", (e)=>e >= 37 && e <= 40), O(this, "onKeyDown", (e)=>{
                    let { key: t, which: i } = e, { dp: s, dp: { focusDate: a }, opts: n } = this;
                    this.registerKey(t);
                    let r = this.isHotKeyPressed();
                    if (r) return e.preventDefault(), void this.handleHotKey(r);
                    if (this.isArrow(i)) return e.preventDefault(), void this.focusNextCell(t);
                    if ("Enter" === t) {
                        if (s.currentView !== n.minView) return void s.down();
                        if (a) {
                            let e = s._checkIfDateIsSelected(a);
                            return void (e ? s._handleAlreadySelectedDates(e, a) : s.selectDate(a));
                        }
                    }
                    "Escape" === t && this.dp.hide();
                }), O(this, "onKeyUp", (e)=>{
                    this.removeKey(e.key);
                }), this.dp = t, this.opts = i, this.init();
            }
            init() {
                this.bindKeyboardEvents();
            }
            bindKeyboardEvents() {
                let { $el: e } = this.dp;
                e.addEventListener("keydown", this.onKeyDown), e.addEventListener("keyup", this.onKeyUp);
            }
            destroy() {
                let { $el: e } = this.dp;
                e.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
            }
            getInitialFocusDate() {
                let { focusDate: e, currentView: t, selectedDates: s, parsedViewDate: { year: a, month: n } } = this.dp, r = e || s[s.length - 1];
                if (!r) switch(t){
                    case i.days:
                        r = new Date(a, n, (new Date).getDate());
                        break;
                    case i.months:
                        r = new Date(a, n, 1);
                        break;
                    case i.years:
                        r = new Date(a, 0, 1);
                }
                return r;
            }
            focusNextCell(e) {
                let t = this.getInitialFocusDate(), { currentView: s } = this.dp, { days: a, months: n, years: r } = i, o = h(t), l = o.year, d = o.month, c = o.date;
                switch(e){
                    case "ArrowLeft":
                        s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
                        break;
                    case "ArrowUp":
                        s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
                        break;
                    case "ArrowRight":
                        s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
                        break;
                    case "ArrowDown":
                        s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
                }
                let u = this.dp.getClampedDate(new Date(l, d, c));
                this.dp.setFocusDate(u, {
                    viewDateTransition: !0
                });
            }
            registerKey(e) {
                this.pressedKeys.add(e);
            }
            removeKey(e) {
                this.pressedKeys.delete(e);
            }
        }
        let N = {
            on (e, t) {
                this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : this.__events[e] = [
                    t
                ];
            },
            off (e, t) {
                this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter((e)=>e !== t));
            },
            removeAllEvents () {
                this.__events = {};
            },
            trigger (e) {
                for(var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)i[s - 1] = arguments[s];
                this.__events && this.__events[e] && this.__events[e].forEach((e)=>{
                    e(...i);
                });
            }
        };
        function I(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        let P = "", j = "", B = !1;
        class R {
            static buildGlobalContainer(e) {
                B = !0, P = n({
                    className: e,
                    id: e
                }), a("body").appendChild(P);
            }
            constructor(e, t){
                var r = this;
                if (I(this, "viewIndexes", [
                    i.days,
                    i.months,
                    i.years
                ]), I(this, "next", ()=>{
                    let { year: e, month: t } = this.parsedViewDate;
                    switch(this.currentView){
                        case i.days:
                            this.setViewDate(new Date(e, t + 1, 1));
                            break;
                        case i.months:
                            this.setViewDate(new Date(e + 1, t, 1));
                            break;
                        case i.years:
                            this.setViewDate(new Date(e + 10, 0, 1));
                    }
                }), I(this, "prev", ()=>{
                    let { year: e, month: t } = this.parsedViewDate;
                    switch(this.currentView){
                        case i.days:
                            this.setViewDate(new Date(e, t - 1, 1));
                            break;
                        case i.months:
                            this.setViewDate(new Date(e - 1, t, 1));
                            break;
                        case i.years:
                            this.setViewDate(new Date(e - 10, 0, 1));
                    }
                }), I(this, "_finishHide", ()=>{
                    this.hideAnimation = !1, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
                }), I(this, "setPosition", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if ("function" == typeof (e = e || r.opts.position)) return void (r.customHide = e({
                        $datepicker: r.$datepicker,
                        $target: r.$el,
                        $pointer: r.$pointer,
                        isViewChange: t,
                        done: r._finishHide
                    }));
                    let i, s, { isMobile: a } = r.opts, n = r.$el.getBoundingClientRect(), o = r.$el.getBoundingClientRect(), h = r.$datepicker.offsetParent, l = r.$el.offsetParent, d = r.$datepicker.getBoundingClientRect(), c = e.split(" "), u = window.scrollY, p = window.scrollX, m = r.opts.offset, v = c[0], g = c[1];
                    if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%";
                    else {
                        if (h === l && h !== document.body && (o = {
                            top: r.$el.offsetTop,
                            left: r.$el.offsetLeft,
                            width: n.width,
                            height: r.$el.offsetHeight
                        }, u = 0, p = 0), h !== l && h !== document.body) {
                            let e = h.getBoundingClientRect();
                            o = {
                                top: n.top - e.top,
                                left: n.left - e.left,
                                width: n.width,
                                height: n.height
                            }, u = 0, p = 0;
                        }
                        switch(v){
                            case "top":
                                i = o.top - d.height - m;
                                break;
                            case "right":
                                s = o.left + o.width + m;
                                break;
                            case "bottom":
                                i = o.top + o.height + m;
                                break;
                            case "left":
                                s = o.left - d.width - m;
                        }
                        switch(g){
                            case "top":
                                i = o.top;
                                break;
                            case "right":
                                s = o.left + o.width - d.width;
                                break;
                            case "bottom":
                                i = o.top + o.height - d.height;
                                break;
                            case "left":
                                s = o.left;
                                break;
                            case "center":
                                /left|right/.test(v) ? i = o.top + o.height / 2 - d.height / 2 : s = o.left + o.width / 2 - d.width / 2;
                        }
                        r.$datepicker.style.cssText = `left: ${s + p}px; top: ${i + u}px`;
                    }
                }), I(this, "_setInputValue", ()=>{
                    let { opts: e, $altField: t, locale: { dateFormat: i } } = this, { altFieldDateFormat: s, altField: a } = e;
                    a && t && (t.value = this._getInputValue(s)), this.$el.value = this._getInputValue(i);
                }), I(this, "_getInputValue", (e)=>{
                    let { selectedDates: t, opts: i } = this, { multipleDates: s, multipleDatesSeparator: a } = i;
                    if (!t.length) return "";
                    let n = "function" == typeof e, r = n ? e(s ? t : t[0]) : t.map((t)=>this.formatDate(t, e));
                    return r = n ? r : r.join(a), r;
                }), I(this, "_checkIfDateIsSelected", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days, s = !1;
                    return r.selectedDates.some((i)=>{
                        let a = p(e, i, t);
                        return s = a && i, a;
                    }), s;
                }), I(this, "_scheduleCallAfterTransition", (e)=>{
                    this._cancelScheduledCall(), e && e(!1), this._onTransitionEnd = ()=>{
                        e && e(!0);
                    }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, {
                        once: !0
                    });
                }), I(this, "_cancelScheduledCall", ()=>{
                    this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
                }), I(this, "setViewDate", (e)=>{
                    if (!((e = b(e)) instanceof Date)) return;
                    if (p(e, this.viewDate)) return;
                    let t = this.viewDate;
                    this.viewDate = e;
                    let { onChangeViewDate: s } = this.opts;
                    if (s) {
                        let { month: e, year: t } = this.parsedViewDate;
                        s({
                            month: e,
                            year: t,
                            decade: this.curDecade
                        });
                    }
                    this.trigger(i.eventChangeViewDate, e, t);
                }), I(this, "setFocusDate", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (!e || (e = b(e)) instanceof Date) && (r.focusDate = e, r.trigger(i.eventChangeFocusDate, e, t));
                }), I(this, "setCurrentView", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (r.viewIndexes.includes(e)) {
                        if (r.currentView = e, r.elIsInput && r.visible && r.setPosition(void 0, !0), r.trigger(i.eventChangeCurrentView, e), !r.views[e]) {
                            let t = r.views[e] = new T({
                                dp: r,
                                opts: r.opts,
                                type: e
                            });
                            r.shouldUpdateDOM && r.$content.appendChild(t.$el);
                        }
                        r.opts.onChangeView && !t.silent && r.opts.onChangeView(e);
                    }
                }), I(this, "_updateLastSelectedDate", (e)=>{
                    this.lastSelectedDate = e, this.trigger(i.eventChangeLastSelectedDate, e);
                }), I(this, "destroy", ()=>{
                    if (this.isDestroyed) return;
                    let { showEvent: e, isMobile: t } = this.opts, i = this.$datepicker.parentNode;
                    i && i.removeChild(this.$datepicker), this.$el.removeEventListener(e, this._onFocus), this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), t && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), this.views = null, this.nav = null, this.$datepicker = null, this.opts = {}, this.$customContainer = null, this.viewDate = null, this.focusDate = null, this.selectedDates = [], this.rangeDateFrom = null, this.rangeDateTo = null, this.isDestroyed = !0;
                }), I(this, "update", function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = w({}, r.opts), { silent: a } = t;
                    w(r.opts, e);
                    let { timepicker: n, buttons: o, range: h, selectedDates: l, isMobile: d } = r.opts, c = r.visible || r.treatAsInline;
                    r._createMinMaxDates(), r._limitViewDateByMaxMinDates(), r._handleLocale(), l && (r.selectedDates = [], r.selectDate(l, {
                        silent: a
                    })), e.view && r.setCurrentView(e.view, {
                        silent: a
                    }), r._setInputValue(), s.range && !h ? (r.rangeDateTo = !1, r.rangeDateFrom = !1) : !s.range && h && r.selectedDates.length && (r.rangeDateFrom = r.selectedDates[0], r.rangeDateTo = r.selectedDates[1]), s.timepicker && !n ? (c && r.timepicker.destroy(), r.timepicker = !1, r.$timepicker.parentNode.removeChild(r.$timepicker)) : !s.timepicker && n && r._addTimepicker(), !s.buttons && o ? r._addButtons() : s.buttons && !o ? (r.buttons.destroy(), r.$buttons.parentNode.removeChild(r.$buttons)) : c && s.buttons && o && r.buttons.clearHtml().render(), !s.isMobile && d ? (r.treatAsInline || j || r._createMobileOverlay(), r._addMobileAttributes(), r.visible && r._showMobileOverlay()) : s.isMobile && !d && (r._removeMobileAttributes(), r.visible && (j.classList.remove("-active-"), "function" != typeof r.opts.position && r.setPosition())), c && (r.nav.update(), r.views[r.currentView].render(), r.currentView === i.days && r.views[r.currentView].renderDayNames());
                }), I(this, "disableDate", (e, t)=>{
                    (Array.isArray(e) ? e : [
                        e
                    ]).forEach((e)=>{
                        let i = b(e);
                        if (!i) return;
                        let s = t ? "delete" : "add";
                        this.disabledDates[s](this.formatDate(i, "yyyy-MM-dd"));
                        let a = this.getCell(i, this.currentViewSingular);
                        a && a.adpCell.render();
                    }, []);
                }), I(this, "enableDate", (e)=>{
                    this.disableDate(e, !0);
                }), I(this, "isDateDisabled", (e)=>{
                    let t = b(e);
                    return this.disabledDates.has(this.formatDate(t, "yyyy-MM-dd"));
                }), I(this, "isOtherMonth", (e)=>{
                    let { month: t } = h(e);
                    return t !== this.parsedViewDate.month;
                }), I(this, "isOtherYear", (e)=>{
                    let { year: t } = h(e);
                    return t !== this.parsedViewDate.year;
                }), I(this, "isOtherDecade", (e)=>{
                    let { year: t } = h(e), [i, s] = c(this.viewDate);
                    return t < i || t > s;
                }), I(this, "_onChangeSelectedDate", (e)=>{
                    let { silent: t } = e;
                    setTimeout(()=>{
                        this._setInputValue(), this.opts.onSelect && !t && this._triggerOnSelect();
                    });
                }), I(this, "_onChangeFocusedDate", function(e) {
                    let { viewDateTransition: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!e) return;
                    let i = !1;
                    t && (i = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)), i && r.setViewDate(e), r.opts.onFocus && r.opts.onFocus({
                        datepicker: r,
                        date: e
                    });
                }), I(this, "_onChangeTime", (e)=>{
                    let { hours: t, minutes: i } = e, s = new Date, { lastSelectedDate: a, opts: { onSelect: n } } = this, r = a;
                    a || (r = s);
                    let o = this.getCell(r, this.currentViewSingular), h = o && o.adpCell;
                    h && h.isDisabled || (r.setHours(t), r.setMinutes(i), a ? (this._setInputValue(), n && this._triggerOnSelect()) : this.selectDate(r));
                }), I(this, "_onFocus", (e)=>{
                    this.visible || this.show();
                }), I(this, "_onBlur", (e)=>{
                    this.inFocus || !this.visible || this.opts.isMobile || this.hide();
                }), I(this, "_onMouseDown", (e)=>{
                    this.inFocus = !0;
                }), I(this, "_onMouseUp", (e)=>{
                    this.inFocus = !1, this.$el.focus();
                }), I(this, "_onResize", ()=>{
                    this.visible && "function" != typeof this.opts.position && this.setPosition();
                }), I(this, "_onClickOverlay", ()=>{
                    this.visible && this.hide();
                }), I(this, "getViewDates", function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
                    return T.getDatesFunction(e)(r);
                }), I(this, "isWeekend", (e)=>this.opts.weekends.includes(e)), I(this, "getClampedDate", (e)=>{
                    let { minDate: t, maxDate: i } = this, s = e;
                    return i && m(e, i) ? s = i : t && v(e, t) && (s = t), s;
                }), this.$el = a(e), !this.$el) return;
                this.$datepicker = n({
                    className: "air-datepicker"
                }), this.opts = w({}, s, t), this.$customContainer = !!this.opts.container && a(this.opts.container), this.$altField = a(this.opts.altField || !1);
                let { view: o, startDate: l } = this.opts;
                l || (this.opts.startDate = new Date), "INPUT" === this.$el.nodeName && (this.elIsInput = !0), this.inited = !1, this.visible = !1, this.viewDate = b(this.opts.startDate), this.focusDate = !1, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = !1, this.currentView = o, this.selectedDates = [], this.disabledDates = new Set, this.isDestroyed = !1, this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = !1, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
            }
            init() {
                let { opts: e, treatAsInline: t, opts: { inline: i, isMobile: s, selectedDates: n, keyboardNav: r, onlyTimepicker: o } } = this, h = a("body");
                (!B || B && P && !h.contains(P)) && !i && this.elIsInput && !this.$customContainer && R.buildGlobalContainer(R.defaultGlobalContainerId), !s || j || t || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (i || this._bindEvents(), r && !o && (this.keyboardNav = new A({
                    dp: this,
                    opts: e
                }))), n && this.selectDate(n, {
                    silent: !0
                }), this.opts.visible && !t && this.show(), s && !t && this.$el.setAttribute("readonly", !0), t && this._createComponents();
            }
            _createMobileOverlay() {
                j = n({
                    className: "air-datepicker-overlay"
                }), P.appendChild(j);
            }
            _createComponents() {
                let { opts: e, treatAsInline: t, opts: { inline: i, buttons: s, timepicker: a, position: n, classes: r, onlyTimepicker: o, isMobile: h } } = this;
                this._buildBaseHtml(), this.elIsInput && (i || this._setPositionClasses(n)), !i && this.elIsInput || this.$datepicker.classList.add("-inline-"), r && this.$datepicker.classList.add(...r.split(" ")), o && this.$datepicker.classList.add("-only-timepicker-"), h && !t && this._addMobileAttributes(), this.views[this.currentView] = new T({
                    dp: this,
                    type: this.currentView,
                    opts: e
                }), this.nav = new V({
                    dp: this,
                    opts: e
                }), a && this._addTimepicker(), s && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
            }
            _destroyComponents() {
                for(let e in this.views)this.views[e].destroy();
                this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
            }
            _addMobileAttributes() {
                j.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", !0);
            }
            _removeMobileAttributes() {
                j.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
            }
            _createMinMaxDates() {
                let { minDate: e, maxDate: t } = this.opts;
                this.minDate = !!e && b(e), this.maxDate = !!t && b(t);
            }
            _addTimepicker() {
                this.$timepicker = n({
                    className: "air-datepicker--time"
                }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({
                    dp: this,
                    opts: this.opts
                }), this.$timepicker.appendChild(this.timepicker.$el);
            }
            _addButtons() {
                this.$buttons = n({
                    className: "air-datepicker--buttons"
                }), this.$datepicker.appendChild(this.$buttons), this.buttons = new H({
                    dp: this,
                    opts: this.opts
                }), this.$buttons.appendChild(this.buttons.$el);
            }
            _bindSubEvents() {
                this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), this.on(i.eventChangeTime, this._onChangeTime);
            }
            _buildBaseHtml() {
                let { inline: e } = this.opts;
                var t, i;
                this.elIsInput ? e ? (t = this.$datepicker, (i = this.$el).parentNode.insertBefore(t, i.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), this.$nav = a(".air-datepicker--navigation", this.$datepicker);
            }
            _handleLocale() {
                let { locale: e, dateFormat: t, firstDay: i, timepicker: s, onlyTimepicker: a, timeFormat: n, dateTimeSeparator: r } = this.opts;
                var o;
                this.locale = (o = e, JSON.parse(JSON.stringify(o))), t && (this.locale.dateFormat = t), void 0 !== n && "" !== n && (this.locale.timeFormat = n);
                let { timeFormat: h } = this.locale;
                if ("" !== i && (this.locale.firstDay = i), s && "function" != typeof t) {
                    let e = h ? r : "";
                    this.locale.dateFormat = [
                        this.locale.dateFormat,
                        h || ""
                    ].join(e);
                }
                a && "function" != typeof t && (this.locale.dateFormat = this.locale.timeFormat);
            }
            _setPositionClasses(e) {
                if ("function" == typeof e) return void this.$datepicker.classList.add("-custom-position-");
                let t = (e = e.split(" "))[0], i = `air-datepicker -${t}-${e[1]}- -from-${t}-`;
                this.$datepicker.classList.add(...i.split(" "));
            }
            _bindEvents() {
                this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), window.addEventListener("resize", this._onResize);
            }
            _limitViewDateByMaxMinDates() {
                let { viewDate: e, minDate: t, maxDate: i } = this;
                i && m(e, i) && this.setViewDate(i), t && v(e, t) && this.setViewDate(t);
            }
            formatDate() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate, t = arguments.length > 1 ? arguments[1] : void 0;
                if (e = b(e), !(e instanceof Date)) return;
                let i = t, s = this.locale, a = h(e), n = a.dayPeriod, r = c(e), o = R.replacer, l = {
                    T: e.getTime(),
                    m: a.minutes,
                    mm: a.fullMinutes,
                    h: a.hours12,
                    hh: a.fullHours12,
                    H: a.hours,
                    HH: a.fullHours,
                    aa: n,
                    AA: n.toUpperCase(),
                    E: s.daysShort[a.day],
                    EEEE: s.days[a.day],
                    d: a.date,
                    dd: a.fullDate,
                    M: a.month + 1,
                    MM: a.fullMonth,
                    MMM: s.monthsShort[a.month],
                    MMMM: s.months[a.month],
                    yy: a.year.toString().slice(-2),
                    yyyy: a.year,
                    yyyy1: r[0],
                    yyyy2: r[1]
                };
                for (let [e, t] of Object.entries(l))i = o(i, k(e), t);
                return i;
            }
            down(e) {
                this._handleUpDownActions(e, "down");
            }
            up(e) {
                this._handleUpDownActions(e, "up");
            }
            selectDate(e) {
                let t, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { currentView: a, parsedViewDate: n, selectedDates: r } = this, { updateTime: o } = s, { moveToOtherMonthsOnSelect: h, moveToOtherYearsOnSelect: l, multipleDates: d, range: c, autoClose: u, onBeforeSelect: p } = this.opts, v = r.length;
                if (Array.isArray(e)) return e.forEach((e)=>{
                    this.selectDate(e, s);
                }), new Promise((e)=>{
                    setTimeout(e);
                });
                if ((e = b(e)) instanceof Date) {
                    if (p && !p({
                        date: e,
                        datepicker: this
                    })) return Promise.resolve();
                    if (a === i.days && e.getMonth() !== n.month && h && (t = new Date(e.getFullYear(), e.getMonth(), 1)), a === i.years && e.getFullYear() !== n.year && l && (t = new Date(e.getFullYear(), 0, 1)), t && this.setViewDate(t), d && !c) {
                        if (v === d) return;
                        this._checkIfDateIsSelected(e) || r.push(e);
                    } else if (c) switch(v){
                        case 1:
                            r.push(e), this.rangeDateTo || (this.rangeDateTo = e), m(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e), this.selectedDates = [
                                this.rangeDateFrom,
                                this.rangeDateTo
                            ];
                            break;
                        case 2:
                            this.selectedDates = [
                                e
                            ], this.rangeDateFrom = e, this.rangeDateTo = "";
                            break;
                        default:
                            this.selectedDates = [
                                e
                            ], this.rangeDateFrom = e;
                    }
                    else this.selectedDates = [
                        e
                    ];
                    return this.trigger(i.eventChangeSelectedDate, {
                        action: i.actionSelectDate,
                        silent: null == s ? void 0 : s.silent,
                        date: e,
                        updateTime: o
                    }), this._updateLastSelectedDate(e), u && !this.timepickerIsActive && this.visible && (d || c ? c && 1 === v && this.hide() : this.hide()), new Promise((e)=>{
                        setTimeout(e);
                    });
                }
            }
            unselectDate(e) {
                let t = this.selectedDates, s = this;
                if ((e = b(e)) instanceof Date) return t.some((a, n)=>{
                    if (p(a, e)) return t.splice(n, 1), s.selectedDates.length ? (s.rangeDateTo = "", s.rangeDateFrom = t[0], s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length - 1])) : (s.rangeDateFrom = "", s.rangeDateTo = "", s._updateLastSelectedDate(!1)), this.trigger(i.eventChangeSelectedDate, {
                        action: i.actionUnselectDate,
                        date: e
                    }), !0;
                });
            }
            replaceDate(e, t) {
                let s = this.selectedDates.find((t)=>p(t, e, this.currentView)), a = this.selectedDates.indexOf(s);
                a < 0 || p(this.selectedDates[a], t, this.currentView) || (this.selectedDates[a] = t, this.trigger(i.eventChangeSelectedDate, {
                    action: i.actionSelectDate,
                    date: t,
                    updateTime: !0
                }), this._updateLastSelectedDate(t));
            }
            clear() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.selectedDates = [], this.rangeDateFrom = !1, this.rangeDateTo = !1, this.lastSelectedDate = !1, this.trigger(i.eventChangeSelectedDate, {
                    action: i.actionUnselectDate,
                    silent: e.silent
                }), new Promise((e)=>{
                    setTimeout(e);
                });
            }
            show() {
                let { onShow: e, isMobile: t } = this.opts;
                this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = !0, e && this._scheduleCallAfterTransition(e), t && this._showMobileOverlay();
            }
            hide() {
                let { onHide: e, isMobile: t } = this.opts, i = this._hasTransition();
                this.visible = !1, this.hideAnimation = !0, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition((t)=>{
                    !this.customHide && (t && i || !t && !i) && this._finishHide(), e && e(t);
                }), t && j.classList.remove("-active-");
            }
            _triggerOnSelect() {
                let e = [], t = [], { selectedDates: i, locale: s, opts: { onSelect: a, multipleDates: n, range: r } } = this, o = n || r, h = "function" == typeof s.dateFormat;
                i.length && (e = i.map(g), t = h ? n ? s.dateFormat(e) : e.map((e)=>s.dateFormat(e)) : e.map((e)=>this.formatDate(e, s.dateFormat))), a({
                    date: o ? e : e[0],
                    formattedDate: o ? t : t[0],
                    datepicker: this
                });
            }
            _handleAlreadySelectedDates(e, t) {
                let { selectedDates: i, rangeDateFrom: s, rangeDateTo: a } = this, { range: n, toggleSelected: r } = this.opts, o = i.length, h = "function" == typeof r ? r({
                    datepicker: this,
                    date: t
                }) : r, l = Boolean(n && 1 === o && e), d = l ? g(t) : t;
                n && !h && (2 !== o && this.selectDate(d), 2 === o && p(s, a)) || (h ? this.unselectDate(d) : this._updateLastSelectedDate(l ? d : e));
            }
            _handleUpDownActions(e, t) {
                if (!((e = b(e || this.focusDate || this.viewDate)) instanceof Date)) return;
                let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
                i > 2 && (i = 2), i < 0 && (i = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i]);
            }
            getCell(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
                if (!((e = b(e)) instanceof Date)) return;
                let { year: s, month: a, date: n } = h(e), r = `[data-year="${s}"]`, o = `[data-month="${a}"]`, l = {
                    [i.day]: `${r}${o}[data-date="${n}"]`,
                    [i.month]: `${r}${o}`,
                    [i.year]: `${r}`
                };
                return this.views[this.currentView] ? this.views[this.currentView].$el.querySelector(l[t]) : void 0;
            }
            _showMobileOverlay() {
                j.classList.add("-active-");
            }
            _hasTransition() {
                return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce((e, t)=>parseFloat(t) + e, 0) > 0;
            }
            get shouldUpdateDOM() {
                return this.visible || this.treatAsInline;
            }
            get parsedViewDate() {
                return h(this.viewDate);
            }
            get currentViewSingular() {
                return this.currentView.slice(0, -1);
            }
            get curDecade() {
                return c(this.viewDate);
            }
            get viewIndex() {
                return this.viewIndexes.indexOf(this.currentView);
            }
            get isFinalView() {
                return this.currentView === i.years;
            }
            get hasSelectedDates() {
                return this.selectedDates.length > 0;
            }
            get isMinViewReached() {
                return this.currentView === this.opts.minView || this.currentView === i.days;
            }
            get $container() {
                return this.$customContainer || P;
            }
            static replacer(e, t, i) {
                return e.replace(t, function(e, t, s, a) {
                    return t + i + a;
                });
            }
        }
        var K;
        return I(R, "defaults", s), I(R, "version", "3.5.3"), I(R, "defaultGlobalContainerId", "air-datepicker-global-container"), K = R.prototype, Object.assign(K, N), t.default;
    }();
});

},{}],"aSSob":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redom = require("redom");
var _createWarning = require("../create/createWarning");
var _createWarningDefault = parcelHelpers.interopDefault(_createWarning);
var _updateFieldState = require("./updateFieldState");
var _updateFieldStateDefault = parcelHelpers.interopDefault(_updateFieldState);
const validateCard = (form)=>{
    const data = Object.fromEntries(new FormData(form));
    console.log('data: ', data);
    console.log("data-\u0442\u0438\u043F", typeof data);
    let fieldsValidity = {};
    for(const field in data){
        if (field === 'owner') {
            console.log("\u041F\u043E\u043B\u0435", data[field]);
            const regExp = /([a-z]{2,})\s+([a-z]{2,})/i.test(data[field]);
            if (regExp === false) {
                const formElem = form.querySelector(`[name=${field}]`);
                const warning = (0, _createWarningDefault.default)(field);
                (0, _redom.mount)(formElem.parentElement, warning);
                setTimeout(()=>{
                    warning.remove();
                }, 2000);
                (0, _updateFieldStateDefault.default)(field, fieldsValidity, false);
            } else if (regExp === true) (0, _updateFieldStateDefault.default)(field, fieldsValidity, true);
        }
        if (field === 'number') {
            console.log("\u041F\u043E\u043B\u0435", data[field]);
            const regExp = /(\d{4}\s{1}){3}(\d{4}){1}/.test(data[field]);
            console.log('regExp-card: ', regExp);
            if (regExp === false) {
                const formElem = form.querySelector(`[name=${field}]`);
                const warning = (0, _createWarningDefault.default)(field);
                (0, _redom.mount)(formElem.parentElement, warning);
                setTimeout(()=>{
                    warning.remove();
                }, 2000);
                (0, _updateFieldStateDefault.default)(field, fieldsValidity, false);
            } else if (regExp === true) (0, _updateFieldStateDefault.default)(field, fieldsValidity, true);
        }
        if (field === 'date') {
            const regExp = /(\d{2})\/(\d{2})/.test(data[field]);
            if (regExp === false) {
                const formElem = form.querySelector(`[name=${field}]`);
                const warning = (0, _createWarningDefault.default)(field);
                (0, _redom.mount)(formElem.parentElement, warning);
                setTimeout(()=>{
                    warning.remove();
                }, 2000);
                (0, _updateFieldStateDefault.default)(field, fieldsValidity, false);
            } else if (regExp === true) (0, _updateFieldStateDefault.default)(field, fieldsValidity, true);
        }
        if (field === 'cvv') {
            const regExp = /\d{3}/.test(data[field]);
            if (regExp === false) {
                const formElem = form.querySelector(`[name=${field}]`);
                const warning = (0, _createWarningDefault.default)(field);
                (0, _redom.mount)(formElem.parentElement, warning);
                setTimeout(()=>{
                    warning.remove();
                }, 2000);
                (0, _updateFieldStateDefault.default)(field, fieldsValidity, false);
            } else if (regExp === true) (0, _updateFieldStateDefault.default)(field, fieldsValidity, true);
        }
        if (data[field].length > 0) {
            console.log("\u0418\u043C\u044F \u043F\u043E\u043B\u044F", field);
            console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F", data[field]);
            console.log(form);
        // const formElem = form.querySelector(`[name=${field}]`);
        // console.log('formElem: ', formElem.parentElement.style.border = '1px solid red');
        // const warning = createWarning(field);
        // mount(formElem.parentElement, warning)
        // setTimeout(() => {
        //   warning.remove();
        // }, 2000);
        }
        console.log("\u0412\u0441\u0435 \u043F\u043E\u043B\u044F \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438", fieldsValidity);
        console.log("\u0414\u043B\u0438\u043D\u0430 \u043F\u0440\u0438\u0445\u043E\u0434\u0430", Object.keys(data).length);
    // console.log('Поле', field);
    // console.log('Имя поля', data[field]);
    }
    if (Object.keys(data).length === Object.keys(fieldsValidity).length && Object.values(fieldsValidity).every((elem)=>elem === true)) console.log("\u0412\u0441\u0435 \u043F\u043E\u043B\u044F \u0432\u0430\u043B\u0438\u0434\u043D\u044B");
    else console.log("\u043D\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0432\u0430\u043B\u0438\u0434\u043D\u044B");
};
exports.default = validateCard;

},{"redom":"cWIuY","../create/createWarning":"jW2o6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./updateFieldState":"8pHZX"}],"jW2o6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redom = require("redom");
const createWarning = (text)=>{
    const warning = (0, _redom.el)('h2', {
        className: 'form__warning',
        textContent: `\u{412}\u{432}\u{435}\u{434}\u{438}\u{442}\u{435} \u{432}\u{430}\u{43B}\u{438}\u{434}\u{43D}\u{44B}\u{435} \u{434}\u{430}\u{43D}\u{43D}\u{44B}\u{435} \u{432} \u{43F}\u{43E}\u{43B}\u{435} ${text}!`
    });
    return warning;
};
exports.default = createWarning;

},{"redom":"cWIuY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pHZX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const updateFieldState = (fieldName, obj, state)=>{
    obj[fieldName] = state;
};
exports.default = updateFieldState;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["faLUp","2OpUZ"], "2OpUZ", "parcelRequire94c2")

//# sourceMappingURL=index.6690e0da.js.map
