import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClosurePage } from './closure.page';

describe('ClosurePage', () => {
  let component: ClosurePage;
  let fixture: ComponentFixture<ClosurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClosurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
