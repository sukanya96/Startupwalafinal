import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgtPage } from './forgt.page';

describe('ForgtPage', () => {
  let component: ForgtPage;
  let fixture: ComponentFixture<ForgtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
