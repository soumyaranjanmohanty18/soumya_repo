// import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router }                  from '@angular/router';
// import { AuthService }             from '../../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html'
// })
// export class LoginComponent {
//   form = this.fb.group({
//     username: ['', Validators.required],
//     password: ['', Validators.required]
//   });
//   error = '';

//   constructor(
//     private fb: FormBuilder,
//     private auth: AuthService,
//     private router: Router
//   ) {}

//   submit() {
//     const { username, password } = this.form.value;
//     this.auth.login(username!, password!).subscribe(ok => {
//       if (ok) {
//         const role = this.auth.currentUser!.role;
//         this.router.navigate([role === 'Admin' ? '/admin' : '/employee']);
//       } else {
//         this.error = 'Invalid credentials';
//       }
//     });
//   }
// }
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  error = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  submit() {
    const { username, password } = this.form.value;
    this.auth.login(username!, password!).subscribe((ok: boolean) => {
      if (ok) {
        const role = this.auth.currentUser!.role;
        this.router.navigate([role === 'Admin' ? '/admin' : '/employee']);
      } else {
        this.error = 'Invalid credentials';
      }
    });
  }
}
