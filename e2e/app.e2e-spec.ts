import { CyberaptorWebsitePage } from './app.po';

describe('cyberaptor-website App', function() {
  let page: CyberaptorWebsitePage;

  beforeEach(() => {
    page = new CyberaptorWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
