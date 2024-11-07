import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { ItemDetailComponent } from './Dashboard/Admin/item-detail/item-detail.component';
import { ListItemComponent } from './Dashboard/Admin/list-item/list-item.component';
import { ItemListComponent } from './Dashboard/User/item-list/item-list.component';
import { DetailComponent } from './Dashboard/User/detail/detail.component';
import { HomeComponent } from './Dashboard/User/home/home.component';
import { AdminLogComponent } from './Auth/admin-log/admin-log.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ItemDetailComponent,
    ListItemComponent,
    DetailComponent,
    ItemListComponent,
  AdminLogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'valhelaBd';
}
