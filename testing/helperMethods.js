function rnd(start, end) {
    Math.floor(Math.random() * (end - start + 1)) + start;
}

function rndBarcode() {
    var bc = "";
    for (var i=0; i < 14; i++) {
        var r = 
        bc += String.fromCharCode(r);
    }

    return bc;
}

function rndDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function AddDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}