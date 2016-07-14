import { Ng2lalaPage } from './app.po';

describe('ng2lala App', function() {
  let page: Ng2lalaPage;

  beforeEach(() => {
    page = new Ng2lalaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
