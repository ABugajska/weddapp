import { WedlistPage } from './app.po';

describe('wedlist App', () => {
  let page: WedlistPage;

  beforeEach(() => {
    page = new WedlistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
