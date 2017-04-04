"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cuid = require('cuid');
var CBMarker = (function () {
    function CBMarker() {
    }
    CBMarker.Create = function () {
        return cuid.slug();
    };
    return CBMarker;
}());
exports.CBMarker = CBMarker;
//# sourceMappingURL=index.js.map