import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { RecipesModule } from './recipes/recipes.module';
import { DashboardComponent } from './recipes/dashboard/dashboard.component';
import { CreateComponent } from './recipes/create/create.component';
import { EditComponent } from './recipes/edit/edit.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [AuthGuard],
    // data: {
    //   guest: true,
    // },
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuard],
    // data: {
    //   guest: true,
    // },
  },
  {
    path: 'about-us',
    component: AboutUsComponent,

  },
  {
    path: 'contacts',
    component: ContactsComponent,

  },
  {
    path: 'profile',
    component: ProfileComponent,

  },
  {
    path: 'recipes',
    component: DashboardComponent,

  },
  {
    path: 'create-recipe',
    component: CreateComponent,

  },
  {
    path: 'edit-recipe',
    component: EditComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
