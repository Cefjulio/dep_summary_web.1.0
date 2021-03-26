import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dept. Summary web';
  users: any;

  constructor( private http: HttpClient  ){}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    // tslint:disable-next-line: deprecation
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });


  }


}
