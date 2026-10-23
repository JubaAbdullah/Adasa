import { Component } from '@angular/core';
import { DescribeSection } from '../../../../shared/components/describe-section/describe-section';
import { ObjectComponent } from '../../../../shared/components/object/object';
import { Describe } from '../../../../models/articles.models';
import { describe } from '../../../../data/articles';

@Component({
  selector: 'app-object',
  imports: [DescribeSection, ObjectComponent],
  templateUrl: './object.html',
  styleUrl: './object.css',
})
export class Object {
  describe : Describe[] = describe;
}
