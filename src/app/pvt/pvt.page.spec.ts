import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PvtPage } from './pvt.page';

describe('PvtPage', () => {
  let component: PvtPage;
  let fixture: ComponentFixture<PvtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PvtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
