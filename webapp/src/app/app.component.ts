import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'webapp';

  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
