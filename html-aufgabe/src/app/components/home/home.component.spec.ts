import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

import { UserService } from '../../services/user.service';
import { User } from '../../types/user-info';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  /**
    * Here, we set up a configured instance of the `UserService`.
    * Otherwise, `HomeComponent` will redirect with `router.navigate()` in
    * `ngOnInit` which will throw `[object ErrorEvent]` sometime later in 
    * the test run. In an unrelated test. Yay.
    **/
  let userService = new UserService();
  userService.setCurrentUser(new User('','','','',''));
  
  beforeEach(async(() => {    
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ RouterTestingModule ],
      providers: [
      {provide: UserService, useValue: userService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
