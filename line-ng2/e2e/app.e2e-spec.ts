import { LineNg2Page } from './app.po';

describe('line-ng2 App', function() {
  let page: LineNg2Page;

  beforeEach(() => {
    page = new LineNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
