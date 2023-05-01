import { createContext } from "react";

type Location = {
    lat: number;
    lon: number;
}

export const LocationContext = createContext<Location>({lat: 0, lon: 0});