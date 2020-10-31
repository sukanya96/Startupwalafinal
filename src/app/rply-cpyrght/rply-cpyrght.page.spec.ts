import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RplyCpyrghtPage } from './rply-cpyrght.page';

describe('RplyCpyrghtPage', () => {
  let component: RplyCpyrghtPage;
  let fixture: ComponentFixture<RplyCpyrghtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RplyCpyrghtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RplyCpyrghtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
