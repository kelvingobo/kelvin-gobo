import { KgAppPage } from './app.po';

describe('kg-app App', () => {
  let page: KgAppPage;

  beforeEach(() => {
    page = new KgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
