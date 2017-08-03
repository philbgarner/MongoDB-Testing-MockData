load("./testing/helperMethods.js");

// Simple query: pulls the documents by a single criterion.
print ("Test query: date_created < 365 days before today, limit 10.");

var cursor = db.products.find(
    {
        date_updated: { $gte: AddDays(new Date(), -365) } 
    }
).limit(10);

cursor.forEach(function (doc) {
   print(doc.barcode, doc.company_id, doc.date_created, doc.date_updated); 
});

// More complicated, uses a $where clause to refer to a value in another field.
// Where clause can't take advantage of indices, if these queries are common rethink document schema.
print ("Test query: date_updated < 60 days after date_created");


var cursor = db.products.find(
    {
        $where: function () {
            
                function AddDays(date, days) {
                    var result = new Date(date);
                    result.setDate(result.getDate() + days);
                    return result;
                }
           
            return (this.date_updated < AddDays(this.date_created, 60)) }
    }
);


cursor.forEach(function (doc) {
   print(doc.barcode, doc.company_id, doc.date_created, doc.date_updated); 
});