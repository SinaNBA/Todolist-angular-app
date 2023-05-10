import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParamMap.subscribe((params) =>
      console.log(params.get('id'))
    );
  }

  ngOnInit() {}

  navHome(): void {
    this.router.navigate(['']);
  }
  navProfile(Id: number): void {
    this.router.navigate(['/profile'], { queryParams: { id: Id } });
  }
}
