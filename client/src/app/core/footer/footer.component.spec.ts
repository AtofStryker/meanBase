import { FooterComponent } from './footer.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('FooterComponent', function () {
  let de: DebugElement;
  let comp: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(()  => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    }).compileComponents().then(() => {
    	fixture = TestBed.createComponent(FooterComponent);
    	comp = fixture.componentInstance;
   		de = fixture.debugElement.query(By.css('div.footerText'));
    });
  }));

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected content text', () => {
    fixture.detectChanges();
    const content = de.nativeElement;
    expect(content.innerText).toEqual("Some configurable footer text");
  });
});
