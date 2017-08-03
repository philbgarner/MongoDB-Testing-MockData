load("./testing/helperMethods.js");

function RandomProduct() {
    return {
        barcode: rndBarcode()
        ,company_id: rnd(500, 30000)
        ,desc_en: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penat"
        ,desc_fr: "Hoc inmaturo interitu ipse quoque sui pertaesus excessit e vita aetatis nono anno atque vicensimo cum quadriennio imperasset."
        ,date_created: rndDate(new Date(2008, 01, 01), new Date())
        ,date_updated: null
    };
}

db = connect("localhost:27017/test");
var numProducts = 100000

print ("Dropping products collection if it exists.");

db.products.drop()

print("Starting to load products...(" + numProducts + ")");
print(new Date());

for (i=0; i < numProducts; i++) {
    db.products.insert(RandomProduct());
}

print ("Finished load.")
print(new Date());

print ("Updating the date_updated to be >= date_created.")
print(new Date());

var cursor = db.products.find(
    { date_updated: null }
);

cursor.forEach(function (doc) {
    var date_created = doc.date_created;
    var id = doc._id;
    db.products.update(
        { _id: id }
        ,{
            $set: {
                date_updated: rndDate(date_created, new Date())
            }
        }
        ,{
            upsert: false // Do not insert a record if it didn't exist before.
        }
    );

});

print ("Finished update.");
print (new Date());
