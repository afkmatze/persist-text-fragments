"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cuid = require("cuid");
exports.defaultTag = {
    head: '{{',
    tail: '}}'
};
var CBMarker = (function () {
    function CBMarker() {
    }
    CBMarker.CreateId = function (options) {
        if (options === void 0) { options = {}; }
        var _a = options.useSlug, useSlug = _a === void 0 ? true : _a;
        return useSlug ? cuid.slug() : cuid();
    };
    CBMarker.Create = function (options) {
        if (options === void 0) { options = {}; }
        var _a = options.tag, tag = _a === void 0 ? exports.defaultTag : _a, _b = options.useSlug, useSlug = _b === void 0 ? true : _b;
        var markerId = CBMarker.CreateId(options);
        return [
            "" + tag.head + markerId + tag.tail,
            tag.head + "/" + markerId + tag.tail
        ];
    };
    return CBMarker;
}());
exports.CBMarker = CBMarker;
//# sourceMappingURL=index.js.map