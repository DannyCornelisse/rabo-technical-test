import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show upload button', () => {
    page.navigateTo();
    const element = page.getElement('.upload-file__button');
    expect(element.isPresent()).toBeTruthy();
  });

  it('should show upload dialog when clicking upload button', () => {
    page.navigateTo();
    const buttonElement = page.getElement('.upload-file__button');
    buttonElement.click();
    const dialogElement = page.getElement('.upload-dialog__content');
    expect(dialogElement.isPresent()).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
