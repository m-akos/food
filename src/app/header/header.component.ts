import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'    
})
export class HeaderComponent {
    @Output() route = new EventEmitter<string>();
    
    onClick(route: string) {        
        this.route.emit(route);
    }

}