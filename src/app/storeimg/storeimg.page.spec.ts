import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreimgPage } from './storeimg.page';

describe('StoreimgPage', () => {
  let component: StoreimgPage;
  let fixture: ComponentFixture<StoreimgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreimgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreimgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
