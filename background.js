chrome.commands.onCommand.addListener((command) => {
  if (command === "open_bookmark_manager") {
    chrome.tabs.create({ url: "file:///Directory/Path/index.html" });
  }
});
