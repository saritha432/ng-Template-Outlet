import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngTemplateOutlet';
  employeeDtls = [
    {
      Name :'Employee1',
      Role: 'Developer',
      skills :['Angular','JavaScript'],
      type:'Perminent'
    },
    {
      Name :'Employee2',
      Role: 'Developer',
      skills :['.Net','CSharp'],
      type:'Contract'
    },
    {
      Name :'Employee3',
      Role: 'Tester',
      skills :['Java','Selinium'],
      type:'Perminent'
    }
  ]
}


