import { _ as __nuxt_component_0 } from './nuxt-link-Bg6ejw1h.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-900 text-white p-6" }, _attrs))}><div class="max-w-6xl mx-auto"><div class="flex items-center gap-4 mb-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-gray-400 hover:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`← Home`);
      } else {
        return [
          createTextVNode("← Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1 class="text-2xl font-bold">Collection</h1></div><div class="bg-gray-800 rounded-xl p-8 text-center"><p class="text-gray-400">Próximamente...</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const collection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { collection as default };
//# sourceMappingURL=collection-DJD4b56o.mjs.map
