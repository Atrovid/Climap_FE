import { NgFor } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { measureDataConfigs } from "../MeasureDataTypes";

@Component({
    selector: "app-sidebar",
    standalone: true,
    imports: [NgFor, RouterModule],
    templateUrl: "./sidebar.component.html",
    styleUrl: "./sidebar.component.css",
})
export class SidebarComponent {
    @Output()
    changeDataType = new EventEmitter<any>();

    dataTypes = [...measureDataConfigs.values()];

    onSelectChange(evt: any) {
        const dataType = measureDataConfigs.get(evt.target.value)!;
        this.changeDataType.emit(dataType);
    }
}