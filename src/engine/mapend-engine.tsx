import MRegistry from "../structure/mregistry";
import {UIAdapterProvider} from "mapend-ui";
import {MainComponent} from "../data/common-data";


export default function MapendEngine({mainComponent, registry}: { mainComponent: MainComponent, registry: MRegistry }) {
    const UIMainComponent = mainComponent
    return (
        <>
            <UIAdapterProvider adapter={registry.adapter.setUIAdapter()}>
                <UIMainComponent/>
                {registry.adapter.setCentralUI()}
            </UIAdapterProvider>
        </>
    )
}