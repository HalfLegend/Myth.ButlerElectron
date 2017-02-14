import {Component, ViewChild} from '@angular/core';
import {ElegularWindowRef} from 'elegular/client';
import Point = Electron.Point;
import {MdMenuTrigger} from "@angular/material";

@Component({
    templateUrl: __dirname + "/configuration.window.html"
})
export class ConfigurationWindow {
    constructor(private _elegularWindowRef: ElegularWindowRef) {
    }
}