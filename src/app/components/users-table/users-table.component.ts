import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { User } from 'src/app/interfaces/user/user';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  encapsulation: ViewEncapsulation.None, //TODO: Clarify this point
})
export class UsersTableComponent {
  @Input() users!: User[];

  private selectedUser!: User;

  public headerCellClass: {} = { 'users-table__header-cell': true };
  public bodyCellClass: {} = { 'users-table__body-cell': true };

  @Output() private onSelectUserByDblclick: EventEmitter<User> =
    new EventEmitter<User>();

  public handleKendoCellClick({ dataItem }: { dataItem: User }): void {
    this.selectedUser = dataItem;
  }

  public handleKendoGridDoubleClick(): void {
    console.log(this.selectedUser);
    this.onSelectUserByDblclick.emit(this.selectedUser);
  }
}
