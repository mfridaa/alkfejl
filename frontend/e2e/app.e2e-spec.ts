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
