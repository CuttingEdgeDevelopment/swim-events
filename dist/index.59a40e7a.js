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
        this
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
})({"aP7aF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
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
*/ var OVERLAY_ID = "__parcel__error__overlay__";
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
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
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _appVue = require("../App.vue");
var _appVueDefault = parcelHelpers.interopDefault(_appVue);
var _styleCss = require("../css/style.css");
/*  Compile-time flags
    Doc: https://vuejs.org/api/compile-time-flags.html */ globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
const app = (0, _vue.createApp)((0, _appVueDefault.default));
app.mount("#app");

},{"vue":"gzxs9","../App.vue":"fYNyc","../css/style.css":"6ZQyu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzxs9":[function(require,module,exports) {
/**
* vue v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compile", ()=>compile);
var _runtimeDom = require("@vue/runtime-dom");
parcelHelpers.exportAll(_runtimeDom, exports);
function initDev() {
    (0, _runtimeDom.initCustomFormatter)();
}
initDev();
const compile = ()=>{
    (0, _runtimeDom.warn)(`Runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
};

},{"@vue/runtime-dom":"9wNvI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wNvI":[function(require,module,exports) {
/**
* @vue/runtime-dom v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition);
parcelHelpers.export(exports, "TransitionGroup", ()=>TransitionGroup);
parcelHelpers.export(exports, "VueElement", ()=>VueElement);
parcelHelpers.export(exports, "createApp", ()=>createApp);
parcelHelpers.export(exports, "createSSRApp", ()=>createSSRApp);
parcelHelpers.export(exports, "defineCustomElement", ()=>defineCustomElement);
parcelHelpers.export(exports, "defineSSRCustomElement", ()=>defineSSRCustomElement);
parcelHelpers.export(exports, "hydrate", ()=>hydrate);
parcelHelpers.export(exports, "initDirectivesForSSR", ()=>initDirectivesForSSR);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "useCssModule", ()=>useCssModule);
parcelHelpers.export(exports, "useCssVars", ()=>useCssVars);
parcelHelpers.export(exports, "vModelCheckbox", ()=>vModelCheckbox);
parcelHelpers.export(exports, "vModelDynamic", ()=>vModelDynamic);
parcelHelpers.export(exports, "vModelRadio", ()=>vModelRadio);
parcelHelpers.export(exports, "vModelSelect", ()=>vModelSelect);
parcelHelpers.export(exports, "vModelText", ()=>vModelText);
parcelHelpers.export(exports, "vShow", ()=>vShow);
parcelHelpers.export(exports, "withKeys", ()=>withKeys);
parcelHelpers.export(exports, "withModifiers", ()=>withModifiers);
var _runtimeCore = require("@vue/runtime-core");
parcelHelpers.exportAll(_runtimeCore, exports);
var _shared = require("@vue/shared");
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
    insert: (child, parent, anchor)=>{
        parent.insertBefore(child, anchor || null);
    },
    remove: (child)=>{
        const parent = child.parentNode;
        if (parent) parent.removeChild(child);
    },
    createElement: (tag, namespace, is, props)=>{
        const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, {
            is
        }) : doc.createElement(tag);
        if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
        return el;
    },
    createText: (text)=>doc.createTextNode(text),
    createComment: (text)=>doc.createComment(text),
    setText: (node, text)=>{
        node.nodeValue = text;
    },
    setElementText: (el, text)=>{
        el.textContent = text;
    },
    parentNode: (node)=>node.parentNode,
    nextSibling: (node)=>node.nextSibling,
    querySelector: (selector)=>doc.querySelector(selector),
    setScopeId (el, id) {
        el.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent (content, parent, anchor, namespace, start, end) {
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        if (start && (start === end || start.nextSibling)) while(true){
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling)) break;
        }
        else {
            templateContainer.innerHTML = namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content;
            const template = templateContainer.content;
            if (namespace === "svg" || namespace === "mathml") {
                const wrapper = template.firstChild;
                while(wrapper.firstChild)template.appendChild(wrapper.firstChild);
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const Transition = (props, { slots })=>(0, _runtimeCore.h)((0, _runtimeCore.BaseTransition), resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [
        String,
        Number,
        Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /* @__PURE__ */ (0, _shared.extend)({}, (0, _runtimeCore.BaseTransitionPropsValidators), DOMTransitionPropsValidators);
const callHook = (hook, args = [])=>{
    if ((0, _shared.isArray)(hook)) hook.forEach((h2)=>h2(...args));
    else if (hook) hook(...args);
};
const hasExplicitCallback = (hook)=>{
    return hook ? (0, _shared.isArray)(hook) ? hook.some((h2)=>h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for(const key in rawProps)if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
    if (rawProps.css === false) return baseProps;
    const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done)=>{
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done)=>{
        el._isLeaving = false;
        removeTransitionClass(el, leaveFromClass);
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear)=>{
        return (el, done)=>{
            const hook = isAppear ? onAppear : onEnter;
            const resolve = ()=>finishEnter(el, isAppear, done);
            callHook(hook, [
                el,
                resolve
            ]);
            nextFrame(()=>{
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
            });
        };
    };
    return (0, _shared.extend)(baseProps, {
        onBeforeEnter (el) {
            callHook(onBeforeEnter, [
                el
            ]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear (el) {
            callHook(onBeforeAppear, [
                el
            ]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave (el, done) {
            el._isLeaving = true;
            const resolve = ()=>finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            addTransitionClass(el, leaveActiveClass);
            forceReflow();
            nextFrame(()=>{
                if (!el._isLeaving) return;
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
            });
            callHook(onLeave, [
                el,
                resolve
            ]);
        },
        onEnterCancelled (el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [
                el
            ]);
        },
        onAppearCancelled (el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [
                el
            ]);
        },
        onLeaveCancelled (el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [
                el
            ]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) return null;
    else if ((0, _shared.isObject)(duration)) return [
        NumberOf(duration.enter),
        NumberOf(duration.leave)
    ];
    else {
        const n = NumberOf(duration);
        return [
            n,
            n
        ];
    }
}
function NumberOf(val) {
    const res = (0, _shared.toNumber)(val);
    (0, _runtimeCore.assertNumber)(res, "<transition> explicit duration");
    return res;
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.add(c));
    (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.remove(c));
    const _vtc = el[vtcKey];
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) el[vtcKey] = void 0;
    }
}
function nextFrame(cb) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = ()=>{
        if (id === el._endId) resolve();
    };
    if (explicitTimeout) return setTimeout(resolveIfNotStale, explicitTimeout);
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) return resolve();
    const endEvent = type + "end";
    let ended = 0;
    const end = ()=>{
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e)=>{
        if (e.target === el && ++ended >= propCount) end();
    };
    setTimeout(()=>{
        if (ended < propCount) end();
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const getStyleProperties = (key)=>(styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
    const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
    const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max(...durations.map((d, i)=>toMs(d) + toMs(delays[i])));
}
function toMs(s) {
    if (s === "auto") return 0;
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
    return document.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
    const transitionClasses = el[vtcKey];
    if (transitionClasses) value = (value ? [
        value,
        ...transitionClasses
    ] : [
        ...transitionClasses
    ]).join(" ");
    if (value == null) el.removeAttribute("class");
    else if (isSVG) el.setAttribute("class", value);
    else el.className = value;
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const vShow = {
    beforeMount (el, { value }, { transition }) {
        el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
        if (transition && value) transition.beforeEnter(el);
        else setDisplay(el, value);
    },
    mounted (el, { value }, { transition }) {
        if (transition && value) transition.enter(el);
    },
    updated (el, { value, oldValue }, { transition }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            } else transition.leave(el, ()=>{
                setDisplay(el, false);
            });
        } else setDisplay(el, value);
    },
    beforeUnmount (el, { value }) {
        setDisplay(el, value);
    }
};
vShow.name = "show";
function setDisplay(el, value) {
    el.style.display = value ? el[vShowOriginalDisplay] : "none";
    el[vShowHidden] = !value;
}
function initVShowForSSR() {
    vShow.getSSRProps = ({ value })=>{
        if (!value) return {
            style: {
                display: "none"
            }
        };
    };
}
const CSS_VAR_TEXT = Symbol("CSS_VAR_TEXT");
function useCssVars(getter) {
    const instance = (0, _runtimeCore.getCurrentInstance)();
    if (!instance) {
        (0, _runtimeCore.warn)(`useCssVars is called without current active component instance.`);
        return;
    }
    const updateTeleports = instance.ut = (vars = getter(instance.proxy))=>{
        Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach((node)=>setVarsOnNode(node, vars));
    };
    instance.getCssVars = ()=>getter(instance.proxy);
    const setVars = ()=>{
        const vars = getter(instance.proxy);
        setVarsOnVNode(instance.subTree, vars);
        updateTeleports(vars);
    };
    (0, _runtimeCore.onMounted)(()=>{
        (0, _runtimeCore.watchPostEffect)(setVars);
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
            childList: true
        });
        (0, _runtimeCore.onUnmounted)(()=>ob.disconnect());
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(()=>{
            setVarsOnVNode(suspense.activeBranch, vars);
        });
    }
    while(vnode.component)vnode = vnode.component.subTree;
    if (vnode.shapeFlag & 1 && vnode.el) setVarsOnNode(vnode.el, vars);
    else if (vnode.type === (0, _runtimeCore.Fragment)) vnode.children.forEach((c)=>setVarsOnVNode(c, vars));
    else if (vnode.type === (0, _runtimeCore.Static)) {
        let { el, anchor } = vnode;
        while(el){
            setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        let cssText = "";
        for(const key in vars){
            style.setProperty(`--${key}`, vars[key]);
            cssText += `--${key}: ${vars[key]};`;
        }
        style[CSS_VAR_TEXT] = cssText;
    }
}
const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = (0, _shared.isString)(next);
    let hasControlledDisplay = false;
    if (next && !isCssString) {
        if (prev) {
            if (!(0, _shared.isString)(prev)) {
                for(const key in prev)if (next[key] == null) setStyle(style, key, "");
            } else for (const prevStyle of prev.split(";")){
                const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
                if (next[key] == null) setStyle(style, key, "");
            }
        }
        for(const key in next){
            if (key === "display") hasControlledDisplay = true;
            setStyle(style, key, next[key]);
        }
    } else {
        if (isCssString) {
            if (prev !== next) {
                const cssVarText = style[CSS_VAR_TEXT];
                if (cssVarText) next += ";" + cssVarText;
                style.cssText = next;
                hasControlledDisplay = displayRE.test(next);
            }
        } else if (prev) el.removeAttribute("style");
    }
    if (vShowOriginalDisplay in el) {
        el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
        if (el[vShowHidden]) style.display = "none";
    }
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if ((0, _shared.isArray)(val)) val.forEach((v)=>setStyle(style, name, v));
    else {
        if (val == null) val = "";
        if (semicolonRE.test(val)) (0, _runtimeCore.warn)(`Unexpected semicolon at the end of '${name}' style value: '${val}'`);
        if (name.startsWith("--")) style.setProperty(name, val);
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) style.setProperty((0, _shared.hyphenate)(prefixed), val.replace(importantRE, ""), "important");
            else style[prefixed] = val;
        }
    }
}
const prefixes = [
    "Webkit",
    "Moz",
    "ms"
];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) return cached;
    let name = (0, _runtimeCore.camelize)(rawName);
    if (name !== "filter" && name in style) return prefixCache[rawName] = name;
    name = (0, _shared.capitalize)(name);
    for(let i = 0; i < prefixes.length; i++){
        const prefixed = prefixes[i] + name;
        if (prefixed in style) return prefixCache[rawName] = prefixed;
    }
    return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = (0, _shared.isSpecialBooleanAttr)(key)) {
    if (isSVG && key.startsWith("xlink:")) {
        if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        else el.setAttributeNS(xlinkNS, key, value);
    } else if (value == null || isBoolean && !(0, _shared.includeBooleanAttr)(value)) el.removeAttribute(key);
    else el.setAttribute(key, isBoolean ? "" : (0, _shared.isSymbol)(value) ? String(value) : value);
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
        if (prevChildren) unmountChildren(prevChildren, parentComponent, parentSuspense);
        el[key] = value == null ? "" : value;
        return;
    }
    const tag = el.tagName;
    if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
    !tag.includes("-")) {
        const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
        const newValue = value == null ? "" : String(value);
        if (oldValue !== newValue || !("_value" in el)) el.value = newValue;
        if (value == null) el.removeAttribute(key);
        el._value = value;
        return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
        const type = typeof el[key];
        if (type === "boolean") value = (0, _shared.includeBooleanAttr)(value);
        else if (value == null && type === "string") {
            value = "";
            needRemove = true;
        } else if (type === "number") {
            value = 0;
            needRemove = true;
        }
    }
    try {
        el[key] = value;
    } catch (e) {
        if (!needRemove) (0, _runtimeCore.warn)(`Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`, e);
    }
    needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el[veiKey] || (el[veiKey] = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) existingInvoker.value = sanitizeEventValue(nextValue, rawName);
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            const invoker = invokers[rawName] = createInvoker(sanitizeEventValue(nextValue, rawName), instance);
            addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = void 0;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while(m = name.match(optionsModifierRE)){
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    const event = name[2] === ":" ? name.slice(3) : (0, _shared.hyphenate)(name.slice(2));
    return [
        event,
        options
    ];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = ()=>cachedNow || (p.then(()=>cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
    const invoker = (e)=>{
        if (!e._vts) e._vts = Date.now();
        else if (e._vts <= invoker.attached) return;
        (0, _runtimeCore.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5, [
            e
        ]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function sanitizeEventValue(value, propName) {
    if ((0, _shared.isFunction)(value) || (0, _shared.isArray)(value)) return value;
    (0, _runtimeCore.warn)(`Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`);
    return 0, _shared.NOOP;
}
function patchStopImmediatePropagation(e, value) {
    if ((0, _shared.isArray)(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = ()=>{
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map((fn)=>(e2)=>!e2._stopped && fn && fn(e2));
    } else return value;
}
const isNativeOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
    key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, prevChildren, parentComponent, parentSuspense, unmountChildren)=>{
    const isSVG = namespace === "svg";
    if (key === "class") patchClass(el, nextValue, isSVG);
    else if (key === "style") patchStyle(el, prevValue, nextValue);
    else if ((0, _shared.isOn)(key)) {
        if (!(0, _shared.isModelListener)(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
        if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    } else {
        if (key === "true-value") el._trueValue = nextValue;
        else if (key === "false-value") el._falseValue = nextValue;
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        if (key === "innerHTML" || key === "textContent") return true;
        if (key in el && isNativeOn(key) && (0, _shared.isFunction)(value)) return true;
        return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate") return false;
    if (key === "form") return false;
    if (key === "list" && el.tagName === "INPUT") return false;
    if (key === "type" && el.tagName === "TEXTAREA") return false;
    if (key === "width" || key === "height") {
        const tag = el.tagName;
        if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
    }
    if (isNativeOn(key) && (0, _shared.isString)(value)) return false;
    return key in el;
}
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineCustomElement(options, extraOptions, hydrate2) {
    const Comp = (0, _runtimeCore.defineComponent)(options, extraOptions);
    class VueCustomElement extends VueElement {
        constructor(initialProps){
            super(Comp, initialProps, hydrate2);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
/*! #__NO_SIDE_EFFECTS__ */ const defineSSRCustomElement = /* @__NO_SIDE_EFFECTS__ */ (options, extraOptions)=>{
    return /* @__PURE__ */ defineCustomElement(options, extraOptions, hydrate);
};
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
    constructor(_def, _props = {}, hydrate2){
        super();
        this._def = _def;
        this._props = _props;
        /**
     * @internal
     */ this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        this._ob = null;
        if (this.shadowRoot && hydrate2) hydrate2(this._createVNode(), this.shadowRoot);
        else {
            if (0, this.shadowRoot) (0, _runtimeCore.warn)(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
            this.attachShadow({
                mode: "open"
            });
            if (!this._def.__asyncLoader) this._resolveProps(this._def);
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) {
            if (this._resolved) this._update();
            else this._resolveDef();
        }
    }
    disconnectedCallback() {
        this._connected = false;
        (0, _runtimeCore.nextTick)(()=>{
            if (!this._connected) {
                if (this._ob) {
                    this._ob.disconnect();
                    this._ob = null;
                }
                render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
   * resolve inner component definition (handle possible async component)
   */ _resolveDef() {
        this._resolved = true;
        for(let i = 0; i < this.attributes.length; i++)this._setAttr(this.attributes[i].name);
        this._ob = new MutationObserver((mutations)=>{
            for (const m of mutations)this._setAttr(m.attributeName);
        });
        this._ob.observe(this, {
            attributes: true
        });
        const resolve = (def, isAsync = false)=>{
            const { props, styles } = def;
            let numberProps;
            if (props && !(0, _shared.isArray)(props)) for(const key in props){
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                    if (key in this._props) this._props[key] = (0, _shared.toNumber)(this._props[key]);
                    (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[(0, _shared.camelize)(key)] = true;
                }
            }
            this._numberProps = numberProps;
            if (isAsync) this._resolveProps(def);
            this._applyStyles(styles);
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) asyncDef().then((def)=>resolve(def, true));
        else resolve(this._def);
    }
    _resolveProps(def) {
        const { props } = def;
        const declaredPropKeys = (0, _shared.isArray)(props) ? props : Object.keys(props || {});
        for (const key of Object.keys(this))if (key[0] !== "_" && declaredPropKeys.includes(key)) this._setProp(key, this[key], true, false);
        for (const key of declaredPropKeys.map((0, _shared.camelize)))Object.defineProperty(this, key, {
            get () {
                return this._getProp(key);
            },
            set (val) {
                this._setProp(key, val);
            }
        });
    }
    _setAttr(key) {
        let value = this.hasAttribute(key) ? this.getAttribute(key) : void 0;
        const camelKey = (0, _shared.camelize)(key);
        if (this._numberProps && this._numberProps[camelKey]) value = (0, _shared.toNumber)(value);
        this._setProp(camelKey, value, false);
    }
    /**
   * @internal
   */ _getProp(key) {
        return this._props[key];
    }
    /**
   * @internal
   */ _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) this._update();
            if (shouldReflect) {
                if (val === true) this.setAttribute((0, _shared.hyphenate)(key), "");
                else if (typeof val === "string" || typeof val === "number") this.setAttribute((0, _shared.hyphenate)(key), val + "");
                else if (!val) this.removeAttribute((0, _shared.hyphenate)(key));
            }
        }
    }
    _update() {
        render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = (0, _runtimeCore.createVNode)(this._def, (0, _shared.extend)({}, this._props));
        if (!this._instance) vnode.ce = (instance)=>{
            this._instance = instance;
            instance.isCE = true;
            instance.ceReload = (newStyles)=>{
                if (this._styles) {
                    this._styles.forEach((s)=>this.shadowRoot.removeChild(s));
                    this._styles.length = 0;
                }
                this._applyStyles(newStyles);
                this._instance = null;
                this._update();
            };
            const dispatch = (event, args)=>{
                this.dispatchEvent(new CustomEvent(event, {
                    detail: args
                }));
            };
            instance.emit = (event, ...args)=>{
                dispatch(event, args);
                if ((0, _shared.hyphenate)(event) !== event) dispatch((0, _shared.hyphenate)(event), args);
            };
            let parent = this;
            while(parent = parent && (parent.parentNode || parent.host))if (parent instanceof VueElement) {
                instance.parent = parent._instance;
                instance.provides = parent._instance.provides;
                break;
            }
        };
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) styles.forEach((css)=>{
            const s = document.createElement("style");
            s.textContent = css;
            this.shadowRoot.appendChild(s);
            (this._styles || (this._styles = [])).push(s);
        });
    }
}
function useCssModule(name = "$style") {
    {
        const instance = (0, _runtimeCore.getCurrentInstance)();
        if (!instance) {
            (0, _runtimeCore.warn)(`useCssModule must be called inside setup()`);
            return 0, _shared.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            (0, _runtimeCore.warn)(`Current instance does not have CSS modules injected.`);
            return 0, _shared.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            (0, _runtimeCore.warn)(`Current instance does not have CSS module named "${name}".`);
            return 0, _shared.EMPTY_OBJ;
        }
        return mod;
    }
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const TransitionGroupImpl = {
    name: "TransitionGroup",
    props: /* @__PURE__ */ (0, _shared.extend)({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup (props, { slots }) {
        const instance = (0, _runtimeCore.getCurrentInstance)();
        const state = (0, _runtimeCore.useTransitionState)();
        let prevChildren;
        let children;
        (0, _runtimeCore.onUpdated)(()=>{
            if (!prevChildren.length) return;
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            forceReflow();
            movedChildren.forEach((c)=>{
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = "";
                const cb = el[moveCbKey] = (e)=>{
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener("transitionend", cb);
                        el[moveCbKey] = null;
                        removeTransitionClass(el, moveClass);
                    }
                };
                el.addEventListener("transitionend", cb);
            });
        });
        return ()=>{
            const rawProps = (0, _runtimeCore.toRaw)(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || (0, _runtimeCore.Fragment);
            prevChildren = [];
            if (children) for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.el && child.el instanceof Element) {
                    prevChildren.push(child);
                    (0, _runtimeCore.setTransitionHooks)(child, (0, _runtimeCore.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            children = slots.default ? (0, _runtimeCore.getTransitionRawChildren)(slots.default()) : [];
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.key != null) (0, _runtimeCore.setTransitionHooks)(child, (0, _runtimeCore.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                else (0, _runtimeCore.warn)(`<TransitionGroup> children must be keyed.`);
            }
            return (0, _runtimeCore.createVNode)(tag, null, children);
        };
    }
};
const removeMode = (props)=>delete props.mode;
/* @__PURE__ */ removeMode(TransitionGroupImpl.props);
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el[moveCbKey]) el[moveCbKey]();
    if (el[enterCbKey]) el[enterCbKey]();
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = "0s";
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    const clone = el.cloneNode();
    const _vtc = el[vtcKey];
    if (_vtc) _vtc.forEach((cls)=>{
        cls.split(/\s+/).forEach((c)=>c && clone.classList.remove(c));
    });
    moveClass.split(/\s+/).forEach((c)=>c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
const getModelAssigner = (vnode)=>{
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return (0, _shared.isArray)(fn) ? (value)=>(0, _shared.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event("input"));
    }
}
const assignKey = Symbol("_assign");
const vModelText = {
    created (el, { modifiers: { lazy, trim, number } }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === "number";
        addEventListener(el, lazy ? "change" : "input", (e)=>{
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) domValue = domValue.trim();
            if (castToNumber) domValue = (0, _shared.looseToNumber)(domValue);
            el[assignKey](domValue);
        });
        if (trim) addEventListener(el, "change", ()=>{
            el.value = el.value.trim();
        });
        if (!lazy) {
            addEventListener(el, "compositionstart", onCompositionStart);
            addEventListener(el, "compositionend", onCompositionEnd);
            addEventListener(el, "change", onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted (el, { value }) {
        el.value = value == null ? "" : value;
    },
    beforeUpdate (el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        if (el.composing) return;
        const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? (0, _shared.looseToNumber)(el.value) : el.value;
        const newValue = value == null ? "" : value;
        if (elValue === newValue) return;
        if (document.activeElement === el && el.type !== "range") {
            if (lazy && value === oldValue) return;
            if (trim && el.value.trim() === newValue) return;
        }
        el.value = newValue;
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created (el, _, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el[assignKey];
            if ((0, _shared.isArray)(modelValue)) {
                const index = (0, _shared.looseIndexOf)(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) assign(modelValue.concat(elementValue));
                else if (!checked && found) {
                    const filtered = [
                        ...modelValue
                    ];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            } else if ((0, _shared.isSet)(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) cloned.add(elementValue);
                else cloned.delete(elementValue);
                assign(cloned);
            } else assign(getCheckboxValue(el, checked));
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate (el, binding, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if ((0, _shared.isArray)(value)) el.checked = (0, _shared.looseIndexOf)(value, vnode.props.value) > -1;
    else if ((0, _shared.isSet)(value)) el.checked = value.has(vnode.props.value);
    else if (value !== oldValue) el.checked = (0, _shared.looseEqual)(value, getCheckboxValue(el, true));
}
const vModelRadio = {
    created (el, { value }, vnode) {
        el.checked = (0, _shared.looseEqual)(value, vnode.props.value);
        el[assignKey] = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            el[assignKey](getValue(el));
        });
    },
    beforeUpdate (el, { value, oldValue }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        if (value !== oldValue) el.checked = (0, _shared.looseEqual)(value, vnode.props.value);
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created (el, { value, modifiers: { number } }, vnode) {
        const isSetModel = (0, _shared.isSet)(value);
        addEventListener(el, "change", ()=>{
            const selectedVal = Array.prototype.filter.call(el.options, (o)=>o.selected).map((o)=>number ? (0, _shared.looseToNumber)(getValue(o)) : getValue(o));
            el[assignKey](el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
            el._assigning = true;
            (0, _runtimeCore.nextTick)(()=>{
                el._assigning = false;
            });
        });
        el[assignKey] = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted (el, { value, modifiers: { number } }) {
        setSelected(el, value);
    },
    beforeUpdate (el, _binding, vnode) {
        el[assignKey] = getModelAssigner(vnode);
    },
    updated (el, { value, modifiers: { number } }) {
        if (!el._assigning) setSelected(el, value);
    }
};
function setSelected(el, value, number) {
    const isMultiple = el.multiple;
    const isArrayValue = (0, _shared.isArray)(value);
    if (isMultiple && !isArrayValue && !(0, _shared.isSet)(value)) {
        (0, _runtimeCore.warn)(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for(let i = 0, l = el.options.length; i < l; i++){
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (isArrayValue) {
                const optionType = typeof optionValue;
                if (optionType === "string" || optionType === "number") option.selected = value.some((v)=>String(v) === String(optionValue));
                else option.selected = (0, _shared.looseIndexOf)(value, optionValue) > -1;
            } else option.selected = value.has(optionValue);
        } else if ((0, _shared.looseEqual)(getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
function getValue(el) {
    return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "created");
    },
    mounted (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "mounted");
    },
    beforeUpdate (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
    },
    updated (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "updated");
    }
};
function resolveDynamicModel(tagName, type) {
    switch(tagName){
        case "SELECT":
            return vModelSelect;
        case "TEXTAREA":
            return vModelText;
        default:
            switch(type){
                case "checkbox":
                    return vModelCheckbox;
                case "radio":
                    return vModelRadio;
                default:
                    return vModelText;
            }
    }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
    vModelText.getSSRProps = ({ value })=>({
            value
        });
    vModelRadio.getSSRProps = ({ value }, vnode)=>{
        if (vnode.props && (0, _shared.looseEqual)(vnode.props.value, value)) return {
            checked: true
        };
    };
    vModelCheckbox.getSSRProps = ({ value }, vnode)=>{
        if ((0, _shared.isArray)(value)) {
            if (vnode.props && (0, _shared.looseIndexOf)(value, vnode.props.value) > -1) return {
                checked: true
            };
        } else if ((0, _shared.isSet)(value)) {
            if (vnode.props && value.has(vnode.props.value)) return {
                checked: true
            };
        } else if (value) return {
            checked: true
        };
    };
    vModelDynamic.getSSRProps = (binding, vnode)=>{
        if (typeof vnode.type !== "string") return;
        const modelToUse = resolveDynamicModel(// resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
        vnode.type.toUpperCase(), vnode.props && vnode.props.type);
        if (modelToUse.getSSRProps) return modelToUse.getSSRProps(binding, vnode);
    };
}
const systemModifiers = [
    "ctrl",
    "shift",
    "alt",
    "meta"
];
const modifierGuards = {
    stop: (e)=>e.stopPropagation(),
    prevent: (e)=>e.preventDefault(),
    self: (e)=>e.target !== e.currentTarget,
    ctrl: (e)=>!e.ctrlKey,
    shift: (e)=>!e.shiftKey,
    alt: (e)=>!e.altKey,
    meta: (e)=>!e.metaKey,
    left: (e)=>"button" in e && e.button !== 0,
    middle: (e)=>"button" in e && e.button !== 1,
    right: (e)=>"button" in e && e.button !== 2,
    exact: (e, modifiers)=>systemModifiers.some((m)=>e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers)=>{
    const cache = fn._withMods || (fn._withMods = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event, ...args)=>{
        for(let i = 0; i < modifiers.length; i++){
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
    });
};
const keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
};
const withKeys = (fn, modifiers)=>{
    const cache = fn._withKeys || (fn._withKeys = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event)=>{
        if (!("key" in event)) return;
        const eventKey = (0, _shared.hyphenate)(event.key);
        if (modifiers.some((k)=>k === eventKey || keyNames[k] === eventKey)) return fn(event);
    });
};
const rendererOptions = /* @__PURE__ */ (0, _shared.extend)({
    patchProp
}, nodeOps);
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = (0, _runtimeCore.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : (0, _runtimeCore.createHydrationRenderer)(rendererOptions);
    enabledHydration = true;
    return renderer;
}
const render = (...args)=>{
    ensureRenderer().render(...args);
};
const hydrate = (...args)=>{
    ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args)=>{
    const app = ensureRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (!(0, _shared.isFunction)(component) && !component.render && !component.template) component.template = container.innerHTML;
        container.innerHTML = "";
        const proxy = mount(container, false, resolveRootNamespace(container));
        if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
        }
        return proxy;
    };
    return app;
};
const createSSRApp = (...args)=>{
    const app = ensureHydrationRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (container) return mount(container, true, resolveRootNamespace(container));
    };
    return app;
};
function resolveRootNamespace(container) {
    if (container instanceof SVGElement) return "svg";
    if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
        value: (tag)=>(0, _shared.isHTMLTag)(tag) || (0, _shared.isSVGTag)(tag) || (0, _shared.isMathMLTag)(tag),
        writable: false
    });
}
function injectCompilerOptionsCheck(app) {
    if ((0, _runtimeCore.isRuntimeOnly)()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, "isCustomElement", {
            get () {
                return isCustomElement;
            },
            set () {
                (0, _runtimeCore.warn)(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
        Object.defineProperty(app.config, "compilerOptions", {
            get () {
                (0, _runtimeCore.warn)(msg);
                return compilerOptions;
            },
            set () {
                (0, _runtimeCore.warn)(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if ((0, _shared.isString)(container)) {
        const res = document.querySelector(container);
        if (!res) (0, _runtimeCore.warn)(`Failed to mount app: mount target selector "${container}" returned null.`);
        return res;
    }
    if ((0, window.ShadowRoot) && container instanceof window.ShadowRoot && container.mode === "closed") (0, _runtimeCore.warn)(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    return container;
}
let ssrDirectiveInitialized = false;
const initDirectivesForSSR = ()=>{
    if (!ssrDirectiveInitialized) {
        ssrDirectiveInitialized = true;
        initVModelForSSR();
        initVShowForSSR();
    }
};

},{"@vue/runtime-core":"lmqBl","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmqBl":[function(require,module,exports) {
/**
* @vue/runtime-core v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>(0, _reactivity.EffectScope));
parcelHelpers.export(exports, "ReactiveEffect", ()=>(0, _reactivity.ReactiveEffect));
parcelHelpers.export(exports, "TrackOpTypes", ()=>(0, _reactivity.TrackOpTypes));
parcelHelpers.export(exports, "TriggerOpTypes", ()=>(0, _reactivity.TriggerOpTypes));
parcelHelpers.export(exports, "customRef", ()=>(0, _reactivity.customRef));
parcelHelpers.export(exports, "effect", ()=>(0, _reactivity.effect));
parcelHelpers.export(exports, "effectScope", ()=>(0, _reactivity.effectScope));
parcelHelpers.export(exports, "getCurrentScope", ()=>(0, _reactivity.getCurrentScope));
parcelHelpers.export(exports, "isProxy", ()=>(0, _reactivity.isProxy));
parcelHelpers.export(exports, "isReactive", ()=>(0, _reactivity.isReactive));
parcelHelpers.export(exports, "isReadonly", ()=>(0, _reactivity.isReadonly));
parcelHelpers.export(exports, "isRef", ()=>(0, _reactivity.isRef));
parcelHelpers.export(exports, "isShallow", ()=>(0, _reactivity.isShallow));
parcelHelpers.export(exports, "markRaw", ()=>(0, _reactivity.markRaw));
parcelHelpers.export(exports, "onScopeDispose", ()=>(0, _reactivity.onScopeDispose));
parcelHelpers.export(exports, "proxyRefs", ()=>(0, _reactivity.proxyRefs));
parcelHelpers.export(exports, "reactive", ()=>(0, _reactivity.reactive));
parcelHelpers.export(exports, "readonly", ()=>(0, _reactivity.readonly));
parcelHelpers.export(exports, "ref", ()=>(0, _reactivity.ref));
parcelHelpers.export(exports, "shallowReactive", ()=>(0, _reactivity.shallowReactive));
parcelHelpers.export(exports, "shallowReadonly", ()=>(0, _reactivity.shallowReadonly));
parcelHelpers.export(exports, "shallowRef", ()=>(0, _reactivity.shallowRef));
parcelHelpers.export(exports, "stop", ()=>(0, _reactivity.stop));
parcelHelpers.export(exports, "toRaw", ()=>(0, _reactivity.toRaw));
parcelHelpers.export(exports, "toRef", ()=>(0, _reactivity.toRef));
parcelHelpers.export(exports, "toRefs", ()=>(0, _reactivity.toRefs));
parcelHelpers.export(exports, "toValue", ()=>(0, _reactivity.toValue));
parcelHelpers.export(exports, "triggerRef", ()=>(0, _reactivity.triggerRef));
parcelHelpers.export(exports, "unref", ()=>(0, _reactivity.unref));
parcelHelpers.export(exports, "camelize", ()=>(0, _shared.camelize));
parcelHelpers.export(exports, "capitalize", ()=>(0, _shared.capitalize));
parcelHelpers.export(exports, "normalizeClass", ()=>(0, _shared.normalizeClass));
parcelHelpers.export(exports, "normalizeProps", ()=>(0, _shared.normalizeProps));
parcelHelpers.export(exports, "normalizeStyle", ()=>(0, _shared.normalizeStyle));
parcelHelpers.export(exports, "toDisplayString", ()=>(0, _shared.toDisplayString));
parcelHelpers.export(exports, "toHandlerKey", ()=>(0, _shared.toHandlerKey));
parcelHelpers.export(exports, "BaseTransition", ()=>BaseTransition);
parcelHelpers.export(exports, "BaseTransitionPropsValidators", ()=>BaseTransitionPropsValidators);
parcelHelpers.export(exports, "Comment", ()=>Comment);
parcelHelpers.export(exports, "DeprecationTypes", ()=>DeprecationTypes);
parcelHelpers.export(exports, "ErrorCodes", ()=>ErrorCodes);
parcelHelpers.export(exports, "ErrorTypeStrings", ()=>ErrorTypeStrings);
parcelHelpers.export(exports, "Fragment", ()=>Fragment);
parcelHelpers.export(exports, "KeepAlive", ()=>KeepAlive);
parcelHelpers.export(exports, "Static", ()=>Static);
parcelHelpers.export(exports, "Suspense", ()=>Suspense);
parcelHelpers.export(exports, "Teleport", ()=>Teleport);
parcelHelpers.export(exports, "Text", ()=>Text);
parcelHelpers.export(exports, "assertNumber", ()=>assertNumber);
parcelHelpers.export(exports, "callWithAsyncErrorHandling", ()=>callWithAsyncErrorHandling);
parcelHelpers.export(exports, "callWithErrorHandling", ()=>callWithErrorHandling);
parcelHelpers.export(exports, "cloneVNode", ()=>cloneVNode);
parcelHelpers.export(exports, "compatUtils", ()=>compatUtils);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "createBlock", ()=>createBlock);
parcelHelpers.export(exports, "createCommentVNode", ()=>createCommentVNode);
parcelHelpers.export(exports, "createElementBlock", ()=>createElementBlock);
parcelHelpers.export(exports, "createElementVNode", ()=>createBaseVNode);
parcelHelpers.export(exports, "createHydrationRenderer", ()=>createHydrationRenderer);
parcelHelpers.export(exports, "createPropsRestProxy", ()=>createPropsRestProxy);
parcelHelpers.export(exports, "createRenderer", ()=>createRenderer);
parcelHelpers.export(exports, "createSlots", ()=>createSlots);
parcelHelpers.export(exports, "createStaticVNode", ()=>createStaticVNode);
parcelHelpers.export(exports, "createTextVNode", ()=>createTextVNode);
parcelHelpers.export(exports, "createVNode", ()=>createVNode);
parcelHelpers.export(exports, "defineAsyncComponent", ()=>defineAsyncComponent);
parcelHelpers.export(exports, "defineComponent", ()=>defineComponent);
parcelHelpers.export(exports, "defineEmits", ()=>defineEmits);
parcelHelpers.export(exports, "defineExpose", ()=>defineExpose);
parcelHelpers.export(exports, "defineModel", ()=>defineModel);
parcelHelpers.export(exports, "defineOptions", ()=>defineOptions);
parcelHelpers.export(exports, "defineProps", ()=>defineProps);
parcelHelpers.export(exports, "defineSlots", ()=>defineSlots);
parcelHelpers.export(exports, "devtools", ()=>devtools);
parcelHelpers.export(exports, "getCurrentInstance", ()=>getCurrentInstance);
parcelHelpers.export(exports, "getTransitionRawChildren", ()=>getTransitionRawChildren);
parcelHelpers.export(exports, "guardReactiveProps", ()=>guardReactiveProps);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "handleError", ()=>handleError);
parcelHelpers.export(exports, "hasInjectionContext", ()=>hasInjectionContext);
parcelHelpers.export(exports, "initCustomFormatter", ()=>initCustomFormatter);
parcelHelpers.export(exports, "inject", ()=>inject);
parcelHelpers.export(exports, "isMemoSame", ()=>isMemoSame);
parcelHelpers.export(exports, "isRuntimeOnly", ()=>isRuntimeOnly);
parcelHelpers.export(exports, "isVNode", ()=>isVNode);
parcelHelpers.export(exports, "mergeDefaults", ()=>mergeDefaults);
parcelHelpers.export(exports, "mergeModels", ()=>mergeModels);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "onActivated", ()=>onActivated);
parcelHelpers.export(exports, "onBeforeMount", ()=>onBeforeMount);
parcelHelpers.export(exports, "onBeforeUnmount", ()=>onBeforeUnmount);
parcelHelpers.export(exports, "onBeforeUpdate", ()=>onBeforeUpdate);
parcelHelpers.export(exports, "onDeactivated", ()=>onDeactivated);
parcelHelpers.export(exports, "onErrorCaptured", ()=>onErrorCaptured);
parcelHelpers.export(exports, "onMounted", ()=>onMounted);
parcelHelpers.export(exports, "onRenderTracked", ()=>onRenderTracked);
parcelHelpers.export(exports, "onRenderTriggered", ()=>onRenderTriggered);
parcelHelpers.export(exports, "onServerPrefetch", ()=>onServerPrefetch);
parcelHelpers.export(exports, "onUnmounted", ()=>onUnmounted);
parcelHelpers.export(exports, "onUpdated", ()=>onUpdated);
parcelHelpers.export(exports, "openBlock", ()=>openBlock);
parcelHelpers.export(exports, "popScopeId", ()=>popScopeId);
parcelHelpers.export(exports, "provide", ()=>provide);
parcelHelpers.export(exports, "pushScopeId", ()=>pushScopeId);
parcelHelpers.export(exports, "queuePostFlushCb", ()=>queuePostFlushCb);
parcelHelpers.export(exports, "registerRuntimeCompiler", ()=>registerRuntimeCompiler);
parcelHelpers.export(exports, "renderList", ()=>renderList);
parcelHelpers.export(exports, "renderSlot", ()=>renderSlot);
parcelHelpers.export(exports, "resolveComponent", ()=>resolveComponent);
parcelHelpers.export(exports, "resolveDirective", ()=>resolveDirective);
parcelHelpers.export(exports, "resolveDynamicComponent", ()=>resolveDynamicComponent);
parcelHelpers.export(exports, "resolveFilter", ()=>resolveFilter);
parcelHelpers.export(exports, "resolveTransitionHooks", ()=>resolveTransitionHooks);
parcelHelpers.export(exports, "setBlockTracking", ()=>setBlockTracking);
parcelHelpers.export(exports, "setDevtoolsHook", ()=>setDevtoolsHook);
parcelHelpers.export(exports, "setTransitionHooks", ()=>setTransitionHooks);
parcelHelpers.export(exports, "ssrContextKey", ()=>ssrContextKey);
parcelHelpers.export(exports, "ssrUtils", ()=>ssrUtils);
parcelHelpers.export(exports, "toHandlers", ()=>toHandlers);
parcelHelpers.export(exports, "transformVNodeArgs", ()=>transformVNodeArgs);
parcelHelpers.export(exports, "useAttrs", ()=>useAttrs);
parcelHelpers.export(exports, "useModel", ()=>useModel);
parcelHelpers.export(exports, "useSSRContext", ()=>useSSRContext);
parcelHelpers.export(exports, "useSlots", ()=>useSlots);
parcelHelpers.export(exports, "useTransitionState", ()=>useTransitionState);
parcelHelpers.export(exports, "version", ()=>version);
parcelHelpers.export(exports, "warn", ()=>warn);
parcelHelpers.export(exports, "watch", ()=>watch);
parcelHelpers.export(exports, "watchEffect", ()=>watchEffect);
parcelHelpers.export(exports, "watchPostEffect", ()=>watchPostEffect);
parcelHelpers.export(exports, "watchSyncEffect", ()=>watchSyncEffect);
parcelHelpers.export(exports, "withAsyncContext", ()=>withAsyncContext);
parcelHelpers.export(exports, "withCtx", ()=>withCtx);
parcelHelpers.export(exports, "withDefaults", ()=>withDefaults);
parcelHelpers.export(exports, "withDirectives", ()=>withDirectives);
parcelHelpers.export(exports, "withMemo", ()=>withMemo);
parcelHelpers.export(exports, "withScopeId", ()=>withScopeId);
var _reactivity = require("@vue/reactivity");
var _shared = require("@vue/shared");
const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn$1(msg, ...args) {
    (0, _reactivity.pauseTracking)();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) callWithErrorHandling(appWarnHandler, instance, 11, [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a)=>{
            var _a, _b;
            return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(({ vnode })=>`at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace
    ]);
    else {
        const warnArgs = [
            `[Vue warn]: ${msg}`,
            ...args
        ];
        if (trace.length && // avoid spamming console during tests
        true) warnArgs.push(`
`, ...formatTrace(trace));
        console.warn(...warnArgs);
    }
    (0, _reactivity.resetTracking)();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) return [];
    const normalizedStack = [];
    while(currentVNode){
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) last.recurseCount++;
        else normalizedStack.push({
            vnode: currentVNode,
            recurseCount: 0
        });
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i)=>{
        logs.push(...i === 0 ? [] : [
            `
`
        ], ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [
        open,
        ...formatProps(vnode.props),
        close
    ] : [
        open + close
    ];
}
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key)=>{
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) res.push(` ...`);
    return res;
}
function formatProp(key, value, raw) {
    if ((0, _shared.isString)(value)) {
        value = JSON.stringify(value);
        return raw ? value : [
            `${key}=${value}`
        ];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) return raw ? value : [
        `${key}=${value}`
    ];
    else if ((0, _reactivity.isRef)(value)) {
        value = formatProp(key, (0, _reactivity.toRaw)(value.value), true);
        return raw ? value : [
            `${key}=Ref<`,
            value,
            `>`
        ];
    } else if ((0, _shared.isFunction)(value)) return [
        `${key}=fn${value.name ? `<${value.name}>` : ``}`
    ];
    else {
        value = (0, _reactivity.toRaw)(value);
        return raw ? value : [
            `${key}=`,
            value
        ];
    }
}
function assertNumber(val, type) {
    if (val === void 0) return;
    else if (typeof val !== "number") warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
    else if (isNaN(val)) warn$1(`${type} is NaN - the duration expression might be incorrect.`);
}
const ErrorCodes = {
    "SETUP_FUNCTION": 0,
    "0": "SETUP_FUNCTION",
    "RENDER_FUNCTION": 1,
    "1": "RENDER_FUNCTION",
    "WATCH_GETTER": 2,
    "2": "WATCH_GETTER",
    "WATCH_CALLBACK": 3,
    "3": "WATCH_CALLBACK",
    "WATCH_CLEANUP": 4,
    "4": "WATCH_CLEANUP",
    "NATIVE_EVENT_HANDLER": 5,
    "5": "NATIVE_EVENT_HANDLER",
    "COMPONENT_EVENT_HANDLER": 6,
    "6": "COMPONENT_EVENT_HANDLER",
    "VNODE_HOOK": 7,
    "7": "VNODE_HOOK",
    "DIRECTIVE_HOOK": 8,
    "8": "DIRECTIVE_HOOK",
    "TRANSITION_HOOK": 9,
    "9": "TRANSITION_HOOK",
    "APP_ERROR_HANDLER": 10,
    "10": "APP_ERROR_HANDLER",
    "APP_WARN_HANDLER": 11,
    "11": "APP_WARN_HANDLER",
    "FUNCTION_REF": 12,
    "12": "FUNCTION_REF",
    "ASYNC_COMPONENT_LOADER": 13,
    "13": "ASYNC_COMPONENT_LOADER",
    "SCHEDULER": 14,
    "14": "SCHEDULER"
};
const ErrorTypeStrings$1 = {
    ["sp"]: "serverPrefetch hook",
    ["bc"]: "beforeCreate hook",
    ["c"]: "created hook",
    ["bm"]: "beforeMount hook",
    ["m"]: "mounted hook",
    ["bu"]: "beforeUpdate hook",
    ["u"]: "updated",
    ["bum"]: "beforeUnmount hook",
    ["um"]: "unmounted hook",
    ["a"]: "activated hook",
    ["da"]: "deactivated hook",
    ["ec"]: "errorCaptured hook",
    ["rtc"]: "renderTracked hook",
    ["rtg"]: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function callWithErrorHandling(fn, instance, type, args) {
    try {
        return args ? fn(...args) : fn();
    } catch (err) {
        handleError(err, instance, type);
    }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if ((0, _shared.isFunction)(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && (0, _shared.isPromise)(res)) res.catch((err)=>{
            handleError(err, instance, type);
        });
        return res;
    }
    if ((0, _shared.isArray)(fn)) {
        const values = [];
        for(let i = 0; i < fn.length; i++)values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
        return values;
    } else warn$1(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`);
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        const exposedInstance = instance.proxy;
        const errorInfo = (0, ErrorTypeStrings$1[type]);
        while(cur){
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) for(let i = 0; i < errorCapturedHooks.length; i++){
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
            }
            cur = cur.parent;
        }
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            (0, _reactivity.pauseTracking)();
            callWithErrorHandling(appErrorHandler, null, 10, [
                err,
                exposedInstance,
                errorInfo
            ]);
            (0, _reactivity.resetTracking)();
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    {
        const info = ErrorTypeStrings$1[type];
        if (contextVNode) pushWarningContext(contextVNode);
        warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) popWarningContext();
        if (throwInDev) throw err;
        else console.error(err);
    }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while(start < end){
        const middle = start + end >>> 1;
        const middleJob = queue[middle];
        const middleJobId = getId(middleJob);
        if (middleJobId < id || middleJobId === id && middleJob.pre) start = middle + 1;
        else end = middle;
    }
    return start;
}
function queueJob(job) {
    if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
        if (job.id == null) queue.push(job);
        else queue.splice(findInsertionIndex(job.id), 0, job);
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) queue.splice(i, 1);
}
function queuePostFlushCb(cb) {
    if (!(0, _shared.isArray)(cb)) {
        if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) pendingPostFlushCbs.push(cb);
    } else pendingPostFlushCbs.push(...cb);
    queueFlush();
}
function flushPreFlushCbs(instance, seen, i = isFlushing ? flushIndex + 1 : 0) {
    seen = seen || /* @__PURE__ */ new Map();
    for(; i < queue.length; i++){
        const cb = queue[i];
        if (cb && cb.pre) {
            if (instance && cb.id !== instance.uid) continue;
            if (checkRecursiveUpdates(seen, cb)) continue;
            queue.splice(i, 1);
            i--;
            cb();
        }
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [
            ...new Set(pendingPostFlushCbs)
        ].sort((a, b)=>getId(a) - getId(b));
        pendingPostFlushCbs.length = 0;
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        seen = seen || /* @__PURE__ */ new Map();
        for(postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++){
            const cb = activePostFlushCbs[postFlushIndex];
            if (checkRecursiveUpdates(seen, cb)) continue;
            if (cb.active !== false) cb();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job)=>job.id == null ? Infinity : job.id;
const comparator = (a, b)=>{
    const diff = getId(a) - getId(b);
    if (diff === 0) {
        if (a.pre && !b.pre) return -1;
        if (b.pre && !a.pre) return 1;
    }
    return diff;
};
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    seen = seen || /* @__PURE__ */ new Map();
    queue.sort(comparator);
    const check = (job)=>checkRecursiveUpdates(seen, job);
    try {
        for(flushIndex = 0; flushIndex < queue.length; flushIndex++){
            const job = queue[flushIndex];
            if (job && job.active !== false) {
                if (check(job)) continue;
                callWithErrorHandling(job, null, 14);
            }
        }
    } finally{
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) seen.set(fn, 1);
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            handleError(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10);
            return true;
        } else seen.set(fn, count + 1);
    }
}
let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Set();
(0, _shared.getGlobalThis)().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
};
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (map.has(id)) return false;
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: /* @__PURE__ */ new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) return;
    record.initialDef.render = newRender;
    [
        ...record.instances
    ].forEach((instance)=>{
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        isHmrUpdating = true;
        instance.effect.dirty = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    const instances = [
        ...record.instances
    ];
    for (const instance of instances){
        const oldComp = normalizeClassComponent(instance.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            if (oldComp !== record.initialDef) updateComponentDef(oldComp, newComp);
            hmrDirtyComponents.add(oldComp);
        }
        instance.appContext.propsCache.delete(instance.type);
        instance.appContext.emitsCache.delete(instance.type);
        instance.appContext.optionsCache.delete(instance.type);
        if (instance.ceReload) {
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        } else if (instance.parent) {
            instance.parent.effect.dirty = true;
            queueJob(()=>{
                instance.parent.update();
                hmrDirtyComponents.delete(oldComp);
            });
        } else if (instance.appContext.reload) instance.appContext.reload();
        else if (typeof window !== "undefined") window.location.reload();
        else console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    queuePostFlushCb(()=>{
        for (const instance of instances)hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    });
}
function updateComponentDef(oldComp, newComp) {
    (0, _shared.extend)(oldComp, newComp);
    for(const key in oldComp)if (key !== "__file" && !(key in newComp)) delete oldComp[key];
}
function tryWrap(fn) {
    return (id, arg)=>{
        try {
            return fn(id, arg);
        } catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
        }
    };
}
let devtools$1;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
    if (devtools$1) devtools$1.emit(event, ...args);
    else if (!devtoolsNotInstalled) buffer.push({
        event,
        args
    });
}
function setDevtoolsHook$1(hook, target) {
    var _a, _b;
    devtools$1 = hook;
    if (devtools$1) {
        devtools$1.enabled = true;
        buffer.forEach(({ event, args })=>devtools$1.emit(event, ...args));
        buffer = [];
    } else if (// handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-syntax
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
        const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        replay.push((newHook)=>{
            setDevtoolsHook$1(newHook, target);
        });
        setTimeout(()=>{
            if (!devtools$1) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3e3);
    } else {
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version) {
    emit$1("app:init" /* APP_INIT */ , app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    emit$1("app:unmount" /* APP_UNMOUNT */ , app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */ );
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */ );
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */ );
const devtoolsComponentRemoved = (component)=>{
    if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
    !devtools$1.cleanupBuffer(component)) _devtoolsComponentRemoved(component);
};
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
    return (component)=>{
        emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
    };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */ );
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */ );
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time)=>{
        emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    emit$1("component:emit" /* COMPONENT_EMIT */ , component.appContext.app, component, event, params);
}
function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted) return;
    const props = instance.vnode.props || (0, _shared.EMPTY_OBJ);
    {
        const { emitsOptions, propsOptions: [propsOptions] } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
                if (!propsOptions || !((0, _shared.toHandlerKey)(event) in propsOptions)) warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${(0, _shared.toHandlerKey)(event)}" prop.`);
            } else {
                const validator = emitsOptions[event];
                if ((0, _shared.isFunction)(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith("update:");
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || (0, _shared.EMPTY_OBJ);
        if (trim) args = rawArgs.map((a)=>(0, _shared.isString)(a) ? a.trim() : a);
        if (number) args = rawArgs.map((0, _shared.looseToNumber));
    }
    devtoolsComponentEmit(instance, event, args);
    {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[(0, _shared.toHandlerKey)(lowerCaseEvent)]) warn$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${(0, _shared.hyphenate)(event)}" instead of "${event}".`);
    }
    let handlerName;
    let handler = props[handlerName = (0, _shared.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
    props[handlerName = (0, _shared.toHandlerKey)((0, _shared.camelize)(event))];
    if (!handler && isModelListener) handler = props[handlerName = (0, _shared.toHandlerKey)((0, _shared.hyphenate)(event))];
    if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) instance.emitted = {};
        else if (instance.emitted[handlerName]) return;
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) return cached;
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, _shared.isFunction)(comp)) {
        const extendEmits = (raw2)=>{
            const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                (0, _shared.extend)(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
        if (comp.extends) extendEmits(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendEmits);
    }
    if (!raw && !hasExtends) {
        if ((0, _shared.isObject)(comp)) cache.set(comp, null);
        return null;
    }
    if ((0, _shared.isArray)(raw)) raw.forEach((key)=>normalized[key] = null);
    else (0, _shared.extend)(normalized, raw);
    if ((0, _shared.isObject)(comp)) cache.set(comp, normalized);
    return normalized;
}
function isEmitListener(options, key) {
    if (!options || !(0, _shared.isOn)(key)) return false;
    key = key.slice(2).replace(/Once$/, "");
    return (0, _shared.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0, _shared.hasOwn)(options, (0, _shared.hyphenate)(key)) || (0, _shared.hasOwn)(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
}
function pushScopeId(id) {
    currentScopeId = id;
}
function popScopeId() {
    currentScopeId = null;
}
const withScopeId = (_id)=>withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx) return fn;
    if (fn._n) return fn;
    const renderFnWithContext = (...args)=>{
        if (renderFnWithContext._d) setBlockTracking(-1);
        const prevInstance = setCurrentRenderingInstance(ctx);
        let res;
        try {
            res = fn(...args);
        } finally{
            setCurrentRenderingInstance(prevInstance);
            if (renderFnWithContext._d) setBlockTracking(1);
        }
        devtoolsComponentUpdated(ctx);
        return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, props, data, setupState, ctx, inheritAttrs } = instance;
    const prev = setCurrentRenderingInstance(instance);
    let result;
    let fallthroughAttrs;
    accessedAttrs = false;
    try {
        if (vnode.shapeFlag & 4) {
            const proxyToUse = withProxy || proxy;
            const thisProxy = (0, setupState.__isScriptSetup) ? new Proxy(proxyToUse, {
                get (target, key, receiver) {
                    warn$1(`Property '${String(key)}' was accessed via 'this'. Avoid using 'this' in templates.`);
                    return Reflect.get(target, key, receiver);
                }
            }) : proxyToUse;
            result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, (0, _reactivity.shallowReadonly)(props), setupState, data, ctx));
            fallthroughAttrs = attrs;
        } else {
            const render2 = Component;
            if (attrs === props) markAttrsAccessed();
            result = normalizeVNode(render2.length > 1 ? render2((0, _reactivity.shallowReadonly)(props), {
                get attrs () {
                    markAttrsAccessed();
                    return (0, _reactivity.shallowReadonly)(attrs);
                },
                slots,
                emit
            }) : render2((0, _reactivity.shallowReadonly)(props), null));
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
    } catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1);
        result = createVNode(Comment);
    }
    let root = result;
    let setRoot = void 0;
    if (result.patchFlag > 0 && result.patchFlag & 2048) [root, setRoot] = getChildRoot(result);
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
            if (shapeFlag & 7) {
                if (propsOptions && keys.some((0, _shared.isModelListener))) fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                root = cloneVNode(root, fallthroughAttrs, false, true);
            } else if (!accessedAttrs && root.type !== Comment) {
                const allAttrs = Object.keys(attrs);
                const eventAttrs = [];
                const extraAttrs = [];
                for(let i = 0, l = allAttrs.length; i < l; i++){
                    const key = allAttrs[i];
                    if ((0, _shared.isOn)(key)) {
                        if (!(0, _shared.isModelListener)(key)) eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                    } else extraAttrs.push(key);
                }
                if (extraAttrs.length) warn$1(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
                if (eventAttrs.length) warn$1(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
            }
        }
    }
    if (vnode.dirs) {
        if (!isElementRoot(root)) warn$1(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
        root = cloneVNode(root, null, false, true);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
        if (!isElementRoot(root)) warn$1(`Component inside <Transition> renders non-element root node that cannot be animated.`);
        root.transition = vnode.transition;
    }
    if (setRoot) setRoot(root);
    else result = root;
    setCurrentRenderingInstance(prev);
    return result;
}
const getChildRoot = (vnode)=>{
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren, false);
    if (!childRoot) return [
        vnode,
        void 0
    ];
    else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) return getChildRoot(childRoot);
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot)=>{
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot;
            else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [
                ...dynamicChildren,
                updatedRoot
            ];
        }
    };
    return [
        normalizeVNode(childRoot),
        setRoot
    ];
};
function filterSingleRoot(children, recurse = true) {
    let singleRoot;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (isVNode(child)) {
            if (child.type !== Comment || child.children === "v-if") {
                if (singleRoot) return;
                else {
                    singleRoot = child;
                    if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) return filterSingleRoot(singleRoot.children);
                }
            }
        } else return;
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs)=>{
    let res;
    for(const key in attrs)if (key === "class" || key === "style" || (0, _shared.isOn)(key)) (res || (res = {}))[key] = attrs[key];
    return res;
};
const filterModelListeners = (attrs, props)=>{
    const res = {};
    for(const key in attrs)if (!(0, _shared.isModelListener)(key) || !(key.slice(9) in props)) res[key] = attrs[key];
    return res;
};
const isElementRoot = (vnode)=>{
    return vnode.shapeFlag & 7 || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if ((prevChildren || nextChildren) && isHmrUpdating) return true;
    if (nextVNode.dirs || nextVNode.transition) return true;
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024) return true;
        if (patchFlag & 16) {
            if (!prevProps) return !!nextProps;
            return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8) {
            const dynamicProps = nextVNode.dynamicProps;
            for(let i = 0; i < dynamicProps.length; i++){
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return true;
            }
        }
    } else {
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) return true;
        }
        if (prevProps === nextProps) return false;
        if (!prevProps) return !!nextProps;
        if (!nextProps) return true;
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return true;
    for(let i = 0; i < nextKeys.length; i++){
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return true;
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
    while(parent){
        const root = parent.subTree;
        if (root.suspense && root.suspense.activeBranch === vnode) root.el = vnode.el;
        if (root === vnode) {
            (vnode = parent.vnode).el = el;
            parent = parent.parent;
        } else break;
    }
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
    if ((0, _shared.isString)(component)) return resolveAsset(COMPONENTS, component, false) || component;
    else return component || NULL_DYNAMIC_COMPONENT;
}
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component, false);
            if (selfName && (selfName === name || selfName === (0, _shared.camelize)(name) || selfName === (0, _shared.capitalize)((0, _shared.camelize)(name)))) return Component;
        }
        const res = // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) return Component;
        if (warnMissing && !res) {
            const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
            warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
        }
        return res;
    } else warn$1(`resolve${(0, _shared.capitalize)(type.slice(0, -1))} can only be used in render() or setup().`);
}
function resolve(registry, name) {
    return registry && (registry[name] || registry[(0, _shared.camelize)(name)] || registry[(0, _shared.capitalize)((0, _shared.camelize)(name))]);
}
const isSuspense = (type)=>type.__isSuspense;
let suspenseId = 0;
const SuspenseImpl = {
    name: "Suspense",
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
        if (n1 == null) mountSuspense(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals);
        else {
            if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
                n2.suspense = n1.suspense;
                n2.suspense.vnode = n2;
                n2.el = n1.el;
                return;
            }
            patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    normalize: normalizeSuspenseChildren
};
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if ((0, _shared.isFunction)(eventListener)) eventListener();
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals);
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds);
    if (suspense.deps > 0) {
        triggerEvent(vnode, "onPending");
        triggerEvent(vnode, "onFallback");
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        namespace, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    } else suspense.resolve(false, true);
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
            if (suspense.deps <= 0) suspense.resolve();
            else if (isInFallback) {
                if (!isHydrating) {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    namespace, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            }
        } else {
            suspense.pendingId = suspenseId++;
            if (isHydrating) {
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            } else unmount(pendingBranch, parentComponent, suspense);
            suspense.deps = 0;
            suspense.effects.length = 0;
            suspense.hiddenContainer = createElement("div");
            if (isInFallback) {
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    namespace, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
                suspense.resolve(true);
            } else {
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
            }
        }
    } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
    } else {
        triggerEvent(n2, "onPending");
        suspense.pendingBranch = newBranch;
        if (newBranch.shapeFlag & 512) suspense.pendingId = newBranch.component.suspenseId;
        else suspense.pendingId = suspenseId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
        if (suspense.deps <= 0) suspense.resolve();
        else {
            const { timeout, pendingId } = suspense;
            if (timeout > 0) setTimeout(()=>{
                if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
            }, timeout);
            else if (timeout === 0) suspense.fallback(newFallback);
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    if (!hasWarned) {
        hasWarned = true;
        console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    let parentSuspenseId;
    const isSuspensible = isVNodeSuspensible(vnode);
    if (isSuspensible) {
        if (parentSuspense && parentSuspense.pendingBranch) {
            parentSuspenseId = parentSuspense.pendingId;
            parentSuspense.deps++;
        }
    }
    const timeout = vnode.props ? (0, _shared.toNumber)(vnode.props.timeout) : void 0;
    assertNumber(timeout, `Suspense timeout`);
    const initialAnchor = anchor;
    const suspense = {
        vnode,
        parent: parentSuspense,
        parentComponent,
        namespace,
        container,
        hiddenContainer,
        deps: 0,
        pendingId: suspenseId++,
        timeout: typeof timeout === "number" ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !isHydrating,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve (resume = false, sync = false) {
            if (!resume && !suspense.pendingBranch) throw new Error(`suspense.resolve() is called without a pending branch.`);
            if (suspense.isUnmounted) throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
            const { vnode: vnode2, activeBranch, pendingBranch, pendingId, effects, parentComponent: parentComponent2, container: container2 } = suspense;
            let delayEnter = false;
            if (suspense.isHydrating) suspense.isHydrating = false;
            else if (!resume) {
                delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
                if (delayEnter) activeBranch.transition.afterLeave = ()=>{
                    if (pendingId === suspense.pendingId) {
                        move(pendingBranch, container2, anchor === initialAnchor ? next(activeBranch) : anchor, 0);
                        queuePostFlushCb(effects);
                    }
                };
                if (activeBranch) {
                    if (parentNode(activeBranch.el) !== suspense.hiddenContainer) anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent2, suspense, true);
                }
                if (!delayEnter) move(pendingBranch, container2, anchor, 0);
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while(parent){
                if (parent.pendingBranch) {
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            if (!hasUnresolvedAncestor && !delayEnter) queuePostFlushCb(effects);
            suspense.effects = [];
            if (isSuspensible) {
                if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
                    parentSuspense.deps--;
                    if (parentSuspense.deps === 0 && !sync) parentSuspense.resolve();
                }
            }
            triggerEvent(vnode2, "onResolve");
        },
        fallback (fallbackVNode) {
            if (!suspense.pendingBranch) return;
            const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
            triggerEvent(vnode2, "onFallback");
            const anchor2 = next(activeBranch);
            const mountFallback = ()=>{
                if (!suspense.isInFallback) return;
                patch(null, fallbackVNode, container2, anchor2, parentComponent2, null, // fallback tree will not have suspense context
                namespace2, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
            if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
            suspense.isInFallback = true;
            unmount(activeBranch, parentComponent2, null, // no suspense so unmount hooks fire now
            true);
            if (!delayEnter) mountFallback();
        },
        move (container2, anchor2, type) {
            suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
            suspense.container = container2;
        },
        next () {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep (instance, setupRenderEffect, optimized2) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) suspense.deps++;
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err)=>{
                handleError(err, instance, 0);
            }).then((asyncSetupResult)=>{
                if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                instance.asyncResolved = true;
                const { vnode: vnode2 } = instance;
                pushWarningContext(vnode2);
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) vnode2.el = hydratedEl;
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode2, // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, namespace, optimized2);
                if (placeholder) remove(placeholder);
                updateHOCHostEl(instance, vnode2.el);
                popWarningContext();
                if (isInPendingSuspense && --suspense.deps === 0) suspense.resolve();
            });
        },
        unmount (parentSuspense2, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent, parentSuspense2, doRemove);
            if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent, parentSuspense2, doRemove);
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, // eslint-disable-next-line no-restricted-globals
    document.createElement("div"), null, namespace, slotScopeIds, optimized, rendererInternals, true);
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) suspense.resolve(false, true);
    return result;
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    const isSlotChildren = shapeFlag & 32;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if ((0, _shared.isFunction)(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if ((0, _shared.isArray)(s)) {
        const singleChild = filterSingleRoot(s);
        if (!singleChild && s.filter((child)=>child !== NULL_DYNAMIC_COMPONENT).length > 0) warn$1(`<Suspense> slots expect a single root node.`);
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c)=>c !== s);
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if ((0, _shared.isArray)(fn)) suspense.effects.push(...fn);
        else suspense.effects.push(fn);
    } else queuePostFlushCb(fn);
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    let el = branch.el;
    while(!el && branch.component){
        branch = branch.component.subTree;
        el = branch.el;
    }
    vnode.el = el;
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}
function isVNodeSuspensible(vnode) {
    const suspensible = vnode.props && vnode.props.suspensible;
    return suspensible != null && suspensible !== false;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        const wrappedHook = hook.__weh || (hook.__weh = (...args)=>{
            (0, _reactivity.pauseTracking)();
            const reset = setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            reset();
            (0, _reactivity.resetTracking)();
            return res;
        });
        if (prepend) hooks.unshift(wrappedHook);
        else hooks.push(wrappedHook);
        return wrappedHook;
    } else {
        const apiName = (0, _shared.toHandlerKey)(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
        warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().` + ` If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
}
const createHook = (lifecycle)=>(hook, target = currentInstance)=>{
        if (!isInSSRComponentSetup || lifecycle === "sp") injectHook(lifecycle, (...args)=>hook(...args), target);
    };
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
}
function validateDirectiveName(name) {
    if ((0, _shared.isBuiltInDirective)(name)) warn$1("Do not use built-in directive ids as custom directive id: " + name);
}
function withDirectives(vnode, directives) {
    if (currentRenderingInstance === null) {
        warn$1(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = getComponentPublicInstance(currentRenderingInstance);
    const bindings = vnode.dirs || (vnode.dirs = []);
    for(let i = 0; i < directives.length; i++){
        let [dir, value, arg, modifiers = (0, _shared.EMPTY_OBJ)] = directives[i];
        if (dir) {
            if ((0, _shared.isFunction)(dir)) dir = {
                mounted: dir,
                updated: dir
            };
            if (dir.deep) traverse(value);
            bindings.push({
                dir,
                instance,
                value,
                oldValue: void 0,
                arg,
                modifiers
            });
        }
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for(let i = 0; i < bindings.length; i++){
        const binding = bindings[i];
        if (oldBindings) binding.oldValue = oldBindings[i].value;
        let hook = binding.dir[name];
        if (hook) {
            (0, _reactivity.pauseTracking)();
            callWithAsyncErrorHandling(hook, instance, 8, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            (0, _reactivity.resetTracking)();
        }
    }
}
function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if ((0, _shared.isArray)(source) || (0, _shared.isString)(source)) {
        ret = new Array(source.length);
        for(let i = 0, l = source.length; i < l; i++)ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    } else if (typeof source === "number") {
        if (!Number.isInteger(source)) warn$1(`The v-for range expect an integer value but got ${source}.`);
        ret = new Array(source);
        for(let i = 0; i < source; i++)ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    } else if ((0, _shared.isObject)(source)) {
        if (source[Symbol.iterator]) ret = Array.from(source, (item, i)=>renderItem(item, i, void 0, cached && cached[i]));
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for(let i = 0, l = keys.length; i < l; i++){
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    } else ret = [];
    if (cache) cache[index] = ret;
    return ret;
}
function createSlots(slots, dynamicSlots) {
    for(let i = 0; i < dynamicSlots.length; i++){
        const slot = dynamicSlots[i];
        if ((0, _shared.isArray)(slot)) for(let j = 0; j < slot.length; j++)slots[slot[j].name] = slot[j].fn;
        else if (slot) slots[slot.name] = slot.key ? (...args)=>{
            const res = slot.fn(...args);
            if (res) res.key = slot.key;
            return res;
        } : slot.fn;
    }
    return slots;
}
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
    return (0, _shared.isFunction)(options) ? // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (()=>(0, _shared.extend)({
            name: options.name
        }, extraOptions, {
            setup: options
        }))() : options;
}
const isAsyncWrapper = (i)=>!!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
    if ((0, _shared.isFunction)(source)) source = {
        loader: source
    };
    const { loader, loadingComponent, errorComponent, delay = 200, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = ()=>{
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = ()=>{
        let thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch((err)=>{
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) return new Promise((resolve, reject)=>{
                const userRetry = ()=>resolve(retry());
                const userFail = ()=>reject(err);
                userOnError(err, userRetry, userFail, retries + 1);
            });
            else throw err;
        }).then((comp)=>{
            if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
            if (!comp) warn$1(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
            if (comp && !(0, _shared.isObject)(comp) && !(0, _shared.isFunction)(comp)) throw new Error(`Invalid async component load result: ${comp}`);
            resolvedComp = comp;
            return comp;
        }));
    };
    return defineComponent({
        name: "AsyncComponentWrapper",
        __asyncLoader: load,
        get __asyncResolved () {
            return resolvedComp;
        },
        setup () {
            const instance = currentInstance;
            if (resolvedComp) return ()=>createInnerComp(resolvedComp, instance);
            const onError = (err)=>{
                pendingRequest = null;
                handleError(err, instance, 13, !errorComponent);
            };
            if (suspensible && instance.suspense || isInSSRComponentSetup) return load().then((comp)=>{
                return ()=>createInnerComp(comp, instance);
            }).catch((err)=>{
                onError(err);
                return ()=>errorComponent ? createVNode(errorComponent, {
                        error: err
                    }) : null;
            });
            const loaded = (0, _reactivity.ref)(false);
            const error = (0, _reactivity.ref)();
            const delayed = (0, _reactivity.ref)(!!delay);
            if (delay) setTimeout(()=>{
                delayed.value = false;
            }, delay);
            if (timeout != null) setTimeout(()=>{
                if (!loaded.value && !error.value) {
                    const err = new Error(`Async component timed out after ${timeout}ms.`);
                    onError(err);
                    error.value = err;
                }
            }, timeout);
            load().then(()=>{
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                    instance.parent.effect.dirty = true;
                    queueJob(instance.parent.update);
                }
            }).catch((err)=>{
                onError(err);
                error.value = err;
            });
            return ()=>{
                if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance);
                else if (error.value && errorComponent) return createVNode(errorComponent, {
                    error: error.value
                });
                else if (loadingComponent && !delayed.value) return createVNode(loadingComponent);
            };
        }
    });
}
function createInnerComp(comp, parent) {
    const { ref: ref2, props, children, ce } = parent.vnode;
    const vnode = createVNode(comp, props, children);
    vnode.ref = ref2;
    vnode.ce = ce;
    delete parent.vnode.ce;
    return vnode;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
    if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
        if (name !== "default") props.name = name;
        return createVNode("slot", props, fallback && fallback());
    }
    let slot = slots[name];
    if (slot && slot.length > 1) {
        warn$1(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
        slot = ()=>[];
    }
    if (slot && slot._c) slot._d = false;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, {
        key: props.key || // slot content array of a dynamic conditional slot may have a branch
        // key attached in the `createSlots` helper, respect that
        validSlotContent && validSlotContent.key || `_${name}`
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
    if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [
        rendered.scopeId + "-s"
    ];
    if (slot && slot._c) slot._d = true;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some((child)=>{
        if (!isVNode(child)) return true;
        if (child.type === Comment) return false;
        if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
        return true;
    }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
    const ret = {};
    if (!(0, _shared.isObject)(obj)) {
        warn$1(`v-on with no argument expects an object value.`);
        return ret;
    }
    for(const key in obj)ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : (0, _shared.toHandlerKey)(key)] = obj[key];
    return ret;
}
const getPublicInstance = (i)=>{
    if (!i) return null;
    if (isStatefulComponent(i)) return getComponentPublicInstance(i);
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = // Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/* @__PURE__ */ (0, _shared.extend)(/* @__PURE__ */ Object.create(null), {
    $: (i)=>i,
    $el: (i)=>i.vnode.el,
    $data: (i)=>i.data,
    $props: (i)=>(0, _reactivity.shallowReadonly)(i.props),
    $attrs: (i)=>(0, _reactivity.shallowReadonly)(i.attrs),
    $slots: (i)=>(0, _reactivity.shallowReadonly)(i.slots),
    $refs: (i)=>(0, _reactivity.shallowReadonly)(i.refs),
    $parent: (i)=>getPublicInstance(i.parent),
    $root: (i)=>getPublicInstance(i.root),
    $emit: (i)=>i.emit,
    $options: (i)=>__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type,
    $forceUpdate: (i)=>i.f || (i.f = ()=>{
            i.effect.dirty = true;
            queueJob(i.update);
        }),
    $nextTick: (i)=>i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i)=>__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : (0, _shared.NOOP)
});
const isReservedPrefix = (key)=>key === "_" || key === "$";
const hasSetupBinding = (state, key)=>state !== (0, _shared.EMPTY_OBJ) && !state.__isScriptSetup && (0, _shared.hasOwn)(state, key);
const PublicInstanceProxyHandlers = {
    get ({ _: instance }, key) {
        if (key === "__v_skip") return true;
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        if (key === "__isVue") return true;
        let normalizedProps;
        if (key[0] !== "$") {
            const n = accessCache[key];
            if (n !== void 0) switch(n){
                case 1 /* SETUP */ :
                    return setupState[key];
                case 2 /* DATA */ :
                    return data[key];
                case 4 /* CONTEXT */ :
                    return ctx[key];
                case 3 /* PROPS */ :
                    return props[key];
            }
            else if (hasSetupBinding(setupState, key)) {
                accessCache[key] = 1 /* SETUP */ ;
                return setupState[key];
            } else if (data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key)) {
                accessCache[key] = 2 /* DATA */ ;
                return data[key];
            } else if (// only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && (0, _shared.hasOwn)(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */ ;
                return props[key];
            } else if (ctx !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */ ;
                return ctx[key];
            } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) accessCache[key] = 0 /* OTHER */ ;
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        if (publicGetter) {
            if (key === "$attrs") {
                (0, _reactivity.track)(instance.attrs, "get", "");
                markAttrsAccessed();
            } else if (key === "$slots") (0, _reactivity.track)(instance, "get", key);
            return publicGetter(instance);
        } else if (// css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
        else if (ctx !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(ctx, key)) {
            accessCache[key] = 4 /* CONTEXT */ ;
            return ctx[key];
        } else if (// global properties
        globalProperties = appContext.config.globalProperties, (0, _shared.hasOwn)(globalProperties, key)) return globalProperties[key];
        else if (currentRenderingInstance && (!(0, _shared.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
        // to infinite warning loop
        key.indexOf("__v") !== 0)) {
            if (data !== (0, _shared.EMPTY_OBJ) && isReservedPrefix(key[0]) && (0, _shared.hasOwn)(data, key)) warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
            else if (instance === currentRenderingInstance) warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
        }
    },
    set ({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (hasSetupBinding(setupState, key)) {
            setupState[key] = value;
            return true;
        } else if ((0, setupState.__isScriptSetup) && (0, _shared.hasOwn)(setupState, key)) {
            warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
            return false;
        } else if (data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key)) {
            data[key] = value;
            return true;
        } else if ((0, _shared.hasOwn)(instance.props, key)) {
            warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
            return false;
        }
        if (key[0] === "$" && key.slice(1) in instance) {
            warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
            return false;
        } else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
        });
        else ctx[key] = value;
        return true;
    },
    has ({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return !!accessCache[key] || data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && (0, _shared.hasOwn)(normalizedProps, key) || (0, _shared.hasOwn)(ctx, key) || (0, _shared.hasOwn)(publicPropertiesMap, key) || (0, _shared.hasOwn)(appContext.config.globalProperties, key);
    },
    defineProperty (target, key, descriptor) {
        if (descriptor.get != null) target._.accessCache[key] = 0;
        else if ((0, _shared.hasOwn)(descriptor, "value")) this.set(target, key, descriptor.value, null);
        return Reflect.defineProperty(target, key, descriptor);
    }
};
PublicInstanceProxyHandlers.ownKeys = (target)=>{
    warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
};
const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ (0, _shared.extend)({}, PublicInstanceProxyHandlers, {
    get (target, key) {
        if (key === Symbol.unscopables) return;
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has (_, key) {
        const has = key[0] !== "_" && !(0, _shared.isGloballyAllowed)(key);
        if (!has && PublicInstanceProxyHandlers.has(_, key)) warn$1(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        return has;
    }
});
function createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: ()=>instance
    });
    Object.keys(publicPropertiesMap).forEach((key)=>{
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: ()=>publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: (0, _shared.NOOP)
        });
    });
    return target;
}
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) Object.keys(propsOptions).forEach((key)=>{
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>instance.props[key],
            set: (0, _shared.NOOP)
        });
    });
}
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys((0, _reactivity.toRaw)(setupState)).forEach((key)=>{
        if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
                warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>setupState[key],
                set: (0, _shared.NOOP)
            });
        }
    });
}
const warnRuntimeUsage = (method)=>warn$1(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
function defineProps() {
    warnRuntimeUsage(`defineProps`);
    return null;
}
function defineEmits() {
    warnRuntimeUsage(`defineEmits`);
    return null;
}
function defineExpose(exposed) {
    warnRuntimeUsage(`defineExpose`);
}
function defineOptions(options) {
    warnRuntimeUsage(`defineOptions`);
}
function defineSlots() {
    warnRuntimeUsage(`defineSlots`);
    return null;
}
function defineModel() {
    warnRuntimeUsage("defineModel");
}
function withDefaults(props, defaults) {
    warnRuntimeUsage(`withDefaults`);
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (!i) warn$1(`useContext() called without active instance.`);
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
    return (0, _shared.isArray)(props) ? props.reduce((normalized, p)=>(normalized[p] = null, normalized), {}) : props;
}
function mergeDefaults(raw, defaults) {
    const props = normalizePropsOrEmits(raw);
    for(const key in defaults){
        if (key.startsWith("__skip")) continue;
        let opt = props[key];
        if (opt) {
            if ((0, _shared.isArray)(opt) || (0, _shared.isFunction)(opt)) opt = props[key] = {
                type: opt,
                default: defaults[key]
            };
            else opt.default = defaults[key];
        } else if (opt === null) opt = props[key] = {
            default: defaults[key]
        };
        else warn$1(`props default key "${key}" has no corresponding declaration.`);
        if (opt && defaults[`__skip_${key}`]) opt.skipFactory = true;
    }
    return props;
}
function mergeModels(a, b) {
    if (!a || !b) return a || b;
    if ((0, _shared.isArray)(a) && (0, _shared.isArray)(b)) return a.concat(b);
    return (0, _shared.extend)({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for(const key in props)if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
        enumerable: true,
        get: ()=>props[key]
    });
    return ret;
}
function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (!ctx) warn$1(`withAsyncContext called without active current instance. This is likely a bug.`);
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if ((0, _shared.isPromise)(awaitable)) awaitable = awaitable.catch((e)=>{
        setCurrentInstance(ctx);
        throw e;
    });
    return [
        awaitable,
        ()=>setCurrentInstance(ctx)
    ];
}
function createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key)=>{
        if (cache[key]) warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
        else cache[key] = type;
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) callHook(options.beforeCreate, instance, "bc");
    const { // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, // lifecycle
    created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, // public API
    expose, inheritAttrs, // assets
    components, directives, filters } = options;
    const checkDuplicateProperties = createDuplicateChecker();
    {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) for(const key in propsOptions)checkDuplicateProperties("Props" /* PROPS */ , key);
    }
    if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    if (methods) for(const key in methods){
        const methodHandler = methods[key];
        if ((0, _shared.isFunction)(methodHandler)) {
            Object.defineProperty(ctx, key, {
                value: methodHandler.bind(publicThis),
                configurable: true,
                enumerable: true,
                writable: true
            });
            checkDuplicateProperties("Methods" /* METHODS */ , key);
        } else warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
    }
    if (dataOptions) {
        if (!(0, _shared.isFunction)(dataOptions)) warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
        const data = dataOptions.call(publicThis, publicThis);
        if ((0, _shared.isPromise)(data)) warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
        if (!(0, _shared.isObject)(data)) warn$1(`data() should return an object.`);
        else {
            instance.data = (0, _reactivity.reactive)(data);
            for(const key in data){
                checkDuplicateProperties("Data" /* DATA */ , key);
                if (!isReservedPrefix(key[0])) Object.defineProperty(ctx, key, {
                    configurable: true,
                    enumerable: true,
                    get: ()=>data[key],
                    set: (0, _shared.NOOP)
                });
            }
        }
    }
    shouldCacheAccess = true;
    if (computedOptions) for(const key in computedOptions){
        const opt = computedOptions[key];
        const get = (0, _shared.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0, _shared.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : (0, _shared.NOOP);
        if (get === (0, _shared.NOOP)) warn$1(`Computed property "${key}" has no getter.`);
        const set = !(0, _shared.isFunction)(opt) && (0, _shared.isFunction)(opt.set) ? opt.set.bind(publicThis) : ()=>{
            warn$1(`Write operation failed: computed property "${key}" is readonly.`);
        };
        const c = computed({
            get,
            set
        });
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>c.value,
            set: (v1)=>c.value = v1
        });
        checkDuplicateProperties("Computed" /* COMPUTED */ , key);
    }
    if (watchOptions) for(const key in watchOptions)createWatcher(watchOptions[key], ctx, publicThis, key);
    if (provideOptions) {
        const provides = (0, _shared.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key)=>{
            provide(key, provides[key]);
        });
    }
    if (created) callHook(created, instance, "c");
    function registerLifecycleHook(register, hook) {
        if ((0, _shared.isArray)(hook)) hook.forEach((_hook)=>register(_hook.bind(publicThis)));
        else if (hook) register(hook.bind(publicThis));
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if ((0, _shared.isArray)(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key)=>{
                Object.defineProperty(exposed, key, {
                    get: ()=>publicThis[key],
                    set: (val)=>publicThis[key] = val
                });
            });
        } else if (!instance.exposed) instance.exposed = {};
    }
    if (render && instance.render === (0, _shared.NOOP)) instance.render = render;
    if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = (0, _shared.NOOP)) {
    if ((0, _shared.isArray)(injectOptions)) injectOptions = normalizeInject(injectOptions);
    for(const key in injectOptions){
        const opt = injectOptions[key];
        let injected;
        if ((0, _shared.isObject)(opt)) {
            if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
            else injected = inject(opt.from || key);
        } else injected = inject(opt);
        if ((0, _reactivity.isRef)(injected)) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>injected.value,
            set: (v1)=>injected.value = v1
        });
        else ctx[key] = injected;
        checkDuplicateProperties("Inject" /* INJECT */ , key);
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling((0, _shared.isArray)(hook) ? hook.map((h)=>h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : ()=>publicThis[key];
    if ((0, _shared.isString)(raw)) {
        const handler = ctx[raw];
        if ((0, _shared.isFunction)(handler)) watch(getter, handler);
        else warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    } else if ((0, _shared.isFunction)(raw)) watch(getter, raw.bind(publicThis));
    else if ((0, _shared.isObject)(raw)) {
        if ((0, _shared.isArray)(raw)) raw.forEach((r)=>createWatcher(r, ctx, publicThis, key));
        else {
            const handler = (0, _shared.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if ((0, _shared.isFunction)(handler)) watch(getter, handler, raw);
            else warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
    } else warn$1(`Invalid watch option: "${key}"`, raw);
}
function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) resolved = cached;
    else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
    else {
        resolved = {};
        if (globalMixins.length) globalMixins.forEach((m)=>mergeOptions(resolved, m, optionMergeStrategies, true));
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    if ((0, _shared.isObject)(base)) cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
    if (mixins) mixins.forEach((m)=>mergeOptions(to, m, strats, true));
    for(const key in from)if (asMixin && key === "expose") warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeEmitsOrPropsOptions,
    emits: mergeEmitsOrPropsOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) return to;
    if (!to) return from;
    return function mergedDataFn() {
        return (0, _shared.extend)((0, _shared.isFunction)(to) ? to.call(this, this) : to, (0, _shared.isFunction)(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if ((0, _shared.isArray)(raw)) {
        const res = {};
        for(let i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [
        ...new Set([].concat(to, from))
    ] : from;
}
function mergeObjectOptions(to, from) {
    return to ? (0, _shared.extend)(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
    if (to) {
        if ((0, _shared.isArray)(to) && (0, _shared.isArray)(from)) return [
            .../* @__PURE__ */ new Set([
                ...to,
                ...from
            ])
        ];
        return (0, _shared.extend)(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
    } else return from;
}
function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = (0, _shared.extend)(/* @__PURE__ */ Object.create(null), to);
    for(const key in from)merged[key] = mergeAsArray(to[key], from[key]);
    return merged;
}
function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: (0, _shared.NO),
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: /* @__PURE__ */ Object.create(null),
        optionsCache: /* @__PURE__ */ new WeakMap(),
        propsCache: /* @__PURE__ */ new WeakMap(),
        emitsCache: /* @__PURE__ */ new WeakMap()
    };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!(0, _shared.isFunction)(rootComponent)) rootComponent = (0, _shared.extend)({}, rootComponent);
        if (rootProps != null && !(0, _shared.isObject)(rootProps)) {
            warn$1(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = /* @__PURE__ */ new WeakSet();
        let isMounted = false;
        const app = context.app = {
            _uid: uid$1++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config () {
                return context.config;
            },
            set config (v){
                warn$1(`app.config cannot be replaced. Modify individual options instead.`);
            },
            use (plugin, ...options) {
                if (installedPlugins.has(plugin)) warn$1(`Plugin has already been applied to target app.`);
                else if (plugin && (0, _shared.isFunction)(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                } else if ((0, _shared.isFunction)(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                } else warn$1(`A plugin must either be a function or an object with an "install" function.`);
                return app;
            },
            mixin (mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
                    else warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
                } else warn$1("Mixins are only available in builds supporting Options API");
                return app;
            },
            component (name, component) {
                validateComponentName(name, context.config);
                if (!component) return context.components[name];
                if (0, context.components[name]) warn$1(`Component "${name}" has already been registered in target app.`);
                context.components[name] = component;
                return app;
            },
            directive (name, directive) {
                validateDirectiveName(name);
                if (!directive) return context.directives[name];
                if (0, context.directives[name]) warn$1(`Directive "${name}" has already been registered in target app.`);
                context.directives[name] = directive;
                return app;
            },
            mount (rootContainer, isHydrate, namespace) {
                if (!isMounted) {
                    if (0, rootContainer.__vue_app__) warn$1(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
                    const vnode = createVNode(rootComponent, rootProps);
                    vnode.appContext = context;
                    if (namespace === true) namespace = "svg";
                    else if (namespace === false) namespace = void 0;
                    context.reload = ()=>{
                        render(cloneVNode(vnode), rootContainer, namespace);
                    };
                    if (isHydrate && hydrate) hydrate(vnode, rootContainer);
                    else render(vnode, rootContainer, namespace);
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    app._instance = vnode.component;
                    devtoolsInitApp(app, version);
                    return getComponentPublicInstance(vnode.component);
                } else warn$1(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
            },
            unmount () {
                if (isMounted) {
                    render(null, app._container);
                    app._instance = null;
                    devtoolsUnmountApp(app);
                    delete app._container.__vue_app__;
                } else warn$1(`Cannot unmount an app that is not mounted.`);
            },
            provide (key, value) {
                if (key in context.provides) warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
                context.provides[key] = value;
                return app;
            },
            runWithContext (fn) {
                const lastApp = currentApp;
                currentApp = app;
                try {
                    return fn();
                } finally{
                    currentApp = lastApp;
                }
            }
        };
        return app;
    };
}
let currentApp = null;
function provide(key, value) {
    if (!currentInstance) warn$1(`provide() can only be used inside setup().`);
    else {
        let provides = currentInstance.provides;
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance || currentApp) {
        const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
        if (provides && key in provides) return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && (0, _shared.isFunction)(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
        else warn$1(`injection "${String(key)}" not found.`);
    } else warn$1(`inject() can only be used inside setup() or functional components.`);
}
function hasInjectionContext() {
    return !!(currentInstance || currentRenderingInstance || currentApp);
}
const internalObjectProto = {};
const createInternalObject = ()=>Object.create(internalObjectProto);
const isInternalObject = (obj)=>Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = createInternalObject();
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for(const key in instance.propsOptions[0])if (!(key in props)) props[key] = void 0;
    validateProps(rawProps || {}, props, instance);
    if (isStateful) instance.props = isSSR ? props : (0, _reactivity.shallowReactive)(props);
    else if (!instance.type.props) instance.props = attrs;
    else instance.props = props;
    instance.attrs = attrs;
}
function isInHmrContext(instance) {
    while(instance){
        if (instance.type.__hmrId) return true;
        instance = instance.parent;
    }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = (0, _reactivity.toRaw)(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (// always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
        if (patchFlag & 8) {
            const propsToUpdate = instance.vnode.dynamicProps;
            for(let i = 0; i < propsToUpdate.length; i++){
                let key = propsToUpdate[i];
                if (isEmitListener(instance.emitsOptions, key)) continue;
                const value = rawProps[key];
                if (options) {
                    if ((0, _shared.hasOwn)(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    } else {
                        const camelizedKey = (0, _shared.camelize)(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                    }
                } else if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    } else {
        if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
        let kebabKey;
        for(const key in rawCurrentProps)if (!rawProps || // for camelCase
        !(0, _shared.hasOwn)(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = (0, _shared.hyphenate)(key)) === key || !(0, _shared.hasOwn)(rawProps, kebabKey))) {
            if (options) {
                if (rawPrevProps && // for camelCase
                (rawPrevProps[key] !== void 0 || // for kebab-case
                rawPrevProps[kebabKey] !== void 0)) props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
            } else delete props[key];
        }
        if (attrs !== rawCurrentProps) {
            for(const key in attrs)if (!rawProps || !(0, _shared.hasOwn)(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
            }
        }
    }
    if (hasAttrsChanged) (0, _reactivity.trigger)(instance.attrs, "set", "");
    validateProps(rawProps || {}, props, instance);
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) for(let key in rawProps){
        if ((0, _shared.isReservedProp)(key)) continue;
        const value = rawProps[key];
        let camelKey;
        if (options && (0, _shared.hasOwn)(options, camelKey = (0, _shared.camelize)(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
            else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        } else if (!isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = (0, _reactivity.toRaw)(props);
        const castValues = rawCastValues || (0, _shared.EMPTY_OBJ);
        for(let i = 0; i < needCastKeys.length; i++){
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !(0, _shared.hasOwn)(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = (0, _shared.hasOwn)(opt, "default");
        if (hasDefault && value === void 0) {
            const defaultValue = opt.default;
            if (opt.type !== Function && !opt.skipFactory && (0, _shared.isFunction)(defaultValue)) {
                const { propsDefaults } = instance;
                if (key in propsDefaults) value = propsDefaults[key];
                else {
                    const reset = setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    reset();
                }
            } else value = defaultValue;
        }
        if (opt[0 /* shouldCast */ ]) {
            if (isAbsent && !hasDefault) value = false;
            else if (opt[1 /* shouldCastTrue */ ] && (value === "" || value === (0, _shared.hyphenate)(key))) value = true;
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) return cached;
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, _shared.isFunction)(comp)) {
        const extendProps = (raw2)=>{
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw2, appContext, true);
            (0, _shared.extend)(normalized, props);
            if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
        if (comp.extends) extendProps(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendProps);
    }
    if (!raw && !hasExtends) {
        if ((0, _shared.isObject)(comp)) cache.set(comp, (0, _shared.EMPTY_ARR));
        return 0, _shared.EMPTY_ARR;
    }
    if ((0, _shared.isArray)(raw)) for(let i = 0; i < raw.length; i++){
        if (!(0, _shared.isString)(raw[i])) warn$1(`props must be strings when using array syntax.`, raw[i]);
        const normalizedKey = (0, _shared.camelize)(raw[i]);
        if (validatePropName(normalizedKey)) normalized[normalizedKey] = (0, _shared.EMPTY_OBJ);
    }
    else if (raw) {
        if (!(0, _shared.isObject)(raw)) warn$1(`invalid props options`, raw);
        for(const key in raw){
            const normalizedKey = (0, _shared.camelize)(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = normalized[normalizedKey] = (0, _shared.isArray)(opt) || (0, _shared.isFunction)(opt) ? {
                    type: opt
                } : (0, _shared.extend)({}, opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */ ] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */ ] = stringIndex < 0 || booleanIndex < stringIndex;
                    if (booleanIndex > -1 || (0, _shared.hasOwn)(prop, "default")) needCastKeys.push(normalizedKey);
                }
            }
        }
    }
    const res = [
        normalized,
        needCastKeys
    ];
    if ((0, _shared.isObject)(comp)) cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== "$" && !(0, _shared.isReservedProp)(key)) return true;
    else warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    return false;
}
function getType(ctor) {
    if (ctor === null) return "null";
    if (typeof ctor === "function") return ctor.name || "";
    else if (typeof ctor === "object") {
        const name = ctor.constructor && ctor.constructor.name;
        return name || "";
    }
    return "";
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if ((0, _shared.isArray)(expectedTypes)) return expectedTypes.findIndex((t)=>isSameType(t, type));
    else if ((0, _shared.isFunction)(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
    return -1;
}
function validateProps(rawProps, props, instance) {
    const resolvedValues = (0, _reactivity.toRaw)(props);
    const options = instance.propsOptions[0];
    for(const key in options){
        let opt = options[key];
        if (opt == null) continue;
        validateProp(key, resolvedValues[key], opt, (0, _reactivity.shallowReadonly)(resolvedValues), !(0, _shared.hasOwn)(rawProps, key) && !(0, _shared.hasOwn)(rawProps, (0, _shared.hyphenate)(key)));
    }
}
function validateProp(name, value, prop, props, isAbsent) {
    const { type, required, validator, skipCheck } = prop;
    if (required && isAbsent) {
        warn$1('Missing required prop: "' + name + '"');
        return;
    }
    if (value == null && !required) return;
    if (type != null && type !== true && !skipCheck) {
        let isValid = false;
        const types = (0, _shared.isArray)(type) ? type : [
            type
        ];
        const expectedTypes = [];
        for(let i = 0; i < types.length && !isValid; i++){
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || "");
            isValid = valid;
        }
        if (!isValid) {
            warn$1(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    if (validator && !validator(value, props)) warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
}
const isSimpleType = /* @__PURE__ */ (0, _shared.makeMap)("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        if (!valid && t === "object") valid = value instanceof type;
    } else if (expectedType === "Object") valid = (0, _shared.isObject)(value);
    else if (expectedType === "Array") valid = (0, _shared.isArray)(value);
    else if (expectedType === "null") valid = value === null;
    else valid = value instanceof type;
    return {
        valid,
        expectedType
    };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
    if (expectedTypes.length === 0) return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map((0, _shared.capitalize)).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = (0, _shared.toRawType)(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
    message += `, got ${receivedType} `;
    if (isExplicable(receivedType)) message += `with value ${receivedValue}.`;
    return message;
}
function styleValue(value, type) {
    if (type === "String") return `"${value}"`;
    else if (type === "Number") return `${Number(value)}`;
    else return `${value}`;
}
function isExplicable(type) {
    const explicitTypes = [
        "string",
        "number",
        "boolean"
    ];
    return explicitTypes.some((elem)=>type.toLowerCase() === elem);
}
function isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === "boolean");
}
const isInternalKey = (key)=>key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value)=>(0, _shared.isArray)(value) ? value.map(normalizeVNode) : [
        normalizeVNode(value)
    ];
const normalizeSlot = (key, rawSlot, ctx)=>{
    if (rawSlot._n) return rawSlot;
    const normalized = withCtx((...args)=>{
        if (currentInstance && (!ctx || ctx.root === currentInstance.root)) warn$1(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance)=>{
    const ctx = rawSlots._ctx;
    for(const key in rawSlots){
        if (isInternalKey(key)) continue;
        const value = rawSlots[key];
        if ((0, _shared.isFunction)(value)) slots[key] = normalizeSlot(key, value, ctx);
        else if (value != null) {
            warn$1(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
            const normalized = normalizeSlotValue(value);
            slots[key] = ()=>normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children)=>{
    if (!isKeepAlive(instance.vnode) && true) warn$1(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
    const normalized = normalizeSlotValue(children);
    instance.slots.default = ()=>normalized;
};
const initSlots = (instance, children)=>{
    const slots = instance.slots = createInternalObject();
    if (instance.vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            (0, _shared.extend)(slots, children);
            (0, _shared.def)(slots, "_", type, true);
        } else normalizeObjectSlots(children, slots);
    } else if (children) normalizeVNodeSlots(instance, children);
};
const updateSlots = (instance, children, optimized)=>{
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = (0, _shared.EMPTY_OBJ);
    if (vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            if (isHmrUpdating) {
                (0, _shared.extend)(slots, children);
                (0, _reactivity.trigger)(instance, "set", "$slots");
            } else if (optimized && type === 1) needDeletionCheck = false;
            else {
                (0, _shared.extend)(slots, children);
                if (!optimized && type === 1) delete slots._;
            }
        } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    } else if (children) {
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
            default: 1
        };
    }
    if (needDeletionCheck) {
        for(const key in slots)if (!isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
    }
};
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if ((0, _shared.isArray)(rawRef)) {
        rawRef.forEach((r, i)=>setRef(r, oldRawRef && ((0, _shared.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) return;
    const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    if (!owner) {
        warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === (0, _shared.EMPTY_OBJ) ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref) {
        if ((0, _shared.isString)(oldRef)) {
            refs[oldRef] = null;
            if ((0, _shared.hasOwn)(setupState, oldRef)) setupState[oldRef] = null;
        } else if ((0, _reactivity.isRef)(oldRef)) oldRef.value = null;
    }
    if ((0, _shared.isFunction)(ref)) callWithErrorHandling(ref, owner, 12, [
        value,
        refs
    ]);
    else {
        const _isString = (0, _shared.isString)(ref);
        const _isRef = (0, _reactivity.isRef)(ref);
        if (_isString || _isRef) {
            const doSet = ()=>{
                if (rawRef.f) {
                    const existing = _isString ? (0, _shared.hasOwn)(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
                    if (isUnmount) (0, _shared.isArray)(existing) && (0, _shared.remove)(existing, refValue);
                    else {
                        if (!(0, _shared.isArray)(existing)) {
                            if (_isString) {
                                refs[ref] = [
                                    refValue
                                ];
                                if ((0, _shared.hasOwn)(setupState, ref)) setupState[ref] = refs[ref];
                            } else {
                                ref.value = [
                                    refValue
                                ];
                                if (rawRef.k) refs[rawRef.k] = ref.value;
                            }
                        } else if (!existing.includes(refValue)) existing.push(refValue);
                    }
                } else if (_isString) {
                    refs[ref] = value;
                    if ((0, _shared.hasOwn)(setupState, ref)) setupState[ref] = value;
                } else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k) refs[rawRef.k] = value;
                } else warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            } else doSet();
        } else warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
    }
}
let hasLoggedMismatchError = false;
const logMismatchError = ()=>{
    if (hasLoggedMismatchError) return;
    console.error("Hydration completed but contains mismatches.");
    hasLoggedMismatchError = true;
};
const isSVGContainer = (container)=>container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const isMathMLContainer = (container)=>container.namespaceURI.includes("MathML");
const getContainerType = (container)=>{
    if (isSVGContainer(container)) return "svg";
    if (isMathMLContainer(container)) return "mathml";
    return void 0;
};
const isComment = (node)=>node.nodeType === 8 /* COMMENT */ ;
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, createText, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container)=>{
        if (!container.hasChildNodes()) {
            warn$1(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
        }
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const isFragmentStart = isComment(node) && node.data === "[";
        const onMismatch = ()=>handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type, ref, shapeFlag, patchFlag } = vnode;
        let domType = node.nodeType;
        vnode.el = node;
        (0, _shared.def)(node, "__vnode", vnode, true);
        (0, _shared.def)(node, "__vueParentComponent", parentComponent, true);
        if (patchFlag === -2) {
            optimized = false;
            vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch(type){
            case Text:
                if (domType !== 3 /* TEXT */ ) {
                    if (vnode.children === "") {
                        insert(vnode.el = createText(""), parentNode(node), node);
                        nextNode = node;
                    } else nextNode = onMismatch();
                } else {
                    if (node.data !== vnode.children) {
                        warn$1(`Hydration text mismatch in`, node.parentNode, `
  - rendered on server: ${JSON.stringify(node.data)}
  - expected on client: ${JSON.stringify(vnode.children)}`);
                        logMismatchError();
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (isTemplateNode(node)) {
                    nextNode = nextSibling(node);
                    replaceNode(vnode.el = node.content.firstChild, node, parentComponent);
                } else if (domType !== 8 /* COMMENT */  || isFragmentStart) nextNode = onMismatch();
                else nextNode = nextSibling(node);
                break;
            case Static:
                if (isFragmentStart) {
                    node = nextSibling(node);
                    domType = node.nodeType;
                }
                if (domType === 1 /* ELEMENT */  || domType === 3 /* TEXT */ ) {
                    nextNode = node;
                    const needToAdoptContent = !vnode.children.length;
                    for(let i = 0; i < vnode.staticCount; i++){
                        if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 /* ELEMENT */  ? nextNode.outerHTML : nextNode.data;
                        if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
                        nextNode = nextSibling(nextNode);
                    }
                    return isFragmentStart ? nextSibling(nextNode) : nextNode;
                } else onMismatch();
                break;
            case Fragment:
                if (!isFragmentStart) nextNode = onMismatch();
                else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1) {
                    if ((domType !== 1 /* ELEMENT */  || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) nextNode = onMismatch();
                    else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                } else if (shapeFlag & 6) {
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    if (isFragmentStart) nextNode = locateClosingAnchor(node);
                    else if (isComment(node) && node.data === "teleport start") nextNode = locateClosingAnchor(node, node.data, "teleport end");
                    else nextNode = nextSibling(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, getContainerType(container), optimized);
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                        } else subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                } else if (shapeFlag & 64) {
                    if (domType !== 8 /* COMMENT */ ) nextNode = onMismatch();
                    else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                } else if (shapeFlag & 128) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, getContainerType(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                else warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
        }
        if (ref != null) setRef(ref, null, parentSuspense, vnode);
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
        const forcePatch = type === "input" || type === "option";
        {
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
            let needCallTransitionHooks = false;
            if (isTemplateNode(el)) {
                needCallTransitionHooks = needTransition(parentSuspense, transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
                const content = el.content.firstChild;
                if (needCallTransitionHooks) transition.beforeEnter(content);
                replaceNode(content, el, parentComponent);
                vnode.el = el = content;
            }
            if (shapeFlag & 16 && // skip if element has innerHTML / textContent
            !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned = false;
                while(next){
                    if (!hasWarned) {
                        warn$1(`Hydration children mismatch on`, el, `
Server rendered element contains more child nodes than client vdom.`);
                        hasWarned = true;
                    }
                    logMismatchError();
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            } else if (shapeFlag & 8) {
                if (el.textContent !== vnode.children) {
                    warn$1(`Hydration text content mismatch on`, el, `
  - rendered on server: ${el.textContent}
  - expected on client: ${vnode.children}`);
                    logMismatchError();
                    el.textContent = vnode.children;
                }
            }
            if (props) for(const key in props){
                if (// #11189 skip if this node has directives that have created hooks
                // as it could have mutated the DOM in any possible way
                !(dirs && dirs.some((d)=>d.dir.created)) && propHasMismatch(el, key, props[key], vnode, parentComponent)) logMismatchError();
                if (forcePatch && (key.endsWith("value") || key === "indeterminate") || (0, _shared.isOn)(key) && !(0, _shared.isReservedProp)(key) || // force hydrate v-bind with .prop modifiers
                key[0] === ".") patchProp(el, key, null, props[key], void 0, void 0, parentComponent);
            }
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) queueEffectWithSuspense(()=>{
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for(let i = 0; i < l; i++){
            const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
            if (node) node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            else if (vnode.type === Text && !vnode.children) insert(vnode.el = createText(""), container);
            else {
                if (!hasWarned) {
                    warn$1(`Hydration children mismatch on`, container, `
Server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned = true;
                }
                logMismatchError();
                patch(null, vnode, container, null, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        const { slotScopeIds: fragmentSlotScopeIds } = vnode;
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === "]") return nextSibling(vnode.anchor = next);
        else {
            logMismatchError();
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment)=>{
        warn$1(`Hydration node mismatch:
- rendered on server:`, node, node.nodeType === 3 /* TEXT */  ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``, `
- expected on client:`, vnode.type);
        logMismatchError();
        vnode.el = null;
        if (isFragment) {
            const end = locateClosingAnchor(node);
            while(true){
                const next2 = nextSibling(node);
                if (next2 && next2 !== end) remove(next2);
                else break;
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
        return next;
    };
    const locateClosingAnchor = (node, open = "[", close = "]")=>{
        let match = 0;
        while(node){
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === open) match++;
                if (node.data === close) {
                    if (match === 0) return nextSibling(node);
                    else match--;
                }
            }
        }
        return node;
    };
    const replaceNode = (newNode, oldNode, parentComponent)=>{
        const parentNode2 = oldNode.parentNode;
        if (parentNode2) parentNode2.replaceChild(newNode, oldNode);
        let parent = parentComponent;
        while(parent){
            if (parent.vnode.el === oldNode) parent.vnode.el = parent.subTree.el = newNode;
            parent = parent.parent;
        }
    };
    const isTemplateNode = (node)=>{
        return node.nodeType === 1 /* ELEMENT */  && node.tagName.toLowerCase() === "template";
    };
    return [
        hydrate,
        hydrateNode
    ];
}
function propHasMismatch(el, key, clientValue, vnode, instance) {
    let mismatchType;
    let mismatchKey;
    let actual;
    let expected;
    if (key === "class") {
        actual = el.getAttribute("class");
        expected = (0, _shared.normalizeClass)(clientValue);
        if (!isSetEqual(toClassSet(actual || ""), toClassSet(expected))) mismatchType = mismatchKey = `class`;
    } else if (key === "style") {
        actual = el.getAttribute("style") || "";
        expected = (0, _shared.isString)(clientValue) ? clientValue : (0, _shared.stringifyStyle)((0, _shared.normalizeStyle)(clientValue));
        const actualMap = toStyleMap(actual);
        const expectedMap = toStyleMap(expected);
        if (vnode.dirs) {
            for (const { dir, value } of vnode.dirs)if (dir.name === "show" && !value) expectedMap.set("display", "none");
        }
        if (instance) resolveCssVars(instance, vnode, expectedMap);
        if (!isMapEqual(actualMap, expectedMap)) mismatchType = mismatchKey = "style";
    } else if (el instanceof SVGElement && (0, _shared.isKnownSvgAttr)(key) || el instanceof HTMLElement && ((0, _shared.isBooleanAttr)(key) || (0, _shared.isKnownHtmlAttr)(key))) {
        if ((0, _shared.isBooleanAttr)(key)) {
            actual = el.hasAttribute(key);
            expected = (0, _shared.includeBooleanAttr)(clientValue);
        } else if (clientValue == null) {
            actual = el.hasAttribute(key);
            expected = false;
        } else {
            if (el.hasAttribute(key)) actual = el.getAttribute(key);
            else if (key === "value" && el.tagName === "TEXTAREA") actual = el.value;
            else actual = false;
            expected = (0, _shared.isRenderableAttrValue)(clientValue) ? String(clientValue) : false;
        }
        if (actual !== expected) {
            mismatchType = `attribute`;
            mismatchKey = key;
        }
    }
    if (mismatchType) {
        const format = (v1)=>v1 === false ? `(not rendered)` : `${mismatchKey}="${v1}"`;
        const preSegment = `Hydration ${mismatchType} mismatch on`;
        const postSegment = `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
        warn$1(preSegment, el, postSegment);
        return true;
    }
    return false;
}
function toClassSet(str) {
    return new Set(str.trim().split(/\s+/));
}
function isSetEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const s of a){
        if (!b.has(s)) return false;
    }
    return true;
}
function toStyleMap(str) {
    const styleMap = /* @__PURE__ */ new Map();
    for (const item of str.split(";")){
        let [key, value] = item.split(":");
        key = key.trim();
        value = value && value.trim();
        if (key && value) styleMap.set(key, value);
    }
    return styleMap;
}
function isMapEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const [key, value] of a){
        if (value !== b.get(key)) return false;
    }
    return true;
}
function resolveCssVars(instance, vnode, expectedMap) {
    const root = instance.subTree;
    if (instance.getCssVars && (vnode === root || root && root.type === Fragment && root.children.includes(vnode))) {
        const cssVars = instance.getCssVars();
        for(const key in cssVars)expectedMap.set(`--${key}`, String(cssVars[key]));
    }
    if (vnode === root && instance.parent) resolveCssVars(instance.parent, instance.vnode, expectedMap);
}
let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) perf.mark(`vue-${type}-${instance.uid}`);
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
}
function isSupported() {
    if (supported !== void 0) return supported;
    if (typeof window !== "undefined" && window.performance) {
        supported = true;
        perf = window.performance;
    } else supported = false;
    return supported;
}
function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== "boolean") {
        needWarn.push(`__VUE_OPTIONS_API__`);
        (0, _shared.getGlobalThis)().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== "boolean") {
        needWarn.push(`__VUE_PROD_DEVTOOLS__`);
        (0, _shared.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ !== "boolean") {
        needWarn.push(`__VUE_PROD_HYDRATION_MISMATCH_DETAILS__`);
        (0, _shared.getGlobalThis)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
    }
    if (0, needWarn.length) {
        const multi = needWarn.length > 1;
        console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
    }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
    return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
    initFeatureFlags();
    const target = (0, _shared.getGlobalThis)();
    target.__VUE__ = true;
    setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = (0, _shared.NOOP), insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren)=>{
        if (n1 === n2) return;
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch(type){
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
                else patchStaticNode(n1, n2, container, namespace);
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                else warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
        if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    };
    const processText = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
        else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) hostSetText(el, n2.children);
        }
    };
    const processCommentNode = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
        else n2.el = n1.el;
    };
    const mountStaticNode = (n2, container, anchor, namespace)=>{
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
    };
    const patchStaticNode = (n1, n2, container, namespace)=>{
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace);
        } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling)=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor })=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        if (n2.type === "svg") namespace = "svg";
        else if (n2.type === "math") namespace = "mathml";
        if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        else patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        let el;
        let vnodeHook;
        const { props, shapeFlag, transition, dirs } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
        if (shapeFlag & 8) hostSetElementText(el, vnode.children);
        else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        if (props) {
            for(const key in props)if (key !== "value" && !(0, _shared.isReservedProp)(key)) hostPatchProp(el, key, null, props[key], namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
            if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        (0, _shared.def)(el, "__vnode", vnode, true);
        (0, _shared.def)(el, "__vueParentComponent", parentComponent, true);
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        const needCallTransitionHooks = needTransition(parentSuspense, transition);
        if (needCallTransitionHooks) transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent)=>{
        if (scopeId) hostSetScopeId(el, scopeId);
        if (slotScopeIds) for(let i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) subTree = filterSingleRoot(subTree.children) || subTree;
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0)=>{
        for(let i = start; i < children.length; i++){
            const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        const el = n2.el = n1.el;
        el.__vnode = n2;
        let { patchFlag, dynamicChildren, dirs } = n2;
        patchFlag |= n1.patchFlag & 16;
        const oldProps = n1.props || (0, _shared.EMPTY_OBJ);
        const newProps = n2.props || (0, _shared.EMPTY_OBJ);
        let vnodeHook;
        parentComponent && toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
        parentComponent && toggleRecurse(parentComponent, true);
        if (isHmrUpdating) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
            traverseStaticChildren(n1, n2);
        } else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
        if (patchFlag > 0) {
            if (patchFlag & 16) patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
            else {
                if (patchFlag & 2) {
                    if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
                }
                if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
                if (patchFlag & 8) {
                    const propsToUpdate = n2.dynamicProps;
                    for(let i = 0; i < propsToUpdate.length; i++){
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            if (patchFlag & 1) {
                if (n1.children !== n2.children) hostSetElementText(el, n2.children);
            }
        } else if (!optimized && dynamicChildren == null) patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds)=>{
        for(let i = 0; i < newChildren.length; i++){
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            const container = // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & 70) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace)=>{
        if (oldProps !== newProps) {
            if (oldProps !== (0, _shared.EMPTY_OBJ)) {
                for(const key in oldProps)if (!(0, _shared.isReservedProp)(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            for(const key in newProps){
                if ((0, _shared.isReservedProp)(key)) continue;
                const next = newProps[key];
                const prev = oldProps[key];
                if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
        let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        if (// #5523 dev root fragment may inherit directives
        isHmrUpdating || patchFlag & 2048) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            mountChildren(// #10007
            // such fragment like `<></>` will be compiled into
            // a fragment which doesn't have a children.
            // In this case fallback to an empty array
            n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
            traverseStaticChildren(n1, n2);
        } else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
            else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
        } else updateComponent(n1, n2, optimized);
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized)=>{
        const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if (0, instance.type.__hmrId) registerHMR(instance);
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
        if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
        startMeasure(instance, `init`);
        setupComponent(instance);
        endMeasure(instance, `init`);
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
            if (!initialVNode.el) {
                const placeholder = instance.subTree = createVNode(Comment);
                processCommentNode(null, placeholder, container, anchor);
            }
        } else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
        popWarningContext();
        endMeasure(instance, `mount`);
    };
    const updateComponent = (n1, n2, optimized)=>{
        const instance = n2.component = n1.component;
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
                pushWarningContext(n2);
                updateComponentPreRender(instance, n2, optimized);
                popWarningContext();
                return;
            } else {
                instance.next = n2;
                invalidateJob(instance.update);
                instance.effect.dirty = true;
                instance.update();
            }
        } else {
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized)=>{
        const componentUpdateFn = ()=>{
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                if (bm) (0, _shared.invokeArrayFns)(bm);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    const hydrateSubTree = ()=>{
                        startMeasure(instance, `render`);
                        instance.subTree = renderComponentRoot(instance);
                        endMeasure(instance, `render`);
                        startMeasure(instance, `hydrate`);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        endMeasure(instance, `hydrate`);
                    };
                    if (isAsyncWrapperVNode) initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    ()=>!instance.isUnmounted && hydrateSubTree());
                    else hydrateSubTree();
                } else {
                    startMeasure(instance, `render`);
                    const subTree = instance.subTree = renderComponentRoot(instance);
                    endMeasure(instance, `render`);
                    startMeasure(instance, `patch`);
                    patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
                    endMeasure(instance, `patch`);
                    initialVNode.el = subTree.el;
                }
                if (m) queuePostRenderEffect(m, parentSuspense);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                instance.isMounted = true;
                devtoolsComponentAdded(instance);
                initialVNode = container = anchor = null;
            } else {
                let { next, bu, u, parent, vnode } = instance;
                {
                    const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
                    if (nonHydratedAsyncRoot) {
                        if (next) {
                            next.el = vnode.el;
                            updateComponentPreRender(instance, next, optimized);
                        }
                        nonHydratedAsyncRoot.asyncDep.then(()=>{
                            if (!instance.isUnmounted) componentUpdateFn();
                        });
                        return;
                    }
                }
                let originNext = next;
                let vnodeHook;
                pushWarningContext(next || instance.vnode);
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                } else next = vnode;
                if (bu) (0, _shared.invokeArrayFns)(bu);
                if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
                toggleRecurse(instance, true);
                startMeasure(instance, `render`);
                const nextTree = renderComponentRoot(instance);
                endMeasure(instance, `render`);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                startMeasure(instance, `patch`);
                patch(prevTree, nextTree, // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, namespace);
                endMeasure(instance, `patch`);
                next.el = nextTree.el;
                if (originNext === null) updateHOCHostEl(instance, nextTree.el);
                if (u) queuePostRenderEffect(u, parentSuspense);
                if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                devtoolsComponentUpdated(instance);
                popWarningContext();
            }
        };
        const effect = instance.effect = new (0, _reactivity.ReactiveEffect)(componentUpdateFn, (0, _shared.NOOP), ()=>queueJob(update), instance.scope);
        const update = instance.update = ()=>{
            if (effect.dirty) effect.run();
        };
        update.id = instance.uid;
        toggleRecurse(instance, true);
        effect.onTrack = instance.rtc ? (e)=>(0, _shared.invokeArrayFns)(instance.rtc, e) : void 0;
        effect.onTrigger = instance.rtg ? (e)=>(0, _shared.invokeArrayFns)(instance.rtg, e) : void 0;
        update.ownerInstance = instance;
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized)=>{
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        (0, _reactivity.pauseTracking)();
        flushPreFlushCbs(instance);
        (0, _reactivity.resetTracking)();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false)=>{
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        if (patchFlag > 0) {
            if (patchFlag & 128) {
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
            } else if (patchFlag & 256) {
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
            }
        }
        if (shapeFlag & 8) {
            if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
            if (c2 !== c1) hostSetElementText(container, c2);
        } else if (prevShapeFlag & 16) {
            if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else unmountChildren(c1, parentComponent, parentSuspense, true);
        } else {
            if (prevShapeFlag & 8) hostSetElementText(container, "");
            if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        c1 = c1 || (0, _shared.EMPTY_ARR);
        c2 = c2 || (0, _shared.EMPTY_ARR);
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for(i = 0; i < commonLength; i++){
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
        if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1;
        let e2 = l2 - 1;
        while(i <= e1 && i <= e2){
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            i++;
        }
        while(i <= e1 && i <= e2){
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            e1--;
            e2--;
        }
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while(i <= e2){
                    patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                    i++;
                }
            }
        } else if (i > e2) while(i <= e1){
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
        }
        else {
            const s1 = i;
            const s2 = i;
            const keyToNewIndexMap = /* @__PURE__ */ new Map();
            for(i = s2; i <= e2; i++){
                const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                    if (keyToNewIndexMap.has(nextChild.key)) warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            let maxNewIndexSoFar = 0;
            const newIndexToOldIndexMap = new Array(toBePatched);
            for(i = 0; i < toBePatched; i++)newIndexToOldIndexMap[i] = 0;
            for(i = s1; i <= e1; i++){
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
                else {
                    for(j = s2; j <= e2; j++)if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                        newIndex = j;
                        break;
                    }
                }
                if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
                    else moved = true;
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                    patched++;
                }
            }
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : (0, _shared.EMPTY_ARR);
            j = increasingNewIndexSequence.length - 1;
            for(i = toBePatched - 1; i >= 0; i--){
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (moved) {
                    if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
                    else j--;
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null)=>{
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for(let i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
        if (needTransition2) {
            if (moveType === 0) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(()=>transition.enter(el), parentSuspense);
            } else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove2 = ()=>hostInsert(el, container, anchor);
                const performLeave = ()=>{
                    leave(el, ()=>{
                        remove2();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) delayLeave(el, remove2, performLeave);
                else performLeave();
            }
        } else hostInsert(el, container, anchor);
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false)=>{
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs, memoIndex } = vnode;
        if (patchFlag === -2) optimized = false;
        if (ref != null) setRef(ref, null, parentSuspense, vnode, true);
        if (memoIndex != null) parentComponent.renderCache[memoIndex] = void 0;
        if (shapeFlag & 256) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
        else {
            if (shapeFlag & 128) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
            else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
            (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            else if (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
            if (doRemove) remove(vnode);
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
    };
    const remove = (vnode)=>{
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) vnode.children.forEach((child)=>{
                if (child.type === Comment) hostRemove(child.el);
                else remove(child);
            });
            else removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = ()=>{
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
        };
        if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = ()=>leave(el, performRemove);
            if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
            else performLeave();
        } else performRemove();
    };
    const removeFragment = (cur, end)=>{
        let next;
        while(cur !== end){
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove)=>{
        if (0, instance.type.__hmrId) unregisterHMR(instance);
        const { bum, scope, update, subTree, um, m, a } = instance;
        invalidateMount(m);
        invalidateMount(a);
        if (bum) (0, _shared.invokeArrayFns)(bum);
        scope.stop();
        if (update) {
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        if (um) queuePostRenderEffect(um, parentSuspense);
        queuePostRenderEffect(()=>{
            instance.isUnmounted = true;
        }, parentSuspense);
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) parentSuspense.resolve();
        }
        devtoolsComponentRemoved(instance);
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0)=>{
        for(let i = start; i < children.length; i++)unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    };
    const getNextHostNode = (vnode)=>{
        if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
        if (vnode.shapeFlag & 128) return vnode.suspense.next();
        return hostNextSibling(vnode.anchor || vnode.el);
    };
    let isFlushing = false;
    const render = (vnode, container, namespace)=>{
        if (vnode == null) {
            if (container._vnode) unmount(container._vnode, null, null, true);
        } else patch(container._vnode || null, vnode, container, null, null, null, namespace);
        if (!isFlushing) {
            isFlushing = true;
            flushPreFlushCbs();
            flushPostFlushCbs();
            isFlushing = false;
        }
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
    return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect, update }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
function needTransition(parentSuspense, transition) {
    return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if ((0, _shared.isArray)(ch1) && (0, _shared.isArray)(ch2)) for(let i = 0; i < ch1.length; i++){
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
            }
            if (!shallow && c2.patchFlag !== -2) traverseStaticChildren(c1, c2);
        }
        if (c2.type === Text) c2.el = c1.el;
        if (c2.type === Comment && !c2.el) c2.el = c1.el;
    }
}
function getSequence(arr) {
    const p = arr.slice();
    const result = [
        0
    ];
    let i, j, u, v1, c;
    const len = arr.length;
    for(i = 0; i < len; i++){
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v1 = result.length - 1;
            while(u < v1){
                c = u + v1 >> 1;
                if (arr[result[c]] < arrI) u = c + 1;
                else v1 = c;
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) p[i] = result[u - 1];
                result[u] = i;
            }
        }
    }
    u = result.length;
    v1 = result[u - 1];
    while(u-- > 0){
        result[u] = v1;
        v1 = p[v1];
    }
    return result;
}
function locateNonHydratedAsyncRoot(instance) {
    const subComponent = instance.subTree.component;
    if (subComponent) {
        if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
        else return locateNonHydratedAsyncRoot(subComponent);
    }
}
function invalidateMount(hooks) {
    if (hooks) for(let i = 0; i < hooks.length; i++)hooks[i].active = false;
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = ()=>{
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) warn$1(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
        return ctx;
    }
};
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, (0, _shared.extend)({}, options, {
        flush: "post"
    }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, (0, _shared.extend)({}, options, {
        flush: "sync"
    }));
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
    if (!(0, _shared.isFunction)(cb)) warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, once, onTrack, onTrigger } = (0, _shared.EMPTY_OBJ)) {
    if (cb && once) {
        const _cb = cb;
        cb = (...args)=>{
            _cb(...args);
            unwatch();
        };
    }
    if (deep !== void 0 && typeof deep === "number") warn$1(`watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.`);
    if (!cb) {
        if (immediate !== void 0) warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
        if (deep !== void 0) warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
        if (once !== void 0) warn$1(`watch() "once" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    const warnInvalidSource = (s)=>{
        warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    const reactiveGetter = (source2)=>deep === true ? source2 : // for deep: false, only traverse root-level properties
        traverse(source2, deep === false ? 1 : void 0);
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if ((0, _reactivity.isRef)(source)) {
        getter = ()=>source.value;
        forceTrigger = (0, _reactivity.isShallow)(source);
    } else if ((0, _reactivity.isReactive)(source)) {
        getter = ()=>reactiveGetter(source);
        forceTrigger = true;
    } else if ((0, _shared.isArray)(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>(0, _reactivity.isReactive)(s) || (0, _reactivity.isShallow)(s));
        getter = ()=>source.map((s)=>{
                if ((0, _reactivity.isRef)(s)) return s.value;
                else if ((0, _reactivity.isReactive)(s)) return reactiveGetter(s);
                else if ((0, _shared.isFunction)(s)) return callWithErrorHandling(s, instance, 2);
                else warnInvalidSource(s);
            });
    } else if ((0, _shared.isFunction)(source)) {
        if (cb) getter = ()=>callWithErrorHandling(source, instance, 2);
        else getter = ()=>{
            if (cleanup) cleanup();
            return callWithAsyncErrorHandling(source, instance, 3, [
                onCleanup
            ]);
        };
    } else {
        getter = (0, _shared.NOOP);
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = ()=>traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn)=>{
        cleanup = effect.onStop = ()=>{
            callWithErrorHandling(fn, instance, 4);
            cleanup = effect.onStop = void 0;
        };
    };
    let ssrCleanup;
    if (isInSSRComponentSetup) {
        onCleanup = (0, _shared.NOOP);
        if (!cb) getter();
        else if (immediate) callWithAsyncErrorHandling(cb, instance, 3, [
            getter(),
            isMultiSource ? [] : void 0,
            onCleanup
        ]);
        if (flush === "sync") {
            const ctx = useSSRContext();
            ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
        } else return 0, _shared.NOOP;
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = ()=>{
        if (!effect.active || !effect.dirty) return;
        if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v1, i)=>(0, _shared.hasChanged)(v1, oldValue[i])) : (0, _shared.hasChanged)(newValue, oldValue)) || false) {
                if (cleanup) cleanup();
                callWithAsyncErrorHandling(cb, instance, 3, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        } else effect.run();
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") scheduler = job;
    else if (flush === "post") scheduler = ()=>queuePostRenderEffect(job, instance && instance.suspense);
    else {
        job.pre = true;
        if (instance) job.id = instance.uid;
        scheduler = ()=>queueJob(job);
    }
    const effect = new (0, _reactivity.ReactiveEffect)(getter, (0, _shared.NOOP), scheduler);
    const scope = (0, _reactivity.getCurrentScope)();
    const unwatch = ()=>{
        effect.stop();
        if (scope) (0, _shared.remove)(scope.effects, effect);
    };
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
    if (cb) {
        if (immediate) job();
        else oldValue = effect.run();
    } else if (flush === "post") queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    else effect.run();
    if (ssrCleanup) ssrCleanup.push(unwatch);
    return unwatch;
}
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = (0, _shared.isString)(source) ? source.includes(".") ? createPathGetter(publicThis, source) : ()=>publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if ((0, _shared.isFunction)(value)) cb = value;
    else {
        cb = value.handler;
        options = value;
    }
    const reset = setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    reset();
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return ()=>{
        let cur = ctx;
        for(let i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function traverse(value, depth = Infinity, seen) {
    if (depth <= 0 || !(0, _shared.isObject)(value) || value["__v_skip"]) return value;
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    depth--;
    if ((0, _reactivity.isRef)(value)) traverse(value.value, depth, seen);
    else if ((0, _shared.isArray)(value)) for(let i = 0; i < value.length; i++)traverse(value[i], depth, seen);
    else if ((0, _shared.isSet)(value) || (0, _shared.isMap)(value)) value.forEach((v1)=>{
        traverse(v1, depth, seen);
    });
    else if ((0, _shared.isPlainObject)(value)) {
        for(const key in value)traverse(value[key], depth, seen);
        for (const key of Object.getOwnPropertySymbols(value))if (Object.prototype.propertyIsEnumerable.call(value, key)) traverse(value[key], depth, seen);
    }
    return value;
}
const isKeepAlive = (vnode)=>vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [
            String,
            RegExp,
            Array
        ],
        exclude: [
            String,
            RegExp,
            Array
        ],
        max: [
            String,
            Number
        ]
    },
    setup (props, { slots }) {
        const instance = getCurrentInstance();
        const sharedContext = instance.ctx;
        if (!sharedContext.renderer) return ()=>{
            const children = slots.default && slots.default();
            return children && children.length === 1 ? children[0] : children;
        };
        const cache = /* @__PURE__ */ new Map();
        const keys = /* @__PURE__ */ new Set();
        let current = null;
        instance.__v_cache = cache;
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement("div");
        sharedContext.activate = (vnode, container, anchor, namespace, optimized)=>{
            const instance2 = vnode.component;
            move(vnode, container, anchor, 0, parentSuspense);
            patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, namespace, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(()=>{
                instance2.isDeactivated = false;
                if (instance2.a) (0, _shared.invokeArrayFns)(instance2.a);
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
            }, parentSuspense);
            devtoolsComponentAdded(instance2);
        };
        sharedContext.deactivate = (vnode)=>{
            const instance2 = vnode.component;
            invalidateMount(instance2.m);
            invalidateMount(instance2.a);
            move(vnode, storageContainer, null, 1, parentSuspense);
            queuePostRenderEffect(()=>{
                if (instance2.da) (0, _shared.invokeArrayFns)(instance2.da);
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
                instance2.isDeactivated = true;
            }, parentSuspense);
            devtoolsComponentAdded(instance2);
        };
        function unmount(vnode) {
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key)=>{
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) pruneCacheEntry(key);
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || !isSameVNodeType(cached, current)) unmount(cached);
            else if (current) resetShapeFlag(current);
            cache.delete(key);
            keys.delete(key);
        }
        watch(()=>[
                props.include,
                props.exclude
            ], ([include, exclude])=>{
            include && pruneCache((name)=>matches(include, name));
            exclude && pruneCache((name)=>!matches(exclude, name));
        }, // prune post-render after `current` has been updated
        {
            flush: "post",
            deep: true
        });
        let pendingCacheKey = null;
        const cacheSubtree = ()=>{
            if (pendingCacheKey != null) {
                if (isSuspense(instance.subTree.type)) queuePostRenderEffect(()=>{
                    cache.set(pendingCacheKey, getInnerChild(instance.subTree));
                }, instance.subTree.suspense);
                else cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(()=>{
            cache.forEach((cached)=>{
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type && cached.key === vnode.key) {
                    resetShapeFlag(vnode);
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return ()=>{
            pendingCacheKey = null;
            if (!slots.default) return null;
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                warn$1(`KeepAlive should contain exactly one component child.`);
                current = null;
                return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include, exclude, max } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128) rawVNode.ssContent = vnode;
            }
            pendingCacheKey = key;
            if (cachedVNode) {
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) setTransitionHooks(vnode, vnode.transition);
                vnode.shapeFlag |= 512;
                keys.delete(key);
                keys.add(key);
            } else {
                keys.add(key);
                if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
            }
            vnode.shapeFlag |= 256;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
    }
};
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if ((0, _shared.isArray)(pattern)) return pattern.some((p)=>matches(p, name));
    else if ((0, _shared.isString)(pattern)) return pattern.split(",").includes(name);
    else if ((0, _shared.isRegExp)(pattern)) return pattern.test(name);
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = ()=>{
        let current = target;
        while(current){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
        let current = target.parent;
        while(current && current.parent){
            if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(()=>{
        (0, _shared.remove)(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    vnode.shapeFlag &= -257;
    vnode.shapeFlag &= -513;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey = Symbol("_enterCb");
function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: /* @__PURE__ */ new Map()
    };
    onMounted(()=>{
        state.isMounted = true;
    });
    onBeforeUnmount(()=>{
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [
    Function,
    Array
];
const BaseTransitionPropsValidators = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance)=>{
    const subTree = instance.subTree;
    return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: BaseTransitionPropsValidators,
    setup (props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        return ()=>{
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) return;
            let child = children[0];
            if (children.length > 1) {
                let hasFound = false;
                for (const c of children)if (c.type !== Comment) {
                    if (hasFound) {
                        warn$1("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                        break;
                    }
                    child = c;
                    hasFound = true;
                }
            }
            const rawProps = (0, _reactivity.toRaw)(props);
            const { mode } = rawProps;
            if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") warn$1(`invalid <transition> mode: ${mode}`);
            if (state.isLeaving) return emptyPlaceholder(child);
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) return emptyPlaceholder(child);
            let enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance, // #11061, ensure enterHooks is fresh after clone
            (hooks)=>enterHooks = hooks);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild) && recursiveGetSubtree(instance).type !== Comment) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                setTransitionHooks(oldInnerChild, leavingHooks);
                if (mode === "out-in" && innerChild.type !== Comment) {
                    state.isLeaving = true;
                    leavingHooks.afterLeave = ()=>{
                        state.isLeaving = false;
                        if (instance.update.active !== false) {
                            instance.effect.dirty = true;
                            instance.update();
                        }
                    };
                    return emptyPlaceholder(child);
                } else if (mode === "in-out" && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave)=>{
                    const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                    leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                    el[leaveCbKey] = ()=>{
                        earlyRemove();
                        el[leaveCbKey] = void 0;
                        delete enterHooks.delayedLeave;
                    };
                    enterHooks.delayedLeave = delayedLeave;
                };
            }
            return child;
        };
    }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = /* @__PURE__ */ Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args)=>{
        hook && callWithAsyncErrorHandling(hook, instance, 9, args);
    };
    const callAsyncHook = (hook, args)=>{
        const done = args[1];
        callHook(hook, args);
        if ((0, _shared.isArray)(hook)) {
            if (hook.every((hook2)=>hook2.length <= 1)) done();
        } else if (hook.length <= 1) done();
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter (el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) hook = onBeforeAppear || onBeforeEnter;
                else return;
            }
            if (el[leaveCbKey]) el[leaveCbKey](true);
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) leavingVNode.el[leaveCbKey]();
            callHook(hook, [
                el
            ]);
        },
        enter (el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                } else return;
            }
            let called = false;
            const done = el[enterCbKey] = (cancelled)=>{
                if (called) return;
                called = true;
                if (cancelled) callHook(cancelHook, [
                    el
                ]);
                else callHook(afterHook, [
                    el
                ]);
                if (hooks.delayedLeave) hooks.delayedLeave();
                el[enterCbKey] = void 0;
            };
            if (hook) callAsyncHook(hook, [
                el,
                done
            ]);
            else done();
        },
        leave (el, remove) {
            const key2 = String(vnode.key);
            if (el[enterCbKey]) el[enterCbKey](true);
            if (state.isUnmounting) return remove();
            callHook(onBeforeLeave, [
                el
            ]);
            let called = false;
            const done = el[leaveCbKey] = (cancelled)=>{
                if (called) return;
                called = true;
                remove();
                if (cancelled) callHook(onLeaveCancelled, [
                    el
                ]);
                else callHook(onAfterLeave, [
                    el
                ]);
                el[leaveCbKey] = void 0;
                if (leavingVNodesCache[key2] === vnode) delete leavingVNodesCache[key2];
            };
            leavingVNodesCache[key2] = vnode;
            if (onLeave) callAsyncHook(onLeave, [
                el,
                done
            ]);
            else done();
        },
        clone (vnode2) {
            const hooks2 = resolveTransitionHooks(vnode2, props, state, instance, postClone);
            if (postClone) postClone(hooks2);
            return hooks2;
        }
    };
    return hooks;
}
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    if (!isKeepAlive(vnode)) return vnode;
    if (0, vnode.component) return vnode.component.subTree;
    const { shapeFlag, children } = vnode;
    if (children) {
        if (shapeFlag & 16) return children[0];
        if (shapeFlag & 32 && (0, _shared.isFunction)(children.default)) return children.default();
    }
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) setTransitionHooks(vnode.component.subTree, hooks);
    else if (vnode.shapeFlag & 128) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for(let i = 0; i < children.length; i++){
        let child = children[i];
        const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
        if (child.type === Fragment) {
            if (child.patchFlag & 128) keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
        } else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, {
            key
        }) : child);
    }
    if (keyedFragmentCount > 1) for(let i = 0; i < ret.length; i++)ret[i].patchFlag = -2;
    return ret;
}
const isTeleport = (type)=>type.__isTeleport;
const isTeleportDisabled = (props)=>props && (props.disabled || props.disabled === "");
const isTargetSVG = (target)=>typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target)=>typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select)=>{
    const targetSelector = props && props.to;
    if ((0, _shared.isString)(targetSelector)) {
        if (!select) {
            warn$1(`Current renderer does not support string target for Teleports. (missing querySelector renderer option)`);
            return null;
        } else {
            const target = select(targetSelector);
            if (!target && !isTeleportDisabled(props)) warn$1(`Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`);
            return target;
        }
    } else {
        if (!targetSelector && !isTeleportDisabled(props)) warn$1(`Invalid Teleport target: ${targetSelector}`);
        return targetSelector;
    }
};
const TeleportImpl = {
    name: "Teleport",
    __isTeleport: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag, children, dynamicChildren } = n2;
        if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            const placeholder = n2.el = createComment("teleport start");
            const mainAnchor = n2.anchor = createComment("teleport end");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
                insert(targetAnchor, target);
                if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
                else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
            } else if (!disabled) warn$1("Invalid Teleport target on mount:", target, `(${typeof target})`);
            const mount = (container2, anchor2)=>{
                if (shapeFlag & 16) mountChildren(children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            };
            if (disabled) mount(container, mainAnchor);
            else if (target) mount(target, targetAnchor);
        } else {
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
            else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
            if (dynamicChildren) {
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
                traverseStaticChildren(n1, n2, true);
            } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
            if (disabled) {
                if (!wasDisabled) moveTeleport(n2, container, mainAnchor, internals, 1);
                else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
            } else {
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                    if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0);
                    else warn$1("Invalid Teleport target on update:", target, `(${typeof target})`);
                } else if (wasDisabled) moveTeleport(n2, target, targetAnchor, internals, 1);
            }
        }
        updateCssVars(n2);
    },
    remove (vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
        const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
        if (target) hostRemove(targetAnchor);
        doRemove && hostRemove(anchor);
        if (shapeFlag & 16) {
            const shouldRemove = doRemove || !isTeleportDisabled(props);
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
    if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2;
    if (isReorder) insert(el, container, parentAnchor);
    if (!isReorder || isTeleportDisabled(props)) {
        if (shapeFlag & 16) for(let i = 0; i < children.length; i++)move(children[i], container, parentAnchor, 2);
    }
    if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = vnode.target = resolveTarget(vnode.props, querySelector);
    if (target) {
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            } else {
                vnode.anchor = nextSibling(node);
                let targetAnchor = targetNode;
                while(targetAnchor){
                    targetAnchor = nextSibling(targetAnchor);
                    if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
                        vnode.targetAnchor = targetAnchor;
                        target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                        break;
                    }
                }
                hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
        }
        updateCssVars(vnode);
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode) {
    const ctx = vnode.ctx;
    if (ctx && ctx.ut) {
        let node = vnode.children[0].el;
        while(node && node !== vnode.targetAnchor){
            if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
            node = node.nextSibling;
        }
        ctx.ut();
    }
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || (0, _shared.EMPTY_ARR) : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
    return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
        n1.shapeFlag &= -257;
        n2.shapeFlag &= -513;
        return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args)=>{
    return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
};
const normalizeKey = ({ key })=>key != null ? key : null;
const normalizeRef = ({ ref, ref_key, ref_for })=>{
    if (typeof ref === "number") ref = "" + ref;
    return ref != null ? (0, _shared.isString)(ref) || (0, _reactivity.isRef)(ref) || (0, _shared.isFunction)(ref) ? {
        i: currentRenderingInstance,
        r: ref,
        k: ref_key,
        f: !!ref_for
    } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null,
        ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        if (shapeFlag & 128) type.normalize(vnode);
    } else if (children) vnode.shapeFlag |= (0, _shared.isString)(children) ? 8 : 16;
    if (vnode.key !== vnode.key) warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) currentBlock.push(vnode);
    return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (!type) warn$1(`Invalid vnode type when creating vnode: ${type}.`);
        type = Comment;
    }
    if (isVNode(type)) {
        const cloned = cloneVNode(type, props, true);
        if (children) normalizeChildren(cloned, children);
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned;
            else currentBlock.push(cloned);
        }
        cloned.patchFlag = -2;
        return cloned;
    }
    if (isClassComponent(type)) type = type.__vccOpts;
    if (props) {
        props = guardReactiveProps(props);
        let { class: klass, style } = props;
        if (klass && !(0, _shared.isString)(klass)) props.class = (0, _shared.normalizeClass)(klass);
        if ((0, _shared.isObject)(style)) {
            if ((0, _reactivity.isProxy)(style) && !(0, _shared.isArray)(style)) style = (0, _shared.extend)({}, style);
            props.style = (0, _shared.normalizeStyle)(style);
        }
    }
    const shapeFlag = (0, _shared.isString)(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : (0, _shared.isObject)(type) ? 4 : (0, _shared.isFunction)(type) ? 2 : 0;
    if (shapeFlag & 4 && (0, _reactivity.isProxy)(type)) {
        type = (0, _reactivity.toRaw)(type);
        warn$1(`Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props) return null;
    return (0, _reactivity.isProxy)(props) || isInternalObject(props) ? (0, _shared.extend)({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
    const { props, ref, patchFlag, children, transition } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref ? (0, _shared.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [
            ref,
            normalizeRef(extraProps)
        ] : normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: patchFlag === -1 && (0, _shared.isArray)(children) ? children.map(deepCloneVNode) : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx,
        ce: vnode.ce
    };
    if (transition && cloneTransition) setTransitionHooks(cloned, transition.clone(cloned));
    return cloned;
}
function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if ((0, _shared.isArray)(vnode.children)) cloned.children = vnode.children.map(deepCloneVNode);
    return cloned;
}
function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") return createVNode(Comment);
    else if ((0, _shared.isArray)(child)) return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
    else if (typeof child === "object") return cloneIfMounted(child);
    else return createVNode(Text, null, String(child));
}
function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) children = null;
    else if ((0, _shared.isArray)(children)) type = 16;
    else if (typeof children === "object") {
        if (shapeFlag & 65) {
            const slot = children.default;
            if (slot) {
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        } else {
            type = 32;
            const slotFlag = children._;
            if (!slotFlag && !isInternalObject(children)) children._ctx = currentRenderingInstance;
            else if (slotFlag === 3 && currentRenderingInstance) {
                if (currentRenderingInstance.slots._ === 1) children._ = 1;
                else {
                    children._ = 2;
                    vnode.patchFlag |= 1024;
                }
            }
        }
    } else if ((0, _shared.isFunction)(children)) {
        children = {
            default: children,
            _ctx: currentRenderingInstance
        };
        type = 32;
    } else {
        children = String(children);
        if (shapeFlag & 64) {
            type = 16;
            children = [
                createTextVNode(children)
            ];
        } else type = 8;
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for(let i = 0; i < args.length; i++){
        const toMerge = args[i];
        for(const key in toMerge){
            if (key === "class") {
                if (ret.class !== toMerge.class) ret.class = (0, _shared.normalizeClass)([
                    ret.class,
                    toMerge.class
                ]);
            } else if (key === "style") ret.style = (0, _shared.normalizeStyle)([
                ret.style,
                toMerge.style
            ]);
            else if ((0, _shared.isOn)(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming && existing !== incoming && !((0, _shared.isArray)(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
            } else if (key !== "") ret[key] = toMerge[key];
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
        vnode,
        prevVNode
    ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        // to be immediately set
        next: null,
        subTree: null,
        // will be set synchronously right after creation
        effect: null,
        update: null,
        // will be set synchronously right after creation
        scope: new (0, _reactivity.EffectScope)(true),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        // to be set immediately
        emitted: null,
        // props default value
        propsDefaults: (0, _shared.EMPTY_OBJ),
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: (0, _shared.EMPTY_OBJ),
        data: (0, _shared.EMPTY_OBJ),
        props: (0, _shared.EMPTY_OBJ),
        attrs: (0, _shared.EMPTY_OBJ),
        slots: (0, _shared.EMPTY_OBJ),
        refs: (0, _shared.EMPTY_OBJ),
        setupState: (0, _shared.EMPTY_OBJ),
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    instance.ctx = createDevRenderContext(instance);
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (vnode.ce) vnode.ce(instance);
    return instance;
}
let currentInstance = null;
const getCurrentInstance = ()=>currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
    const g = (0, _shared.getGlobalThis)();
    const registerGlobalSetter = (key, setter)=>{
        let setters;
        if (!(setters = g[key])) setters = g[key] = [];
        setters.push(setter);
        return (v1)=>{
            if (setters.length > 1) setters.forEach((set)=>set(v1));
            else setters[0](v1);
        };
    };
    internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v1)=>currentInstance = v1);
    setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v1)=>isInSSRComponentSetup = v1);
}const setCurrentInstance = (instance)=>{
    const prev = currentInstance;
    internalSetCurrentInstance(instance);
    instance.scope.on();
    return ()=>{
        instance.scope.off();
        internalSetCurrentInstance(prev);
    };
};
const unsetCurrentInstance = ()=>{
    currentInstance && currentInstance.scope.off();
    internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ (0, _shared.makeMap)("slot,component");
function validateComponentName(name, { isNativeTag }) {
    if (isBuiltInTag(name) || isNativeTag(name)) warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isSSR && setInSSRSetupState(isSSR);
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isSSR && setInSSRSetupState(false);
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if (Component.name) validateComponentName(Component.name, instance.appContext.config);
    if (Component.components) {
        const names = Object.keys(Component.components);
        for(let i = 0; i < names.length; i++)validateComponentName(names[i], instance.appContext.config);
    }
    if (Component.directives) {
        const names = Object.keys(Component.directives);
        for(let i = 0; i < names.length; i++)validateDirectiveName(names[i]);
    }
    if (Component.compilerOptions && isRuntimeOnly()) warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    exposePropsOnRenderContext(instance);
    const { setup } = Component;
    if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        const reset = setCurrentInstance(instance);
        (0, _reactivity.pauseTracking)();
        const setupResult = callWithErrorHandling(setup, instance, 0, [
            (0, _reactivity.shallowReadonly)(instance.props),
            setupContext
        ]);
        (0, _reactivity.resetTracking)();
        reset();
        if ((0, _shared.isPromise)(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) return setupResult.then((resolvedResult)=>{
                handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e)=>{
                handleError(e, instance, 0);
            });
            else {
                instance.asyncDep = setupResult;
                if (!instance.suspense) {
                    const name = (_a = Component.name) != null ? _a : "Anonymous";
                    warn$1(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
                }
            }
        } else handleSetupResult(instance, setupResult, isSSR);
    } else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
    if ((0, _shared.isFunction)(setupResult)) {
        if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
        else instance.render = setupResult;
    } else if ((0, _shared.isObject)(setupResult)) {
        if (isVNode(setupResult)) warn$1(`setup() should not return VNodes directly - return a render function instead.`);
        instance.devtoolsRawSetupState = setupResult;
        instance.setupState = (0, _reactivity.proxyRefs)(setupResult);
        exposeSetupStateOnRenderContext(instance);
    } else if (setupResult !== void 0) warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = (i)=>{
        if (i.render._rc) i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    };
}
const isRuntimeOnly = ()=>!compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
        if (!isSSR && compile && !Component.render) {
            const template = Component.template || resolveMergedOptions(instance).template;
            if (template) {
                startMeasure(instance, `compile`);
                const { isCustomElement, compilerOptions } = instance.appContext.config;
                const { delimiters, compilerOptions: componentCompilerOptions } = Component;
                const finalCompilerOptions = (0, _shared.extend)((0, _shared.extend)({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
                endMeasure(instance, `compile`);
            }
        }
        instance.render = Component.render || (0, _shared.NOOP);
        if (installWithProxy) installWithProxy(instance);
    }
    if (__VUE_OPTIONS_API__ && true) {
        const reset = setCurrentInstance(instance);
        (0, _reactivity.pauseTracking)();
        try {
            applyOptions(instance);
        } finally{
            (0, _reactivity.resetTracking)();
            reset();
        }
    }
    if (!Component.render && instance.render === (0, _shared.NOOP) && !isSSR) {
        if (!compile && Component.template) warn$1(`Component provided template option but runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
        else warn$1(`Component is missing template or render function: `, Component);
    }
}
const attrsProxyHandlers = {
    get (target, key) {
        markAttrsAccessed();
        (0, _reactivity.track)(target, "get", "");
        return target[key];
    },
    set () {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
    },
    deleteProperty () {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
    }
};
function getSlotsProxy(instance) {
    return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
        get (target, key) {
            (0, _reactivity.track)(instance, "get", "$slots");
            return target[key];
        }
    }));
}
function createSetupContext(instance) {
    const expose = (exposed)=>{
        if (instance.exposed) warn$1(`expose() should be called only once per setup().`);
        if (exposed != null) {
            let exposedType = typeof exposed;
            if (exposedType === "object") {
                if ((0, _shared.isArray)(exposed)) exposedType = "array";
                else if ((0, _reactivity.isRef)(exposed)) exposedType = "ref";
            }
            if (exposedType !== "object") warn$1(`expose() should be passed a plain object, received ${exposedType}.`);
        }
        instance.exposed = exposed || {};
    };
    {
        let attrsProxy;
        return Object.freeze({
            get attrs () {
                return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
            },
            get slots () {
                return getSlotsProxy(instance);
            },
            get emit () {
                return (event, ...args)=>instance.emit(event, ...args);
            },
            expose
        });
    }
}
function getComponentPublicInstance(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy((0, _reactivity.proxyRefs)((0, _reactivity.markRaw)(instance.exposed)), {
        get (target, key) {
            if (key in target) return target[key];
            else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
        },
        has (target, key) {
            return key in target || key in publicPropertiesMap;
        }
    }));
    else return instance.proxy;
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str)=>str.replace(classifyRE, (c)=>c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
    return (0, _shared.isFunction)(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) name = match[1];
    }
    if (!name && instance && instance.parent) {
        const inferFromRegistry = (registry)=>{
            for(const key in registry){
                if (registry[key] === Component) return key;
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return (0, _shared.isFunction)(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions)=>{
    const c = (0, _reactivity.computed)(getterOrOptions, debugOptions, isInSSRComponentSetup);
    {
        const i = getCurrentInstance();
        if (i && i.appContext.config.warnRecursiveComputed) c._warnRecursive = true;
    }
    return c;
};
function useModel(props, name, options = (0, _shared.EMPTY_OBJ)) {
    const i = getCurrentInstance();
    if (!i) {
        warn$1(`useModel() called without active instance.`);
        return (0, _reactivity.ref)();
    }
    if (!i.propsOptions[0][name]) {
        warn$1(`useModel() called with prop "${name}" which is not declared.`);
        return (0, _reactivity.ref)();
    }
    const camelizedName = (0, _shared.camelize)(name);
    const hyphenatedName = (0, _shared.hyphenate)(name);
    const res = (0, _reactivity.customRef)((track, trigger)=>{
        let localValue;
        watchSyncEffect(()=>{
            const propValue = props[name];
            if ((0, _shared.hasChanged)(localValue, propValue)) {
                localValue = propValue;
                trigger();
            }
        });
        return {
            get () {
                track();
                return options.get ? options.get(localValue) : localValue;
            },
            set (value) {
                const rawProps = i.vnode.props;
                if (!(rawProps && // check if parent has passed v-model
                (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps)) && (0, _shared.hasChanged)(value, localValue)) {
                    localValue = value;
                    trigger();
                }
                i.emit(`update:${name}`, options.set ? options.set(value) : value);
            }
        };
    });
    const modifierKey = name === "modelValue" ? "modelModifiers" : `${name}Modifiers`;
    res[Symbol.iterator] = ()=>{
        let i2 = 0;
        return {
            next () {
                if (i2 < 2) return {
                    value: i2++ ? props[modifierKey] || {} : res,
                    done: false
                };
                else return {
                    done: true
                };
            }
        };
    };
    return res;
}
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if ((0, _shared.isObject)(propsOrChildren) && !(0, _shared.isArray)(propsOrChildren)) {
            if (isVNode(propsOrChildren)) return createVNode(type, null, [
                propsOrChildren
            ]);
            return createVNode(type, propsOrChildren);
        } else return createVNode(type, null, propsOrChildren);
    } else {
        if (l > 3) children = Array.prototype.slice.call(arguments, 2);
        else if (l === 3 && isVNode(children)) children = [
            children
        ];
        return createVNode(type, propsOrChildren, children);
    }
}
function initCustomFormatter() {
    if (typeof window === "undefined") return;
    const vueStyle = {
        style: "color:#3ba776"
    };
    const numberStyle = {
        style: "color:#1677ff"
    };
    const stringStyle = {
        style: "color:#f5222d"
    };
    const keywordStyle = {
        style: "color:#eb2f96"
    };
    const formatter = {
        header (obj) {
            if (!(0, _shared.isObject)(obj)) return null;
            if (obj.__isVue) return [
                "div",
                vueStyle,
                `VueInstance`
            ];
            else if ((0, _reactivity.isRef)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    genRefFlag(obj)
                ],
                "<",
                formatValue(obj.value),
                `>`
            ];
            else if ((0, _reactivity.isReactive)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    (0, _reactivity.isShallow)(obj) ? "ShallowReactive" : "Reactive"
                ],
                "<",
                formatValue(obj),
                `>${(0, _reactivity.isReadonly)(obj) ? ` (readonly)` : ``}`
            ];
            else if ((0, _reactivity.isReadonly)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    (0, _reactivity.isShallow)(obj) ? "ShallowReadonly" : "Readonly"
                ],
                "<",
                formatValue(obj),
                ">"
            ];
            return null;
        },
        hasBody (obj) {
            return obj && obj.__isVue;
        },
        body (obj) {
            if (obj && obj.__isVue) return [
                "div",
                {},
                ...formatInstance(obj.$)
            ];
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) blocks.push(createInstanceBlock("props", (0, _reactivity.toRaw)(instance.props)));
        if (instance.setupState !== (0, _shared.EMPTY_OBJ)) blocks.push(createInstanceBlock("setup", instance.setupState));
        if (instance.data !== (0, _shared.EMPTY_OBJ)) blocks.push(createInstanceBlock("data", (0, _reactivity.toRaw)(instance.data)));
        const computed = extractKeys(instance, "computed");
        if (computed) blocks.push(createInstanceBlock("computed", computed));
        const injected = extractKeys(instance, "inject");
        if (injected) blocks.push(createInstanceBlock("injected", injected));
        blocks.push([
            "div",
            {},
            [
                "span",
                {
                    style: keywordStyle.style + ";opacity:0.66"
                },
                "$ (internal): "
            ],
            [
                "object",
                {
                    object: instance
                }
            ]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = (0, _shared.extend)({}, target);
        if (!Object.keys(target).length) return [
            "span",
            {}
        ];
        return [
            "div",
            {
                style: "line-height:1.25em;margin-bottom:0.6em"
            },
            [
                "div",
                {
                    style: "color:#476582"
                },
                type
            ],
            [
                "div",
                {
                    style: "padding-left:1.25em"
                },
                ...Object.keys(target).map((key)=>{
                    return [
                        "div",
                        {},
                        [
                            "span",
                            keywordStyle,
                            key + ": "
                        ],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v1, asRaw = true) {
        if (typeof v1 === "number") return [
            "span",
            numberStyle,
            v1
        ];
        else if (typeof v1 === "string") return [
            "span",
            stringStyle,
            JSON.stringify(v1)
        ];
        else if (typeof v1 === "boolean") return [
            "span",
            keywordStyle,
            v1
        ];
        else if ((0, _shared.isObject)(v1)) return [
            "object",
            {
                object: asRaw ? (0, _reactivity.toRaw)(v1) : v1
            }
        ];
        else return [
            "span",
            stringStyle,
            String(v1)
        ];
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if ((0, _shared.isFunction)(Comp)) return;
        const extracted = {};
        for(const key in instance.ctx)if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ((0, _shared.isArray)(opts) && opts.includes(key) || (0, _shared.isObject)(opts) && key in opts) return true;
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
        if (Comp.mixins && Comp.mixins.some((m)=>isKeyOfType(m, key, type))) return true;
    }
    function genRefFlag(v1) {
        if ((0, _reactivity.isShallow)(v1)) return `ShallowRef`;
        if (v1.effect) return `ComputedRef`;
        return `Ref`;
    }
    if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter);
    else window.devtoolsFormatters = [
        formatter
    ];
}
function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) return cached;
    const ret = render();
    ret.memo = memo.slice();
    ret.memoIndex = index;
    return cache[index] = ret;
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) return false;
    for(let i = 0; i < prev.length; i++){
        if ((0, _shared.hasChanged)(prev[i], memo[i])) return false;
    }
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(cached);
    return true;
}
const version = "3.4.30";
const warn = warn$1;
const ErrorTypeStrings = ErrorTypeStrings$1;
const devtools = devtools$1;
const setDevtoolsHook = setDevtoolsHook$1;
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode: isVNode,
    normalizeVNode,
    getComponentPublicInstance
};
const ssrUtils = _ssrUtils;
const resolveFilter = null;
const compatUtils = null;
const DeprecationTypes = null;

},{"@vue/reactivity":"d7UXQ","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7UXQ":[function(require,module,exports) {
/**
* @vue/reactivity v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>EffectScope);
parcelHelpers.export(exports, "ITERATE_KEY", ()=>ITERATE_KEY);
parcelHelpers.export(exports, "ReactiveEffect", ()=>ReactiveEffect);
parcelHelpers.export(exports, "ReactiveFlags", ()=>ReactiveFlags);
parcelHelpers.export(exports, "TrackOpTypes", ()=>TrackOpTypes);
parcelHelpers.export(exports, "TriggerOpTypes", ()=>TriggerOpTypes);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "customRef", ()=>customRef);
parcelHelpers.export(exports, "deferredComputed", ()=>deferredComputed);
parcelHelpers.export(exports, "effect", ()=>effect);
parcelHelpers.export(exports, "effectScope", ()=>effectScope);
parcelHelpers.export(exports, "enableTracking", ()=>enableTracking);
parcelHelpers.export(exports, "getCurrentScope", ()=>getCurrentScope);
parcelHelpers.export(exports, "isProxy", ()=>isProxy);
parcelHelpers.export(exports, "isReactive", ()=>isReactive);
parcelHelpers.export(exports, "isReadonly", ()=>isReadonly);
parcelHelpers.export(exports, "isRef", ()=>isRef);
parcelHelpers.export(exports, "isShallow", ()=>isShallow);
parcelHelpers.export(exports, "markRaw", ()=>markRaw);
parcelHelpers.export(exports, "onScopeDispose", ()=>onScopeDispose);
parcelHelpers.export(exports, "pauseScheduling", ()=>pauseScheduling);
parcelHelpers.export(exports, "pauseTracking", ()=>pauseTracking);
parcelHelpers.export(exports, "proxyRefs", ()=>proxyRefs);
parcelHelpers.export(exports, "reactive", ()=>reactive);
parcelHelpers.export(exports, "readonly", ()=>readonly);
parcelHelpers.export(exports, "ref", ()=>ref);
parcelHelpers.export(exports, "resetScheduling", ()=>resetScheduling);
parcelHelpers.export(exports, "resetTracking", ()=>resetTracking);
parcelHelpers.export(exports, "shallowReactive", ()=>shallowReactive);
parcelHelpers.export(exports, "shallowReadonly", ()=>shallowReadonly);
parcelHelpers.export(exports, "shallowRef", ()=>shallowRef);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "toRaw", ()=>toRaw);
parcelHelpers.export(exports, "toRef", ()=>toRef);
parcelHelpers.export(exports, "toRefs", ()=>toRefs);
parcelHelpers.export(exports, "toValue", ()=>toValue);
parcelHelpers.export(exports, "track", ()=>track);
parcelHelpers.export(exports, "trigger", ()=>trigger);
parcelHelpers.export(exports, "triggerRef", ()=>triggerRef);
parcelHelpers.export(exports, "unref", ()=>unref);
var _shared = require("@vue/shared");
function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
    constructor(detached = false){
        this.detached = detached;
        /**
     * @internal
     */ this._active = true;
        /**
     * @internal
     */ this.effects = [];
        /**
     * @internal
     */ this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
    get active() {
        return this._active;
    }
    run(fn) {
        if (this._active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            } finally{
                activeEffectScope = currentEffectScope;
            }
        } else warn(`cannot run an inactive effect scope.`);
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ on() {
        activeEffectScope = this;
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this._active) {
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].stop();
            for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
            if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(true);
            if (!this.detached && this.parent && !fromParent) {
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = void 0;
            this._active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) scope.effects.push(effect);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) activeEffectScope.cleanups.push(fn);
    else warn(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
}
let activeEffect;
class ReactiveEffect {
    constructor(fn, trigger, scheduler, scope){
        this.fn = fn;
        this.trigger = trigger;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        /**
     * @internal
     */ this._dirtyLevel = 5;
        /**
     * @internal
     */ this._trackId = 0;
        /**
     * @internal
     */ this._runnings = 0;
        /**
     * @internal
     */ this._shouldSchedule = false;
        /**
     * @internal
     */ this._depsLength = 0;
        recordEffectScope(this, scope);
    }
    get dirty() {
        if (this._dirtyLevel === 2) return false;
        if (this._dirtyLevel === 3 || this._dirtyLevel === 4) {
            this._dirtyLevel = 1;
            pauseTracking();
            for(let i = 0; i < this._depsLength; i++){
                const dep = this.deps[i];
                if (dep.computed) {
                    if (dep.computed.effect._dirtyLevel === 2) {
                        resetTracking();
                        return true;
                    }
                    triggerComputed(dep.computed);
                    if (this._dirtyLevel >= 5) break;
                }
            }
            if (this._dirtyLevel === 1) this._dirtyLevel = 0;
            resetTracking();
        }
        return this._dirtyLevel >= 5;
    }
    set dirty(v) {
        this._dirtyLevel = v ? 5 : 0;
    }
    run() {
        this._dirtyLevel = 0;
        if (!this.active) return this.fn();
        let lastShouldTrack = shouldTrack;
        let lastEffect = activeEffect;
        try {
            shouldTrack = true;
            activeEffect = this;
            this._runnings++;
            preCleanupEffect(this);
            return this.fn();
        } finally{
            postCleanupEffect(this);
            this._runnings--;
            activeEffect = lastEffect;
            shouldTrack = lastShouldTrack;
        }
    }
    stop() {
        if (this.active) {
            preCleanupEffect(this);
            postCleanupEffect(this);
            this.onStop && this.onStop();
            this.active = false;
        }
    }
}
function triggerComputed(computed) {
    return computed.value;
}
function preCleanupEffect(effect2) {
    effect2._trackId++;
    effect2._depsLength = 0;
}
function postCleanupEffect(effect2) {
    if (effect2.deps.length > effect2._depsLength) {
        for(let i = effect2._depsLength; i < effect2.deps.length; i++)cleanupDepEffect(effect2.deps[i], effect2);
        effect2.deps.length = effect2._depsLength;
    }
}
function cleanupDepEffect(dep, effect2) {
    const trackId = dep.get(effect2);
    if (trackId !== void 0 && effect2._trackId !== trackId) {
        dep.delete(effect2);
        if (dep.size === 0) dep.cleanup();
    }
}
function effect(fn, options) {
    if (fn.effect instanceof ReactiveEffect) fn = fn.effect.fn;
    const _effect = new ReactiveEffect(fn, (0, _shared.NOOP), ()=>{
        if (_effect.dirty) _effect.run();
    });
    if (options) {
        (0, _shared.extend)(_effect, options);
        if (options.scope) recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) _effect.run();
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
let pauseScheduleStack = 0;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function pauseScheduling() {
    pauseScheduleStack++;
}
function resetScheduling() {
    pauseScheduleStack--;
    while(!pauseScheduleStack && queueEffectSchedulers.length)queueEffectSchedulers.shift()();
}
function trackEffect(effect2, dep, debuggerEventExtraInfo) {
    var _a;
    if (dep.get(effect2) !== effect2._trackId) {
        dep.set(effect2, effect2._trackId);
        const oldDep = effect2.deps[effect2._depsLength];
        if (oldDep !== dep) {
            if (oldDep) cleanupDepEffect(oldDep, effect2);
            effect2.deps[effect2._depsLength++] = dep;
        } else effect2._depsLength++;
        (_a = effect2.onTrack) == null || _a.call(effect2, (0, _shared.extend)({
            effect: effect2
        }, debuggerEventExtraInfo));
    }
}
const queueEffectSchedulers = [];
function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
    var _a;
    pauseScheduling();
    for (const effect2 of dep.keys()){
        let tracking;
        if (!dep.computed && effect2.computed) {
            if (effect2._runnings > 0 && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
                effect2._dirtyLevel = 2;
                continue;
            }
        }
        if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
            effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
            if (effect2.computed && effect2._dirtyLevel === 2) effect2._shouldSchedule = true;
            effect2._dirtyLevel = dirtyLevel;
        }
        if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
            (_a = effect2.onTrigger) == null || _a.call(effect2, (0, _shared.extend)({
                effect: effect2
            }, debuggerEventExtraInfo));
            effect2.trigger();
            if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 3) {
                effect2._shouldSchedule = false;
                if (effect2.scheduler) queueEffectSchedulers.push(effect2.scheduler);
            }
        }
    }
    resetScheduling();
}
const createDep = (cleanup, computed)=>{
    const dep = /* @__PURE__ */ new Map();
    dep.cleanup = cleanup;
    dep.computed = computed;
    return dep;
};
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        let dep = depsMap.get(key);
        if (!dep) depsMap.set(key, dep = createDep(()=>depsMap.delete(key)));
        trackEffect(activeEffect, dep, {
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    let deps = [];
    if (type === "clear") deps = [
        ...depsMap.values()
    ];
    else if (key === "length" && (0, _shared.isArray)(target)) {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key2)=>{
            if (key2 === "length" || !(0, _shared.isSymbol)(key2) && key2 >= newLength) deps.push(dep);
        });
    } else {
        if (key !== void 0) deps.push(depsMap.get(key));
        switch(type){
            case "add":
                if (!(0, _shared.isArray)(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if ((0, _shared.isMap)(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if ((0, _shared.isIntegerKey)(key)) deps.push(depsMap.get("length"));
                break;
            case "delete":
                if (!(0, _shared.isArray)(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if ((0, _shared.isMap)(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if ((0, _shared.isMap)(target)) deps.push(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    pauseScheduling();
    for (const dep of deps)if (dep) triggerEffects(dep, 5, {
        target,
        type,
        key,
        newValue,
        oldValue,
        oldTarget
    });
    resetScheduling();
}
function getDepFromReactive(object, key) {
    const depsMap = targetMap.get(object);
    return depsMap && depsMap.get(key);
}
const isNonTrackableKeys = /* @__PURE__ */ (0, _shared.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key)=>key !== "arguments" && key !== "caller").map((key)=>Symbol[key]).filter((0, _shared.isSymbol)));
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get", i + "");
            const res = arr[key](...args);
            if (res === -1 || res === false) return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            pauseScheduling();
            const res = toRaw(this)[key].apply(this, args);
            resetScheduling();
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function hasOwnProperty(key) {
    if (!(0, _shared.isSymbol)(key)) key = String(key);
    const obj = toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
    constructor(_isReadonly = false, _isShallow = false){
        this._isReadonly = _isReadonly;
        this._isShallow = _isShallow;
    }
    get(target, key, receiver) {
        const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
        if (key === "__v_isReactive") return !isReadonly2;
        else if (key === "__v_isReadonly") return isReadonly2;
        else if (key === "__v_isShallow") return isShallow2;
        else if (key === "__v_raw") {
            if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
            // this means the reciever is a user proxy of the reactive proxy
            Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
            return;
        }
        const targetIsArray = (0, _shared.isArray)(target);
        if (!isReadonly2) {
            if (targetIsArray && (0, _shared.hasOwn)(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
            if (key === "hasOwnProperty") return hasOwnProperty;
        }
        const res = Reflect.get(target, key, receiver);
        if ((0, _shared.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly2) track(target, "get", key);
        if (isShallow2) return res;
        if (isRef(res)) return targetIsArray && (0, _shared.isIntegerKey)(key) ? res : res.value;
        if ((0, _shared.isObject)(res)) return isReadonly2 ? readonly(res) : reactive(res);
        return res;
    }
}
class MutableReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(false, isShallow2);
    }
    set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!this._isShallow) {
            const isOldValueReadonly = isReadonly(oldValue);
            if (!isShallow(value) && !isReadonly(value)) {
                oldValue = toRaw(oldValue);
                value = toRaw(value);
            }
            if (!(0, _shared.isArray)(target) && isRef(oldValue) && !isRef(value)) {
                if (isOldValueReadonly) return false;
                else {
                    oldValue.value = value;
                    return true;
                }
            }
        }
        const hadKey = (0, _shared.isArray)(target) && (0, _shared.isIntegerKey)(key) ? Number(key) < target.length : (0, _shared.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    }
    deleteProperty(target, key) {
        const hadKey = (0, _shared.hasOwn)(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
        return result;
    }
    has(target, key) {
        const result = Reflect.has(target, key);
        if (!(0, _shared.isSymbol)(key) || !builtInSymbols.has(key)) track(target, "has", key);
        return result;
    }
    ownKeys(target) {
        track(target, "iterate", (0, _shared.isArray)(target) ? "length" : ITERATE_KEY);
        return Reflect.ownKeys(target);
    }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(true, isShallow2);
    }
    set(target, key) {
        warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
    deleteProperty(target, key) {
        warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value)=>value;
const getProto = (v)=>Reflect.getPrototypeOf(v);
function get(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if ((0, _shared.hasChanged)(key, rawKey)) track(rawTarget, "get", key);
        track(rawTarget, "get", rawKey);
    }
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function has(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if ((0, _shared.hasChanged)(key, rawKey)) track(rawTarget, "has", key);
        track(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
    }
    return this;
}
function set(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add", key, value);
    else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set", key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = (0, _shared.isMap)(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = (0, _shared.isMap)(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            // iterator protocol
            next () {
                const { value, done } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            warn(`${(0, _shared.capitalize)(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations2 = {
        get (key) {
            return get(this, key);
        },
        get size () {
            return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
        get (key) {
            return get(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
        get (key) {
            return get(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
        get (key) {
            return get(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations2[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get((0, _shared.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        const type = (0, _shared.toRawType)(target);
        warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1 /* COMMON */ ;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */  : targetTypeMap((0, _shared.toRawType)(value));
}
function reactive(target) {
    if (isReadonly(target)) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0, _shared.isObject)(target)) {
        warn(`value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw"]);
    return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
    return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    if (Object.isExtensible(value)) (0, _shared.def)(value, "__v_skip", true);
    return value;
}
const toReactive = (value)=>(0, _shared.isObject)(value) ? reactive(value) : value;
const toReadonly = (value)=>(0, _shared.isObject)(value) ? readonly(value) : value;
const COMPUTED_SIDE_EFFECT_WARN = `Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free`;
class ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR){
        this.getter = getter;
        this._setter = _setter;
        this.dep = void 0;
        this.__v_isRef = true;
        this["__v_isReadonly"] = false;
        this.effect = new ReactiveEffect(()=>getter(this._value), ()=>triggerRefValue(this, this.effect._dirtyLevel === 3 ? 3 : 4));
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly"] = isReadonly;
    }
    get value() {
        const self = toRaw(this);
        const lastDirtyLevel = self.effect._dirtyLevel;
        if ((!self._cacheable || self.effect.dirty) && (0, _shared.hasChanged)(self._value, self._value = self.effect.run())) {
            if (lastDirtyLevel !== 3) triggerRefValue(self, 5);
        }
        trackRefValue(self);
        if (self.effect._dirtyLevel >= 2) {
            if (0, this._warnRecursive) warn(COMPUTED_SIDE_EFFECT_WARN, `

getter: `, this.getter);
            triggerRefValue(self, 3);
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
    // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
    get _dirty() {
        return this.effect.dirty;
    }
    set _dirty(v) {
        this.effect.dirty = v;
    }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = (0, _shared.isFunction)(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ()=>{
            warn("Write operation failed: computed value is readonly");
        };
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (debugOptions && !isSSR) {
        cRef.effect.onTrack = debugOptions.onTrack;
        cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
function trackRefValue(ref2) {
    var _a;
    if (shouldTrack && activeEffect) {
        ref2 = toRaw(ref2);
        trackEffect(activeEffect, (_a = ref2.dep) != null ? _a : ref2.dep = createDep(()=>ref2.dep = void 0, ref2 instanceof ComputedRefImpl ? ref2 : void 0), {
            target: ref2,
            type: "get",
            key: "value"
        });
    }
}
function triggerRefValue(ref2, dirtyLevel = 5, newVal, oldVal) {
    ref2 = toRaw(ref2);
    const dep = ref2.dep;
    if (dep) triggerEffects(dep, dirtyLevel, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal,
        oldValue: oldVal
    });
}
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) return rawValue;
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, __v_isShallow){
        this.__v_isShallow = __v_isShallow;
        this.dep = void 0;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
        newVal = useDirectValue ? newVal : toRaw(newVal);
        if ((0, _shared.hasChanged)(newVal, this._rawValue)) {
            const oldVal = this._rawValue;
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : toReactive(newVal);
            triggerRefValue(this, 5, newVal, oldVal);
        }
    }
}
function triggerRef(ref2) {
    triggerRefValue(ref2, 5, (0, ref2.value));
}
function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
    return (0, _shared.isFunction)(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this.dep = void 0;
        this.__v_isRef = true;
        const { get, set } = factory(()=>trackRefValue(this), ()=>triggerRefValue(this));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (!isProxy(object)) warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = (0, _shared.isArray)(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = propertyToRef(object, key);
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue){
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === void 0 ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
    get dep() {
        return getDepFromReactive(toRaw(this._object), this._key);
    }
}
class GetterRefImpl {
    constructor(_getter){
        this._getter = _getter;
        this.__v_isRef = true;
        this.__v_isReadonly = true;
    }
    get value() {
        return this._getter();
    }
}
function toRef(source, key, defaultValue) {
    if (isRef(source)) return source;
    else if ((0, _shared.isFunction)(source)) return new GetterRefImpl(source);
    else if ((0, _shared.isObject)(source) && arguments.length > 1) return propertyToRef(source, key, defaultValue);
    else return ref(source);
}
function propertyToRef(source, key, defaultValue) {
    const val = source[key];
    return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}
const deferredComputed = computed;
const TrackOpTypes = {
    "GET": "get",
    "HAS": "has",
    "ITERATE": "iterate"
};
const TriggerOpTypes = {
    "SET": "set",
    "ADD": "add",
    "DELETE": "delete",
    "CLEAR": "clear"
};
const ReactiveFlags = {
    "SKIP": "__v_skip",
    "IS_REACTIVE": "__v_isReactive",
    "IS_READONLY": "__v_isReadonly",
    "IS_SHALLOW": "__v_isShallow",
    "RAW": "__v_raw"
};

},{"@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SM3y":[function(require,module,exports) {
/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ /*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_ARR", ()=>EMPTY_ARR);
parcelHelpers.export(exports, "EMPTY_OBJ", ()=>EMPTY_OBJ);
parcelHelpers.export(exports, "NO", ()=>NO);
parcelHelpers.export(exports, "NOOP", ()=>NOOP);
parcelHelpers.export(exports, "PatchFlagNames", ()=>PatchFlagNames);
parcelHelpers.export(exports, "PatchFlags", ()=>PatchFlags);
parcelHelpers.export(exports, "ShapeFlags", ()=>ShapeFlags);
parcelHelpers.export(exports, "SlotFlags", ()=>SlotFlags);
parcelHelpers.export(exports, "camelize", ()=>camelize);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
parcelHelpers.export(exports, "def", ()=>def);
parcelHelpers.export(exports, "escapeHtml", ()=>escapeHtml);
parcelHelpers.export(exports, "escapeHtmlComment", ()=>escapeHtmlComment);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "genPropsAccessExp", ()=>genPropsAccessExp);
parcelHelpers.export(exports, "generateCodeFrame", ()=>generateCodeFrame);
parcelHelpers.export(exports, "getGlobalThis", ()=>getGlobalThis);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn);
parcelHelpers.export(exports, "hyphenate", ()=>hyphenate);
parcelHelpers.export(exports, "includeBooleanAttr", ()=>includeBooleanAttr);
parcelHelpers.export(exports, "invokeArrayFns", ()=>invokeArrayFns);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isBooleanAttr", ()=>isBooleanAttr);
parcelHelpers.export(exports, "isBuiltInDirective", ()=>isBuiltInDirective);
parcelHelpers.export(exports, "isDate", ()=>isDate);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isGloballyAllowed", ()=>isGloballyAllowed);
parcelHelpers.export(exports, "isGloballyWhitelisted", ()=>isGloballyWhitelisted);
parcelHelpers.export(exports, "isHTMLTag", ()=>isHTMLTag);
parcelHelpers.export(exports, "isIntegerKey", ()=>isIntegerKey);
parcelHelpers.export(exports, "isKnownHtmlAttr", ()=>isKnownHtmlAttr);
parcelHelpers.export(exports, "isKnownSvgAttr", ()=>isKnownSvgAttr);
parcelHelpers.export(exports, "isMap", ()=>isMap);
parcelHelpers.export(exports, "isMathMLTag", ()=>isMathMLTag);
parcelHelpers.export(exports, "isModelListener", ()=>isModelListener);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isOn", ()=>isOn);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
parcelHelpers.export(exports, "isRegExp", ()=>isRegExp);
parcelHelpers.export(exports, "isRenderableAttrValue", ()=>isRenderableAttrValue);
parcelHelpers.export(exports, "isReservedProp", ()=>isReservedProp);
parcelHelpers.export(exports, "isSSRSafeAttrName", ()=>isSSRSafeAttrName);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag);
parcelHelpers.export(exports, "isSet", ()=>isSet);
parcelHelpers.export(exports, "isSpecialBooleanAttr", ()=>isSpecialBooleanAttr);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol);
parcelHelpers.export(exports, "isVoidTag", ()=>isVoidTag);
parcelHelpers.export(exports, "looseEqual", ()=>looseEqual);
parcelHelpers.export(exports, "looseIndexOf", ()=>looseIndexOf);
parcelHelpers.export(exports, "looseToNumber", ()=>looseToNumber);
parcelHelpers.export(exports, "makeMap", ()=>makeMap);
parcelHelpers.export(exports, "normalizeClass", ()=>normalizeClass);
parcelHelpers.export(exports, "normalizeProps", ()=>normalizeProps);
parcelHelpers.export(exports, "normalizeStyle", ()=>normalizeStyle);
parcelHelpers.export(exports, "objectToString", ()=>objectToString);
parcelHelpers.export(exports, "parseStringStyle", ()=>parseStringStyle);
parcelHelpers.export(exports, "propsToAttrMap", ()=>propsToAttrMap);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "slotFlagsText", ()=>slotFlagsText);
parcelHelpers.export(exports, "stringifyStyle", ()=>stringifyStyle);
parcelHelpers.export(exports, "toDisplayString", ()=>toDisplayString);
parcelHelpers.export(exports, "toHandlerKey", ()=>toHandlerKey);
parcelHelpers.export(exports, "toNumber", ()=>toNumber);
parcelHelpers.export(exports, "toRawType", ()=>toRawType);
parcelHelpers.export(exports, "toTypeString", ()=>toTypeString);
var global = arguments[3];
function makeMap(str, expectsLowerCase) {
    const set = new Set(str.split(","));
    return expectsLowerCase ? (val)=>set.has(val.toLowerCase()) : (val)=>set.has(val);
}
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = ()=>{};
const NO = ()=>false;
const isOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key)=>key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === "[object Map]";
const isSet = (val)=>toTypeString(val) === "[object Set]";
const isDate = (val)=>toTypeString(val) === "[object Date]";
const isRegExp = (val)=>toTypeString(val) === "[object RegExp]";
const isFunction = (val)=>typeof val === "function";
const isString = (val)=>typeof val === "string";
const isSymbol = (val)=>typeof val === "symbol";
const isObject = (val)=>val !== null && typeof val === "object";
const isPromise = (val)=>{
    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value);
const toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === "[object Object]";
const isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str)=>{
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
});
const hasChanged = (value, oldValue)=>!Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](...arg);
};
const def = (obj, key, value, writable = false)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        writable,
        value
    });
};
const looseToNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
const toNumber = (val)=>{
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
    return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
const PatchFlags = {
    "TEXT": 1,
    "1": "TEXT",
    "CLASS": 2,
    "2": "CLASS",
    "STYLE": 4,
    "4": "STYLE",
    "PROPS": 8,
    "8": "PROPS",
    "FULL_PROPS": 16,
    "16": "FULL_PROPS",
    "NEED_HYDRATION": 32,
    "32": "NEED_HYDRATION",
    "STABLE_FRAGMENT": 64,
    "64": "STABLE_FRAGMENT",
    "KEYED_FRAGMENT": 128,
    "128": "KEYED_FRAGMENT",
    "UNKEYED_FRAGMENT": 256,
    "256": "UNKEYED_FRAGMENT",
    "NEED_PATCH": 512,
    "512": "NEED_PATCH",
    "DYNAMIC_SLOTS": 1024,
    "1024": "DYNAMIC_SLOTS",
    "DEV_ROOT_FRAGMENT": 2048,
    "2048": "DEV_ROOT_FRAGMENT",
    "HOISTED": -1,
    "-1": "HOISTED",
    "BAIL": -2,
    "-2": "BAIL"
};
const PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `NEED_HYDRATION`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
};
const ShapeFlags = {
    "ELEMENT": 1,
    "1": "ELEMENT",
    "FUNCTIONAL_COMPONENT": 2,
    "2": "FUNCTIONAL_COMPONENT",
    "STATEFUL_COMPONENT": 4,
    "4": "STATEFUL_COMPONENT",
    "TEXT_CHILDREN": 8,
    "8": "TEXT_CHILDREN",
    "ARRAY_CHILDREN": 16,
    "16": "ARRAY_CHILDREN",
    "SLOTS_CHILDREN": 32,
    "32": "SLOTS_CHILDREN",
    "TELEPORT": 64,
    "64": "TELEPORT",
    "SUSPENSE": 128,
    "128": "SUSPENSE",
    "COMPONENT_SHOULD_KEEP_ALIVE": 256,
    "256": "COMPONENT_SHOULD_KEEP_ALIVE",
    "COMPONENT_KEPT_ALIVE": 512,
    "512": "COMPONENT_KEPT_ALIVE",
    "COMPONENT": 6,
    "6": "COMPONENT"
};
const SlotFlags = {
    "STABLE": 1,
    "1": "STABLE",
    "DYNAMIC": 2,
    "2": "DYNAMIC",
    "FORWARDED": 3,
    "3": "FORWARDED"
};
const slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
const isGloballyWhitelisted = isGloballyAllowed;
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    start = Math.max(0, Math.min(start, source.length));
    end = Math.max(0, Math.min(end, source.length));
    if (start > end) return "";
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1);
    lines = lines.filter((_, idx)=>idx % 2 === 0);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + "^".repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join("\n");
}
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if (isString(value) || isObject(value)) return value;
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = "";
    if (!styles || isString(styles)) return ret;
    for(const key in styles){
        const value = styles[key];
        if (isString(value) || typeof value === "number") {
            const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = "";
    if (isString(value)) res = value;
    else if (isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = normalizeClass(value[i]);
        if (normalized) res += normalized + " ";
    }
    else if (isObject(value)) {
        for(const name in value)if (value[name]) res += name + " ";
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props) return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) props.class = normalizeClass(klass);
    if (style) props.style = normalizeStyle(style);
    return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
    return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) return attrValidationCache[name];
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function isRenderableAttrValue(value) {
    if (value == null) return false;
    const type = typeof value;
    return type === "string" || type === "number" || type === "boolean";
}
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) return str;
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = "&quot;";
                break;
            case 38:
                escaped = "&amp;";
                break;
            case 39:
                escaped = "&#39;";
                break;
            case 60:
                escaped = "&lt;";
                break;
            case 62:
                escaped = "&gt;";
                break;
            default:
                continue;
        }
        if (lastIndex !== index) html += str.slice(lastIndex, index);
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) return a === b;
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val));
}
const toDisplayString = (val)=>{
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val)=>{
    if (val && val.__v_isRef) return replacer(_key, val.value);
    else if (isMap(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val2], i)=>{
            entries[stringifySymbol(key, i) + " =>"] = val2;
            return entries;
        }, {})
    };
    else if (isSet(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ].map((v)=>stringifySymbol(v))
    };
    else if (isSymbol(val)) return stringifySymbol(val);
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
    return val;
};
const stringifySymbol = (v, i = "")=>{
    var _a;
    return(// Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"fYNyc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("29158dae54139136");
    if (script.__esModule) script = script.default;
    script.render = require("8a4954974a3e2a08").render;
    require("7e9898e9b122e745").default(script);
    script.__scopeId = "data-v-bc6975";
    script.__file = "/Users/messern/code/nicolasmesser/countdown/src/App.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "bc6975-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("bc6975-hmr", script)) __VUE_HMR_RUNTIME__.reload("bc6975-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"29158dae54139136":"iiJmB","8a4954974a3e2a08":"evi43","7e9898e9b122e745":"h0MjM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iiJmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _solid = require("@heroicons/vue/24/solid");
var _vue = require("@headlessui/vue");
const __default__ = {
    data () {
        return {
            name: "Vue"
        };
    }
};
exports.default = /*#__PURE__*/ Object.assign(__default__, {
    __name: "App",
    setup (__props, { expose: __expose }) {
        __expose();
        const __returned__ = {
            get BeakerIcon () {
                return 0, _solid.BeakerIcon;
            },
            get TabGroup () {
                return 0, _vue.TabGroup;
            },
            get TabList () {
                return 0, _vue.TabList;
            },
            get Tab () {
                return 0, _vue.Tab;
            },
            get TabPanels () {
                return 0, _vue.TabPanels;
            },
            get TabPanel () {
                return 0, _vue.TabPanel;
            }
        };
        Object.defineProperty(__returned__, "__isScriptSetup", {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@heroicons/vue/24/solid":"kEq2u","@headlessui/vue":"dO8ba"}],"kEq2u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AcademicCapIcon", ()=>(0, _academicCapIconJsDefault.default));
parcelHelpers.export(exports, "AdjustmentsHorizontalIcon", ()=>(0, _adjustmentsHorizontalIconJsDefault.default));
parcelHelpers.export(exports, "AdjustmentsVerticalIcon", ()=>(0, _adjustmentsVerticalIconJsDefault.default));
parcelHelpers.export(exports, "ArchiveBoxArrowDownIcon", ()=>(0, _archiveBoxArrowDownIconJsDefault.default));
parcelHelpers.export(exports, "ArchiveBoxXMarkIcon", ()=>(0, _archiveBoxXMarkIconJsDefault.default));
parcelHelpers.export(exports, "ArchiveBoxIcon", ()=>(0, _archiveBoxIconJsDefault.default));
parcelHelpers.export(exports, "ArrowDownCircleIcon", ()=>(0, _arrowDownCircleIconJsDefault.default));
parcelHelpers.export(exports, "ArrowDownLeftIcon", ()=>(0, _arrowDownLeftIconJsDefault.default));
parcelHelpers.export(exports, "ArrowDownOnSquareStackIcon", ()=>(0, _arrowDownOnSquareStackIconJsDefault.default));
parcelHelpers.export(exports, "ArrowDownOnSquareIcon", ()=>(0, _arrowDownOnSquareIconJsDefault.default));
parcelHelpers.export(exports, "ArrowDownRightIcon", ()=>(0, _arrowDownRightIconJsDefault.default));
parcelHelpers.export(exports, "ArrowDownTrayIcon", ()=>(0, _arrowDownTrayIconJsDefault.default));
parcelHelpers.export(exports, "ArrowDownIcon", ()=>(0, _arrowDownIconJsDefault.default));
parcelHelpers.export(exports, "ArrowLeftCircleIcon", ()=>(0, _arrowLeftCircleIconJsDefault.default));
parcelHelpers.export(exports, "ArrowLeftEndOnRectangleIcon", ()=>(0, _arrowLeftEndOnRectangleIconJsDefault.default));
parcelHelpers.export(exports, "ArrowLeftOnRectangleIcon", ()=>(0, _arrowLeftOnRectangleIconJsDefault.default));
parcelHelpers.export(exports, "ArrowLeftStartOnRectangleIcon", ()=>(0, _arrowLeftStartOnRectangleIconJsDefault.default));
parcelHelpers.export(exports, "ArrowLeftIcon", ()=>(0, _arrowLeftIconJsDefault.default));
parcelHelpers.export(exports, "ArrowLongDownIcon", ()=>(0, _arrowLongDownIconJsDefault.default));
parcelHelpers.export(exports, "ArrowLongLeftIcon", ()=>(0, _arrowLongLeftIconJsDefault.default));
parcelHelpers.export(exports, "ArrowLongRightIcon", ()=>(0, _arrowLongRightIconJsDefault.default));
parcelHelpers.export(exports, "ArrowLongUpIcon", ()=>(0, _arrowLongUpIconJsDefault.default));
parcelHelpers.export(exports, "ArrowPathRoundedSquareIcon", ()=>(0, _arrowPathRoundedSquareIconJsDefault.default));
parcelHelpers.export(exports, "ArrowPathIcon", ()=>(0, _arrowPathIconJsDefault.default));
parcelHelpers.export(exports, "ArrowRightCircleIcon", ()=>(0, _arrowRightCircleIconJsDefault.default));
parcelHelpers.export(exports, "ArrowRightEndOnRectangleIcon", ()=>(0, _arrowRightEndOnRectangleIconJsDefault.default));
parcelHelpers.export(exports, "ArrowRightOnRectangleIcon", ()=>(0, _arrowRightOnRectangleIconJsDefault.default));
parcelHelpers.export(exports, "ArrowRightStartOnRectangleIcon", ()=>(0, _arrowRightStartOnRectangleIconJsDefault.default));
parcelHelpers.export(exports, "ArrowRightIcon", ()=>(0, _arrowRightIconJsDefault.default));
parcelHelpers.export(exports, "ArrowSmallDownIcon", ()=>(0, _arrowSmallDownIconJsDefault.default));
parcelHelpers.export(exports, "ArrowSmallLeftIcon", ()=>(0, _arrowSmallLeftIconJsDefault.default));
parcelHelpers.export(exports, "ArrowSmallRightIcon", ()=>(0, _arrowSmallRightIconJsDefault.default));
parcelHelpers.export(exports, "ArrowSmallUpIcon", ()=>(0, _arrowSmallUpIconJsDefault.default));
parcelHelpers.export(exports, "ArrowTopRightOnSquareIcon", ()=>(0, _arrowTopRightOnSquareIconJsDefault.default));
parcelHelpers.export(exports, "ArrowTrendingDownIcon", ()=>(0, _arrowTrendingDownIconJsDefault.default));
parcelHelpers.export(exports, "ArrowTrendingUpIcon", ()=>(0, _arrowTrendingUpIconJsDefault.default));
parcelHelpers.export(exports, "ArrowUpCircleIcon", ()=>(0, _arrowUpCircleIconJsDefault.default));
parcelHelpers.export(exports, "ArrowUpLeftIcon", ()=>(0, _arrowUpLeftIconJsDefault.default));
parcelHelpers.export(exports, "ArrowUpOnSquareStackIcon", ()=>(0, _arrowUpOnSquareStackIconJsDefault.default));
parcelHelpers.export(exports, "ArrowUpOnSquareIcon", ()=>(0, _arrowUpOnSquareIconJsDefault.default));
parcelHelpers.export(exports, "ArrowUpRightIcon", ()=>(0, _arrowUpRightIconJsDefault.default));
parcelHelpers.export(exports, "ArrowUpTrayIcon", ()=>(0, _arrowUpTrayIconJsDefault.default));
parcelHelpers.export(exports, "ArrowUpIcon", ()=>(0, _arrowUpIconJsDefault.default));
parcelHelpers.export(exports, "ArrowUturnDownIcon", ()=>(0, _arrowUturnDownIconJsDefault.default));
parcelHelpers.export(exports, "ArrowUturnLeftIcon", ()=>(0, _arrowUturnLeftIconJsDefault.default));
parcelHelpers.export(exports, "ArrowUturnRightIcon", ()=>(0, _arrowUturnRightIconJsDefault.default));
parcelHelpers.export(exports, "ArrowUturnUpIcon", ()=>(0, _arrowUturnUpIconJsDefault.default));
parcelHelpers.export(exports, "ArrowsPointingInIcon", ()=>(0, _arrowsPointingInIconJsDefault.default));
parcelHelpers.export(exports, "ArrowsPointingOutIcon", ()=>(0, _arrowsPointingOutIconJsDefault.default));
parcelHelpers.export(exports, "ArrowsRightLeftIcon", ()=>(0, _arrowsRightLeftIconJsDefault.default));
parcelHelpers.export(exports, "ArrowsUpDownIcon", ()=>(0, _arrowsUpDownIconJsDefault.default));
parcelHelpers.export(exports, "AtSymbolIcon", ()=>(0, _atSymbolIconJsDefault.default));
parcelHelpers.export(exports, "BackspaceIcon", ()=>(0, _backspaceIconJsDefault.default));
parcelHelpers.export(exports, "BackwardIcon", ()=>(0, _backwardIconJsDefault.default));
parcelHelpers.export(exports, "BanknotesIcon", ()=>(0, _banknotesIconJsDefault.default));
parcelHelpers.export(exports, "Bars2Icon", ()=>(0, _bars2IconJsDefault.default));
parcelHelpers.export(exports, "Bars3BottomLeftIcon", ()=>(0, _bars3BottomLeftIconJsDefault.default));
parcelHelpers.export(exports, "Bars3BottomRightIcon", ()=>(0, _bars3BottomRightIconJsDefault.default));
parcelHelpers.export(exports, "Bars3CenterLeftIcon", ()=>(0, _bars3CenterLeftIconJsDefault.default));
parcelHelpers.export(exports, "Bars3Icon", ()=>(0, _bars3IconJsDefault.default));
parcelHelpers.export(exports, "Bars4Icon", ()=>(0, _bars4IconJsDefault.default));
parcelHelpers.export(exports, "BarsArrowDownIcon", ()=>(0, _barsArrowDownIconJsDefault.default));
parcelHelpers.export(exports, "BarsArrowUpIcon", ()=>(0, _barsArrowUpIconJsDefault.default));
parcelHelpers.export(exports, "Battery0Icon", ()=>(0, _battery0IconJsDefault.default));
parcelHelpers.export(exports, "Battery100Icon", ()=>(0, _battery100IconJsDefault.default));
parcelHelpers.export(exports, "Battery50Icon", ()=>(0, _battery50IconJsDefault.default));
parcelHelpers.export(exports, "BeakerIcon", ()=>(0, _beakerIconJsDefault.default));
parcelHelpers.export(exports, "BellAlertIcon", ()=>(0, _bellAlertIconJsDefault.default));
parcelHelpers.export(exports, "BellSlashIcon", ()=>(0, _bellSlashIconJsDefault.default));
parcelHelpers.export(exports, "BellSnoozeIcon", ()=>(0, _bellSnoozeIconJsDefault.default));
parcelHelpers.export(exports, "BellIcon", ()=>(0, _bellIconJsDefault.default));
parcelHelpers.export(exports, "BoltSlashIcon", ()=>(0, _boltSlashIconJsDefault.default));
parcelHelpers.export(exports, "BoltIcon", ()=>(0, _boltIconJsDefault.default));
parcelHelpers.export(exports, "BookOpenIcon", ()=>(0, _bookOpenIconJsDefault.default));
parcelHelpers.export(exports, "BookmarkSlashIcon", ()=>(0, _bookmarkSlashIconJsDefault.default));
parcelHelpers.export(exports, "BookmarkSquareIcon", ()=>(0, _bookmarkSquareIconJsDefault.default));
parcelHelpers.export(exports, "BookmarkIcon", ()=>(0, _bookmarkIconJsDefault.default));
parcelHelpers.export(exports, "BriefcaseIcon", ()=>(0, _briefcaseIconJsDefault.default));
parcelHelpers.export(exports, "BugAntIcon", ()=>(0, _bugAntIconJsDefault.default));
parcelHelpers.export(exports, "BuildingLibraryIcon", ()=>(0, _buildingLibraryIconJsDefault.default));
parcelHelpers.export(exports, "BuildingOffice2Icon", ()=>(0, _buildingOffice2IconJsDefault.default));
parcelHelpers.export(exports, "BuildingOfficeIcon", ()=>(0, _buildingOfficeIconJsDefault.default));
parcelHelpers.export(exports, "BuildingStorefrontIcon", ()=>(0, _buildingStorefrontIconJsDefault.default));
parcelHelpers.export(exports, "CakeIcon", ()=>(0, _cakeIconJsDefault.default));
parcelHelpers.export(exports, "CalculatorIcon", ()=>(0, _calculatorIconJsDefault.default));
parcelHelpers.export(exports, "CalendarDaysIcon", ()=>(0, _calendarDaysIconJsDefault.default));
parcelHelpers.export(exports, "CalendarIcon", ()=>(0, _calendarIconJsDefault.default));
parcelHelpers.export(exports, "CameraIcon", ()=>(0, _cameraIconJsDefault.default));
parcelHelpers.export(exports, "ChartBarSquareIcon", ()=>(0, _chartBarSquareIconJsDefault.default));
parcelHelpers.export(exports, "ChartBarIcon", ()=>(0, _chartBarIconJsDefault.default));
parcelHelpers.export(exports, "ChartPieIcon", ()=>(0, _chartPieIconJsDefault.default));
parcelHelpers.export(exports, "ChatBubbleBottomCenterTextIcon", ()=>(0, _chatBubbleBottomCenterTextIconJsDefault.default));
parcelHelpers.export(exports, "ChatBubbleBottomCenterIcon", ()=>(0, _chatBubbleBottomCenterIconJsDefault.default));
parcelHelpers.export(exports, "ChatBubbleLeftEllipsisIcon", ()=>(0, _chatBubbleLeftEllipsisIconJsDefault.default));
parcelHelpers.export(exports, "ChatBubbleLeftRightIcon", ()=>(0, _chatBubbleLeftRightIconJsDefault.default));
parcelHelpers.export(exports, "ChatBubbleLeftIcon", ()=>(0, _chatBubbleLeftIconJsDefault.default));
parcelHelpers.export(exports, "ChatBubbleOvalLeftEllipsisIcon", ()=>(0, _chatBubbleOvalLeftEllipsisIconJsDefault.default));
parcelHelpers.export(exports, "ChatBubbleOvalLeftIcon", ()=>(0, _chatBubbleOvalLeftIconJsDefault.default));
parcelHelpers.export(exports, "CheckBadgeIcon", ()=>(0, _checkBadgeIconJsDefault.default));
parcelHelpers.export(exports, "CheckCircleIcon", ()=>(0, _checkCircleIconJsDefault.default));
parcelHelpers.export(exports, "CheckIcon", ()=>(0, _checkIconJsDefault.default));
parcelHelpers.export(exports, "ChevronDoubleDownIcon", ()=>(0, _chevronDoubleDownIconJsDefault.default));
parcelHelpers.export(exports, "ChevronDoubleLeftIcon", ()=>(0, _chevronDoubleLeftIconJsDefault.default));
parcelHelpers.export(exports, "ChevronDoubleRightIcon", ()=>(0, _chevronDoubleRightIconJsDefault.default));
parcelHelpers.export(exports, "ChevronDoubleUpIcon", ()=>(0, _chevronDoubleUpIconJsDefault.default));
parcelHelpers.export(exports, "ChevronDownIcon", ()=>(0, _chevronDownIconJsDefault.default));
parcelHelpers.export(exports, "ChevronLeftIcon", ()=>(0, _chevronLeftIconJsDefault.default));
parcelHelpers.export(exports, "ChevronRightIcon", ()=>(0, _chevronRightIconJsDefault.default));
parcelHelpers.export(exports, "ChevronUpDownIcon", ()=>(0, _chevronUpDownIconJsDefault.default));
parcelHelpers.export(exports, "ChevronUpIcon", ()=>(0, _chevronUpIconJsDefault.default));
parcelHelpers.export(exports, "CircleStackIcon", ()=>(0, _circleStackIconJsDefault.default));
parcelHelpers.export(exports, "ClipboardDocumentCheckIcon", ()=>(0, _clipboardDocumentCheckIconJsDefault.default));
parcelHelpers.export(exports, "ClipboardDocumentListIcon", ()=>(0, _clipboardDocumentListIconJsDefault.default));
parcelHelpers.export(exports, "ClipboardDocumentIcon", ()=>(0, _clipboardDocumentIconJsDefault.default));
parcelHelpers.export(exports, "ClipboardIcon", ()=>(0, _clipboardIconJsDefault.default));
parcelHelpers.export(exports, "ClockIcon", ()=>(0, _clockIconJsDefault.default));
parcelHelpers.export(exports, "CloudArrowDownIcon", ()=>(0, _cloudArrowDownIconJsDefault.default));
parcelHelpers.export(exports, "CloudArrowUpIcon", ()=>(0, _cloudArrowUpIconJsDefault.default));
parcelHelpers.export(exports, "CloudIcon", ()=>(0, _cloudIconJsDefault.default));
parcelHelpers.export(exports, "CodeBracketSquareIcon", ()=>(0, _codeBracketSquareIconJsDefault.default));
parcelHelpers.export(exports, "CodeBracketIcon", ()=>(0, _codeBracketIconJsDefault.default));
parcelHelpers.export(exports, "Cog6ToothIcon", ()=>(0, _cog6ToothIconJsDefault.default));
parcelHelpers.export(exports, "Cog8ToothIcon", ()=>(0, _cog8ToothIconJsDefault.default));
parcelHelpers.export(exports, "CogIcon", ()=>(0, _cogIconJsDefault.default));
parcelHelpers.export(exports, "CommandLineIcon", ()=>(0, _commandLineIconJsDefault.default));
parcelHelpers.export(exports, "ComputerDesktopIcon", ()=>(0, _computerDesktopIconJsDefault.default));
parcelHelpers.export(exports, "CpuChipIcon", ()=>(0, _cpuChipIconJsDefault.default));
parcelHelpers.export(exports, "CreditCardIcon", ()=>(0, _creditCardIconJsDefault.default));
parcelHelpers.export(exports, "CubeTransparentIcon", ()=>(0, _cubeTransparentIconJsDefault.default));
parcelHelpers.export(exports, "CubeIcon", ()=>(0, _cubeIconJsDefault.default));
parcelHelpers.export(exports, "CurrencyBangladeshiIcon", ()=>(0, _currencyBangladeshiIconJsDefault.default));
parcelHelpers.export(exports, "CurrencyDollarIcon", ()=>(0, _currencyDollarIconJsDefault.default));
parcelHelpers.export(exports, "CurrencyEuroIcon", ()=>(0, _currencyEuroIconJsDefault.default));
parcelHelpers.export(exports, "CurrencyPoundIcon", ()=>(0, _currencyPoundIconJsDefault.default));
parcelHelpers.export(exports, "CurrencyRupeeIcon", ()=>(0, _currencyRupeeIconJsDefault.default));
parcelHelpers.export(exports, "CurrencyYenIcon", ()=>(0, _currencyYenIconJsDefault.default));
parcelHelpers.export(exports, "CursorArrowRaysIcon", ()=>(0, _cursorArrowRaysIconJsDefault.default));
parcelHelpers.export(exports, "CursorArrowRippleIcon", ()=>(0, _cursorArrowRippleIconJsDefault.default));
parcelHelpers.export(exports, "DevicePhoneMobileIcon", ()=>(0, _devicePhoneMobileIconJsDefault.default));
parcelHelpers.export(exports, "DeviceTabletIcon", ()=>(0, _deviceTabletIconJsDefault.default));
parcelHelpers.export(exports, "DocumentArrowDownIcon", ()=>(0, _documentArrowDownIconJsDefault.default));
parcelHelpers.export(exports, "DocumentArrowUpIcon", ()=>(0, _documentArrowUpIconJsDefault.default));
parcelHelpers.export(exports, "DocumentChartBarIcon", ()=>(0, _documentChartBarIconJsDefault.default));
parcelHelpers.export(exports, "DocumentCheckIcon", ()=>(0, _documentCheckIconJsDefault.default));
parcelHelpers.export(exports, "DocumentDuplicateIcon", ()=>(0, _documentDuplicateIconJsDefault.default));
parcelHelpers.export(exports, "DocumentMagnifyingGlassIcon", ()=>(0, _documentMagnifyingGlassIconJsDefault.default));
parcelHelpers.export(exports, "DocumentMinusIcon", ()=>(0, _documentMinusIconJsDefault.default));
parcelHelpers.export(exports, "DocumentPlusIcon", ()=>(0, _documentPlusIconJsDefault.default));
parcelHelpers.export(exports, "DocumentTextIcon", ()=>(0, _documentTextIconJsDefault.default));
parcelHelpers.export(exports, "DocumentIcon", ()=>(0, _documentIconJsDefault.default));
parcelHelpers.export(exports, "EllipsisHorizontalCircleIcon", ()=>(0, _ellipsisHorizontalCircleIconJsDefault.default));
parcelHelpers.export(exports, "EllipsisHorizontalIcon", ()=>(0, _ellipsisHorizontalIconJsDefault.default));
parcelHelpers.export(exports, "EllipsisVerticalIcon", ()=>(0, _ellipsisVerticalIconJsDefault.default));
parcelHelpers.export(exports, "EnvelopeOpenIcon", ()=>(0, _envelopeOpenIconJsDefault.default));
parcelHelpers.export(exports, "EnvelopeIcon", ()=>(0, _envelopeIconJsDefault.default));
parcelHelpers.export(exports, "ExclamationCircleIcon", ()=>(0, _exclamationCircleIconJsDefault.default));
parcelHelpers.export(exports, "ExclamationTriangleIcon", ()=>(0, _exclamationTriangleIconJsDefault.default));
parcelHelpers.export(exports, "EyeDropperIcon", ()=>(0, _eyeDropperIconJsDefault.default));
parcelHelpers.export(exports, "EyeSlashIcon", ()=>(0, _eyeSlashIconJsDefault.default));
parcelHelpers.export(exports, "EyeIcon", ()=>(0, _eyeIconJsDefault.default));
parcelHelpers.export(exports, "FaceFrownIcon", ()=>(0, _faceFrownIconJsDefault.default));
parcelHelpers.export(exports, "FaceSmileIcon", ()=>(0, _faceSmileIconJsDefault.default));
parcelHelpers.export(exports, "FilmIcon", ()=>(0, _filmIconJsDefault.default));
parcelHelpers.export(exports, "FingerPrintIcon", ()=>(0, _fingerPrintIconJsDefault.default));
parcelHelpers.export(exports, "FireIcon", ()=>(0, _fireIconJsDefault.default));
parcelHelpers.export(exports, "FlagIcon", ()=>(0, _flagIconJsDefault.default));
parcelHelpers.export(exports, "FolderArrowDownIcon", ()=>(0, _folderArrowDownIconJsDefault.default));
parcelHelpers.export(exports, "FolderMinusIcon", ()=>(0, _folderMinusIconJsDefault.default));
parcelHelpers.export(exports, "FolderOpenIcon", ()=>(0, _folderOpenIconJsDefault.default));
parcelHelpers.export(exports, "FolderPlusIcon", ()=>(0, _folderPlusIconJsDefault.default));
parcelHelpers.export(exports, "FolderIcon", ()=>(0, _folderIconJsDefault.default));
parcelHelpers.export(exports, "ForwardIcon", ()=>(0, _forwardIconJsDefault.default));
parcelHelpers.export(exports, "FunnelIcon", ()=>(0, _funnelIconJsDefault.default));
parcelHelpers.export(exports, "GifIcon", ()=>(0, _gifIconJsDefault.default));
parcelHelpers.export(exports, "GiftTopIcon", ()=>(0, _giftTopIconJsDefault.default));
parcelHelpers.export(exports, "GiftIcon", ()=>(0, _giftIconJsDefault.default));
parcelHelpers.export(exports, "GlobeAltIcon", ()=>(0, _globeAltIconJsDefault.default));
parcelHelpers.export(exports, "GlobeAmericasIcon", ()=>(0, _globeAmericasIconJsDefault.default));
parcelHelpers.export(exports, "GlobeAsiaAustraliaIcon", ()=>(0, _globeAsiaAustraliaIconJsDefault.default));
parcelHelpers.export(exports, "GlobeEuropeAfricaIcon", ()=>(0, _globeEuropeAfricaIconJsDefault.default));
parcelHelpers.export(exports, "HandRaisedIcon", ()=>(0, _handRaisedIconJsDefault.default));
parcelHelpers.export(exports, "HandThumbDownIcon", ()=>(0, _handThumbDownIconJsDefault.default));
parcelHelpers.export(exports, "HandThumbUpIcon", ()=>(0, _handThumbUpIconJsDefault.default));
parcelHelpers.export(exports, "HashtagIcon", ()=>(0, _hashtagIconJsDefault.default));
parcelHelpers.export(exports, "HeartIcon", ()=>(0, _heartIconJsDefault.default));
parcelHelpers.export(exports, "HomeModernIcon", ()=>(0, _homeModernIconJsDefault.default));
parcelHelpers.export(exports, "HomeIcon", ()=>(0, _homeIconJsDefault.default));
parcelHelpers.export(exports, "IdentificationIcon", ()=>(0, _identificationIconJsDefault.default));
parcelHelpers.export(exports, "InboxArrowDownIcon", ()=>(0, _inboxArrowDownIconJsDefault.default));
parcelHelpers.export(exports, "InboxStackIcon", ()=>(0, _inboxStackIconJsDefault.default));
parcelHelpers.export(exports, "InboxIcon", ()=>(0, _inboxIconJsDefault.default));
parcelHelpers.export(exports, "InformationCircleIcon", ()=>(0, _informationCircleIconJsDefault.default));
parcelHelpers.export(exports, "KeyIcon", ()=>(0, _keyIconJsDefault.default));
parcelHelpers.export(exports, "LanguageIcon", ()=>(0, _languageIconJsDefault.default));
parcelHelpers.export(exports, "LifebuoyIcon", ()=>(0, _lifebuoyIconJsDefault.default));
parcelHelpers.export(exports, "LightBulbIcon", ()=>(0, _lightBulbIconJsDefault.default));
parcelHelpers.export(exports, "LinkIcon", ()=>(0, _linkIconJsDefault.default));
parcelHelpers.export(exports, "ListBulletIcon", ()=>(0, _listBulletIconJsDefault.default));
parcelHelpers.export(exports, "LockClosedIcon", ()=>(0, _lockClosedIconJsDefault.default));
parcelHelpers.export(exports, "LockOpenIcon", ()=>(0, _lockOpenIconJsDefault.default));
parcelHelpers.export(exports, "MagnifyingGlassCircleIcon", ()=>(0, _magnifyingGlassCircleIconJsDefault.default));
parcelHelpers.export(exports, "MagnifyingGlassMinusIcon", ()=>(0, _magnifyingGlassMinusIconJsDefault.default));
parcelHelpers.export(exports, "MagnifyingGlassPlusIcon", ()=>(0, _magnifyingGlassPlusIconJsDefault.default));
parcelHelpers.export(exports, "MagnifyingGlassIcon", ()=>(0, _magnifyingGlassIconJsDefault.default));
parcelHelpers.export(exports, "MapPinIcon", ()=>(0, _mapPinIconJsDefault.default));
parcelHelpers.export(exports, "MapIcon", ()=>(0, _mapIconJsDefault.default));
parcelHelpers.export(exports, "MegaphoneIcon", ()=>(0, _megaphoneIconJsDefault.default));
parcelHelpers.export(exports, "MicrophoneIcon", ()=>(0, _microphoneIconJsDefault.default));
parcelHelpers.export(exports, "MinusCircleIcon", ()=>(0, _minusCircleIconJsDefault.default));
parcelHelpers.export(exports, "MinusSmallIcon", ()=>(0, _minusSmallIconJsDefault.default));
parcelHelpers.export(exports, "MinusIcon", ()=>(0, _minusIconJsDefault.default));
parcelHelpers.export(exports, "MoonIcon", ()=>(0, _moonIconJsDefault.default));
parcelHelpers.export(exports, "MusicalNoteIcon", ()=>(0, _musicalNoteIconJsDefault.default));
parcelHelpers.export(exports, "NewspaperIcon", ()=>(0, _newspaperIconJsDefault.default));
parcelHelpers.export(exports, "NoSymbolIcon", ()=>(0, _noSymbolIconJsDefault.default));
parcelHelpers.export(exports, "PaintBrushIcon", ()=>(0, _paintBrushIconJsDefault.default));
parcelHelpers.export(exports, "PaperAirplaneIcon", ()=>(0, _paperAirplaneIconJsDefault.default));
parcelHelpers.export(exports, "PaperClipIcon", ()=>(0, _paperClipIconJsDefault.default));
parcelHelpers.export(exports, "PauseCircleIcon", ()=>(0, _pauseCircleIconJsDefault.default));
parcelHelpers.export(exports, "PauseIcon", ()=>(0, _pauseIconJsDefault.default));
parcelHelpers.export(exports, "PencilSquareIcon", ()=>(0, _pencilSquareIconJsDefault.default));
parcelHelpers.export(exports, "PencilIcon", ()=>(0, _pencilIconJsDefault.default));
parcelHelpers.export(exports, "PhoneArrowDownLeftIcon", ()=>(0, _phoneArrowDownLeftIconJsDefault.default));
parcelHelpers.export(exports, "PhoneArrowUpRightIcon", ()=>(0, _phoneArrowUpRightIconJsDefault.default));
parcelHelpers.export(exports, "PhoneXMarkIcon", ()=>(0, _phoneXMarkIconJsDefault.default));
parcelHelpers.export(exports, "PhoneIcon", ()=>(0, _phoneIconJsDefault.default));
parcelHelpers.export(exports, "PhotoIcon", ()=>(0, _photoIconJsDefault.default));
parcelHelpers.export(exports, "PlayCircleIcon", ()=>(0, _playCircleIconJsDefault.default));
parcelHelpers.export(exports, "PlayPauseIcon", ()=>(0, _playPauseIconJsDefault.default));
parcelHelpers.export(exports, "PlayIcon", ()=>(0, _playIconJsDefault.default));
parcelHelpers.export(exports, "PlusCircleIcon", ()=>(0, _plusCircleIconJsDefault.default));
parcelHelpers.export(exports, "PlusSmallIcon", ()=>(0, _plusSmallIconJsDefault.default));
parcelHelpers.export(exports, "PlusIcon", ()=>(0, _plusIconJsDefault.default));
parcelHelpers.export(exports, "PowerIcon", ()=>(0, _powerIconJsDefault.default));
parcelHelpers.export(exports, "PresentationChartBarIcon", ()=>(0, _presentationChartBarIconJsDefault.default));
parcelHelpers.export(exports, "PresentationChartLineIcon", ()=>(0, _presentationChartLineIconJsDefault.default));
parcelHelpers.export(exports, "PrinterIcon", ()=>(0, _printerIconJsDefault.default));
parcelHelpers.export(exports, "PuzzlePieceIcon", ()=>(0, _puzzlePieceIconJsDefault.default));
parcelHelpers.export(exports, "QrCodeIcon", ()=>(0, _qrCodeIconJsDefault.default));
parcelHelpers.export(exports, "QuestionMarkCircleIcon", ()=>(0, _questionMarkCircleIconJsDefault.default));
parcelHelpers.export(exports, "QueueListIcon", ()=>(0, _queueListIconJsDefault.default));
parcelHelpers.export(exports, "RadioIcon", ()=>(0, _radioIconJsDefault.default));
parcelHelpers.export(exports, "ReceiptPercentIcon", ()=>(0, _receiptPercentIconJsDefault.default));
parcelHelpers.export(exports, "ReceiptRefundIcon", ()=>(0, _receiptRefundIconJsDefault.default));
parcelHelpers.export(exports, "RectangleGroupIcon", ()=>(0, _rectangleGroupIconJsDefault.default));
parcelHelpers.export(exports, "RectangleStackIcon", ()=>(0, _rectangleStackIconJsDefault.default));
parcelHelpers.export(exports, "RocketLaunchIcon", ()=>(0, _rocketLaunchIconJsDefault.default));
parcelHelpers.export(exports, "RssIcon", ()=>(0, _rssIconJsDefault.default));
parcelHelpers.export(exports, "ScaleIcon", ()=>(0, _scaleIconJsDefault.default));
parcelHelpers.export(exports, "ScissorsIcon", ()=>(0, _scissorsIconJsDefault.default));
parcelHelpers.export(exports, "ServerStackIcon", ()=>(0, _serverStackIconJsDefault.default));
parcelHelpers.export(exports, "ServerIcon", ()=>(0, _serverIconJsDefault.default));
parcelHelpers.export(exports, "ShareIcon", ()=>(0, _shareIconJsDefault.default));
parcelHelpers.export(exports, "ShieldCheckIcon", ()=>(0, _shieldCheckIconJsDefault.default));
parcelHelpers.export(exports, "ShieldExclamationIcon", ()=>(0, _shieldExclamationIconJsDefault.default));
parcelHelpers.export(exports, "ShoppingBagIcon", ()=>(0, _shoppingBagIconJsDefault.default));
parcelHelpers.export(exports, "ShoppingCartIcon", ()=>(0, _shoppingCartIconJsDefault.default));
parcelHelpers.export(exports, "SignalSlashIcon", ()=>(0, _signalSlashIconJsDefault.default));
parcelHelpers.export(exports, "SignalIcon", ()=>(0, _signalIconJsDefault.default));
parcelHelpers.export(exports, "SparklesIcon", ()=>(0, _sparklesIconJsDefault.default));
parcelHelpers.export(exports, "SpeakerWaveIcon", ()=>(0, _speakerWaveIconJsDefault.default));
parcelHelpers.export(exports, "SpeakerXMarkIcon", ()=>(0, _speakerXMarkIconJsDefault.default));
parcelHelpers.export(exports, "Square2StackIcon", ()=>(0, _square2StackIconJsDefault.default));
parcelHelpers.export(exports, "Square3Stack3DIcon", ()=>(0, _square3Stack3DIconJsDefault.default));
parcelHelpers.export(exports, "Squares2X2Icon", ()=>(0, _squares2X2IconJsDefault.default));
parcelHelpers.export(exports, "SquaresPlusIcon", ()=>(0, _squaresPlusIconJsDefault.default));
parcelHelpers.export(exports, "StarIcon", ()=>(0, _starIconJsDefault.default));
parcelHelpers.export(exports, "StopCircleIcon", ()=>(0, _stopCircleIconJsDefault.default));
parcelHelpers.export(exports, "StopIcon", ()=>(0, _stopIconJsDefault.default));
parcelHelpers.export(exports, "SunIcon", ()=>(0, _sunIconJsDefault.default));
parcelHelpers.export(exports, "SwatchIcon", ()=>(0, _swatchIconJsDefault.default));
parcelHelpers.export(exports, "TableCellsIcon", ()=>(0, _tableCellsIconJsDefault.default));
parcelHelpers.export(exports, "TagIcon", ()=>(0, _tagIconJsDefault.default));
parcelHelpers.export(exports, "TicketIcon", ()=>(0, _ticketIconJsDefault.default));
parcelHelpers.export(exports, "TrashIcon", ()=>(0, _trashIconJsDefault.default));
parcelHelpers.export(exports, "TrophyIcon", ()=>(0, _trophyIconJsDefault.default));
parcelHelpers.export(exports, "TruckIcon", ()=>(0, _truckIconJsDefault.default));
parcelHelpers.export(exports, "TvIcon", ()=>(0, _tvIconJsDefault.default));
parcelHelpers.export(exports, "UserCircleIcon", ()=>(0, _userCircleIconJsDefault.default));
parcelHelpers.export(exports, "UserGroupIcon", ()=>(0, _userGroupIconJsDefault.default));
parcelHelpers.export(exports, "UserMinusIcon", ()=>(0, _userMinusIconJsDefault.default));
parcelHelpers.export(exports, "UserPlusIcon", ()=>(0, _userPlusIconJsDefault.default));
parcelHelpers.export(exports, "UserIcon", ()=>(0, _userIconJsDefault.default));
parcelHelpers.export(exports, "UsersIcon", ()=>(0, _usersIconJsDefault.default));
parcelHelpers.export(exports, "VariableIcon", ()=>(0, _variableIconJsDefault.default));
parcelHelpers.export(exports, "VideoCameraSlashIcon", ()=>(0, _videoCameraSlashIconJsDefault.default));
parcelHelpers.export(exports, "VideoCameraIcon", ()=>(0, _videoCameraIconJsDefault.default));
parcelHelpers.export(exports, "ViewColumnsIcon", ()=>(0, _viewColumnsIconJsDefault.default));
parcelHelpers.export(exports, "ViewfinderCircleIcon", ()=>(0, _viewfinderCircleIconJsDefault.default));
parcelHelpers.export(exports, "WalletIcon", ()=>(0, _walletIconJsDefault.default));
parcelHelpers.export(exports, "WifiIcon", ()=>(0, _wifiIconJsDefault.default));
parcelHelpers.export(exports, "WindowIcon", ()=>(0, _windowIconJsDefault.default));
parcelHelpers.export(exports, "WrenchScrewdriverIcon", ()=>(0, _wrenchScrewdriverIconJsDefault.default));
parcelHelpers.export(exports, "WrenchIcon", ()=>(0, _wrenchIconJsDefault.default));
parcelHelpers.export(exports, "XCircleIcon", ()=>(0, _xcircleIconJsDefault.default));
parcelHelpers.export(exports, "XMarkIcon", ()=>(0, _xmarkIconJsDefault.default));
var _academicCapIconJs = require("./AcademicCapIcon.js");
var _academicCapIconJsDefault = parcelHelpers.interopDefault(_academicCapIconJs);
var _adjustmentsHorizontalIconJs = require("./AdjustmentsHorizontalIcon.js");
var _adjustmentsHorizontalIconJsDefault = parcelHelpers.interopDefault(_adjustmentsHorizontalIconJs);
var _adjustmentsVerticalIconJs = require("./AdjustmentsVerticalIcon.js");
var _adjustmentsVerticalIconJsDefault = parcelHelpers.interopDefault(_adjustmentsVerticalIconJs);
var _archiveBoxArrowDownIconJs = require("./ArchiveBoxArrowDownIcon.js");
var _archiveBoxArrowDownIconJsDefault = parcelHelpers.interopDefault(_archiveBoxArrowDownIconJs);
var _archiveBoxXMarkIconJs = require("./ArchiveBoxXMarkIcon.js");
var _archiveBoxXMarkIconJsDefault = parcelHelpers.interopDefault(_archiveBoxXMarkIconJs);
var _archiveBoxIconJs = require("./ArchiveBoxIcon.js");
var _archiveBoxIconJsDefault = parcelHelpers.interopDefault(_archiveBoxIconJs);
var _arrowDownCircleIconJs = require("./ArrowDownCircleIcon.js");
var _arrowDownCircleIconJsDefault = parcelHelpers.interopDefault(_arrowDownCircleIconJs);
var _arrowDownLeftIconJs = require("./ArrowDownLeftIcon.js");
var _arrowDownLeftIconJsDefault = parcelHelpers.interopDefault(_arrowDownLeftIconJs);
var _arrowDownOnSquareStackIconJs = require("./ArrowDownOnSquareStackIcon.js");
var _arrowDownOnSquareStackIconJsDefault = parcelHelpers.interopDefault(_arrowDownOnSquareStackIconJs);
var _arrowDownOnSquareIconJs = require("./ArrowDownOnSquareIcon.js");
var _arrowDownOnSquareIconJsDefault = parcelHelpers.interopDefault(_arrowDownOnSquareIconJs);
var _arrowDownRightIconJs = require("./ArrowDownRightIcon.js");
var _arrowDownRightIconJsDefault = parcelHelpers.interopDefault(_arrowDownRightIconJs);
var _arrowDownTrayIconJs = require("./ArrowDownTrayIcon.js");
var _arrowDownTrayIconJsDefault = parcelHelpers.interopDefault(_arrowDownTrayIconJs);
var _arrowDownIconJs = require("./ArrowDownIcon.js");
var _arrowDownIconJsDefault = parcelHelpers.interopDefault(_arrowDownIconJs);
var _arrowLeftCircleIconJs = require("./ArrowLeftCircleIcon.js");
var _arrowLeftCircleIconJsDefault = parcelHelpers.interopDefault(_arrowLeftCircleIconJs);
var _arrowLeftEndOnRectangleIconJs = require("./ArrowLeftEndOnRectangleIcon.js");
var _arrowLeftEndOnRectangleIconJsDefault = parcelHelpers.interopDefault(_arrowLeftEndOnRectangleIconJs);
var _arrowLeftOnRectangleIconJs = require("./ArrowLeftOnRectangleIcon.js");
var _arrowLeftOnRectangleIconJsDefault = parcelHelpers.interopDefault(_arrowLeftOnRectangleIconJs);
var _arrowLeftStartOnRectangleIconJs = require("./ArrowLeftStartOnRectangleIcon.js");
var _arrowLeftStartOnRectangleIconJsDefault = parcelHelpers.interopDefault(_arrowLeftStartOnRectangleIconJs);
var _arrowLeftIconJs = require("./ArrowLeftIcon.js");
var _arrowLeftIconJsDefault = parcelHelpers.interopDefault(_arrowLeftIconJs);
var _arrowLongDownIconJs = require("./ArrowLongDownIcon.js");
var _arrowLongDownIconJsDefault = parcelHelpers.interopDefault(_arrowLongDownIconJs);
var _arrowLongLeftIconJs = require("./ArrowLongLeftIcon.js");
var _arrowLongLeftIconJsDefault = parcelHelpers.interopDefault(_arrowLongLeftIconJs);
var _arrowLongRightIconJs = require("./ArrowLongRightIcon.js");
var _arrowLongRightIconJsDefault = parcelHelpers.interopDefault(_arrowLongRightIconJs);
var _arrowLongUpIconJs = require("./ArrowLongUpIcon.js");
var _arrowLongUpIconJsDefault = parcelHelpers.interopDefault(_arrowLongUpIconJs);
var _arrowPathRoundedSquareIconJs = require("./ArrowPathRoundedSquareIcon.js");
var _arrowPathRoundedSquareIconJsDefault = parcelHelpers.interopDefault(_arrowPathRoundedSquareIconJs);
var _arrowPathIconJs = require("./ArrowPathIcon.js");
var _arrowPathIconJsDefault = parcelHelpers.interopDefault(_arrowPathIconJs);
var _arrowRightCircleIconJs = require("./ArrowRightCircleIcon.js");
var _arrowRightCircleIconJsDefault = parcelHelpers.interopDefault(_arrowRightCircleIconJs);
var _arrowRightEndOnRectangleIconJs = require("./ArrowRightEndOnRectangleIcon.js");
var _arrowRightEndOnRectangleIconJsDefault = parcelHelpers.interopDefault(_arrowRightEndOnRectangleIconJs);
var _arrowRightOnRectangleIconJs = require("./ArrowRightOnRectangleIcon.js");
var _arrowRightOnRectangleIconJsDefault = parcelHelpers.interopDefault(_arrowRightOnRectangleIconJs);
var _arrowRightStartOnRectangleIconJs = require("./ArrowRightStartOnRectangleIcon.js");
var _arrowRightStartOnRectangleIconJsDefault = parcelHelpers.interopDefault(_arrowRightStartOnRectangleIconJs);
var _arrowRightIconJs = require("./ArrowRightIcon.js");
var _arrowRightIconJsDefault = parcelHelpers.interopDefault(_arrowRightIconJs);
var _arrowSmallDownIconJs = require("./ArrowSmallDownIcon.js");
var _arrowSmallDownIconJsDefault = parcelHelpers.interopDefault(_arrowSmallDownIconJs);
var _arrowSmallLeftIconJs = require("./ArrowSmallLeftIcon.js");
var _arrowSmallLeftIconJsDefault = parcelHelpers.interopDefault(_arrowSmallLeftIconJs);
var _arrowSmallRightIconJs = require("./ArrowSmallRightIcon.js");
var _arrowSmallRightIconJsDefault = parcelHelpers.interopDefault(_arrowSmallRightIconJs);
var _arrowSmallUpIconJs = require("./ArrowSmallUpIcon.js");
var _arrowSmallUpIconJsDefault = parcelHelpers.interopDefault(_arrowSmallUpIconJs);
var _arrowTopRightOnSquareIconJs = require("./ArrowTopRightOnSquareIcon.js");
var _arrowTopRightOnSquareIconJsDefault = parcelHelpers.interopDefault(_arrowTopRightOnSquareIconJs);
var _arrowTrendingDownIconJs = require("./ArrowTrendingDownIcon.js");
var _arrowTrendingDownIconJsDefault = parcelHelpers.interopDefault(_arrowTrendingDownIconJs);
var _arrowTrendingUpIconJs = require("./ArrowTrendingUpIcon.js");
var _arrowTrendingUpIconJsDefault = parcelHelpers.interopDefault(_arrowTrendingUpIconJs);
var _arrowUpCircleIconJs = require("./ArrowUpCircleIcon.js");
var _arrowUpCircleIconJsDefault = parcelHelpers.interopDefault(_arrowUpCircleIconJs);
var _arrowUpLeftIconJs = require("./ArrowUpLeftIcon.js");
var _arrowUpLeftIconJsDefault = parcelHelpers.interopDefault(_arrowUpLeftIconJs);
var _arrowUpOnSquareStackIconJs = require("./ArrowUpOnSquareStackIcon.js");
var _arrowUpOnSquareStackIconJsDefault = parcelHelpers.interopDefault(_arrowUpOnSquareStackIconJs);
var _arrowUpOnSquareIconJs = require("./ArrowUpOnSquareIcon.js");
var _arrowUpOnSquareIconJsDefault = parcelHelpers.interopDefault(_arrowUpOnSquareIconJs);
var _arrowUpRightIconJs = require("./ArrowUpRightIcon.js");
var _arrowUpRightIconJsDefault = parcelHelpers.interopDefault(_arrowUpRightIconJs);
var _arrowUpTrayIconJs = require("./ArrowUpTrayIcon.js");
var _arrowUpTrayIconJsDefault = parcelHelpers.interopDefault(_arrowUpTrayIconJs);
var _arrowUpIconJs = require("./ArrowUpIcon.js");
var _arrowUpIconJsDefault = parcelHelpers.interopDefault(_arrowUpIconJs);
var _arrowUturnDownIconJs = require("./ArrowUturnDownIcon.js");
var _arrowUturnDownIconJsDefault = parcelHelpers.interopDefault(_arrowUturnDownIconJs);
var _arrowUturnLeftIconJs = require("./ArrowUturnLeftIcon.js");
var _arrowUturnLeftIconJsDefault = parcelHelpers.interopDefault(_arrowUturnLeftIconJs);
var _arrowUturnRightIconJs = require("./ArrowUturnRightIcon.js");
var _arrowUturnRightIconJsDefault = parcelHelpers.interopDefault(_arrowUturnRightIconJs);
var _arrowUturnUpIconJs = require("./ArrowUturnUpIcon.js");
var _arrowUturnUpIconJsDefault = parcelHelpers.interopDefault(_arrowUturnUpIconJs);
var _arrowsPointingInIconJs = require("./ArrowsPointingInIcon.js");
var _arrowsPointingInIconJsDefault = parcelHelpers.interopDefault(_arrowsPointingInIconJs);
var _arrowsPointingOutIconJs = require("./ArrowsPointingOutIcon.js");
var _arrowsPointingOutIconJsDefault = parcelHelpers.interopDefault(_arrowsPointingOutIconJs);
var _arrowsRightLeftIconJs = require("./ArrowsRightLeftIcon.js");
var _arrowsRightLeftIconJsDefault = parcelHelpers.interopDefault(_arrowsRightLeftIconJs);
var _arrowsUpDownIconJs = require("./ArrowsUpDownIcon.js");
var _arrowsUpDownIconJsDefault = parcelHelpers.interopDefault(_arrowsUpDownIconJs);
var _atSymbolIconJs = require("./AtSymbolIcon.js");
var _atSymbolIconJsDefault = parcelHelpers.interopDefault(_atSymbolIconJs);
var _backspaceIconJs = require("./BackspaceIcon.js");
var _backspaceIconJsDefault = parcelHelpers.interopDefault(_backspaceIconJs);
var _backwardIconJs = require("./BackwardIcon.js");
var _backwardIconJsDefault = parcelHelpers.interopDefault(_backwardIconJs);
var _banknotesIconJs = require("./BanknotesIcon.js");
var _banknotesIconJsDefault = parcelHelpers.interopDefault(_banknotesIconJs);
var _bars2IconJs = require("./Bars2Icon.js");
var _bars2IconJsDefault = parcelHelpers.interopDefault(_bars2IconJs);
var _bars3BottomLeftIconJs = require("./Bars3BottomLeftIcon.js");
var _bars3BottomLeftIconJsDefault = parcelHelpers.interopDefault(_bars3BottomLeftIconJs);
var _bars3BottomRightIconJs = require("./Bars3BottomRightIcon.js");
var _bars3BottomRightIconJsDefault = parcelHelpers.interopDefault(_bars3BottomRightIconJs);
var _bars3CenterLeftIconJs = require("./Bars3CenterLeftIcon.js");
var _bars3CenterLeftIconJsDefault = parcelHelpers.interopDefault(_bars3CenterLeftIconJs);
var _bars3IconJs = require("./Bars3Icon.js");
var _bars3IconJsDefault = parcelHelpers.interopDefault(_bars3IconJs);
var _bars4IconJs = require("./Bars4Icon.js");
var _bars4IconJsDefault = parcelHelpers.interopDefault(_bars4IconJs);
var _barsArrowDownIconJs = require("./BarsArrowDownIcon.js");
var _barsArrowDownIconJsDefault = parcelHelpers.interopDefault(_barsArrowDownIconJs);
var _barsArrowUpIconJs = require("./BarsArrowUpIcon.js");
var _barsArrowUpIconJsDefault = parcelHelpers.interopDefault(_barsArrowUpIconJs);
var _battery0IconJs = require("./Battery0Icon.js");
var _battery0IconJsDefault = parcelHelpers.interopDefault(_battery0IconJs);
var _battery100IconJs = require("./Battery100Icon.js");
var _battery100IconJsDefault = parcelHelpers.interopDefault(_battery100IconJs);
var _battery50IconJs = require("./Battery50Icon.js");
var _battery50IconJsDefault = parcelHelpers.interopDefault(_battery50IconJs);
var _beakerIconJs = require("./BeakerIcon.js");
var _beakerIconJsDefault = parcelHelpers.interopDefault(_beakerIconJs);
var _bellAlertIconJs = require("./BellAlertIcon.js");
var _bellAlertIconJsDefault = parcelHelpers.interopDefault(_bellAlertIconJs);
var _bellSlashIconJs = require("./BellSlashIcon.js");
var _bellSlashIconJsDefault = parcelHelpers.interopDefault(_bellSlashIconJs);
var _bellSnoozeIconJs = require("./BellSnoozeIcon.js");
var _bellSnoozeIconJsDefault = parcelHelpers.interopDefault(_bellSnoozeIconJs);
var _bellIconJs = require("./BellIcon.js");
var _bellIconJsDefault = parcelHelpers.interopDefault(_bellIconJs);
var _boltSlashIconJs = require("./BoltSlashIcon.js");
var _boltSlashIconJsDefault = parcelHelpers.interopDefault(_boltSlashIconJs);
var _boltIconJs = require("./BoltIcon.js");
var _boltIconJsDefault = parcelHelpers.interopDefault(_boltIconJs);
var _bookOpenIconJs = require("./BookOpenIcon.js");
var _bookOpenIconJsDefault = parcelHelpers.interopDefault(_bookOpenIconJs);
var _bookmarkSlashIconJs = require("./BookmarkSlashIcon.js");
var _bookmarkSlashIconJsDefault = parcelHelpers.interopDefault(_bookmarkSlashIconJs);
var _bookmarkSquareIconJs = require("./BookmarkSquareIcon.js");
var _bookmarkSquareIconJsDefault = parcelHelpers.interopDefault(_bookmarkSquareIconJs);
var _bookmarkIconJs = require("./BookmarkIcon.js");
var _bookmarkIconJsDefault = parcelHelpers.interopDefault(_bookmarkIconJs);
var _briefcaseIconJs = require("./BriefcaseIcon.js");
var _briefcaseIconJsDefault = parcelHelpers.interopDefault(_briefcaseIconJs);
var _bugAntIconJs = require("./BugAntIcon.js");
var _bugAntIconJsDefault = parcelHelpers.interopDefault(_bugAntIconJs);
var _buildingLibraryIconJs = require("./BuildingLibraryIcon.js");
var _buildingLibraryIconJsDefault = parcelHelpers.interopDefault(_buildingLibraryIconJs);
var _buildingOffice2IconJs = require("./BuildingOffice2Icon.js");
var _buildingOffice2IconJsDefault = parcelHelpers.interopDefault(_buildingOffice2IconJs);
var _buildingOfficeIconJs = require("./BuildingOfficeIcon.js");
var _buildingOfficeIconJsDefault = parcelHelpers.interopDefault(_buildingOfficeIconJs);
var _buildingStorefrontIconJs = require("./BuildingStorefrontIcon.js");
var _buildingStorefrontIconJsDefault = parcelHelpers.interopDefault(_buildingStorefrontIconJs);
var _cakeIconJs = require("./CakeIcon.js");
var _cakeIconJsDefault = parcelHelpers.interopDefault(_cakeIconJs);
var _calculatorIconJs = require("./CalculatorIcon.js");
var _calculatorIconJsDefault = parcelHelpers.interopDefault(_calculatorIconJs);
var _calendarDaysIconJs = require("./CalendarDaysIcon.js");
var _calendarDaysIconJsDefault = parcelHelpers.interopDefault(_calendarDaysIconJs);
var _calendarIconJs = require("./CalendarIcon.js");
var _calendarIconJsDefault = parcelHelpers.interopDefault(_calendarIconJs);
var _cameraIconJs = require("./CameraIcon.js");
var _cameraIconJsDefault = parcelHelpers.interopDefault(_cameraIconJs);
var _chartBarSquareIconJs = require("./ChartBarSquareIcon.js");
var _chartBarSquareIconJsDefault = parcelHelpers.interopDefault(_chartBarSquareIconJs);
var _chartBarIconJs = require("./ChartBarIcon.js");
var _chartBarIconJsDefault = parcelHelpers.interopDefault(_chartBarIconJs);
var _chartPieIconJs = require("./ChartPieIcon.js");
var _chartPieIconJsDefault = parcelHelpers.interopDefault(_chartPieIconJs);
var _chatBubbleBottomCenterTextIconJs = require("./ChatBubbleBottomCenterTextIcon.js");
var _chatBubbleBottomCenterTextIconJsDefault = parcelHelpers.interopDefault(_chatBubbleBottomCenterTextIconJs);
var _chatBubbleBottomCenterIconJs = require("./ChatBubbleBottomCenterIcon.js");
var _chatBubbleBottomCenterIconJsDefault = parcelHelpers.interopDefault(_chatBubbleBottomCenterIconJs);
var _chatBubbleLeftEllipsisIconJs = require("./ChatBubbleLeftEllipsisIcon.js");
var _chatBubbleLeftEllipsisIconJsDefault = parcelHelpers.interopDefault(_chatBubbleLeftEllipsisIconJs);
var _chatBubbleLeftRightIconJs = require("./ChatBubbleLeftRightIcon.js");
var _chatBubbleLeftRightIconJsDefault = parcelHelpers.interopDefault(_chatBubbleLeftRightIconJs);
var _chatBubbleLeftIconJs = require("./ChatBubbleLeftIcon.js");
var _chatBubbleLeftIconJsDefault = parcelHelpers.interopDefault(_chatBubbleLeftIconJs);
var _chatBubbleOvalLeftEllipsisIconJs = require("./ChatBubbleOvalLeftEllipsisIcon.js");
var _chatBubbleOvalLeftEllipsisIconJsDefault = parcelHelpers.interopDefault(_chatBubbleOvalLeftEllipsisIconJs);
var _chatBubbleOvalLeftIconJs = require("./ChatBubbleOvalLeftIcon.js");
var _chatBubbleOvalLeftIconJsDefault = parcelHelpers.interopDefault(_chatBubbleOvalLeftIconJs);
var _checkBadgeIconJs = require("./CheckBadgeIcon.js");
var _checkBadgeIconJsDefault = parcelHelpers.interopDefault(_checkBadgeIconJs);
var _checkCircleIconJs = require("./CheckCircleIcon.js");
var _checkCircleIconJsDefault = parcelHelpers.interopDefault(_checkCircleIconJs);
var _checkIconJs = require("./CheckIcon.js");
var _checkIconJsDefault = parcelHelpers.interopDefault(_checkIconJs);
var _chevronDoubleDownIconJs = require("./ChevronDoubleDownIcon.js");
var _chevronDoubleDownIconJsDefault = parcelHelpers.interopDefault(_chevronDoubleDownIconJs);
var _chevronDoubleLeftIconJs = require("./ChevronDoubleLeftIcon.js");
var _chevronDoubleLeftIconJsDefault = parcelHelpers.interopDefault(_chevronDoubleLeftIconJs);
var _chevronDoubleRightIconJs = require("./ChevronDoubleRightIcon.js");
var _chevronDoubleRightIconJsDefault = parcelHelpers.interopDefault(_chevronDoubleRightIconJs);
var _chevronDoubleUpIconJs = require("./ChevronDoubleUpIcon.js");
var _chevronDoubleUpIconJsDefault = parcelHelpers.interopDefault(_chevronDoubleUpIconJs);
var _chevronDownIconJs = require("./ChevronDownIcon.js");
var _chevronDownIconJsDefault = parcelHelpers.interopDefault(_chevronDownIconJs);
var _chevronLeftIconJs = require("./ChevronLeftIcon.js");
var _chevronLeftIconJsDefault = parcelHelpers.interopDefault(_chevronLeftIconJs);
var _chevronRightIconJs = require("./ChevronRightIcon.js");
var _chevronRightIconJsDefault = parcelHelpers.interopDefault(_chevronRightIconJs);
var _chevronUpDownIconJs = require("./ChevronUpDownIcon.js");
var _chevronUpDownIconJsDefault = parcelHelpers.interopDefault(_chevronUpDownIconJs);
var _chevronUpIconJs = require("./ChevronUpIcon.js");
var _chevronUpIconJsDefault = parcelHelpers.interopDefault(_chevronUpIconJs);
var _circleStackIconJs = require("./CircleStackIcon.js");
var _circleStackIconJsDefault = parcelHelpers.interopDefault(_circleStackIconJs);
var _clipboardDocumentCheckIconJs = require("./ClipboardDocumentCheckIcon.js");
var _clipboardDocumentCheckIconJsDefault = parcelHelpers.interopDefault(_clipboardDocumentCheckIconJs);
var _clipboardDocumentListIconJs = require("./ClipboardDocumentListIcon.js");
var _clipboardDocumentListIconJsDefault = parcelHelpers.interopDefault(_clipboardDocumentListIconJs);
var _clipboardDocumentIconJs = require("./ClipboardDocumentIcon.js");
var _clipboardDocumentIconJsDefault = parcelHelpers.interopDefault(_clipboardDocumentIconJs);
var _clipboardIconJs = require("./ClipboardIcon.js");
var _clipboardIconJsDefault = parcelHelpers.interopDefault(_clipboardIconJs);
var _clockIconJs = require("./ClockIcon.js");
var _clockIconJsDefault = parcelHelpers.interopDefault(_clockIconJs);
var _cloudArrowDownIconJs = require("./CloudArrowDownIcon.js");
var _cloudArrowDownIconJsDefault = parcelHelpers.interopDefault(_cloudArrowDownIconJs);
var _cloudArrowUpIconJs = require("./CloudArrowUpIcon.js");
var _cloudArrowUpIconJsDefault = parcelHelpers.interopDefault(_cloudArrowUpIconJs);
var _cloudIconJs = require("./CloudIcon.js");
var _cloudIconJsDefault = parcelHelpers.interopDefault(_cloudIconJs);
var _codeBracketSquareIconJs = require("./CodeBracketSquareIcon.js");
var _codeBracketSquareIconJsDefault = parcelHelpers.interopDefault(_codeBracketSquareIconJs);
var _codeBracketIconJs = require("./CodeBracketIcon.js");
var _codeBracketIconJsDefault = parcelHelpers.interopDefault(_codeBracketIconJs);
var _cog6ToothIconJs = require("./Cog6ToothIcon.js");
var _cog6ToothIconJsDefault = parcelHelpers.interopDefault(_cog6ToothIconJs);
var _cog8ToothIconJs = require("./Cog8ToothIcon.js");
var _cog8ToothIconJsDefault = parcelHelpers.interopDefault(_cog8ToothIconJs);
var _cogIconJs = require("./CogIcon.js");
var _cogIconJsDefault = parcelHelpers.interopDefault(_cogIconJs);
var _commandLineIconJs = require("./CommandLineIcon.js");
var _commandLineIconJsDefault = parcelHelpers.interopDefault(_commandLineIconJs);
var _computerDesktopIconJs = require("./ComputerDesktopIcon.js");
var _computerDesktopIconJsDefault = parcelHelpers.interopDefault(_computerDesktopIconJs);
var _cpuChipIconJs = require("./CpuChipIcon.js");
var _cpuChipIconJsDefault = parcelHelpers.interopDefault(_cpuChipIconJs);
var _creditCardIconJs = require("./CreditCardIcon.js");
var _creditCardIconJsDefault = parcelHelpers.interopDefault(_creditCardIconJs);
var _cubeTransparentIconJs = require("./CubeTransparentIcon.js");
var _cubeTransparentIconJsDefault = parcelHelpers.interopDefault(_cubeTransparentIconJs);
var _cubeIconJs = require("./CubeIcon.js");
var _cubeIconJsDefault = parcelHelpers.interopDefault(_cubeIconJs);
var _currencyBangladeshiIconJs = require("./CurrencyBangladeshiIcon.js");
var _currencyBangladeshiIconJsDefault = parcelHelpers.interopDefault(_currencyBangladeshiIconJs);
var _currencyDollarIconJs = require("./CurrencyDollarIcon.js");
var _currencyDollarIconJsDefault = parcelHelpers.interopDefault(_currencyDollarIconJs);
var _currencyEuroIconJs = require("./CurrencyEuroIcon.js");
var _currencyEuroIconJsDefault = parcelHelpers.interopDefault(_currencyEuroIconJs);
var _currencyPoundIconJs = require("./CurrencyPoundIcon.js");
var _currencyPoundIconJsDefault = parcelHelpers.interopDefault(_currencyPoundIconJs);
var _currencyRupeeIconJs = require("./CurrencyRupeeIcon.js");
var _currencyRupeeIconJsDefault = parcelHelpers.interopDefault(_currencyRupeeIconJs);
var _currencyYenIconJs = require("./CurrencyYenIcon.js");
var _currencyYenIconJsDefault = parcelHelpers.interopDefault(_currencyYenIconJs);
var _cursorArrowRaysIconJs = require("./CursorArrowRaysIcon.js");
var _cursorArrowRaysIconJsDefault = parcelHelpers.interopDefault(_cursorArrowRaysIconJs);
var _cursorArrowRippleIconJs = require("./CursorArrowRippleIcon.js");
var _cursorArrowRippleIconJsDefault = parcelHelpers.interopDefault(_cursorArrowRippleIconJs);
var _devicePhoneMobileIconJs = require("./DevicePhoneMobileIcon.js");
var _devicePhoneMobileIconJsDefault = parcelHelpers.interopDefault(_devicePhoneMobileIconJs);
var _deviceTabletIconJs = require("./DeviceTabletIcon.js");
var _deviceTabletIconJsDefault = parcelHelpers.interopDefault(_deviceTabletIconJs);
var _documentArrowDownIconJs = require("./DocumentArrowDownIcon.js");
var _documentArrowDownIconJsDefault = parcelHelpers.interopDefault(_documentArrowDownIconJs);
var _documentArrowUpIconJs = require("./DocumentArrowUpIcon.js");
var _documentArrowUpIconJsDefault = parcelHelpers.interopDefault(_documentArrowUpIconJs);
var _documentChartBarIconJs = require("./DocumentChartBarIcon.js");
var _documentChartBarIconJsDefault = parcelHelpers.interopDefault(_documentChartBarIconJs);
var _documentCheckIconJs = require("./DocumentCheckIcon.js");
var _documentCheckIconJsDefault = parcelHelpers.interopDefault(_documentCheckIconJs);
var _documentDuplicateIconJs = require("./DocumentDuplicateIcon.js");
var _documentDuplicateIconJsDefault = parcelHelpers.interopDefault(_documentDuplicateIconJs);
var _documentMagnifyingGlassIconJs = require("./DocumentMagnifyingGlassIcon.js");
var _documentMagnifyingGlassIconJsDefault = parcelHelpers.interopDefault(_documentMagnifyingGlassIconJs);
var _documentMinusIconJs = require("./DocumentMinusIcon.js");
var _documentMinusIconJsDefault = parcelHelpers.interopDefault(_documentMinusIconJs);
var _documentPlusIconJs = require("./DocumentPlusIcon.js");
var _documentPlusIconJsDefault = parcelHelpers.interopDefault(_documentPlusIconJs);
var _documentTextIconJs = require("./DocumentTextIcon.js");
var _documentTextIconJsDefault = parcelHelpers.interopDefault(_documentTextIconJs);
var _documentIconJs = require("./DocumentIcon.js");
var _documentIconJsDefault = parcelHelpers.interopDefault(_documentIconJs);
var _ellipsisHorizontalCircleIconJs = require("./EllipsisHorizontalCircleIcon.js");
var _ellipsisHorizontalCircleIconJsDefault = parcelHelpers.interopDefault(_ellipsisHorizontalCircleIconJs);
var _ellipsisHorizontalIconJs = require("./EllipsisHorizontalIcon.js");
var _ellipsisHorizontalIconJsDefault = parcelHelpers.interopDefault(_ellipsisHorizontalIconJs);
var _ellipsisVerticalIconJs = require("./EllipsisVerticalIcon.js");
var _ellipsisVerticalIconJsDefault = parcelHelpers.interopDefault(_ellipsisVerticalIconJs);
var _envelopeOpenIconJs = require("./EnvelopeOpenIcon.js");
var _envelopeOpenIconJsDefault = parcelHelpers.interopDefault(_envelopeOpenIconJs);
var _envelopeIconJs = require("./EnvelopeIcon.js");
var _envelopeIconJsDefault = parcelHelpers.interopDefault(_envelopeIconJs);
var _exclamationCircleIconJs = require("./ExclamationCircleIcon.js");
var _exclamationCircleIconJsDefault = parcelHelpers.interopDefault(_exclamationCircleIconJs);
var _exclamationTriangleIconJs = require("./ExclamationTriangleIcon.js");
var _exclamationTriangleIconJsDefault = parcelHelpers.interopDefault(_exclamationTriangleIconJs);
var _eyeDropperIconJs = require("./EyeDropperIcon.js");
var _eyeDropperIconJsDefault = parcelHelpers.interopDefault(_eyeDropperIconJs);
var _eyeSlashIconJs = require("./EyeSlashIcon.js");
var _eyeSlashIconJsDefault = parcelHelpers.interopDefault(_eyeSlashIconJs);
var _eyeIconJs = require("./EyeIcon.js");
var _eyeIconJsDefault = parcelHelpers.interopDefault(_eyeIconJs);
var _faceFrownIconJs = require("./FaceFrownIcon.js");
var _faceFrownIconJsDefault = parcelHelpers.interopDefault(_faceFrownIconJs);
var _faceSmileIconJs = require("./FaceSmileIcon.js");
var _faceSmileIconJsDefault = parcelHelpers.interopDefault(_faceSmileIconJs);
var _filmIconJs = require("./FilmIcon.js");
var _filmIconJsDefault = parcelHelpers.interopDefault(_filmIconJs);
var _fingerPrintIconJs = require("./FingerPrintIcon.js");
var _fingerPrintIconJsDefault = parcelHelpers.interopDefault(_fingerPrintIconJs);
var _fireIconJs = require("./FireIcon.js");
var _fireIconJsDefault = parcelHelpers.interopDefault(_fireIconJs);
var _flagIconJs = require("./FlagIcon.js");
var _flagIconJsDefault = parcelHelpers.interopDefault(_flagIconJs);
var _folderArrowDownIconJs = require("./FolderArrowDownIcon.js");
var _folderArrowDownIconJsDefault = parcelHelpers.interopDefault(_folderArrowDownIconJs);
var _folderMinusIconJs = require("./FolderMinusIcon.js");
var _folderMinusIconJsDefault = parcelHelpers.interopDefault(_folderMinusIconJs);
var _folderOpenIconJs = require("./FolderOpenIcon.js");
var _folderOpenIconJsDefault = parcelHelpers.interopDefault(_folderOpenIconJs);
var _folderPlusIconJs = require("./FolderPlusIcon.js");
var _folderPlusIconJsDefault = parcelHelpers.interopDefault(_folderPlusIconJs);
var _folderIconJs = require("./FolderIcon.js");
var _folderIconJsDefault = parcelHelpers.interopDefault(_folderIconJs);
var _forwardIconJs = require("./ForwardIcon.js");
var _forwardIconJsDefault = parcelHelpers.interopDefault(_forwardIconJs);
var _funnelIconJs = require("./FunnelIcon.js");
var _funnelIconJsDefault = parcelHelpers.interopDefault(_funnelIconJs);
var _gifIconJs = require("./GifIcon.js");
var _gifIconJsDefault = parcelHelpers.interopDefault(_gifIconJs);
var _giftTopIconJs = require("./GiftTopIcon.js");
var _giftTopIconJsDefault = parcelHelpers.interopDefault(_giftTopIconJs);
var _giftIconJs = require("./GiftIcon.js");
var _giftIconJsDefault = parcelHelpers.interopDefault(_giftIconJs);
var _globeAltIconJs = require("./GlobeAltIcon.js");
var _globeAltIconJsDefault = parcelHelpers.interopDefault(_globeAltIconJs);
var _globeAmericasIconJs = require("./GlobeAmericasIcon.js");
var _globeAmericasIconJsDefault = parcelHelpers.interopDefault(_globeAmericasIconJs);
var _globeAsiaAustraliaIconJs = require("./GlobeAsiaAustraliaIcon.js");
var _globeAsiaAustraliaIconJsDefault = parcelHelpers.interopDefault(_globeAsiaAustraliaIconJs);
var _globeEuropeAfricaIconJs = require("./GlobeEuropeAfricaIcon.js");
var _globeEuropeAfricaIconJsDefault = parcelHelpers.interopDefault(_globeEuropeAfricaIconJs);
var _handRaisedIconJs = require("./HandRaisedIcon.js");
var _handRaisedIconJsDefault = parcelHelpers.interopDefault(_handRaisedIconJs);
var _handThumbDownIconJs = require("./HandThumbDownIcon.js");
var _handThumbDownIconJsDefault = parcelHelpers.interopDefault(_handThumbDownIconJs);
var _handThumbUpIconJs = require("./HandThumbUpIcon.js");
var _handThumbUpIconJsDefault = parcelHelpers.interopDefault(_handThumbUpIconJs);
var _hashtagIconJs = require("./HashtagIcon.js");
var _hashtagIconJsDefault = parcelHelpers.interopDefault(_hashtagIconJs);
var _heartIconJs = require("./HeartIcon.js");
var _heartIconJsDefault = parcelHelpers.interopDefault(_heartIconJs);
var _homeModernIconJs = require("./HomeModernIcon.js");
var _homeModernIconJsDefault = parcelHelpers.interopDefault(_homeModernIconJs);
var _homeIconJs = require("./HomeIcon.js");
var _homeIconJsDefault = parcelHelpers.interopDefault(_homeIconJs);
var _identificationIconJs = require("./IdentificationIcon.js");
var _identificationIconJsDefault = parcelHelpers.interopDefault(_identificationIconJs);
var _inboxArrowDownIconJs = require("./InboxArrowDownIcon.js");
var _inboxArrowDownIconJsDefault = parcelHelpers.interopDefault(_inboxArrowDownIconJs);
var _inboxStackIconJs = require("./InboxStackIcon.js");
var _inboxStackIconJsDefault = parcelHelpers.interopDefault(_inboxStackIconJs);
var _inboxIconJs = require("./InboxIcon.js");
var _inboxIconJsDefault = parcelHelpers.interopDefault(_inboxIconJs);
var _informationCircleIconJs = require("./InformationCircleIcon.js");
var _informationCircleIconJsDefault = parcelHelpers.interopDefault(_informationCircleIconJs);
var _keyIconJs = require("./KeyIcon.js");
var _keyIconJsDefault = parcelHelpers.interopDefault(_keyIconJs);
var _languageIconJs = require("./LanguageIcon.js");
var _languageIconJsDefault = parcelHelpers.interopDefault(_languageIconJs);
var _lifebuoyIconJs = require("./LifebuoyIcon.js");
var _lifebuoyIconJsDefault = parcelHelpers.interopDefault(_lifebuoyIconJs);
var _lightBulbIconJs = require("./LightBulbIcon.js");
var _lightBulbIconJsDefault = parcelHelpers.interopDefault(_lightBulbIconJs);
var _linkIconJs = require("./LinkIcon.js");
var _linkIconJsDefault = parcelHelpers.interopDefault(_linkIconJs);
var _listBulletIconJs = require("./ListBulletIcon.js");
var _listBulletIconJsDefault = parcelHelpers.interopDefault(_listBulletIconJs);
var _lockClosedIconJs = require("./LockClosedIcon.js");
var _lockClosedIconJsDefault = parcelHelpers.interopDefault(_lockClosedIconJs);
var _lockOpenIconJs = require("./LockOpenIcon.js");
var _lockOpenIconJsDefault = parcelHelpers.interopDefault(_lockOpenIconJs);
var _magnifyingGlassCircleIconJs = require("./MagnifyingGlassCircleIcon.js");
var _magnifyingGlassCircleIconJsDefault = parcelHelpers.interopDefault(_magnifyingGlassCircleIconJs);
var _magnifyingGlassMinusIconJs = require("./MagnifyingGlassMinusIcon.js");
var _magnifyingGlassMinusIconJsDefault = parcelHelpers.interopDefault(_magnifyingGlassMinusIconJs);
var _magnifyingGlassPlusIconJs = require("./MagnifyingGlassPlusIcon.js");
var _magnifyingGlassPlusIconJsDefault = parcelHelpers.interopDefault(_magnifyingGlassPlusIconJs);
var _magnifyingGlassIconJs = require("./MagnifyingGlassIcon.js");
var _magnifyingGlassIconJsDefault = parcelHelpers.interopDefault(_magnifyingGlassIconJs);
var _mapPinIconJs = require("./MapPinIcon.js");
var _mapPinIconJsDefault = parcelHelpers.interopDefault(_mapPinIconJs);
var _mapIconJs = require("./MapIcon.js");
var _mapIconJsDefault = parcelHelpers.interopDefault(_mapIconJs);
var _megaphoneIconJs = require("./MegaphoneIcon.js");
var _megaphoneIconJsDefault = parcelHelpers.interopDefault(_megaphoneIconJs);
var _microphoneIconJs = require("./MicrophoneIcon.js");
var _microphoneIconJsDefault = parcelHelpers.interopDefault(_microphoneIconJs);
var _minusCircleIconJs = require("./MinusCircleIcon.js");
var _minusCircleIconJsDefault = parcelHelpers.interopDefault(_minusCircleIconJs);
var _minusSmallIconJs = require("./MinusSmallIcon.js");
var _minusSmallIconJsDefault = parcelHelpers.interopDefault(_minusSmallIconJs);
var _minusIconJs = require("./MinusIcon.js");
var _minusIconJsDefault = parcelHelpers.interopDefault(_minusIconJs);
var _moonIconJs = require("./MoonIcon.js");
var _moonIconJsDefault = parcelHelpers.interopDefault(_moonIconJs);
var _musicalNoteIconJs = require("./MusicalNoteIcon.js");
var _musicalNoteIconJsDefault = parcelHelpers.interopDefault(_musicalNoteIconJs);
var _newspaperIconJs = require("./NewspaperIcon.js");
var _newspaperIconJsDefault = parcelHelpers.interopDefault(_newspaperIconJs);
var _noSymbolIconJs = require("./NoSymbolIcon.js");
var _noSymbolIconJsDefault = parcelHelpers.interopDefault(_noSymbolIconJs);
var _paintBrushIconJs = require("./PaintBrushIcon.js");
var _paintBrushIconJsDefault = parcelHelpers.interopDefault(_paintBrushIconJs);
var _paperAirplaneIconJs = require("./PaperAirplaneIcon.js");
var _paperAirplaneIconJsDefault = parcelHelpers.interopDefault(_paperAirplaneIconJs);
var _paperClipIconJs = require("./PaperClipIcon.js");
var _paperClipIconJsDefault = parcelHelpers.interopDefault(_paperClipIconJs);
var _pauseCircleIconJs = require("./PauseCircleIcon.js");
var _pauseCircleIconJsDefault = parcelHelpers.interopDefault(_pauseCircleIconJs);
var _pauseIconJs = require("./PauseIcon.js");
var _pauseIconJsDefault = parcelHelpers.interopDefault(_pauseIconJs);
var _pencilSquareIconJs = require("./PencilSquareIcon.js");
var _pencilSquareIconJsDefault = parcelHelpers.interopDefault(_pencilSquareIconJs);
var _pencilIconJs = require("./PencilIcon.js");
var _pencilIconJsDefault = parcelHelpers.interopDefault(_pencilIconJs);
var _phoneArrowDownLeftIconJs = require("./PhoneArrowDownLeftIcon.js");
var _phoneArrowDownLeftIconJsDefault = parcelHelpers.interopDefault(_phoneArrowDownLeftIconJs);
var _phoneArrowUpRightIconJs = require("./PhoneArrowUpRightIcon.js");
var _phoneArrowUpRightIconJsDefault = parcelHelpers.interopDefault(_phoneArrowUpRightIconJs);
var _phoneXMarkIconJs = require("./PhoneXMarkIcon.js");
var _phoneXMarkIconJsDefault = parcelHelpers.interopDefault(_phoneXMarkIconJs);
var _phoneIconJs = require("./PhoneIcon.js");
var _phoneIconJsDefault = parcelHelpers.interopDefault(_phoneIconJs);
var _photoIconJs = require("./PhotoIcon.js");
var _photoIconJsDefault = parcelHelpers.interopDefault(_photoIconJs);
var _playCircleIconJs = require("./PlayCircleIcon.js");
var _playCircleIconJsDefault = parcelHelpers.interopDefault(_playCircleIconJs);
var _playPauseIconJs = require("./PlayPauseIcon.js");
var _playPauseIconJsDefault = parcelHelpers.interopDefault(_playPauseIconJs);
var _playIconJs = require("./PlayIcon.js");
var _playIconJsDefault = parcelHelpers.interopDefault(_playIconJs);
var _plusCircleIconJs = require("./PlusCircleIcon.js");
var _plusCircleIconJsDefault = parcelHelpers.interopDefault(_plusCircleIconJs);
var _plusSmallIconJs = require("./PlusSmallIcon.js");
var _plusSmallIconJsDefault = parcelHelpers.interopDefault(_plusSmallIconJs);
var _plusIconJs = require("./PlusIcon.js");
var _plusIconJsDefault = parcelHelpers.interopDefault(_plusIconJs);
var _powerIconJs = require("./PowerIcon.js");
var _powerIconJsDefault = parcelHelpers.interopDefault(_powerIconJs);
var _presentationChartBarIconJs = require("./PresentationChartBarIcon.js");
var _presentationChartBarIconJsDefault = parcelHelpers.interopDefault(_presentationChartBarIconJs);
var _presentationChartLineIconJs = require("./PresentationChartLineIcon.js");
var _presentationChartLineIconJsDefault = parcelHelpers.interopDefault(_presentationChartLineIconJs);
var _printerIconJs = require("./PrinterIcon.js");
var _printerIconJsDefault = parcelHelpers.interopDefault(_printerIconJs);
var _puzzlePieceIconJs = require("./PuzzlePieceIcon.js");
var _puzzlePieceIconJsDefault = parcelHelpers.interopDefault(_puzzlePieceIconJs);
var _qrCodeIconJs = require("./QrCodeIcon.js");
var _qrCodeIconJsDefault = parcelHelpers.interopDefault(_qrCodeIconJs);
var _questionMarkCircleIconJs = require("./QuestionMarkCircleIcon.js");
var _questionMarkCircleIconJsDefault = parcelHelpers.interopDefault(_questionMarkCircleIconJs);
var _queueListIconJs = require("./QueueListIcon.js");
var _queueListIconJsDefault = parcelHelpers.interopDefault(_queueListIconJs);
var _radioIconJs = require("./RadioIcon.js");
var _radioIconJsDefault = parcelHelpers.interopDefault(_radioIconJs);
var _receiptPercentIconJs = require("./ReceiptPercentIcon.js");
var _receiptPercentIconJsDefault = parcelHelpers.interopDefault(_receiptPercentIconJs);
var _receiptRefundIconJs = require("./ReceiptRefundIcon.js");
var _receiptRefundIconJsDefault = parcelHelpers.interopDefault(_receiptRefundIconJs);
var _rectangleGroupIconJs = require("./RectangleGroupIcon.js");
var _rectangleGroupIconJsDefault = parcelHelpers.interopDefault(_rectangleGroupIconJs);
var _rectangleStackIconJs = require("./RectangleStackIcon.js");
var _rectangleStackIconJsDefault = parcelHelpers.interopDefault(_rectangleStackIconJs);
var _rocketLaunchIconJs = require("./RocketLaunchIcon.js");
var _rocketLaunchIconJsDefault = parcelHelpers.interopDefault(_rocketLaunchIconJs);
var _rssIconJs = require("./RssIcon.js");
var _rssIconJsDefault = parcelHelpers.interopDefault(_rssIconJs);
var _scaleIconJs = require("./ScaleIcon.js");
var _scaleIconJsDefault = parcelHelpers.interopDefault(_scaleIconJs);
var _scissorsIconJs = require("./ScissorsIcon.js");
var _scissorsIconJsDefault = parcelHelpers.interopDefault(_scissorsIconJs);
var _serverStackIconJs = require("./ServerStackIcon.js");
var _serverStackIconJsDefault = parcelHelpers.interopDefault(_serverStackIconJs);
var _serverIconJs = require("./ServerIcon.js");
var _serverIconJsDefault = parcelHelpers.interopDefault(_serverIconJs);
var _shareIconJs = require("./ShareIcon.js");
var _shareIconJsDefault = parcelHelpers.interopDefault(_shareIconJs);
var _shieldCheckIconJs = require("./ShieldCheckIcon.js");
var _shieldCheckIconJsDefault = parcelHelpers.interopDefault(_shieldCheckIconJs);
var _shieldExclamationIconJs = require("./ShieldExclamationIcon.js");
var _shieldExclamationIconJsDefault = parcelHelpers.interopDefault(_shieldExclamationIconJs);
var _shoppingBagIconJs = require("./ShoppingBagIcon.js");
var _shoppingBagIconJsDefault = parcelHelpers.interopDefault(_shoppingBagIconJs);
var _shoppingCartIconJs = require("./ShoppingCartIcon.js");
var _shoppingCartIconJsDefault = parcelHelpers.interopDefault(_shoppingCartIconJs);
var _signalSlashIconJs = require("./SignalSlashIcon.js");
var _signalSlashIconJsDefault = parcelHelpers.interopDefault(_signalSlashIconJs);
var _signalIconJs = require("./SignalIcon.js");
var _signalIconJsDefault = parcelHelpers.interopDefault(_signalIconJs);
var _sparklesIconJs = require("./SparklesIcon.js");
var _sparklesIconJsDefault = parcelHelpers.interopDefault(_sparklesIconJs);
var _speakerWaveIconJs = require("./SpeakerWaveIcon.js");
var _speakerWaveIconJsDefault = parcelHelpers.interopDefault(_speakerWaveIconJs);
var _speakerXMarkIconJs = require("./SpeakerXMarkIcon.js");
var _speakerXMarkIconJsDefault = parcelHelpers.interopDefault(_speakerXMarkIconJs);
var _square2StackIconJs = require("./Square2StackIcon.js");
var _square2StackIconJsDefault = parcelHelpers.interopDefault(_square2StackIconJs);
var _square3Stack3DIconJs = require("./Square3Stack3DIcon.js");
var _square3Stack3DIconJsDefault = parcelHelpers.interopDefault(_square3Stack3DIconJs);
var _squares2X2IconJs = require("./Squares2X2Icon.js");
var _squares2X2IconJsDefault = parcelHelpers.interopDefault(_squares2X2IconJs);
var _squaresPlusIconJs = require("./SquaresPlusIcon.js");
var _squaresPlusIconJsDefault = parcelHelpers.interopDefault(_squaresPlusIconJs);
var _starIconJs = require("./StarIcon.js");
var _starIconJsDefault = parcelHelpers.interopDefault(_starIconJs);
var _stopCircleIconJs = require("./StopCircleIcon.js");
var _stopCircleIconJsDefault = parcelHelpers.interopDefault(_stopCircleIconJs);
var _stopIconJs = require("./StopIcon.js");
var _stopIconJsDefault = parcelHelpers.interopDefault(_stopIconJs);
var _sunIconJs = require("./SunIcon.js");
var _sunIconJsDefault = parcelHelpers.interopDefault(_sunIconJs);
var _swatchIconJs = require("./SwatchIcon.js");
var _swatchIconJsDefault = parcelHelpers.interopDefault(_swatchIconJs);
var _tableCellsIconJs = require("./TableCellsIcon.js");
var _tableCellsIconJsDefault = parcelHelpers.interopDefault(_tableCellsIconJs);
var _tagIconJs = require("./TagIcon.js");
var _tagIconJsDefault = parcelHelpers.interopDefault(_tagIconJs);
var _ticketIconJs = require("./TicketIcon.js");
var _ticketIconJsDefault = parcelHelpers.interopDefault(_ticketIconJs);
var _trashIconJs = require("./TrashIcon.js");
var _trashIconJsDefault = parcelHelpers.interopDefault(_trashIconJs);
var _trophyIconJs = require("./TrophyIcon.js");
var _trophyIconJsDefault = parcelHelpers.interopDefault(_trophyIconJs);
var _truckIconJs = require("./TruckIcon.js");
var _truckIconJsDefault = parcelHelpers.interopDefault(_truckIconJs);
var _tvIconJs = require("./TvIcon.js");
var _tvIconJsDefault = parcelHelpers.interopDefault(_tvIconJs);
var _userCircleIconJs = require("./UserCircleIcon.js");
var _userCircleIconJsDefault = parcelHelpers.interopDefault(_userCircleIconJs);
var _userGroupIconJs = require("./UserGroupIcon.js");
var _userGroupIconJsDefault = parcelHelpers.interopDefault(_userGroupIconJs);
var _userMinusIconJs = require("./UserMinusIcon.js");
var _userMinusIconJsDefault = parcelHelpers.interopDefault(_userMinusIconJs);
var _userPlusIconJs = require("./UserPlusIcon.js");
var _userPlusIconJsDefault = parcelHelpers.interopDefault(_userPlusIconJs);
var _userIconJs = require("./UserIcon.js");
var _userIconJsDefault = parcelHelpers.interopDefault(_userIconJs);
var _usersIconJs = require("./UsersIcon.js");
var _usersIconJsDefault = parcelHelpers.interopDefault(_usersIconJs);
var _variableIconJs = require("./VariableIcon.js");
var _variableIconJsDefault = parcelHelpers.interopDefault(_variableIconJs);
var _videoCameraSlashIconJs = require("./VideoCameraSlashIcon.js");
var _videoCameraSlashIconJsDefault = parcelHelpers.interopDefault(_videoCameraSlashIconJs);
var _videoCameraIconJs = require("./VideoCameraIcon.js");
var _videoCameraIconJsDefault = parcelHelpers.interopDefault(_videoCameraIconJs);
var _viewColumnsIconJs = require("./ViewColumnsIcon.js");
var _viewColumnsIconJsDefault = parcelHelpers.interopDefault(_viewColumnsIconJs);
var _viewfinderCircleIconJs = require("./ViewfinderCircleIcon.js");
var _viewfinderCircleIconJsDefault = parcelHelpers.interopDefault(_viewfinderCircleIconJs);
var _walletIconJs = require("./WalletIcon.js");
var _walletIconJsDefault = parcelHelpers.interopDefault(_walletIconJs);
var _wifiIconJs = require("./WifiIcon.js");
var _wifiIconJsDefault = parcelHelpers.interopDefault(_wifiIconJs);
var _windowIconJs = require("./WindowIcon.js");
var _windowIconJsDefault = parcelHelpers.interopDefault(_windowIconJs);
var _wrenchScrewdriverIconJs = require("./WrenchScrewdriverIcon.js");
var _wrenchScrewdriverIconJsDefault = parcelHelpers.interopDefault(_wrenchScrewdriverIconJs);
var _wrenchIconJs = require("./WrenchIcon.js");
var _wrenchIconJsDefault = parcelHelpers.interopDefault(_wrenchIconJs);
var _xcircleIconJs = require("./XCircleIcon.js");
var _xcircleIconJsDefault = parcelHelpers.interopDefault(_xcircleIconJs);
var _xmarkIconJs = require("./XMarkIcon.js");
var _xmarkIconJsDefault = parcelHelpers.interopDefault(_xmarkIconJs);

},{"./AcademicCapIcon.js":false,"./AdjustmentsHorizontalIcon.js":false,"./AdjustmentsVerticalIcon.js":false,"./ArchiveBoxArrowDownIcon.js":false,"./ArchiveBoxXMarkIcon.js":false,"./ArchiveBoxIcon.js":false,"./ArrowDownCircleIcon.js":false,"./ArrowDownLeftIcon.js":false,"./ArrowDownOnSquareStackIcon.js":false,"./ArrowDownOnSquareIcon.js":false,"./ArrowDownRightIcon.js":false,"./ArrowDownTrayIcon.js":false,"./ArrowDownIcon.js":false,"./ArrowLeftCircleIcon.js":false,"./ArrowLeftEndOnRectangleIcon.js":false,"./ArrowLeftOnRectangleIcon.js":false,"./ArrowLeftStartOnRectangleIcon.js":false,"./ArrowLeftIcon.js":false,"./ArrowLongDownIcon.js":false,"./ArrowLongLeftIcon.js":false,"./ArrowLongRightIcon.js":false,"./ArrowLongUpIcon.js":false,"./ArrowPathRoundedSquareIcon.js":false,"./ArrowPathIcon.js":false,"./ArrowRightCircleIcon.js":false,"./ArrowRightEndOnRectangleIcon.js":false,"./ArrowRightOnRectangleIcon.js":false,"./ArrowRightStartOnRectangleIcon.js":false,"./ArrowRightIcon.js":false,"./ArrowSmallDownIcon.js":false,"./ArrowSmallLeftIcon.js":false,"./ArrowSmallRightIcon.js":false,"./ArrowSmallUpIcon.js":false,"./ArrowTopRightOnSquareIcon.js":false,"./ArrowTrendingDownIcon.js":false,"./ArrowTrendingUpIcon.js":false,"./ArrowUpCircleIcon.js":false,"./ArrowUpLeftIcon.js":false,"./ArrowUpOnSquareStackIcon.js":false,"./ArrowUpOnSquareIcon.js":false,"./ArrowUpRightIcon.js":false,"./ArrowUpTrayIcon.js":false,"./ArrowUpIcon.js":false,"./ArrowUturnDownIcon.js":false,"./ArrowUturnLeftIcon.js":false,"./ArrowUturnRightIcon.js":false,"./ArrowUturnUpIcon.js":false,"./ArrowsPointingInIcon.js":false,"./ArrowsPointingOutIcon.js":false,"./ArrowsRightLeftIcon.js":false,"./ArrowsUpDownIcon.js":false,"./AtSymbolIcon.js":false,"./BackspaceIcon.js":false,"./BackwardIcon.js":false,"./BanknotesIcon.js":false,"./Bars2Icon.js":false,"./Bars3BottomLeftIcon.js":false,"./Bars3BottomRightIcon.js":false,"./Bars3CenterLeftIcon.js":false,"./Bars3Icon.js":false,"./Bars4Icon.js":false,"./BarsArrowDownIcon.js":false,"./BarsArrowUpIcon.js":false,"./Battery0Icon.js":false,"./Battery100Icon.js":false,"./Battery50Icon.js":false,"./BeakerIcon.js":"et36M","./BellAlertIcon.js":false,"./BellSlashIcon.js":false,"./BellSnoozeIcon.js":false,"./BellIcon.js":false,"./BoltSlashIcon.js":false,"./BoltIcon.js":false,"./BookOpenIcon.js":false,"./BookmarkSlashIcon.js":false,"./BookmarkSquareIcon.js":false,"./BookmarkIcon.js":false,"./BriefcaseIcon.js":false,"./BugAntIcon.js":false,"./BuildingLibraryIcon.js":false,"./BuildingOffice2Icon.js":false,"./BuildingOfficeIcon.js":false,"./BuildingStorefrontIcon.js":false,"./CakeIcon.js":false,"./CalculatorIcon.js":false,"./CalendarDaysIcon.js":false,"./CalendarIcon.js":false,"./CameraIcon.js":false,"./ChartBarSquareIcon.js":false,"./ChartBarIcon.js":false,"./ChartPieIcon.js":false,"./ChatBubbleBottomCenterTextIcon.js":false,"./ChatBubbleBottomCenterIcon.js":false,"./ChatBubbleLeftEllipsisIcon.js":false,"./ChatBubbleLeftRightIcon.js":false,"./ChatBubbleLeftIcon.js":false,"./ChatBubbleOvalLeftEllipsisIcon.js":false,"./ChatBubbleOvalLeftIcon.js":false,"./CheckBadgeIcon.js":false,"./CheckCircleIcon.js":false,"./CheckIcon.js":false,"./ChevronDoubleDownIcon.js":false,"./ChevronDoubleLeftIcon.js":false,"./ChevronDoubleRightIcon.js":false,"./ChevronDoubleUpIcon.js":false,"./ChevronDownIcon.js":false,"./ChevronLeftIcon.js":false,"./ChevronRightIcon.js":false,"./ChevronUpDownIcon.js":false,"./ChevronUpIcon.js":false,"./CircleStackIcon.js":false,"./ClipboardDocumentCheckIcon.js":false,"./ClipboardDocumentListIcon.js":false,"./ClipboardDocumentIcon.js":false,"./ClipboardIcon.js":false,"./ClockIcon.js":false,"./CloudArrowDownIcon.js":false,"./CloudArrowUpIcon.js":false,"./CloudIcon.js":false,"./CodeBracketSquareIcon.js":false,"./CodeBracketIcon.js":false,"./Cog6ToothIcon.js":false,"./Cog8ToothIcon.js":false,"./CogIcon.js":false,"./CommandLineIcon.js":false,"./ComputerDesktopIcon.js":false,"./CpuChipIcon.js":false,"./CreditCardIcon.js":false,"./CubeTransparentIcon.js":false,"./CubeIcon.js":false,"./CurrencyBangladeshiIcon.js":false,"./CurrencyDollarIcon.js":false,"./CurrencyEuroIcon.js":false,"./CurrencyPoundIcon.js":false,"./CurrencyRupeeIcon.js":false,"./CurrencyYenIcon.js":false,"./CursorArrowRaysIcon.js":false,"./CursorArrowRippleIcon.js":false,"./DevicePhoneMobileIcon.js":false,"./DeviceTabletIcon.js":false,"./DocumentArrowDownIcon.js":false,"./DocumentArrowUpIcon.js":false,"./DocumentChartBarIcon.js":false,"./DocumentCheckIcon.js":false,"./DocumentDuplicateIcon.js":false,"./DocumentMagnifyingGlassIcon.js":false,"./DocumentMinusIcon.js":false,"./DocumentPlusIcon.js":false,"./DocumentTextIcon.js":false,"./DocumentIcon.js":false,"./EllipsisHorizontalCircleIcon.js":false,"./EllipsisHorizontalIcon.js":false,"./EllipsisVerticalIcon.js":false,"./EnvelopeOpenIcon.js":false,"./EnvelopeIcon.js":false,"./ExclamationCircleIcon.js":false,"./ExclamationTriangleIcon.js":false,"./EyeDropperIcon.js":false,"./EyeSlashIcon.js":false,"./EyeIcon.js":false,"./FaceFrownIcon.js":false,"./FaceSmileIcon.js":false,"./FilmIcon.js":false,"./FingerPrintIcon.js":false,"./FireIcon.js":false,"./FlagIcon.js":false,"./FolderArrowDownIcon.js":false,"./FolderMinusIcon.js":false,"./FolderOpenIcon.js":false,"./FolderPlusIcon.js":false,"./FolderIcon.js":false,"./ForwardIcon.js":false,"./FunnelIcon.js":false,"./GifIcon.js":false,"./GiftTopIcon.js":false,"./GiftIcon.js":false,"./GlobeAltIcon.js":false,"./GlobeAmericasIcon.js":false,"./GlobeAsiaAustraliaIcon.js":false,"./GlobeEuropeAfricaIcon.js":false,"./HandRaisedIcon.js":false,"./HandThumbDownIcon.js":false,"./HandThumbUpIcon.js":false,"./HashtagIcon.js":false,"./HeartIcon.js":false,"./HomeModernIcon.js":false,"./HomeIcon.js":false,"./IdentificationIcon.js":false,"./InboxArrowDownIcon.js":false,"./InboxStackIcon.js":false,"./InboxIcon.js":false,"./InformationCircleIcon.js":false,"./KeyIcon.js":false,"./LanguageIcon.js":false,"./LifebuoyIcon.js":false,"./LightBulbIcon.js":false,"./LinkIcon.js":false,"./ListBulletIcon.js":false,"./LockClosedIcon.js":false,"./LockOpenIcon.js":false,"./MagnifyingGlassCircleIcon.js":false,"./MagnifyingGlassMinusIcon.js":false,"./MagnifyingGlassPlusIcon.js":false,"./MagnifyingGlassIcon.js":false,"./MapPinIcon.js":false,"./MapIcon.js":false,"./MegaphoneIcon.js":false,"./MicrophoneIcon.js":false,"./MinusCircleIcon.js":false,"./MinusSmallIcon.js":false,"./MinusIcon.js":false,"./MoonIcon.js":false,"./MusicalNoteIcon.js":false,"./NewspaperIcon.js":false,"./NoSymbolIcon.js":false,"./PaintBrushIcon.js":false,"./PaperAirplaneIcon.js":false,"./PaperClipIcon.js":false,"./PauseCircleIcon.js":false,"./PauseIcon.js":false,"./PencilSquareIcon.js":false,"./PencilIcon.js":false,"./PhoneArrowDownLeftIcon.js":false,"./PhoneArrowUpRightIcon.js":false,"./PhoneXMarkIcon.js":false,"./PhoneIcon.js":false,"./PhotoIcon.js":false,"./PlayCircleIcon.js":false,"./PlayPauseIcon.js":false,"./PlayIcon.js":false,"./PlusCircleIcon.js":false,"./PlusSmallIcon.js":false,"./PlusIcon.js":false,"./PowerIcon.js":false,"./PresentationChartBarIcon.js":false,"./PresentationChartLineIcon.js":false,"./PrinterIcon.js":false,"./PuzzlePieceIcon.js":false,"./QrCodeIcon.js":false,"./QuestionMarkCircleIcon.js":false,"./QueueListIcon.js":false,"./RadioIcon.js":false,"./ReceiptPercentIcon.js":false,"./ReceiptRefundIcon.js":false,"./RectangleGroupIcon.js":false,"./RectangleStackIcon.js":false,"./RocketLaunchIcon.js":false,"./RssIcon.js":false,"./ScaleIcon.js":false,"./ScissorsIcon.js":false,"./ServerStackIcon.js":false,"./ServerIcon.js":false,"./ShareIcon.js":false,"./ShieldCheckIcon.js":false,"./ShieldExclamationIcon.js":false,"./ShoppingBagIcon.js":false,"./ShoppingCartIcon.js":false,"./SignalSlashIcon.js":false,"./SignalIcon.js":false,"./SparklesIcon.js":false,"./SpeakerWaveIcon.js":false,"./SpeakerXMarkIcon.js":false,"./Square2StackIcon.js":false,"./Square3Stack3DIcon.js":false,"./Squares2X2Icon.js":false,"./SquaresPlusIcon.js":false,"./StarIcon.js":false,"./StopCircleIcon.js":false,"./StopIcon.js":false,"./SunIcon.js":false,"./SwatchIcon.js":false,"./TableCellsIcon.js":false,"./TagIcon.js":false,"./TicketIcon.js":false,"./TrashIcon.js":false,"./TrophyIcon.js":false,"./TruckIcon.js":false,"./TvIcon.js":false,"./UserCircleIcon.js":false,"./UserGroupIcon.js":false,"./UserMinusIcon.js":false,"./UserPlusIcon.js":false,"./UserIcon.js":false,"./UsersIcon.js":false,"./VariableIcon.js":false,"./VideoCameraSlashIcon.js":false,"./VideoCameraIcon.js":false,"./ViewColumnsIcon.js":false,"./ViewfinderCircleIcon.js":false,"./WalletIcon.js":false,"./WifiIcon.js":false,"./WindowIcon.js":false,"./WrenchScrewdriverIcon.js":false,"./WrenchIcon.js":false,"./XCircleIcon.js":false,"./XMarkIcon.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"et36M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>render);
var _vue = require("vue");
function render(_ctx, _cache) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [
        (0, _vue.createElementVNode)("path", {
            "fill-rule": "evenodd",
            d: "M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z",
            "clip-rule": "evenodd"
        })
    ]);
}

},{"vue":"gzxs9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dO8ba":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Portal", ()=>(0, _portalJs.Portal));
parcelHelpers.export(exports, "PortalGroup", ()=>(0, _portalJs.PortalGroup));
parcelHelpers.export(exports, "provideUseId", ()=>(0, _useIdJs.provideUseId));
var _comboboxJs = require("./components/combobox/combobox.js");
parcelHelpers.exportAll(_comboboxJs, exports);
var _dialogJs = require("./components/dialog/dialog.js");
parcelHelpers.exportAll(_dialogJs, exports);
var _disclosureJs = require("./components/disclosure/disclosure.js");
parcelHelpers.exportAll(_disclosureJs, exports);
var _focusTrapJs = require("./components/focus-trap/focus-trap.js");
parcelHelpers.exportAll(_focusTrapJs, exports);
var _listboxJs = require("./components/listbox/listbox.js");
parcelHelpers.exportAll(_listboxJs, exports);
var _menuJs = require("./components/menu/menu.js");
parcelHelpers.exportAll(_menuJs, exports);
var _popoverJs = require("./components/popover/popover.js");
parcelHelpers.exportAll(_popoverJs, exports);
var _portalJs = require("./components/portal/portal.js");
var _radioGroupJs = require("./components/radio-group/radio-group.js");
parcelHelpers.exportAll(_radioGroupJs, exports);
var _switchJs = require("./components/switch/switch.js");
parcelHelpers.exportAll(_switchJs, exports);
var _tabsJs = require("./components/tabs/tabs.js");
parcelHelpers.exportAll(_tabsJs, exports);
var _transitionJs = require("./components/transitions/transition.js");
parcelHelpers.exportAll(_transitionJs, exports);
var _useIdJs = require("./hooks/use-id.js");

},{"./components/combobox/combobox.js":false,"./components/dialog/dialog.js":false,"./components/disclosure/disclosure.js":false,"./components/focus-trap/focus-trap.js":false,"./components/listbox/listbox.js":false,"./components/menu/menu.js":false,"./components/popover/popover.js":false,"./components/portal/portal.js":false,"./components/radio-group/radio-group.js":false,"./components/switch/switch.js":false,"./components/tabs/tabs.js":"dv8Sp","./components/transitions/transition.js":false,"./hooks/use-id.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dv8Sp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tab", ()=>xe);
parcelHelpers.export(exports, "TabGroup", ()=>me);
parcelHelpers.export(exports, "TabList", ()=>pe);
parcelHelpers.export(exports, "TabPanel", ()=>ye);
parcelHelpers.export(exports, "TabPanels", ()=>Ie);
var _vue = require("vue");
var _useIdJs = require("../../hooks/use-id.js");
var _useResolveButtonTypeJs = require("../../hooks/use-resolve-button-type.js");
var _focusSentinelJs = require("../../internal/focus-sentinel.js");
var _hiddenJs = require("../../internal/hidden.js");
var _keyboardJs = require("../../keyboard.js");
var _domJs = require("../../utils/dom.js");
var _focusManagementJs = require("../../utils/focus-management.js");
var _matchJs = require("../../utils/match.js");
var _microTaskJs = require("../../utils/micro-task.js");
var _ownerJs = require("../../utils/owner.js");
var _renderJs = require("../../utils/render.js");
var te = ((s)=>(s[s.Forwards = 0] = "Forwards", s[s.Backwards = 1] = "Backwards", s))(te || {}), le = ((d)=>(d[d.Less = -1] = "Less", d[d.Equal = 0] = "Equal", d[d.Greater = 1] = "Greater", d))(le || {});
let U = Symbol("TabsContext");
function C(a) {
    let b = (0, _vue.inject)(U, null);
    if (b === null) {
        let s = new Error(`<${a} /> is missing a parent <TabGroup /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(s, C), s;
    }
    return b;
}
let G = Symbol("TabsSSRContext"), me = (0, _vue.defineComponent)({
    name: "TabGroup",
    emits: {
        change: (a)=>!0
    },
    props: {
        as: {
            type: [
                Object,
                String
            ],
            default: "template"
        },
        selectedIndex: {
            type: [
                Number
            ],
            default: null
        },
        defaultIndex: {
            type: [
                Number
            ],
            default: 0
        },
        vertical: {
            type: [
                Boolean
            ],
            default: !1
        },
        manual: {
            type: [
                Boolean
            ],
            default: !1
        }
    },
    inheritAttrs: !1,
    setup (a, { slots: b, attrs: s, emit: d }) {
        var E;
        let i = (0, _vue.ref)((E = a.selectedIndex) != null ? E : a.defaultIndex), l = (0, _vue.ref)([]), r = (0, _vue.ref)([]), p = (0, _vue.computed)(()=>a.selectedIndex !== null), R = (0, _vue.computed)(()=>p.value ? a.selectedIndex : i.value);
        function y(t) {
            var c;
            let n = (0, _focusManagementJs.sortByDomNode)(u.tabs.value, (0, _domJs.dom)), o = (0, _focusManagementJs.sortByDomNode)(u.panels.value, (0, _domJs.dom)), e = n.filter((I)=>{
                var m;
                return !((m = (0, _domJs.dom)(I)) != null && m.hasAttribute("disabled"));
            });
            if (t < 0 || t > n.length - 1) {
                let I = (0, _matchJs.match)(i.value === null ? 0 : Math.sign(t - i.value), {
                    [-1]: ()=>1,
                    [0]: ()=>(0, _matchJs.match)(Math.sign(t), {
                            [-1]: ()=>0,
                            [0]: ()=>0,
                            [1]: ()=>1
                        }),
                    [1]: ()=>0
                }), m = (0, _matchJs.match)(I, {
                    [0]: ()=>n.indexOf(e[0]),
                    [1]: ()=>n.indexOf(e[e.length - 1])
                });
                m !== -1 && (i.value = m), u.tabs.value = n, u.panels.value = o;
            } else {
                let I = n.slice(0, t), h = [
                    ...n.slice(t),
                    ...I
                ].find((W)=>e.includes(W));
                if (!h) return;
                let O = (c = n.indexOf(h)) != null ? c : u.selectedIndex.value;
                O === -1 && (O = u.selectedIndex.value), i.value = O, u.tabs.value = n, u.panels.value = o;
            }
        }
        let u = {
            selectedIndex: (0, _vue.computed)(()=>{
                var t, n;
                return (n = (t = i.value) != null ? t : a.defaultIndex) != null ? n : null;
            }),
            orientation: (0, _vue.computed)(()=>a.vertical ? "vertical" : "horizontal"),
            activation: (0, _vue.computed)(()=>a.manual ? "manual" : "auto"),
            tabs: l,
            panels: r,
            setSelectedIndex (t) {
                R.value !== t && d("change", t), p.value || y(t);
            },
            registerTab (t) {
                var o;
                if (l.value.includes(t)) return;
                let n = l.value[i.value];
                if (l.value.push(t), l.value = (0, _focusManagementJs.sortByDomNode)(l.value, (0, _domJs.dom)), !p.value) {
                    let e = (o = l.value.indexOf(n)) != null ? o : i.value;
                    e !== -1 && (i.value = e);
                }
            },
            unregisterTab (t) {
                let n = l.value.indexOf(t);
                n !== -1 && l.value.splice(n, 1);
            },
            registerPanel (t) {
                r.value.includes(t) || (r.value.push(t), r.value = (0, _focusManagementJs.sortByDomNode)(r.value, (0, _domJs.dom)));
            },
            unregisterPanel (t) {
                let n = r.value.indexOf(t);
                n !== -1 && r.value.splice(n, 1);
            }
        };
        (0, _vue.provide)(U, u);
        let T = (0, _vue.ref)({
            tabs: [],
            panels: []
        }), x = (0, _vue.ref)(!1);
        (0, _vue.onMounted)(()=>{
            x.value = !0;
        }), (0, _vue.provide)(G, (0, _vue.computed)(()=>x.value ? null : T.value));
        let w = (0, _vue.computed)(()=>a.selectedIndex);
        return (0, _vue.onMounted)(()=>{
            (0, _vue.watch)([
                w
            ], ()=>{
                var t;
                return y((t = a.selectedIndex) != null ? t : a.defaultIndex);
            }, {
                immediate: !0
            });
        }), (0, _vue.watchEffect)(()=>{
            if (!p.value || R.value == null || u.tabs.value.length <= 0) return;
            let t = (0, _focusManagementJs.sortByDomNode)(u.tabs.value, (0, _domJs.dom));
            t.some((o, e)=>(0, _domJs.dom)(u.tabs.value[e]) !== (0, _domJs.dom)(o)) && u.setSelectedIndex(t.findIndex((o)=>(0, _domJs.dom)(o) === (0, _domJs.dom)(u.tabs.value[R.value])));
        }), ()=>{
            let t = {
                selectedIndex: i.value
            };
            return (0, _vue.h)((0, _vue.Fragment), [
                l.value.length <= 0 && (0, _vue.h)((0, _focusSentinelJs.FocusSentinel), {
                    onFocus: ()=>{
                        for (let n of l.value){
                            let o = (0, _domJs.dom)(n);
                            if ((o == null ? void 0 : o.tabIndex) === 0) return o.focus(), !0;
                        }
                        return !1;
                    }
                }),
                (0, _renderJs.render)({
                    theirProps: {
                        ...s,
                        ...(0, _renderJs.omit)(a, [
                            "selectedIndex",
                            "defaultIndex",
                            "manual",
                            "vertical",
                            "onChange"
                        ])
                    },
                    ourProps: {},
                    slot: t,
                    slots: b,
                    attrs: s,
                    name: "TabGroup"
                })
            ]);
        };
    }
}), pe = (0, _vue.defineComponent)({
    name: "TabList",
    props: {
        as: {
            type: [
                Object,
                String
            ],
            default: "div"
        }
    },
    setup (a, { attrs: b, slots: s }) {
        let d = C("TabList");
        return ()=>{
            let i = {
                selectedIndex: d.selectedIndex.value
            }, l = {
                role: "tablist",
                "aria-orientation": d.orientation.value
            };
            return (0, _renderJs.render)({
                ourProps: l,
                theirProps: a,
                slot: i,
                attrs: b,
                slots: s,
                name: "TabList"
            });
        };
    }
}), xe = (0, _vue.defineComponent)({
    name: "Tab",
    props: {
        as: {
            type: [
                Object,
                String
            ],
            default: "button"
        },
        disabled: {
            type: [
                Boolean
            ],
            default: !1
        },
        id: {
            type: String,
            default: null
        }
    },
    setup (a, { attrs: b, slots: s, expose: d }) {
        var o;
        let i = (o = a.id) != null ? o : `headlessui-tabs-tab-${(0, _useIdJs.useId)()}`, l = C("Tab"), r = (0, _vue.ref)(null);
        d({
            el: r,
            $el: r
        }), (0, _vue.onMounted)(()=>l.registerTab(r)), (0, _vue.onUnmounted)(()=>l.unregisterTab(r));
        let p = (0, _vue.inject)(G), R = (0, _vue.computed)(()=>{
            if (p.value) {
                let e = p.value.tabs.indexOf(i);
                return e === -1 ? p.value.tabs.push(i) - 1 : e;
            }
            return -1;
        }), y = (0, _vue.computed)(()=>{
            let e = l.tabs.value.indexOf(r);
            return e === -1 ? R.value : e;
        }), u = (0, _vue.computed)(()=>y.value === l.selectedIndex.value);
        function T(e) {
            var I;
            let c = e();
            if (c === (0, _focusManagementJs.FocusResult).Success && l.activation.value === "auto") {
                let m = (I = (0, _ownerJs.getOwnerDocument)(r)) == null ? void 0 : I.activeElement, h = l.tabs.value.findIndex((O)=>(0, _domJs.dom)(O) === m);
                h !== -1 && l.setSelectedIndex(h);
            }
            return c;
        }
        function x(e) {
            let c = l.tabs.value.map((m)=>(0, _domJs.dom)(m)).filter(Boolean);
            if (e.key === (0, _keyboardJs.Keys).Space || e.key === (0, _keyboardJs.Keys).Enter) {
                e.preventDefault(), e.stopPropagation(), l.setSelectedIndex(y.value);
                return;
            }
            switch(e.key){
                case (0, _keyboardJs.Keys).Home:
                case (0, _keyboardJs.Keys).PageUp:
                    return e.preventDefault(), e.stopPropagation(), T(()=>(0, _focusManagementJs.focusIn)(c, (0, _focusManagementJs.Focus).First));
                case (0, _keyboardJs.Keys).End:
                case (0, _keyboardJs.Keys).PageDown:
                    return e.preventDefault(), e.stopPropagation(), T(()=>(0, _focusManagementJs.focusIn)(c, (0, _focusManagementJs.Focus).Last));
            }
            if (T(()=>(0, _matchJs.match)(l.orientation.value, {
                    vertical () {
                        return e.key === (0, _keyboardJs.Keys).ArrowUp ? (0, _focusManagementJs.focusIn)(c, (0, _focusManagementJs.Focus).Previous | (0, _focusManagementJs.Focus).WrapAround) : e.key === (0, _keyboardJs.Keys).ArrowDown ? (0, _focusManagementJs.focusIn)(c, (0, _focusManagementJs.Focus).Next | (0, _focusManagementJs.Focus).WrapAround) : (0, _focusManagementJs.FocusResult).Error;
                    },
                    horizontal () {
                        return e.key === (0, _keyboardJs.Keys).ArrowLeft ? (0, _focusManagementJs.focusIn)(c, (0, _focusManagementJs.Focus).Previous | (0, _focusManagementJs.Focus).WrapAround) : e.key === (0, _keyboardJs.Keys).ArrowRight ? (0, _focusManagementJs.focusIn)(c, (0, _focusManagementJs.Focus).Next | (0, _focusManagementJs.Focus).WrapAround) : (0, _focusManagementJs.FocusResult).Error;
                    }
                })) === (0, _focusManagementJs.FocusResult).Success) return e.preventDefault();
        }
        let w = (0, _vue.ref)(!1);
        function E() {
            var e;
            w.value || (w.value = !0, !a.disabled && ((e = (0, _domJs.dom)(r)) == null || e.focus({
                preventScroll: !0
            }), l.setSelectedIndex(y.value), (0, _microTaskJs.microTask)(()=>{
                w.value = !1;
            })));
        }
        function t(e) {
            e.preventDefault();
        }
        let n = (0, _useResolveButtonTypeJs.useResolveButtonType)((0, _vue.computed)(()=>({
                as: a.as,
                type: b.type
            })), r);
        return ()=>{
            var m, h;
            let e = {
                selected: u.value,
                disabled: (m = a.disabled) != null ? m : !1
            }, { ...c } = a, I = {
                ref: r,
                onKeydown: x,
                onMousedown: t,
                onClick: E,
                id: i,
                role: "tab",
                type: n.value,
                "aria-controls": (h = (0, _domJs.dom)(l.panels.value[y.value])) == null ? void 0 : h.id,
                "aria-selected": u.value,
                tabIndex: u.value ? 0 : -1,
                disabled: a.disabled ? !0 : void 0
            };
            return (0, _renderJs.render)({
                ourProps: I,
                theirProps: c,
                slot: e,
                attrs: b,
                slots: s,
                name: "Tab"
            });
        };
    }
}), Ie = (0, _vue.defineComponent)({
    name: "TabPanels",
    props: {
        as: {
            type: [
                Object,
                String
            ],
            default: "div"
        }
    },
    setup (a, { slots: b, attrs: s }) {
        let d = C("TabPanels");
        return ()=>{
            let i = {
                selectedIndex: d.selectedIndex.value
            };
            return (0, _renderJs.render)({
                theirProps: a,
                ourProps: {},
                slot: i,
                attrs: s,
                slots: b,
                name: "TabPanels"
            });
        };
    }
}), ye = (0, _vue.defineComponent)({
    name: "TabPanel",
    props: {
        as: {
            type: [
                Object,
                String
            ],
            default: "div"
        },
        static: {
            type: Boolean,
            default: !1
        },
        unmount: {
            type: Boolean,
            default: !0
        },
        id: {
            type: String,
            default: null
        },
        tabIndex: {
            type: Number,
            default: 0
        }
    },
    setup (a, { attrs: b, slots: s, expose: d }) {
        var T;
        let i = (T = a.id) != null ? T : `headlessui-tabs-panel-${(0, _useIdJs.useId)()}`, l = C("TabPanel"), r = (0, _vue.ref)(null);
        d({
            el: r,
            $el: r
        }), (0, _vue.onMounted)(()=>l.registerPanel(r)), (0, _vue.onUnmounted)(()=>l.unregisterPanel(r));
        let p = (0, _vue.inject)(G), R = (0, _vue.computed)(()=>{
            if (p.value) {
                let x = p.value.panels.indexOf(i);
                return x === -1 ? p.value.panels.push(i) - 1 : x;
            }
            return -1;
        }), y = (0, _vue.computed)(()=>{
            let x = l.panels.value.indexOf(r);
            return x === -1 ? R.value : x;
        }), u = (0, _vue.computed)(()=>y.value === l.selectedIndex.value);
        return ()=>{
            var n;
            let x = {
                selected: u.value
            }, { tabIndex: w, ...E } = a, t = {
                ref: r,
                id: i,
                role: "tabpanel",
                "aria-labelledby": (n = (0, _domJs.dom)(l.tabs.value[y.value])) == null ? void 0 : n.id,
                tabIndex: u.value ? w : -1
            };
            return !u.value && a.unmount && !a.static ? (0, _vue.h)((0, _hiddenJs.Hidden), {
                as: "span",
                "aria-hidden": !0,
                ...t
            }) : (0, _renderJs.render)({
                ourProps: t,
                theirProps: E,
                slot: x,
                attrs: b,
                slots: s,
                features: (0, _renderJs.Features).Static | (0, _renderJs.Features).RenderStrategy,
                visible: u.value,
                name: "TabPanel"
            });
        };
    }
});

},{"vue":"gzxs9","../../hooks/use-id.js":"3Y3LU","../../hooks/use-resolve-button-type.js":"6FSb5","../../internal/focus-sentinel.js":"3HKOX","../../internal/hidden.js":"74O43","../../keyboard.js":"dqkaz","../../utils/dom.js":"i2zBi","../../utils/focus-management.js":"2jWr5","../../utils/match.js":"8G4kV","../../utils/micro-task.js":"20VYr","../../utils/owner.js":"ipKxm","../../utils/render.js":"fUA5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Y3LU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "provideUseId", ()=>l);
parcelHelpers.export(exports, "useId", ()=>I);
var _vue = require("vue");
let t = Symbol("headlessui.useid"), i = 0;
function I() {
    return (0, _vue.inject)(t, ()=>`${++i}`)();
}
function l(e) {
    (0, _vue.provide)(t, e);
}

},{"vue":"gzxs9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6FSb5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useResolveButtonType", ()=>s);
var _vue = require("vue");
var _domJs = require("../utils/dom.js");
function r(t, e) {
    if (t) return t;
    let n = e != null ? e : "button";
    if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function s(t, e) {
    let n = (0, _vue.ref)(r(t.value.type, t.value.as));
    return (0, _vue.onMounted)(()=>{
        n.value = r(t.value.type, t.value.as);
    }), (0, _vue.watchEffect)(()=>{
        var u;
        n.value || (0, _domJs.dom)(e) && (0, _domJs.dom)(e) instanceof HTMLButtonElement && !((u = (0, _domJs.dom)(e)) != null && u.hasAttribute("type")) && (n.value = "button");
    }), n;
}

},{"vue":"gzxs9","../utils/dom.js":"i2zBi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i2zBi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dom", ()=>o);
function o(e) {
    var l;
    if (e == null || e.value == null) return null;
    let n = (l = e.value.$el) != null ? l : e.value;
    return n instanceof Node ? n : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3HKOX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FocusSentinel", ()=>d);
var _vue = require("vue");
var _hiddenJs = require("./hidden.js");
let d = (0, _vue.defineComponent)({
    props: {
        onFocus: {
            type: Function,
            required: !0
        }
    },
    setup (t) {
        let n = (0, _vue.ref)(!0);
        return ()=>n.value ? (0, _vue.h)((0, _hiddenJs.Hidden), {
                as: "button",
                type: "button",
                features: (0, _hiddenJs.Features).Focusable,
                onFocus (o) {
                    o.preventDefault();
                    let e, a = 50;
                    function r() {
                        var u;
                        if (a-- <= 0) {
                            e && cancelAnimationFrame(e);
                            return;
                        }
                        if ((u = t.onFocus) != null && u.call(t)) {
                            n.value = !1, cancelAnimationFrame(e);
                            return;
                        }
                        e = requestAnimationFrame(r);
                    }
                    e = requestAnimationFrame(r);
                }
            }) : null;
    }
});

},{"vue":"gzxs9","./hidden.js":"74O43","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74O43":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Features", ()=>u);
parcelHelpers.export(exports, "Hidden", ()=>f);
var _vue = require("vue");
var _renderJs = require("../utils/render.js");
var u = ((e)=>(e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(u || {});
let f = (0, _vue.defineComponent)({
    name: "Hidden",
    props: {
        as: {
            type: [
                Object,
                String
            ],
            default: "div"
        },
        features: {
            type: Number,
            default: 1
        }
    },
    setup (t, { slots: n, attrs: i }) {
        return ()=>{
            var r;
            let { features: e, ...d } = t, o = {
                "aria-hidden": (e & 2) === 2 ? !0 : (r = d["aria-hidden"]) != null ? r : void 0,
                hidden: (e & 4) === 4 ? !0 : void 0,
                style: {
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: "0",
                    ...(e & 4) === 4 && (e & 2) !== 2 && {
                        display: "none"
                    }
                }
            };
            return (0, _renderJs.render)({
                ourProps: o,
                theirProps: d,
                slot: {},
                attrs: i,
                slots: n,
                name: "Hidden"
            });
        };
    }
});

},{"vue":"gzxs9","../utils/render.js":"fUA5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUA5q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Features", ()=>N);
parcelHelpers.export(exports, "RenderStrategy", ()=>S);
parcelHelpers.export(exports, "compact", ()=>E);
parcelHelpers.export(exports, "omit", ()=>T);
parcelHelpers.export(exports, "render", ()=>A);
var _vue = require("vue");
var _matchJs = require("./match.js");
var N = ((o)=>(o[o.None = 0] = "None", o[o.RenderStrategy = 1] = "RenderStrategy", o[o.Static = 2] = "Static", o))(N || {}), S = ((e)=>(e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(S || {});
function A({ visible: r = !0, features: t = 0, ourProps: e, theirProps: o, ...i }) {
    var a;
    let n = j(o, e), l = Object.assign(i, {
        props: n
    });
    if (r || t & 2 && n.static) return y(l);
    if (t & 1) {
        let d = (a = n.unmount) == null || a ? 0 : 1;
        return (0, _matchJs.match)(d, {
            [0] () {
                return null;
            },
            [1] () {
                return y({
                    ...i,
                    props: {
                        ...n,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }
                });
            }
        });
    }
    return y(l);
}
function y({ props: r, attrs: t, slots: e, slot: o, name: i }) {
    var m, h;
    let { as: n, ...l } = T(r, [
        "unmount",
        "static"
    ]), a = (m = e.default) == null ? void 0 : m.call(e, o), d = {};
    if (o) {
        let u = !1, c = [];
        for (let [p, f] of Object.entries(o))typeof f == "boolean" && (u = !0), f === !0 && c.push(p);
        u && (d["data-headlessui-state"] = c.join(" "));
    }
    if (n === "template") {
        if (a = b(a != null ? a : []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
            let [u, ...c] = a != null ? a : [];
            if (!v(u) || c.length > 0) throw new Error([
                'Passing props on "template"!',
                "",
                `The current component <${i} /> is rendering a "template".`,
                "However we need to passthrough the following props:",
                Object.keys(l).concat(Object.keys(t)).map((s)=>s.trim()).filter((s, g, R)=>R.indexOf(s) === g).sort((s, g)=>s.localeCompare(g)).map((s)=>`  - ${s}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                    'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
                    "Render a single element as the child so that we can forward the props onto that element."
                ].map((s)=>`  - ${s}`).join(`
`)
            ].join(`
`));
            let p = j((h = u.props) != null ? h : {}, l, d), f = (0, _vue.cloneVNode)(u, p, !0);
            for(let s in p)s.startsWith("on") && (f.props || (f.props = {}), f.props[s] = p[s]);
            return f;
        }
        return Array.isArray(a) && a.length === 1 ? a[0] : a;
    }
    return (0, _vue.h)(n, Object.assign({}, l, d), {
        default: ()=>a
    });
}
function b(r) {
    return r.flatMap((t)=>t.type === (0, _vue.Fragment) ? b(t.children) : [
            t
        ]);
}
function j(...r) {
    var o;
    if (r.length === 0) return {};
    if (r.length === 1) return r[0];
    let t = {}, e = {};
    for (let i of r)for(let n in i)n.startsWith("on") && typeof i[n] == "function" ? ((o = e[n]) != null || (e[n] = []), e[n].push(i[n])) : t[n] = i[n];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(e).map((i)=>[
            i,
            void 0
        ])));
    for(let i in e)Object.assign(t, {
        [i] (n, ...l) {
            let a = e[i];
            for (let d of a){
                if (n instanceof Event && n.defaultPrevented) return;
                d(n, ...l);
            }
        }
    });
    return t;
}
function E(r) {
    let t = Object.assign({}, r);
    for(let e in t)t[e] === void 0 && delete t[e];
    return t;
}
function T(r, t = []) {
    let e = Object.assign({}, r);
    for (let o of t)o in e && delete e[o];
    return e;
}
function v(r) {
    return r == null ? !1 : typeof r.type == "string" || typeof r.type == "object" || typeof r.type == "function";
}

},{"vue":"gzxs9","./match.js":"8G4kV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8G4kV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "match", ()=>u);
function u(r, n, ...a) {
    if (r in n) {
        let e = n[r];
        return typeof e == "function" ? e(...a) : e;
    }
    let t = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e)=>`"${e}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, u), t;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqkaz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Keys", ()=>o);
var o = ((r)=>(r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(o || {});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2jWr5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Focus", ()=>N);
parcelHelpers.export(exports, "FocusResult", ()=>T);
parcelHelpers.export(exports, "FocusableMode", ()=>h);
parcelHelpers.export(exports, "focusElement", ()=>S);
parcelHelpers.export(exports, "focusFrom", ()=>v);
parcelHelpers.export(exports, "focusIn", ()=>P);
parcelHelpers.export(exports, "getFocusableElements", ()=>E);
parcelHelpers.export(exports, "isFocusableElement", ()=>w);
parcelHelpers.export(exports, "restoreFocusIfNecessary", ()=>_);
parcelHelpers.export(exports, "sortByDomNode", ()=>O);
var _vue = require("vue");
var _matchJs = require("./match.js");
var _ownerJs = require("./owner.js");
let c = [
    "[contentEditable=true]",
    "[tabindex]",
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])"
].map((e)=>`${e}:not([tabindex='-1'])`).join(",");
var N = ((n)=>(n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n))(N || {}), T = ((o)=>(o[o.Error = 0] = "Error", o[o.Overflow = 1] = "Overflow", o[o.Success = 2] = "Success", o[o.Underflow = 3] = "Underflow", o))(T || {}), F = ((t)=>(t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(F || {});
function E(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(c)).sort((r, t)=>Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t)=>(t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(h || {});
function w(e, r = 0) {
    var t;
    return e === ((t = (0, _ownerJs.getOwnerDocument)(e)) == null ? void 0 : t.body) ? !1 : (0, _matchJs.match)(r, {
        [0] () {
            return e.matches(c);
        },
        [1] () {
            let l = e;
            for(; l !== null;){
                if (l.matches(c)) return !0;
                l = l.parentElement;
            }
            return !1;
        }
    });
}
function _(e) {
    let r = (0, _ownerJs.getOwnerDocument)(e);
    (0, _vue.nextTick)(()=>{
        r && !w(r.activeElement, 0) && S(e);
    });
}
var y = ((t)=>(t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(y || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e)=>{
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e)=>{
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function S(e) {
    e == null || e.focus({
        preventScroll: !0
    });
}
let H = [
    "textarea",
    "input"
].join(",");
function I(e) {
    var r, t;
    return (t = (r = e == null ? void 0 : e.matches) == null ? void 0 : r.call(e, H)) != null ? t : !1;
}
function O(e, r = (t)=>t) {
    return e.slice().sort((t, l)=>{
        let o = r(t), i = r(l);
        if (o === null || i === null) return 0;
        let n = o.compareDocumentPosition(i);
        return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    });
}
function v(e, r) {
    return P(E(), r, {
        relativeTo: e
    });
}
function P(e, r, { sorted: t = !0, relativeTo: l = null, skipElements: o = [] } = {}) {
    var m;
    let i = (m = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? m : document, n = Array.isArray(e) ? t ? O(e) : e : E(e);
    o.length > 0 && n.length > 1 && (n = n.filter((s)=>!o.includes(s))), l = l != null ? l : i.activeElement;
    let x = (()=>{
        if (r & 5) return 1;
        if (r & 10) return -1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), p = (()=>{
        if (r & 1) return 0;
        if (r & 2) return Math.max(0, n.indexOf(l)) - 1;
        if (r & 4) return Math.max(0, n.indexOf(l)) + 1;
        if (r & 8) return n.length - 1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), L = r & 32 ? {
        preventScroll: !0
    } : {}, a = 0, d = n.length, u;
    do {
        if (a >= d || a + d <= 0) return 0;
        let s = p + a;
        if (r & 16) s = (s + d) % d;
        else {
            if (s < 0) return 3;
            if (s >= d) return 1;
        }
        u = n[s], u == null || u.focus(L), a += x;
    }while (u !== i.activeElement);
    return r & 6 && I(u) && u.select(), 2;
}

},{"vue":"gzxs9","./match.js":"8G4kV","./owner.js":"ipKxm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipKxm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOwnerDocument", ()=>i);
var _domJs = require("./dom.js");
var _envJs = require("./env.js");
function i(r) {
    if ((0, _envJs.env).isServer) return null;
    if (r instanceof Node) return r.ownerDocument;
    if (r != null && r.hasOwnProperty("value")) {
        let n = (0, _domJs.dom)(r);
        if (n) return n.ownerDocument;
    }
    return document;
}

},{"./dom.js":"i2zBi","./env.js":"fpO77","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fpO77":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "env", ()=>c);
var i = Object.defineProperty;
var d = (t, e, r)=>e in t ? i(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r;
var n = (t, e, r)=>(d(t, typeof e != "symbol" ? e + "" : e, r), r);
class s {
    constructor(){
        n(this, "current", this.detect());
        n(this, "currentId", 0);
    }
    set(e) {
        this.current !== e && (this.currentId = 0, this.current = e);
    }
    reset() {
        this.set(this.detect());
    }
    nextId() {
        return ++this.currentId;
    }
    get isServer() {
        return this.current === "server";
    }
    get isClient() {
        return this.current === "client";
    }
    detect() {
        return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
    }
}
let c = new s;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"20VYr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "microTask", ()=>t);
function t(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o)=>setTimeout(()=>{
            throw o;
        }));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"evi43":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "text-xl font-bold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), null, [
        (0, _vue.createElementVNode)("div", _hoisted_1, [
            (0, _vue.createTextVNode)("Hello " + (0, _vue.toDisplayString)($data.name) + "! ", 1 /* TEXT */ ),
            (0, _vue.createVNode)($setup["BeakerIcon"], {
                class: "size-6 text-blue-500"
            })
        ]),
        (0, _vue.createVNode)($setup["TabGroup"], null, {
            default: (0, _vue.withCtx)(()=>[
                    (0, _vue.createVNode)($setup["TabList"], null, {
                        default: (0, _vue.withCtx)(()=>[
                                (0, _vue.createVNode)($setup["Tab"], {
                                    class: "ui-selected:font-bold"
                                }, {
                                    default: (0, _vue.withCtx)(()=>[
                                            (0, _vue.createTextVNode)("Tab 1")
                                        ]),
                                    _: 1 /* STABLE */ 
                                }),
                                (0, _vue.createVNode)($setup["Tab"], null, {
                                    default: (0, _vue.withCtx)(()=>[
                                            (0, _vue.createTextVNode)("Tab 2")
                                        ]),
                                    _: 1 /* STABLE */ 
                                }),
                                (0, _vue.createVNode)($setup["Tab"], null, {
                                    default: (0, _vue.withCtx)(()=>[
                                            (0, _vue.createTextVNode)("Tab 3")
                                        ]),
                                    _: 1 /* STABLE */ 
                                })
                            ]),
                        _: 1 /* STABLE */ 
                    }),
                    (0, _vue.createVNode)($setup["TabPanels"], null, {
                        default: (0, _vue.withCtx)(()=>[
                                (0, _vue.createVNode)($setup["TabPanel"], null, {
                                    default: (0, _vue.withCtx)(()=>[
                                            (0, _vue.createTextVNode)("Content 1")
                                        ]),
                                    _: 1 /* STABLE */ 
                                }),
                                (0, _vue.createVNode)($setup["TabPanel"], null, {
                                    default: (0, _vue.withCtx)(()=>[
                                            (0, _vue.createTextVNode)("Content 2")
                                        ]),
                                    _: 1 /* STABLE */ 
                                }),
                                (0, _vue.createVNode)($setup["TabPanel"], null, {
                                    default: (0, _vue.withCtx)(()=>[
                                            (0, _vue.createTextVNode)("Content 3")
                                        ]),
                                    _: 1 /* STABLE */ 
                                })
                            ]),
                        _: 1 /* STABLE */ 
                    })
                ]),
            _: 1 /* STABLE */ 
        })
    ], 64 /* STABLE_FRAGMENT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("bc6975-hmr", render);
});

},{"vue":"gzxs9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h0MjM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ZQyu":[function() {},{}]},["aP7aF","8lRBv"], "8lRBv", "parcelRequire4482")

//# sourceMappingURL=index.59a40e7a.js.map
