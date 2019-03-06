import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SystemConstants } from '../common/system.constants';
import { map } from 'rxjs/operators';
import { IUser } from 'app/interfaces/iuser';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : "DELETE, POST, GET, OPTIONS",
    'Access-Control-Allow-Headers' : "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  constructor(
    private http:HttpClient
  ) { 
  }
  login(taikhoan:string, matkhau:string) :Observable<Boolean>{
    return this.http.post<IUser>(SystemConstants.BASE_API + 'taikhoan/login',JSON.stringify({taikhoan,matkhau}),httpOptions
    ).pipe( 
      map((res) => {
        // Đăng nhập thành công
        if(res){
          console.log(res.id);
          localStorage.removeItem(SystemConstants.CURRENT_USER_ID);
          localStorage.setItem(SystemConstants.CURRENT_USER_ID,<string>res.id);
          
          localStorage.removeItem(SystemConstants.CURRENT_USER_ROLE);
          localStorage.setItem(SystemConstants.CURRENT_USER_ROLE,<string>res.id_chucvu);
          return true;
        }
        return false;
      }
      )
    );
  }
}
