import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbWindowRef } from '@nebular/theme';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { StaffService } from '../../../../services/staff/staff.service';
import { GeneratePassword } from '../../../../utils';
@Component({
    selector: 'ngx-create-staff-modal',
    templateUrl: './create-staff-modal.component.html',
    styleUrls: ['./create-staff-modal.component.scss'],
})
export class CreateStaffModalComponent implements OnInit, OnDestroy {
    form: FormGroup;
    submitted = false;
    roles = [];
    private destroy$: Subject<void> = new Subject<void>();

    constructor(
        private fb: FormBuilder,
        private staffService: StaffService,
        private toaster: ToastrService,
        @Optional() private dialogRef: NbWindowRef<any>
    ) {}
    getRoles(name) {
        this.staffService
            .getRolesStaff()
            .pipe(takeUntil(this.destroy$))
            .subscribe((data) => (this.roles = data));
    }
    ngOnInit(): void {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(256)]],
            userName: ['', [Validators.required, Validators.maxLength(256)]],
            roles: [[], [Validators.required]],
            password: ['', Validators.required],
            passwordConfirmation: ['', Validators.required],
        });
    }
    generatePassword() {
        const password = GeneratePassword();
        this.form.controls['password'].setValue(password);
        this.form.controls['passwordConfirmation'].setValue(password);
    }

    onSubmit() {
        this.submitted = true;
        if (this.form.valid) {
            this.staffService
                .createStaff({ ...this.form.value })
                .pipe(takeUntil(this.destroy$))
                .subscribe((data) => {
                    this.toaster.success('Успешно создано!');
                    this.dialogRef.close('create');
                });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
