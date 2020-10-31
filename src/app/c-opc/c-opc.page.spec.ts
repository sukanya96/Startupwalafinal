import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { COpcPage } from './c-opc.page';

describe('COpcPage', () => {
  let component: COpcPage;
  let fixture: ComponentFixture<COpcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COpcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(COpcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
