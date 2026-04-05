import {UINode} from "mmcore";
import {UIAdapterData} from "mapend-ui";

export default abstract class MAdapter {
    abstract setCentralUI(): UINode
    abstract setUIAdapter(): UIAdapterData
}