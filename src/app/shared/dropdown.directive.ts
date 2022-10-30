import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropDownDirective {
    @HostBinding('class.open') isOpen:boolean = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target);
    }

    constructor(private elRef: ElementRef) {}
}