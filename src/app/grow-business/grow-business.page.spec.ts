import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrowBusinessPage } from './grow-business.page';

describe('GrowBusinessPage', () => {
  let component: GrowBusinessPage;
  let fixture: ComponentFixture<GrowBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrowBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
