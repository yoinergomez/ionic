import { AngularFeedbackPage } from './app.po';

describe('angular-feedback App', () => {
  let page: AngularFeedbackPage;

  beforeEach(() => {
    page = new AngularFeedbackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
