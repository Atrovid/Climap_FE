import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}

// function changeNavBar(){

//     const elements = Array.from(document.getElementsByTagName("a"));
 
    
//     for(const a of elements){
//       console.log(location.hash);
//       if(a.getAttribute("href") == location.hash){
//         a.setAttribute("class","active");
//       }else{
//         a.setAttribute("class","inactive");
//       }
//   }

// }


// window.addEventListener("hashchange",()=>{
//   changeNavBar();
// },false,);
