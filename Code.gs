function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Page Navigation');
}

function loadPage(pageName) {
  var htmlOutput = HtmlService.createHtmlOutputFromFile(pageName)
    .getContent();
  return htmlOutput;
}
