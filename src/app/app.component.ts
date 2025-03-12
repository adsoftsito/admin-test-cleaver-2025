import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UV Test';

  user = sessionStorage.getItem('user');
  subscription : Subscription;
  // Example in the constructor of you App Component

  constructor(private router: Router) {
   this.subscription = router.events.subscribe((event) => {
     if (event instanceof NavigationStart) {
       this.user = sessionStorage.getItem('user');
       console.log('user')
       console.log(this.user)

//       browserRefresh = !router.navigated;
    }
  });

}
}
