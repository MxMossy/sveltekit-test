

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.lSP2mmoX.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.9d_DLnGX.js"];
export const stylesheets = ["_app/immutable/assets/2.7OVEf_IN.css"];
export const fonts = [];
