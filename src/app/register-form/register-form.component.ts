import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'pr-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent{
    userForm?: FormGroup;
    userNameCtrl?: FormControl;
    emailCtrl?: FormControl;
    passwordCtrl?: FormControl;


    constructor(fb: FormBuilder){
        this.userNameCtrl = fb.control('', [Validators.required, Validators.minLength(5)]);
        this.emailCtrl = fb.control('', [Validators.required, Validators.minLength(10), Validators.pattern('/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/')]);
        this.passwordCtrl = fb.control('', [Validators.required, Validators.minLength(10)
        , Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{10,}$')]);
        this.userForm = fb.group(
            {
                username: this.userNameCtrl,
                email: this.emailCtrl,
                password: this.passwordCtrl
            }
        );
    }
    reset(): void{
        this.userNameCtrl?.setValue('');
        this.passwordCtrl?.setValue('');
        this.emailCtrl?.setValue('');
    }
    register(): void{
        console.log(this.userForm?.value);
    }
}
