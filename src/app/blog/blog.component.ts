import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

blogs =[ {image: "./assets/images/person1.jpg",title:"Building the Mention Sales Application on Unapp",
title2:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life", date:"May 12, 2018", name:"by Dev Miller"

},

  {image: "./assets/images/person2.jpg",title:"Building the Mention Sales Application on Unapp",
title2:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life", date:"May 12, 2018", name:"by Dev Miller"

},
  {image: "./assets/images/person3.jpg",title:"Building the Mention Sales Application on Unapp",
title2:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life", date:"May 12, 2018", name:"by Dev Miller"
},
{image: "./assets/images/person4.jpg",title:"Building the Mention Sales Application on Unapp",
title2:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life", date:"May 12, 2018", name:"by Dev Miller"
},
{image: "./assets/images/person5.jpg",title:"Building the Mention Sales Application on Unapp",
title2:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life", date:"May 12, 2018", name:"by Dev Miller"
},
{image: "./assets/images/person6.jpg",title:"Building the Mention Sales Application on Unapp",
title2:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life", date:"May 12, 2018", name:"by Dev Miller"
},
]


  constructor() { }

  ngOnInit() {
  }

}
