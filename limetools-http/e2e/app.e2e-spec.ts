import { LimetoolsHttpPage } from './app.po';

describe('limetools-http App', () => {
  let page: LimetoolsHttpPage;

  beforeEach(() => {
    page = new LimetoolsHttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
