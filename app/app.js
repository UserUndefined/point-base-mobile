"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var main_page_1 = require("./main-page");
var checkbox_1 = require('./checkbox');
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [main_page_1.MainPage, checkbox_1.Checkbox],
            bootstrap: [main_page_1.MainPage],
            imports: [platform_1.NativeScriptModule],
            exports: [checkbox_1.Checkbox],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=app.js.map