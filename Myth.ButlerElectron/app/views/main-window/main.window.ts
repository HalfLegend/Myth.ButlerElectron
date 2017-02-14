import {Component, ViewChild} from '@angular/core';
import {ElegularWindowRef, ElegularService} from 'elegular/client';
import Point = Electron.Point;
import {MdMenuTrigger} from "@angular/material";

@Component({
    templateUrl: __dirname + "/main.window.html"
})
export class MainWindow {
    private isDragging : boolean;
    private initialMouseOffset: Point;
    @ViewChild(MdMenuTrigger) _trigger: MdMenuTrigger;
    constructor(private _elegularWindowRef: ElegularWindowRef, private _elegularService: ElegularService) {
    }

    onMouseDown(mouseEvent: MouseEvent){
        let buttonFlag = mouseEvent.button;
        if (buttonFlag === 0)
        {
            this.isDragging = true;
            let windowPosition = this._elegularWindowRef.getPosition();

            this.initialMouseOffset = {x: mouseEvent.screenX - windowPosition.x, y: mouseEvent.screenY - windowPosition.y};
        }
        else if (buttonFlag === 2)
        {
            this._trigger.openMenu();
        }
    }

    onMouseMove(mouseEvent: MouseEvent){
        if (this.isDragging){
            //let initialScreenPostion = this._elegularWindowRef.getPosition();
            this._elegularWindowRef.setPosition(mouseEvent.screenX - this.initialMouseOffset.x, mouseEvent.screenY - this.initialMouseOffset.y, false);
        }
    }

    onMouseUp(){
        this.isDragging = false;
        this.initialMouseOffset = null;
    }

    onExitClick(){
        this._elegularWindowRef.close();
    }

    onConfigurationClick(){
        this._elegularService.createWindowAsync("configuration");
    }
}