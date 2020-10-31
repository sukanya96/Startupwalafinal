import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RocReturnPage } from './roc-return.page';

describe('RocReturnPage', () => {
  let component: RocReturnPage;
  let fixture: ComponentFixture<RocReturnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocReturnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RocReturnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
