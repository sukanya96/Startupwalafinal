import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsoPage } from './iso.page';

describe('IsoPage', () => {
  let component: IsoPage;
  let fixture: ComponentFixture<IsoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
