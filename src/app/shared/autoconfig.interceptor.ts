import { Observable } from 'rxjs';

import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {AuthService} from './auth.service'



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authservice: AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler){
        const token = this.authservice.getToken()
        let authReq= req
        if(token!==null){
            authReq = req.clone({
                setHeaders:{
                    'access_token': token 
                }
                // withCredentials:true,
            });  
        }

        return next.handle(authReq)
    }
}