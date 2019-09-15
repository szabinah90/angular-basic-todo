import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkDeadline(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const deadlineSet = control.value;
        const currentDate = new Date().toISOString().split('T')[0];

        if (currentDate > deadlineSet) {
            control.setErrors({ checkDeadline: true });
            return { checkDeadline: true };
        } else {
          if (control.errors && control.errors.hasOwnProperty('checkDeadline')) {
            delete control.errors.checkDeadline;
          }
        }
        return null;
    };
}
