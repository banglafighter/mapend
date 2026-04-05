import {BootProps} from "../data/boot-props";
import {useAppContext} from "../hook/use-app-context";
import {registerRootComponent} from "expo";
import MapendEngine from "./mapend-engine";


export const Mapend = {

    boot({mainComponent, registry}: BootProps) {
        const {setConfig, setUiAction} = useAppContext.get()
        setConfig({...registry.config})
        setUiAction({...registry.adapter.setUIAdapter().action})

        function InternalComponent() {
            return (<MapendEngine mainComponent={mainComponent} registry={registry}/>)
        }

        return registerRootComponent(InternalComponent);
    }
}