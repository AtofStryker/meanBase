import { HeaderComponent } from './header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', function () {
  let de: DebugElement;
  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(()  => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    }).compileComponents().then(() => {
    	fixture = TestBed.createComponent(HeaderComponent);
    	comp = fixture.componentInstance;
   		de = fixture.debugElement.query(By.css('nav'));
    });
  }));

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have an existing navbar', () => {
    fixture.detectChanges();
    const content = de.nativeElement;
    expect(content).toBeDefined();
  });
});
