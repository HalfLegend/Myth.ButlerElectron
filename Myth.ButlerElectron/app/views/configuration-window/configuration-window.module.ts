import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ConfigurationWindow} from "./configuration.window";
import {MaterialModule} from "@angular/material";
import 'hammerjs/hammer.js';
@NgModule({
    imports: [BrowserModule, MaterialModule.forRoot()],
    declarations: [ConfigurationWindow],
    bootstrap: [ConfigurationWindow]
})
export class MainWindowModule {
}