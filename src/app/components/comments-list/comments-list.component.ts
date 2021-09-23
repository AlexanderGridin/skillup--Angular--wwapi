import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css'],
})
export class CommentsListComponent {
  @Input() public comments!: Comment[];
}
