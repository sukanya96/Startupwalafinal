import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CLlpPage } from './c-llp.page';

describe('CLlpPage', () => {
  let component: CLlpPage;
  let fixture: ComponentFixture<CLlpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLlpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CLlpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
