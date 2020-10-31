import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RocLlpPage } from './roc-llp.page';

describe('RocLlpPage', () => {
  let component: RocLlpPage;
  let fixture: ComponentFixture<RocLlpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocLlpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RocLlpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
