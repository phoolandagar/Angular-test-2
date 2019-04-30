import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

   services=[
       
          { title:'Create your own template',title1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
,{
  title:"Automatic Backup Data",title1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
},
{
  title:"Page Builder",title1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
},
{
  title:"Watch tutorial",title1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
},

{
  title:"Help &amp; Support",title1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
},
{
  title:"Lots of features",title1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
},


   ]



  constructor() { }

  ngOnInit() {
  }

}
