import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.5eFuO_K5.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.9d_DLnGX.js"];
export const stylesheets = ["_app/immutable/assets/0.TYJxD7hi.css"];
export const fonts = [];
