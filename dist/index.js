"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cuid = require("cuid");
exports.defaultTag = {
    head: '{{',
    tail: '}}'
};
class CBMarker {
    static CreateId(options = {}) {
        const { useSlug = true } = options;
        return useSlug ? cuid.slug() : cuid();
    }
    static Create(options = {}) {
        const { tag = exports.defaultTag, useSlug = true } = options;
        const markerId = CBMarker.CreateId(options);
        return [
            `${tag.head}${markerId}${tag.tail}`,
            `${tag.head}/${markerId}${tag.tail}`
        ];
    }
}
exports.CBMarker = CBMarker;
//# sourceMappingURL=index.js.map