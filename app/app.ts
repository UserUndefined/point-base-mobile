// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import { NgModule } from "@angular/core";
import { MainPage } from "./main-page";
import { Checkbox } from './checkbox';
import { LocationItem } from './location.item';
import { Configuration } from './app.constants';

@NgModule({
    declarations: [MainPage, Checkbox],
    bootstrap: [MainPage],
    imports: [NativeScriptModule, NativeScriptHttpModule],
    exports: [Checkbox],
    providers: [Configuration]
})
class AppComponentModule { }

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
