import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LmtdPage } from './lmtd.page';

describe('LmtdPage', () => {
  let component: LmtdPage;
  let fixture: ComponentFixture<LmtdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmtdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LmtdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
