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
const eventsData = require("bd5103096a294280");
const date = (0, _tempo.format)(new Date(), "MMMM DD, YYYY");
const day = (0, _tempo.format)(new Date(), "dddd");
const btnAdd = document.getElementById("btn-add");
const btnUpdate = document.getElementById("btn-update");
let data = eventsData;
let eventsSection = "";
let currentDateEl = document.getElementById("currentDate");
let currentDayEl = document.getElementById("currentDay");
let eventsListEl = document.getElementById("eventsList");
let currentDate = (0, _tempo.parse)(date, "dddd DD MMMM YYYY");
let eventsLoadingEl = document.getElementById("eventsLoading");
currentDayEl.textContent = "Happy " + day + "!";
currentDateEl.textContent = "Current Date: " + date;
function listEvents() {
    data.events.forEach((event)=>{
        let eventStartDate = (0, _tempo.parse)(event.dateStart, "DD.MM.YYYY");
        let eventEndDate = (0, _tempo.parse)(event.dateEnd, "DD.MM.YYYY");
        let startDate = (0, _tempo.format)(eventStartDate, "dddd, MMMM DD, YYYY");
        let endDate = (0, _tempo.format)(eventEndDate, "dddd, MMMM DD, YYYY");
        let countdown = (0, _tempo.diffDays)(eventStartDate, currentDate);
        let daysPassed = (0, _tempo.diffDays)(eventEndDate, currentDate);
        if (countdown < 0) console.log(event.name + " ended " + daysPassed + " days ago.");
        else {
            eventsSection = '<section class="event event-' + event.id + ' border border-black rounded-xl mb-3 px-4 py-5 flex justify-between"><div id="eventInfo">';
            if (event.link === "") eventsSection += '<h4 class="mb-2 text-xl font-normal">' + event.name + "</h4>";
            else eventsSection += '<h4 class="mb-2 text-xl font-normal hover:font-semibold"><a href="' + event.link + '" title="' + event.name + '" target="_blank">' + event.name + "</a></h4>";
            eventsSection += '<p><span class="font-medium">Location:</span> ' + event.location + "</p>" + '<p><span class="font-medium">Begin:</span> ' + startDate + "</p>" + '<p><span class="font-medium">End:</span> ' + endDate + '</p></div><div id="eventCountdown" class="text-center">';
            if (countdown === 0) eventsSection += '<p class="font-bold">Today is the day!</p></div></section>';
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
    setTimeout(function() {
        listEvents();
    }, 2000);
});
btnAdd.addEventListener("click", (event)=>{
    console.log("This button will add a new event");
});
btnUpdate.addEventListener("click", (event)=>{
    eventsSection = "";
    eventsListEl.textContent = "";
    eventsLoadingEl.classList.remove("hidden");
    setTimeout(function() {
        eventsLoadingEl.classList.add("hidden");
    }, 1500);
    setTimeout(function() {
        listEvents();
    }, 2000);
});

},{"@formkit/tempo":"bPFbk","bd5103096a294280":"5LFKi"}],"bPFbk":[function(require,module,exports) {
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

},{}],"5LFKi":[function(require,module,exports) {
module.exports = JSON.parse('{"events":[{"id":1,"name":"International Basler Cup","location":"Basel (SUI)","dateStart":"31.05.2024","dateEnd":"02.06.2024","link":""},{"id":2,"name":"European Aquatics Championships","location":"Belgrade (SRB)","dateStart":"17.06.2024","dateEnd":"23.06.2024","link":"https://www.len.eu/belgrade2024/"},{"id":3,"name":"European Junior Swimming Championships","location":"Vilnius (LTU)","dateStart":"02.07.2024","dateEnd":"07.07.2024","link":""},{"id":4,"name":"Swiss Summer Championships","location":"Uster (SUI)","dateStart":"11.07.2024","dateEnd":"14.07.2024","link":"https://scu.ch/sm-50m-uster-2024/"},{"id":5,"name":"The Olympic Games of Paris 2024","location":"Paris (FRA)","dateStart":"26.07.2024","dateEnd":"11.08.2024","link":""}]}');

},{}]},["aP7aF","8lRBv"], "8lRBv", "parcelRequire716c")

//# sourceMappingURL=index.59a40e7a.js.map
