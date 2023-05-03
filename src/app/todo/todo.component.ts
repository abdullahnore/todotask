import { Component,Input ,Output ,EventEmitter,OnInit} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  implements OnInit{
  @Input()list:any;
  @Output() removeTask=new EventEmitter<any>();
  constructor(){

  }
  ngOnInit(): void {
 

  }
  remove(id:any)
  {
     console.log(id)
   
    this.removeTask.emit(id)
  }

}
