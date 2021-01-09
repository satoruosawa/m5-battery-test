function setCount(sheet, val) {
  sheet.insertRows(2, 1);
  sheet.getRange(2, 1).setValue(new Date());
  sheet.getRange(2, 2).setValue(val);
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet 1');
  var params = JSON.parse(e.postData.getDataAsString());
  var val = params.count;
  setCount(sheet, val);

  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ message: "success!" }));

  return output;
}