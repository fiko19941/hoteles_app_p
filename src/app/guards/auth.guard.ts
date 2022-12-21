import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router:Router) {
    
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<any>{
    return await this.tokenExiste();
  }
  
  private async tokenExiste() {
    let token = this.authService.obtenerToken();
    console.log(token)
    if (token) {
      return true
    } else {
      this.router.navigate(['/home'])
      return false
    }
  }

}
