// import { Injectable } from '@angular/core';
// import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { map, Observable, take } from 'rxjs';
// import { UserService } from 'src/app/user/user.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private userService: UserService, private router: Router) {

//   }
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     const { guest } = route.data;
//     const isLogged = this.userService.isLogged
//     if(!isLogged && guest == true){
//       return true
//     }else if(isLogged && guest == false){
//       return true
//     }
//     return this.router.parseUrl('/error');
//   }
//   }