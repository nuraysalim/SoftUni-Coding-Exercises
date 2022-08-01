function browserHistory(obj, array) {
  let tabs = obj;

  for (let index = 0; index < array.length; index++) {
    const tokens = array[index].split(" ");
    let command = tokens.shift();
    let site = tokens.join(" ");

    switch (command) {
      case "Open":
        tabs["Open Tabs"].push(site);
        tabs["Browser Logs"].push(`${command} ${site}`);
        break;
      case "Close":
        if (tabs["Open Tabs"].includes(site)) {
          let indexOfSite = tabs["Open Tabs"].indexOf(site);
          let closedTab = tabs["Open Tabs"].splice(indexOfSite, 1).join("");
          tabs["Recently Closed"].push(closedTab);
          tabs["Browser Logs"].push(`${command} ${site}`);
        }
        break;
      case "Clear":
        tabs["Open Tabs"] = [];
        tabs["Recently Closed"] = [];
        tabs["Browser Logs"] = [];
        break;
    }
  }

  for (const key in tabs) {
    if (key == "Browser Name") {
      console.log(tabs[key]);
      continue;
    }
    console.log(`${key}: ${tabs[key].join(", ")}`);
  }
}
browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
console.log("------------------");
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
