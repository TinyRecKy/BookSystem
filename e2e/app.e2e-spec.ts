import { BookSystemPage } from './app.po';

describe('book-system App', () => {
  let page: BookSystemPage;

  beforeEach(() => {
    page = new BookSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
