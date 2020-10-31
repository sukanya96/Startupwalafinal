import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MsmePage } from './msme.page';

describe('MsmePage', () => {
  let component: MsmePage;
  let fixture: ComponentFixture<MsmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsmePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MsmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
