import { _ as __nuxt_component_0 } from './nuxt-link-Bg6ejw1h.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './server.mjs';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _imports_0 = publicAssetsURL("/magic-logo.png");
const _imports_1 = publicAssetsURL("/pokemon-logo.png");
const version = "0.0.6";
const pkg = {
  version
};
const usePackage = () => {
  return {
    version: pkg.version
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const pkg2 = usePackage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 pb-20"><div class="text-center"><h1 class="text-3xl md:text-4xl font-bold mb-8 md:mb-12">TCG collage</h1><div class="flex flex-col md:flex-row gap-6 md:gap-16 justify-center items-center"><div class="flex flex-col items-center border-2 border-white rounded-xl p-4 md:p-6 w-full md:w-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collage-magic",
        class: "w-32 h-32 md:w-48 md:h-48 mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Magic" class="w-full h-full object-contain"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Magic",
                class: "w-full h-full object-contain"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col gap-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collage-magic",
        class: "px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 border border-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Collage`);
          } else {
            return [
              createTextVNode("Collage")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col items-center border-2 border-white rounded-xl p-4 md:p-6 w-full md:w-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collage-pokemon",
        class: "w-32 h-32 md:w-48 md:h-48 mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="Pokémon" class="w-full h-full object-contain"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "Pokémon",
                class: "w-full h-full object-contain"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col gap-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collage-pokemon",
        class: "px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 border border-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Collage`);
          } else {
            return [
              createTextVNode("Collage")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><footer class="fixed bottom-0 left-0 right-0 bg-gray-800 text-gray-400 text-center py-2 text-sm"> tcg-collage v${ssrInterpolate(unref(pkg2).version)}</footer><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-a_530ko1.mjs.map
