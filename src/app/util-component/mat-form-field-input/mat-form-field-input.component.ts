import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mat-form-field-input',
  templateUrl: './mat-form-field-input.component.html',
  styleUrls: ['./mat-form-field-input.component.scss']
})
export class MatFormFieldInputComponent implements OnInit
{

  
  
  @Input()
  value: string = '';

  @Output()
  valueOutput: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder: string = '';

  @Input()
  appearance: number = 0;

  @Input()
  width: number = 40;

  @Input()
  label: string = '';
  
  @Input()
  required: boolean = false;

  @Input()
  autoResize: boolean = false;
  
  @Input()
  disable: boolean = false;

  @Input()
  showVisibleSwitch: boolean = true;

  @Input()
  showCopyToClipboard: boolean = true;

  @Input()
  showGenerateValue: boolean = true;

  //input copy
  @Input()
  copyDisplayMessage: string = this.value;

  //switch
  @Input()
  switchVisibility: boolean = true;

  @Input()
  defaultType: string = 'text';

  @Input()
  switchType: string = 'password';

  @Input()
  onIcon: string = 'visibility';

  @Input()
  offIcon: string = 'visibility_off';

  constructor() { }

  ngOnInit() {
  }

  emitValue(): void
  {
    this.valueOutput.emit(this.value);
  }

  clear(): void
  {
    this.value = '';
    this.valueOutput.emit(this.value);
  }

  getSize(data: string): number
  {
    if(!this.autoResize)
      return this.width;

    if(data.length <= 10)
      return this.width;
    else
      return data.length + 20;
  }
}
