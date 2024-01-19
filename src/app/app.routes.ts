import { Routes } from "@angular/router";
import { MapPageComponent } from "./map/map-page/map-page.component";
import { CriticComponent } from "./presentation/critic/critic.component";
import { HomeComponent } from "./presentation/home/home.component";

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Climap - Home",
    },
    {
        path: "critic",
        component: CriticComponent,
        title: "Climap - Critic",
    },
    {
        path: "map",
        component: MapPageComponent,
        title: "Climap - Map",
    },
];
