import { Component, OnInit, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Characters } from '../../interfaces/users';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit{
  public userService = inject(UsersService);
  public character = signal<Characters[]>([]);

  public ngOnInit(): void {
    this.userService.loadPage().subscribe(response =>{
      this.character.set(response);
    });
  }

  public checkInfo(name: string, species: string, status: string): void {
   this.userService.nameCharacter.set(name);
   this.userService.species.set(species);
   this.userService.status.set(status);
  }
  
}
