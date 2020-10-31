import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GstRegPage } from './gst-reg.page';

describe('GstRegPage', () => {
  let component: GstRegPage;
  let fixture: ComponentFixture<GstRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstRegPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GstRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
