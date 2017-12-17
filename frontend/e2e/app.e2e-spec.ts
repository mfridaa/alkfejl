import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

async function getPath() {
    return new URL(await browser.getCurrentUrl()).pathname;
}

describe('alkfejl-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


    beforeEach(() => {
        browser.get('/orders/0');
    });
    
   it('should be able to navigate to order/0', () => {
       expect(getPath()).toEqual('/order/0');

    });

    beforeEach(() => {
        browser.get('/product');
    });
    
   it('should be able to navigate to the products', () => {
       expect(getPath()).toEqual('/product');

    });

    beforeEach(() => {
        browser.get('registration');
    });
    
   it('should be able to navigate to registration', () => {
       expect(getPath()).toEqual('/registration');

    });

    // it('should makea registration', () => {
    //     element(by.css('input[type="username"]')).sendKeys('try');
    //     element(by.css('input[type="password"]')).sendKeys('try');
    //     element(by.css('input[type="button"]')).click();
    //     expect(getPath()).toEqual('/login');
    // });

      beforeEach(() => {
        browser.get('/orders');
    });
    
   it('should be able to navigate to orders', () => {
       expect(getPath()).toEqual('/orders');

    });



  beforeEach(() => {
        browser.get('/login');
    });
    
  it('should be able to navigate to login', () => {
        expect(getPath()).toEqual('/login');
    });

    //rossz login
    it('should fail to log in for invalid credentials', () => {
        element(by.css('input[type="username"]')).sendKeys('invaliduser');
        element(by.css('input[type="password"]')).sendKeys('invalidpassword');
        element(by.css('input[type="button"]')).click();
        expect(getPath()).toEqual('/');
    });

    //jo login
    it('should log in', () => {
        element(by.css('input[type="username"]')).sendKeys('bla');
        element(by.css('input[type="password"]')).sendKeys('blabla');
        element(by.css('input[type="button"]')).click();
        expect(getPath()).toEqual('/login');
    });

   

});
