const I = actor();

Given(/^I am on test site$/, async () => {
  I.amOnPage('/');
});

When(/^I open OneTrust banner$/, async () => {
  I.click({ css: 'button#onetrust-pc-btn-handler.cookie-setting-link' });
  I.wait(2);
});

When(/^I see the banner is visually correct$/, async () => {
  I.eyeCheck({ testName: 'One Trust', element: 'div#onetrust-pc-sdk' });
});
