import { ExtraOptions, Routes } from "@angular/router";
import { MapPageComponent } from "./map/map-page/map-page.component";
import { HomeComponent } from "./presentation/home/home.component";

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Climap - Home",
    },
    {
        path: "map",
        component: MapPageComponent,
        title: "Climap - Map",
    },
];
const routerOptions: ExtraOptions = {
    anchorScrolling: "enabled",
};
