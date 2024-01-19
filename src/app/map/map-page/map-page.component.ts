import { Component, ViewChild } from "@angular/core";
import { MeasureDataType, measureDataConfigs } from "../MeasureDataTypes";
import { MapComponent } from "../map/map.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: "app-map-page",
    standalone: true,
    templateUrl: "./map-page.component.html",
    styleUrl: "./map-page.component.css",
    imports: [SidebarComponent, MapComponent],
})
export class MapPageComponent {
    dataType: MeasureDataType = measureDataConfigs.get("brightness")!;

    @ViewChild(MapComponent)
    map!: MapComponent;

    onChangeDataType(dataType: MeasureDataType) {
        this.map.dataType = dataType;
        this.map.loadVisibleMeasurements();
    }
}
