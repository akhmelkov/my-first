import { Component } from '@angular/core';
import { SelectComponent } from 'ng2-select';
import { ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})

export class CustomSelectComponent extends SelectComponent {
  constructor(element: ElementRef, sanitizer: DomSanitizer) {
      super(element, sanitizer)
  }
}
