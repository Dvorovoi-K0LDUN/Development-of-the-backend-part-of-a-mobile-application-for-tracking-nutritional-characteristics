"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearUndefined = clearUndefined;
function clearUndefined(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== undefined));
}
//# sourceMappingURL=clearUndefined.js.map