import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellTradePage } from './sell-trade.page';

describe('SellTradePage', () => {
  let component: SellTradePage;
  let fixture: ComponentFixture<SellTradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellTradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellTradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
