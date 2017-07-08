import { LimetoolsPage } from './app.po';

describe('limetools App', () => {
  let page: LimetoolsPage;

  beforeEach(() => {
    page = new LimetoolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
