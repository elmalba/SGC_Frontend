import { InnovaColegiosPage } from './app.po';

describe('innova-colegios App', function() {
  let page: InnovaColegiosPage;

  beforeEach(() => {
    page = new InnovaColegiosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
