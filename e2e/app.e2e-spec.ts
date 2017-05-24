import { FirtobjPage } from './app.po';

describe('firtobj App', () => {
  let page: FirtobjPage;

  beforeEach(() => {
    page = new FirtobjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
