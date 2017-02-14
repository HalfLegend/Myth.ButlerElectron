import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MainWindow} from "./main.window";
import {MaterialModule} from "@angular/material";
import 'hammerjs/hammer.js';
@NgModule({
    imports: [BrowserModule, MaterialModule.forRoot()],
    declarations: [MainWindow],
    bootstrap: [MainWindow]
})
export class MainWindowModule {
}