import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.css'],
})
export class PageSectionComponent {
  @Input() public title!: string;
}
