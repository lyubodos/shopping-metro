import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl:  "./header.component.html",
    styleUrls: ["header.component.css"]
})
export class Header implements OnInit {
    @Output() featureSelected = new EventEmitter<string>();


    constructor(){}

    ngOnInit(): void {
        
    }

    featureToggle(feature){
        this.featureSelected.emit(feature);
    }
}