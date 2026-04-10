import { _ as __nuxt_component_0 } from './nuxt-link-Bg6ejw1h.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { u as useHead } from './composables-BX8evklg.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "collage-pokemon",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "TCG collage - Pokémon"
    });
    const deckList = ref("");
    const deck = ref([]);
    ref(null);
    const status = ref("");
    const loading = ref(false);
    const notFound = ref([]);
    const cols = ref(3);
    const gap = ref(12);
    const bg = ref("#1a1a1a");
    const badgeColor = ref("#c0392b");
    const borderColor = ref("#ffffff");
    const badgeShape = ref("hexagon");
    return (_ctx, _push, _parent, _attrs) => {
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
      _push(`<h1 class="text-2xl font-bold">Collage Generator - Pokémon</h1></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><div class="bg-gray-800 rounded-xl p-4"><p class="text-sm text-gray-400 mb-3">Ingresa tu lista de cartas</p><p class="text-xs text-gray-500 mb-2">Formato: cantidad nombre set numero</p><textarea placeholder="4 Teal Mask Ogerpon ex TWM 25
2 Pikachu xy1 11
1 Charizard xy1 11" class="w-full h-48 bg-gray-700 rounded-lg px-3 py-2 text-sm outline-none font-mono">${ssrInterpolate(unref(deckList))}</textarea><button class="mt-3 w-full py-2 bg-green-600 rounded-lg text-sm hover:bg-green-700 disabled:opacity-40"${ssrIncludeBooleanAttr(unref(loading) || !unref(deckList).trim()) ? " disabled" : ""}>${ssrInterpolate(unref(loading) ? "Procesando..." : "Procesar lista")}</button></div><div class="bg-gray-800 rounded-xl p-4"><p class="text-sm text-gray-400 mb-3">Deck (${ssrInterpolate(unref(deck).length)} cartas únicas)</p><div class="space-y-2 max-h-48 overflow-y-auto"><!--[-->`);
      ssrRenderList(unref(deck), (card) => {
        _push(`<div class="flex items-center gap-3"><img${ssrRenderAttr("src", card.imageUrl)}${ssrRenderAttr("alt", card.name)} class="w-10 rounded"><span class="flex-1 text-sm">${ssrInterpolate(card.name)}</span><div class="flex items-center gap-2"><button class="w-6 h-6 bg-gray-700 rounded text-xs">-</button><span class="text-sm w-4 text-center">${ssrInterpolate(card.quantity)}</span><button class="w-6 h-6 bg-gray-700 rounded text-xs">+</button><button class="w-6 h-6 bg-red-800 rounded text-xs">x</button></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-gray-800 rounded-xl p-4"><p class="text-sm text-gray-400 mb-3">Configuración</p><div class="grid grid-cols-2 gap-3 text-sm"><label class="flex flex-col gap-1"><span class="text-gray-400">Columnas</span><input${ssrRenderAttr("value", unref(cols))} type="number" min="2" max="10" class="w-16 bg-gray-700 rounded px-2 py-1"><span class="text-xs text-gray-500">Recomendacion para Móvil: 3 columnas</span></label><label class="flex items-center gap-2"><span class="text-gray-400">Gap (px)</span><input${ssrRenderAttr("value", unref(gap))} type="number" min="0" max="40" class="w-16 bg-gray-700 rounded px-2 py-1"></label><label class="flex items-center gap-2"><span class="text-gray-400">Fondo</span><input${ssrRenderAttr("value", unref(bg))} type="color" class="w-10 h-8 rounded cursor-pointer"></label><label class="flex items-center gap-2"><span class="text-gray-400">Círculo</span><input${ssrRenderAttr("value", unref(badgeColor))} type="color" class="w-10 h-8 rounded cursor-pointer"></label><label class="flex items-center gap-2"><span class="text-gray-400">Borde</span><input${ssrRenderAttr("value", unref(borderColor))} type="color" class="w-10 h-8 rounded cursor-pointer"></label><label class="flex items-center gap-2"><span class="text-gray-400">Badge</span><select class="bg-gray-700 rounded px-2 py-1"><option value="circle"${ssrIncludeBooleanAttr(Array.isArray(unref(badgeShape)) ? ssrLooseContain(unref(badgeShape), "circle") : ssrLooseEqual(unref(badgeShape), "circle")) ? " selected" : ""}>Círculo</option><option value="diamond"${ssrIncludeBooleanAttr(Array.isArray(unref(badgeShape)) ? ssrLooseContain(unref(badgeShape), "diamond") : ssrLooseEqual(unref(badgeShape), "diamond")) ? " selected" : ""}>Diamante</option><option value="hexagon"${ssrIncludeBooleanAttr(Array.isArray(unref(badgeShape)) ? ssrLooseContain(unref(badgeShape), "hexagon") : ssrLooseEqual(unref(badgeShape), "hexagon")) ? " selected" : ""}>Hexágono</option></select></label></div></div><div class="flex gap-3"><button class="flex-1 py-3 bg-green-600 rounded-xl font-medium hover:bg-green-700 disabled:opacity-40"${ssrIncludeBooleanAttr(unref(deck).length === 0) ? " disabled" : ""}> Generar collage </button><button class="flex-1 py-3 bg-blue-600 rounded-xl font-medium hover:bg-blue-700 disabled:opacity-40"${ssrIncludeBooleanAttr(unref(status) !== "Collage listo") ? " disabled" : ""}> Descargar PNG </button></div><p class="text-sm text-gray-400">${ssrInterpolate(unref(status))}</p>`);
      if (unref(notFound).length > 0) {
        _push(`<div class="text-sm text-red-400"> No encontradas: ${ssrInterpolate(unref(notFound).join(", "))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-gray-800 rounded-xl p-4 overflow-auto"><p class="text-sm text-gray-400 mb-3"> Preview — ${ssrInterpolate(unref(cols))} col${ssrInterpolate(unref(cols) !== 1 ? "s" : "")}, ${ssrInterpolate(Math.ceil(unref(deck).length / unref(cols)))} fila${ssrInterpolate(Math.ceil(unref(deck).length / unref(cols)) !== 1 ? "s" : "")}</p><canvas class="rounded max-w-full"></canvas></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collage-pokemon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=collage-pokemon-ihlRjp2_.mjs.map
