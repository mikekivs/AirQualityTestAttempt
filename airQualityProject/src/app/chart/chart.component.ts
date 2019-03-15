import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() city:any;

  constructor() {
  }

  ngOnInit() {

  }

  getArray(num){
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push('');    
    }
    return arr;
  }


  setParticleProperties(){  
    let myStyles = {
    'top':this.getPosition()+'%',
    'left':this.getPosition()+'%',
    'z-index':this.getPosition(),
    'animation':'suspend'+this.getAnimation()+' 10s '+this.getAnimation()+'s infinite'
    }
    return myStyles;
  }
  getPosition(){
    return Math.floor(Math.random() * 99);
  }
  getScale(){
    return (Math.floor(Math.random() * 30)/10);
  }  
  getAnimation(){
    return (Math.floor(Math.random() * 4)+1);
  }

}
