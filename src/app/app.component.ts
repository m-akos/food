import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food';
  route = 'recipes';

  onSelectRoute(route) {
    // console.log('app component route: ' + route);
    this.route = route;
  }
}
