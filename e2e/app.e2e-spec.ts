import { MyFirstPage } from './app.po';

describe('my-first App', () => {
  let page: MyFirstPage;

  beforeEach(() => {
    page = new MyFirstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
