import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from 'app/app.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: 'users/1', pathMatch: 'full' },
    { path: '', component: AppComponent },
    { path: 'users/:id', component: UserDetailComponent },
    { path: 'users/1', component: UserDetailComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);

