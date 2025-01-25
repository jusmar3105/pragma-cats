import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeSplashComponent } from 'src/app/modules/introduction/components/welcome-splash/welcome-splash.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [SharedModule, WelcomeSplashComponent],
})
export class WelcomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/breed-list']);
    }, 1250);
  }
}
