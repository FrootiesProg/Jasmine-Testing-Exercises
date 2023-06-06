describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // Initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should do something in someFunction()", function () {
    // Test code for someFunction
    // Make assertions to verify the expected behavior
  });

  afterEach(function () {
    // Teardown logic
    serverNameInput.value = ""; // Clean up the value of serverNameInput
  });
});
