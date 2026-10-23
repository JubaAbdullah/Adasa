import { Component, Input } from '@angular/core';
import { Value } from '../../../models/articles.models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-value-component',
  imports: [NgClass],
  templateUrl: './value.html',
  styleUrl: './value.css',
})
export class ValueComponent {
  @Input() value! : Value;
}
