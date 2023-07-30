import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent { 
    public solution(frank: any, sam: any, tom: any) : boolean {
    let check = 0;
    let check1 = 0;
    let check2 = 0;
  for (let m = 0; m < 4; m++) {
      let fr = 0;
      let sa = 0;
      let to = 0;
    for (let i = 0; i < frank.length; i++) {
      fr = fr + frank[i];
      sa = sa + sam[i];
      to = to + tom[i];
      console.log(fr, sa, to);
    };
    frank.shift();
    sam.shift();
    tom.shift();
    if ((fr > sa) && (fr > to)) {
      check++;
    } else if ((sa > fr) && (sa > to)) {check1++;} 
    else if ((to > fr) && (to > sa)) {check2++;};
    if (check == 2 || check1 == 2 || check2 == 2) break;
  };
  if (check == 2) {
    console.log ("true");
    return true;
  } else {console.log("false"); return false;}
};
}