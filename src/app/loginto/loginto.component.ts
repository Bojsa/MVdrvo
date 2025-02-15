import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-loginto',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, ReactiveFormsModule, LogintoComponent],
  templateUrl: './loginto.component.html',
  styleUrl: './loginto.component.css'
})
export class LogintoComponent implements OnInit {

  logintoForm: FormGroup; 

    constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<LogintoComponent>) {
      this.logintoForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
     } 

     
  ngOnInit(): void {
    
  }
  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit(){
    console.log(this.logintoForm.value);
 }

}
