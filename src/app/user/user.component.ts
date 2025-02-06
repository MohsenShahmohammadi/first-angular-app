import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:{
    id:string;
    avatar:string;
    name:string;
  };
@Output() select=new EventEmitter();

  onSelected() {
this.select.emit(this.user.id);
  }
  get imagePath(){
    return 'assets/users/'+this.user.avatar
  }
}
