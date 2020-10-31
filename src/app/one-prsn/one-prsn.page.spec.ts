import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnePrsnPage } from './one-prsn.page';

describe('OnePrsnPage', () => {
  let component: OnePrsnPage;
  let fixture: ComponentFixture<OnePrsnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePrsnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnePrsnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
