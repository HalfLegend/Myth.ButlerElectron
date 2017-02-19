import {ElegularWindowOptions, GlobalElegularOptions} from "elegular";

let globalElegularOptions:GlobalElegularOptions = {
    systemJsConfig:{
        map:{'@angular/material': 'npm:@angular/material/bundles/material.umd.js'}
    }
};

let windowConfig: ElegularWindowOptions[] = [{
    windowName: "main",
    angularModulePath: __dirname + "/main-window/main-window.module.js",
    isMainWindow: true,
    isOpenDevTool: false,
    isStoreWindowStatus:true,
    windowOptions: {
        width: 150,
        height: 150,
        frame: false,
        alwaysOnTop: true,
        transparent:true
    }
},{
    windowName: "configuration",
    angularModulePath: __dirname + "/configuration-window/configuration-window.module.js",
    isMainWindow: false,
    isOpenDevTool: true,
    windowOptions: {
        width: 800,
        height: 800,
        frame: true,
        title:"Settings"
    }
}];
export {windowConfig, globalElegularOptions};