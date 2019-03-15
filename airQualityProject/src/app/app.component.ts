import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  inputDescription:string = 'Select your city';
  categoryLabel:string = 'Category';
  changeLanguageLabel:string = 'भाषा बदलो';
  buttonLabel:string = 'Check Air Quality';
  formLabel:string = 'Select your city to check air quality';
  compareLabel:string = 'Compare city';
  response:any;
  cities:any = [];
  language:string='en';
  inputControl = new FormControl();
  filteredOptions: Observable<string[]>;
  selectedCity:any;
  compareCity:any;
  compare:boolean = false;
  
  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.getData();
    this.filterCities();
  }

  public switchLanguage(){
    if(this.language == 'en'){
      this.language = 'hi';
      this.inputDescription = 'अपने शहर का चयन करें';
      this.categoryLabel = 'वर्ग';
      this.changeLanguageLabel = 'Change language';
      this.buttonLabel = 'वायु की गुणवत्ता की जाँच करें';
      this.formLabel = 'वायु गुणवत्ता जांचने के लिए अपने शहर का चयन करें';
      this.compareLabel = 'शहर की तुलना करें';
    }else{
      this.language = 'en';
      this.inputDescription = 'Select you city';
      this.categoryLabel = 'Category';
      this.changeLanguageLabel = 'भाषा बदलो';
      this.buttonLabel = 'Check Air Quality';
      this.formLabel = 'Select your city to check air quality';
      this.compareLabel = 'Compare city';
    }
    this.getData();
    this.inputControl.reset();
  }

  private getData(): void {
      this.cities = [];
      this.dataService.getData(this.language).subscribe(data => {
        this.response = data;
        this.getCities();
      });
  }

  private getCities(){
    let responseKeys = Object.getOwnPropertyNames(this.response);
    let count = 1;
    let tempCity = {id:null,name:'',aqi:'',cigg:''}
    let name=''; let aqi = ''; let cigg = '';
    responseKeys.forEach(key => {
      if(key.match('compare-tabs_1_city') !== null){
        if(key.match('name') !== null){name = this.response[key]}
        if(key.match('_aqi') !== null){aqi = this.response[key]}
        if(key.match('_cigg') !== null){cigg = this.response[key]}
        tempCity = {id:this.cities.length,name:name,aqi:aqi,cigg:cigg}
        if(count%3 == 0){
          this.cities.push(tempCity);
          tempCity = {id:null,name:'',aqi:'',cigg:''};
        }
        count++;
      }
    });
  }
  public filterCities(){
    this.filteredOptions = this.inputControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  
  private _filter(value: string = ''): string[] {
    if(value != null){
      const filterValue = value.toLowerCase();
      return this.cities.filter(city => city.name.toLowerCase().includes(filterValue));
    }
  }

  public addSmoke(title){
    let text = title.split(':')
    let particles = '';
    for (let i = 0; i <= 9; i++) {
      particles += '<span class="s'+i+'"></span>';
    }
    return text[0]+':<span class="pre-smoke"><span class="smoke">'+particles+'</span><br/></span>'+text[1];
  }
  public selectCity(option){
    if(this.compare){
      this.compareCity = this.cities[option];
    }else{
      this.selectedCity = this.cities[option];
    }
  }
  public clearCompareCity(){
    if(this.compareCity){
      this.compareCity = null;
    }
  }



}
