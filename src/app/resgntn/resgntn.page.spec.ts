import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResgntnPage } from './resgntn.page';

describe('ResgntnPage', () => {
  let component: ResgntnPage;
  let fixture: ComponentFixture<ResgntnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgntnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResgntnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
