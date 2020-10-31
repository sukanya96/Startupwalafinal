import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartnershipPage } from './partnership.page';

describe('PartnershipPage', () => {
  let component: PartnershipPage;
  let fixture: ComponentFixture<PartnershipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnershipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartnershipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
