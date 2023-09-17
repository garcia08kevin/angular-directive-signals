import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/userService.service';
import { User } from '../../interface/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styles: [
  ]
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject(UserService);

  public user?= signal<User | undefined>(undefined);
  public name = computed(() => {
    if (!this.user!()) return ''
    return `${this.user!()?.first_name} ${this.user!()?.last_name}`
  });
  public userWasFound = signal(true);

  public id = signal(1);

  ngOnInit(): void {
    this.loadUser(this.id());
  }

  loadUser(value: number) {
    if (value <= 0) return;
    this.id.update((current) => current = value);
    this.userService.getUserById(value).subscribe(
      {
        next: (user) => {
          this.user?.set(user);
          this.userWasFound.set(true);
        },
        error: () => {
          this.userWasFound.set(false);
          this.user?.set(undefined);
        }
      })
  }
}
