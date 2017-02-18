import {Component} from '@angular/core';
import {ElegularWindowRef, ElegularService} from 'elegular/client';
@Component({
    templateUrl: __dirname + "/main.window.html"
})
export class MainWindow {
    private isDragging : boolean;
    private initialMouseOffset: Electron.Point;
    private menu : Electron.Menu;
    constructor(private _elegularWindowRef: ElegularWindowRef, private _elegularService: ElegularService) {
        this.menu = new Menu();
        this.menu.append(new MenuItem({label: 'MenuItem1', click() { console.log('item 1 clicked') }}));
        this.menu.append(new MenuItem({type: 'separator'}));
        this.menu.append(new MenuItem({label: 'MenuItem2', type: 'checkbox', checked: true}));
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
            this.menu.popup(electron.remote.getCurrentWindow());
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