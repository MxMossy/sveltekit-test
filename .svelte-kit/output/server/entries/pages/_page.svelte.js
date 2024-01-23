import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const welcome = "/svelte_test/_app/immutable/assets/svelte-welcome.NKSIh51R.webp";
const welcome_fallback = "/svelte_test/_app/immutable/assets/svelte-welcome.FTYsst4A.png";
const css = {
  code: ".welcome.svelte-1ygwu2y.svelte-1ygwu2y{display:block;position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-1ygwu2y img.svelte-1ygwu2y{position:absolute;width:100%;height:100%;top:0;display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-t32ptj_END -->`, ""} <section data-svelte-h="svelte-1c7mzt1"><h1><span class="welcome svelte-1ygwu2y"><picture><source${add_attribute("srcset", welcome, 0)} type="image/webp"> <img${add_attribute("src", welcome_fallback, 0)} alt="Welcome" class="svelte-1ygwu2y"></picture></span>

		to your new<br>SvelteKit app</h1> <h2 class="font-bold underline">try editing <strong>src/routes/+page.svelte</strong></h2> </section>`;
});
export {
  Page as default
};
