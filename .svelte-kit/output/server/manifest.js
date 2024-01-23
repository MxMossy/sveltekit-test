export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "svelte_test/_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dhyg1RlT.js","app":"_app/immutable/entry/app.cL0V8V_m.js","imports":["_app/immutable/entry/start.Dhyg1RlT.js","_app/immutable/chunks/entry.6QgXpfFD.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/entry/app.cL0V8V_m.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.9d_DLnGX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
