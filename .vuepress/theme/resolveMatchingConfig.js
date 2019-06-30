import { ensureEndingSlash } from "./util";
export function resolveMatchingConfig(route, config) {
    if (Array.isArray(config)) {
        return {
            base: '/',
            config: config
        };
    }
    for (const base in config) {
        if (ensureEndingSlash(route.path).indexOf(base) === 0) {
            return {
                base,
                config: config[base]
            };
        }
    }
    return {};
}
