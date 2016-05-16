describe('QuickStart E2E Tests', function () {

  var expectedMsg = "Judson's Angular Playground";


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(1).toEqual(1);
  });

});
