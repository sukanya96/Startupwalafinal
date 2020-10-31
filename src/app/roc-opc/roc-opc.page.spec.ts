import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RocOpcPage } from './roc-opc.page';

describe('RocOpcPage', () => {
  let component: RocOpcPage;
  let fixture: ComponentFixture<RocOpcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocOpcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RocOpcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
