import { AngularblogPage } from './app.po';

describe('angularblog App', function() {
  let page: AngularblogPage;

  beforeEach(() => {
    page = new AngularblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
