"use strict";
var core_1 = require("@angular/core");
var Checkbox = (function () {
    function Checkbox() {
        this.tap = new core_1.EventEmitter();
        this.checked = false;
    }
    Checkbox.prototype.onTap = function () {
        this.tap.next(this.checked);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Checkbox.prototype, "tap", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Checkbox.prototype, "checked", void 0);
    Checkbox = __decorate([
        core_1.Component({
            selector: "Checkbox",
            template: "\n    <Image\n        [src]=\"checked ? 'res://checkbox_checked' : 'res://checkbox_unchecked'\"\n        class=\"checkbox\"\n        (tap)=\"onTap()\"\n        dock=\"left\">\n    </Image>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Checkbox);
    return Checkbox;
}());
exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map