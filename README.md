# MongoDB-Testing-MockData
Scripts for setting up mock data in a MongoDB test database.  Provides some example queries and some helper methods to provide commonly needed functionality (For example: DATEADD() SQL analogue is provided as AddDays() as a helper).

## Make Data Scripts
Sample scripts are provided to create simulated records of common data structures for later benchmarking or testing. (For Example: Product data, or user information).

## Test Data Scripts
Sample scripts are provided to query the mock data after it is built.

## Helper Methods
The helperMethods.js file has some methods that will assist with procedurally creating mock data (For example: Get a random date within a given range), and some methods that developers
coming from SQL might expect (For example: ```DATEADD()``` analogue is not available out of the box, I implemented my own ```AddDays()``` method).

## Executing Scripts
Clone this repository and then browse to the /scripts folder (or wherever it was extracted to) and then execute mongo.exe to connect to the server (server must be running and a test database is created).

If the working directory isn't the repository's (you can check from the mongo client with ```pwd()```) then it will fail to execute.

Execute the script from the mongo CLI client with the ```load();``` method (For example: ```load("./testing/makeData.js");```).