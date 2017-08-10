import { GooglemapsPage } from './app.po';

describe('googlemaps App', () => {
  let page: GooglemapsPage;

  beforeEach(() => {
    page = new GooglemapsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
