import { LimetoolsReactiveFormsPage } from './app.po';

describe('limetools-reactive-forms App', () => {
  let page: LimetoolsReactiveFormsPage;

  beforeEach(() => {
    page = new LimetoolsReactiveFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
