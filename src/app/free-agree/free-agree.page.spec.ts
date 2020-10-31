import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreeAgreePage } from './free-agree.page';

describe('FreeAgreePage', () => {
  let component: FreeAgreePage;
  let fixture: ComponentFixture<FreeAgreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeAgreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreeAgreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
