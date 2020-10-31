import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChgaddrPage } from './chgaddr.page';

describe('ChgaddrPage', () => {
  let component: ChgaddrPage;
  let fixture: ComponentFixture<ChgaddrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChgaddrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChgaddrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
