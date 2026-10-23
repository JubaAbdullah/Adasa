import { Component } from '@angular/core';
import { ValueComponent } from '../../../../shared/components/value/value';
import { Value } from '../../../../models/articles.models';
import { values } from '../../../../data/articles';

@Component({
  selector: 'app-values',
  imports: [ValueComponent],
  templateUrl: './values.html',
  styleUrl: './values.css',
})
export class Values {
  values : Value[] = values;
}
