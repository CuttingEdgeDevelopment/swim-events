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
var _tempo = require("@formkit/tempo");
var _supabaseJs = require("@supabase/supabase-js");
var _console = require("console");
const eventsData = require("bd5103096a294280");
const supabaseUrl = "https://wcajrftiivbefknvficy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjYWpyZnRpaXZiZWZrbnZmaWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNzE0NjMsImV4cCI6MjAzMzk0NzQ2M30.lbWtjd-F3X_SnzSI1mKwi8yMKctK6BgV7X74NLeNong";
const supabase = (0, _supabaseJs.createClient)(supabaseUrl, supabaseKey);
const date = (0, _tempo.format)(new Date(), "MMMM DD, YYYY");
const day = (0, _tempo.format)(new Date(), "dddd");
const btnAdd = document.getElementById("btn-add");
const btnUpdate = document.getElementById("btn-update");
const rocketIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#15803d" class="size-20 m-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>';
const fireIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#b91c1c" class="size-20 m-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" /></svg>';
const linkIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0" stroke="currentColor" class="size-4 inline ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>';
let data = eventsData;
let eventsSection = "";
let currentDateEl = document.getElementById("currentDate");
let currentDayEl = document.getElementById("currentDay");
let eventsListEl = document.getElementById("eventsList");
let currentDate = (0, _tempo.parse)(date, "dddd DD MMMM YYYY");
let eventsLoadingEl = document.getElementById("eventsLoading");
let eventsLoadingTextEl = document.getElementById("eventsLoadingText");
currentDayEl.textContent = "Happy " + day + "!";
currentDateEl.textContent = "Current Date: " + date;
async function fetchData() {
    const { data, error } = await supabase.from("events").select("*").order("dateStart", {
        ascending: true
    });
    if (error) {
        console.error("Error fetching data:", error);
        return;
    }
    // console.log('Fetched data:', data);
    return data;
}
async function displayData() {
    try {
        const supabaseData = await fetchData();
        // console.log('Display data:', supabaseData);
        listEvents2(supabaseData);
    } catch (error) {
        console.error("Failed to fetch or display data:", error);
    }
}
function listEvents() {
    data.events.forEach((event)=>{
        eventsSection = "";
        let eventStartDate = (0, _tempo.parse)(event.dateStart, "DD.MM.YYYY");
        let eventEndDate = (0, _tempo.parse)(event.dateEnd, "DD.MM.YYYY");
        let startDate = (0, _tempo.format)(eventStartDate, "dddd, MMMM DD, YYYY");
        let endDate = (0, _tempo.format)(eventEndDate, "dddd, MMMM DD, YYYY");
        let countdown = (0, _tempo.diffDays)(eventStartDate, currentDate);
        let daysPassed = (0, _tempo.diffDays)(eventEndDate, currentDate);
        if (daysPassed < 0) {
            if (daysPassed === -1) console.log(event.name + " ended " + Math.abs(daysPassed) + " day ago.");
            else console.log(event.name + " ended " + Math.abs(daysPassed) + " days ago.");
        } else {
            if (countdown <= 0) eventsSection = '<section class="event event-' + event.id + ' border-2 border-black rounded-xl px-4 py-5 flex justify-between hover:drop-shadow hover:shadow-md hover:shadow-indigo-300"><div id="eventInfo">';
            else eventsSection = '<section class="event event-' + event.id + ' border border-black rounded-xl px-4 py-5 flex justify-between hover:drop-shadow hover:shadow-md hover:shadow-indigo-300"><div id="eventInfo">';
            if (event.link === "") eventsSection += '<h4 class="mb-2 text-xl font-medium">' + event.name + "</h4>";
            else eventsSection += '<h4 class="mb-2 text-xl font-medium">' + event.name + '<a href="' + event.link + '" title="' + event.name + '" target="_blank" class="hover:text-indigo-700">' + linkIcon + "</a></h4>";
            eventsSection += '<p><span class="font-medium">Location:</span> ' + event.location + "</p>" + '<p><span class="font-medium">Begin:</span> ' + startDate + "</p>" + '<p><span class="font-medium">End:</span> ' + endDate + '</p></div><div id="eventCountdown" class="text-center">';
            if (countdown < 0) eventsSection += fireIcon + '<p class="font-bold">Ongoing!</p></div></section>';
            else if (countdown === 0) eventsSection += rocketIcon + '<p class="font-bold">Today is the day!</p></div></section>';
            else if (countdown === 1) eventsSection += '<p class="text-7xl">' + countdown + '</p><p class="font-bold">day to go</p>' + "</div></section>";
            else eventsSection += '<p class="text-7xl">' + countdown + '</p><p class="font-bold">days to go</p>' + "</div></section>";
        }
        eventsListEl.insertAdjacentHTML("beforeend", eventsSection);
    });
}
function listEvents2(supabaseEvents) {
    supabaseEvents.forEach((event)=>{
        eventsSection = "";
        let eventStartDate = (0, _tempo.parse)(event.dateStart, "YYYY-MM-DD");
        let eventEndDate = (0, _tempo.parse)(event.dateEnd, "YYYY-MM-DD");
        let startDate = (0, _tempo.format)(eventStartDate, "dddd, MMMM DD, YYYY");
        let endDate = (0, _tempo.format)(eventEndDate, "dddd, MMMM DD, YYYY");
        let countdown = (0, _tempo.diffDays)(eventStartDate, currentDate);
        let daysPassed = (0, _tempo.diffDays)(eventEndDate, currentDate);
        if (daysPassed < 0) {
            if (daysPassed === -1) console.log(event.name + " ended " + Math.abs(daysPassed) + " day ago.");
            else console.log(event.name + " ended " + Math.abs(daysPassed) + " days ago.");
        } else {
            if (countdown <= 0) eventsSection = '<section class="event event-' + event.id + ' border-2 border-black rounded-xl px-4 py-5 flex justify-between hover:drop-shadow hover:shadow-md hover:shadow-indigo-300"><div id="eventInfo">';
            else eventsSection = '<section class="event event-' + event.id + ' border border-black rounded-xl px-4 py-5 flex justify-between hover:drop-shadow hover:shadow-md hover:shadow-indigo-300"><div id="eventInfo">';
            if (event.link === "") eventsSection += '<h4 class="mb-2 text-xl font-medium">' + event.name + "</h4>";
            else eventsSection += '<h4 class="mb-2 text-xl font-medium">' + event.name + '<a href="' + event.link + '" title="' + event.name + '" target="_blank" class="hover:text-indigo-700">' + linkIcon + "</a></h4>";
            eventsSection += '<p><span class="font-medium">Location:</span> ' + event.location + "</p>" + '<p><span class="font-medium">Begin:</span> ' + startDate + "</p>" + '<p><span class="font-medium">End:</span> ' + endDate + '</p></div><div id="eventCountdown" class="text-center">';
            if (countdown < 0) eventsSection += fireIcon + '<p class="font-bold">Ongoing!</p></div></section>';
            else if (countdown === 0) eventsSection += rocketIcon + '<p class="font-bold">Today is the day!</p></div></section>';
            else if (countdown === 1) eventsSection += '<p class="text-7xl">' + countdown + '</p><p class="font-bold">day to go</p>' + "</div></section>";
            else eventsSection += '<p class="text-7xl">' + countdown + '</p><p class="font-bold">days to go</p>' + "</div></section>";
        }
        eventsListEl.insertAdjacentHTML("beforeend", eventsSection);
    });
}
window.addEventListener("load", (event)=>{
    eventsLoadingEl.classList.remove("hidden");
    setTimeout(function() {
        eventsLoadingEl.classList.add("hidden");
    }, 1500);
    // setTimeout(function() { listEvents() }, 2000);
    setTimeout(function() {
        displayData();
    }, 2000);
});
btnAdd.addEventListener("click", (event)=>{
    console.log("This button will add a new event");
});
btnUpdate.addEventListener("click", (event)=>{
    eventsSection = "";
    eventsListEl.textContent = "";
    eventsLoadingTextEl.textContent = "Updating events";
    eventsLoadingEl.classList.remove("hidden");
    setTimeout(function() {
        eventsLoadingEl.classList.add("hidden");
    }, 1500);
    // setTimeout(function() { listEvents() }, 2000);
    setTimeout(function() {
        displayData();
    }, 2000);
});

},{"@formkit/tempo":"bPFbk","@supabase/supabase-js":"04ZJL","console":"8kdFB","bd5103096a294280":"5LFKi"}],"bPFbk":[function(require,module,exports) {
// src/iso8601.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addDay", ()=>addDay);
parcelHelpers.export(exports, "addHour", ()=>addHour);
parcelHelpers.export(exports, "addMinute", ()=>addMinute);
parcelHelpers.export(exports, "addMonth", ()=>addMonth);
parcelHelpers.export(exports, "addSecond", ()=>addSecond);
parcelHelpers.export(exports, "addYear", ()=>addYear);
parcelHelpers.export(exports, "ap", ()=>ap);
parcelHelpers.export(exports, "applyOffset", ()=>applyOffset);
parcelHelpers.export(exports, "date", ()=>date);
parcelHelpers.export(exports, "dayEnd", ()=>dayEnd);
parcelHelpers.export(exports, "dayOfYear", ()=>dayOfYear);
parcelHelpers.export(exports, "dayStart", ()=>dayStart);
parcelHelpers.export(exports, "diffDays", ()=>diffDays);
parcelHelpers.export(exports, "diffHours", ()=>diffHours);
parcelHelpers.export(exports, "diffMilliseconds", ()=>diffMilliseconds);
parcelHelpers.export(exports, "diffMinutes", ()=>diffMinutes);
parcelHelpers.export(exports, "diffMonths", ()=>diffMonths);
parcelHelpers.export(exports, "diffSeconds", ()=>diffSeconds);
parcelHelpers.export(exports, "diffWeeks", ()=>diffWeeks);
parcelHelpers.export(exports, "diffYears", ()=>diffYears);
parcelHelpers.export(exports, "format", ()=>format);
parcelHelpers.export(exports, "formatStr", ()=>formatStr);
parcelHelpers.export(exports, "fourDigitYear", ()=>fourDigitYear);
parcelHelpers.export(exports, "hourEnd", ()=>hourEnd);
parcelHelpers.export(exports, "hourStart", ()=>hourStart);
parcelHelpers.export(exports, "isAfter", ()=>isAfter);
parcelHelpers.export(exports, "isBefore", ()=>isBefore);
parcelHelpers.export(exports, "isEqual", ()=>isEqual);
parcelHelpers.export(exports, "iso8601", ()=>iso8601);
parcelHelpers.export(exports, "minuteEnd", ()=>minuteEnd);
parcelHelpers.export(exports, "minuteStart", ()=>minuteStart);
parcelHelpers.export(exports, "monthDays", ()=>monthDays);
parcelHelpers.export(exports, "monthEnd", ()=>monthEnd);
parcelHelpers.export(exports, "monthStart", ()=>monthStart);
parcelHelpers.export(exports, "nearestDay", ()=>nearestDay);
parcelHelpers.export(exports, "offset", ()=>offset);
parcelHelpers.export(exports, "parse", ()=>parse);
parcelHelpers.export(exports, "parseParts", ()=>parseParts);
parcelHelpers.export(exports, "parts", ()=>parts);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "removeOffset", ()=>removeOffset);
parcelHelpers.export(exports, "sameDay", ()=>sameDay);
parcelHelpers.export(exports, "sameHour", ()=>sameHour);
parcelHelpers.export(exports, "sameMinute", ()=>sameMinute);
parcelHelpers.export(exports, "sameSecond", ()=>sameSecond);
parcelHelpers.export(exports, "sameYear", ()=>sameYear);
parcelHelpers.export(exports, "tzDate", ()=>tzDate);
parcelHelpers.export(exports, "weekEnd", ()=>weekEnd);
parcelHelpers.export(exports, "weekStart", ()=>weekStart);
parcelHelpers.export(exports, "yearDays", ()=>yearDays);
parcelHelpers.export(exports, "yearEnd", ()=>yearEnd);
parcelHelpers.export(exports, "yearStart", ()=>yearStart);
var iso8601Match = /^([0-9]{4})-([0-1][0-9])(?:-([0-3][0-9]))?(?:[T ]?([0-2][0-9])(?::([0-5][0-9]))?(?::([0-5][0-9]))?)?(?:\.[0-9]+)?(Z|(?:\+|\-)[0-9]{2}:?[0-9]{2})?$/;
function iso8601(date2) {
    const matches = date2.match(iso8601Match);
    if (matches) {
        const month = Number(matches[2]);
        if (month < 1 || month > 12) return false;
        matches[3];
        {
            const date3 = Number(matches[3]);
            if (date3 < 1 || date3 > 31) return false;
        }
        matches[4];
        {
            const hours = Number(matches[4]);
            if (hours < 0 || hours > 23) return false;
        }
        return true;
    }
    return false;
}
// src/date.ts
function normalize(date2) {
    const matches = date2.match(iso8601Match);
    if (matches && typeof matches[4] === "undefined") return date2 += "T00:00:00";
    return date2;
}
function date(date2) {
    if (!date2) date2 = /* @__PURE__ */ new Date();
    if (date2 instanceof Date) {
        const d = new Date(date2);
        d.setMilliseconds(0);
        return d;
    }
    date2 = date2.trim();
    if (iso8601(date2)) return new Date(normalize(date2));
    throw new Error(`Non ISO 8601 compliant date (${date2}).`);
}
// src/addDay.ts
function addDay(inputDate, count = 1) {
    const d = date(inputDate);
    d.setDate(d.getDate() + count);
    return d;
}
// src/monthEnd.ts
function monthEnd(inputDate) {
    const d = date(inputDate);
    d.setDate(1);
    d.setMonth(d.getMonth() + 1);
    d.setDate(0);
    return d;
}
// src/monthDays.ts
function monthDays(inputDate) {
    const d = monthEnd(inputDate);
    return d.getDate();
}
// src/addMonth.ts
function addMonth(inputDate, count = 1, dateOverflow = false) {
    const d = date(inputDate);
    const dayOfMonth = d.getDate();
    if (!dateOverflow) d.setDate(1);
    d.setMonth(d.getMonth() + count);
    if (!dateOverflow) {
        const daysInMonth = monthDays(d);
        d.setDate(daysInMonth < dayOfMonth ? daysInMonth : dayOfMonth);
    }
    return d;
}
// src/addYear.ts
function addYear(inputDate, count = 1, dateOverflow = false) {
    const d = date(inputDate);
    const dayOfMonth = d.getDate();
    if (!dateOverflow) d.setDate(1);
    d.setFullYear(d.getFullYear() + count);
    if (!dateOverflow) {
        const daysInMonth = monthDays(d);
        d.setDate(daysInMonth < dayOfMonth ? daysInMonth : dayOfMonth);
    }
    return d;
}
// src/addHour.ts
function addHour(inputDate, count = 1) {
    const d = date(inputDate);
    d.setHours(d.getHours() + count);
    return d;
}
// src/addMinute.ts
function addMinute(inputDate, count = 1) {
    const d = date(inputDate);
    d.setMinutes(d.getMinutes() + count);
    return d;
}
// src/addSecond.ts
function addSecond(inputDate, count = 1) {
    const d = date(inputDate);
    d.setSeconds(d.getSeconds() + count);
    return d;
}
// src/common.ts
var specDate = "1999-03-04T02:05:01.000Z";
var memoParts = /* @__PURE__ */ new Map();
var clockAgnostic = [
    [
        "YYYY",
        {
            year: "numeric"
        }
    ],
    [
        "YY",
        {
            year: "2-digit"
        }
    ],
    [
        "MMMM",
        {
            month: "long"
        }
    ],
    [
        "MMM",
        {
            month: "short"
        }
    ],
    [
        "MM",
        {
            month: "2-digit"
        }
    ],
    [
        "M",
        {
            month: "numeric"
        }
    ],
    [
        "DD",
        {
            day: "2-digit"
        }
    ],
    [
        "D",
        {
            day: "numeric"
        }
    ],
    [
        "dddd",
        {
            weekday: "long"
        }
    ],
    [
        "ddd",
        {
            weekday: "short"
        }
    ],
    [
        "d",
        {
            weekday: "narrow"
        }
    ],
    [
        "mm",
        {
            minute: "2-digit"
        }
    ],
    [
        "m",
        {
            minute: "numeric"
        }
    ],
    [
        "ss",
        {
            second: "2-digit"
        }
    ],
    [
        "s",
        {
            second: "numeric"
        }
    ],
    [
        "ZZ",
        {
            timeZoneName: "long"
        }
    ],
    [
        "Z",
        {
            timeZoneName: "short"
        }
    ]
];
var clock24 = [
    [
        "HH",
        {
            hour: "2-digit"
        }
    ],
    [
        "H",
        {
            hour: "numeric"
        }
    ]
];
var clock12 = [
    [
        "hh",
        {
            hour: "2-digit"
        }
    ],
    [
        "h",
        {
            hour: "numeric"
        }
    ],
    [
        "a",
        {
            dayPeriod: "narrow"
        }
    ],
    [
        "A",
        {
            dayPeriod: "narrow"
        }
    ]
];
var fixedLength = {
    DD: 2,
    HH: 2,
    MM: 2,
    YY: 2,
    YYYY: 4,
    hh: 2,
    mm: 2,
    ss: 2
};
function fixedLengthByOffset(offsetString) {
    if (/^[+-]\d{2}:\d{2}/.test(offsetString)) return 6;
    if (/^[+-]\d{4}/.test(offsetString)) return 5;
    throw new Error("Invalid offset format");
}
var genitiveTokens = [
    "MMMM",
    "MMM",
    "dddd",
    "ddd"
];
var tokens = /* @__PURE__ */ new Map(/* @__PURE__ */ [
    ...clockAgnostic,
    ...clock24,
    ...clock12
].map((format2)=>{
    return [
        format2[0],
        format2
    ];
}));
var dayPeriodMap = /* @__PURE__ */ new Map();
var styles = [
    "full",
    "long",
    "medium",
    "short"
];
var two = (n)=>String(n).padStart(2, "0");
var four = (n)=>String(n).padStart(2, "0");
function normStr(part) {
    if (part.type === "literal") part.value = part.value.normalize("NFKC");
    return part;
}
function fill(inputDate, parts2, locale, genitive = false, offset2 = null) {
    const partMap = createPartMap(inputDate, parts2, locale, genitive);
    const d = date(inputDate);
    function value({ partName, partValue, token }) {
        if (partName === "literal") return partValue;
        const value2 = partMap[partName];
        if (partName === "hour" && token === "H") return value2.replace(/^0/, "") || "0";
        if ([
            "mm",
            "ss",
            "MM"
        ].includes(token) && value2.length === 1) return `0${value2}`;
        if (partName === "dayPeriod") {
            const p = ap(d.getUTCHours() < 12 ? "am" : "pm", locale);
            return token === "A" ? p.toUpperCase() : p.toLowerCase();
        }
        if (partName === "timeZoneName") return offset2 != null ? offset2 : minsToOffset(-1 * d.getTimezoneOffset(), token);
        return value2;
    }
    return parts2.map((part)=>{
        return {
            ...part,
            value: value(part)
        };
    });
}
function createPartMap(inputDate, parts2, locale, genitive = false) {
    const d = date(inputDate);
    const hour12 = parts2.filter((part)=>part.hour12);
    const hour24 = parts2.filter((part)=>!part.hour12);
    const valueParts = [];
    const genitiveParts = [];
    function addValues(requestedParts, hour122 = false) {
        const preciseLocale = `${locale}-u-hc-${hour122 ? "h12" : "h23"}`;
        valueParts.push(...new Intl.DateTimeFormat(preciseLocale, requestedParts.reduce((options, part)=>{
            if (part.partName === "literal") return options;
            if (genitive && genitiveTokens.includes(part.token)) genitiveParts.push(part);
            return Object.assign(options, part.option);
        }, {
            timeZone: "UTC"
        })).formatToParts(d).map(normStr));
        if (genitive && genitiveParts.length) for (const part of genitiveParts){
            let formattedParts = [];
            switch(part.token){
                case "MMMM":
                    formattedParts = new Intl.DateTimeFormat(preciseLocale, {
                        dateStyle: "long",
                        timeZone: "UTC"
                    }).formatToParts(d).map(normStr);
                    break;
                case "MMM":
                    formattedParts = new Intl.DateTimeFormat(preciseLocale, {
                        dateStyle: "medium",
                        timeZone: "UTC"
                    }).formatToParts(d).map(normStr);
                    break;
            }
            const genitiveFormattedPart = formattedParts.find((p)=>p.type === part.partName);
            const index = valueParts.findIndex((p)=>p.type === part.partName);
            if (genitiveFormattedPart && index > -1) valueParts[index] = genitiveFormattedPart;
        }
    }
    if (hour12.length) addValues(hour12, true);
    if (hour24.length) addValues(hour24);
    return valueParts.reduce((map, part)=>{
        map[part.type] = part.value;
        return map;
    }, {});
}
function minsToOffset(timeDiffInMins, token = "Z") {
    const hours = String(Math.floor(Math.abs(timeDiffInMins / 60))).padStart(2, "0");
    const mins = String(Math.abs(timeDiffInMins % 60)).padStart(2, "0");
    const sign = timeDiffInMins < 0 ? "-" : "+";
    if (token === "ZZ") return `${sign}${hours}${mins}`;
    return `${sign}${hours}:${mins}`;
}
function offsetToMins(offset2, token) {
    validOffset(offset2, token);
    const [_, sign, hours, mins] = offset2.match(/([+-])([0-3][0-9]):?([0-6][0-9])/);
    const offsetInMins = Number(hours) * 60 + Number(mins);
    return sign === "+" ? offsetInMins : -offsetInMins;
}
function validOffset(offset2, token = "Z") {
    const valid = ((token2)=>{
        switch(token2){
            case "Z":
                return /^([+-])[0-3][0-9]:[0-6][0-9]$/.test(offset2);
            case "ZZ":
                return /^([+-])[0-3][0-9][0-6][0-9]$/.test(offset2);
        }
    })(token);
    if (!valid) throw new Error(`Invalid offset: ${offset2}`);
    return offset2;
}
function escapeTokens(str) {
    return clockAgnostic.concat(clock24).concat(clock12).sort((a, b)=>a[0].length > b[0].length ? 1 : -1).reduce((target, part)=>{
        return target.replace(part[0], `\\${part[0]}`);
    }, str);
}
function isNumeric(part) {
    return [
        "numeric",
        "2-digit"
    ].includes(part.partValue);
}
function validate(parts2) {
    let lastPart = void 0;
    for (const part of parts2){
        if (part.partName === "literal" && !isNaN(parseFloat(part.partValue))) throw new Error(`Numbers in format (${part.partValue}).`);
        if (lastPart && lastPart.partName !== "literal" && part.partName !== "literal") {
            if (!(lastPart.token in fixedLength) && !(part.token in fixedLength) && !(isNumeric(lastPart) && part.token.toLowerCase() === "a")) throw new Error(`Illegal adjacent tokens (${lastPart.token}, ${part.token})`);
        }
        lastPart = part;
    }
    return parts2;
}
function getOffsetFormat(format2) {
    if (typeof format2 === "string") return format2.includes("ZZ") ? "ZZ" : "Z";
    return "time" in format2 && format2.time === "full" ? "Z" : "ZZ";
}
// src/ap.ts
function ap(ampm, locale) {
    const l = dayPeriodMap.get(locale);
    if (l && l[ampm]) return l[ampm];
    const specimen = new Date(specDate);
    specimen.setUTCHours(ampm === "am" ? 5 : 20);
    const subparts = new Intl.DateTimeFormat(locale, {
        timeStyle: "full",
        timeZone: "UTC",
        hour12: true
    }).formatToParts(specimen).map(normStr);
    const period = subparts.find((part)=>part.type === "dayPeriod");
    if (period) {
        const localePeriods = l || {};
        dayPeriodMap.set(locale, Object.assign(localePeriods, {
            [ampm]: period.value
        }));
        return period.value;
    }
    return ampm;
}
// src/applyOffset.ts
function applyOffset(dateInput, offset2 = "+00:00") {
    const d = date(dateInput);
    const token = (()=>{
        switch(fixedLengthByOffset(offset2)){
            case 5:
                return "ZZ";
            case 6:
                return "Z";
        }
    })();
    const timeDiffInMins = offsetToMins(offset2, token);
    return new Date(d.getTime() + timeDiffInMins * 60000);
}
// src/deviceTZ.ts
function deviceTZ() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
// src/offset.ts
function relativeTime(d, timeZone) {
    const utcParts = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone,
        hourCycle: "h23"
    }).formatToParts(d).map(normStr);
    const parts2 = {};
    utcParts.forEach((part)=>{
        parts2[part.type] = part.value;
    });
    return /* @__PURE__ */ new Date(`${parts2.year}-${parts2.month}-${parts2.day}T${parts2.hour}:${parts2.minute}:${parts2.second}Z`);
}
function offset(utcTime, tzA = "UTC", tzB = "device", timeZoneToken = "Z") {
    var _a;
    tzB = tzB === "device" ? (_a = deviceTZ()) != null ? _a : "utc" : tzB;
    const d = date(utcTime);
    const timeA = relativeTime(d, tzA);
    const timeB = relativeTime(d, tzB);
    const timeDiffInMins = (timeB.getTime() - timeA.getTime()) / 1e3 / 60;
    return minsToOffset(timeDiffInMins, timeZoneToken);
}
// src/tzDate.ts
function tzDate(inputDate, tz) {
    const d = date(inputDate);
    return applyOffset(d, offset(d, tz));
}
// src/dayOfYear.ts
function dayOfYear(inputDate) {
    const d = date(inputDate);
    return Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0).getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 864e5);
}
// src/dayEnd.ts
function dayEnd(inputDate) {
    const d = date(inputDate);
    d.setHours(23, 59, 59, 999);
    return d;
}
// src/dayStart.ts
function dayStart(inputDate) {
    const d = date(inputDate);
    d.setHours(0, 0, 0);
    return d;
}
// src/parts.ts
function parts(format2, locale) {
    if (styles.includes(format2) || typeof format2 === "object") return styleParts(format2, locale);
    let f = format2;
    let match = 0;
    const testPattern = (pattern)=>{
        if (!pattern[2]) pattern[2] = new RegExp(`(.)?(${pattern[0]})`, "g");
        if (pattern[2].test(f)) {
            let didAdd = 0;
            f = f.replace(pattern[2], (_, prefix, actualMatch)=>{
                if (prefix === "\\") return actualMatch;
                return `${typeof prefix === "string" ? prefix : ""}{!${didAdd++ ? match : match++}!}`;
            });
            return !!didAdd;
        }
        return false;
    };
    function validate2(patterns) {
        const parts3 = patterns.map((part)=>part.partName);
        const deduped = new Set(parts3);
        if (parts3.length > deduped.size) throw new Error(`Cannot reuse format tokens.`);
        return patterns;
    }
    function createPart(hour12, [token, option, exp]) {
        const partName = Object.keys(option)[0];
        const partValue = option[partName];
        return {
            option,
            partName,
            partValue,
            token,
            pattern: exp,
            hour12
        };
    }
    const found24Patterns = clockAgnostic.filter(testPattern).concat(clock24.filter(testPattern)).map(createPart.bind(null, false));
    const parts2 = validate2(found24Patterns.concat(clock12.filter(testPattern).map(createPart.bind(null, true))));
    const extractIndex = /^\{!(\d+)!\}$/;
    return f.split(/(\{!\d+!\})/).map((match2)=>{
        const hasIndex = match2.match(extractIndex);
        if (hasIndex) return parts2[Number(hasIndex[1])];
        return {
            option: {
                literal: match2
            },
            partName: "literal",
            partValue: match2,
            token: match2,
            pattern: new RegExp(""),
            hour12: false
        };
    }).filter((part)=>!(part.partName === "literal" && part.partValue === ""));
}
function styleParts(format2, locale) {
    const options = {
        timeZone: "UTC"
    };
    if (typeof format2 === "string") options.dateStyle = format2;
    else {
        if ("date" in format2) options.dateStyle = format2.date;
        if ("time" in format2) options.timeStyle = format2.time;
    }
    const formatter = new Intl.DateTimeFormat(locale, options);
    const segments = formatter.formatToParts(new Date(specDate)).map(normStr);
    const hourTypeSegments = formatter.formatToParts(/* @__PURE__ */ new Date("1999-04-05T23:05:01.000Z")).map(normStr);
    const hourPart = hourTypeSegments.find((segment)=>segment.type === "hour");
    const hourType = hourPart && hourPart.value === "23" ? 24 : 12;
    return segments.map((part)=>{
        const partName = part.type;
        const formatPattern = guessPattern(part.type, part.value, locale, part.type === "hour" ? hourType : void 0, options);
        if (formatPattern === void 0) return;
        const partValue = formatPattern[1][partName];
        if (!partValue) return;
        if (!formatPattern[2]) formatPattern[2] = new RegExp(`${formatPattern[0]}`, "g");
        return {
            option: {
                [partName]: partValue
            },
            partName,
            partValue,
            token: formatPattern[0],
            pattern: formatPattern[2],
            hour12: hourType === 12
        };
    }).filter((part)=>!!part);
}
function guessPattern(partName, partValue, locale, hour, options) {
    const l = partValue.length;
    const n = !isNaN(Number(partValue));
    let style;
    switch(partName){
        case "year":
            return l === 2 ? tokens.get("YY") : tokens.get("YYYY");
        case "month":
            if (n) return l === 1 ? tokens.get("M") : tokens.get("MM");
            style = partStyle(locale, partName, partValue);
            switch(style){
                case "long":
                    return tokens.get("MMMM");
                default:
                    return tokens.get("MMM");
            }
        case "day":
            return l === 1 ? tokens.get("D") : tokens.get("DD");
        case "weekday":
            style = partStyle(locale, partName, partValue);
            switch(style){
                case "narrow":
                    return tokens.get("d");
                case "short":
                    return tokens.get("ddd");
                default:
                    return tokens.get("dddd");
            }
        case "hour":
            if (hour === 12) return l === 1 ? tokens.get("h") : tokens.get("hh");
            return l === 1 ? tokens.get("H") : tokens.get("HH");
        case "minute":
            return l === 1 ? tokens.get("m") : tokens.get("mm");
        case "second":
            return l === 1 ? tokens.get("s") : tokens.get("ss");
        case "dayPeriod":
            return /^[A-Z]+$/u.test(partValue) ? tokens.get("A") : tokens.get("a");
        case "literal":
            return [
                partValue,
                {
                    literal: partValue
                },
                new RegExp("")
            ];
        case "timeZoneName":
            return options.timeStyle === "full" ? tokens.get("Z") : tokens.get("ZZ");
        default:
            return void 0;
    }
}
function partStyle(locale, part, value) {
    if (!memoParts.has(locale)) {
        const date2 = new Date(specDate);
        const weekdays = [
            3,
            8,
            9,
            7,
            6,
            4,
            3
        ];
        const parts2 = [
            "weekday",
            "month",
            "dayPeriod"
        ];
        const partStyles = [
            "long",
            "short",
            "narrow"
        ];
        const formats2 = {};
        for(let i = 0; i < 12; i++){
            date2.setMonth(0 + i);
            if (i in weekdays) date2.setDate(weekdays[i]);
            date2.setUTCHours(8 + i);
            for (const style of partStyles){
                const segments = new Intl.DateTimeFormat(locale, parts2.reduce((options, part2)=>Object.assign(options, {
                        [part2]: style
                    }), {
                    hour12: true,
                    timeZone: "UTC"
                })).formatToParts(date2).map(normStr);
                if (style === "long" || style === "short") {
                    const genitiveFormattedParts = new Intl.DateTimeFormat(locale, {
                        dateStyle: style === "short" ? "medium" : "long",
                        timeZone: "UTC"
                    }).formatToParts(date2).map(normStr);
                    const genitiveMonth = genitiveFormattedParts.find((part2)=>part2.type === "month");
                    const index = segments.findIndex((part2)=>part2.type === "month");
                    if (index > -1 && genitiveMonth) segments[index] = genitiveMonth;
                }
                segments.forEach((part2)=>{
                    if (part2.type === "literal") return;
                    const type = part2.type;
                    formats2[type] = Object.assign(formats2[type] || {}, {
                        [part2.value]: style
                    });
                });
            }
        }
        memoParts.set(locale, formats2);
    }
    const formats = memoParts.get(locale);
    return formats ? formats[part][value] : void 0;
}
// src/removeOffset.ts
function removeOffset(dateInput, offset2 = "+00:00") {
    const positive = offset2.slice(0, 1) === "+";
    return applyOffset(dateInput, offset2.replace(positive ? "+" : "-", positive ? "-" : "+"));
}
// src/deviceLocale.ts
function deviceLocale() {
    return Intl.DateTimeFormat().resolvedOptions().locale;
}
// src/format.ts
function format(inputDateOrOptions, format2 = "long", locale = "device", genitive = false, partFilter) {
    let tz, forceOffset;
    if (typeof inputDateOrOptions === "object" && !(inputDateOrOptions instanceof Date)) ({ date: inputDateOrOptions, format: format2, locale, genitive, partFilter, tz } = inputDateOrOptions);
    if (format2 === "ISO8601") return date(inputDateOrOptions).toISOString();
    if (tz) forceOffset = offset(inputDateOrOptions, "utc", tz, getOffsetFormat(format2));
    tz != null ? tz : tz = deviceTZ();
    if ((tz == null ? void 0 : tz.toLowerCase()) !== "utc") inputDateOrOptions = removeOffset(inputDateOrOptions, offset(inputDateOrOptions, tz, "utc"));
    if (!locale || locale === "device") locale = deviceLocale();
    return fill(inputDateOrOptions, parts(format2, locale).filter(partFilter != null ? partFilter : ()=>true), locale, genitive, forceOffset).map((p)=>p.value).join("");
}
// src/formatStr.ts
function formatStr(format2, locale = "en", escapeLiterals = false, filterParts = ()=>true) {
    return parts(format2, locale).filter(filterParts).reduce((f, p)=>f += escapeLiterals && p.partName === "literal" ? escapeTokens(p.token) : p.token, "").normalize("NFKC");
}
// src/fourDigitYear.ts
function fourDigitYear(value) {
    const y = /* @__PURE__ */ new Date().getFullYear();
    const currentYear = y % 100;
    const century = Math.floor(y / 100);
    const parsedYear = Number(value);
    return (century + (parsedYear > currentYear + 20 ? -1 : 0)) * 100 + parsedYear;
}
// src/hourEnd.ts
function hourEnd(inputDate) {
    const d = date(inputDate);
    d.setMinutes(59, 59, 999);
    return d;
}
// src/hourStart.ts
function hourStart(inputDate) {
    const d = date(inputDate);
    d.setMinutes(0, 0);
    return d;
}
// src/minuteEnd.ts
function minuteEnd(inputDate) {
    const d = date(inputDate);
    d.setSeconds(59, 999);
    return d;
}
// src/minuteStart.ts
function minuteStart(inputDate) {
    const d = date(inputDate);
    d.setSeconds(0);
    return d;
}
// src/monthStart.ts
function monthStart(inputDate) {
    const d = date(inputDate);
    d.setDate(1);
    d.setHours(0, 0, 0);
    return d;
}
// src/yearDays.ts
function yearDays(inputDate) {
    const d = date(inputDate);
    return (new Date(d.getFullYear() + 1, 0, 0).getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 864e5;
}
// src/nearestDay.ts
function nearestDay(inputDate, search, constraint = 7) {
    let increments;
    let decrements;
    const d = date(inputDate);
    switch(constraint){
        case "month":
            decrements = d.getDate();
            increments = monthDays(d) - d.getDate();
            break;
        case "week":
            decrements = d.getDay() + 1;
            increments = 6 - d.getDay();
            break;
        case "year":
            const total = yearDays(d);
            const day = dayOfYear(d);
            decrements = day;
            increments = total - day;
            break;
        default:
            increments = decrements = constraint;
    }
    for(let i = 0; i <= increments || i < decrements; i++){
        if (i <= increments) {
            const next = addDay(d, i);
            if (search(next)) return next;
        }
        if (i && i <= decrements) {
            const prev = addDay(d, -i);
            if (search(prev)) return prev;
        }
    }
    return null;
}
// src/range.ts
function range(token, locale = "en", genitive = false) {
    const r = (n, c)=>Array(n).fill("").map((_, i)=>`${c(i)}`);
    if (token === "M") return r(12, (i)=>i + 1);
    if (token === "MM") return r(12, (i)=>{
        const m = i + 1;
        return m < 10 ? `0${m}` : m;
    });
    if (token.startsWith("M")) return range("MM").map((m)=>format(`2000-${m}-05`, token, locale, genitive));
    if (token.startsWith("d")) return r(7, (i)=>`0${i + 2}`).map((d)=>format(`2022-10-${d}`, token, locale));
    if (token === "a") return [
        ap("am", locale).toLowerCase(),
        ap("pm", locale).toLowerCase()
    ];
    if (token === "A") return [
        ap("am", locale).toUpperCase(),
        ap("pm", locale).toUpperCase()
    ];
    if (token.startsWith("Y")) {
        const year = /* @__PURE__ */ new Date().getFullYear();
        return r(120, (i)=>i + 1).reduce((ranges, i)=>{
            if (i !== "120") ranges.push(format(`${year + Number(i)}-06-06`, token, locale));
            ranges.unshift(format(`${year - Number(i)}-06-06`, token, locale));
            return ranges;
        }, [
            format(`${year}-06-06`, token, locale)
        ]);
    }
    if (token.startsWith("D")) return r(31, (i)=>`${token === "DD" && i < 9 ? "0" : ""}${i + 1}`);
    if (token.startsWith("H")) return r(24, (i)=>`${token === "HH" && i < 10 ? "0" : ""}${i}`);
    if (token.startsWith("h")) return r(12, (i)=>`${token === "hh" && i < 9 ? "0" : ""}${i + 1}`);
    if (token.startsWith("m") || token.startsWith("s")) return r(60, (i)=>`${token.length > 1 && i < 10 ? "0" : ""}${i}`);
    return [];
}
// src/parse.ts
function parse(dateStrOrOptions, format2 = "ISO8601", locale = "device") {
    let partFilter = ()=>true;
    let dateStr;
    let dateOverflow = "backward";
    if (typeof dateStrOrOptions === "object") ({ date: dateStr, format: format2 = "ISO8601", locale = "device", dateOverflow = "backward", partFilter = ()=>true } = dateStrOrOptions);
    else dateStr = dateStrOrOptions;
    if (!dateStr) throw new Error("parse() requires a date string.");
    const invalid = ()=>{
        throw new Error(`Date (${dateStr}) does not match format (${formatStr(format2, locale)})`);
    };
    if (format2 === "ISO8601") return date(dateStr);
    const genitive = styles.includes(format2) || typeof format2 === "object";
    const formatParts = validate(parts(format2, locale).filter(partFilter));
    if (!formatParts.length) throw new Error("parse() requires a pattern.");
    let parsedParts;
    try {
        parsedParts = parseParts(dateStr, formatParts);
    } catch  {
        return invalid();
    }
    const now = /* @__PURE__ */ new Date();
    const parsed = /* @__PURE__ */ new Map([
        [
            "YYYY",
            now.getFullYear()
        ],
        [
            "MM",
            now.getMonth() + 1
        ],
        [
            "DD",
            now.getDate()
        ],
        [
            "HH",
            0
        ],
        [
            "mm",
            0
        ],
        [
            "ss",
            0
        ]
    ]);
    let a = null;
    let offset2 = "";
    parsedParts.forEach((part)=>{
        if (part.partName === "literal") return;
        if (part.token === part.value) return invalid();
        const v = Number(part.value);
        if (parsed.has(part.token)) parsed.set(part.token, v);
        else if (part.token === "YY") parsed.set("YYYY", fourDigitYear(part.value));
        else {
            const t = part.token;
            if (t.startsWith("d")) return;
            else if (t === "D") parsed.set("DD", v);
            else if (t === "H" || t.startsWith("h")) parsed.set("HH", v);
            else if (t === "M") parsed.set("MM", v);
            else if (t === "a" || t === "A") a = part.value.toLowerCase() === ap("am", locale).toLowerCase();
            else if (t === "Z" || t === "ZZ") offset2 = validOffset(part.value, t);
            else {
                const values = range(t, locale, genitive);
                const index = values.indexOf(part.value);
                if (index !== -1) switch(t){
                    case "MMM":
                    case "MMMM":
                        parsed.set("MM", index + 1);
                        break;
                }
            }
        }
    });
    let hours = parsed.get("HH") || 0;
    if (a === false) {
        hours += hours === 12 ? 0 : 12;
        parsed.set("HH", hours === 24 ? 0 : hours);
    } else if (a === true && hours === 12) parsed.set("HH", 0);
    parsed.set("MM", (parsed.get("MM") || 1) - 1);
    let [Y, M, D, h, m, s] = Array.from(parsed.values());
    const maxDaysInMonth = monthDays(/* @__PURE__ */ new Date(`${four(Y)}-${two(M + 1)}-10`));
    if (maxDaysInMonth < D && dateOverflow === "throw") throw new Error(`Invalid date ${four(Y)}-${two(M + 1)}-${two(D)}`);
    D = dateOverflow === "backward" ? Math.min(D, maxDaysInMonth) : D;
    const isoString = `${four(Y)}-${two(M + 1)}-${two(D)}T${two(h)}:${two(m)}:${two(s)}${offset2}`;
    const d = new Date(isoString);
    if (isFinite(+d)) return d;
    return invalid();
}
function parseParts(dateStr, formatParts) {
    let i = 0;
    const advance = (parts2)=>[
            parts2[i++],
            parts2[i]
        ];
    let pos = 0;
    const parsed = [];
    let n = void 0;
    do {
        const [current, next] = advance(formatParts);
        n = next;
        let len = 1;
        if (current.partName === "literal") len = current.partValue.length;
        else if (current.partName === "timeZoneName") len = fixedLengthByOffset(dateStr.substring(pos));
        else if (current.token in fixedLength) len = fixedLength[current.token];
        else if (next) {
            if (next.partName === "literal") {
                len = dateStr.indexOf(next.partValue, pos) - pos;
                if (len < 0) throw new Error();
            } else if (next.partName === "dayPeriod") {
                for(let i2 = 1; i2 <= 4; i2++)if (isNaN(Number(dateStr.charAt(pos + i2)))) {
                    len = i2;
                    break;
                }
            } else {
                const nextChar = dateStr.substring(pos).search(/\d/);
                if (nextChar !== -1) len = pos + nextChar;
            }
        } else len = dateStr.length;
        parsed.push({
            ...current,
            value: dateStr.substring(pos, pos + len)
        });
        pos += len;
    }while (n);
    return parsed;
}
// src/sameDay.ts
function sameDay(inputDateA, inputDateB) {
    const a = date(inputDateA);
    const b = date(inputDateB);
    return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
}
// src/sameSecond.ts
function sameSecond(inputDateA, inputDateB) {
    const a = date(inputDateA);
    const b = date(inputDateB);
    return a.getSeconds() === b.getSeconds();
}
// src/sameMinute.ts
function sameMinute(inputDateA, inputDateB) {
    const a = date(inputDateA);
    const b = date(inputDateB);
    return a.getMinutes() === b.getMinutes();
}
// src/sameHour.ts
function sameHour(inputDateA, inputDateB) {
    const a = date(inputDateA);
    const b = date(inputDateB);
    return a.getHours() === b.getHours();
}
// src/sameYear.ts
function sameYear(inputDateA, inputDateB) {
    const a = date(inputDateA);
    const b = date(inputDateB);
    return a.getFullYear() === b.getFullYear();
}
// src/weekStart.ts
function weekStart(inputDate, startOfWeekDay = 0) {
    const d = date(inputDate);
    let diff = startOfWeekDay - d.getDay();
    if (diff > 0) diff = diff - 7;
    d.setDate(d.getDate() + diff);
    d.setHours(0, 0, 0);
    return d;
}
// src/weekEnd.ts
function weekEnd(inputDate, startOfWeekDay = 0) {
    const d = weekStart(inputDate, startOfWeekDay);
    d.setDate(d.getDate() + 6);
    d.setHours(23, 59, 59);
    return d;
}
// src/yearStart.ts
function yearStart(inputDate) {
    const d = date(inputDate);
    d.setMonth(0);
    d.setDate(1);
    d.setHours(0, 0, 0);
    return d;
}
// src/yearEnd.ts
function yearEnd(inputDate) {
    const d = date(inputDate);
    d.setMonth(11);
    d.setDate(31);
    d.setHours(23, 59, 59, 999);
    return d;
}
// src/isBefore.ts
function isBefore(inputDate, dateToCompare) {
    const _date = date(inputDate);
    const _dateToCompare = date(dateToCompare);
    return +_date < +_dateToCompare;
}
// src/isAfter.ts
function isAfter(inputDate, dateToCompare) {
    const _date = date(inputDate);
    const _dateToCompare = date(dateToCompare);
    return +_date > +_dateToCompare;
}
// src/isEqual.ts
function isEqual(dateLeft, dateRight) {
    const _dateLeft = date(dateLeft);
    const _dateRight = date(dateRight);
    return +_dateLeft === +_dateRight;
}
// src/diffMilliseconds.ts
function diffMilliseconds(dateA, dateB) {
    const left = date(dateA);
    const right = date(dateB);
    return +left - +right;
}
// src/diffRound.ts
function diffRound(value, method = "trunc") {
    const r = Math[method](value);
    return r == 0 ? 0 : r;
}
// src/diffSeconds.ts
function diffSeconds(dateA, dateB, roundingMethod) {
    return diffRound(diffMilliseconds(dateA, dateB) / 1e3, roundingMethod);
}
// src/diffMinutes.ts
function diffMinutes(dateA, dateB, roundingMethod) {
    return diffRound(diffMilliseconds(dateA, dateB) / 6e4, roundingMethod);
}
// src/diffHours.ts
function diffHours(dateA, dateB, roundingMethod) {
    return diffRound(diffMilliseconds(dateA, dateB) / 36e5, // 1000 * 60 * 60
    roundingMethod);
}
// src/diffDays.ts
function diffDays(dateA, dateB, roundingMethod) {
    return diffRound(diffMilliseconds(dateA, dateB) / 864e5, // hour * 24
    roundingMethod);
}
// src/diffWeeks.ts
function diffWeeks(dateA, dateB, roundingMethod) {
    return diffRound(diffMilliseconds(dateA, dateB) / 6048e5, // day * 7
    roundingMethod);
}
// src/diffMonths.ts
function diffMonths(dateA, dateB) {
    const l = date(dateA);
    const r = date(dateB);
    if (l < r) {
        const rs = diffMonths(r, l);
        return rs == 0 ? 0 : -rs;
    }
    let months = (l.getFullYear() - r.getFullYear()) * 12 + (l.getMonth() - r.getMonth());
    const ld = l.getDate();
    const rd = r.getDate();
    if (ld < rd) {
        const lm = monthDays(l);
        if (!(lm == ld && lm < rd)) months--;
    }
    return months == 0 ? 0 : months;
}
// src/diffYears.ts
function diffYears(dateA, dateB) {
    const r = Math.trunc(diffMonths(dateA, dateB) / 12);
    return r == 0 ? 0 : r;
}

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

},{}],"04ZJL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionsHttpError", ()=>(0, _functionsJs.FunctionsHttpError));
parcelHelpers.export(exports, "FunctionsFetchError", ()=>(0, _functionsJs.FunctionsFetchError));
parcelHelpers.export(exports, "FunctionsRelayError", ()=>(0, _functionsJs.FunctionsRelayError));
parcelHelpers.export(exports, "FunctionsError", ()=>(0, _functionsJs.FunctionsError));
parcelHelpers.export(exports, "FunctionRegion", ()=>(0, _functionsJs.FunctionRegion));
parcelHelpers.export(exports, "SupabaseClient", ()=>(0, _supabaseClientDefault.default));
parcelHelpers.export(exports, "createClient", ()=>createClient);
var _supabaseClient = require("./SupabaseClient");
var _supabaseClientDefault = parcelHelpers.interopDefault(_supabaseClient);
var _authJs = require("@supabase/auth-js");
parcelHelpers.exportAll(_authJs, exports);
var _functionsJs = require("@supabase/functions-js");
var _realtimeJs = require("@supabase/realtime-js");
parcelHelpers.exportAll(_realtimeJs, exports);
const createClient = (supabaseUrl, supabaseKey, options)=>{
    return new (0, _supabaseClientDefault.default)(supabaseUrl, supabaseKey, options);
};

},{"./SupabaseClient":"66Vb3","@supabase/auth-js":"7Q2lo","@supabase/functions-js":false,"@supabase/realtime-js":"ii5aX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66Vb3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("@supabase/functions-js");
var _postgrestJs = require("@supabase/postgrest-js");
var _realtimeJs = require("@supabase/realtime-js");
var _storageJs = require("@supabase/storage-js");
var _constants = require("./lib/constants");
var _fetch = require("./lib/fetch");
var _helpers = require("./lib/helpers");
var _supabaseAuthClient = require("./lib/SupabaseAuthClient");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class SupabaseClient {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.global.fetch A custom fetch implementation.
     * @param options.global.headers Any additional headers to send with each network request.
     */ constructor(supabaseUrl, supabaseKey, options){
        var _a, _b, _c;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        if (!supabaseUrl) throw new Error("supabaseUrl is required.");
        if (!supabaseKey) throw new Error("supabaseKey is required.");
        const _supabaseUrl = (0, _helpers.stripTrailingSlash)(supabaseUrl);
        this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace(/^http/i, "ws");
        this.authUrl = `${_supabaseUrl}/auth/v1`;
        this.storageUrl = `${_supabaseUrl}/storage/v1`;
        this.functionsUrl = `${_supabaseUrl}/functions/v1`;
        // default storage key uses the supabase project ref as a namespace
        const defaultStorageKey = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`;
        const DEFAULTS = {
            db: (0, _constants.DEFAULT_DB_OPTIONS),
            realtime: (0, _constants.DEFAULT_REALTIME_OPTIONS),
            auth: Object.assign(Object.assign({}, (0, _constants.DEFAULT_AUTH_OPTIONS)), {
                storageKey: defaultStorageKey
            }),
            global: (0, _constants.DEFAULT_GLOBAL_OPTIONS)
        };
        const settings = (0, _helpers.applySettingDefaults)(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_a = settings.auth.storageKey) !== null && _a !== void 0 ? _a : "";
        this.headers = (_b = settings.global.headers) !== null && _b !== void 0 ? _b : {};
        this.auth = this._initSupabaseAuthClient((_c = settings.auth) !== null && _c !== void 0 ? _c : {}, this.headers, settings.global.fetch);
        this.fetch = (0, _fetch.fetchWithAuth)(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers
        }, settings.realtime));
        this.rest = new (0, _postgrestJs.PostgrestClient)(`${_supabaseUrl}/rest/v1`, {
            headers: this.headers,
            schema: settings.db.schema,
            fetch: this.fetch
        });
        this._listenForAuthEvents();
    }
    /**
     * Supabase Functions allows you to deploy and invoke edge functions.
     */ get functions() {
        return new (0, _functionsJs.FunctionsClient)(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch
        });
    }
    /**
     * Supabase Storage allows you to manage user-generated content, such as photos or videos.
     */ get storage() {
        return new (0, _storageJs.StorageClient)(this.storageUrl, this.headers, this.fetch);
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        return this.rest.from(relation);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.schema
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return this.rest.schema(schema);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.rpc
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, options = {}) {
        return this.rest.rpc(fn, args, options);
    }
    /**
     * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
     *
     * @param {string} name - The name of the Realtime channel.
     * @param {Object} opts - The options to pass to the Realtime channel.
     *
     */ channel(name, opts = {
        config: {}
    }) {
        return this.realtime.channel(name, opts);
    }
    /**
     * Returns all Realtime channels.
     */ getChannels() {
        return this.realtime.getChannels();
    }
    /**
     * Unsubscribes and removes Realtime channel from Realtime client.
     *
     * @param {RealtimeChannel} channel - The name of the Realtime channel.
     *
     */ removeChannel(channel) {
        return this.realtime.removeChannel(channel);
    }
    /**
     * Unsubscribes and removes all Realtime channels from Realtime client.
     */ removeAllChannels() {
        return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            const { data } = yield this.auth.getSession();
            return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : null;
        });
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, storageKey, flowType, debug }, headers, fetch) {
        var _a;
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new (0, _supabaseAuthClient.SupabaseAuthClient)({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, authHeaders), headers),
            storageKey: storageKey,
            autoRefreshToken,
            persistSession,
            detectSessionInUrl,
            storage,
            flowType,
            debug,
            fetch,
            // auth checks if there is a custom authorizaiton header using this flag
            // so it knows whether to return an error when getUser is called with no session
            hasCustomAuthorizationHeader: (_a = "Authorization" in this.headers, _a !== void 0) ? _a : false
        });
    }
    _initRealtimeClient(options) {
        return new (0, _realtimeJs.RealtimeClient)(this.realtimeUrl, Object.assign(Object.assign({}, options), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, options === null || options === void 0 ? void 0 : options.params)
        }));
    }
    _listenForAuthEvents() {
        let data = this.auth.onAuthStateChange((event, session)=>{
            this._handleTokenChanged(event, "CLIENT", session === null || session === void 0 ? void 0 : session.access_token);
        });
        return data;
    }
    _handleTokenChanged(event, source, token) {
        if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
            // Token has changed
            this.realtime.setAuth(token !== null && token !== void 0 ? token : null);
            this.changedAccessToken = token;
        } else if (event === "SIGNED_OUT") {
            // Token is removed
            this.realtime.setAuth(this.supabaseKey);
            if (source == "STORAGE") this.auth.signOut();
            this.changedAccessToken = undefined;
        }
    }
}
exports.default = SupabaseClient;

},{"@supabase/functions-js":"7mhif","@supabase/postgrest-js":"115bT","@supabase/realtime-js":"ii5aX","@supabase/storage-js":"8f7kf","./lib/constants":"17il3","./lib/fetch":"8ZZRj","./lib/helpers":"lD7E0","./lib/SupabaseAuthClient":"bmkFW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7mhif":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionsClient", ()=>(0, _functionsClient.FunctionsClient));
parcelHelpers.export(exports, "FunctionsError", ()=>(0, _types.FunctionsError));
parcelHelpers.export(exports, "FunctionsFetchError", ()=>(0, _types.FunctionsFetchError));
parcelHelpers.export(exports, "FunctionsHttpError", ()=>(0, _types.FunctionsHttpError));
parcelHelpers.export(exports, "FunctionsRelayError", ()=>(0, _types.FunctionsRelayError));
parcelHelpers.export(exports, "FunctionRegion", ()=>(0, _types.FunctionRegion));
var _functionsClient = require("./FunctionsClient");
var _types = require("./types");

},{"./FunctionsClient":"d6XiJ","./types":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d6XiJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionsClient", ()=>FunctionsClient);
var _helper = require("./helper");
var _types = require("./types");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FunctionsClient {
    constructor(url, { headers = {}, customFetch, region = (0, _types.FunctionRegion).Any } = {}){
        this.url = url;
        this.headers = headers;
        this.region = region;
        this.fetch = (0, _helper.resolveFetch)(customFetch);
    }
    /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     */ setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     */ invoke(functionName, options = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const { headers, method, body: functionArgs } = options;
                let _headers = {};
                let { region } = options;
                if (!region) region = this.region;
                if (region && region !== "any") _headers["x-region"] = region;
                let body;
                if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, "Content-Type") || !headers)) {
                    if (typeof Blob !== "undefined" && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
                        // will work for File as File inherits Blob
                        // also works for ArrayBuffer as it is the same underlying structure as a Blob
                        _headers["Content-Type"] = "application/octet-stream";
                        body = functionArgs;
                    } else if (typeof functionArgs === "string") {
                        // plain string
                        _headers["Content-Type"] = "text/plain";
                        body = functionArgs;
                    } else if (typeof FormData !== "undefined" && functionArgs instanceof FormData) // don't set content-type headers
                    // Request will automatically add the right boundary value
                    body = functionArgs;
                    else {
                        // default, assume this is JSON
                        _headers["Content-Type"] = "application/json";
                        body = JSON.stringify(functionArgs);
                    }
                }
                const response = yield this.fetch(`${this.url}/${functionName}`, {
                    method: method || "POST",
                    // headers priority is (high to low):
                    // 1. invoke-level headers
                    // 2. client-level headers
                    // 3. default Content-Type header
                    headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                    body
                }).catch((fetchError)=>{
                    throw new (0, _types.FunctionsFetchError)(fetchError);
                });
                const isRelayError = response.headers.get("x-relay-error");
                if (isRelayError && isRelayError === "true") throw new (0, _types.FunctionsRelayError)(response);
                if (!response.ok) throw new (0, _types.FunctionsHttpError)(response);
                let responseType = ((_a = response.headers.get("Content-Type")) !== null && _a !== void 0 ? _a : "text/plain").split(";")[0].trim();
                let data;
                if (responseType === "application/json") data = yield response.json();
                else if (responseType === "application/octet-stream") data = yield response.blob();
                else if (responseType === "text/event-stream") data = response;
                else if (responseType === "multipart/form-data") data = yield response.formData();
                else // default to text
                data = yield response.text();
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
}

},{"./helper":"d4OOV","./types":"d69d9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4OOV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveFetch", ()=>resolveFetch);
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>require("db8a7a5aa4509164").then(({ default: fetch1 })=>fetch1(...args));
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};

},{"db8a7a5aa4509164":"43ht9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"43ht9":[function(require,module,exports) {
module.exports = Promise.resolve(module.bundle.root("9dHVQ"));

},{}],"d69d9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionsError", ()=>FunctionsError);
parcelHelpers.export(exports, "FunctionsFetchError", ()=>FunctionsFetchError);
parcelHelpers.export(exports, "FunctionsRelayError", ()=>FunctionsRelayError);
parcelHelpers.export(exports, "FunctionsHttpError", ()=>FunctionsHttpError);
parcelHelpers.export(exports, "FunctionRegion", ()=>FunctionRegion);
class FunctionsError extends Error {
    constructor(message, name = "FunctionsError", context){
        super(message);
        this.name = name;
        this.context = context;
    }
}
class FunctionsFetchError extends FunctionsError {
    constructor(context){
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", context);
    }
}
class FunctionsRelayError extends FunctionsError {
    constructor(context){
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", context);
    }
}
class FunctionsHttpError extends FunctionsError {
    constructor(context){
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", context);
    }
}
var FunctionRegion;
(function(FunctionRegion) {
    FunctionRegion["Any"] = "any";
    FunctionRegion["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion["ApSouth1"] = "ap-south-1";
    FunctionRegion["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion["CaCentral1"] = "ca-central-1";
    FunctionRegion["EuCentral1"] = "eu-central-1";
    FunctionRegion["EuWest1"] = "eu-west-1";
    FunctionRegion["EuWest2"] = "eu-west-2";
    FunctionRegion["EuWest3"] = "eu-west-3";
    FunctionRegion["SaEast1"] = "sa-east-1";
    FunctionRegion["UsEast1"] = "us-east-1";
    FunctionRegion["UsWest1"] = "us-west-1";
    FunctionRegion["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"115bT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PostgrestClient", ()=>(0, _postgrestClientDefault.default));
parcelHelpers.export(exports, "PostgrestQueryBuilder", ()=>(0, _postgrestQueryBuilderDefault.default));
parcelHelpers.export(exports, "PostgrestFilterBuilder", ()=>(0, _postgrestFilterBuilderDefault.default));
parcelHelpers.export(exports, "PostgrestTransformBuilder", ()=>(0, _postgrestTransformBuilderDefault.default));
parcelHelpers.export(exports, "PostgrestBuilder", ()=>(0, _postgrestBuilderDefault.default));
var _postgrestClient = require("./PostgrestClient");
var _postgrestClientDefault = parcelHelpers.interopDefault(_postgrestClient);
var _postgrestQueryBuilder = require("./PostgrestQueryBuilder");
var _postgrestQueryBuilderDefault = parcelHelpers.interopDefault(_postgrestQueryBuilder);
var _postgrestFilterBuilder = require("./PostgrestFilterBuilder");
var _postgrestFilterBuilderDefault = parcelHelpers.interopDefault(_postgrestFilterBuilder);
var _postgrestTransformBuilder = require("./PostgrestTransformBuilder");
var _postgrestTransformBuilderDefault = parcelHelpers.interopDefault(_postgrestTransformBuilder);
var _postgrestBuilder = require("./PostgrestBuilder");
var _postgrestBuilderDefault = parcelHelpers.interopDefault(_postgrestBuilder);

},{"./PostgrestClient":"bEwso","./PostgrestQueryBuilder":"7VyN8","./PostgrestFilterBuilder":"6Prbt","./PostgrestTransformBuilder":"bztnC","./PostgrestBuilder":"dCZYJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bEwso":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postgrestQueryBuilder = require("./PostgrestQueryBuilder");
var _postgrestQueryBuilderDefault = parcelHelpers.interopDefault(_postgrestQueryBuilder);
var _postgrestFilterBuilder = require("./PostgrestFilterBuilder");
var _postgrestFilterBuilderDefault = parcelHelpers.interopDefault(_postgrestFilterBuilder);
var _constants = require("./constants");
class PostgrestClient {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */ constructor(url, { headers = {}, schema, fetch } = {}){
        this.url = url;
        this.headers = Object.assign(Object.assign({}, (0, _constants.DEFAULT_HEADERS)), headers);
        this.schemaName = schema;
        this.fetch = fetch;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        const url = new URL(`${this.url}/${relation}`);
        return new (0, _postgrestQueryBuilderDefault.default)(url, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return new PostgrestClient(this.url, {
            headers: this.headers,
            schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, { head = false, get = false, count } = {}) {
        let method;
        const url = new URL(`${this.url}/rpc/${fn}`);
        let body;
        if (head || get) {
            method = head ? "HEAD" : "GET";
            Object.entries(args)// params with undefined value needs to be filtered out, otherwise it'll
            // show up as `?param=undefined`
            .filter(([_, value])=>value !== undefined)// array values need special syntax
            .map(([name, value])=>[
                    name,
                    Array.isArray(value) ? `{${value.join(",")}}` : `${value}`
                ]).forEach(([name, value])=>{
                url.searchParams.append(name, value);
            });
        } else {
            method = "POST";
            body = args;
        }
        const headers = Object.assign({}, this.headers);
        if (count) headers["Prefer"] = `count=${count}`;
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url,
            headers,
            schema: this.schemaName,
            body,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
}
exports.default = PostgrestClient;

},{"./PostgrestQueryBuilder":"7VyN8","./PostgrestFilterBuilder":"6Prbt","./constants":"3cetg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7VyN8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postgrestFilterBuilder = require("./PostgrestFilterBuilder");
var _postgrestFilterBuilderDefault = parcelHelpers.interopDefault(_postgrestFilterBuilder);
class PostgrestQueryBuilder {
    constructor(url, { headers = {}, schema, fetch }){
        this.url = url;
        this.headers = headers;
        this.schema = schema;
        this.fetch = fetch;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ select(columns, { head = false, count } = {}) {
        const method = head ? "HEAD" : "GET";
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c)=>{
            if (/\s/.test(c) && !quoted) return "";
            if (c === '"') quoted = !quoted;
            return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        if (count) this.headers["Prefer"] = `count=${count}`;
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */ insert(values, { count, defaultToNull = true } = {}) {
        const method = "POST";
        const prefersHeaders = [];
        if (this.headers["Prefer"]) prefersHeaders.push(this.headers["Prefer"]);
        if (count) prefersHeaders.push(`count=${count}`);
        if (!defaultToNull) prefersHeaders.push("missing=default");
        this.headers["Prefer"] = prefersHeaders.join(",");
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set("columns", uniqueColumns.join(","));
            }
        }
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */ upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
        const method = "POST";
        const prefersHeaders = [
            `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`
        ];
        if (onConflict !== undefined) this.url.searchParams.set("on_conflict", onConflict);
        if (this.headers["Prefer"]) prefersHeaders.push(this.headers["Prefer"]);
        if (count) prefersHeaders.push(`count=${count}`);
        if (!defaultToNull) prefersHeaders.push("missing=default");
        this.headers["Prefer"] = prefersHeaders.join(",");
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set("columns", uniqueColumns.join(","));
            }
        }
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ update(values, { count } = {}) {
        const method = "PATCH";
        const prefersHeaders = [];
        if (this.headers["Prefer"]) prefersHeaders.push(this.headers["Prefer"]);
        if (count) prefersHeaders.push(`count=${count}`);
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ delete({ count } = {}) {
        const method = "DELETE";
        const prefersHeaders = [];
        if (count) prefersHeaders.push(`count=${count}`);
        if (this.headers["Prefer"]) prefersHeaders.unshift(this.headers["Prefer"]);
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
}
exports.default = PostgrestQueryBuilder;

},{"./PostgrestFilterBuilder":"6Prbt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Prbt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postgrestTransformBuilder = require("./PostgrestTransformBuilder");
var _postgrestTransformBuilderDefault = parcelHelpers.interopDefault(_postgrestTransformBuilder);
class PostgrestFilterBuilder extends (0, _postgrestTransformBuilderDefault.default) {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ eq(column, value) {
        this.url.searchParams.append(column, `eq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ neq(column, value) {
        this.url.searchParams.append(column, `neq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gt(column, value) {
        this.url.searchParams.append(column, `gt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gte(column, value) {
        this.url.searchParams.append(column, `gte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lt(column, value) {
        this.url.searchParams.append(column, `lt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lte(column, value) {
        this.url.searchParams.append(column, `lte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ like(column, pattern) {
        this.url.searchParams.append(column, `like.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAllOf(column, patterns) {
        this.url.searchParams.append(column, `like(all).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `like(any).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ ilike(column, pattern) {
        this.url.searchParams.append(column, `ilike.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAllOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(all).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(any).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ is(column, value) {
        this.url.searchParams.append(column, `is.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */ in(column, values) {
        const cleanedValues = Array.from(new Set(values)).map((s)=>{
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === "string" && new RegExp("[,()]").test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(",");
        this.url.searchParams.append(column, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ contains(column, value) {
        if (typeof value === "string") // range types can be inclusive '[', ']' or exclusive '(', ')' so just
        // keep it simple and accept a string
        this.url.searchParams.append(column, `cs.${value}`);
        else if (Array.isArray(value)) // array
        this.url.searchParams.append(column, `cs.{${value.join(",")}}`);
        else // json
        this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ containedBy(column, value) {
        if (typeof value === "string") // range
        this.url.searchParams.append(column, `cd.${value}`);
        else if (Array.isArray(value)) // array
        this.url.searchParams.append(column, `cd.{${value.join(",")}}`);
        else // json
        this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGt(column, range) {
        this.url.searchParams.append(column, `sr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGte(column, range) {
        this.url.searchParams.append(column, `nxl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLt(column, range) {
        this.url.searchParams.append(column, `sl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLte(column, range) {
        this.url.searchParams.append(column, `nxr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeAdjacent(column, range) {
        this.url.searchParams.append(column, `adj.${range}`);
        return this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */ overlaps(column, value) {
        if (typeof value === "string") // range
        this.url.searchParams.append(column, `ov.${value}`);
        else // array
        this.url.searchParams.append(column, `ov.{${value.join(",")}}`);
        return this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */ textSearch(column, query, { config, type } = {}) {
        let typePart = "";
        if (type === "plain") typePart = "pl";
        else if (type === "phrase") typePart = "ph";
        else if (type === "websearch") typePart = "w";
        const configPart = config === undefined ? "" : `(${config})`;
        this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */ match(query) {
        Object.entries(query).forEach(([column, value])=>{
            this.url.searchParams.append(column, `eq.${value}`);
        });
        return this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ not(column, operator, value) {
        this.url.searchParams.append(column, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */ or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.or` : "or";
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ filter(column, operator, value) {
        this.url.searchParams.append(column, `${operator}.${value}`);
        return this;
    }
}
exports.default = PostgrestFilterBuilder;

},{"./PostgrestTransformBuilder":"bztnC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bztnC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postgrestBuilder = require("./PostgrestBuilder");
var _postgrestBuilderDefault = parcelHelpers.interopDefault(_postgrestBuilder);
class PostgrestTransformBuilder extends (0, _postgrestBuilderDefault.default) {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */ select(columns) {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c)=>{
            if (/\s/.test(c) && !quoted) return "";
            if (c === '"') quoted = !quoted;
            return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        if (this.headers["Prefer"]) this.headers["Prefer"] += ",";
        this.headers["Prefer"] += "return=representation";
        return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.order` : "order";
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}${nullsFirst === undefined ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"}`);
        return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limit the query result by starting at an offset (`from`) and ending at the offset (`from + to`).
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
        const keyOffset = typeof referencedTable === "undefined" ? "offset" : `${referencedTable}.offset`;
        const keyLimit = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */ single() {
        this.headers["Accept"] = "application/vnd.pgrst.object+json";
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */ maybeSingle() {
        // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
        // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
        if (this.method === "GET") this.headers["Accept"] = "application/json";
        else this.headers["Accept"] = "application/vnd.pgrst.object+json";
        this.isMaybeSingle = true;
        return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */ csv() {
        this.headers["Accept"] = "text/csv";
        return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */ geojson() {
        this.headers["Accept"] = "application/geo+json";
        return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */ explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = "text" } = {}) {
        var _a;
        const options = [
            analyze ? "analyze" : null,
            verbose ? "verbose" : null,
            settings ? "settings" : null,
            buffers ? "buffers" : null,
            wal ? "wal" : null
        ].filter(Boolean).join("|");
        // An Accept header can carry multiple media types but postgrest-js always sends one
        const forMediatype = (_a = this.headers["Accept"]) !== null && _a !== void 0 ? _a : "application/json";
        this.headers["Accept"] = `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`;
        if (format === "json") return this;
        else return this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */ rollback() {
        var _a;
        if (((_a = this.headers["Prefer"]) !== null && _a !== void 0 ? _a : "").trim().length > 0) this.headers["Prefer"] += ",tx=rollback";
        else this.headers["Prefer"] = "tx=rollback";
        return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     */ returns() {
        return this;
    }
}
exports.default = PostgrestTransformBuilder;

},{"./PostgrestBuilder":"dCZYJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCZYJ":[function(require,module,exports) {
// @ts-ignore
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nodeFetch = require("@supabase/node-fetch");
var _nodeFetchDefault = parcelHelpers.interopDefault(_nodeFetch);
var _postgrestError = require("./PostgrestError");
var _postgrestErrorDefault = parcelHelpers.interopDefault(_postgrestError);
class PostgrestBuilder {
    constructor(builder){
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = builder.headers;
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = builder.shouldThrowOnError;
        this.signal = builder.signal;
        this.isMaybeSingle = builder.isMaybeSingle;
        if (builder.fetch) this.fetch = builder.fetch;
        else if (typeof fetch === "undefined") this.fetch = (0, _nodeFetchDefault.default);
        else this.fetch = fetch;
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (this.schema === undefined) ;
        else if ([
            "GET",
            "HEAD"
        ].includes(this.method)) this.headers["Accept-Profile"] = this.schema;
        else this.headers["Content-Profile"] = this.schema;
        if (this.method !== "GET" && this.method !== "HEAD") this.headers["Content-Type"] = "application/json";
        // NOTE: Invoke w/o `this` to avoid illegal invocation error.
        // https://github.com/supabase/postgrest-js/pull/247
        const _fetch = this.fetch;
        let res = _fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async (res)=>{
            var _a, _b, _c;
            let error = null;
            let data = null;
            let count = null;
            let status = res.status;
            let statusText = res.statusText;
            if (res.ok) {
                if (this.method !== "HEAD") {
                    const body = await res.text();
                    if (body === "") ;
                    else if (this.headers["Accept"] === "text/csv") data = body;
                    else if (this.headers["Accept"] && this.headers["Accept"].includes("application/vnd.pgrst.plan+text")) data = body;
                    else data = JSON.parse(body);
                }
                const countHeader = (_a = this.headers["Prefer"]) === null || _a === void 0 ? void 0 : _a.match(/count=(exact|planned|estimated)/);
                const contentRange = (_b = res.headers.get("content-range")) === null || _b === void 0 ? void 0 : _b.split("/");
                if (countHeader && contentRange && contentRange.length > 1) count = parseInt(contentRange[1]);
                // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
                // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
                if (this.isMaybeSingle && this.method === "GET" && Array.isArray(data)) {
                    if (data.length > 1) {
                        error = {
                            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                            code: "PGRST116",
                            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: "JSON object requested, multiple (or no) rows returned"
                        };
                        data = null;
                        count = null;
                        status = 406;
                        statusText = "Not Acceptable";
                    } else if (data.length === 1) data = data[0];
                    else data = null;
                }
            } else {
                const body = await res.text();
                try {
                    error = JSON.parse(body);
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (Array.isArray(error) && res.status === 404) {
                        data = [];
                        error = null;
                        status = 200;
                        statusText = "OK";
                    }
                } catch (_d) {
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (res.status === 404 && body === "") {
                        status = 204;
                        statusText = "No Content";
                    } else error = {
                        message: body
                    };
                }
                if (error && this.isMaybeSingle && ((_c = error === null || error === void 0 ? void 0 : error.details) === null || _c === void 0 ? void 0 : _c.includes("0 rows"))) {
                    error = null;
                    status = 200;
                    statusText = "OK";
                }
                if (error && this.shouldThrowOnError) throw new (0, _postgrestErrorDefault.default)(error);
            }
            const postgrestResponse = {
                error,
                data,
                count,
                status,
                statusText
            };
            return postgrestResponse;
        });
        if (!this.shouldThrowOnError) res = res.catch((fetchError)=>{
            var _a, _b, _c;
            return {
                error: {
                    message: `${(_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : "FetchError"}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                    details: `${(_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ""}`,
                    hint: "",
                    code: `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : ""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            };
        });
        return res.then(onfulfilled, onrejected);
    }
}
exports.default = PostgrestBuilder;

},{"@supabase/node-fetch":"9dHVQ","./PostgrestError":"80Zmn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dHVQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetch", ()=>fetch);
parcelHelpers.export(exports, "Headers", ()=>Headers);
parcelHelpers.export(exports, "Request", ()=>Request);
parcelHelpers.export(exports, "Response", ()=>Response);
var global = arguments[3];
"use strict";
// ref: https://github.com/tc39/proposal-global
var getGlobal = function() {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof global !== "undefined") return global;
    throw new Error("unable to locate global object");
};
var globalObject = getGlobal();
const fetch = globalObject.fetch;
exports.default = globalObject.fetch.bind(globalObject);
const Headers = globalObject.Headers;
const Request = globalObject.Request;
const Response = globalObject.Response;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80Zmn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class PostgrestError extends Error {
    constructor(context){
        super(context.message);
        this.name = "PostgrestError";
        this.details = context.details;
        this.hint = context.hint;
        this.code = context.code;
    }
}
exports.default = PostgrestError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3cetg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
var _version = require("./version");
const DEFAULT_HEADERS = {
    "X-Client-Info": `postgrest-js/${(0, _version.version)}`
};

},{"./version":"98teW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98teW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "1.15.5";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ii5aX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RealtimePresence", ()=>(0, _realtimePresenceDefault.default));
parcelHelpers.export(exports, "RealtimeChannel", ()=>(0, _realtimeChannelDefault.default));
parcelHelpers.export(exports, "RealtimeClient", ()=>(0, _realtimeClientDefault.default));
parcelHelpers.export(exports, "REALTIME_LISTEN_TYPES", ()=>(0, _realtimeChannel.REALTIME_LISTEN_TYPES));
parcelHelpers.export(exports, "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT", ()=>(0, _realtimeChannel.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT));
parcelHelpers.export(exports, "REALTIME_PRESENCE_LISTEN_EVENTS", ()=>(0, _realtimePresence.REALTIME_PRESENCE_LISTEN_EVENTS));
parcelHelpers.export(exports, "REALTIME_SUBSCRIBE_STATES", ()=>(0, _realtimeChannel.REALTIME_SUBSCRIBE_STATES));
parcelHelpers.export(exports, "REALTIME_CHANNEL_STATES", ()=>(0, _realtimeChannel.REALTIME_CHANNEL_STATES));
var _realtimeClient = require("./RealtimeClient");
var _realtimeClientDefault = parcelHelpers.interopDefault(_realtimeClient);
var _realtimeChannel = require("./RealtimeChannel");
var _realtimeChannelDefault = parcelHelpers.interopDefault(_realtimeChannel);
var _realtimePresence = require("./RealtimePresence");
var _realtimePresenceDefault = parcelHelpers.interopDefault(_realtimePresence);

},{"./RealtimeClient":"40Ac7","./RealtimeChannel":"7VOkr","./RealtimePresence":"7hJI0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"40Ac7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("./lib/constants");
var _timer = require("./lib/timer");
var _timerDefault = parcelHelpers.interopDefault(_timer);
var _serializer = require("./lib/serializer");
var _serializerDefault = parcelHelpers.interopDefault(_serializer);
var _realtimeChannel = require("./RealtimeChannel");
var _realtimeChannelDefault = parcelHelpers.interopDefault(_realtimeChannel);
const noop = ()=>{};
const NATIVE_WEBSOCKET_AVAILABLE = typeof WebSocket !== "undefined";
class RealtimeClient {
    /**
     * Initializes the Socket.
     *
     * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
     * @param options.transport The Websocket Transport, for example WebSocket.
     * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
     * @param options.params The optional params to pass when connecting.
     * @param options.headers The optional headers to pass when connecting.
     * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
     * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
     * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
     * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
     * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
     */ constructor(endPoint, options){
        var _a;
        this.accessToken = null;
        this.apiKey = null;
        this.channels = [];
        this.endPoint = "";
        this.headers = (0, _constants.DEFAULT_HEADERS);
        this.params = {};
        this.timeout = (0, _constants.DEFAULT_TIMEOUT);
        this.heartbeatIntervalMs = 30000;
        this.heartbeatTimer = undefined;
        this.pendingHeartbeatRef = null;
        this.ref = 0;
        this.logger = noop;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new (0, _serializerDefault.default)();
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        };
        /**
         * Use either custom fetch, if provided, or default fetch to make HTTP requests
         *
         * @internal
         */ this._resolveFetch = (customFetch)=>{
            let _fetch;
            if (customFetch) _fetch = customFetch;
            else if (typeof fetch === "undefined") _fetch = (...args)=>require("3ea8640035012c43").then(({ default: fetch1 })=>fetch1(...args));
            else _fetch = fetch;
            return (...args)=>_fetch(...args);
        };
        this.endPoint = `${endPoint}/${(0, _constants.TRANSPORTS).websocket}`;
        if (options === null || options === void 0 ? void 0 : options.transport) this.transport = options.transport;
        else this.transport = null;
        if (options === null || options === void 0 ? void 0 : options.params) this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.headers) this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
        if (options === null || options === void 0 ? void 0 : options.timeout) this.timeout = options.timeout;
        if (options === null || options === void 0 ? void 0 : options.logger) this.logger = options.logger;
        if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) this.heartbeatIntervalMs = options.heartbeatIntervalMs;
        const accessToken = (_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey;
        if (accessToken) {
            this.accessToken = accessToken;
            this.apiKey = accessToken;
        }
        this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs) ? options.reconnectAfterMs : (tries)=>{
            return [
                1000,
                2000,
                5000,
                10000
            ][tries - 1] || 10000;
        };
        this.encode = (options === null || options === void 0 ? void 0 : options.encode) ? options.encode : (payload, callback)=>{
            return callback(JSON.stringify(payload));
        };
        this.decode = (options === null || options === void 0 ? void 0 : options.decode) ? options.decode : this.serializer.decode.bind(this.serializer);
        this.reconnectTimer = new (0, _timerDefault.default)(async ()=>{
            this.disconnect();
            this.connect();
        }, this.reconnectAfterMs);
        this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
    }
    /**
     * Connects the socket, unless already connected.
     */ connect() {
        if (this.conn) return;
        if (this.transport) {
            this.conn = new this.transport(this._endPointURL(), undefined, {
                headers: this.headers
            });
            return;
        }
        if (NATIVE_WEBSOCKET_AVAILABLE) {
            this.conn = new WebSocket(this._endPointURL());
            this.setupConnection();
            return;
        }
        this.conn = new WSWebSocketDummy(this._endPointURL(), undefined, {
            close: ()=>{
                this.conn = null;
            }
        });
        require("c4dfe9bfdd39a2b7").then(({ default: WS })=>{
            this.conn = new WS(this._endPointURL(), undefined, {
                headers: this.headers
            });
            this.setupConnection();
        });
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     */ disconnect(code, reason) {
        if (this.conn) {
            this.conn.onclose = function() {}; // noop
            if (code) this.conn.close(code, reason !== null && reason !== void 0 ? reason : "");
            else this.conn.close();
            this.conn = null;
            // remove open handles
            this.heartbeatTimer && clearInterval(this.heartbeatTimer);
            this.reconnectTimer.reset();
        }
    }
    /**
     * Returns all created channels
     */ getChannels() {
        return this.channels;
    }
    /**
     * Unsubscribes and removes a single channel
     * @param channel A RealtimeChannel instance
     */ async removeChannel(channel) {
        const status = await channel.unsubscribe();
        if (this.channels.length === 0) this.disconnect();
        return status;
    }
    /**
     * Unsubscribes and removes all channels
     */ async removeAllChannels() {
        const values_1 = await Promise.all(this.channels.map((channel)=>channel.unsubscribe()));
        this.disconnect();
        return values_1;
    }
    /**
     * Logs the message.
     *
     * For customized logging, `this.logger` can be overridden.
     */ log(kind, msg, data) {
        this.logger(kind, msg, data);
    }
    /**
     * Returns the current state of the socket.
     */ connectionState() {
        switch(this.conn && this.conn.readyState){
            case (0, _constants.SOCKET_STATES).connecting:
                return (0, _constants.CONNECTION_STATE).Connecting;
            case (0, _constants.SOCKET_STATES).open:
                return (0, _constants.CONNECTION_STATE).Open;
            case (0, _constants.SOCKET_STATES).closing:
                return (0, _constants.CONNECTION_STATE).Closing;
            default:
                return (0, _constants.CONNECTION_STATE).Closed;
        }
    }
    /**
     * Returns `true` is the connection is open.
     */ isConnected() {
        return this.connectionState() === (0, _constants.CONNECTION_STATE).Open;
    }
    channel(topic, params = {
        config: {}
    }) {
        const chan = new (0, _realtimeChannelDefault.default)(`realtime:${topic}`, params, this);
        this.channels.push(chan);
        return chan;
    }
    /**
     * Push out a message if the socket is connected.
     *
     * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
     */ push(data) {
        const { topic, event, payload, ref } = data;
        const callback = ()=>{
            this.encode(data, (result)=>{
                var _a;
                (_a = this.conn) === null || _a === void 0 || _a.send(result);
            });
        };
        this.log("push", `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) callback();
        else this.sendBuffer.push(callback);
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * @param token A JWT string.
     */ setAuth(token) {
        this.accessToken = token;
        this.channels.forEach((channel)=>{
            token && channel.updateJoinPayload({
                access_token: token
            });
            if (channel.joinedOnce && channel._isJoined()) channel._push((0, _constants.CHANNEL_EVENTS).access_token, {
                access_token: token
            });
        });
    }
    /**
     * Return the next message ref, accounting for overflows
     *
     * @internal
     */ _makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) this.ref = 0;
        else this.ref = newRef;
        return this.ref.toString();
    }
    /**
     * Unsubscribe from channels with the specified topic.
     *
     * @internal
     */ _leaveOpenTopic(topic) {
        let dupChannel = this.channels.find((c)=>c.topic === topic && (c._isJoined() || c._isJoining()));
        if (dupChannel) {
            this.log("transport", `leaving duplicate topic "${topic}"`);
            dupChannel.unsubscribe();
        }
    }
    /**
     * Removes a subscription from the socket.
     *
     * @param channel An open subscription.
     *
     * @internal
     */ _remove(channel) {
        this.channels = this.channels.filter((c)=>c._joinRef() !== channel._joinRef());
    }
    /**
     * Sets up connection handlers.
     *
     * @internal
     */ setupConnection() {
        if (this.conn) {
            this.conn.binaryType = "arraybuffer";
            this.conn.onopen = ()=>this._onConnOpen();
            this.conn.onerror = (error)=>this._onConnError(error);
            this.conn.onmessage = (event)=>this._onConnMessage(event);
            this.conn.onclose = (event)=>this._onConnClose(event);
        }
    }
    /**
     * Returns the URL of the websocket.
     *
     * @internal
     */ _endPointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: (0, _constants.VSN)
        }));
    }
    /** @internal */ _onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg)=>{
            let { topic, event, payload, ref } = msg;
            if (ref && ref === this.pendingHeartbeatRef || event === (payload === null || payload === void 0 ? void 0 : payload.type)) this.pendingHeartbeatRef = null;
            this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
            this.channels.filter((channel)=>channel._isMember(topic)).forEach((channel)=>channel._trigger(event, payload, ref));
            this.stateChangeCallbacks.message.forEach((callback)=>callback(msg));
        });
    }
    /** @internal */ _onConnOpen() {
        this.log("transport", `connected to ${this._endPointURL()}`);
        this._flushSendBuffer();
        this.reconnectTimer.reset();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(()=>this._sendHeartbeat(), this.heartbeatIntervalMs);
        this.stateChangeCallbacks.open.forEach((callback)=>callback());
    }
    /** @internal */ _onConnClose(event) {
        this.log("transport", "close", event);
        this._triggerChanError();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.reconnectTimer.scheduleTimeout();
        this.stateChangeCallbacks.close.forEach((callback)=>callback(event));
    }
    /** @internal */ _onConnError(error) {
        this.log("transport", error.message);
        this._triggerChanError();
        this.stateChangeCallbacks.error.forEach((callback)=>callback(error));
    }
    /** @internal */ _triggerChanError() {
        this.channels.forEach((channel)=>channel._trigger((0, _constants.CHANNEL_EVENTS).error));
    }
    /** @internal */ _appendParams(url, params) {
        if (Object.keys(params).length === 0) return url;
        const prefix = url.match(/\?/) ? "&" : "?";
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
    }
    /** @internal */ _flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
            this.sendBuffer.forEach((callback)=>callback());
            this.sendBuffer = [];
        }
    }
    /** @internal */ _sendHeartbeat() {
        var _a;
        if (!this.isConnected()) return;
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null;
            this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            (_a = this.conn) === null || _a === void 0 || _a.close((0, _constants.WS_CLOSE_NORMAL), "hearbeat timeout");
            return;
        }
        this.pendingHeartbeatRef = this._makeRef();
        this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        this.setAuth(this.accessToken);
    }
}
exports.default = RealtimeClient;
class WSWebSocketDummy {
    constructor(address, _protocols, options){
        this.binaryType = "arraybuffer";
        this.onclose = ()=>{};
        this.onerror = ()=>{};
        this.onmessage = ()=>{};
        this.onopen = ()=>{};
        this.readyState = (0, _constants.SOCKET_STATES).connecting;
        this.send = ()=>{};
        this.url = null;
        this.url = address;
        this.close = options.close;
    }
}

},{"./lib/constants":"jdaS4","./lib/timer":"2kNsn","./lib/serializer":"4eoeK","./RealtimeChannel":"7VOkr","3ea8640035012c43":"43ht9","c4dfe9bfdd39a2b7":"aCkQ8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jdaS4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
parcelHelpers.export(exports, "VSN", ()=>VSN);
parcelHelpers.export(exports, "DEFAULT_TIMEOUT", ()=>DEFAULT_TIMEOUT);
parcelHelpers.export(exports, "WS_CLOSE_NORMAL", ()=>WS_CLOSE_NORMAL);
parcelHelpers.export(exports, "SOCKET_STATES", ()=>SOCKET_STATES);
parcelHelpers.export(exports, "CHANNEL_STATES", ()=>CHANNEL_STATES);
parcelHelpers.export(exports, "CHANNEL_EVENTS", ()=>CHANNEL_EVENTS);
parcelHelpers.export(exports, "TRANSPORTS", ()=>TRANSPORTS);
parcelHelpers.export(exports, "CONNECTION_STATE", ()=>CONNECTION_STATE);
var _version = require("./version");
const DEFAULT_HEADERS = {
    "X-Client-Info": `realtime-js/${(0, _version.version)}`
};
const VSN = "1.0.0";
const DEFAULT_TIMEOUT = 10000;
const WS_CLOSE_NORMAL = 1000;
var SOCKET_STATES;
(function(SOCKET_STATES) {
    SOCKET_STATES[SOCKET_STATES["connecting"] = 0] = "connecting";
    SOCKET_STATES[SOCKET_STATES["open"] = 1] = "open";
    SOCKET_STATES[SOCKET_STATES["closing"] = 2] = "closing";
    SOCKET_STATES[SOCKET_STATES["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function(CHANNEL_STATES) {
    CHANNEL_STATES["closed"] = "closed";
    CHANNEL_STATES["errored"] = "errored";
    CHANNEL_STATES["joined"] = "joined";
    CHANNEL_STATES["joining"] = "joining";
    CHANNEL_STATES["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function(CHANNEL_EVENTS) {
    CHANNEL_EVENTS["close"] = "phx_close";
    CHANNEL_EVENTS["error"] = "phx_error";
    CHANNEL_EVENTS["join"] = "phx_join";
    CHANNEL_EVENTS["reply"] = "phx_reply";
    CHANNEL_EVENTS["leave"] = "phx_leave";
    CHANNEL_EVENTS["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function(TRANSPORTS) {
    TRANSPORTS["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));
var CONNECTION_STATE;
(function(CONNECTION_STATE) {
    CONNECTION_STATE["Connecting"] = "connecting";
    CONNECTION_STATE["Open"] = "open";
    CONNECTION_STATE["Closing"] = "closing";
    CONNECTION_STATE["Closed"] = "closed";
})(CONNECTION_STATE || (CONNECTION_STATE = {}));

},{"./version":"eUdX4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUdX4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "2.9.5";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kNsn":[function(require,module,exports) {
/**
 * Creates a timer that accepts a `timerCalc` function to perform calculated timeout retries, such as exponential backoff.
 *
 * @example
 *    let reconnectTimer = new Timer(() => this.connect(), function(tries){
 *      return [1000, 5000, 10000][tries - 1] || 10000
 *    })
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 *    reconnectTimer.scheduleTimeout() // fires after 5000
 *    reconnectTimer.reset()
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Timer {
    constructor(callback, timerCalc){
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = undefined;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
    }
    reset() {
        this.tries = 0;
        clearTimeout(this.timer);
    }
    // Cancels any previous scheduleTimeout and schedules callback
    scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.tries = this.tries + 1;
            this.callback();
        }, this.timerCalc(this.tries + 1));
    }
}
exports.default = Timer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4eoeK":[function(require,module,exports) {
// This file draws heavily from https://github.com/phoenixframework/phoenix/commit/cf098e9cf7a44ee6479d31d911a97d3c7430c6fe
// License: https://github.com/phoenixframework/phoenix/blob/master/LICENSE.md
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Serializer {
    constructor(){
        this.HEADER_LENGTH = 1;
    }
    decode(rawPayload, callback) {
        if (rawPayload.constructor === ArrayBuffer) return callback(this._binaryDecode(rawPayload));
        if (typeof rawPayload === "string") return callback(JSON.parse(rawPayload));
        return callback({});
    }
    _binaryDecode(buffer) {
        const view = new DataView(buffer);
        const decoder = new TextDecoder();
        return this._decodeBroadcast(buffer, view, decoder);
    }
    _decodeBroadcast(buffer, view, decoder) {
        const topicSize = view.getUint8(1);
        const eventSize = view.getUint8(2);
        let offset = this.HEADER_LENGTH + 2;
        const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
        offset = offset + topicSize;
        const event = decoder.decode(buffer.slice(offset, offset + eventSize));
        offset = offset + eventSize;
        const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
        return {
            ref: null,
            topic: topic,
            event: event,
            payload: data
        };
    }
}
exports.default = Serializer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7VOkr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT", ()=>REALTIME_POSTGRES_CHANGES_LISTEN_EVENT);
parcelHelpers.export(exports, "REALTIME_LISTEN_TYPES", ()=>REALTIME_LISTEN_TYPES);
parcelHelpers.export(exports, "REALTIME_SUBSCRIBE_STATES", ()=>REALTIME_SUBSCRIBE_STATES);
parcelHelpers.export(exports, "REALTIME_CHANNEL_STATES", ()=>REALTIME_CHANNEL_STATES);
var _constants = require("./lib/constants");
var _push = require("./lib/push");
var _pushDefault = parcelHelpers.interopDefault(_push);
var _timer = require("./lib/timer");
var _timerDefault = parcelHelpers.interopDefault(_timer);
var _realtimePresence = require("./RealtimePresence");
var _realtimePresenceDefault = parcelHelpers.interopDefault(_realtimePresence);
var _transformers = require("./lib/transformers");
var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
(function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT) {
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["ALL"] = "*";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["INSERT"] = "INSERT";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["UPDATE"] = "UPDATE";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["DELETE"] = "DELETE";
})(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
var REALTIME_LISTEN_TYPES;
(function(REALTIME_LISTEN_TYPES) {
    REALTIME_LISTEN_TYPES["BROADCAST"] = "broadcast";
    REALTIME_LISTEN_TYPES["PRESENCE"] = "presence";
    /**
     * listen to Postgres changes.
     */ REALTIME_LISTEN_TYPES["POSTGRES_CHANGES"] = "postgres_changes";
})(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
var REALTIME_SUBSCRIBE_STATES;
(function(REALTIME_SUBSCRIBE_STATES) {
    REALTIME_SUBSCRIBE_STATES["SUBSCRIBED"] = "SUBSCRIBED";
    REALTIME_SUBSCRIBE_STATES["TIMED_OUT"] = "TIMED_OUT";
    REALTIME_SUBSCRIBE_STATES["CLOSED"] = "CLOSED";
    REALTIME_SUBSCRIBE_STATES["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
const REALTIME_CHANNEL_STATES = (0, _constants.CHANNEL_STATES);
class RealtimeChannel {
    constructor(/** Topic name can be any string. */ topic, params = {
        config: {}
    }, socket){
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = {};
        this.state = (0, _constants.CHANNEL_STATES).closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.subTopic = topic.replace(/^realtime:/i, "");
        this.params.config = Object.assign({
            broadcast: {
                ack: false,
                self: false
            },
            presence: {
                key: ""
            }
        }, params.config);
        this.timeout = this.socket.timeout;
        this.joinPush = new (0, _pushDefault.default)(this, (0, _constants.CHANNEL_EVENTS).join, this.params, this.timeout);
        this.rejoinTimer = new (0, _timerDefault.default)(()=>this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
        this.joinPush.receive("ok", ()=>{
            this.state = (0, _constants.CHANNEL_STATES).joined;
            this.rejoinTimer.reset();
            this.pushBuffer.forEach((pushEvent)=>pushEvent.send());
            this.pushBuffer = [];
        });
        this._onClose(()=>{
            this.rejoinTimer.reset();
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`);
            this.state = (0, _constants.CHANNEL_STATES).closed;
            this.socket._remove(this);
        });
        this._onError((reason)=>{
            if (this._isLeaving() || this._isClosed()) return;
            this.socket.log("channel", `error ${this.topic}`, reason);
            this.state = (0, _constants.CHANNEL_STATES).errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive("timeout", ()=>{
            if (!this._isJoining()) return;
            this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
            this.state = (0, _constants.CHANNEL_STATES).errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this._on((0, _constants.CHANNEL_EVENTS).reply, {}, (payload, ref)=>{
            this._trigger(this._replyEventName(ref), payload);
        });
        this.presence = new (0, _realtimePresenceDefault.default)(this);
        this.broadcastEndpointURL = this._broadcastEndpointURL();
    }
    /** Subscribe registers your client with the server */ subscribe(callback, timeout = this.timeout) {
        var _a, _b;
        if (!this.socket.isConnected()) this.socket.connect();
        if (this.joinedOnce) throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
        else {
            const { config: { broadcast, presence } } = this.params;
            this._onError((e)=>callback && callback("CHANNEL_ERROR", e));
            this._onClose(()=>callback && callback("CLOSED"));
            const accessTokenPayload = {};
            const config = {
                broadcast,
                presence,
                postgres_changes: (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map((r)=>r.filter)) !== null && _b !== void 0 ? _b : []
            };
            if (this.socket.accessToken) accessTokenPayload.access_token = this.socket.accessToken;
            this.updateJoinPayload(Object.assign({
                config
            }, accessTokenPayload));
            this.joinedOnce = true;
            this._rejoin(timeout);
            this.joinPush.receive("ok", ({ postgres_changes: serverPostgresFilters })=>{
                var _a;
                this.socket.accessToken && this.socket.setAuth(this.socket.accessToken);
                if (serverPostgresFilters === undefined) {
                    callback && callback("SUBSCRIBED");
                    return;
                } else {
                    const clientPostgresBindings = this.bindings.postgres_changes;
                    const bindingsLen = (_a = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a !== void 0 ? _a : 0;
                    const newPostgresBindings = [];
                    for(let i = 0; i < bindingsLen; i++){
                        const clientPostgresBinding = clientPostgresBindings[i];
                        const { filter: { event, schema, table, filter } } = clientPostgresBinding;
                        const serverPostgresFilter = serverPostgresFilters && serverPostgresFilters[i];
                        if (serverPostgresFilter && serverPostgresFilter.event === event && serverPostgresFilter.schema === schema && serverPostgresFilter.table === table && serverPostgresFilter.filter === filter) newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), {
                            id: serverPostgresFilter.id
                        }));
                        else {
                            this.unsubscribe();
                            callback && callback("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes"));
                            return;
                        }
                    }
                    this.bindings.postgres_changes = newPostgresBindings;
                    callback && callback("SUBSCRIBED");
                    return;
                }
            }).receive("error", (error)=>{
                callback && callback("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(error).join(", ") || "error")));
                return;
            }).receive("timeout", ()=>{
                callback && callback("TIMED_OUT");
                return;
            });
        }
        return this;
    }
    presenceState() {
        return this.presence.state;
    }
    async track(payload, opts = {}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload
        }, opts.timeout || this.timeout);
    }
    async untrack(opts = {}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, opts);
    }
    on(type, filter, callback) {
        return this._on(type, filter, callback);
    }
    /**
     * Sends a message into the channel.
     *
     * @param args Arguments to send to channel
     * @param args.type The type of event to send
     * @param args.event The name of the event being sent
     * @param args.payload Payload to be sent
     * @param opts Options to be used during the send process
     */ async send(args, opts = {}) {
        var _a, _b;
        if (!this._canPush() && args.type === "broadcast") {
            const { event, payload: endpoint_payload } = args;
            const options = {
                method: "POST",
                headers: {
                    apikey: (_a = this.socket.apiKey) !== null && _a !== void 0 ? _a : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [
                        {
                            topic: this.subTopic,
                            event,
                            payload: endpoint_payload
                        }
                    ]
                })
            };
            try {
                const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_b = opts.timeout) !== null && _b !== void 0 ? _b : this.timeout);
                if (response.ok) return "ok";
                else return "error";
            } catch (error) {
                if (error.name === "AbortError") return "timed out";
                else return "error";
            }
        } else return new Promise((resolve)=>{
            var _a, _b, _c;
            const push = this._push(args.type, args, opts.timeout || this.timeout);
            if (args.type === "broadcast" && !((_c = (_b = (_a = this.params) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) resolve("ok");
            push.receive("ok", ()=>resolve("ok"));
            push.receive("error", ()=>resolve("error"));
            push.receive("timeout", ()=>resolve("timed out"));
        });
    }
    updateJoinPayload(payload) {
        this.joinPush.updatePayload(payload);
    }
    /**
     * Leaves the channel.
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */ unsubscribe(timeout = this.timeout) {
        this.state = (0, _constants.CHANNEL_STATES).leaving;
        const onClose = ()=>{
            this.socket.log("channel", `leave ${this.topic}`);
            this._trigger((0, _constants.CHANNEL_EVENTS).close, "leave", this._joinRef());
        };
        this.rejoinTimer.reset();
        // Destroy joinPush to avoid connection timeouts during unscription phase
        this.joinPush.destroy();
        return new Promise((resolve)=>{
            const leavePush = new (0, _pushDefault.default)(this, (0, _constants.CHANNEL_EVENTS).leave, {}, timeout);
            leavePush.receive("ok", ()=>{
                onClose();
                resolve("ok");
            }).receive("timeout", ()=>{
                onClose();
                resolve("timed out");
            }).receive("error", ()=>{
                resolve("error");
            });
            leavePush.send();
            if (!this._canPush()) leavePush.trigger("ok", {});
        });
    }
    /** @internal */ _broadcastEndpointURL() {
        let url = this.socket.endPoint;
        url = url.replace(/^ws/i, "http");
        url = url.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "");
        return url.replace(/\/+$/, "") + "/api/broadcast";
    }
    async _fetchWithTimeout(url, options, timeout) {
        const controller = new AbortController();
        const id = setTimeout(()=>controller.abort(), timeout);
        const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), {
            signal: controller.signal
        }));
        clearTimeout(id);
        return response;
    }
    /** @internal */ _push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let pushEvent = new (0, _pushDefault.default)(this, event, payload, timeout);
        if (this._canPush()) pushEvent.send();
        else {
            pushEvent.startTimeout();
            this.pushBuffer.push(pushEvent);
        }
        return pushEvent;
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     *
     * @internal
     */ _onMessage(_event, payload, _ref) {
        return payload;
    }
    /** @internal */ _isMember(topic) {
        return this.topic === topic;
    }
    /** @internal */ _joinRef() {
        return this.joinPush.ref;
    }
    /** @internal */ _trigger(type, payload, ref) {
        var _a, _b;
        const typeLower = type.toLocaleLowerCase();
        const { close, error, leave, join } = (0, _constants.CHANNEL_EVENTS);
        const events = [
            close,
            error,
            leave,
            join
        ];
        if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) return;
        let handledPayload = this._onMessage(typeLower, payload, ref);
        if (payload && !handledPayload) throw "channel onMessage callbacks must return the payload, modified or unmodified";
        if ([
            "insert",
            "update",
            "delete"
        ].includes(typeLower)) (_a = this.bindings.postgres_changes) === null || _a === void 0 || _a.filter((bind)=>{
            var _a, _b, _c;
            return ((_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event) === "*" || ((_c = (_b = bind.filter) === null || _b === void 0 ? void 0 : _b.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower;
        }).map((bind)=>bind.callback(handledPayload, ref));
        else (_b = this.bindings[typeLower]) === null || _b === void 0 || _b.filter((bind)=>{
            var _a, _b, _c, _d, _e, _f;
            if ([
                "broadcast",
                "presence",
                "postgres_changes"
            ].includes(typeLower)) {
                if ("id" in bind) {
                    const bindId = bind.id;
                    const bindEvent = (_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event;
                    return bindId && ((_b = payload.ids) === null || _b === void 0 ? void 0 : _b.includes(bindId)) && (bindEvent === "*" || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()));
                } else {
                    const bindEvent = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
                    return bindEvent === "*" || bindEvent === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase());
                }
            } else return bind.type.toLocaleLowerCase() === typeLower;
        }).map((bind)=>{
            if (typeof handledPayload === "object" && "ids" in handledPayload) {
                const postgresChanges = handledPayload.data;
                const { schema, table, commit_timestamp, type, errors } = postgresChanges;
                const enrichedPayload = {
                    schema: schema,
                    table: table,
                    commit_timestamp: commit_timestamp,
                    eventType: type,
                    new: {},
                    old: {},
                    errors: errors
                };
                handledPayload = Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
            }
            bind.callback(handledPayload, ref);
        });
    }
    /** @internal */ _isClosed() {
        return this.state === (0, _constants.CHANNEL_STATES).closed;
    }
    /** @internal */ _isJoined() {
        return this.state === (0, _constants.CHANNEL_STATES).joined;
    }
    /** @internal */ _isJoining() {
        return this.state === (0, _constants.CHANNEL_STATES).joining;
    }
    /** @internal */ _isLeaving() {
        return this.state === (0, _constants.CHANNEL_STATES).leaving;
    }
    /** @internal */ _replyEventName(ref) {
        return `chan_reply_${ref}`;
    }
    /** @internal */ _on(type, filter, callback) {
        const typeLower = type.toLocaleLowerCase();
        const binding = {
            type: typeLower,
            filter: filter,
            callback: callback
        };
        if (this.bindings[typeLower]) this.bindings[typeLower].push(binding);
        else this.bindings[typeLower] = [
            binding
        ];
        return this;
    }
    /** @internal */ _off(type, filter) {
        const typeLower = type.toLocaleLowerCase();
        this.bindings[typeLower] = this.bindings[typeLower].filter((bind)=>{
            var _a;
            return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower && RealtimeChannel.isEqual(bind.filter, filter));
        });
        return this;
    }
    /** @internal */ static isEqual(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
        for(const k in obj1){
            if (obj1[k] !== obj2[k]) return false;
        }
        return true;
    }
    /** @internal */ _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) this._rejoin();
    }
    /**
     * Registers a callback that will be executed when the channel closes.
     *
     * @internal
     */ _onClose(callback) {
        this._on((0, _constants.CHANNEL_EVENTS).close, {}, callback);
    }
    /**
     * Registers a callback that will be executed when the channel encounteres an error.
     *
     * @internal
     */ _onError(callback) {
        this._on((0, _constants.CHANNEL_EVENTS).error, {}, (reason)=>callback(reason));
    }
    /**
     * Returns `true` if the socket is connected and the channel has been joined.
     *
     * @internal
     */ _canPush() {
        return this.socket.isConnected() && this._isJoined();
    }
    /** @internal */ _rejoin(timeout = this.timeout) {
        if (this._isLeaving()) return;
        this.socket._leaveOpenTopic(this.topic);
        this.state = (0, _constants.CHANNEL_STATES).joining;
        this.joinPush.resend(timeout);
    }
    /** @internal */ _getPayloadRecords(payload) {
        const records = {
            new: {},
            old: {}
        };
        if (payload.type === "INSERT" || payload.type === "UPDATE") records.new = _transformers.convertChangeData(payload.columns, payload.record);
        if (payload.type === "UPDATE" || payload.type === "DELETE") records.old = _transformers.convertChangeData(payload.columns, payload.old_record);
        return records;
    }
}
exports.default = RealtimeChannel;

},{"./lib/constants":"jdaS4","./lib/push":"9YEgh","./lib/timer":"2kNsn","./RealtimePresence":"7hJI0","./lib/transformers":"iXNeD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YEgh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../lib/constants");
class Push {
    /**
     * Initializes the Push
     *
     * @param channel The Channel
     * @param event The event, for example `"phx_join"`
     * @param payload The payload, for example `{user_id: 123}`
     * @param timeout The push timeout in milliseconds
     */ constructor(channel, event, payload = {}, timeout = (0, _constants.DEFAULT_TIMEOUT)){
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = undefined;
        this.ref = "";
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
    }
    resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = "";
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
    }
    send() {
        if (this._hasReceived("timeout")) return;
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        });
    }
    updatePayload(payload) {
        this.payload = Object.assign(Object.assign({}, this.payload), payload);
    }
    receive(status, callback) {
        var _a;
        if (this._hasReceived(status)) callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
        this.recHooks.push({
            status,
            callback
        });
        return this;
    }
    startTimeout() {
        if (this.timeoutTimer) return;
        this.ref = this.channel.socket._makeRef();
        this.refEvent = this.channel._replyEventName(this.ref);
        const callback = (payload)=>{
            this._cancelRefEvent();
            this._cancelTimeout();
            this.receivedResp = payload;
            this._matchReceive(payload);
        };
        this.channel._on(this.refEvent, {}, callback);
        this.timeoutTimer = setTimeout(()=>{
            this.trigger("timeout", {});
        }, this.timeout);
    }
    trigger(status, response) {
        if (this.refEvent) this.channel._trigger(this.refEvent, {
            status,
            response
        });
    }
    destroy() {
        this._cancelRefEvent();
        this._cancelTimeout();
    }
    _cancelRefEvent() {
        if (!this.refEvent) return;
        this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = undefined;
    }
    _matchReceive({ status, response }) {
        this.recHooks.filter((h)=>h.status === status).forEach((h)=>h.callback(response));
    }
    _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
    }
}
exports.default = Push;

},{"../lib/constants":"jdaS4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7hJI0":[function(require,module,exports) {
/*
  This file draws heavily from https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/assets/js/phoenix/presence.js
  License: https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/LICENSE.md
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "REALTIME_PRESENCE_LISTEN_EVENTS", ()=>REALTIME_PRESENCE_LISTEN_EVENTS);
var REALTIME_PRESENCE_LISTEN_EVENTS;
(function(REALTIME_PRESENCE_LISTEN_EVENTS) {
    REALTIME_PRESENCE_LISTEN_EVENTS["SYNC"] = "sync";
    REALTIME_PRESENCE_LISTEN_EVENTS["JOIN"] = "join";
    REALTIME_PRESENCE_LISTEN_EVENTS["LEAVE"] = "leave";
})(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
class RealtimePresence {
    /**
     * Initializes the Presence.
     *
     * @param channel - The RealtimeChannel
     * @param opts - The options,
     *        for example `{events: {state: 'state', diff: 'diff'}}`
     */ constructor(channel, opts){
        this.channel = channel;
        this.state = {};
        this.pendingDiffs = [];
        this.joinRef = null;
        this.caller = {
            onJoin: ()=>{},
            onLeave: ()=>{},
            onSync: ()=>{}
        };
        const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(events.state, {}, (newState)=>{
            const { onJoin, onLeave, onSync } = this.caller;
            this.joinRef = this.channel._joinRef();
            this.state = RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
            this.pendingDiffs.forEach((diff)=>{
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
            });
            this.pendingDiffs = [];
            onSync();
        });
        this.channel._on(events.diff, {}, (diff)=>{
            const { onJoin, onLeave, onSync } = this.caller;
            if (this.inPendingSyncState()) this.pendingDiffs.push(diff);
            else {
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
                onSync();
            }
        });
        this.onJoin((key, currentPresences, newPresences)=>{
            this.channel._trigger("presence", {
                event: "join",
                key,
                currentPresences,
                newPresences
            });
        });
        this.onLeave((key, currentPresences, leftPresences)=>{
            this.channel._trigger("presence", {
                event: "leave",
                key,
                currentPresences,
                leftPresences
            });
        });
        this.onSync(()=>{
            this.channel._trigger("presence", {
                event: "sync"
            });
        });
    }
    /**
     * Used to sync the list of presences on the server with the
     * client's state.
     *
     * An optional `onJoin` and `onLeave` callback can be provided to
     * react to changes in the client's local presences across
     * disconnects and reconnects with the server.
     *
     * @internal
     */ static syncState(currentState, newState, onJoin, onLeave) {
        const state = this.cloneDeep(currentState);
        const transformedState = this.transformState(newState);
        const joins = {};
        const leaves = {};
        this.map(state, (key, presences)=>{
            if (!transformedState[key]) leaves[key] = presences;
        });
        this.map(transformedState, (key, newPresences)=>{
            const currentPresences = state[key];
            if (currentPresences) {
                const newPresenceRefs = newPresences.map((m)=>m.presence_ref);
                const curPresenceRefs = currentPresences.map((m)=>m.presence_ref);
                const joinedPresences = newPresences.filter((m)=>curPresenceRefs.indexOf(m.presence_ref) < 0);
                const leftPresences = currentPresences.filter((m)=>newPresenceRefs.indexOf(m.presence_ref) < 0);
                if (joinedPresences.length > 0) joins[key] = joinedPresences;
                if (leftPresences.length > 0) leaves[key] = leftPresences;
            } else joins[key] = newPresences;
        });
        return this.syncDiff(state, {
            joins,
            leaves
        }, onJoin, onLeave);
    }
    /**
     * Used to sync a diff of presence join and leave events from the
     * server, as they happen.
     *
     * Like `syncState`, `syncDiff` accepts optional `onJoin` and
     * `onLeave` callbacks to react to a user joining or leaving from a
     * device.
     *
     * @internal
     */ static syncDiff(state, diff, onJoin, onLeave) {
        const { joins, leaves } = {
            joins: this.transformState(diff.joins),
            leaves: this.transformState(diff.leaves)
        };
        if (!onJoin) onJoin = ()=>{};
        if (!onLeave) onLeave = ()=>{};
        this.map(joins, (key, newPresences)=>{
            var _a;
            const currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
            state[key] = this.cloneDeep(newPresences);
            if (currentPresences.length > 0) {
                const joinedPresenceRefs = state[key].map((m)=>m.presence_ref);
                const curPresences = currentPresences.filter((m)=>joinedPresenceRefs.indexOf(m.presence_ref) < 0);
                state[key].unshift(...curPresences);
            }
            onJoin(key, currentPresences, newPresences);
        });
        this.map(leaves, (key, leftPresences)=>{
            let currentPresences = state[key];
            if (!currentPresences) return;
            const presenceRefsToRemove = leftPresences.map((m)=>m.presence_ref);
            currentPresences = currentPresences.filter((m)=>presenceRefsToRemove.indexOf(m.presence_ref) < 0);
            state[key] = currentPresences;
            onLeave(key, currentPresences, leftPresences);
            if (currentPresences.length === 0) delete state[key];
        });
        return state;
    }
    /** @internal */ static map(obj, func) {
        return Object.getOwnPropertyNames(obj).map((key)=>func(key, obj[key]));
    }
    /**
     * Remove 'metas' key
     * Change 'phx_ref' to 'presence_ref'
     * Remove 'phx_ref' and 'phx_ref_prev'
     *
     * @example
     * // returns {
     *  abc123: [
     *    { presence_ref: '2', user_id: 1 },
     *    { presence_ref: '3', user_id: 2 }
     *  ]
     * }
     * RealtimePresence.transformState({
     *  abc123: {
     *    metas: [
     *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
     *      { phx_ref: '3', user_id: 2 }
     *    ]
     *  }
     * })
     *
     * @internal
     */ static transformState(state) {
        state = this.cloneDeep(state);
        return Object.getOwnPropertyNames(state).reduce((newState, key)=>{
            const presences = state[key];
            if ("metas" in presences) newState[key] = presences.metas.map((presence)=>{
                presence["presence_ref"] = presence["phx_ref"];
                delete presence["phx_ref"];
                delete presence["phx_ref_prev"];
                return presence;
            });
            else newState[key] = presences;
            return newState;
        }, {});
    }
    /** @internal */ static cloneDeep(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    /** @internal */ onJoin(callback) {
        this.caller.onJoin = callback;
    }
    /** @internal */ onLeave(callback) {
        this.caller.onLeave = callback;
    }
    /** @internal */ onSync(callback) {
        this.caller.onSync = callback;
    }
    /** @internal */ inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
}
exports.default = RealtimePresence;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXNeD":[function(require,module,exports) {
/**
 * Helpers to convert the change Payload into native JS types.
 */ // Adapted from epgsql (src/epgsql_binary.erl), this module licensed under
// 3-clause BSD found here: https://raw.githubusercontent.com/epgsql/epgsql/devel/LICENSE
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PostgresTypes", ()=>PostgresTypes);
parcelHelpers.export(exports, "convertChangeData", ()=>convertChangeData);
parcelHelpers.export(exports, "convertColumn", ()=>convertColumn);
parcelHelpers.export(exports, "convertCell", ()=>convertCell);
parcelHelpers.export(exports, "toBoolean", ()=>toBoolean);
parcelHelpers.export(exports, "toNumber", ()=>toNumber);
parcelHelpers.export(exports, "toJson", ()=>toJson);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "toTimestampString", ()=>toTimestampString);
var PostgresTypes;
(function(PostgresTypes) {
    PostgresTypes["abstime"] = "abstime";
    PostgresTypes["bool"] = "bool";
    PostgresTypes["date"] = "date";
    PostgresTypes["daterange"] = "daterange";
    PostgresTypes["float4"] = "float4";
    PostgresTypes["float8"] = "float8";
    PostgresTypes["int2"] = "int2";
    PostgresTypes["int4"] = "int4";
    PostgresTypes["int4range"] = "int4range";
    PostgresTypes["int8"] = "int8";
    PostgresTypes["int8range"] = "int8range";
    PostgresTypes["json"] = "json";
    PostgresTypes["jsonb"] = "jsonb";
    PostgresTypes["money"] = "money";
    PostgresTypes["numeric"] = "numeric";
    PostgresTypes["oid"] = "oid";
    PostgresTypes["reltime"] = "reltime";
    PostgresTypes["text"] = "text";
    PostgresTypes["time"] = "time";
    PostgresTypes["timestamp"] = "timestamp";
    PostgresTypes["timestamptz"] = "timestamptz";
    PostgresTypes["timetz"] = "timetz";
    PostgresTypes["tsrange"] = "tsrange";
    PostgresTypes["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
const convertChangeData = (columns, record, options = {})=>{
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
    return Object.keys(record).reduce((acc, rec_key)=>{
        acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
        return acc;
    }, {});
};
const convertColumn = (columnName, columns, record, skipTypes)=>{
    const column = columns.find((x)=>x.name === columnName);
    const colType = column === null || column === void 0 ? void 0 : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) return convertCell(colType, value);
    return noop(value);
};
const convertCell = (type, value)=>{
    // if data type is an array
    if (type.charAt(0) === "_") {
        const dataType = type.slice(1, type.length);
        return toArray(value, dataType);
    }
    // If not null, convert to correct type.
    switch(type){
        case PostgresTypes.bool:
            return toBoolean(value);
        case PostgresTypes.float4:
        case PostgresTypes.float8:
        case PostgresTypes.int2:
        case PostgresTypes.int4:
        case PostgresTypes.int8:
        case PostgresTypes.numeric:
        case PostgresTypes.oid:
            return toNumber(value);
        case PostgresTypes.json:
        case PostgresTypes.jsonb:
            return toJson(value);
        case PostgresTypes.timestamp:
            return toTimestampString(value); // Format to be consistent with PostgREST
        case PostgresTypes.abstime:
        case PostgresTypes.date:
        case PostgresTypes.daterange:
        case PostgresTypes.int4range:
        case PostgresTypes.int8range:
        case PostgresTypes.money:
        case PostgresTypes.reltime:
        case PostgresTypes.text:
        case PostgresTypes.time:
        case PostgresTypes.timestamptz:
        case PostgresTypes.timetz:
        case PostgresTypes.tsrange:
        case PostgresTypes.tstzrange:
            return noop(value);
        default:
            // Return the value for remaining types
            return noop(value);
    }
};
const noop = (value)=>{
    return value;
};
const toBoolean = (value)=>{
    switch(value){
        case "t":
            return true;
        case "f":
            return false;
        default:
            return value;
    }
};
const toNumber = (value)=>{
    if (typeof value === "string") {
        const parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) return parsedValue;
    }
    return value;
};
const toJson = (value)=>{
    if (typeof value === "string") try {
        return JSON.parse(value);
    } catch (error) {
        console.log(`JSON parse error: ${error}`);
        return value;
    }
    return value;
};
const toArray = (value, type)=>{
    if (typeof value !== "string") return value;
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    // Confirm value is a Postgres array by checking curly brackets
    if (openBrace === "{" && closeBrace === "}") {
        let arr;
        const valTrim = value.slice(1, lastIdx);
        // TODO: find a better solution to separate Postgres array data
        try {
            arr = JSON.parse("[" + valTrim + "]");
        } catch (_) {
            // WARNING: splitting on comma does not cover all edge cases
            arr = valTrim ? valTrim.split(",") : [];
        }
        return arr.map((val)=>convertCell(type, val));
    }
    return value;
};
const toTimestampString = (value)=>{
    if (typeof value === "string") return value.replace(" ", "T");
    return value;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aCkQ8":[function(require,module,exports) {
module.exports = require("69c637771cce7095")(require("fe88be8ad20f5321").getBundleURL("ixJtV") + "browser.7ada82ab.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("4OuWD"));

},{"69c637771cce7095":"61B45","fe88be8ad20f5321":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"8f7kf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageClient", ()=>(0, _storageClient.StorageClient));
var _storageClient = require("./StorageClient");
var _types = require("./lib/types");
parcelHelpers.exportAll(_types, exports);
var _errors = require("./lib/errors");
parcelHelpers.exportAll(_errors, exports);

},{"./StorageClient":"6gdt1","./lib/types":false,"./lib/errors":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6gdt1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageClient", ()=>StorageClient);
var _storageFileApi = require("./packages/StorageFileApi");
var _storageFileApiDefault = parcelHelpers.interopDefault(_storageFileApi);
var _storageBucketApi = require("./packages/StorageBucketApi");
var _storageBucketApiDefault = parcelHelpers.interopDefault(_storageBucketApi);
class StorageClient extends (0, _storageBucketApiDefault.default) {
    constructor(url, headers = {}, fetch){
        super(url, headers, fetch);
    }
    /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */ from(id) {
        return new (0, _storageFileApiDefault.default)(this.url, this.headers, id, this.fetch);
    }
}

},{"./packages/StorageFileApi":"5ZKVd","./packages/StorageBucketApi":"caYeW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ZKVd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _errors = require("../lib/errors");
var _fetch = require("../lib/fetch");
var _helpers = require("../lib/helpers");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DEFAULT_SEARCH_OPTIONS = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
};
const DEFAULT_FILE_OPTIONS = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: false
};
class StorageFileApi {
    constructor(url, headers = {}, bucketId, fetch){
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
        this.fetch = (0, _helpers.resolveFetch)(fetch);
    }
    /**
     * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
     *
     * @param method HTTP method.
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */ uploadOrUpdate(method, path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let body;
                const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), method === "POST" && {
                    "x-upsert": String(options.upsert)
                });
                if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append("cacheControl", options.cacheControl);
                    body.append("", fileBody);
                } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append("cacheControl", options.cacheControl);
                } else {
                    body = fileBody;
                    headers["cache-control"] = `max-age=${options.cacheControl}`;
                    headers["content-type"] = options.contentType;
                }
                const cleanPath = this._removeEmptyFolders(path);
                const _path = this._getFinalPath(cleanPath);
                const res = yield this.fetch(`${this.url}/object/${_path}`, Object.assign({
                    method,
                    body: body,
                    headers
                }, (options === null || options === void 0 ? void 0 : options.duplex) ? {
                    duplex: options.duplex
                } : {}));
                const data = yield res.json();
                if (res.ok) return {
                    data: {
                        path: cleanPath,
                        id: data.Id,
                        fullPath: data.Key
                    },
                    error: null
                };
                else {
                    const error = data;
                    return {
                        data: null,
                        error
                    };
                }
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Uploads a file to an existing bucket.
     *
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */ upload(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
        });
    }
    /**
     * Upload a file with a token generated from `createSignedUploadUrl`.
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param token The token generated from `createSignedUploadUrl`
     * @param fileBody The body of the file to be stored in the bucket.
     */ uploadToSignedUrl(path, token, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            const cleanPath = this._removeEmptyFolders(path);
            const _path = this._getFinalPath(cleanPath);
            const url = new URL(this.url + `/object/upload/sign/${_path}`);
            url.searchParams.set("token", token);
            try {
                let body;
                const options = Object.assign({
                    upsert: DEFAULT_FILE_OPTIONS.upsert
                }, fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), {
                    "x-upsert": String(options.upsert)
                });
                if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append("cacheControl", options.cacheControl);
                    body.append("", fileBody);
                } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append("cacheControl", options.cacheControl);
                } else {
                    body = fileBody;
                    headers["cache-control"] = `max-age=${options.cacheControl}`;
                    headers["content-type"] = options.contentType;
                }
                const res = yield this.fetch(url.toString(), {
                    method: "PUT",
                    body: body,
                    headers
                });
                const data = yield res.json();
                if (res.ok) return {
                    data: {
                        path: cleanPath,
                        fullPath: data.Key
                    },
                    error: null
                };
                else {
                    const error = data;
                    return {
                        data: null,
                        error
                    };
                }
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Creates a signed upload URL.
     * Signed upload URLs can be used to upload files to the bucket without further authentication.
     * They are valid for 2 hours.
     * @param path The file path, including the current file name. For example `folder/image.png`.
     * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
     */ createSignedUploadUrl(path, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let _path = this._getFinalPath(path);
                const headers = Object.assign({}, this.headers);
                if (options === null || options === void 0 ? void 0 : options.upsert) headers["x-upsert"] = "true";
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/upload/sign/${_path}`, {}, {
                    headers
                });
                const url = new URL(this.url + data.url);
                const token = url.searchParams.get("token");
                if (!token) throw new (0, _errors.StorageError)("No token returned by API");
                return {
                    data: {
                        signedUrl: url.toString(),
                        path,
                        token
                    },
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Replaces an existing file at the specified path with a new one.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
     * @param fileBody The body of the file to be stored in the bucket.
     */ update(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
        });
    }
    /**
     * Moves an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
     * @param options The destination options.
     */ move(fromPath, toPath, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/move`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath,
                    destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Copies an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
     * @param options The destination options.
     */ copy(fromPath, toPath, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/copy`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath,
                    destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
                }, {
                    headers: this.headers
                });
                return {
                    data: {
                        path: data.Key
                    },
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param path The file path, including the current file name. For example `folder/image.png`.
     * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */ createSignedUrl(path, expiresIn, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let _path = this._getFinalPath(path);
                let data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/sign/${_path}`, Object.assign({
                    expiresIn
                }, (options === null || options === void 0 ? void 0 : options.transform) ? {
                    transform: options.transform
                } : {}), {
                    headers: this.headers
                });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
                const signedUrl = encodeURI(`${this.url}${data.signedURL}${downloadQueryParam}`);
                data = {
                    signedUrl
                };
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
     * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     */ createSignedUrls(paths, expiresIn, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn,
                    paths
                }, {
                    headers: this.headers
                });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
                return {
                    data: data.map((datum)=>Object.assign(Object.assign({}, datum), {
                            signedUrl: datum.signedURL ? encodeURI(`${this.url}${datum.signedURL}${downloadQueryParam}`) : null
                        })),
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
     *
     * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
     * @param options.transform Transform the asset before serving it to the client.
     */ download(path, options) {
        return __awaiter(this, void 0, void 0, function*() {
            const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
            const renderPath = wantsTransformation ? "render/image/authenticated" : "object";
            const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
            const queryString = transformationQuery ? `?${transformationQuery}` : "";
            try {
                const _path = this._getFinalPath(path);
                const res = yield (0, _fetch.get)(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
                    headers: this.headers,
                    noResolveJson: true
                });
                const data = yield res.blob();
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
     * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
     *
     * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
     * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */ getPublicUrl(path, options) {
        const _path = this._getFinalPath(path);
        const _queryString = [];
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `download=${options.download === true ? "" : options.download}` : "";
        if (downloadQueryParam !== "") _queryString.push(downloadQueryParam);
        const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
        const renderPath = wantsTransformation ? "render/image" : "object";
        const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
        if (transformationQuery !== "") _queryString.push(transformationQuery);
        let queryString = _queryString.join("&");
        if (queryString !== "") queryString = `?${queryString}`;
        return {
            data: {
                publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`)
            }
        };
    }
    /**
     * Deletes files within the same bucket
     *
     * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
     */ remove(paths) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.remove)(this.fetch, `${this.url}/object/${this.bucketId}`, {
                    prefixes: paths
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Get file metadata
     * @param id the file id to retrieve metadata
     */ // async getMetadata(
    //   id: string
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Update file metadata
     * @param id the file id to update metadata
     * @param meta the new file metadata
     */ // async updateMetadata(
    //   id: string,
    //   meta: Metadata
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await post(
    //       this.fetch,
    //       `${this.url}/metadata/${id}`,
    //       { ...meta },
    //       { headers: this.headers }
    //     )
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Lists all the files within a bucket.
     * @param path The folder path.
     */ list(path, options, parameters) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), {
                    prefix: path || ""
                });
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, {
                    headers: this.headers
                }, parameters);
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    _getFinalPath(path) {
        return `${this.bucketId}/${path}`;
    }
    _removeEmptyFolders(path) {
        return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
    transformOptsToQueryString(transform) {
        const params = [];
        if (transform.width) params.push(`width=${transform.width}`);
        if (transform.height) params.push(`height=${transform.height}`);
        if (transform.resize) params.push(`resize=${transform.resize}`);
        if (transform.format) params.push(`format=${transform.format}`);
        if (transform.quality) params.push(`quality=${transform.quality}`);
        return params.join("&");
    }
}
exports.default = StorageFileApi;

},{"../lib/errors":"4rF0F","../lib/fetch":"ixSSW","../lib/helpers":"lqpHX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rF0F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageError", ()=>StorageError);
parcelHelpers.export(exports, "isStorageError", ()=>isStorageError);
parcelHelpers.export(exports, "StorageApiError", ()=>StorageApiError);
parcelHelpers.export(exports, "StorageUnknownError", ()=>StorageUnknownError);
class StorageError extends Error {
    constructor(message){
        super(message);
        this.__isStorageError = true;
        this.name = "StorageError";
    }
}
function isStorageError(error) {
    return typeof error === "object" && error !== null && "__isStorageError" in error;
}
class StorageApiError extends StorageError {
    constructor(message, status){
        super(message);
        this.name = "StorageApiError";
        this.status = status;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status
        };
    }
}
class StorageUnknownError extends StorageError {
    constructor(message, originalError){
        super(message);
        this.name = "StorageUnknownError";
        this.originalError = originalError;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ixSSW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "post", ()=>post);
parcelHelpers.export(exports, "put", ()=>put);
parcelHelpers.export(exports, "remove", ()=>remove);
var _errors = require("./errors");
var _helpers = require("./helpers");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _getErrorMessage = (err)=>err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const handleError = (error, reject)=>__awaiter(void 0, void 0, void 0, function*() {
        const Res = yield (0, _helpers.resolveResponse)();
        if (error instanceof Res) error.json().then((err)=>{
            reject(new (0, _errors.StorageApiError)(_getErrorMessage(err), error.status || 500));
        }).catch((err)=>{
            reject(new (0, _errors.StorageUnknownError)(_getErrorMessage(err), err));
        });
        else reject(new (0, _errors.StorageUnknownError)(_getErrorMessage(error), error));
    });
const _getRequestParams = (method, options, parameters, body)=>{
    const params = {
        method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET") return params;
    params.headers = Object.assign({
        "Content-Type": "application/json"
    }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
};
function _handleRequest(fetcher, method, url, options, parameters, body) {
    return __awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve, reject)=>{
            fetcher(url, _getRequestParams(method, options, parameters, body)).then((result)=>{
                if (!result.ok) throw result;
                if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
                return result.json();
            }).then((data)=>resolve(data)).catch((error)=>handleError(error, reject));
        });
    });
}
function get(fetcher, url, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "GET", url, options, parameters);
    });
}
function post(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "POST", url, options, parameters, body);
    });
}
function put(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "PUT", url, options, parameters, body);
    });
}
function remove(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "DELETE", url, options, parameters, body);
    });
}

},{"./errors":"4rF0F","./helpers":"lqpHX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqpHX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveFetch", ()=>resolveFetch);
parcelHelpers.export(exports, "resolveResponse", ()=>resolveResponse);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>require("d0262cf6b6e3064e").then(({ default: fetch1 })=>fetch1(...args));
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};
const resolveResponse = ()=>__awaiter(void 0, void 0, void 0, function*() {
        if (typeof Response === "undefined") // @ts-ignore
        return (yield require("d0262cf6b6e3064e")).Response;
        return Response;
    });

},{"d0262cf6b6e3064e":"43ht9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"caYeW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../lib/constants");
var _errors = require("../lib/errors");
var _fetch = require("../lib/fetch");
var _helpers = require("../lib/helpers");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class StorageBucketApi {
    constructor(url, headers = {}, fetch){
        this.url = url;
        this.headers = Object.assign(Object.assign({}, (0, _constants.DEFAULT_HEADERS)), headers);
        this.fetch = (0, _helpers.resolveFetch)(fetch);
    }
    /**
     * Retrieves the details of all Storage buckets within an existing project.
     */ listBuckets() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.get)(this.fetch, `${this.url}/bucket`, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Retrieves the details of an existing Storage bucket.
     *
     * @param id The unique identifier of the bucket you would like to retrieve.
     */ getBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.get)(this.fetch, `${this.url}/bucket/${id}`, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Creates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     * @returns newly created bucket id
     */ createBucket(id, options = {
        public: false
    }) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/bucket`, {
                    id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Updates a Storage bucket
     *
     * @param id A unique identifier for the bucket you are updating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     */ updateBucket(id, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.put)(this.fetch, `${this.url}/bucket/${id}`, {
                    id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Removes all objects inside a single bucket.
     *
     * @param id The unique identifier of the bucket you would like to empty.
     */ emptyBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/bucket/${id}/empty`, {}, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
     * You must first `empty()` the bucket.
     *
     * @param id The unique identifier of the bucket you would like to delete.
     */ deleteBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.remove)(this.fetch, `${this.url}/bucket/${id}`, {}, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
}
exports.default = StorageBucketApi;

},{"../lib/constants":"3R5FU","../lib/errors":"4rF0F","../lib/fetch":"ixSSW","../lib/helpers":"lqpHX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3R5FU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
var _version = require("./version");
const DEFAULT_HEADERS = {
    "X-Client-Info": `storage-js/${(0, _version.version)}`
};

},{"./version":"fa2S0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fa2S0":[function(require,module,exports) {
// generated by genversion
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "2.6.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17il3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
parcelHelpers.export(exports, "DEFAULT_GLOBAL_OPTIONS", ()=>DEFAULT_GLOBAL_OPTIONS);
parcelHelpers.export(exports, "DEFAULT_DB_OPTIONS", ()=>DEFAULT_DB_OPTIONS);
parcelHelpers.export(exports, "DEFAULT_AUTH_OPTIONS", ()=>DEFAULT_AUTH_OPTIONS);
parcelHelpers.export(exports, "DEFAULT_REALTIME_OPTIONS", ()=>DEFAULT_REALTIME_OPTIONS);
var _version = require("./version");
let JS_ENV = "";
// @ts-ignore
if (typeof Deno !== "undefined") JS_ENV = "deno";
else if (typeof document !== "undefined") JS_ENV = "web";
else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") JS_ENV = "react-native";
else JS_ENV = "node";
const DEFAULT_HEADERS = {
    "X-Client-Info": `supabase-js-${JS_ENV}/${(0, _version.version)}`
};
const DEFAULT_GLOBAL_OPTIONS = {
    headers: DEFAULT_HEADERS
};
const DEFAULT_DB_OPTIONS = {
    schema: "public"
};
const DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: "implicit"
};
const DEFAULT_REALTIME_OPTIONS = {};

},{"./version":"kFF6c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kFF6c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "2.43.5";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ZZRj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveFetch", ()=>resolveFetch);
parcelHelpers.export(exports, "resolveHeadersConstructor", ()=>resolveHeadersConstructor);
parcelHelpers.export(exports, "fetchWithAuth", ()=>fetchWithAuth);
// @ts-ignore
var _nodeFetch = require("@supabase/node-fetch");
var _nodeFetchDefault = parcelHelpers.interopDefault(_nodeFetch);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (0, _nodeFetchDefault.default);
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};
const resolveHeadersConstructor = ()=>{
    if (typeof Headers === "undefined") return 0, _nodeFetch.Headers;
    return Headers;
};
const fetchWithAuth = (supabaseKey, getAccessToken, customFetch)=>{
    const fetch1 = resolveFetch(customFetch);
    const HeadersConstructor = resolveHeadersConstructor();
    return (input, init)=>__awaiter(void 0, void 0, void 0, function*() {
            var _a;
            const accessToken = (_a = yield getAccessToken()) !== null && _a !== void 0 ? _a : supabaseKey;
            let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
            if (!headers.has("apikey")) headers.set("apikey", supabaseKey);
            if (!headers.has("Authorization")) headers.set("Authorization", `Bearer ${accessToken}`);
            return fetch1(input, Object.assign(Object.assign({}, init), {
                headers
            }));
        });
};

},{"@supabase/node-fetch":"9dHVQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lD7E0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uuid", ()=>uuid);
parcelHelpers.export(exports, "stripTrailingSlash", ()=>stripTrailingSlash);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
parcelHelpers.export(exports, "applySettingDefaults", ()=>applySettingDefaults);
function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
function stripTrailingSlash(url) {
    return url.replace(/\/$/, "");
}
const isBrowser = ()=>typeof window !== "undefined";
function applySettingDefaults(options, defaults) {
    const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
    const { db: DEFAULT_DB_OPTIONS, auth: DEFAULT_AUTH_OPTIONS, realtime: DEFAULT_REALTIME_OPTIONS, global: DEFAULT_GLOBAL_OPTIONS } = defaults;
    return {
        db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS), dbOptions),
        auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), authOptions),
        realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS), realtimeOptions),
        global: Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS), globalOptions)
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmkFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SupabaseAuthClient", ()=>SupabaseAuthClient);
var _authJs = require("@supabase/auth-js");
class SupabaseAuthClient extends (0, _authJs.AuthClient) {
    constructor(options){
        super(options);
    }
}

},{"@supabase/auth-js":"7Q2lo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Q2lo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navigatorLock", ()=>(0, _locks.navigatorLock));
parcelHelpers.export(exports, "NavigatorLockAcquireTimeoutError", ()=>(0, _locks.NavigatorLockAcquireTimeoutError));
parcelHelpers.export(exports, "lockInternals", ()=>(0, _locks.internals));
parcelHelpers.export(exports, "GoTrueAdminApi", ()=>(0, _goTrueAdminApiDefault.default));
parcelHelpers.export(exports, "GoTrueClient", ()=>(0, _goTrueClientDefault.default));
parcelHelpers.export(exports, "AuthAdminApi", ()=>(0, _authAdminApiDefault.default));
parcelHelpers.export(exports, "AuthClient", ()=>(0, _authClientDefault.default));
var _goTrueAdminApi = require("./GoTrueAdminApi");
var _goTrueAdminApiDefault = parcelHelpers.interopDefault(_goTrueAdminApi);
var _goTrueClient = require("./GoTrueClient");
var _goTrueClientDefault = parcelHelpers.interopDefault(_goTrueClient);
var _authAdminApi = require("./AuthAdminApi");
var _authAdminApiDefault = parcelHelpers.interopDefault(_authAdminApi);
var _authClient = require("./AuthClient");
var _authClientDefault = parcelHelpers.interopDefault(_authClient);
var _types = require("./lib/types");
parcelHelpers.exportAll(_types, exports);
var _errors = require("./lib/errors");
parcelHelpers.exportAll(_errors, exports);
var _locks = require("./lib/locks");

},{"./GoTrueAdminApi":"eBouV","./GoTrueClient":"san1E","./AuthAdminApi":"jiS2C","./AuthClient":"ka9HK","./lib/types":"4K6fZ","./lib/errors":"l4Miv","./lib/locks":"hJm2t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eBouV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fetch = require("./lib/fetch");
var _helpers = require("./lib/helpers");
var _errors = require("./lib/errors");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
class GoTrueAdminApi {
    constructor({ url = "", headers = {}, fetch }){
        this.url = url;
        this.headers = headers;
        this.fetch = (0, _helpers.resolveFetch)(fetch);
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        };
    }
    /**
     * Removes a logged-in session.
     * @param jwt A valid, logged-in JWT.
     * @param scope The logout sope.
     */ async signOut(jwt, scope = "global") {
        try {
            await (0, _fetch._request)(this.fetch, "POST", `${this.url}/logout?scope=${scope}`, {
                headers: this.headers,
                jwt,
                noResolveJson: true
            });
            return {
                data: null,
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * Sends an invite link to an email address.
     * @param email The email address of the user.
     * @param options Additional options to be included when inviting.
     */ async inviteUserByEmail(email, options = {}) {
        try {
            return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email,
                    data: options.data
                },
                headers: this.headers,
                redirectTo: options.redirectTo,
                xform: (0, _fetch._userResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Generates email links and OTPs to be sent via a custom email provider.
     * @param email The user's email.
     * @param options.password User password. For signup only.
     * @param options.data Optional user metadata. For signup only.
     * @param options.redirectTo The redirect url which should be appended to the generated link
     */ async generateLink(params) {
        try {
            const { options } = params, rest = __rest(params, [
                "options"
            ]);
            const body = Object.assign(Object.assign({}, rest), options);
            if ("newEmail" in rest) {
                // replace newEmail with new_email in request body
                body.new_email = rest === null || rest === void 0 ? void 0 : rest.newEmail;
                delete body["newEmail"];
            }
            return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: body,
                headers: this.headers,
                xform: (0, _fetch._generateLinkResponse),
                redirectTo: options === null || options === void 0 ? void 0 : options.redirectTo
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    properties: null,
                    user: null
                },
                error
            };
            throw error;
        }
    }
    // User Admin API
    /**
     * Creates a new user.
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async createUser(attributes) {
        try {
            return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/admin/users`, {
                body: attributes,
                headers: this.headers,
                xform: (0, _fetch._userResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Get a list of users.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
     */ async listUsers(params) {
        var _a, _b, _c, _d, _e, _f, _g;
        try {
            const pagination = {
                nextPage: null,
                lastPage: 0,
                total: 0
            };
            const response = await (0, _fetch._request)(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: true,
                query: {
                    page: (_b = (_a = params === null || params === void 0 ? void 0 : params.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "",
                    per_page: (_d = (_c = params === null || params === void 0 ? void 0 : params.perPage) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""
                },
                xform: (0, _fetch._noResolveJsonResponse)
            });
            if (response.error) throw response.error;
            const users = await response.json();
            const total = (_e = response.headers.get("x-total-count")) !== null && _e !== void 0 ? _e : 0;
            const links = (_g = (_f = response.headers.get("link")) === null || _f === void 0 ? void 0 : _f.split(",")) !== null && _g !== void 0 ? _g : [];
            if (links.length > 0) {
                links.forEach((link)=>{
                    const page = parseInt(link.split(";")[0].split("=")[1].substring(0, 1));
                    const rel = JSON.parse(link.split(";")[1].split("=")[1]);
                    pagination[`${rel}Page`] = page;
                });
                pagination.total = parseInt(total);
            }
            return {
                data: Object.assign(Object.assign({}, users), pagination),
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    users: []
                },
                error
            };
            throw error;
        }
    }
    /**
     * Get user by id.
     *
     * @param uid The user's unique identifier
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async getUserById(uid) {
        try {
            return await (0, _fetch._request)(this.fetch, "GET", `${this.url}/admin/users/${uid}`, {
                headers: this.headers,
                xform: (0, _fetch._userResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Updates the user data.
     *
     * @param attributes The data you want to update.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async updateUserById(uid, attributes) {
        try {
            return await (0, _fetch._request)(this.fetch, "PUT", `${this.url}/admin/users/${uid}`, {
                body: attributes,
                headers: this.headers,
                xform: (0, _fetch._userResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Delete a user. Requires a `service_role` key.
     *
     * @param id The user id you want to remove.
     * @param shouldSoftDelete If true, then the user will be soft-deleted (setting `deleted_at` to the current timestamp and disabling their account while preserving their data) from the auth schema.
     * Defaults to false for backward compatibility.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async deleteUser(id, shouldSoftDelete = false) {
        try {
            return await (0, _fetch._request)(this.fetch, "DELETE", `${this.url}/admin/users/${id}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: shouldSoftDelete
                },
                xform: (0, _fetch._userResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    async _listFactors(params) {
        try {
            const { data, error } = await (0, _fetch._request)(this.fetch, "GET", `${this.url}/admin/users/${params.userId}/factors`, {
                headers: this.headers,
                xform: (factors)=>{
                    return {
                        data: {
                            factors
                        },
                        error: null
                    };
                }
            });
            return {
                data,
                error
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    async _deleteFactor(params) {
        try {
            const data = await (0, _fetch._request)(this.fetch, "DELETE", `${this.url}/admin/users/${params.userId}/factors/${params.id}`, {
                headers: this.headers
            });
            return {
                data,
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
}
exports.default = GoTrueAdminApi;

},{"./lib/fetch":"d3spS","./lib/helpers":"gVab2","./lib/errors":"l4Miv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3spS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleError", ()=>handleError);
parcelHelpers.export(exports, "_request", ()=>_request);
parcelHelpers.export(exports, "_sessionResponse", ()=>_sessionResponse);
parcelHelpers.export(exports, "_sessionResponsePassword", ()=>_sessionResponsePassword);
parcelHelpers.export(exports, "_userResponse", ()=>_userResponse);
parcelHelpers.export(exports, "_ssoResponse", ()=>_ssoResponse);
parcelHelpers.export(exports, "_generateLinkResponse", ()=>_generateLinkResponse);
parcelHelpers.export(exports, "_noResolveJsonResponse", ()=>_noResolveJsonResponse);
var _constants = require("./constants");
var _helpers = require("./helpers");
var _errors = require("./errors");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const _getErrorMessage = (err)=>err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const NETWORK_ERROR_CODES = [
    502,
    503,
    504
];
async function handleError(error) {
    var _a;
    if (!(0, _helpers.looksLikeFetchResponse)(error)) throw new (0, _errors.AuthRetryableFetchError)(_getErrorMessage(error), 0);
    if (NETWORK_ERROR_CODES.includes(error.status)) // status in 500...599 range - server had an error, request might be retryed.
    throw new (0, _errors.AuthRetryableFetchError)(_getErrorMessage(error), error.status);
    let data;
    try {
        data = await error.json();
    } catch (e) {
        throw new (0, _errors.AuthUnknownError)(_getErrorMessage(e), e);
    }
    let errorCode = undefined;
    const responseAPIVersion = (0, _helpers.parseResponseAPIVersion)(error);
    if (responseAPIVersion && responseAPIVersion.getTime() >= (0, _constants.API_VERSIONS)["2024-01-01"].timestamp && typeof data === "object" && data && typeof data.code === "string") errorCode = data.code;
    else if (typeof data === "object" && data && typeof data.error_code === "string") errorCode = data.error_code;
    if (!errorCode) {
        // Legacy support for weak password errors, when there were no error codes
        if (typeof data === "object" && data && typeof data.weak_password === "object" && data.weak_password && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.reasons.reduce((a, i)=>a && typeof i === "string", true)) throw new (0, _errors.AuthWeakPasswordError)(_getErrorMessage(data), error.status, data.weak_password.reasons);
    } else if (errorCode === "weak_password") throw new (0, _errors.AuthWeakPasswordError)(_getErrorMessage(data), error.status, ((_a = data.weak_password) === null || _a === void 0 ? void 0 : _a.reasons) || []);
    throw new (0, _errors.AuthApiError)(_getErrorMessage(data), error.status || 500, errorCode);
}
const _getRequestParams = (method, options, parameters, body)=>{
    const params = {
        method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET") return params;
    params.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
};
async function _request(fetcher, method, url, options) {
    var _a;
    const headers = Object.assign({}, options === null || options === void 0 ? void 0 : options.headers);
    if (!headers[0, _constants.API_VERSION_HEADER_NAME]) headers[0, _constants.API_VERSION_HEADER_NAME] = (0, _constants.API_VERSIONS)["2024-01-01"].name;
    if (options === null || options === void 0 ? void 0 : options.jwt) headers["Authorization"] = `Bearer ${options.jwt}`;
    const qs = (_a = options === null || options === void 0 ? void 0 : options.query) !== null && _a !== void 0 ? _a : {};
    if (options === null || options === void 0 ? void 0 : options.redirectTo) qs["redirect_to"] = options.redirectTo;
    const queryString = Object.keys(qs).length ? "?" + new URLSearchParams(qs).toString() : "";
    const data = await _handleRequest(fetcher, method, url + queryString, {
        headers,
        noResolveJson: options === null || options === void 0 ? void 0 : options.noResolveJson
    }, {}, options === null || options === void 0 ? void 0 : options.body);
    return (options === null || options === void 0 ? void 0 : options.xform) ? options === null || options === void 0 ? void 0 : options.xform(data) : {
        data: Object.assign({}, data),
        error: null
    };
}
async function _handleRequest(fetcher, method, url, options, parameters, body) {
    const requestParams = _getRequestParams(method, options, parameters, body);
    let result;
    try {
        result = await fetcher(url, Object.assign({}, requestParams));
    } catch (e) {
        console.error(e);
        // fetch failed, likely due to a network or CORS error
        throw new (0, _errors.AuthRetryableFetchError)(_getErrorMessage(e), 0);
    }
    if (!result.ok) await handleError(result);
    if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
    try {
        return await result.json();
    } catch (e) {
        await handleError(e);
    }
}
function _sessionResponse(data) {
    var _a;
    let session = null;
    if (hasSession(data)) {
        session = Object.assign({}, data);
        if (!data.expires_at) session.expires_at = (0, _helpers.expiresAt)(data.expires_in);
    }
    const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return {
        data: {
            session,
            user
        },
        error: null
    };
}
function _sessionResponsePassword(data) {
    const response = _sessionResponse(data);
    if (!response.error && data.weak_password && typeof data.weak_password === "object" && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.message && typeof data.weak_password.message === "string" && data.weak_password.reasons.reduce((a, i)=>a && typeof i === "string", true)) response.data.weak_password = data.weak_password;
    return response;
}
function _userResponse(data) {
    var _a;
    const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return {
        data: {
            user
        },
        error: null
    };
}
function _ssoResponse(data) {
    return {
        data,
        error: null
    };
}
function _generateLinkResponse(data) {
    const { action_link, email_otp, hashed_token, redirect_to, verification_type } = data, rest = __rest(data, [
        "action_link",
        "email_otp",
        "hashed_token",
        "redirect_to",
        "verification_type"
    ]);
    const properties = {
        action_link,
        email_otp,
        hashed_token,
        redirect_to,
        verification_type
    };
    const user = Object.assign({}, rest);
    return {
        data: {
            properties,
            user
        },
        error: null
    };
}
function _noResolveJsonResponse(data) {
    return data;
}
/**
 * hasSession checks if the response object contains a valid session
 * @param data A response object
 * @returns true if a session is in the response
 */ function hasSession(data) {
    return data.access_token && data.refresh_token && data.expires_in;
}

},{"./constants":"kMUzl","./helpers":"gVab2","./errors":"l4Miv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kMUzl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GOTRUE_URL", ()=>GOTRUE_URL);
parcelHelpers.export(exports, "STORAGE_KEY", ()=>STORAGE_KEY);
parcelHelpers.export(exports, "AUDIENCE", ()=>AUDIENCE);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
parcelHelpers.export(exports, "EXPIRY_MARGIN", ()=>EXPIRY_MARGIN);
parcelHelpers.export(exports, "NETWORK_FAILURE", ()=>NETWORK_FAILURE);
parcelHelpers.export(exports, "API_VERSION_HEADER_NAME", ()=>API_VERSION_HEADER_NAME);
parcelHelpers.export(exports, "API_VERSIONS", ()=>API_VERSIONS);
var _version = require("./version");
const GOTRUE_URL = "http://localhost:9999";
const STORAGE_KEY = "supabase.auth.token";
const AUDIENCE = "";
const DEFAULT_HEADERS = {
    "X-Client-Info": `gotrue-js/${(0, _version.version)}`
};
const EXPIRY_MARGIN = 10; // in seconds
const NETWORK_FAILURE = {
    MAX_RETRIES: 10,
    RETRY_INTERVAL: 2
};
const API_VERSION_HEADER_NAME = "X-Supabase-Api-Version";
const API_VERSIONS = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
};

},{"./version":"03ZTv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03ZTv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "2.64.2";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gVab2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "expiresAt", ()=>expiresAt);
parcelHelpers.export(exports, "uuid", ()=>uuid);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
parcelHelpers.export(exports, "supportsLocalStorage", ()=>supportsLocalStorage);
/**
 * Extracts parameters encoded in the URL both in the query and fragment.
 */ parcelHelpers.export(exports, "parseParametersFromURL", ()=>parseParametersFromURL);
parcelHelpers.export(exports, "resolveFetch", ()=>resolveFetch);
parcelHelpers.export(exports, "looksLikeFetchResponse", ()=>looksLikeFetchResponse);
parcelHelpers.export(exports, "setItemAsync", ()=>setItemAsync);
parcelHelpers.export(exports, "getItemAsync", ()=>getItemAsync);
parcelHelpers.export(exports, "removeItemAsync", ()=>removeItemAsync);
parcelHelpers.export(exports, "decodeBase64URL", ()=>decodeBase64URL);
/**
 * A deferred represents some asynchronous work that is not yet finished, which
 * may or may not culminate in a value.
 * Taken from: https://github.com/mike-north/types/blob/master/src/async.ts
 */ parcelHelpers.export(exports, "Deferred", ()=>Deferred);
// Taken from: https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
parcelHelpers.export(exports, "decodeJWTPayload", ()=>decodeJWTPayload);
/**
 * Creates a promise that resolves to null after some time.
 */ parcelHelpers.export(exports, "sleep", ()=>sleep);
/**
 * Converts the provided async function into a retryable function. Each result
 * or thrown error is sent to the isRetryable function which should return true
 * if the function should run again.
 */ parcelHelpers.export(exports, "retryable", ()=>retryable);
// Functions below taken from: https://stackoverflow.com/questions/63309409/creating-a-code-verifier-and-challenge-for-pkce-auth-on-spotify-api-in-reactjs
parcelHelpers.export(exports, "generatePKCEVerifier", ()=>generatePKCEVerifier);
parcelHelpers.export(exports, "generatePKCEChallenge", ()=>generatePKCEChallenge);
parcelHelpers.export(exports, "getCodeChallengeAndMethod", ()=>getCodeChallengeAndMethod);
parcelHelpers.export(exports, "parseResponseAPIVersion", ()=>parseResponseAPIVersion);
var _constants = require("./constants");
function expiresAt(expiresIn) {
    const timeNow = Math.round(Date.now() / 1000);
    return timeNow + expiresIn;
}
function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
const isBrowser = ()=>typeof document !== "undefined";
const localStorageWriteTests = {
    tested: false,
    writable: false
};
const supportsLocalStorage = ()=>{
    if (!isBrowser()) return false;
    try {
        if (typeof globalThis.localStorage !== "object") return false;
    } catch (e) {
        // DOM exception when accessing `localStorage`
        return false;
    }
    if (localStorageWriteTests.tested) return localStorageWriteTests.writable;
    const randomKey = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(randomKey, randomKey);
        globalThis.localStorage.removeItem(randomKey);
        localStorageWriteTests.tested = true;
        localStorageWriteTests.writable = true;
    } catch (e) {
        // localStorage can't be written to
        // https://www.chromium.org/for-testers/bug-reporting-guidelines/uncaught-securityerror-failed-to-read-the-localstorage-property-from-window-access-is-denied-for-this-document
        localStorageWriteTests.tested = true;
        localStorageWriteTests.writable = false;
    }
    return localStorageWriteTests.writable;
};
function parseParametersFromURL(href) {
    const result = {};
    const url = new URL(href);
    if (url.hash && url.hash[0] === "#") try {
        const hashSearchParams = new URLSearchParams(url.hash.substring(1));
        hashSearchParams.forEach((value, key)=>{
            result[key] = value;
        });
    } catch (e) {
    // hash is not a query string
    }
    // search parameters take precedence over hash parameters
    url.searchParams.forEach((value, key)=>{
        result[key] = value;
    });
    return result;
}
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>require("b14de0e012a619af").then(({ default: fetch1 })=>fetch1(...args));
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};
const looksLikeFetchResponse = (maybeResponse)=>{
    return typeof maybeResponse === "object" && maybeResponse !== null && "status" in maybeResponse && "ok" in maybeResponse && "json" in maybeResponse && typeof maybeResponse.json === "function";
};
const setItemAsync = async (storage, key, data)=>{
    await storage.setItem(key, JSON.stringify(data));
};
const getItemAsync = async (storage, key)=>{
    const value = await storage.getItem(key);
    if (!value) return null;
    try {
        return JSON.parse(value);
    } catch (_a) {
        return value;
    }
};
const removeItemAsync = async (storage, key)=>{
    await storage.removeItem(key);
};
function decodeBase64URL(value) {
    const key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let base64 = "";
    let chr1, chr2, chr3;
    let enc1, enc2, enc3, enc4;
    let i = 0;
    value = value.replace("-", "+").replace("_", "/");
    while(i < value.length){
        enc1 = key.indexOf(value.charAt(i++));
        enc2 = key.indexOf(value.charAt(i++));
        enc3 = key.indexOf(value.charAt(i++));
        enc4 = key.indexOf(value.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        base64 = base64 + String.fromCharCode(chr1);
        if (enc3 != 64 && chr2 != 0) base64 = base64 + String.fromCharCode(chr2);
        if (enc4 != 64 && chr3 != 0) base64 = base64 + String.fromCharCode(chr3);
    }
    return base64;
}
class Deferred {
    constructor(){
        this.promise = new Deferred.promiseConstructor((res, rej)=>{
            this.resolve = res;
            this.reject = rej;
        });
    }
}
Deferred.promiseConstructor = Promise;
function decodeJWTPayload(token) {
    // Regex checks for base64url format
    const base64UrlRegex = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i;
    const parts = token.split(".");
    if (parts.length !== 3) throw new Error("JWT is not valid: not a JWT structure");
    if (!base64UrlRegex.test(parts[1])) throw new Error("JWT is not valid: payload is not in base64url format");
    const base64Url = parts[1];
    return JSON.parse(decodeBase64URL(base64Url));
}
async function sleep(time) {
    return await new Promise((accept)=>{
        setTimeout(()=>accept(null), time);
    });
}
function retryable(fn, isRetryable) {
    const promise = new Promise((accept, reject)=>{
        (async ()=>{
            for(let attempt = 0; attempt < Infinity; attempt++)try {
                const result = await fn(attempt);
                if (!isRetryable(attempt, null, result)) {
                    accept(result);
                    return;
                }
            } catch (e) {
                if (!isRetryable(attempt, e)) {
                    reject(e);
                    return;
                }
            }
        })();
    });
    return promise;
}
function dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
}
function generatePKCEVerifier() {
    const verifierLength = 56;
    const array = new Uint32Array(verifierLength);
    if (typeof crypto === "undefined") {
        const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
        const charSetLen = charSet.length;
        let verifier = "";
        for(let i = 0; i < verifierLength; i++)verifier += charSet.charAt(Math.floor(Math.random() * charSetLen));
        return verifier;
    }
    crypto.getRandomValues(array);
    return Array.from(array, dec2hex).join("");
}
async function sha256(randomString) {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(randomString);
    const hash = await crypto.subtle.digest("SHA-256", encodedData);
    const bytes = new Uint8Array(hash);
    return Array.from(bytes).map((c)=>String.fromCharCode(c)).join("");
}
function base64urlencode(str) {
    return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function generatePKCEChallenge(verifier) {
    const hasCryptoSupport = typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined" && typeof TextEncoder !== "undefined";
    if (!hasCryptoSupport) {
        console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
        return verifier;
    }
    const hashed = await sha256(verifier);
    return base64urlencode(hashed);
}
async function getCodeChallengeAndMethod(storage, storageKey, isPasswordRecovery = false) {
    const codeVerifier = generatePKCEVerifier();
    let storedCodeVerifier = codeVerifier;
    if (isPasswordRecovery) storedCodeVerifier += "/PASSWORD_RECOVERY";
    await setItemAsync(storage, `${storageKey}-code-verifier`, storedCodeVerifier);
    const codeChallenge = await generatePKCEChallenge(codeVerifier);
    const codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
    return [
        codeChallenge,
        codeChallengeMethod
    ];
}
/** Parses the API version which is 2YYY-MM-DD. */ const API_VERSION_REGEX = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function parseResponseAPIVersion(response) {
    const apiVersion = response.headers.get((0, _constants.API_VERSION_HEADER_NAME));
    if (!apiVersion) return null;
    if (!apiVersion.match(API_VERSION_REGEX)) return null;
    try {
        const date = new Date(`${apiVersion}T00:00:00.0Z`);
        return date;
    } catch (e) {
        return null;
    }
}

},{"./constants":"kMUzl","b14de0e012a619af":"43ht9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l4Miv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthError", ()=>AuthError);
parcelHelpers.export(exports, "isAuthError", ()=>isAuthError);
parcelHelpers.export(exports, "AuthApiError", ()=>AuthApiError);
parcelHelpers.export(exports, "isAuthApiError", ()=>isAuthApiError);
parcelHelpers.export(exports, "AuthUnknownError", ()=>AuthUnknownError);
parcelHelpers.export(exports, "CustomAuthError", ()=>CustomAuthError);
parcelHelpers.export(exports, "AuthSessionMissingError", ()=>AuthSessionMissingError);
parcelHelpers.export(exports, "AuthInvalidTokenResponseError", ()=>AuthInvalidTokenResponseError);
parcelHelpers.export(exports, "AuthInvalidCredentialsError", ()=>AuthInvalidCredentialsError);
parcelHelpers.export(exports, "AuthImplicitGrantRedirectError", ()=>AuthImplicitGrantRedirectError);
parcelHelpers.export(exports, "AuthPKCEGrantCodeExchangeError", ()=>AuthPKCEGrantCodeExchangeError);
parcelHelpers.export(exports, "AuthRetryableFetchError", ()=>AuthRetryableFetchError);
parcelHelpers.export(exports, "isAuthRetryableFetchError", ()=>isAuthRetryableFetchError);
/**
 * This error is thrown on certain methods when the password used is deemed
 * weak. Inspect the reasons to identify what password strength rules are
 * inadequate.
 */ parcelHelpers.export(exports, "AuthWeakPasswordError", ()=>AuthWeakPasswordError);
parcelHelpers.export(exports, "isAuthWeakPasswordError", ()=>isAuthWeakPasswordError);
class AuthError extends Error {
    constructor(message, status, code){
        super(message);
        this.__isAuthError = true;
        this.name = "AuthError";
        this.status = status;
        this.code = code;
    }
}
function isAuthError(error) {
    return typeof error === "object" && error !== null && "__isAuthError" in error;
}
class AuthApiError extends AuthError {
    constructor(message, status, code){
        super(message, status, code);
        this.name = "AuthApiError";
        this.status = status;
        this.code = code;
    }
}
function isAuthApiError(error) {
    return isAuthError(error) && error.name === "AuthApiError";
}
class AuthUnknownError extends AuthError {
    constructor(message, originalError){
        super(message);
        this.name = "AuthUnknownError";
        this.originalError = originalError;
    }
}
class CustomAuthError extends AuthError {
    constructor(message, name, status, code){
        super(message, status, code);
        this.name = name;
        this.status = status;
    }
}
class AuthSessionMissingError extends CustomAuthError {
    constructor(){
        super("Auth session missing!", "AuthSessionMissingError", 400, undefined);
    }
}
class AuthInvalidTokenResponseError extends CustomAuthError {
    constructor(){
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, undefined);
    }
}
class AuthInvalidCredentialsError extends CustomAuthError {
    constructor(message){
        super(message, "AuthInvalidCredentialsError", 400, undefined);
    }
}
class AuthImplicitGrantRedirectError extends CustomAuthError {
    constructor(message, details = null){
        super(message, "AuthImplicitGrantRedirectError", 500, undefined);
        this.details = null;
        this.details = details;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        };
    }
}
class AuthPKCEGrantCodeExchangeError extends CustomAuthError {
    constructor(message, details = null){
        super(message, "AuthPKCEGrantCodeExchangeError", 500, undefined);
        this.details = null;
        this.details = details;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        };
    }
}
class AuthRetryableFetchError extends CustomAuthError {
    constructor(message, status){
        super(message, "AuthRetryableFetchError", status, undefined);
    }
}
function isAuthRetryableFetchError(error) {
    return isAuthError(error) && error.name === "AuthRetryableFetchError";
}
class AuthWeakPasswordError extends CustomAuthError {
    constructor(message, status, reasons){
        super(message, "AuthWeakPasswordError", status, "weak_password");
        this.reasons = reasons;
    }
}
function isAuthWeakPasswordError(error) {
    return isAuthError(error) && error.name === "AuthWeakPasswordError";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"san1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _goTrueAdminApi = require("./GoTrueAdminApi");
var _goTrueAdminApiDefault = parcelHelpers.interopDefault(_goTrueAdminApi);
var _constants = require("./lib/constants");
var _errors = require("./lib/errors");
var _fetch = require("./lib/fetch");
var _helpers = require("./lib/helpers");
var _localStorage = require("./lib/local-storage");
var _polyfills = require("./lib/polyfills");
var _version = require("./lib/version");
var _locks = require("./lib/locks");
(0, _polyfills.polyfillGlobalThis)(); // Make "globalThis" available
const DEFAULT_OPTIONS = {
    url: (0, _constants.GOTRUE_URL),
    storageKey: (0, _constants.STORAGE_KEY),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    headers: (0, _constants.DEFAULT_HEADERS),
    flowType: "implicit",
    debug: false,
    hasCustomAuthorizationHeader: false
};
/** Current session will be checked for refresh at this interval. */ const AUTO_REFRESH_TICK_DURATION = 30000;
/**
 * A token refresh will be attempted this many ticks before the current session expires. */ const AUTO_REFRESH_TICK_THRESHOLD = 3;
async function lockNoOp(name, acquireTimeout, fn) {
    return await fn();
}
class GoTrueClient {
    /**
     * Create a new client for use in the browser.
     */ constructor(options){
        var _a, _b;
        this.memoryStorage = null;
        this.stateChangeEmitters = new Map();
        this.autoRefreshTicker = null;
        this.visibilityChangedCallback = null;
        this.refreshingDeferred = null;
        /**
         * Keeps track of the async client initialization.
         * When null or not yet resolved the auth state is `unknown`
         * Once resolved the the auth state is known and it's save to call any further client methods.
         * Keep extra care to never reject or throw uncaught errors
         */ this.initializePromise = null;
        this.detectSessionInUrl = true;
        this.hasCustomAuthorizationHeader = false;
        this.suppressGetSessionWarning = false;
        this.lockAcquired = false;
        this.pendingInLock = [];
        /**
         * Used to broadcast state change events to other tabs listening.
         */ this.broadcastChannel = null;
        this.logger = console.log;
        this.instanceID = GoTrueClient.nextInstanceID;
        GoTrueClient.nextInstanceID += 1;
        if (this.instanceID > 0 && (0, _helpers.isBrowser)()) console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
        this.logDebugMessages = !!settings.debug;
        if (typeof settings.debug === "function") this.logger = settings.debug;
        this.persistSession = settings.persistSession;
        this.storageKey = settings.storageKey;
        this.autoRefreshToken = settings.autoRefreshToken;
        this.admin = new (0, _goTrueAdminApiDefault.default)({
            url: settings.url,
            headers: settings.headers,
            fetch: settings.fetch
        });
        this.url = settings.url;
        this.headers = settings.headers;
        this.fetch = (0, _helpers.resolveFetch)(settings.fetch);
        this.lock = settings.lock || lockNoOp;
        this.detectSessionInUrl = settings.detectSessionInUrl;
        this.flowType = settings.flowType;
        this.hasCustomAuthorizationHeader = settings.hasCustomAuthorizationHeader;
        if (settings.lock) this.lock = settings.lock;
        else if ((0, _helpers.isBrowser)() && ((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _a === void 0 ? void 0 : _a.locks)) this.lock = (0, _locks.navigatorLock);
        else this.lock = lockNoOp;
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        };
        if (this.persistSession) {
            if (settings.storage) this.storage = settings.storage;
            else if ((0, _helpers.supportsLocalStorage)()) this.storage = (0, _localStorage.localStorageAdapter);
            else {
                this.memoryStorage = {};
                this.storage = (0, _localStorage.memoryLocalStorageAdapter)(this.memoryStorage);
            }
        } else {
            this.memoryStorage = {};
            this.storage = (0, _localStorage.memoryLocalStorageAdapter)(this.memoryStorage);
        }
        if ((0, _helpers.isBrowser)() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
            } catch (e) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e);
            }
            (_b = this.broadcastChannel) === null || _b === void 0 || _b.addEventListener("message", async (event)=>{
                this._debug("received broadcast notification from other tab or client", event);
                await this._notifyAllSubscribers(event.data.event, event.data.session, false); // broadcast = false so we don't get an endless loop of messages
            });
        }
        this.initialize();
    }
    _debug(...args) {
        if (this.logDebugMessages) this.logger(`GoTrueClient@${this.instanceID} (${(0, _version.version)}) ${new Date().toISOString()}`, ...args);
        return this;
    }
    /**
     * Initializes the client session either from the url or from storage.
     * This method is automatically called when instantiating the client, but should also be called
     * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
     */ async initialize() {
        if (this.initializePromise) return await this.initializePromise;
        this.initializePromise = (async ()=>{
            return await this._acquireLock(-1, async ()=>{
                return await this._initialize();
            });
        })();
        return await this.initializePromise;
    }
    /**
     * IMPORTANT:
     * 1. Never throw in this method, as it is called from the constructor
     * 2. Never return a session from this method as it would be cached over
     *    the whole lifetime of the client
     */ async _initialize() {
        try {
            const isPKCEFlow = (0, _helpers.isBrowser)() ? await this._isPKCEFlow() : false;
            this._debug("#_initialize()", "begin", "is PKCE flow", isPKCEFlow);
            if (isPKCEFlow || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
                const { data, error } = await this._getSessionFromURL(isPKCEFlow);
                if (error) {
                    this._debug("#_initialize()", "error detecting session from URL", error);
                    // hacky workaround to keep the existing session if there's an error returned from identity linking
                    // TODO: once error codes are ready, we should match against it instead of the message
                    if ((error === null || error === void 0 ? void 0 : error.message) === "Identity is already linked" || (error === null || error === void 0 ? void 0 : error.message) === "Identity is already linked to another user") return {
                        error
                    };
                    // failed login attempt via url,
                    // remove old session as in verifyOtp, signUp and signInWith*
                    await this._removeSession();
                    return {
                        error
                    };
                }
                const { session, redirectType } = data;
                this._debug("#_initialize()", "detected session in URL", session, "redirect type", redirectType);
                await this._saveSession(session);
                setTimeout(async ()=>{
                    if (redirectType === "recovery") await this._notifyAllSubscribers("PASSWORD_RECOVERY", session);
                    else await this._notifyAllSubscribers("SIGNED_IN", session);
                }, 0);
                return {
                    error: null
                };
            }
            // no login attempt via callback url try to recover session from storage
            await this._recoverAndRefresh();
            return {
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                error
            };
            return {
                error: new (0, _errors.AuthUnknownError)("Unexpected error during initialization", error)
            };
        } finally{
            await this._handleVisibilityChange();
            this._debug("#_initialize()", "end");
        }
    }
    /**
     * Creates a new anonymous user.
     *
     * @returns A session where the is_anonymous claim in the access token JWT set to true
     */ async signInAnonymously(credentials) {
        var _a, _b, _c;
        try {
            await this._removeSession();
            const res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (_b = (_a = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : {},
                    gotrue_meta_security: {
                        captcha_token: (_c = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _c === void 0 ? void 0 : _c.captchaToken
                    }
                },
                xform: (0, _fetch._sessionResponse)
            });
            const { data, error } = res;
            if (error || !data) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            const session = data.session;
            const user = data.user;
            if (data.session) {
                await this._saveSession(data.session);
                await this._notifyAllSubscribers("SIGNED_IN", session);
            }
            return {
                data: {
                    user,
                    session
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Creates a new user.
     *
     * Be aware that if a user account exists in the system you may get back an
     * error message that attempts to hide this information from the user.
     * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
     *
     * @returns A logged-in session if the server has "autoconfirm" ON
     * @returns A user if the server has "autoconfirm" OFF
     */ async signUp(credentials) {
        var _a, _b, _c;
        try {
            await this._removeSession();
            let res;
            if ("email" in credentials) {
                const { email, password, options } = credentials;
                let codeChallenge = null;
                let codeChallengeMethod = null;
                if (this.flowType === "pkce") [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey);
                res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                    body: {
                        email,
                        password,
                        data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        },
                        code_challenge: codeChallenge,
                        code_challenge_method: codeChallengeMethod
                    },
                    xform: (0, _fetch._sessionResponse)
                });
            } else if ("phone" in credentials) {
                const { phone, password, options } = credentials;
                res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone,
                        password,
                        data: (_b = options === null || options === void 0 ? void 0 : options.data) !== null && _b !== void 0 ? _b : {},
                        channel: (_c = options === null || options === void 0 ? void 0 : options.channel) !== null && _c !== void 0 ? _c : "sms",
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    xform: (0, _fetch._sessionResponse)
                });
            } else throw new (0, _errors.AuthInvalidCredentialsError)("You must provide either an email or phone number and a password");
            const { data, error } = res;
            if (error || !data) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            const session = data.session;
            const user = data.user;
            if (data.session) {
                await this._saveSession(data.session);
                await this._notifyAllSubscribers("SIGNED_IN", session);
            }
            return {
                data: {
                    user,
                    session
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Log in an existing user with an email and password or phone and password.
     *
     * Be aware that you may get back an error message that will not distinguish
     * between the cases where the account does not exist or that the
     * email/phone and password combination is wrong or that the account can only
     * be accessed via social login.
     */ async signInWithPassword(credentials) {
        try {
            await this._removeSession();
            let res;
            if ("email" in credentials) {
                const { email, password, options } = credentials;
                res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email,
                        password,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    xform: (0, _fetch._sessionResponsePassword)
                });
            } else if ("phone" in credentials) {
                const { phone, password, options } = credentials;
                res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone,
                        password,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    xform: (0, _fetch._sessionResponsePassword)
                });
            } else throw new (0, _errors.AuthInvalidCredentialsError)("You must provide either an email or phone number and a password");
            const { data, error } = res;
            if (error) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            else if (!data || !data.session || !data.user) return {
                data: {
                    user: null,
                    session: null
                },
                error: new (0, _errors.AuthInvalidTokenResponseError)()
            };
            if (data.session) {
                await this._saveSession(data.session);
                await this._notifyAllSubscribers("SIGNED_IN", data.session);
            }
            return {
                data: Object.assign({
                    user: data.user,
                    session: data.session
                }, data.weak_password ? {
                    weakPassword: data.weak_password
                } : null),
                error
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Log in an existing user via a third-party provider.
     * This method supports the PKCE flow.
     */ async signInWithOAuth(credentials) {
        var _a, _b, _c, _d;
        await this._removeSession();
        return await this._handleProviderSignIn(credentials.provider, {
            redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
            scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
            queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
            skipBrowserRedirect: (_d = credentials.options) === null || _d === void 0 ? void 0 : _d.skipBrowserRedirect
        });
    }
    /**
     * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
     */ async exchangeCodeForSession(authCode) {
        await this.initializePromise;
        return this._acquireLock(-1, async ()=>{
            return this._exchangeCodeForSession(authCode);
        });
    }
    async _exchangeCodeForSession(authCode) {
        const storageItem = await (0, _helpers.getItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        const [codeVerifier, redirectType] = (storageItem !== null && storageItem !== void 0 ? storageItem : "").split("/");
        const { data, error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
            headers: this.headers,
            body: {
                auth_code: authCode,
                code_verifier: codeVerifier
            },
            xform: (0, _fetch._sessionResponse)
        });
        await (0, _helpers.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if (error) return {
            data: {
                user: null,
                session: null,
                redirectType: null
            },
            error
        };
        else if (!data || !data.session || !data.user) return {
            data: {
                user: null,
                session: null,
                redirectType: null
            },
            error: new (0, _errors.AuthInvalidTokenResponseError)()
        };
        if (data.session) {
            await this._saveSession(data.session);
            await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return {
            data: Object.assign(Object.assign({}, data), {
                redirectType: redirectType !== null && redirectType !== void 0 ? redirectType : null
            }),
            error
        };
    }
    /**
     * Allows signing in with an OIDC ID token. The authentication provider used
     * should be enabled and configured.
     */ async signInWithIdToken(credentials) {
        await this._removeSession();
        try {
            const { options, provider, token, access_token, nonce } = credentials;
            const res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider,
                    id_token: token,
                    access_token,
                    nonce,
                    gotrue_meta_security: {
                        captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                    }
                },
                xform: (0, _fetch._sessionResponse)
            });
            const { data, error } = res;
            if (error) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            else if (!data || !data.session || !data.user) return {
                data: {
                    user: null,
                    session: null
                },
                error: new (0, _errors.AuthInvalidTokenResponseError)()
            };
            if (data.session) {
                await this._saveSession(data.session);
                await this._notifyAllSubscribers("SIGNED_IN", data.session);
            }
            return {
                data,
                error
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Log in a user using magiclink or a one-time password (OTP).
     *
     * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
     * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
     * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
     *
     * Be aware that you may get back an error message that will not distinguish
     * between the cases where the account does not exist or, that the account
     * can only be accessed via social login.
     *
     * Do note that you will need to configure a Whatsapp sender on Twilio
     * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
     * channel is not supported on other providers
     * at this time.
     * This method supports PKCE when an email is passed.
     */ async signInWithOtp(credentials) {
        var _a, _b, _c, _d, _e;
        try {
            await this._removeSession();
            if ("email" in credentials) {
                const { email, options } = credentials;
                let codeChallenge = null;
                let codeChallengeMethod = null;
                if (this.flowType === "pkce") [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey);
                const { error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email,
                        data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                        create_user: (_b = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _b !== void 0 ? _b : true,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        },
                        code_challenge: codeChallenge,
                        code_challenge_method: codeChallengeMethod
                    },
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error
                };
            }
            if ("phone" in credentials) {
                const { phone, options } = credentials;
                const { data, error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone,
                        data: (_c = options === null || options === void 0 ? void 0 : options.data) !== null && _c !== void 0 ? _c : {},
                        create_user: (_d = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _d !== void 0 ? _d : true,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        },
                        channel: (_e = options === null || options === void 0 ? void 0 : options.channel) !== null && _e !== void 0 ? _e : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: data === null || data === void 0 ? void 0 : data.message_id
                    },
                    error
                };
            }
            throw new (0, _errors.AuthInvalidCredentialsError)("You must provide either an email or phone number.");
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
     */ async verifyOtp(params) {
        var _a, _b;
        try {
            if (params.type !== "email_change" && params.type !== "phone_change") // we don't want to remove the authenticated session if the user is performing an email_change or phone_change verification
            await this._removeSession();
            let redirectTo = undefined;
            let captchaToken = undefined;
            if ("options" in params) {
                redirectTo = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo;
                captchaToken = (_b = params.options) === null || _b === void 0 ? void 0 : _b.captchaToken;
            }
            const { data, error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, params), {
                    gotrue_meta_security: {
                        captcha_token: captchaToken
                    }
                }),
                redirectTo,
                xform: (0, _fetch._sessionResponse)
            });
            if (error) throw error;
            if (!data) throw new Error("An error occurred on token verification.");
            const session = data.session;
            const user = data.user;
            if (session === null || session === void 0 ? void 0 : session.access_token) {
                await this._saveSession(session);
                await this._notifyAllSubscribers(params.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", session);
            }
            return {
                data: {
                    user,
                    session
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Attempts a single-sign on using an enterprise Identity Provider. A
     * successful SSO attempt will redirect the current page to the identity
     * provider authorization page. The redirect URL is implementation and SSO
     * protocol specific.
     *
     * You can use it by providing a SSO domain. Typically you can extract this
     * domain by asking users for their email address. If this domain is
     * registered on the Auth instance the redirect will use that organization's
     * currently active SSO Identity Provider for the login.
     *
     * If you have built an organization-specific login page, you can use the
     * organization's SSO Identity Provider UUID directly instead.
     */ async signInWithSSO(params) {
        var _a, _b, _c;
        try {
            await this._removeSession();
            let codeChallenge = null;
            let codeChallengeMethod = null;
            if (this.flowType === "pkce") [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey);
            return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in params ? {
                    provider_id: params.providerId
                } : null), "domain" in params ? {
                    domain: params.domain
                } : null), {
                    redirect_to: (_b = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo) !== null && _b !== void 0 ? _b : undefined
                }), ((_c = params === null || params === void 0 ? void 0 : params.options) === null || _c === void 0 ? void 0 : _c.captchaToken) ? {
                    gotrue_meta_security: {
                        captcha_token: params.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: true,
                    code_challenge: codeChallenge,
                    code_challenge_method: codeChallengeMethod
                }),
                headers: this.headers,
                xform: (0, _fetch._ssoResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * Sends a reauthentication OTP to the user's email or phone number.
     * Requires the user to be signed-in.
     */ async reauthenticate() {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._reauthenticate();
        });
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async (result)=>{
                const { data: { session }, error: sessionError } = result;
                if (sessionError) throw sessionError;
                if (!session) throw new (0, _errors.AuthSessionMissingError)();
                const { error } = await (0, _fetch._request)(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: session.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error
                };
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
     */ async resend(credentials) {
        try {
            if (credentials.type != "email_change" && credentials.type != "phone_change") await this._removeSession();
            const endpoint = `${this.url}/resend`;
            if ("email" in credentials) {
                const { email, type, options } = credentials;
                const { error } = await (0, _fetch._request)(this.fetch, "POST", endpoint, {
                    headers: this.headers,
                    body: {
                        email,
                        type,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error
                };
            } else if ("phone" in credentials) {
                const { phone, type, options } = credentials;
                const { data, error } = await (0, _fetch._request)(this.fetch, "POST", endpoint, {
                    headers: this.headers,
                    body: {
                        phone,
                        type,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: data === null || data === void 0 ? void 0 : data.message_id
                    },
                    error
                };
            }
            throw new (0, _errors.AuthInvalidCredentialsError)("You must provide either an email or phone number and a type");
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Returns the session, refreshing it if necessary.
     *
     * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
     *
     * **IMPORTANT:** This method loads values directly from the storage attached
     * to the client. If that storage is based on request cookies for example,
     * the values in it may not be authentic and therefore it's strongly advised
     * against using this method and its results in such circumstances. A warning
     * will be emitted if this is detected. Use {@link #getUser()} instead.
     */ async getSession() {
        await this.initializePromise;
        const result = await this._acquireLock(-1, async ()=>{
            return this._useSession(async (result)=>{
                return result;
            });
        });
        return result;
    }
    /**
     * Acquires a global lock based on the storage key.
     */ async _acquireLock(acquireTimeout, fn) {
        this._debug("#_acquireLock", "begin", acquireTimeout);
        try {
            if (this.lockAcquired) {
                const last = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
                const result = (async ()=>{
                    await last;
                    return await fn();
                })();
                this.pendingInLock.push((async ()=>{
                    try {
                        await result;
                    } catch (e) {
                    // we just care if it finished
                    }
                })());
                return result;
            }
            return await this.lock(`lock:${this.storageKey}`, acquireTimeout, async ()=>{
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = true;
                    const result = fn();
                    this.pendingInLock.push((async ()=>{
                        try {
                            await result;
                        } catch (e) {
                        // we just care if it finished
                        }
                    })());
                    await result;
                    // keep draining the queue until there's nothing to wait on
                    while(this.pendingInLock.length){
                        const waitOn = [
                            ...this.pendingInLock
                        ];
                        await Promise.all(waitOn);
                        this.pendingInLock.splice(0, waitOn.length);
                    }
                    return await result;
                } finally{
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey);
                    this.lockAcquired = false;
                }
            });
        } finally{
            this._debug("#_acquireLock", "end");
        }
    }
    /**
     * Use instead of {@link #getSession} inside the library. It is
     * semantically usually what you want, as getting a session involves some
     * processing afterwards that requires only one client operating on the
     * session at once across multiple tabs or processes.
     */ async _useSession(fn) {
        this._debug("#_useSession", "begin");
        try {
            // the use of __loadSession here is the only correct use of the function!
            const result = await this.__loadSession();
            return await fn(result);
        } finally{
            this._debug("#_useSession", "end");
        }
    }
    /**
     * NEVER USE DIRECTLY!
     *
     * Always use {@link #_useSession}.
     */ async __loadSession() {
        this._debug("#__loadSession()", "begin");
        if (!this.lockAcquired) this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let currentSession = null;
            const maybeSession = await (0, _helpers.getItemAsync)(this.storage, this.storageKey);
            this._debug("#getSession()", "session from storage", maybeSession);
            if (maybeSession !== null) {
                if (this._isValidSession(maybeSession)) currentSession = maybeSession;
                else {
                    this._debug("#getSession()", "session from storage is not valid");
                    await this._removeSession();
                }
            }
            if (!currentSession) return {
                data: {
                    session: null
                },
                error: null
            };
            const hasExpired = currentSession.expires_at ? currentSession.expires_at <= Date.now() / 1000 : false;
            this._debug("#__loadSession()", `session has${hasExpired ? "" : " not"} expired`, "expires_at", currentSession.expires_at);
            if (!hasExpired) {
                if (this.storage.isServer) {
                    const suppressWarning = this.suppressGetSessionWarning;
                    const proxySession = new Proxy(currentSession, {
                        get (target, prop, receiver) {
                            if (!suppressWarning && prop === "user") // only show warning when the user object is being accessed from the server
                            console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.");
                            return Reflect.get(target, prop, receiver);
                        }
                    });
                    currentSession = proxySession;
                }
                return {
                    data: {
                        session: currentSession
                    },
                    error: null
                };
            }
            const { session, error } = await this._callRefreshToken(currentSession.refresh_token);
            if (error) return {
                data: {
                    session: null
                },
                error
            };
            return {
                data: {
                    session
                },
                error: null
            };
        } finally{
            this._debug("#__loadSession()", "end");
        }
    }
    /**
     * Gets the current user details if there is an existing session. This method
     * performs a network request to the Supabase Auth server, so the returned
     * value is authentic and can be used to base authorization rules on.
     *
     * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
     */ async getUser(jwt) {
        if (jwt) return await this._getUser(jwt);
        await this.initializePromise;
        const result = await this._acquireLock(-1, async ()=>{
            return await this._getUser();
        });
        return result;
    }
    async _getUser(jwt) {
        try {
            if (jwt) return await (0, _fetch._request)(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: jwt,
                xform: (0, _fetch._userResponse)
            });
            return await this._useSession(async (result)=>{
                var _a, _b, _c;
                const { data, error } = result;
                if (error) throw error;
                // returns an error if there is no access_token or custom authorization header
                if (!((_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) && !this.hasCustomAuthorizationHeader) return {
                    data: {
                        user: null
                    },
                    error: new (0, _errors.AuthSessionMissingError)()
                };
                return await (0, _fetch._request)(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (_c = (_b = data.session) === null || _b === void 0 ? void 0 : _b.access_token) !== null && _c !== void 0 ? _c : undefined,
                    xform: (0, _fetch._userResponse)
                });
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Updates user data for a logged in user.
     */ async updateUser(attributes, options = {}) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._updateUser(attributes, options);
        });
    }
    async _updateUser(attributes, options = {}) {
        try {
            return await this._useSession(async (result)=>{
                const { data: sessionData, error: sessionError } = result;
                if (sessionError) throw sessionError;
                if (!sessionData.session) throw new (0, _errors.AuthSessionMissingError)();
                const session = sessionData.session;
                let codeChallenge = null;
                let codeChallengeMethod = null;
                if (this.flowType === "pkce" && attributes.email != null) [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey);
                const { data, error: userError } = await (0, _fetch._request)(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                    body: Object.assign(Object.assign({}, attributes), {
                        code_challenge: codeChallenge,
                        code_challenge_method: codeChallengeMethod
                    }),
                    jwt: session.access_token,
                    xform: (0, _fetch._userResponse)
                });
                if (userError) throw userError;
                session.user = data.user;
                await this._saveSession(session);
                await this._notifyAllSubscribers("USER_UPDATED", session);
                return {
                    data: {
                        user: session.user
                    },
                    error: null
                };
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Decodes a JWT (without performing any validation).
     */ _decodeJWT(jwt) {
        return (0, _helpers.decodeJWTPayload)(jwt);
    }
    /**
     * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
     * If the refresh token or access token in the current session is invalid, an error will be thrown.
     * @param currentSession The current session that minimally contains an access token and refresh token.
     */ async setSession(currentSession) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._setSession(currentSession);
        });
    }
    async _setSession(currentSession) {
        try {
            if (!currentSession.access_token || !currentSession.refresh_token) throw new (0, _errors.AuthSessionMissingError)();
            const timeNow = Date.now() / 1000;
            let expiresAt = timeNow;
            let hasExpired = true;
            let session = null;
            const payload = (0, _helpers.decodeJWTPayload)(currentSession.access_token);
            if (payload.exp) {
                expiresAt = payload.exp;
                hasExpired = expiresAt <= timeNow;
            }
            if (hasExpired) {
                const { session: refreshedSession, error } = await this._callRefreshToken(currentSession.refresh_token);
                if (error) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: error
                };
                if (!refreshedSession) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                };
                session = refreshedSession;
            } else {
                const { data, error } = await this._getUser(currentSession.access_token);
                if (error) throw error;
                session = {
                    access_token: currentSession.access_token,
                    refresh_token: currentSession.refresh_token,
                    user: data.user,
                    token_type: "bearer",
                    expires_in: expiresAt - timeNow,
                    expires_at: expiresAt
                };
                await this._saveSession(session);
                await this._notifyAllSubscribers("SIGNED_IN", session);
            }
            return {
                data: {
                    user: session.user,
                    session
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    session: null,
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Returns a new session, regardless of expiry status.
     * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
     * If the current session's refresh token is invalid, an error will be thrown.
     * @param currentSession The current session. If passed in, it must contain a refresh token.
     */ async refreshSession(currentSession) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._refreshSession(currentSession);
        });
    }
    async _refreshSession(currentSession) {
        try {
            return await this._useSession(async (result)=>{
                var _a;
                if (!currentSession) {
                    const { data, error } = result;
                    if (error) throw error;
                    currentSession = (_a = data.session) !== null && _a !== void 0 ? _a : undefined;
                }
                if (!(currentSession === null || currentSession === void 0 ? void 0 : currentSession.refresh_token)) throw new (0, _errors.AuthSessionMissingError)();
                const { session, error } = await this._callRefreshToken(currentSession.refresh_token);
                if (error) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: error
                };
                if (!session) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                };
                return {
                    data: {
                        user: session.user,
                        session
                    },
                    error: null
                };
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Gets the session data from a URL string
     */ async _getSessionFromURL(isPKCEFlow) {
        try {
            if (!(0, _helpers.isBrowser)()) throw new (0, _errors.AuthImplicitGrantRedirectError)("No browser detected.");
            if (this.flowType === "implicit" && !this._isImplicitGrantFlow()) throw new (0, _errors.AuthImplicitGrantRedirectError)("Not a valid implicit grant flow url.");
            else if (this.flowType == "pkce" && !isPKCEFlow) throw new (0, _errors.AuthPKCEGrantCodeExchangeError)("Not a valid PKCE flow url.");
            const params = (0, _helpers.parseParametersFromURL)(window.location.href);
            if (isPKCEFlow) {
                if (!params.code) throw new (0, _errors.AuthPKCEGrantCodeExchangeError)("No code detected.");
                const { data, error } = await this._exchangeCodeForSession(params.code);
                if (error) throw error;
                const url = new URL(window.location.href);
                url.searchParams.delete("code");
                window.history.replaceState(window.history.state, "", url.toString());
                return {
                    data: {
                        session: data.session,
                        redirectType: null
                    },
                    error: null
                };
            }
            if (params.error || params.error_description || params.error_code) throw new (0, _errors.AuthImplicitGrantRedirectError)(params.error_description || "Error in URL with unspecified error_description", {
                error: params.error || "unspecified_error",
                code: params.error_code || "unspecified_code"
            });
            const { provider_token, provider_refresh_token, access_token, refresh_token, expires_in, expires_at, token_type } = params;
            if (!access_token || !expires_in || !refresh_token || !token_type) throw new (0, _errors.AuthImplicitGrantRedirectError)("No session defined in URL");
            const timeNow = Math.round(Date.now() / 1000);
            const expiresIn = parseInt(expires_in);
            let expiresAt = timeNow + expiresIn;
            if (expires_at) expiresAt = parseInt(expires_at);
            const actuallyExpiresIn = expiresAt - timeNow;
            if (actuallyExpiresIn * 1000 <= AUTO_REFRESH_TICK_DURATION) console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${actuallyExpiresIn}s, should have been closer to ${expiresIn}s`);
            const issuedAt = expiresAt - expiresIn;
            if (timeNow - issuedAt >= 120) console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", issuedAt, expiresAt, timeNow);
            else if (timeNow - issuedAt < 0) console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew", issuedAt, expiresAt, timeNow);
            const { data, error } = await this._getUser(access_token);
            if (error) throw error;
            const session = {
                provider_token,
                provider_refresh_token,
                access_token,
                expires_in: expiresIn,
                expires_at: expiresAt,
                refresh_token,
                token_type,
                user: data.user
            };
            // Remove tokens from URL
            window.location.hash = "";
            this._debug("#_getSessionFromURL()", "clearing window.location.hash");
            return {
                data: {
                    session,
                    redirectType: params.type
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    session: null,
                    redirectType: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
     */ _isImplicitGrantFlow() {
        const params = (0, _helpers.parseParametersFromURL)(window.location.href);
        return !!((0, _helpers.isBrowser)() && (params.access_token || params.error_description));
    }
    /**
     * Checks if the current URL and backing storage contain parameters given by a PKCE flow
     */ async _isPKCEFlow() {
        const params = (0, _helpers.parseParametersFromURL)(window.location.href);
        const currentStorageContent = await (0, _helpers.getItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        return !!(params.code && currentStorageContent);
    }
    /**
     * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
     *
     * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
     * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
     *
     * If using `others` scope, no `SIGNED_OUT` event is fired!
     */ async signOut(options = {
        scope: "global"
    }) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._signOut(options);
        });
    }
    async _signOut({ scope } = {
        scope: "global"
    }) {
        return await this._useSession(async (result)=>{
            var _a;
            const { data, error: sessionError } = result;
            if (sessionError) return {
                error: sessionError
            };
            const accessToken = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token;
            if (accessToken) {
                const { error } = await this.admin.signOut(accessToken, scope);
                if (error) {
                    // ignore 404s since user might not exist anymore
                    // ignore 401s since an invalid or expired JWT should sign out the current session
                    if (!((0, _errors.isAuthApiError)(error) && (error.status === 404 || error.status === 401 || error.status === 403))) return {
                        error
                    };
                }
            }
            if (scope !== "others") {
                await this._removeSession();
                await (0, _helpers.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
                await this._notifyAllSubscribers("SIGNED_OUT", null);
            }
            return {
                error: null
            };
        });
    }
    /**
     * Receive a notification every time an auth event happens.
     * @param callback A callback function to be invoked when an auth event happens.
     */ onAuthStateChange(callback) {
        const id = (0, _helpers.uuid)();
        const subscription = {
            id,
            callback,
            unsubscribe: ()=>{
                this._debug("#unsubscribe()", "state change callback with id removed", id);
                this.stateChangeEmitters.delete(id);
            }
        };
        this._debug("#onAuthStateChange()", "registered callback with id", id);
        this.stateChangeEmitters.set(id, subscription);
        (async ()=>{
            await this.initializePromise;
            await this._acquireLock(-1, async ()=>{
                this._emitInitialSession(id);
            });
        })();
        return {
            data: {
                subscription
            }
        };
    }
    async _emitInitialSession(id) {
        return await this._useSession(async (result)=>{
            var _a, _b;
            try {
                const { data: { session }, error } = result;
                if (error) throw error;
                await ((_a = this.stateChangeEmitters.get(id)) === null || _a === void 0 ? void 0 : _a.callback("INITIAL_SESSION", session));
                this._debug("INITIAL_SESSION", "callback id", id, "session", session);
            } catch (err) {
                await ((_b = this.stateChangeEmitters.get(id)) === null || _b === void 0 ? void 0 : _b.callback("INITIAL_SESSION", null));
                this._debug("INITIAL_SESSION", "callback id", id, "error", err);
                console.error(err);
            }
        });
    }
    /**
     * Sends a password reset request to an email address. This method supports the PKCE flow.
     *
     * @param email The email address of the user.
     * @param options.redirectTo The URL to send the user to after they click the password reset link.
     * @param options.captchaToken Verification token received when the user completes the captcha on the site.
     */ async resetPasswordForEmail(email, options = {}) {
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce") [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey, true // isPasswordRecovery
        );
        try {
            return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email,
                    code_challenge: codeChallenge,
                    code_challenge_method: codeChallengeMethod,
                    gotrue_meta_security: {
                        captcha_token: options.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: options.redirectTo
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * Gets all the identities linked to a user.
     */ async getUserIdentities() {
        var _a;
        try {
            const { data, error } = await this.getUser();
            if (error) throw error;
            return {
                data: {
                    identities: (_a = data.user.identities) !== null && _a !== void 0 ? _a : []
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * Links an oauth identity to an existing user.
     * This method supports the PKCE flow.
     */ async linkIdentity(credentials) {
        var _a;
        try {
            const { data, error } = await this._useSession(async (result)=>{
                var _a, _b, _c, _d, _e;
                const { data, error } = result;
                if (error) throw error;
                const url = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, credentials.provider, {
                    redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
                    scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
                    queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
                    skipBrowserRedirect: true
                });
                return await (0, _fetch._request)(this.fetch, "GET", url, {
                    headers: this.headers,
                    jwt: (_e = (_d = data.session) === null || _d === void 0 ? void 0 : _d.access_token) !== null && _e !== void 0 ? _e : undefined
                });
            });
            if (error) throw error;
            if ((0, _helpers.isBrowser)() && !((_a = credentials.options) === null || _a === void 0 ? void 0 : _a.skipBrowserRedirect)) window.location.assign(data === null || data === void 0 ? void 0 : data.url);
            return {
                data: {
                    provider: credentials.provider,
                    url: data === null || data === void 0 ? void 0 : data.url
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    provider: credentials.provider,
                    url: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
     */ async unlinkIdentity(identity) {
        try {
            return await this._useSession(async (result)=>{
                var _a, _b;
                const { data, error } = result;
                if (error) throw error;
                return await (0, _fetch._request)(this.fetch, "DELETE", `${this.url}/user/identities/${identity.identity_id}`, {
                    headers: this.headers,
                    jwt: (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : undefined
                });
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * Generates a new JWT.
     * @param refreshToken A valid refresh token that was returned on login.
     */ async _refreshAccessToken(refreshToken) {
        const debugName = `#_refreshAccessToken(${refreshToken.substring(0, 5)}...)`;
        this._debug(debugName, "begin");
        try {
            const startedAt = Date.now();
            // will attempt to refresh the token with exponential backoff
            return await (0, _helpers.retryable)(async (attempt)=>{
                if (attempt > 0) await (0, _helpers.sleep)(200 * Math.pow(2, attempt - 1)); // 200, 400, 800, ...
                this._debug(debugName, "refreshing attempt", attempt);
                return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                    body: {
                        refresh_token: refreshToken
                    },
                    headers: this.headers,
                    xform: (0, _fetch._sessionResponse)
                });
            }, (attempt, error)=>{
                const nextBackOffInterval = 200 * Math.pow(2, attempt);
                return error && (0, _errors.isAuthRetryableFetchError)(error) && // retryable only if the request can be sent before the backoff overflows the tick duration
                Date.now() + nextBackOffInterval - startedAt < AUTO_REFRESH_TICK_DURATION;
            });
        } catch (error) {
            this._debug(debugName, "error", error);
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    session: null,
                    user: null
                },
                error
            };
            throw error;
        } finally{
            this._debug(debugName, "end");
        }
    }
    _isValidSession(maybeSession) {
        const isValidSession = typeof maybeSession === "object" && maybeSession !== null && "access_token" in maybeSession && "refresh_token" in maybeSession && "expires_at" in maybeSession;
        return isValidSession;
    }
    async _handleProviderSignIn(provider, options) {
        const url = await this._getUrlForProvider(`${this.url}/authorize`, provider, {
            redirectTo: options.redirectTo,
            scopes: options.scopes,
            queryParams: options.queryParams
        });
        this._debug("#_handleProviderSignIn()", "provider", provider, "options", options, "url", url);
        // try to open on the browser
        if ((0, _helpers.isBrowser)() && !options.skipBrowserRedirect) window.location.assign(url);
        return {
            data: {
                provider,
                url
            },
            error: null
        };
    }
    /**
     * Recovers the session from LocalStorage and refreshes
     * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
     */ async _recoverAndRefresh() {
        var _a;
        const debugName = "#_recoverAndRefresh()";
        this._debug(debugName, "begin");
        try {
            const currentSession = await (0, _helpers.getItemAsync)(this.storage, this.storageKey);
            this._debug(debugName, "session from storage", currentSession);
            if (!this._isValidSession(currentSession)) {
                this._debug(debugName, "session is not valid");
                if (currentSession !== null) await this._removeSession();
                return;
            }
            const timeNow = Math.round(Date.now() / 1000);
            const expiresWithMargin = ((_a = currentSession.expires_at) !== null && _a !== void 0 ? _a : Infinity) < timeNow + (0, _constants.EXPIRY_MARGIN);
            this._debug(debugName, `session has${expiresWithMargin ? "" : " not"} expired with margin of ${(0, _constants.EXPIRY_MARGIN)}s`);
            if (expiresWithMargin) {
                if (this.autoRefreshToken && currentSession.refresh_token) {
                    const { error } = await this._callRefreshToken(currentSession.refresh_token);
                    if (error) {
                        console.error(error);
                        if (!(0, _errors.isAuthRetryableFetchError)(error)) {
                            this._debug(debugName, "refresh failed with a non-retryable error, removing the session", error);
                            await this._removeSession();
                        }
                    }
                }
            } else // no need to persist currentSession again, as we just loaded it from
            // local storage; persisting it again may overwrite a value saved by
            // another client with access to the same local storage
            await this._notifyAllSubscribers("SIGNED_IN", currentSession);
        } catch (err) {
            this._debug(debugName, "error", err);
            console.error(err);
            return;
        } finally{
            this._debug(debugName, "end");
        }
    }
    async _callRefreshToken(refreshToken) {
        var _a, _b;
        if (!refreshToken) throw new (0, _errors.AuthSessionMissingError)();
        // refreshing is already in progress
        if (this.refreshingDeferred) return this.refreshingDeferred.promise;
        const debugName = `#_callRefreshToken(${refreshToken.substring(0, 5)}...)`;
        this._debug(debugName, "begin");
        try {
            this.refreshingDeferred = new (0, _helpers.Deferred)();
            const { data, error } = await this._refreshAccessToken(refreshToken);
            if (error) throw error;
            if (!data.session) throw new (0, _errors.AuthSessionMissingError)();
            await this._saveSession(data.session);
            await this._notifyAllSubscribers("TOKEN_REFRESHED", data.session);
            const result = {
                session: data.session,
                error: null
            };
            this.refreshingDeferred.resolve(result);
            return result;
        } catch (error) {
            this._debug(debugName, "error", error);
            if ((0, _errors.isAuthError)(error)) {
                const result = {
                    session: null,
                    error
                };
                if (!(0, _errors.isAuthRetryableFetchError)(error)) {
                    await this._removeSession();
                    await this._notifyAllSubscribers("SIGNED_OUT", null);
                }
                (_a = this.refreshingDeferred) === null || _a === void 0 || _a.resolve(result);
                return result;
            }
            (_b = this.refreshingDeferred) === null || _b === void 0 || _b.reject(error);
            throw error;
        } finally{
            this.refreshingDeferred = null;
            this._debug(debugName, "end");
        }
    }
    async _notifyAllSubscribers(event, session, broadcast = true) {
        const debugName = `#_notifyAllSubscribers(${event})`;
        this._debug(debugName, "begin", session, `broadcast = ${broadcast}`);
        try {
            if (this.broadcastChannel && broadcast) this.broadcastChannel.postMessage({
                event,
                session
            });
            const errors = [];
            const promises = Array.from(this.stateChangeEmitters.values()).map(async (x)=>{
                try {
                    await x.callback(event, session);
                } catch (e) {
                    errors.push(e);
                }
            });
            await Promise.all(promises);
            if (errors.length > 0) {
                for(let i = 0; i < errors.length; i += 1)console.error(errors[i]);
                throw errors[0];
            }
        } finally{
            this._debug(debugName, "end");
        }
    }
    /**
     * set currentSession and currentUser
     * process to _startAutoRefreshToken if possible
     */ async _saveSession(session) {
        this._debug("#_saveSession()", session);
        // _saveSession is always called whenever a new session has been acquired
        // so we can safely suppress the warning returned by future getSession calls
        this.suppressGetSessionWarning = true;
        await (0, _helpers.setItemAsync)(this.storage, this.storageKey, session);
    }
    async _removeSession() {
        this._debug("#_removeSession()");
        await (0, _helpers.removeItemAsync)(this.storage, this.storageKey);
    }
    /**
     * Removes any registered visibilitychange callback.
     *
     * {@see #startAutoRefresh}
     * {@see #stopAutoRefresh}
     */ _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const callback = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            if (callback && (0, _helpers.isBrowser)() && (window === null || window === void 0 ? void 0 : window.removeEventListener)) window.removeEventListener("visibilitychange", callback);
        } catch (e) {
            console.error("removing visibilitychange callback failed", e);
        }
    }
    /**
     * This is the private implementation of {@link #startAutoRefresh}. Use this
     * within the library.
     */ async _startAutoRefresh() {
        await this._stopAutoRefresh();
        this._debug("#_startAutoRefresh()");
        const ticker = setInterval(()=>this._autoRefreshTokenTick(), AUTO_REFRESH_TICK_DURATION);
        this.autoRefreshTicker = ticker;
        if (ticker && typeof ticker === "object" && typeof ticker.unref === "function") // ticker is a NodeJS Timeout object that has an `unref` method
        // https://nodejs.org/api/timers.html#timeoutunref
        // When auto refresh is used in NodeJS (like for testing) the
        // `setInterval` is preventing the process from being marked as
        // finished and tests run endlessly. This can be prevented by calling
        // `unref()` on the returned object.
        ticker.unref();
        else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer === "function") // similar like for NodeJS, but with the Deno API
        // https://deno.land/api@latest?unstable&s=Deno.unrefTimer
        // @ts-ignore
        Deno.unrefTimer(ticker);
        // run the tick immediately, but in the next pass of the event loop so that
        // #_initialize can be allowed to complete without recursively waiting on
        // itself
        setTimeout(async ()=>{
            await this.initializePromise;
            await this._autoRefreshTokenTick();
        }, 0);
    }
    /**
     * This is the private implementation of {@link #stopAutoRefresh}. Use this
     * within the library.
     */ async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const ticker = this.autoRefreshTicker;
        this.autoRefreshTicker = null;
        if (ticker) clearInterval(ticker);
    }
    /**
     * Starts an auto-refresh process in the background. The session is checked
     * every few seconds. Close to the time of expiration a process is started to
     * refresh the session. If refreshing fails it will be retried for as long as
     * necessary.
     *
     * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
     * to call this function, it will be called for you.
     *
     * On browsers the refresh process works only when the tab/window is in the
     * foreground to conserve resources as well as prevent race conditions and
     * flooding auth with requests. If you call this method any managed
     * visibility change callback will be removed and you must manage visibility
     * changes on your own.
     *
     * On non-browser platforms the refresh process works *continuously* in the
     * background, which may not be desirable. You should hook into your
     * platform's foreground indication mechanism and call these methods
     * appropriately to conserve resources.
     *
     * {@see #stopAutoRefresh}
     */ async startAutoRefresh() {
        this._removeVisibilityChangedCallback();
        await this._startAutoRefresh();
    }
    /**
     * Stops an active auto refresh process running in the background (if any).
     *
     * If you call this method any managed visibility change callback will be
     * removed and you must manage visibility changes on your own.
     *
     * See {@link #startAutoRefresh} for more details.
     */ async stopAutoRefresh() {
        this._removeVisibilityChangedCallback();
        await this._stopAutoRefresh();
    }
    /**
     * Runs the auto refresh token tick.
     */ async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async ()=>{
                try {
                    const now = Date.now();
                    try {
                        return await this._useSession(async (result)=>{
                            const { data: { session } } = result;
                            if (!session || !session.refresh_token || !session.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return;
                            }
                            // session will expire in this many ticks (or has already expired if <= 0)
                            const expiresInTicks = Math.floor((session.expires_at * 1000 - now) / AUTO_REFRESH_TICK_DURATION);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${expiresInTicks} ticks, a tick lasts ${AUTO_REFRESH_TICK_DURATION}ms, refresh threshold is ${AUTO_REFRESH_TICK_THRESHOLD} ticks`);
                            if (expiresInTicks <= AUTO_REFRESH_TICK_THRESHOLD) await this._callRefreshToken(session.refresh_token);
                        });
                    } catch (e) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
                    }
                } finally{
                    this._debug("#_autoRefreshTokenTick()", "end");
                }
            });
        } catch (e) {
            if (e.isAcquireTimeout || e instanceof (0, _locks.LockAcquireTimeoutError)) this._debug("auto refresh token tick lock not available");
            else throw e;
        }
    }
    /**
     * Registers callbacks on the browser / platform, which in-turn run
     * algorithms when the browser window/tab are in foreground. On non-browser
     * platforms it assumes always foreground.
     */ async _handleVisibilityChange() {
        this._debug("#_handleVisibilityChange()");
        if (!(0, _helpers.isBrowser)() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
            if (this.autoRefreshToken) // in non-browser environments the refresh token ticker runs always
            this.startAutoRefresh();
            return false;
        }
        try {
            this.visibilityChangedCallback = async ()=>await this._onVisibilityChanged(false);
            window === null || window === void 0 || window.addEventListener("visibilitychange", this.visibilityChangedCallback);
            // now immediately call the visbility changed callback to setup with the
            // current visbility state
            await this._onVisibilityChanged(true); // initial call
        } catch (error) {
            console.error("_handleVisibilityChange", error);
        }
    }
    /**
     * Callback registered with `window.addEventListener('visibilitychange')`.
     */ async _onVisibilityChanged(calledFromInitialize) {
        const methodName = `#_onVisibilityChanged(${calledFromInitialize})`;
        this._debug(methodName, "visibilityState", document.visibilityState);
        if (document.visibilityState === "visible") {
            if (this.autoRefreshToken) // in browser environments the refresh token ticker runs only on focused tabs
            // which prevents race conditions
            this._startAutoRefresh();
            if (!calledFromInitialize) {
                // called when the visibility has changed, i.e. the browser
                // transitioned from hidden -> visible so we need to see if the session
                // should be recovered immediately... but to do that we need to acquire
                // the lock first asynchronously
                await this.initializePromise;
                await this._acquireLock(-1, async ()=>{
                    if (document.visibilityState !== "visible") {
                        this._debug(methodName, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                        // visibility has changed while waiting for the lock, abort
                        return;
                    }
                    // recover the session
                    await this._recoverAndRefresh();
                });
            }
        } else if (document.visibilityState === "hidden") {
            if (this.autoRefreshToken) this._stopAutoRefresh();
        }
    }
    /**
     * Generates the relevant login URL for a third-party provider.
     * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param options.scopes A space-separated list of scopes granted to the OAuth application.
     * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
     */ async _getUrlForProvider(url, provider, options) {
        const urlParams = [
            `provider=${encodeURIComponent(provider)}`
        ];
        if (options === null || options === void 0 ? void 0 : options.redirectTo) urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
        if (options === null || options === void 0 ? void 0 : options.scopes) urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
        if (this.flowType === "pkce") {
            const [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey);
            const flowParams = new URLSearchParams({
                code_challenge: `${encodeURIComponent(codeChallenge)}`,
                code_challenge_method: `${encodeURIComponent(codeChallengeMethod)}`
            });
            urlParams.push(flowParams.toString());
        }
        if (options === null || options === void 0 ? void 0 : options.queryParams) {
            const query = new URLSearchParams(options.queryParams);
            urlParams.push(query.toString());
        }
        if (options === null || options === void 0 ? void 0 : options.skipBrowserRedirect) urlParams.push(`skip_http_redirect=${options.skipBrowserRedirect}`);
        return `${url}?${urlParams.join("&")}`;
    }
    async _unenroll(params) {
        try {
            return await this._useSession(async (result)=>{
                var _a;
                const { data: sessionData, error: sessionError } = result;
                if (sessionError) return {
                    data: null,
                    error: sessionError
                };
                return await (0, _fetch._request)(this.fetch, "DELETE", `${this.url}/factors/${params.factorId}`, {
                    headers: this.headers,
                    jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                });
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * {@see GoTrueMFAApi#enroll}
     */ async _enroll(params) {
        try {
            return await this._useSession(async (result)=>{
                var _a, _b;
                const { data: sessionData, error: sessionError } = result;
                if (sessionError) return {
                    data: null,
                    error: sessionError
                };
                const { data, error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/factors`, {
                    body: {
                        friendly_name: params.friendlyName,
                        factor_type: params.factorType,
                        issuer: params.issuer
                    },
                    headers: this.headers,
                    jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                });
                if (error) return {
                    data: null,
                    error
                };
                if ((_b = data === null || data === void 0 ? void 0 : data.totp) === null || _b === void 0 ? void 0 : _b.qr_code) data.totp.qr_code = `data:image/svg+xml;utf-8,${data.totp.qr_code}`;
                return {
                    data,
                    error: null
                };
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * {@see GoTrueMFAApi#verify}
     */ async _verify(params) {
        return this._acquireLock(-1, async ()=>{
            try {
                return await this._useSession(async (result)=>{
                    var _a;
                    const { data: sessionData, error: sessionError } = result;
                    if (sessionError) return {
                        data: null,
                        error: sessionError
                    };
                    const { data, error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/factors/${params.factorId}/verify`, {
                        body: {
                            code: params.code,
                            challenge_id: params.challengeId
                        },
                        headers: this.headers,
                        jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                    });
                    if (error) return {
                        data: null,
                        error
                    };
                    await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1000) + data.expires_in
                    }, data));
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", data);
                    return {
                        data,
                        error
                    };
                });
            } catch (error) {
                if ((0, _errors.isAuthError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * {@see GoTrueMFAApi#challenge}
     */ async _challenge(params) {
        return this._acquireLock(-1, async ()=>{
            try {
                return await this._useSession(async (result)=>{
                    var _a;
                    const { data: sessionData, error: sessionError } = result;
                    if (sessionError) return {
                        data: null,
                        error: sessionError
                    };
                    return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/factors/${params.factorId}/challenge`, {
                        headers: this.headers,
                        jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                    });
                });
            } catch (error) {
                if ((0, _errors.isAuthError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * {@see GoTrueMFAApi#challengeAndVerify}
     */ async _challengeAndVerify(params) {
        // both _challenge and _verify independently acquire the lock, so no need
        // to acquire it here
        const { data: challengeData, error: challengeError } = await this._challenge({
            factorId: params.factorId
        });
        if (challengeError) return {
            data: null,
            error: challengeError
        };
        return await this._verify({
            factorId: params.factorId,
            challengeId: challengeData.id,
            code: params.code
        });
    }
    /**
     * {@see GoTrueMFAApi#listFactors}
     */ async _listFactors() {
        // use #getUser instead of #_getUser as the former acquires a lock
        const { data: { user }, error: userError } = await this.getUser();
        if (userError) return {
            data: null,
            error: userError
        };
        const factors = (user === null || user === void 0 ? void 0 : user.factors) || [];
        const totp = factors.filter((factor)=>factor.factor_type === "totp" && factor.status === "verified");
        return {
            data: {
                all: factors,
                totp
            },
            error: null
        };
    }
    /**
     * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
     */ async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async ()=>{
            return await this._useSession(async (result)=>{
                var _a, _b;
                const { data: { session }, error: sessionError } = result;
                if (sessionError) return {
                    data: null,
                    error: sessionError
                };
                if (!session) return {
                    data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: []
                    },
                    error: null
                };
                const payload = this._decodeJWT(session.access_token);
                let currentLevel = null;
                if (payload.aal) currentLevel = payload.aal;
                let nextLevel = currentLevel;
                const verifiedFactors = (_b = (_a = session.user.factors) === null || _a === void 0 ? void 0 : _a.filter((factor)=>factor.status === "verified")) !== null && _b !== void 0 ? _b : [];
                if (verifiedFactors.length > 0) nextLevel = "aal2";
                const currentAuthenticationMethods = payload.amr || [];
                return {
                    data: {
                        currentLevel,
                        nextLevel,
                        currentAuthenticationMethods
                    },
                    error: null
                };
            });
        });
    }
}
exports.default = GoTrueClient;
GoTrueClient.nextInstanceID = 0;

},{"./GoTrueAdminApi":"eBouV","./lib/constants":"kMUzl","./lib/errors":"l4Miv","./lib/fetch":"d3spS","./lib/helpers":"gVab2","./lib/local-storage":"geltS","./lib/polyfills":"ftheX","./lib/version":"03ZTv","./lib/locks":"hJm2t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"geltS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localStorageAdapter", ()=>localStorageAdapter);
/**
 * Returns a localStorage-like object that stores the key-value pairs in
 * memory.
 */ parcelHelpers.export(exports, "memoryLocalStorageAdapter", ()=>memoryLocalStorageAdapter);
var _helpers = require("./helpers");
const localStorageAdapter = {
    getItem: (key)=>{
        if (!(0, _helpers.supportsLocalStorage)()) return null;
        return globalThis.localStorage.getItem(key);
    },
    setItem: (key, value)=>{
        if (!(0, _helpers.supportsLocalStorage)()) return;
        globalThis.localStorage.setItem(key, value);
    },
    removeItem: (key)=>{
        if (!(0, _helpers.supportsLocalStorage)()) return;
        globalThis.localStorage.removeItem(key);
    }
};
function memoryLocalStorageAdapter(store = {}) {
    return {
        getItem: (key)=>{
            return store[key] || null;
        },
        setItem: (key, value)=>{
            store[key] = value;
        },
        removeItem: (key)=>{
            delete store[key];
        }
    };
}

},{"./helpers":"gVab2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ftheX":[function(require,module,exports) {
/**
 * https://mathiasbynens.be/notes/globalthis
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "polyfillGlobalThis", ()=>polyfillGlobalThis);
function polyfillGlobalThis() {
    if (typeof globalThis === "object") return;
    try {
        Object.defineProperty(Object.prototype, "__magic__", {
            get: function() {
                return this;
            },
            configurable: true
        });
        // @ts-expect-error 'Allow access to magic'
        __magic__.globalThis = __magic__;
        // @ts-expect-error 'Allow access to magic'
        delete Object.prototype.__magic__;
    } catch (e) {
        if (typeof self !== "undefined") // @ts-expect-error 'Allow access to globals'
        self.globalThis = self;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hJm2t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "internals", ()=>internals);
/**
 * An error thrown when a lock cannot be acquired after some amount of time.
 *
 * Use the {@link #isAcquireTimeout} property instead of checking with `instanceof`.
 */ parcelHelpers.export(exports, "LockAcquireTimeoutError", ()=>LockAcquireTimeoutError);
parcelHelpers.export(exports, "NavigatorLockAcquireTimeoutError", ()=>NavigatorLockAcquireTimeoutError);
/**
 * Implements a global exclusive lock using the Navigator LockManager API. It
 * is available on all browsers released after 2022-03-15 with Safari being the
 * last one to release support. If the API is not available, this function will
 * throw. Make sure you check availablility before configuring {@link
 * GoTrueClient}.
 *
 * You can turn on debugging by setting the `supabase.gotrue-js.locks.debug`
 * local storage item to `true`.
 *
 * Internals:
 *
 * Since the LockManager API does not preserve stack traces for the async
 * function passed in the `request` method, a trick is used where acquiring the
 * lock releases a previously started promise to run the operation in the `fn`
 * function. The lock waits for that promise to finish (with or without error),
 * while the function will finally wait for the result anyway.
 *
 * @param name Name of the lock to be acquired.
 * @param acquireTimeout If negative, no timeout. If 0 an error is thrown if
 *                       the lock can't be acquired without waiting. If positive, the lock acquire
 *                       will time out after so many milliseconds. An error is
 *                       a timeout if it has `isAcquireTimeout` set to true.
 * @param fn The operation to run once the lock is acquired.
 */ parcelHelpers.export(exports, "navigatorLock", ()=>navigatorLock);
var _helpers = require("./helpers");
const internals = {
    /**
     * @experimental
     */ debug: !!(globalThis && (0, _helpers.supportsLocalStorage)() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class LockAcquireTimeoutError extends Error {
    constructor(message){
        super(message);
        this.isAcquireTimeout = true;
    }
}
class NavigatorLockAcquireTimeoutError extends LockAcquireTimeoutError {
}
async function navigatorLock(name, acquireTimeout, fn) {
    if (internals.debug) console.log("@supabase/gotrue-js: navigatorLock: acquire lock", name, acquireTimeout);
    const abortController = new globalThis.AbortController();
    if (acquireTimeout > 0) setTimeout(()=>{
        abortController.abort();
        if (internals.debug) console.log("@supabase/gotrue-js: navigatorLock acquire timed out", name);
    }, acquireTimeout);
    // MDN article: https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request
    return await globalThis.navigator.locks.request(name, acquireTimeout === 0 ? {
        mode: "exclusive",
        ifAvailable: true
    } : {
        mode: "exclusive",
        signal: abortController.signal
    }, async (lock)=>{
        if (lock) {
            if (internals.debug) console.log("@supabase/gotrue-js: navigatorLock: acquired", name, lock.name);
            try {
                return await fn();
            } finally{
                if (internals.debug) console.log("@supabase/gotrue-js: navigatorLock: released", name, lock.name);
            }
        } else if (acquireTimeout === 0) {
            if (internals.debug) console.log("@supabase/gotrue-js: navigatorLock: not immediately available", name);
            throw new NavigatorLockAcquireTimeoutError(`Acquiring an exclusive Navigator LockManager lock "${name}" immediately failed`);
        } else {
            if (internals.debug) try {
                const result = await globalThis.navigator.locks.query();
                console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(result, null, "  "));
            } catch (e) {
                console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
            }
            // Browser is not following the Navigator LockManager spec, it
            // returned a null lock when we didn't use ifAvailable. So we can
            // pretend the lock is acquired in the name of backward compatibility
            // and user experience and just run the function.
            console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request");
            return await fn();
        }
    });
}

},{"./helpers":"gVab2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jiS2C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _goTrueAdminApi = require("./GoTrueAdminApi");
var _goTrueAdminApiDefault = parcelHelpers.interopDefault(_goTrueAdminApi);
const AuthAdminApi = (0, _goTrueAdminApiDefault.default);
exports.default = AuthAdminApi;

},{"./GoTrueAdminApi":"eBouV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ka9HK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _goTrueClient = require("./GoTrueClient");
var _goTrueClientDefault = parcelHelpers.interopDefault(_goTrueClient);
const AuthClient = (0, _goTrueClientDefault.default);
exports.default = AuthClient;

},{"./GoTrueClient":"san1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4K6fZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kdFB":[function(require,module,exports) {
/*global window, global*/ var global = arguments[3];
var util = require("69c2299a3979223b");
var assert = require("ddc56b415c70169e");
function now() {
    return new Date().getTime();
}
var slice = Array.prototype.slice;
var console;
var times = {};
if (typeof global !== "undefined" && global.console) console = global.console;
else if (typeof window !== "undefined" && window.console) console = window.console;
else console = {};
var functions = [
    [
        log,
        "log"
    ],
    [
        info,
        "info"
    ],
    [
        warn,
        "warn"
    ],
    [
        error,
        "error"
    ],
    [
        time,
        "time"
    ],
    [
        timeEnd,
        "timeEnd"
    ],
    [
        trace,
        "trace"
    ],
    [
        dir,
        "dir"
    ],
    [
        consoleAssert,
        "assert"
    ]
];
for(var i = 0; i < functions.length; i++){
    var tuple = functions[i];
    var f = tuple[0];
    var name = tuple[1];
    if (!console[name]) console[name] = f;
}
module.exports = console;
function log() {}
function info() {
    console.log.apply(console, arguments);
}
function warn() {
    console.log.apply(console, arguments);
}
function error() {
    console.warn.apply(console, arguments);
}
function time(label) {
    times[label] = now();
}
function timeEnd(label) {
    var time = times[label];
    if (!time) throw new Error("No such label: " + label);
    delete times[label];
    var duration = now() - time;
    console.log(label + ": " + duration + "ms");
}
function trace() {
    var err = new Error();
    err.name = "Trace";
    err.message = util.format.apply(null, arguments);
    console.error(err.stack);
}
function dir(object) {
    console.log(util.inspect(object) + "\n");
}
function consoleAssert(expression) {
    if (!expression) {
        var arr = slice.call(arguments, 1);
        assert.ok(false, util.format.apply(null, arr));
    }
}

},{"69c2299a3979223b":"cxohQ","ddc56b415c70169e":"f3tT4"}],"cxohQ":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var process = require("bc23a3ea4a141c0b");
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
    if (!isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push(inspect(arguments[i]));
        return objects.join(" ");
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
        if (x === "%%") return "%";
        if (i >= len) return x;
        switch(x){
            case "%s":
                return String(args[i++]);
            case "%d":
                return Number(args[i++]);
            case "%j":
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return "[Circular]";
                }
            default:
                return x;
        }
    });
    for(var x = args[i]; i < len; x = args[++i])if (isNull(x) || !isObject(x)) str += " " + x;
    else str += " " + inspect(x);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
    if (typeof process !== "undefined" && process.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof process === "undefined") return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) throw new Error(msg);
            else if (process.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var debugs = {};
var debugEnvRegex = /^$/;
var debugEnv;
exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
                var msg = exports.format.apply(exports, arguments);
                console.error("%s %d: %s", set, pid, msg);
            };
        } else debugs[set] = function() {};
    }
    return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    exports._extend(ctx, opts);
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
    "bold": [
        1,
        22
    ],
    "italic": [
        3,
        23
    ],
    "underline": [
        4,
        24
    ],
    "inverse": [
        7,
        27
    ],
    "white": [
        37,
        39
    ],
    "grey": [
        90,
        39
    ],
    "black": [
        30,
        39
    ],
    "blue": [
        34,
        39
    ],
    "cyan": [
        36,
        39
    ],
    "green": [
        32,
        39
    ],
    "magenta": [
        35,
        39
    ],
    "red": [
        31,
        39
    ],
    "yellow": [
        33,
        39
    ]
};
// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
    "special": "cyan",
    "number": "yellow",
    "boolean": "yellow",
    "undefined": "grey",
    "null": "bold",
    "string": "green",
    "date": "magenta",
    // "name": intentionally not styling
    "regexp": "red"
};
function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) return "\x1b[" + inspect.colors[style][0] + "m" + str + "\x1b[" + inspect.colors[style][1] + "m";
    else return str;
}
function stylizeNoColor(str, styleType) {
    return str;
}
function arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
        if (isError(value)) return formatError(value);
    }
    var base = "", array = false, braces = [
        "{",
        "}"
    ];
    // Make Array say that they are Array
    if (isArray(value)) {
        array = true;
        braces = [
            "[",
            "]"
        ];
    }
    // Make functions say that they are functions
    if (isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
    }
    // Make RegExps say that they are RegExps
    if (isRegExp(value)) base = " " + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if (isDate(value)) base = " " + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if (isError(value)) base = " " + formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        else return ctx.stylize("[Object]", "special");
    }
    ctx.seen.push(value);
    var output;
    if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
    if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
    }
    if (isNumber(value)) return ctx.stylize("" + value, "number");
    if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
    // For some reason typeof null is "object", so special case here.
    if (isNull(value)) return ctx.stylize("null", "null");
}
function formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push("");
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize("[Getter/Setter]", "special");
        else str = ctx.stylize("[Getter]", "special");
    } else if (desc.set) str = ctx.stylize("[Setter]", "special");
    if (!hasOwnProperty(visibleKeys, key)) name = "[" + key + "]";
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null);
            else str = formatValue(ctx, desc.value, recurseTimes - 1);
            if (str.indexOf("\n") > -1) {
                if (array) str = str.split("\n").map(function(line) {
                    return "  " + line;
                }).join("\n").slice(2);
                else str = "\n" + str.split("\n").map(function(line) {
                    return "   " + line;
                }).join("\n");
            }
        } else str = ctx.stylize("[Circular]", "special");
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.slice(1, -1);
            name = ctx.stylize(name, "name");
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
        }
    }
    return name + ": " + str;
}
function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf("\n") >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
    return braces[0] + base + " " + output.join(", ") + " " + braces[1];
}
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = require("6a1c15bae847a134");
function isArray(ar) {
    return Array.isArray(ar);
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === "boolean";
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === "number";
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === "string";
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === "symbol";
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return isObject(re) && objectToString(re) === "[object RegExp]";
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return isObject(d) && objectToString(d) === "[object Date]";
}
exports.isDate = isDate;
exports.types.isDate = isDate;
function isError(e) {
    return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;
function isFunction(arg) {
    return typeof arg === "function";
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = require("a42137cd7fc8700d");
function objectToString(o) {
    return Object.prototype.toString.call(o);
}
function pad(n) {
    return n < 10 ? "0" + n.toString(10) : n.toString(10);
}
var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
// 26 Feb 16:19:34
function timestamp() {
    var d = new Date();
    var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
    ].join(":");
    return [
        d.getDate(),
        months[d.getMonth()],
        time
    ].join(" ");
}
// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
    console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ exports.inherits = require("a792e8e3e2aa1973");
exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
exports.promisify = function promisify(original) {
    if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== "function") throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        args.push(function(err, value) {
            if (err) promiseReject(err);
            else promiseResolve(value);
        });
        try {
            original.apply(this, args);
        } catch (err) {
            promiseReject(err);
        }
        return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};
exports.promisify.custom = kCustomPromisifiedSymbol;
function callbackifyOnRejected(reason, cb) {
    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
    }
    return cb(reason);
}
function callbackify(original) {
    if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") throw new TypeError("The last argument must be of type Function");
        var self = this;
        var cb = function() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            process.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
    return callbackified;
}
exports.callbackify = callbackify;

},{"bc23a3ea4a141c0b":"d5jf4","6a1c15bae847a134":"bnQvf","a42137cd7fc8700d":"inNNy","a792e8e3e2aa1973":"bRL3M"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"bnQvf":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
"use strict";
var isArgumentsObject = require("6b5f9ae3e436d527");
var isGeneratorFunction = require("285c2b8081bf4b68");
var whichTypedArray = require("e95b88ccd80e1671");
var isTypedArray = require("7db151546a22c2a8");
function uncurryThis(f) {
    return f.call.bind(f);
}
var BigIntSupported = typeof BigInt !== "undefined";
var SymbolSupported = typeof Symbol !== "undefined";
var ObjectToString = uncurryThis(Object.prototype.toString);
var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);
if (BigIntSupported) var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
if (SymbolSupported) var symbolValue = uncurryThis(Symbol.prototype.valueOf);
function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== "object") return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
    return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
}
exports.isPromise = isPromise;
function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return isTypedArray(value) || isDataView(value);
}
exports.isArrayBufferView = isArrayBufferView;
function isUint8Array(value) {
    return whichTypedArray(value) === "Uint8Array";
}
exports.isUint8Array = isUint8Array;
function isUint8ClampedArray(value) {
    return whichTypedArray(value) === "Uint8ClampedArray";
}
exports.isUint8ClampedArray = isUint8ClampedArray;
function isUint16Array(value) {
    return whichTypedArray(value) === "Uint16Array";
}
exports.isUint16Array = isUint16Array;
function isUint32Array(value) {
    return whichTypedArray(value) === "Uint32Array";
}
exports.isUint32Array = isUint32Array;
function isInt8Array(value) {
    return whichTypedArray(value) === "Int8Array";
}
exports.isInt8Array = isInt8Array;
function isInt16Array(value) {
    return whichTypedArray(value) === "Int16Array";
}
exports.isInt16Array = isInt16Array;
function isInt32Array(value) {
    return whichTypedArray(value) === "Int32Array";
}
exports.isInt32Array = isInt32Array;
function isFloat32Array(value) {
    return whichTypedArray(value) === "Float32Array";
}
exports.isFloat32Array = isFloat32Array;
function isFloat64Array(value) {
    return whichTypedArray(value) === "Float64Array";
}
exports.isFloat64Array = isFloat64Array;
function isBigInt64Array(value) {
    return whichTypedArray(value) === "BigInt64Array";
}
exports.isBigInt64Array = isBigInt64Array;
function isBigUint64Array(value) {
    return whichTypedArray(value) === "BigUint64Array";
}
exports.isBigUint64Array = isBigUint64Array;
function isMapToString(value) {
    return ObjectToString(value) === "[object Map]";
}
isMapToString.working = typeof Map !== "undefined" && isMapToString(new Map());
function isMap(value) {
    if (typeof Map === "undefined") return false;
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
}
exports.isMap = isMap;
function isSetToString(value) {
    return ObjectToString(value) === "[object Set]";
}
isSetToString.working = typeof Set !== "undefined" && isSetToString(new Set());
function isSet(value) {
    if (typeof Set === "undefined") return false;
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
}
exports.isSet = isSet;
function isWeakMapToString(value) {
    return ObjectToString(value) === "[object WeakMap]";
}
isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(new WeakMap());
function isWeakMap(value) {
    if (typeof WeakMap === "undefined") return false;
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;
function isWeakSetToString(value) {
    return ObjectToString(value) === "[object WeakSet]";
}
isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(new WeakSet());
function isWeakSet(value) {
    return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;
function isArrayBufferToString(value) {
    return ObjectToString(value) === "[object ArrayBuffer]";
}
isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
function isArrayBuffer(value) {
    if (typeof ArrayBuffer === "undefined") return false;
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;
function isDataViewToString(value) {
    return ObjectToString(value) === "[object DataView]";
}
isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function isDataView(value) {
    if (typeof DataView === "undefined") return false;
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
}
exports.isDataView = isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === "[object SharedArrayBuffer]";
}
function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === "undefined") return false;
    if (typeof isSharedArrayBufferToString.working === "undefined") isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;
function isAsyncFunction(value) {
    return ObjectToString(value) === "[object AsyncFunction]";
}
exports.isAsyncFunction = isAsyncFunction;
function isMapIterator(value) {
    return ObjectToString(value) === "[object Map Iterator]";
}
exports.isMapIterator = isMapIterator;
function isSetIterator(value) {
    return ObjectToString(value) === "[object Set Iterator]";
}
exports.isSetIterator = isSetIterator;
function isGeneratorObject(value) {
    return ObjectToString(value) === "[object Generator]";
}
exports.isGeneratorObject = isGeneratorObject;
function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === "[object WebAssembly.Module]";
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;
function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;
function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;
function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;
function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;
function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
}
exports.isBoxedPrimitive = isBoxedPrimitive;
function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;
[
    "isProxy",
    "isExternal",
    "isModuleNamespaceObject"
].forEach(function(method) {
    Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
            throw new Error(method + " is not supported in userland");
        }
    });
});

},{"6b5f9ae3e436d527":"czr4n","285c2b8081bf4b68":"2XUdn","e95b88ccd80e1671":"lVUO7","7db151546a22c2a8":"1ihkG"}],"czr4n":[function(require,module,exports) {
"use strict";
var hasToStringTag = require("e2b01ce809f132fb")();
var callBound = require("649cbf9949986a39");
var $toString = callBound("Object.prototype.toString");
var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) return false;
    return $toString(value) === "[object Arguments]";
};
var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) return true;
    return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"e2b01ce809f132fb":"9LdQ9","649cbf9949986a39":"5yYiF"}],"9LdQ9":[function(require,module,exports) {
"use strict";
var hasSymbols = require("2ef89576d4959bff");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};

},{"2ef89576d4959bff":"euYk7"}],"euYk7":[function(require,module,exports) {
"use strict";
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
    if (typeof Symbol.iterator === "symbol") return true;
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") return false;
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"5yYiF":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("8b08ecb81cf4de17");
var callBind = require("266fc50410cfc4a");
var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"8b08ecb81cf4de17":"dZb05","266fc50410cfc4a":"bfo8D"}],"dZb05":[function(require,module,exports) {
"use strict";
var undefined1;
var $Error = require("ff34c740859aa28e");
var $EvalError = require("349515b7ea9b6cef");
var $RangeError = require("9da01653b2dd9abf");
var $ReferenceError = require("68586abd6b0136da");
var $SyntaxError = require("662263fdbc077fc8");
var $TypeError = require("abdfc34e5f6bb86");
var $URIError = require("daca1f932429e03e");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({}, "");
} catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require("1f00f712d594ccf")();
var hasProto = require("23730654306aa64c")();
var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
    return x.__proto__;
} // eslint-disable-line no-proto
 : null);
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    "%AsyncFromSyncIteratorPrototype%": undefined,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    "%EvalError%": $EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    "%JSON%": typeof JSON === "object" ? JSON : undefined,
    "%Map%": typeof Map === "undefined" ? undefined : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
    "%Symbol%": hasSymbols ? Symbol : undefined,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet
};
if (getProto) try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var errorProto = getProto(getProto(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
}
var doEval = function doEval(name) {
    var value;
    if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
        var fn = doEval("%AsyncGeneratorFunction%");
        if (fn) value = fn.prototype;
    } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval("%AsyncGenerator%");
        if (gen && getProto) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
    ],
    "%ArrayPrototype%": [
        "Array",
        "prototype"
    ],
    "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
    ],
    "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
    ],
    "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
    ],
    "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
    ],
    "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
    ],
    "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%BooleanPrototype%": [
        "Boolean",
        "prototype"
    ],
    "%DataViewPrototype%": [
        "DataView",
        "prototype"
    ],
    "%DatePrototype%": [
        "Date",
        "prototype"
    ],
    "%ErrorPrototype%": [
        "Error",
        "prototype"
    ],
    "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
    ],
    "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
    ],
    "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
    ],
    "%FunctionPrototype%": [
        "Function",
        "prototype"
    ],
    "%Generator%": [
        "GeneratorFunction",
        "prototype"
    ],
    "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
    ],
    "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
    ],
    "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
    ],
    "%JSONParse%": [
        "JSON",
        "parse"
    ],
    "%JSONStringify%": [
        "JSON",
        "stringify"
    ],
    "%MapPrototype%": [
        "Map",
        "prototype"
    ],
    "%NumberPrototype%": [
        "Number",
        "prototype"
    ],
    "%ObjectPrototype%": [
        "Object",
        "prototype"
    ],
    "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
    ],
    "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
    ],
    "%PromisePrototype%": [
        "Promise",
        "prototype"
    ],
    "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
    ],
    "%Promise_all%": [
        "Promise",
        "all"
    ],
    "%Promise_reject%": [
        "Promise",
        "reject"
    ],
    "%Promise_resolve%": [
        "Promise",
        "resolve"
    ],
    "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
    ],
    "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
    ],
    "%RegExpPrototype%": [
        "RegExp",
        "prototype"
    ],
    "%SetPrototype%": [
        "Set",
        "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
    ],
    "%StringPrototype%": [
        "String",
        "prototype"
    ],
    "%SymbolPrototype%": [
        "Symbol",
        "prototype"
    ],
    "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
    ],
    "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
    ],
    "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
    ],
    "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
    ],
    "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
    ],
    "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
    ],
    "%URIErrorPrototype%": [
        "URIError",
        "prototype"
    ],
    "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
    ],
    "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
    ]
};
var bind = require("7c5e688e48cd07b0");
var hasOwn = require("af36d49b4b8c6c7c");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
        if (part === "constructor" || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"ff34c740859aa28e":"eDsor","349515b7ea9b6cef":"hIiFU","9da01653b2dd9abf":"11MNe","68586abd6b0136da":"2YV8d","662263fdbc077fc8":"8jeeH","abdfc34e5f6bb86":"6oWLR","daca1f932429e03e":"a04Um","1f00f712d594ccf":"3dK91","23730654306aa64c":"6eZiF","7c5e688e48cd07b0":"6J4ob","af36d49b4b8c6c7c":"9Wb6f"}],"eDsor":[function(require,module,exports) {
"use strict";
/** @type {import('.')} */ module.exports = Error;

},{}],"hIiFU":[function(require,module,exports) {
"use strict";
/** @type {import('./eval')} */ module.exports = EvalError;

},{}],"11MNe":[function(require,module,exports) {
"use strict";
/** @type {import('./range')} */ module.exports = RangeError;

},{}],"2YV8d":[function(require,module,exports) {
"use strict";
/** @type {import('./ref')} */ module.exports = ReferenceError;

},{}],"8jeeH":[function(require,module,exports) {
"use strict";
/** @type {import('./syntax')} */ module.exports = SyntaxError;

},{}],"6oWLR":[function(require,module,exports) {
"use strict";
/** @type {import('./type')} */ module.exports = TypeError;

},{}],"a04Um":[function(require,module,exports) {
"use strict";
/** @type {import('./uri')} */ module.exports = URIError;

},{}],"3dK91":[function(require,module,exports) {
"use strict";
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = require("3fb25678c62d2fce");
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") return false;
    if (typeof Symbol !== "function") return false;
    if (typeof origSymbol("foo") !== "symbol") return false;
    if (typeof Symbol("bar") !== "symbol") return false;
    return hasSymbolSham();
};

},{"3fb25678c62d2fce":"euYk7"}],"6eZiF":[function(require,module,exports) {
"use strict";
var test = {
    __proto__: null,
    foo: {}
};
var $Object = Object;
/** @type {import('.')} */ module.exports = function hasProto() {
    // @ts-expect-error: TS errors on an inherited property for some reason
    return ({
        __proto__: test
    }).foo === test.foo && !(test instanceof $Object);
};

},{}],"6J4ob":[function(require,module,exports) {
"use strict";
var implementation = require("12e173b4dbaee960");
module.exports = Function.prototype.bind || implementation;

},{"12e173b4dbaee960":"jwaxQ"}],"jwaxQ":[function(require,module,exports) {
"use strict";
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = "[object Function]";
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
    for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
    return arr;
};
var joiny = function(arr, joiner) {
    var str = "";
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) str += joiner;
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) return result;
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs[i] = "$" + i;
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"9Wb6f":[function(require,module,exports) {
"use strict";
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = require("126cb75e62f8e17b");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);

},{"126cb75e62f8e17b":"6J4ob"}],"bfo8D":[function(require,module,exports) {
"use strict";
var bind = require("4f9d84d5de4909bc");
var GetIntrinsic = require("68d2ad3775278f43");
var setFunctionLength = require("f4b53071c102d4e");
var $TypeError = require("761613670c43be80");
var $apply = GetIntrinsic("%Function.prototype.apply%");
var $call = GetIntrinsic("%Function.prototype.call%");
var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
var $defineProperty = require("3426ee59b177cf96");
var $max = GetIntrinsic("%Math.max%");
module.exports = function callBind(originalFunction) {
    if (typeof originalFunction !== "function") throw new $TypeError("a function is required");
    var func = $reflectApply(bind, $call, arguments);
    return setFunctionLength(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, "apply", {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"4f9d84d5de4909bc":"6J4ob","68d2ad3775278f43":"dZb05","f4b53071c102d4e":"9IKoX","761613670c43be80":"6oWLR","3426ee59b177cf96":"5SmXK"}],"9IKoX":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("8b1c9107ef1524f2");
var define = require("37dd1486f0f556ef");
var hasDescriptors = require("6a9d2b46085df706")();
var gOPD = require("2d412b0f532d1834");
var $TypeError = require("4352c534d27fe477");
var $floor = GetIntrinsic("%Math.floor%");
/** @type {import('.')} */ module.exports = function setFunctionLength(fn, length) {
    if (typeof fn !== "function") throw new $TypeError("`fn` is not a function");
    if (typeof length !== "number" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) throw new $TypeError("`length` must be a positive 32-bit integer");
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) functionLengthIsConfigurable = false;
        if (desc && !desc.writable) functionLengthIsWritable = false;
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) define(/** @type {Parameters<define>[0]} */ fn, "length", length, true, true);
        else define(/** @type {Parameters<define>[0]} */ fn, "length", length);
    }
    return fn;
};

},{"8b1c9107ef1524f2":"dZb05","37dd1486f0f556ef":"6cEff","6a9d2b46085df706":"esBLZ","2d412b0f532d1834":"eOTQB","4352c534d27fe477":"6oWLR"}],"6cEff":[function(require,module,exports) {
"use strict";
var $defineProperty = require("f17fd23367965521");
var $SyntaxError = require("50f12088ee0f6bb");
var $TypeError = require("45c79de2b2f9c949");
var gopd = require("3f9bd39335781ec7");
/** @type {import('.')} */ module.exports = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== "object" && typeof obj !== "function") throw new $TypeError("`obj` must be an object or a function`");
    if (typeof property !== "string" && typeof property !== "symbol") throw new $TypeError("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] !== "boolean") throw new $TypeError("`loose`, if provided, must be a boolean");
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!gopd && gopd(obj, property);
    if ($defineProperty) $defineProperty(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value: value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
    else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
    obj[property] = value; // eslint-disable-line no-param-reassign
    else throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
};

},{"f17fd23367965521":"5SmXK","50f12088ee0f6bb":"8jeeH","45c79de2b2f9c949":"6oWLR","3f9bd39335781ec7":"eOTQB"}],"5SmXK":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("8e0b8e4026aaf38a");
/** @type {import('.')} */ var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
if ($defineProperty) try {
    $defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = false;
}
module.exports = $defineProperty;

},{"8e0b8e4026aaf38a":"dZb05"}],"eOTQB":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("693e651525841e04");
var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) try {
    $gOPD([], "length");
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"693e651525841e04":"dZb05"}],"esBLZ":[function(require,module,exports) {
"use strict";
var $defineProperty = require("1c3b0ce871129f60");
var hasPropertyDescriptors = function hasPropertyDescriptors() {
    return !!$defineProperty;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!$defineProperty) return null;
    try {
        return $defineProperty([], "length", {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = hasPropertyDescriptors;

},{"1c3b0ce871129f60":"5SmXK"}],"2XUdn":[function(require,module,exports) {
"use strict";
var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = require("b42ab74c25dbb155")();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
    if (!hasToStringTag) return false;
    try {
        return Function("return function*() {}")();
    } catch (e) {}
};
var GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== "function") return false;
    if (isFnRegex.test(fnToStr.call(fn))) return true;
    if (!hasToStringTag) {
        var str = toStr.call(fn);
        return str === "[object GeneratorFunction]";
    }
    if (!getProto) return false;
    if (typeof GeneratorFunction === "undefined") {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
};

},{"b42ab74c25dbb155":"9LdQ9"}],"lVUO7":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var forEach = require("2941d48f36957e3c");
var availableTypedArrays = require("beaf5502a5823cce");
var callBind = require("e5d203a1b4c809f9");
var callBound = require("83f633f9b335db8f");
var gOPD = require("ce6b45c571ba4e3e");
/** @type {(O: object) => string} */ var $toString = callBound("Object.prototype.toString");
var hasToStringTag = require("9e7ef6c88184c56")();
var g = typeof globalThis === "undefined" ? global : globalThis;
var typedArrays = availableTypedArrays();
var $slice = callBound("String.prototype.slice");
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
/** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */ var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
/** @typedef {(receiver: import('.').TypedArray) => string | typeof Uint8Array.prototype.slice.call | typeof Uint8Array.prototype.set.call} Getter */ /** @type {{ [k in `\$${import('.').TypedArrayName}`]?: Getter } & { __proto__: null }} */ var cache = {
    __proto__: null
};
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        // @ts-expect-error TS won't narrow inside a closure
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            // @ts-expect-error TS won't narrow inside a closure
            descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        // @ts-expect-error TODO: fix
        cache["$" + typedArray] = callBind(descriptor.get);
    }
});
else forEach(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    var fn = arr.slice || arr.set;
    if (fn) // @ts-expect-error TODO: fix
    cache["$" + typedArray] = callBind(fn);
});
/** @type {(value: object) => false | import('.').TypedArrayName} */ var tryTypedArrays = function tryAllTypedArrays(value) {
    /** @type {ReturnType<typeof tryAllTypedArrays>} */ var found = false;
    forEach(// eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */ /** @type {any} */ cache, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function(getter, typedArray) {
        if (!found) try {
            // @ts-expect-error TODO: fix
            if ("$" + getter(value) === typedArray) found = $slice(typedArray, 1);
        } catch (e) {}
    });
    return found;
};
/** @type {(value: object) => false | import('.').TypedArrayName} */ var trySlices = function tryAllSlices(value) {
    /** @type {ReturnType<typeof tryAllSlices>} */ var found = false;
    forEach(// eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */ /** @type {any} */ cache, /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */ function(getter, name) {
        if (!found) try {
            // @ts-expect-error TODO: fix
            getter(value);
            found = $slice(name, 1);
        } catch (e) {}
    });
    return found;
};
/** @type {import('.')} */ module.exports = function whichTypedArray(value) {
    if (!value || typeof value !== "object") return false;
    if (!hasToStringTag) {
        /** @type {string} */ var tag = $slice($toString(value), 8, -1);
        if ($indexOf(typedArrays, tag) > -1) return tag;
        if (tag !== "Object") return false;
        // node < 0.6 hits here on real Typed Arrays
        return trySlices(value);
    }
    if (!gOPD) return null;
     // unknown engine
    return tryTypedArrays(value);
};

},{"2941d48f36957e3c":"1Sol9","beaf5502a5823cce":"kfela","e5d203a1b4c809f9":"bfo8D","83f633f9b335db8f":"5yYiF","ce6b45c571ba4e3e":"eOTQB","9e7ef6c88184c56":"9LdQ9"}],"1Sol9":[function(require,module,exports) {
"use strict";
var isCallable = require("e50ebc24bbb25feb");
var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var forEachArray = function forEachArray(array, iterator, receiver) {
    for(var i = 0, len = array.length; i < len; i++)if (hasOwnProperty.call(array, i)) {
        if (receiver == null) iterator(array[i], i, array);
        else iterator.call(receiver, array[i], i, array);
    }
};
var forEachString = function forEachString(string, iterator, receiver) {
    for(var i = 0, len = string.length; i < len; i++)// no such thing as a sparse string.
    if (receiver == null) iterator(string.charAt(i), i, string);
    else iterator.call(receiver, string.charAt(i), i, string);
};
var forEachObject = function forEachObject(object, iterator, receiver) {
    for(var k in object)if (hasOwnProperty.call(object, k)) {
        if (receiver == null) iterator(object[k], k, object);
        else iterator.call(receiver, object[k], k, object);
    }
};
var forEach = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) throw new TypeError("iterator must be a function");
    var receiver;
    if (arguments.length >= 3) receiver = thisArg;
    if (toStr.call(list) === "[object Array]") forEachArray(list, iterator, receiver);
    else if (typeof list === "string") forEachString(list, iterator, receiver);
    else forEachObject(list, iterator, receiver);
};
module.exports = forEach;

},{"e50ebc24bbb25feb":"9ocyk"}],"9ocyk":[function(require,module,exports) {
"use strict";
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") try {
    badArrayLike = Object.defineProperty({}, "length", {
        get: function() {
            throw isCallableMarker;
        }
    });
    isCallableMarker = {};
    // eslint-disable-next-line no-throw-literal
    reflectApply(function() {
        throw 42;
    }, null, badArrayLike);
} catch (_) {
    if (_ !== isCallableMarker) reflectApply = null;
}
else reflectApply = null;
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
    try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
    } catch (e) {
        return false; // not a function
    }
};
var tryFunctionObject = function tryFunctionToStr(value) {
    try {
        if (isES6ClassFn(value)) return false;
        fnToStr.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var toStr = Object.prototype.toString;
var objectClass = "[object Object]";
var fnClass = "[object Function]";
var genClass = "[object GeneratorFunction]";
var ddaClass = "[object HTMLAllCollection]"; // IE 11
var ddaClass2 = "[object HTML document.all class]";
var ddaClass3 = "[object HTMLCollection]"; // IE 9-10
var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag; // better: use `has-tostringtag`
var isIE68 = !(0 in [
    , 
]); // eslint-disable-line no-sparse-arrays, comma-spacing
var isDDA = function isDocumentDotAll() {
    return false;
};
if (typeof document === "object") {
    // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
    var all = document.all;
    if (toStr.call(all) === toStr.call(document.all)) isDDA = function isDocumentDotAll(value) {
        /* globals document: false */ // in IE 6-8, typeof document.all is "object" and it's truthy
        if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) try {
            var str = toStr.call(value);
            return (str === ddaClass || str === ddaClass2 || str === ddaClass3 // opera 12.16
             || str === objectClass // IE 6-8
            ) && value("") == null; // eslint-disable-line eqeqeq
        } catch (e) {}
        return false;
    };
}
module.exports = reflectApply ? function isCallable(value) {
    if (isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    try {
        reflectApply(value, null, badArrayLike);
    } catch (e) {
        if (e !== isCallableMarker) return false;
    }
    return !isES6ClassFn(value) && tryFunctionObject(value);
} : function isCallable(value) {
    if (isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    if (hasToStringTag) return tryFunctionObject(value);
    if (isES6ClassFn(value)) return false;
    var strClass = toStr.call(value);
    if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) return false;
    return tryFunctionObject(value);
};

},{}],"kfela":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var possibleNames = require("3021d1584ad62785");
var g = typeof globalThis === "undefined" ? global : globalThis;
/** @type {import('.')} */ module.exports = function availableTypedArrays() {
    var /** @type {ReturnType<typeof availableTypedArrays>} */ out = [];
    for(var i = 0; i < possibleNames.length; i++)if (typeof g[possibleNames[i]] === "function") // @ts-expect-error
    out[out.length] = possibleNames[i];
    return out;
};

},{"3021d1584ad62785":"2CagV"}],"2CagV":[function(require,module,exports) {
"use strict";
/** @type {import('.')} */ module.exports = [
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
];

},{}],"1ihkG":[function(require,module,exports) {
"use strict";
var whichTypedArray = require("ccf73e5f240c2b8");
/** @type {import('.')} */ module.exports = function isTypedArray(value) {
    return !!whichTypedArray(value);
};

},{"ccf73e5f240c2b8":"lVUO7"}],"inNNy":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
};

},{}],"bRL3M":[function(require,module,exports) {
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"f3tT4":[function(require,module,exports) {
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
var process = require("17530e9a8e9dd8de");
"use strict";
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var _require = require("67930e3bebc18ea9"), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
var AssertionError = require("11bdd262fb706a54");
var _require2 = require("d61a3396666721b6"), inspect = _require2.inspect;
var _require$types = require("d61a3396666721b6").types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
var objectAssign = require("fe81af847d362e93")();
var objectIs = require("4ad4507c8e372c71")();
var RegExpPrototypeTest = require("11f208d8f2e10b17")("RegExp.prototype.test");
var errorCache = new Map();
var isDeepEqual;
var isDeepStrictEqual;
var parseExpressionAt;
var findNodeAround;
var decoder;
function lazyLoadComparison() {
    var comparison = require("131e25d2408617a4");
    isDeepEqual = comparison.isDeepEqual;
    isDeepStrictEqual = comparison.isDeepStrictEqual;
}
// Escape control characters but not \n and \t to keep the line breaks and
// indentation intact.
// eslint-disable-next-line no-control-regex
var escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
var meta = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "",
    "",
    "\\u000b",
    "\\f",
    "",
    "\\u000e",
    "\\u000f",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001a",
    "\\u001b",
    "\\u001c",
    "\\u001d",
    "\\u001e",
    "\\u001f"
];
var escapeFn = function escapeFn(str) {
    return meta[str.charCodeAt(0)];
};
var warned = false;
// The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.
var assert = module.exports = ok;
var NO_EXCEPTION_SENTINEL = {};
// All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function innerFail(obj) {
    if (obj.message instanceof Error) throw obj.message;
    throw new AssertionError(obj);
}
function fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) internalMessage = "Failed";
    else if (argsLen === 1) {
        message = actual;
        actual = undefined;
    } else {
        if (warned === false) {
            warned = true;
            var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
            warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
        }
        if (argsLen === 2) operator = "!=";
    }
    if (message instanceof Error) throw message;
    var errArgs = {
        actual: actual,
        expected: expected,
        operator: operator === undefined ? "fail" : operator,
        stackStartFn: stackStartFn || fail
    };
    if (message !== undefined) errArgs.message = message;
    var err = new AssertionError(errArgs);
    if (internalMessage) {
        err.message = internalMessage;
        err.generatedMessage = true;
    }
    throw err;
}
assert.fail = fail;
// The AssertionError is defined in internal/error.
assert.AssertionError = AssertionError;
function innerOk(fn, argLen, value, message) {
    if (!value) {
        var generatedMessage = false;
        if (argLen === 0) {
            generatedMessage = true;
            message = "No value argument passed to `assert.ok()`";
        } else if (message instanceof Error) throw message;
        var err = new AssertionError({
            actual: value,
            expected: true,
            message: message,
            operator: "==",
            stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
    }
}
// Pure assertion tests whether a value is truthy, as determined
// by !!value.
function ok() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    innerOk.apply(void 0, [
        ok,
        args.length
    ].concat(args));
}
assert.ok = ok;
// The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */ assert.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    // eslint-disable-next-line eqeqeq
    if (actual != expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "==",
        stackStartFn: equal
    });
};
// The non-equality assertion tests for whether two objects are not
// equal with !=.
assert.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    // eslint-disable-next-line eqeqeq
    if (actual == expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "!=",
        stackStartFn: notEqual
    });
};
// The equivalence assertion tests a deep equality relation.
assert.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "deepEqual",
        stackStartFn: deepEqual
    });
};
// The non-equivalence assertion tests for any deep inequality.
assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notDeepEqual",
        stackStartFn: notDeepEqual
    });
};
/* eslint-enable */ assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "deepStrictEqual",
        stackStartFn: deepStrictEqual
    });
};
assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notDeepStrictEqual",
        stackStartFn: notDeepStrictEqual
    });
}
assert.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (!objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "strictEqual",
        stackStartFn: strictEqual
    });
};
assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notStrictEqual",
        stackStartFn: notStrictEqual
    });
};
var Comparison = /*#__PURE__*/ _createClass(function Comparison(obj, keys, actual) {
    var _this = this;
    _classCallCheck(this, Comparison);
    keys.forEach(function(key) {
        if (key in obj) {
            if (actual !== undefined && typeof actual[key] === "string" && isRegExp(obj[key]) && RegExpPrototypeTest(obj[key], actual[key])) _this[key] = actual[key];
            else _this[key] = obj[key];
        }
    });
});
function compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
        if (!message) {
            // Create placeholder objects to create a nice output.
            var a = new Comparison(actual, keys);
            var b = new Comparison(expected, keys, actual);
            var err = new AssertionError({
                actual: a,
                expected: b,
                operator: "deepStrictEqual",
                stackStartFn: fn
            });
            err.actual = actual;
            err.expected = expected;
            err.operator = fn.name;
            throw err;
        }
        innerFail({
            actual: actual,
            expected: expected,
            message: message,
            operator: fn.name,
            stackStartFn: fn
        });
    }
}
function expectedException(actual, expected, msg, fn) {
    if (typeof expected !== "function") {
        if (isRegExp(expected)) return RegExpPrototypeTest(expected, actual);
        // assert.doesNotThrow does not accept objects.
        if (arguments.length === 2) throw new ERR_INVALID_ARG_TYPE("expected", [
            "Function",
            "RegExp"
        ], expected);
        // Handle primitives properly.
        if (_typeof(actual) !== "object" || actual === null) {
            var err = new AssertionError({
                actual: actual,
                expected: expected,
                message: msg,
                operator: "deepStrictEqual",
                stackStartFn: fn
            });
            err.operator = fn.name;
            throw err;
        }
        var keys = Object.keys(expected);
        // Special handle errors to make sure the name and the message are compared
        // as well.
        if (expected instanceof Error) keys.push("name", "message");
        else if (keys.length === 0) throw new ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
        if (isDeepEqual === undefined) lazyLoadComparison();
        keys.forEach(function(key) {
            if (typeof actual[key] === "string" && isRegExp(expected[key]) && RegExpPrototypeTest(expected[key], actual[key])) return;
            compareExceptionKey(actual, expected, key, msg, keys, fn);
        });
        return true;
    }
    // Guard instanceof against arrow functions as they don't have a prototype.
    if (expected.prototype !== undefined && actual instanceof expected) return true;
    if (Error.isPrototypeOf(expected)) return false;
    return expected.call({}, actual) === true;
}
function getActual(fn) {
    if (typeof fn !== "function") throw new ERR_INVALID_ARG_TYPE("fn", "Function", fn);
    try {
        fn();
    } catch (e) {
        return e;
    }
    return NO_EXCEPTION_SENTINEL;
}
function checkIsPromise(obj) {
    // Accept native ES6 promises and promises that are implemented in a similar
    // way. Do not accept thenables that use a function as `obj` and that have no
    // `catch` handler.
    // TODO: thenables are checked up until they have the correct methods,
    // but according to documentation, the `then` method should receive
    // the `fulfill` and `reject` arguments as well or it may be never resolved.
    return isPromise(obj) || obj !== null && _typeof(obj) === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
}
function waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
        var resultPromise;
        if (typeof promiseFn === "function") {
            // Return a rejected promise if `promiseFn` throws synchronously.
            resultPromise = promiseFn();
            // Fail in case no promise is returned.
            if (!checkIsPromise(resultPromise)) throw new ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
        } else if (checkIsPromise(promiseFn)) resultPromise = promiseFn;
        else throw new ERR_INVALID_ARG_TYPE("promiseFn", [
            "Function",
            "Promise"
        ], promiseFn);
        return Promise.resolve().then(function() {
            return resultPromise;
        }).then(function() {
            return NO_EXCEPTION_SENTINEL;
        }).catch(function(e) {
            return e;
        });
    });
}
function expectsError(stackStartFn, actual, error, message) {
    if (typeof error === "string") {
        if (arguments.length === 4) throw new ERR_INVALID_ARG_TYPE("error", [
            "Object",
            "Error",
            "Function",
            "RegExp"
        ], error);
        if (_typeof(actual) === "object" && actual !== null) {
            if (actual.message === error) throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error message "'.concat(actual.message, '" is identical to the message.'));
        } else if (actual === error) throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error "'.concat(actual, '" is identical to the message.'));
        message = error;
        error = undefined;
    } else if (error != null && _typeof(error) !== "object" && typeof error !== "function") throw new ERR_INVALID_ARG_TYPE("error", [
        "Object",
        "Error",
        "Function",
        "RegExp"
    ], error);
    if (actual === NO_EXCEPTION_SENTINEL) {
        var details = "";
        if (error && error.name) details += " (".concat(error.name, ")");
        details += message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
        innerFail({
            actual: undefined,
            expected: error,
            operator: stackStartFn.name,
            message: "Missing expected ".concat(fnType).concat(details),
            stackStartFn: stackStartFn
        });
    }
    if (error && !expectedException(actual, error, message, stackStartFn)) throw actual;
}
function expectsNoError(stackStartFn, actual, error, message) {
    if (actual === NO_EXCEPTION_SENTINEL) return;
    if (typeof error === "string") {
        message = error;
        error = undefined;
    }
    if (!error || expectedException(actual, error)) {
        var details = message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
        innerFail({
            actual: actual,
            expected: error,
            operator: stackStartFn.name,
            message: "Got unwanted ".concat(fnType).concat(details, "\n") + 'Actual message: "'.concat(actual && actual.message, '"'),
            stackStartFn: stackStartFn
        });
    }
    throw actual;
}
assert.throws = function throws(promiseFn) {
    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
    expectsError.apply(void 0, [
        throws,
        getActual(promiseFn)
    ].concat(args));
};
assert.rejects = function rejects(promiseFn) {
    for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
    return waitForActual(promiseFn).then(function(result) {
        return expectsError.apply(void 0, [
            rejects,
            result
        ].concat(args));
    });
};
assert.doesNotThrow = function doesNotThrow(fn) {
    for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
    expectsNoError.apply(void 0, [
        doesNotThrow,
        getActual(fn)
    ].concat(args));
};
assert.doesNotReject = function doesNotReject(fn) {
    for(var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++)args[_key5 - 1] = arguments[_key5];
    return waitForActual(fn).then(function(result) {
        return expectsNoError.apply(void 0, [
            doesNotReject,
            result
        ].concat(args));
    });
};
assert.ifError = function ifError(err) {
    if (err !== null && err !== undefined) {
        var message = "ifError got unwanted exception: ";
        if (_typeof(err) === "object" && typeof err.message === "string") {
            if (err.message.length === 0 && err.constructor) message += err.constructor.name;
            else message += err.message;
        } else message += inspect(err);
        var newErr = new AssertionError({
            actual: err,
            expected: null,
            operator: "ifError",
            message: message,
            stackStartFn: ifError
        });
        // Make sure we actually have a stack trace!
        var origStack = err.stack;
        if (typeof origStack === "string") {
            // This will remove any duplicated frames from the error frames taken
            // from within `ifError` and add the original error frames to the newly
            // created ones.
            var tmp2 = origStack.split("\n");
            tmp2.shift();
            // Filter all frames existing in err.stack.
            var tmp1 = newErr.stack.split("\n");
            for(var i = 0; i < tmp2.length; i++){
                // Find the first occurrence of the frame.
                var pos = tmp1.indexOf(tmp2[i]);
                if (pos !== -1) {
                    // Only keep new frames.
                    tmp1 = tmp1.slice(0, pos);
                    break;
                }
            }
            newErr.stack = "".concat(tmp1.join("\n"), "\n").concat(tmp2.join("\n"));
        }
        throw newErr;
    }
};
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a871df3dfb8ea663ef5e1f8f62701ec51384ecb
function internalMatch(string, regexp, message, fn, fnName) {
    if (!isRegExp(regexp)) throw new ERR_INVALID_ARG_TYPE("regexp", "RegExp", regexp);
    var match = fnName === "match";
    if (typeof string !== "string" || RegExpPrototypeTest(regexp, string) !== match) {
        if (message instanceof Error) throw message;
        var generatedMessage = !message;
        // 'The input was expected to not match the regular expression ' +
        message = message || (typeof string !== "string" ? 'The "string" argument must be of type string. Received type ' + "".concat(_typeof(string), " (").concat(inspect(string), ")") : (match ? "The input did not match the regular expression " : "The input was expected to not match the regular expression ") + "".concat(inspect(regexp), ". Input:\n\n").concat(inspect(string), "\n"));
        var err = new AssertionError({
            actual: string,
            expected: regexp,
            message: message,
            operator: fnName,
            stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
    }
}
assert.match = function match(string, regexp, message) {
    internalMatch(string, regexp, message, match, "match");
};
assert.doesNotMatch = function doesNotMatch(string, regexp, message) {
    internalMatch(string, regexp, message, doesNotMatch, "doesNotMatch");
};
// Expose a strict only variant of assert
function strict() {
    for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
    innerOk.apply(void 0, [
        strict,
        args.length
    ].concat(args));
}
assert.strict = objectAssign(strict, assert, {
    equal: assert.strictEqual,
    deepEqual: assert.deepStrictEqual,
    notEqual: assert.notStrictEqual,
    notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

},{"17530e9a8e9dd8de":"d5jf4","67930e3bebc18ea9":"cwQVR","11bdd262fb706a54":"lQlQt","d61a3396666721b6":"cxohQ","fe81af847d362e93":"ajEZo","4ad4507c8e372c71":"ezjA5","11f208d8f2e10b17":"5yYiF","131e25d2408617a4":"d5TM9"}],"cwQVR":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/errors.js
// https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f
/* eslint node-core/documented-errors: "error" */ /* eslint node-core/alphabetize-errors: "error" */ /* eslint node-core/prefer-util-format-errors: "error" */ "use strict";
// The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
var codes = {};
// Lazy loaded
var assert;
var util;
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError = /*#__PURE__*/ function(_Base) {
        _inherits(NodeError, _Base);
        var _super = _createSuper(NodeError);
        function NodeError(arg1, arg2, arg3) {
            var _this;
            _classCallCheck(this, NodeError);
            _this = _super.call(this, getMessage(arg1, arg2, arg3));
            _this.code = code;
            return _this;
        }
        return _createClass(NodeError);
    }(Base);
    codes[code] = NodeError;
}
// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== "number") start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    if (assert === undefined) assert = require("f73a3052b95b9ed");
    assert(typeof name === "string", "'name' must be a string");
    // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
    } else determiner = "must be";
    var msg;
    if (endsWith(name, " argument")) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    else {
        var type = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    }
    // TODO(BridgeAR): Improve the output by showing `null` and similar.
    msg += ". Received type ".concat(_typeof(actual));
    return msg;
}, TypeError);
createErrorType("ERR_INVALID_ARG_VALUE", function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "is invalid";
    if (util === undefined) util = require("1fd472100fa8826f");
    var inspected = util.inspect(value);
    if (inspected.length > 128) inspected = "".concat(inspected.slice(0, 128), "...");
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
}, TypeError, RangeError);
createErrorType("ERR_INVALID_RETURN_VALUE", function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) type = "instance of ".concat(value.constructor.name);
    else type = "type ".concat(_typeof(value));
    return "Expected ".concat(input, ' to be returned from the "').concat(name, '"') + " function but got ".concat(type, ".");
}, TypeError);
createErrorType("ERR_MISSING_ARGS", function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    if (assert === undefined) assert = require("f73a3052b95b9ed");
    assert(args.length > 0, "At least one arg needs to be specified");
    var msg = "The ";
    var len = args.length;
    args = args.map(function(a) {
        return '"'.concat(a, '"');
    });
    switch(len){
        case 1:
            msg += "".concat(args[0], " argument");
            break;
        case 2:
            msg += "".concat(args[0], " and ").concat(args[1], " arguments");
            break;
        default:
            msg += args.slice(0, len - 1).join(", ");
            msg += ", and ".concat(args[len - 1], " arguments");
            break;
    }
    return "".concat(msg, " must be specified");
}, TypeError);
module.exports.codes = codes;

},{"f73a3052b95b9ed":"f3tT4","1fd472100fa8826f":"cxohQ"}],"lQlQt":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c
var process = require("228da2c254a5e871");
"use strict";
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct.bind();
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
var _require = require("9984e91d63ed614c"), inspect = _require.inspect;
var _require2 = require("1670766d7c5cef96"), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0) return "";
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while(count){
        str += str;
        count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
}
var blue = "";
var green = "";
var red = "";
var white = "";
var kReadableOperator = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
};
// Comparing short primitives should just show === / !== instead of using the
// diff.
var kMaxShortLength = 10;
function copyError(source) {
    var keys = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys.forEach(function(key) {
        target[key] = source[key];
    });
    Object.defineProperty(target, "message", {
        value: source.message
    });
    return target;
}
function inspectValue(val) {
    // The util.inspect default values could be changed. This makes sure the
    // error messages contain the necessary information nevertheless.
    return inspect(val, {
        compact: false,
        customInspect: false,
        depth: 1000,
        maxArrayLength: Infinity,
        // Assert compares only enumerable properties (with a few exceptions).
        showHidden: false,
        // Having a long line as error is better than wrapping the line for
        // comparison for now.
        // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
        // have meta information about the inspected properties (i.e., know where
        // in what line the property starts and ends).
        breakLength: Infinity,
        // Assert does not detect proxies currently.
        showProxy: false,
        sorted: true,
        // Inspect getters as we also check them when comparing entries.
        getters: true
    });
}
function createErrDiff(actual, expected, operator) {
    var other = "";
    var res = "";
    var lastPos = 0;
    var end = "";
    var skipped = false;
    var actualInspected = inspectValue(actual);
    var actualLines = actualInspected.split("\n");
    var expectedLines = inspectValue(expected).split("\n");
    var i = 0;
    var indicator = "";
    // In case both values are objects explicitly mark them as not reference equal
    // for the `strictEqual` operator.
    if (operator === "strictEqual" && _typeof(actual) === "object" && _typeof(expected) === "object" && actual !== null && expected !== null) operator = "strictEqualObject";
    // If "actual" and "expected" fit on a single line and they are not strictly
    // equal, check further special handling.
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
        var inputLength = actualLines[0].length + expectedLines[0].length;
        // If the character length of "actual" and "expected" together is less than
        // kMaxShortLength and if neither is an object and at least one of them is
        // not `zero`, use the strict equal comparison to visualize the output.
        if (inputLength <= kMaxShortLength) {
            if ((_typeof(actual) !== "object" || actual === null) && (_typeof(expected) !== "object" || expected === null) && (actual !== 0 || expected !== 0)) // -0 === +0
            return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        } else if (operator !== "strictEqualObject") {
            // If the stderr is a tty and the input length is lower than the current
            // columns per line, add a mismatch indicator below the output. If it is
            // not a tty, use a default value of 80 characters.
            var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
            if (inputLength < maxLength) {
                while(actualLines[0][i] === expectedLines[0][i])i++;
                // Ignore the first characters.
                if (i > 2) {
                    // Add position indicator for the first mismatch in case it is a
                    // single line and the input length is less than the column length.
                    indicator = "\n  ".concat(repeat(" ", i), "^");
                    i = 0;
                }
            }
        }
    }
    // Remove all ending lines that match (this optimizes the output for
    // readability by reducing the number of total changed lines).
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while(a === b){
        if (i++ < 2) end = "\n  ".concat(a).concat(end);
        else other = a;
        actualLines.pop();
        expectedLines.pop();
        if (actualLines.length === 0 || expectedLines.length === 0) break;
        a = actualLines[actualLines.length - 1];
        b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length);
    // Strict equal with identical objects that are not identical by reference.
    // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
    if (maxLines === 0) {
        // We have to get the result again. The lines were all removed before.
        var _actualLines = actualInspected.split("\n");
        // Only remove lines in case it makes sense to collapse those.
        // TODO: Accept env to always show the full error.
        if (_actualLines.length > 30) {
            _actualLines[26] = "".concat(blue, "...").concat(white);
            while(_actualLines.length > 27)_actualLines.pop();
        }
        return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
    }
    if (i > 3) {
        end = "\n".concat(blue, "...").concat(white).concat(end);
        skipped = true;
    }
    if (other !== "") {
        end = "\n  ".concat(other).concat(end);
        other = "";
    }
    var printedLines = 0;
    var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
    var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
    for(i = 0; i < maxLines; i++){
        // Only extra expected lines exist
        var cur = i - lastPos;
        if (actualLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(expectedLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(expectedLines[i - 1]);
                printedLines++;
            }
            // Mark the current line as the last diverging one.
            lastPos = i;
            // Add the expected line to the cache.
            other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
            printedLines++;
        // Only extra actual lines exist
        } else if (expectedLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(actualLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(actualLines[i - 1]);
                printedLines++;
            }
            // Mark the current line as the last diverging one.
            lastPos = i;
            // Add the actual line to the result.
            res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
            printedLines++;
        // Lines diverge
        } else {
            var expectedLine = expectedLines[i];
            var actualLine = actualLines[i];
            // If the lines diverge, specifically check for lines that only diverge by
            // a trailing comma. In that case it is actually identical and we should
            // mark it as such.
            var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine);
            // If the expected line has a trailing comma but is otherwise identical,
            // add a comma at the end of the actual line. Otherwise the output could
            // look weird as in:
            //
            //   [
            //     1         // No comma at the end!
            // +   2
            //   ]
            //
            if (divergingLines && endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
                divergingLines = false;
                actualLine += ",";
            }
            if (divergingLines) {
                // If the last diverging line is more than one line above and the
                // current line is at least line three, add some of the former lines and
                // also add dots to indicate skipped entries.
                if (cur > 1 && i > 2) {
                    if (cur > 4) {
                        res += "\n".concat(blue, "...").concat(white);
                        skipped = true;
                    } else if (cur > 3) {
                        res += "\n  ".concat(actualLines[i - 2]);
                        printedLines++;
                    }
                    res += "\n  ".concat(actualLines[i - 1]);
                    printedLines++;
                }
                // Mark the current line as the last diverging one.
                lastPos = i;
                // Add the actual line to the result and cache the expected diverging
                // line so consecutive diverging lines show up as +++--- and not +-+-+-.
                res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
                other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
                printedLines += 2;
            // Lines are identical
            } else {
                // Add all cached information to the result before adding other things
                // and reset the cache.
                res += other;
                other = "";
                // If the last diverging line is exactly one line above or if it is the
                // very first line, add the line to the result.
                if (cur === 1 || i === 0) {
                    res += "\n  ".concat(actualLine);
                    printedLines++;
                }
            }
        }
        // Inspected object to big (Show ~20 rows max)
        if (printedLines > 20 && i < maxLines - 2) return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
    }
    return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
}
var AssertionError = /*#__PURE__*/ function(_Error, _inspect$custom) {
    _inherits(AssertionError, _Error);
    var _super = _createSuper(AssertionError);
    function AssertionError(options) {
        var _this;
        _classCallCheck(this, AssertionError);
        if (_typeof(options) !== "object" || options === null) throw new ERR_INVALID_ARG_TYPE("options", "Object", options);
        var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
        var actual = options.actual, expected = options.expected;
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        if (message != null) _this = _super.call(this, String(message));
        else {
            if (process.stderr && process.stderr.isTTY) {
                // Reset on each call to make sure we handle dynamically set environment
                // variables correct.
                if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
                    blue = "\x1b[34m";
                    green = "\x1b[32m";
                    white = "\x1b[39m";
                    red = "\x1b[31m";
                } else {
                    blue = "";
                    green = "";
                    white = "";
                    red = "";
                }
            }
            // Prevent the error stack from being visible by duplicating the error
            // in a very close way to the original in case both sides are actually
            // instances of Error.
            if (_typeof(actual) === "object" && actual !== null && _typeof(expected) === "object" && expected !== null && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
                actual = copyError(actual);
                expected = copyError(expected);
            }
            if (operator === "deepStrictEqual" || operator === "strictEqual") _this = _super.call(this, createErrDiff(actual, expected, operator));
            else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
                // In case the objects are equal but the operator requires unequal, show
                // the first object and say A equals B
                var base = kReadableOperator[operator];
                var res = inspectValue(actual).split("\n");
                // In case "actual" is an object, it should not be reference equal.
                if (operator === "notStrictEqual" && _typeof(actual) === "object" && actual !== null) base = kReadableOperator.notStrictEqualObject;
                // Only remove lines in case it makes sense to collapse those.
                // TODO: Accept env to always show the full error.
                if (res.length > 30) {
                    res[26] = "".concat(blue, "...").concat(white);
                    while(res.length > 27)res.pop();
                }
                // Only print a single input.
                if (res.length === 1) _this = _super.call(this, "".concat(base, " ").concat(res[0]));
                else _this = _super.call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n"));
            } else {
                var _res = inspectValue(actual);
                var other = "";
                var knownOperators = kReadableOperator[operator];
                if (operator === "notDeepEqual" || operator === "notEqual") {
                    _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
                    if (_res.length > 1024) _res = "".concat(_res.slice(0, 1021), "...");
                } else {
                    other = "".concat(inspectValue(expected));
                    if (_res.length > 512) _res = "".concat(_res.slice(0, 509), "...");
                    if (other.length > 512) other = "".concat(other.slice(0, 509), "...");
                    if (operator === "deepEqual" || operator === "equal") _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
                    else other = " ".concat(operator, " ").concat(other);
                }
                _this = _super.call(this, "".concat(_res).concat(other));
            }
        }
        Error.stackTraceLimit = limit;
        _this.generatedMessage = !message;
        Object.defineProperty(_assertThisInitialized(_this), "name", {
            value: "AssertionError [ERR_ASSERTION]",
            enumerable: false,
            writable: true,
            configurable: true
        });
        _this.code = "ERR_ASSERTION";
        _this.actual = actual;
        _this.expected = expected;
        _this.operator = operator;
        if (Error.captureStackTrace) // eslint-disable-next-line no-restricted-syntax
        Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
        // Create error message including the error code in the name.
        _this.stack;
        // Reset the name.
        _this.name = "AssertionError";
        return _possibleConstructorReturn(_this);
    }
    _createClass(AssertionError, [
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
            }
        },
        {
            key: _inspect$custom,
            value: function value(recurseTimes, ctx) {
                // This limits the `actual` and `expected` property default inspection to
                // the minimum depth. Otherwise those values would be too verbose compared
                // to the actual error message which contains a combined view of these two
                // input values.
                return inspect(this, _objectSpread(_objectSpread({}, ctx), {}, {
                    customInspect: false,
                    depth: 0
                }));
            }
        }
    ]);
    return AssertionError;
}(/*#__PURE__*/ _wrapNativeSuper(Error), inspect.custom);
module.exports = AssertionError;

},{"228da2c254a5e871":"d5jf4","9984e91d63ed614c":"cxohQ","1670766d7c5cef96":"cwQVR"}],"ajEZo":[function(require,module,exports) {
"use strict";
var implementation = require("b7e83063a8ec29e5");
var lacksProperEnumerationOrder = function() {
    if (!Object.assign) return false;
    /*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */ var str = "abcdefghijklmnopqrst";
    var letters = str.split("");
    var map = {};
    for(var i = 0; i < letters.length; ++i)map[letters[i]] = letters[i];
    var obj = Object.assign({}, map);
    var actual = "";
    for(var k in obj)actual += k;
    return str !== actual;
};
var assignHasPendingExceptions = function() {
    if (!Object.assign || !Object.preventExtensions) return false;
    /*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */ var thrower = Object.preventExtensions({
        1: 2
    });
    try {
        Object.assign(thrower, "xy");
    } catch (e) {
        return thrower[1] === "y";
    }
    return false;
};
module.exports = function getPolyfill() {
    if (!Object.assign) return implementation;
    if (lacksProperEnumerationOrder()) return implementation;
    if (assignHasPendingExceptions()) return implementation;
    return Object.assign;
};

},{"b7e83063a8ec29e5":"jttW1"}],"jttW1":[function(require,module,exports) {
"use strict";
// modified from https://github.com/es-shims/es6-shim
var objectKeys = require("334c0bea01e613e6");
var hasSymbols = require("1964e25feb5e87a1")();
var callBound = require("6fb85b5b56dcab21");
var toObject = Object;
var $push = callBound("Array.prototype.push");
var $propIsEnumerable = callBound("Object.prototype.propertyIsEnumerable");
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;
// eslint-disable-next-line no-unused-vars
module.exports = function assign(target, source1) {
    if (target == null) throw new TypeError("target must be an object");
    var to = toObject(target); // step 1
    if (arguments.length === 1) return to; // step 2
    for(var s = 1; s < arguments.length; ++s){
        var from = toObject(arguments[s]); // step 3.a.i
        // step 3.a.ii:
        var keys = objectKeys(from);
        var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
        if (getSymbols) {
            var syms = getSymbols(from);
            for(var j = 0; j < syms.length; ++j){
                var key = syms[j];
                if ($propIsEnumerable(from, key)) $push(keys, key);
            }
        }
        // step 3.a.iii:
        for(var i = 0; i < keys.length; ++i){
            var nextKey = keys[i];
            if ($propIsEnumerable(from, nextKey)) {
                var propValue = from[nextKey]; // step 3.a.iii.2.a
                to[nextKey] = propValue; // step 3.a.iii.2.b
            }
        }
    }
    return to; // step 4
};

},{"334c0bea01e613e6":"eNyf4","1964e25feb5e87a1":"euYk7","6fb85b5b56dcab21":"5yYiF"}],"eNyf4":[function(require,module,exports) {
"use strict";
var slice = Array.prototype.slice;
var isArgs = require("93e8460f624c96f4");
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : require("344bb0d7b2568e03");
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if (isArgs(object)) return originalKeys(slice.call(object));
            return originalKeys(object);
        };
    } else Object.keys = keysShim;
    return Object.keys || keysShim;
};
module.exports = keysShim;

},{"93e8460f624c96f4":"1HhOq","344bb0d7b2568e03":"aV01q"}],"1HhOq":[function(require,module,exports) {
"use strict";
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
    return isArgs;
};

},{}],"aV01q":[function(require,module,exports) {
"use strict";
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = require("b0d8c8b84be91ffd"); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, "toString");
    var hasProtoEnumBug = isEnumerable.call(function() {}, "prototype");
    var dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === "undefined") return false;
        for(var k in window)try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === "undefined" || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError("Object.keys called on a non-object");
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === "prototype") && has.call(object, name)) theKeys.push(String(name));
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = keysShim;

},{"b0d8c8b84be91ffd":"1HhOq"}],"ezjA5":[function(require,module,exports) {
"use strict";
var implementation = require("ff80ab827617d6fd");
module.exports = function getPolyfill() {
    return typeof Object.is === "function" ? Object.is : implementation;
};

},{"ff80ab827617d6fd":"WLxcH"}],"WLxcH":[function(require,module,exports) {
"use strict";
var numberIsNaN = function(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) return 1 / a === 1 / b;
    if (a === b) return true;
    if (numberIsNaN(a) && numberIsNaN(b)) return true;
    return false;
};

},{}],"d5TM9":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/comparisons.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
"use strict";
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
var regexFlagsSupported = /a/g.flags !== undefined;
var arrayFromSet = function arrayFromSet(set) {
    var array = [];
    set.forEach(function(value) {
        return array.push(value);
    });
    return array;
};
var arrayFromMap = function arrayFromMap(map) {
    var array = [];
    map.forEach(function(value, key) {
        return array.push([
            key,
            value
        ]);
    });
    return array;
};
var objectIs = Object.is ? Object.is : require("3addb16fbdd05c1c");
var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
};
var numberIsNaN = Number.isNaN ? Number.isNaN : require("a27e57a3fd2e2e23");
function uncurryThis(f) {
    return f.call.bind(f);
}
var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
var objectToString = uncurryThis(Object.prototype.toString);
var _require$types = require("4940125679601087").types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
function isNonIndex(key) {
    if (key.length === 0 || key.length > 10) return true;
    for(var i = 0; i < key.length; i++){
        var code = key.charCodeAt(i);
        if (code < 48 || code > 57) return true;
    }
    // The maximum size for an array is 2 ** 32 -1.
    return key.length === 10 && key >= Math.pow(2, 32);
}
function getOwnNonIndexProperties(value) {
    return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
}
// Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function compare(a, b) {
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
}
var ONLY_ENUMERABLE = undefined;
var kStrict = true;
var kLoose = false;
var kNoIterator = 0;
var kIsArray = 1;
var kIsSet = 2;
var kIsMap = 3;
// Check if they have the same source and flags
function areSimilarRegExps(a, b) {
    return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
}
function areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    for(var offset = 0; offset < a.byteLength; offset++){
        if (a[offset] !== b[offset]) return false;
    }
    return true;
}
function areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
}
function areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}
function isEqualBoxedPrimitive(val1, val2) {
    if (isNumberObject(val1)) return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    if (isStringObject(val1)) return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    if (isBooleanObject(val1)) return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    if (isBigIntObject(val1)) return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
}
// Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.
function innerDeepEqual(val1, val2, strict, memos) {
    // All identical values are equivalent, as determined by ===.
    if (val1 === val2) {
        if (val1 !== 0) return true;
        return strict ? objectIs(val1, val2) : true;
    }
    // Check more closely if val1 and val2 are equal.
    if (strict) {
        if (_typeof(val1) !== "object") return typeof val1 === "number" && numberIsNaN(val1) && numberIsNaN(val2);
        if (_typeof(val2) !== "object" || val1 === null || val2 === null) return false;
        if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) return false;
    } else {
        if (val1 === null || _typeof(val1) !== "object") {
            if (val2 === null || _typeof(val2) !== "object") // eslint-disable-next-line eqeqeq
            return val1 == val2;
            return false;
        }
        if (val2 === null || _typeof(val2) !== "object") return false;
    }
    var val1Tag = objectToString(val1);
    var val2Tag = objectToString(val2);
    if (val1Tag !== val2Tag) return false;
    if (Array.isArray(val1)) {
        // Check for sparse arrays and general fast path
        if (val1.length !== val2.length) return false;
        var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (keys1.length !== keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
    }
    // [browserify] This triggers on certain types in IE (Map/Set) so we don't
    // wan't to early return out of the rest of the checks. However we can check
    // if the second value is one of these values and the first isn't.
    if (val1Tag === "[object Object]") {
        // return keyCheck(val1, val2, strict, memos, kNoIterator);
        if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) return false;
    }
    if (isDate(val1)) {
        if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) return false;
    } else if (isRegExp(val1)) {
        if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) return false;
    } else if (isNativeError(val1) || val1 instanceof Error) {
        // Do not compare the stack as it might differ even though the error itself
        // is otherwise identical.
        if (val1.message !== val2.message || val1.name !== val2.name) return false;
    } else if (isArrayBufferView(val1)) {
        if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
            if (!areSimilarFloatArrays(val1, val2)) return false;
        } else if (!areSimilarTypedArrays(val1, val2)) return false;
        // Buffer.compare returns true, so val1.length === val2.length. If they both
        // only contain numeric keys, we don't need to exam further than checking
        // the symbols.
        var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (_keys.length !== _keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
    } else if (isSet(val1)) {
        if (!isSet(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsSet);
    } else if (isMap(val1)) {
        if (!isMap(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsMap);
    } else if (isAnyArrayBuffer(val1)) {
        if (!areEqualArrayBuffers(val1, val2)) return false;
    } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) return false;
    return keyCheck(val1, val2, strict, memos, kNoIterator);
}
function getEnumerables(val, keys) {
    return keys.filter(function(k) {
        return propertyIsEnumerable(val, k);
    });
}
function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    // For all remaining Object pairs, including Array, objects and Maps,
    // equivalence is determined by having:
    // a) The same number of owned enumerable properties
    // b) The same set of keys/indexes (although not necessarily the same order)
    // c) Equivalent values for every corresponding key/index
    // d) For Sets and Maps, equal contents
    // Note: this accounts for both named and indexed properties on Arrays.
    if (arguments.length === 5) {
        aKeys = Object.keys(val1);
        var bKeys = Object.keys(val2);
        // The pair must have the same number of owned properties.
        if (aKeys.length !== bKeys.length) return false;
    }
    // Cheap key test
    var i = 0;
    for(; i < aKeys.length; i++){
        if (!hasOwnProperty(val2, aKeys[i])) return false;
    }
    if (strict && arguments.length === 5) {
        var symbolKeysA = objectGetOwnPropertySymbols(val1);
        if (symbolKeysA.length !== 0) {
            var count = 0;
            for(i = 0; i < symbolKeysA.length; i++){
                var key = symbolKeysA[i];
                if (propertyIsEnumerable(val1, key)) {
                    if (!propertyIsEnumerable(val2, key)) return false;
                    aKeys.push(key);
                    count++;
                } else if (propertyIsEnumerable(val2, key)) return false;
            }
            var symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) return false;
        } else {
            var _symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) return false;
        }
    }
    if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) return true;
    // Use memos to handle cycles.
    if (memos === undefined) memos = {
        val1: new Map(),
        val2: new Map(),
        position: 0
    };
    else {
        // We prevent up to two map.has(x) calls by directly retrieving the value
        // and checking for undefined. The map can only contain numbers, so it is
        // safe to check for undefined only.
        var val2MemoA = memos.val1.get(val1);
        if (val2MemoA !== undefined) {
            var val2MemoB = memos.val2.get(val2);
            if (val2MemoB !== undefined) return val2MemoA === val2MemoB;
        }
        memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
}
function setHasEqualElement(set, val1, strict, memo) {
    // Go looking.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var val2 = setValues[i];
        if (innerDeepEqual(val1, val2, strict, memo)) {
            // Remove the matching element to make sure we do not check that again.
            set.delete(val2);
            return true;
        }
    }
    return false;
}
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function findLooseMatchingPrimitives(prim) {
    switch(_typeof(prim)){
        case "undefined":
            return null;
        case "object":
            // Only pass in null as object!
            return undefined;
        case "symbol":
            return false;
        case "string":
            prim = +prim;
        // Loose equal entries exist only if the string is possible to convert to
        // a regular number and not NaN.
        // Fall through
        case "number":
            if (numberIsNaN(prim)) return false;
    }
    return true;
}
function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    return b.has(altValue) && !a.has(altValue);
}
function mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    var curB = b.get(altValue);
    if (curB === undefined && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) return false;
    return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
}
function setEquiv(a, b, strict, memo) {
    // This is a lazily initiated Set of entries which have to be compared
    // pairwise.
    var set = null;
    var aValues = arrayFromSet(a);
    for(var i = 0; i < aValues.length; i++){
        var val = aValues[i];
        // Note: Checking for the objects first improves the performance for object
        // heavy sets but it is a minor slow down for primitives. As they are fast
        // to check this improves the worst case scenario instead.
        if (_typeof(val) === "object" && val !== null) {
            if (set === null) set = new Set();
            // If the specified value doesn't exist in the second set its an not null
            // object (or non strict only: a not matching primitive) we'll need to go
            // hunting for something thats deep-(strict-)equal to it. To make this
            // O(n log n) complexity we have to copy these values in a new set first.
            set.add(val);
        } else if (!b.has(val)) {
            if (strict) return false;
            // Fast path to detect missing string, symbol, undefined and null values.
            if (!setMightHaveLoosePrim(a, b, val)) return false;
            if (set === null) set = new Set();
            set.add(val);
        }
    }
    if (set !== null) {
        var bValues = arrayFromSet(b);
        for(var _i = 0; _i < bValues.length; _i++){
            var _val = bValues[_i];
            // We have to check if a primitive value is already
            // matching and only if it's not, go hunting for it.
            if (_typeof(_val) === "object" && _val !== null) {
                if (!setHasEqualElement(set, _val, strict, memo)) return false;
            } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    // To be able to handle cases like:
    //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
    // ... we need to consider *all* matching keys, not just the first we find.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var key2 = setValues[i];
        if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
            set.delete(key2);
            return true;
        }
    }
    return false;
}
function mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = arrayFromMap(a);
    for(var i = 0; i < aEntries.length; i++){
        var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
        if (_typeof(key) === "object" && key !== null) {
            if (set === null) set = new Set();
            set.add(key);
        } else {
            // By directly retrieving the value we prevent another b.has(key) check in
            // almost all possible cases.
            var item2 = b.get(key);
            if (item2 === undefined && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
                if (strict) return false;
                // Fast path to detect missing string, symbol, undefined and null
                // keys.
                if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
                if (set === null) set = new Set();
                set.add(key);
            }
        }
    }
    if (set !== null) {
        var bEntries = arrayFromMap(b);
        for(var _i2 = 0; _i2 < bEntries.length; _i2++){
            var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), _key = _bEntries$_i[0], item = _bEntries$_i[1];
            if (_typeof(_key) === "object" && _key !== null) {
                if (!mapHasEqualEntry(set, a, _key, item, strict, memo)) return false;
            } else if (!strict && (!a.has(_key) || !innerDeepEqual(a.get(_key), item, false, memo)) && !mapHasEqualEntry(set, a, _key, item, false, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function objEquiv(a, b, strict, keys, memos, iterationType) {
    // Sets and maps don't have their entries accessible via normal object
    // properties.
    var i = 0;
    if (iterationType === kIsSet) {
        if (!setEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsMap) {
        if (!mapEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsArray) for(; i < a.length; i++){
        if (hasOwnProperty(a, i)) {
            if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) return false;
        } else if (hasOwnProperty(b, i)) return false;
        else {
            // Array is sparse.
            var keysA = Object.keys(a);
            for(; i < keysA.length; i++){
                var key = keysA[i];
                if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) return false;
            }
            if (keysA.length !== Object.keys(b).length) return false;
            return true;
        }
    }
    // The pair must have equivalent values for every corresponding key.
    // Possibly expensive deep test:
    for(i = 0; i < keys.length; i++){
        var _key2 = keys[i];
        if (!innerDeepEqual(a[_key2], b[_key2], strict, memos)) return false;
    }
    return true;
}
function isDeepEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kLoose);
}
function isDeepStrictEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kStrict);
}
module.exports = {
    isDeepEqual: isDeepEqual,
    isDeepStrictEqual: isDeepStrictEqual
};

},{"3addb16fbdd05c1c":"k2tpA","a27e57a3fd2e2e23":"hY4fH","4940125679601087":"cxohQ"}],"k2tpA":[function(require,module,exports) {
"use strict";
var define = require("7a0bb7df335a6af");
var callBind = require("794ce1103c4a65ba");
var implementation = require("f52a71fcf365d3bd");
var getPolyfill = require("59addbaef079e040");
var shim = require("c0e8b0f7342ba484");
var polyfill = callBind(getPolyfill(), Object);
define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"7a0bb7df335a6af":"6eq5U","794ce1103c4a65ba":"bfo8D","f52a71fcf365d3bd":"WLxcH","59addbaef079e040":"ezjA5","c0e8b0f7342ba484":"9p2yJ"}],"6eq5U":[function(require,module,exports) {
"use strict";
var keys = require("7ff177585d1618f0");
var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var defineDataProperty = require("84ca194f5a28ce70");
var isFunction = function(fn) {
    return typeof fn === "function" && toStr.call(fn) === "[object Function]";
};
var supportsDescriptors = require("c52d62086511583f")();
var defineProperty = function(object, name, value, predicate) {
    if (name in object) {
        if (predicate === true) {
            if (object[name] === value) return;
        } else if (!isFunction(predicate) || !predicate()) return;
    }
    if (supportsDescriptors) defineDataProperty(object, name, value, true);
    else defineDataProperty(object, name, value);
};
var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
    for(var i = 0; i < props.length; i += 1)defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;

},{"7ff177585d1618f0":"eNyf4","84ca194f5a28ce70":"6cEff","c52d62086511583f":"esBLZ"}],"9p2yJ":[function(require,module,exports) {
"use strict";
var getPolyfill = require("f188d636391a5061");
var define = require("155865cffc557cd");
module.exports = function shimObjectIs() {
    var polyfill = getPolyfill();
    define(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};

},{"f188d636391a5061":"ezjA5","155865cffc557cd":"6eq5U"}],"hY4fH":[function(require,module,exports) {
"use strict";
var callBind = require("8bc778ead6edc2b");
var define = require("1e9a111647ec40d6");
var implementation = require("db9e8266e38a0a1c");
var getPolyfill = require("37ae20d268339d21");
var shim = require("9fe13ad91d3d9c68");
var polyfill = callBind(getPolyfill(), Number);
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"8bc778ead6edc2b":"bfo8D","1e9a111647ec40d6":"6eq5U","db9e8266e38a0a1c":"lxsrq","37ae20d268339d21":"h00Nr","9fe13ad91d3d9c68":"cr2es"}],"lxsrq":[function(require,module,exports) {
"use strict";
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function isNaN(value) {
    return value !== value;
};

},{}],"h00Nr":[function(require,module,exports) {
"use strict";
var implementation = require("e25466f067cfd8fc");
module.exports = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) return Number.isNaN;
    return implementation;
};

},{"e25466f067cfd8fc":"lxsrq"}],"cr2es":[function(require,module,exports) {
"use strict";
var define = require("6e613ddb8bace1c6");
var getPolyfill = require("f2ce5ac0488eb372");
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function shimNumberIsNaN() {
    var polyfill = getPolyfill();
    define(Number, {
        isNaN: polyfill
    }, {
        isNaN: function testIsNaN() {
            return Number.isNaN !== polyfill;
        }
    });
    return polyfill;
};

},{"6e613ddb8bace1c6":"6eq5U","f2ce5ac0488eb372":"h00Nr"}],"5LFKi":[function(require,module,exports) {
module.exports = JSON.parse('{"events":[{"id":1,"name":"International Basler Cup","location":"Basel (SUI)","dateStart":"31.05.2024","dateEnd":"02.06.2024","link":""},{"id":2,"name":"European Aquatics Championships","location":"Belgrade (SRB)","dateStart":"17.06.2024","dateEnd":"23.06.2024","link":"https://www.len.eu/belgrade2024/"},{"id":3,"name":"European Junior Swimming Championships","location":"Vilnius (LTU)","dateStart":"02.07.2024","dateEnd":"07.07.2024","link":""},{"id":4,"name":"Swiss Summer Championships","location":"Uster (SUI)","dateStart":"11.07.2024","dateEnd":"14.07.2024","link":"https://scu.ch/sm-50m-uster-2024/"},{"id":5,"name":"Swiss Junior Championships","location":"Basel (SUI)","dateStart":"18.07.2024","dateEnd":"21.07.2024","link":""},{"id":6,"name":"The Olympic Games of Paris 2024","location":"Paris (FRA)","dateStart":"26.07.2024","dateEnd":"11.08.2024","link":""}]}');

},{}]},["aP7aF","8lRBv"], "8lRBv", "parcelRequire8078")

//# sourceMappingURL=index.59a40e7a.js.map
