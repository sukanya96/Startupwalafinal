import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CpyrghtRegPage } from './cpyrght-reg.page';

describe('CpyrghtRegPage', () => {
  let component: CpyrghtRegPage;
  let fixture: ComponentFixture<CpyrghtRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpyrghtRegPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CpyrghtRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
