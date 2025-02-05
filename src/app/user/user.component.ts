import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) id!:string;
  @Input({required:true}) avatar!:String;
@Input({required:true}) name!:String;
@Output() select=new EventEmitter();

  onSelected() {
this.select.emit(this.id);
  }
  get imagePath(){
    return 'assets/users/'+this.avatar
  }
}
