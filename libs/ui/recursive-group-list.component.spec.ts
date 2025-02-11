import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecursiveGroupListComponent } from './recursive-group-list.component';

describe('RecursiveGroupListComponent', () => {
  let component: RecursiveGroupListComponent;
  let fixture: ComponentFixture<RecursiveGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecursiveGroupListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RecursiveGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
