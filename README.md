# README #

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b655c079dd3d41fda19c4d45e1256bb5)](https://app.codacy.com/app/DeIC/ddps-node?utm_source=github.com&utm_medium=referral&utm_content=deic-dk/ddps-node&utm_campaign=badger) [![Maintainability](https://api.codeclimate.com/v1/badges/1a97a8ffec0cf7105b85/maintainability)](https://codeclimate.com/github/deic-dk/ddps-node/maintainability)  [![Known Vulnerabilities](https://snyk.io/test/github/deic-dk/ddps-node/badge.svg)](https://snyk.io/test/github/deic-dk/ddps-node)

Endpoint api for the ddps client app. Built using [!jsonapi v1.0](http://jsonapi.org) specifications.

### App architecture? ###

A single NodeJS application running on the **ddps** server accesses both the remote InfluxDB database linked with fastnetmon (for querying only) and the local PostgreSQL db (for querying and performing CRUD operations). We chose NodeJS as this would allow for a single language over server and client side applications to manage information flow. Hence allowing for easy debugging and future scaling up.

We have a single node application to manage several instances of fastnetmon and connected InfluxDB instances and the single PostgreSQL rules database for all rules over all fastnetmon instances categorized over networks and IPs. 

The following line diagram shows the specific architecture that we have now for ddos gui.

![Application Overview](public/readme/app-overview.png)

Also, queries written in SQL are parsed and processed by the application for both PostgreSQL and InfluxDB. 
Thus the app provides the necessary API endpoints and services that are used by the client application.

Essentially, a single node app manages operations over *n-instances* of fastnetmon (and InfluxDB) and *1-instance* of the rules database implemented with PostgreSQL. The line diagram below shows the scaled version of the entire architecture.

![App Architecture : Scaled Up](public/readme/scaled.png)


### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
