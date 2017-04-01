import { CoreComponent } from './core.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CoreComponent', function () {
  let de: DebugElement;
  let comp: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async(()  => {
    TestBed.configureTestingModule({
      declarations: [ CoreComponent ],      
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]//currently not testing the router, only the component
    }).compileComponents().then(() => {
    	fixture = TestBed.createComponent(CoreComponent);
    	comp = fixture.componentInstance;
   		de = fixture.debugElement.query(By.css('div[id="content"]'));
    });
  }));

  it('should create component', () => expect(comp).toBeDefined() );

  it('should not have expected content text', () => {
    fixture.detectChanges();
    const content = de.nativeElement;
    expect(content.innerText).toEqual("");
  });
});
