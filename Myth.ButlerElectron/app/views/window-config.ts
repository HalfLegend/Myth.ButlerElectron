import {ElegularWindowOptions, GlobalElegularOptions} from "elegular";

let globalElegularOptions:GlobalElegularOptions = {
    systemJsConfig:{
        map:{'@angular/material': 'npm:@angular/material/bundles/material.umd.js'}
    }
};

let windowConfig: ElegularWindowOptions[] = [{
    windowId: "main",
    angularModulePath: __dirname + "/main-window/main-window.module.js",
    isMainWindow: true,
    isOpenDevTool: true,
    windowOptions: {
        width: 800,
        height: 800,
        frame: true,
        alwaysOnTop: false,
        transparent:true
    }
},{
    windowId: "configuration",
    angularModulePath: __dirname + "/configuration-window/configuration-window.module.js",
    isMainWindow: false,
    isOpenDevTool: true,
    systemJsConfig:{
        map:{'@angular/material': 'npm:@angular/material/bundles/material.umd.js'}
    },
    windowOptions: {
        width: 800,
        height: 800,
        frame: true,
        alwaysOnTop: true,
        transparent:true
    }
}];
export {windowConfig, globalElegularOptions};