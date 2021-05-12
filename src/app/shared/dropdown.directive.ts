import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    constructor(private elRef: ElementRef) {
        console.log('constructor');

    }
    @HostListener('click') click(eventData: Event) {
        this.isOpen = !this.isOpen;        
    }    
}