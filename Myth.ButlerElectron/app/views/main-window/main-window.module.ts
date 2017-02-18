import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import 'hammerjs/hammer.js';
import {MainWindow} from "./main.window";

@NgModule({
    imports: [BrowserModule, MaterialModule.forRoot()],
    declarations: [MainWindow],
    bootstrap: [MainWindow]
})
export class MainWindowModule {
}