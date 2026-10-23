import { Component, Input } from '@angular/core';
import { Describe } from '../../../models/articles.models';

@Component({
  selector: 'app-describe-section',
  imports: [],
  templateUrl: './describe-section.html',
  styleUrl: './describe-section.css',
})
export class DescribeSection {
  @Input() describe ! : Describe;
}
