import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Characters } from '../../interfaces/users';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit{
  public userService = inject(UsersService);
  public character: Characters[] = [];

  ngOnInit(): void {
    this.userService.loadPage().subscribe(response =>{
      this.character = response;
    });
  }
}
