import {ExpoMutil} from "mapend-core";

export const ENV_KEY = {
    API_BASE_URL: "API_BASE_URL",
    ASSETS_BASE_URL: "ASSETS_BASE_URL",
}

export function envValue(key: string, defaultValue: string) {
    return ExpoMutil.loadExtraConfig(key, defaultValue)
}

export interface MConfig {
    apiBaseUrl?: string
    assetsBaseUrl?: string
}

export class MConfigDefault implements MConfig {
}