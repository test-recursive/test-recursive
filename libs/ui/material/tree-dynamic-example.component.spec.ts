import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeDynamicComponent } from './tree-dynamic-example.component';

describe('TreeDynamicComponent', () => {
  let component: TreeDynamicComponent;
  let fixture: ComponentFixture<TreeDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeDynamicComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TreeDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
