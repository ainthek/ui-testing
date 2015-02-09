


# ui-testing

Experiments and reviews of various ui testing frameworks

## How this repo was setup
  
	mkdir ui-testing
	cd ui-testing

	echo '{ name:ui-testing}' > package.json

	npm install --save selenium-webdriver
	npm install --save wd
	npm install --save webdriverio
	npm install --save nightwatch
	npm install --save karma
	npm install --save intern


	git remote add origin https://github.com/ainthek/ui-testing.git

	echo node_modules > .gitignore

# Basic info

Texts come from their web sites 

## selenium-webdriver
The official WebDriver JavaScript bindings from the Selenium project

- <https://www.npmjs.com/package/selenium-webdriver>
- <https://code.google.com/p/selenium/>


## wd
WebDriver/Selenium 2 node.js client

- <https://www.npmjs.com/package/wd>

## webdriverio
Selenium 2.0 bindings for NodeJS

Most of the Selenium WebDriver Wire Protocol is already implemented and wraped in useful commands.

Adding helper functions, or more complicated sets and combi-
nations of existing commands is simple and really useful

WebdriverIO works in combination with most of the TDD and BDD test frameworks in the JavaScript world.


- <https://www.npmjs.com/package/webdriverio>
- <http://webdriver.io>

## nightwatch
A node.js bindings implementation for selenium 2.0/webdriver

UI automated testing framework powered by Node.js. It uses the Selenium WebDriver API.

- <https://www.npmjs.com/package/nightwatch>

## karma
Spectacular Test Runner for JavaScript.

A simple tool that allows you to execute JavaScript code in multiple real browsers.

The main purpose of Karma is to make your TDD development easy, fast, and fun


## intern

Intern. A next-generation code testing stack for JavaScript.

Intern is a complete test stack for JavaScript designed to help you write and run consistent, 
high-quality test cases for your JavaScript libraries and applications.
It can be used to test any JavaScript code. 

Its functional testing capabilities can even be used to test non-JavaScript Web and mobile apps, if you really want.

- <http://theintern.io>
- <https://www.npmjs.com/package/intern>



## NPM Stats

generated Mon Feb  9 10:08:58 CEST 2015

|module| downloads in the last month | 
|------|-----------------------------|
|selenium-webdriver|374945|
|webdriverio|7539|
|wd|89427|
|nightwatch|26239|
|karma|779799|
|intern|7826|

## Modules used

### intern
<div>
|name|version|description|path|
|----|-------|-----------|----|
|[chai](http://chaijs.com)|1.9.1|BDD/TDD assertion library for node.js and the browser. Test framework agnostic.|./node_modules/chai/package.json|
|[charm](https://github.com/substack/node-charm)|0.2.0|ansi control sequences for terminal cursor hopping and colors|./node_modules/charm/package.json|
|[diff](https://github.com/kpdecker/jsdiff)|1.1.0|A javascript text diff implementation.|./node_modules/diff/package.json|
|[digdug](http://github.com/theintern/digdug)|1.2.1|Dig Dug. A simple abstraction library for downloading and launching WebDriver service tunnels.|./node_modules/digdug/package.json|
|[dojo](http://dojotoolkit.org/)|2.0.0-dev|Dojo core is a powerful, lightweight library that makes common tasks quicker and easier. Animate elements, manipulate the DOM, and query with easy CSS syntax, all without sacrificing performance.|./node_modules/dojo/package.json|
|[istanbul](https://github.com/gotwarlost/istanbul)|0.2.16|Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests |./node_modules/istanbul/package.json|
|[leadfoot](http://github.com/theintern/leadfoot)|1.2.1|Leadfoot. A JavaScript client library that brings cross-platform consistency to the Selenium WebDriver API.|./node_modules/leadfoot/package.json|
|[nodemod]()|||./node_modules/dojo/tests-doh/resources/nodemod/package.json|
|[source-map](https://github.com/mozilla/source-map)|0.1.33|Generates and consumes source maps|./node_modules/source-map/package.json|
</div>
### karma
<div>
|name|version|description|path|
|----|-------|-----------|----|
|[chokidar](https://github.com/paulmillr/chokidar)|0.12.6|A neat wrapper around node.js fs.watch / fs.watchFile / fsevents.|./node_modules/chokidar/package.json|
|[colors](https://github.com/Marak/colors.js)|0.6.2|get colors in your node.js console like what|./node_modules/colors/package.json|
|[connect](https://github.com/senchalabs/connect)|2.26.6|High performance middleware framework|./node_modules/connect/package.json|
|[di]()|0.0.1|Dependency Injection for Node.js. Heavily inspired by AngularJS.|./node_modules/di/package.json|
|[glob](https://github.com/isaacs/node-glob)|3.2.11|a little globber|./node_modules/glob/package.json|
|[graceful-fs](https://github.com/isaacs/node-graceful-fs)|2.0.3|A drop-in replacement for fs, making various improvements.|./node_modules/graceful-fs/package.json|
|[http-proxy-examples]()|0.0.0|packages required to run the examples|./node_modules/http-proxy/examples/package.json|
|[http-proxy](https://github.com/nodejitsu/node-http-proxy)|0.10.4|A full-featured http reverse proxy for node.js|./node_modules/http-proxy/package.json|
|[lodash](http://lodash.com/)|2.4.1|A utility library delivering consistency, customization, performance, & extras.|./node_modules/lodash/package.json|
|[log4js](https://github.com/nomiddlename/log4js-node)|0.6.22|Port of Log4js to work with node.|./node_modules/log4js/package.json|
|[mime](https://github.com/broofa/node-mime)|1.2.11|A comprehensive library for mime-type mapping|./node_modules/mime/package.json|
|[minimatch](https://github.com/isaacs/minimatch)|0.2.14|a glob matcher in javascript|./node_modules/minimatch/package.json|
|[optimist](https://github.com/substack/node-optimist)|0.6.1|Light-weight option parsing with an argv hash. No optstrings attached.|./node_modules/optimist/package.json|
|[q](https://github.com/kriskowal/q)|0.9.7|A library for promises (CommonJS/Promises/A,B,D)|./node_modules/q/package.json|
|[rimraf](https://github.com/isaacs/rimraf)|2.2.8|A deep deletion module for node (like `rm -rf`)|./node_modules/rimraf/package.json|
|[socket.io](http://socket.io)|0.9.16|Real-time apps made cross-browser & easy with a WebSocket-like API|./node_modules/socket.io/package.json|
|[source-map](https://github.com/mozilla/source-map)|0.1.43|Generates and consumes source maps|./node_modules/source-map/package.json|
|[useragent](https://github.com/3rd-Eden/useragent)|2.0.10|Fastest, most accurate & effecient user agent string parser, uses Browserscope's research for parsing|./node_modules/useragent/package.json|
</div>
### nightwatch
<div>
|name|version|description|path|
|----|-------|-----------|----|
|[ejs](https://github.com/visionmedia/ejs)|0.8.8|Embedded JavaScript templates|./node_modules/ejs/package.json|
|[grunt](http://gruntjs.com/)|0.4.5|The JavaScript Task Runner|./node_modules/grunt/package.json|
|[minimatch](https://github.com/isaacs/minimatch)|0.2.14|a glob matcher in javascript|./node_modules/minimatch/package.json|
|[mkpath](https://github.com/jrajav/mkpath)|0.1.0|Make all directories in a path, like mkdir -p|./node_modules/mkpath/package.json|
|[optimist](https://github.com/substack/node-optimist)|0.6.1|Light-weight option parsing with an argv hash. No optstrings attached.|./node_modules/optimist/package.json|
</div>
### selenium-webdriver
<div>
|name|version|description|path|
|----|-------|-----------|----|
|[adm-zip](http://github.com/cthackers/adm-zip)|0.4.4|A Javascript implementation of zip for nodejs. Allows user to create or extract zip files both in memory or to/from disk|./node_modules/adm-zip/package.json|
|[tmp](http://github.com/raszi/node-tmp)|0.0.24|Temporary file and directory creator|./node_modules/tmp/package.json|
|[xml2js](https://github.com/Leonidas-from-XIV/node-xml2js)|0.4.4|Simple XML to JavaScript object converter.|./node_modules/xml2js/package.json|
</div>
### wd
<div>
|name|version|description|path|
|----|-------|-----------|----|
|[archiver](https://github.com/ctalkington/node-archiver)|0.12.0|a streaming interface for archive generation|./node_modules/archiver/package.json|
|[async](https://github.com/caolan/async)|0.9.0|Higher-order functions and common patterns for asynchronous code|./node_modules/async/package.json|
|[lodash](http://lodash.com/)|2.4.1|A utility library delivering consistency, customization, performance, & extras.|./node_modules/lodash/package.json|
|[q](https://github.com/kriskowal/q)|1.0.1|A library for promises (CommonJS/Promises/A,B,D)|./node_modules/q/package.json|
|[request](https://github.com/mikeal/request)|2.46.0|Simplified HTTP request client.|./node_modules/request/package.json|
|[underscore.string](http://epeli.github.com/underscore.string/)|2.3.3|String manipulation extensions for Underscore.js javascript library.|./node_modules/underscore.string/package.json|
|[vargs]()|0.1.0|practical variable argument handling|./node_modules/vargs/package.json|
</div>
### webdriverio
<div>
|name|version|description|path|
|----|-------|-----------|----|
|[archiver](https://github.com/ctalkington/node-archiver)|0.6.1|Creates Archives (ZIP) via Node Streams.|./node_modules/archiver/package.json|
|[async](https://github.com/caolan/async)|0.9.0|Higher-order functions and common patterns for asynchronous code|./node_modules/async/package.json|
|[chainit](https://github.com/vvo/chainit)|2.1.1|Turn an asynchronous JavaScript api into an asynchronous chainable JavaScript api.|./node_modules/chainit/package.json|
|[css-parse](https://github.com/visionmedia/css-parse)|1.7.0|CSS parser|./node_modules/css-parse/package.json|
|[css-value]()|0.0.1|CSS value parser|./node_modules/css-value/package.json|
|[deepmerge](https://github.com/nrf110/deepmerge)|0.2.7|A library for deep (recursive) merging of Javascript objects|./node_modules/deepmerge/package.json|
|[pragma-singleton](https://github.com/pragma-dudes/pragma-singleton)|1.0.3|Singleton design pattern implementation which easy to use|./node_modules/pragma-singleton/package.json|
|[q](https://github.com/kriskowal/q)|1.1.2|A library for promises (CommonJS/Promises/A,B,D)|./node_modules/q/package.json|
|[request](https://github.com/mikeal/request)|2.34.0|Simplified HTTP request client.|./node_modules/request/package.json|
|[rgb2hex](https://github.com/christian-bromann/rgb2hex)|0.1.0|lightweight rgb/rgba to hex parser|./node_modules/rgb2hex/package.json|
|[url](https://github.com/defunctzombie/node-url)|0.10.2|The core `url` packaged standalone for use with Browserify.|./node_modules/url/package.json|
|[wgxpath](https://github.com/jacobmarble/node-wgxpath)|0.23.0|Wicked Good XPath|./node_modules/wgxpath/package.json|
</div>

## Matrix

|index|intern|karma|nightwatch|selenium-webdriver|wd|webdriverio|
|-----|--------------|-------------|------------------|--------------------------|----------|-------------------|
|adm-zip|n/a|n/a|n/a|X|n/a|n/a|
|archiver|n/a|n/a|n/a|n/a|X|X|
|async|n/a|n/a|n/a|n/a|X|X|
|colors|n/a|X|n/a|n/a|n/a|n/a|
|connect|n/a|X|n/a|n/a|n/a|n/a|
|css-parse|n/a|n/a|n/a|n/a|n/a|X|
|css-value|n/a|n/a|n/a|n/a|n/a|X|
|deepmerge|n/a|n/a|n/a|n/a|n/a|X|
|di|n/a|X|n/a|n/a|n/a|n/a|
|diff|X|n/a|n/a|n/a|n/a|n/a|
|digdug|X|n/a|n/a|n/a|n/a|n/a|
|dojo|X|n/a|n/a|n/a|n/a|n/a|
|ejs|n/a|n/a|X|n/a|n/a|n/a|
|examples|n/a|X|n/a|n/a|n/a|n/a|
|glob|n/a|X|n/a|n/a|n/a|n/a|
|graceful-fs|n/a|X|n/a|n/a|n/a|n/a|
|grunt|n/a|n/a|X|n/a|n/a|n/a|
|http-proxy|n/a|X|n/a|n/a|n/a|n/a|
|chai|X|n/a|n/a|n/a|n/a|n/a|
|chainit|n/a|n/a|n/a|n/a|n/a|X|
|charm|X|n/a|n/a|n/a|n/a|n/a|
|chokidar|n/a|X|n/a|n/a|n/a|n/a|
|istanbul|X|n/a|n/a|n/a|n/a|n/a|
|leadfoot|X|n/a|n/a|n/a|n/a|n/a|
|lodash|n/a|X|n/a|n/a|X|n/a|
|log4js|n/a|X|n/a|n/a|n/a|n/a|
|mime|n/a|X|n/a|n/a|n/a|n/a|
|minimatch|n/a|X|X|n/a|n/a|n/a|
|mkpath|n/a|n/a|X|n/a|n/a|n/a|
|nodemod|X|n/a|n/a|n/a|n/a|n/a|
|optimist|n/a|X|X|n/a|n/a|n/a|
|pragma-singleton|n/a|n/a|n/a|n/a|n/a|X|
|q|n/a|X|n/a|n/a|X|X|
|request|n/a|n/a|n/a|n/a|X|X|
|rgb2hex|n/a|n/a|n/a|n/a|n/a|X|
|rimraf|n/a|X|n/a|n/a|n/a|n/a|
|socket.io|n/a|X|n/a|n/a|n/a|n/a|
|source-map|X|X|n/a|n/a|n/a|n/a|
|tmp|n/a|n/a|n/a|X|n/a|n/a|
|underscore.string|n/a|n/a|n/a|n/a|X|n/a|
|url|n/a|n/a|n/a|n/a|n/a|X|
|useragent|n/a|X|n/a|n/a|n/a|n/a|
|vargs|n/a|n/a|n/a|n/a|X|n/a|
|wgxpath|n/a|n/a|n/a|n/a|n/a|X|
|xml2js|n/a|n/a|n/a|X|n/a|n/a|


