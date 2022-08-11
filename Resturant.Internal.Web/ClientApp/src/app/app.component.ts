import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "app/+auth/service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ticket management';

  constructor(private _authService: AuthService) {
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    // Load ngx permissions
    this._authService.loadPermissions();
  }
}
