import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const app = new ChartComponent();
  let particleProperties = app.setParticleProperties();

  it('can make arrays from cigg and aqi values', () => {
    let value = app.getPosition();
    let array = app.getArray(value);
    expect(value == array.length).toBeTruthy();
  });
  it('particle css has top,left,z-index and animation properties', () => {
    let particleCSS = JSON.stringify(particleProperties);
    expect(particleCSS).toContain('top' && 'left' && 'z-index' && 'animation');
  });
  it('particle css has correct animation properties', () => {
    let animation = particleProperties.animation;
    let suspend = animation.split(' ')[0];
    expect(suspend).toContain('suspend');
    let suspendValue = Number(suspend.split('suspend')[1]);
    expect(suspendValue > 0 && suspendValue <= 4).toBeTruthy();
  });
  it('particle css property {top:'+particleProperties.top+'} is a percentage value greater than 0 and less than 100', () => {
    let top = particleProperties.top;
    expect(top).toContain('%');
    let topValue = Number(top.split('%')[0]);
    expect(topValue >= 0).toBeTruthy();
    expect(topValue).toBeLessThan(100);
  });
  it('particle css property {left:'+particleProperties.left+'} is a percentage value greater than 0 and less than 100', () => {
    let left = particleProperties.left;
    expect(left).toContain('%');
    let leftValue = Number(left.split('%')[0]);
    expect(leftValue >= 0).toBeTruthy();
    expect(leftValue).toBeLessThan(100);
  });
  it('particle css property {z-index:'+particleProperties['z-index']+'} is a value greater than 0 and less than 100', () => {
    let zIndex = particleProperties['z-index'];
    expect(zIndex >= 0).toBeTruthy();
    expect(zIndex).toBeLessThan(100);
  });


  
});
