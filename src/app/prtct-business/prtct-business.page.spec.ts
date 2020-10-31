import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrtctBusinessPage } from './prtct-business.page';

describe('PrtctBusinessPage', () => {
  let component: PrtctBusinessPage;
  let fixture: ComponentFixture<PrtctBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrtctBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrtctBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
