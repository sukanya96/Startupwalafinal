import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReplyTradePage } from './reply-trade.page';

describe('ReplyTradePage', () => {
  let component: ReplyTradePage;
  let fixture: ComponentFixture<ReplyTradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyTradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReplyTradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
