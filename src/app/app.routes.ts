import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { ItemDetailComponent } from './Dashboard/Admin/item-detail/item-detail.component';
import { ListItemComponent } from './Dashboard/Admin/list-item/list-item.component';
import { DetailComponent } from './Dashboard/User/detail/detail.component';
import { ItemListComponent } from './Dashboard/User/item-list/item-list.component';
import { HomeComponent } from './Dashboard/User/home/home.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signUp', component: SignUpComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'item-detail', component: ItemDetailComponent
    },
    {
        path: 'list-Item', component: ListItemComponent
    },
    {
        path: 'detail', component: DetailComponent
    },
    {
        path: 'item-list', component: ItemListComponent
    }
];
