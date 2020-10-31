import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublcLmtdPage } from './publc-lmtd.page';

describe('PublcLmtdPage', () => {
  let component: PublcLmtdPage;
  let fixture: ComponentFixture<PublcLmtdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublcLmtdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublcLmtdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
