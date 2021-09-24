import { Component, Input } from '@angular/core';

import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  @Input() public comment!: Comment;
}
