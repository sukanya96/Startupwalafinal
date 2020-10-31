import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LicenseTradePage } from './license-trade.page';

describe('LicenseTradePage', () => {
  let component: LicenseTradePage;
  let fixture: ComponentFixture<LicenseTradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseTradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseTradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
