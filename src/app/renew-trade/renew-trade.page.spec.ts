import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenewTradePage } from './renew-trade.page';

describe('RenewTradePage', () => {
  let component: RenewTradePage;
  let fixture: ComponentFixture<RenewTradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewTradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenewTradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
