import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { KdevConfigService } from '@kdev/services/config.service';
import { kdevAnimations } from '@kdev/animations';
import { AuthenService } from 'app/core/services/authen.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UrlConstants } from 'app/core/common/url.constants';
import { SystemConstants } from 'app/core/common/system.constants';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: kdevAnimations
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: string = "";
  password: string = "";
  constructor(
    private _kdevConfigService: KdevConfigService,
    private _formBuilder: FormBuilder,
    private _authenServices : AuthenService,
    private toastr: ToastrService,
    private router: Router
  ) {
    // Configure the layout
    this._kdevConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: ['test01', [Validators.required]],
      password: ['123456', Validators.required]
    });
  }

  login(){
    this._authenServices.login(this.username,this.password).subscribe(res =>{
      if(res){
        this.toastr.success("Login Success !", "Success");
        console.log(localStorage.getItem(SystemConstants.CURRENT_USER_ROLE));
        if(localStorage.getItem(SystemConstants.CURRENT_USER_ROLE) == "1"){
          this.router.navigate([UrlConstants.HOME]);
        }else if(localStorage.getItem(SystemConstants.CURRENT_USER_ROLE) == "2"){
          this.router.navigate([UrlConstants.ADMIN_HOME]);
        }
      }else{
        this.toastr.error("Login fail","Error");
      }
    })
  }
}
