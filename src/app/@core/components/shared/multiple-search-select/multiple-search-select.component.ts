import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
    selector: 'ngx-multiple-search-select',
    templateUrl: './multiple-search-select.component.html',
    styleUrls: ['./multiple-search-select.component.scss'],
})
export class MultipleSearchSelectComponent implements OnInit, OnDestroy {
    @Output() searchEmit = new EventEmitter<string>();
    @Input() control: AbstractControl = new FormControl();
    @Input() type = 'multiple';
    @Input() size = 'large';
    @Input() placeholder: string;
    @Input() data;
    @Input() submitted = false;
    @Input() isRequired = true;
    @Input() isSearch = false;
    isLoading = false;

    private destroy$: Subject<void> = new Subject<void>();
    constructor() {}
    compareFn = (o1: any, o2: any) =>
        o1 && o2
            ? typeof o1 === 'object'
                ? o1.id === o2
                : +o1 === +o2
            : o1 === o2;

    onSearch(event) {
        this.searchEmit.emit(event);
    }

    ngOnInit(): void {
        this.control.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe((data) => {
                if (data === null) {
                    this.control.setValue('');
                }

                if (
                    Array.isArray(data) &&
                    data.some((item) => typeof item === 'object')
                ) {
                    this.control.setValue(data.map((item) => item.id));
                }
            });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
