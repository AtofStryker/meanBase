# meanBase
starter app to develop Mongo, Express, Angular2, and Node

Currently using mean2.0 with Angular2, Node w/Express and mongoose, and mongoDB. Due to binaries with mongo being quite large,
this repository will not track the document database. I chose to keep the client and server separate (contrary to convention) because
most enterprise REST APIs could be maintained by a separate or different team. To modularize, it makes sense to keep the two separate.

Client side application contains sample e2e testing with protractor and minimal unit tests with karma. No unit tests in the
Rest API were developed, but in the future should be.

In future: 
Add Service Unit Tests
Work with Webpack for Angular2 to package sass files and build bundles
