import { NgLalaPage } from './app.po';

describe('migration-project App', function() {
  let page: NgLalaPage;

  beforeEach(() => {
    page = new NgLalaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
