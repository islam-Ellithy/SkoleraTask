import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';


export const appRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: UserComponent },
    { path: 'users/:id', component: UserDetailComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);

