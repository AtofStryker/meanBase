import { browser, element, by } from 'protractor';

describe('Test Form Submit', function () {

  beforeEach(function () {
    browser.get('');
  });

  it('should submit form and display data', function () {
  	var formValues = {
  		firstName : 'firstNameProtractor',
  		lastName : 'lastNameProtractor',
  		address : 'addressProtractor',
  		company : 'companyProtractor'
  	}
    element(by.css("input[formControlName=firstName]")).sendKeys(formValues.firstName);
    element(by.css("input[formControlName=lastName]")).sendKeys(formValues.lastName);
    element(by.css("input[formControlName=address]")).sendKeys(formValues.address);
    element(by.css("input[formControlName=company]")).sendKeys(formValues.company);
    element(by.css("button[id='addUserSubmit")).click().then(() =>{
    	setTimeout(()=>{
    		expect(element(by.name("firstName")).getText()).toEqual(formValues.firstName);
    		expect(element(by.name("lastName")).getText()).toEqual(formValues.lastName);
    		expect(element(by.name("address")).getText()).toEqual(formValues.company);
    		expect(element(by.name("company")).getText()).toEqual(formValues.firstName);
    	}, 5000);
    });

  });

});
