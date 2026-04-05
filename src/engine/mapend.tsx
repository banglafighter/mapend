import {BootProps} from "../data/boot-props";
import {useAppContext} from "../hook/use-app-context";
import {registerRootComponent} from "expo";


export const Mapend = {

    boot({mainComponent, registry}: BootProps) {
        const {setConfig, setUiAction} = useAppContext.get()
        setConfig({...registry.config})
        setUiAction({...registry.adapter.setUIAdapter().action})
        return registerRootComponent(mainComponent);
    }
}