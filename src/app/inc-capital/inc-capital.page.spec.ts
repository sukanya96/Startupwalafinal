import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncCapitalPage } from './inc-capital.page';

describe('IncCapitalPage', () => {
  let component: IncCapitalPage;
  let fixture: ComponentFixture<IncCapitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncCapitalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncCapitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
