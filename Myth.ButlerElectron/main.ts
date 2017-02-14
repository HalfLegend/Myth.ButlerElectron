import {ElegularApplication} from "elegular";
import {windowConfig, globalElegularOptions} from "./app/views/window-config";
ElegularApplication.configureGlobal(globalElegularOptions);
ElegularApplication.registerAngularWindowModuleConfig(...windowConfig);
ElegularApplication.runApplication();