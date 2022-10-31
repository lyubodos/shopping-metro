import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropDownDirective {
    @HostBinding('class.open') isOpen:boolean = false;

    @HostListener('click') toggleOpen(event: Event){
        this.isOpen = !this.isOpen;
    }

    constructor(private elRef: ElementRef) {}
}