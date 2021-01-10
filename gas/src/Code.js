function setCount(sheet, count, bt, connectionTrialCount) {
  sheet.insertRows(2, 1);
  sheet.getRange(2, 1).setValue(new Date());
  sheet.getRange(2, 2).setValue(count);
  sheet.getRange(2, 3).setValue(bt);
  sheet.getRange(2, 4).setValue(connectionTrialCount);
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet 1');
  var params = JSON.parse(e.postData.getDataAsString());
  var count = params.count;
  var bt = params.bt;
  var connectionTrialCount = params.connectionTrialCount;
  setCount(sheet, count, bt, connectionTrialCount);

  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ message: "success!" }));

  return output;
}