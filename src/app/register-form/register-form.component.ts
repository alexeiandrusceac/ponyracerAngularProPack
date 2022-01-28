import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'pr-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
    userForm?: FormGroup;
    userNameCtrl?: FormControl;
    emailCtrl?: FormControl;
    birthCtrl?: FormControl;
    passwordCtrl?: FormControl;

    constructor(fb: FormBuilder) {
        const minUserLength = 5;
        const minPassLength = 10;
        this.userNameCtrl = fb.control('', [Validators.required, Validators.minLength(minUserLength)]);
        this.birthCtrl = fb.control('', [Validators.required, RegisterFormComponent.isOldEnough]);
        this.emailCtrl = fb.control('', [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern('/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/')
        ]);
        this.passwordCtrl = fb.control('', [
            Validators.required,
            Validators.minLength(minPassLength),
            Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{10,}$')
        ]);
        this.userForm = fb.group({
            username: this.userNameCtrl,
            email: this.emailCtrl,
            password: this.passwordCtrl,
            birth: this.birthCtrl
        });
    }
    static isOldEnough(fc: FormControl) {
        const birthdate = new Date(fc.value);
        birthdate.setFullYear(birthdate.getFullYear() + 18);
        return birthdate < new Date() ? null : birthdate;
    }
    reset(): void {
        this.userNameCtrl?.setValue('');
        this.passwordCtrl?.setValue('');
        this.emailCtrl?.setValue('');
        this.birthCtrl?.setValue('');
    }
    register(): void {
        console.log(this.userForm?.value);
    }
}
