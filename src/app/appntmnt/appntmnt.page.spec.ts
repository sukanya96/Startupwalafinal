import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppntmntPage } from './appntmnt.page';

describe('AppntmntPage', () => {
  let component: AppntmntPage;
  let fixture: ComponentFixture<AppntmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppntmntPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppntmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
