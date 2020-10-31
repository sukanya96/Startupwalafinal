import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TradeRegPage } from './trade-reg.page';

describe('TradeRegPage', () => {
  let component: TradeRegPage;
  let fixture: ComponentFixture<TradeRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeRegPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TradeRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
