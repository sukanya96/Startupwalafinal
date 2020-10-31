import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GstFilingsPage } from './gst-filings.page';

describe('GstFilingsPage', () => {
  let component: GstFilingsPage;
  let fixture: ComponentFixture<GstFilingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstFilingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GstFilingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
