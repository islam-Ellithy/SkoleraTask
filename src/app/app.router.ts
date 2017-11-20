import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';


export const appRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: UserComponent },
    { path: 'users/:id', component: ProfileComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);

