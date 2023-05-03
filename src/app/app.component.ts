import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'todo app';
  list:any[]=[]


  constructor(){
  
  this.loadListFromStorage()
  
  

}
  taskAdd(item:any){
     this.list.push({id:this.list.length,name:item.task,startDate:item.startDate,endDate:item.endDate
     })
   
    this.saveListToStorage()
     // sessionStorage.setItem('list', JSON.stringify(this.list));
  }


  removeTask(id:any)
  {   
    
    this.list=this.list.filter(item=>item.id!==id)
   this.saveListToStorage()
    // sessionStorage.setItem('list', JSON.stringify(this.list));
  }



  private loadListFromStorage() {
    const listString = sessionStorage.getItem('list');
    if (listString) {
      this.list = JSON.parse(listString);
    }
  }

  private saveListToStorage() {
    sessionStorage.setItem('list', JSON.stringify(this.list));
  }
}
