


# ui-testing

Experiments and reviews of various ui testing frameworks

## How this repo was setup
  
	mkdir ui-testing
	cd ui-testing

	echo '{ name:ui-testing}' > package.json

	npm install --save-dev selenium-webdriver
	npm install --save-dev browserstack-webdriver
	npm install --save-dev wd
	npm install --save-dev webdriverio
	npm install --save-dev kommando
	npm install --save-dev nightwatch
	npm install --save-dev karma
	npm install --save-dev leadfoot
	npm install --save-dev intern


	git remote add origin https://github.com/ainthek/ui-testing.git

	echo node_modules > .gitignore

# Basic info

Texts come from their web sites 

## selenium-webdriver
The official WebDriver JavaScript bindings from the Selenium project

- <https://www.npmjs.com/package/selenium-webdriver>
- <https://code.google.com/p/selenium/>


## browserstack-webdriver

BrowserStack WebDriver JavaScript bindings with keep alive support

- <https://www.npmjs.com/package/browserstack-webdriver>

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

## kommando
Configurable cross browser functional / acceptance test launcher (using Webdriver)

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

generated Tue Feb 10 01:39:29 CET 2015

|module| downloads in the last month | 
|------|-----------------------------|
|selenium-webdriver|374945|
|browserstack-webdriver|2071|
|webdriverio|7539|
|wd|89427|
|kommando|131|
|webdrvr|147|
|nightwatch|26239|
|karma|779799|
|leadfoot|8146|
|intern|7826|
<div>
</div>

## Modules used

### intern

|name|version|description
|----|-------|-----------
|[chai](http://chaijs.com)|1.9.1|BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
|[charm](https://github.com/substack/node-charm)|0.2.0|ansi control sequences for terminal cursor hopping and colors
|[diff](https://github.com/kpdecker/jsdiff)|1.1.0|A javascript text diff implementation.
|[digdug](http://github.com/theintern/digdug)|1.2.1|Dig Dug. A simple abstraction library for downloading and launching WebDriver service tunnels.
|[dojo](http://dojotoolkit.org/)|2.0.0-dev|Dojo core is a powerful, lightweight library that makes common tasks quicker and easier. Animate elements, manipulate the DOM, and query with easy CSS syntax, all without sacrificing performance.
|[istanbul](https://github.com/gotwarlost/istanbul)|0.2.16|Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests 
|[leadfoot](http://github.com/theintern/leadfoot)|1.2.1|Leadfoot. A JavaScript client library that brings cross-platform consistency to the Selenium WebDriver API.
|[nodemod]()||
|[source-map](https://github.com/mozilla/source-map)|0.1.33|Generates and consumes source maps

### karma

|name|version|description
|----|-------|-----------
|[chokidar](https://github.com/paulmillr/chokidar)|0.12.6|A neat wrapper around node.js fs.watch / fs.watchFile / fsevents.
|[colors](https://github.com/Marak/colors.js)|0.6.2|get colors in your node.js console like what
|[connect](https://github.com/senchalabs/connect)|2.26.6|High performance middleware framework
|[di](https://github.com/vojtajina/node-di)|0.0.1|Dependency Injection for Node.js. Heavily inspired by AngularJS.
|[glob](https://github.com/isaacs/node-glob)|3.2.11|a little globber
|[graceful-fs](https://github.com/isaacs/node-graceful-fs)|2.0.3|A drop-in replacement for fs, making various improvements.
|[http-proxy-examples]()|0.0.0|packages required to run the examples
|[http-proxy](https://github.com/nodejitsu/node-http-proxy)|0.10.4|A full-featured http reverse proxy for node.js
|[lodash](http://lodash.com/)|2.4.1|A utility library delivering consistency, customization, performance, & extras.
|[log4js](https://github.com/nomiddlename/log4js-node)|0.6.22|Port of Log4js to work with node.
|[mime](https://github.com/broofa/node-mime)|1.2.11|A comprehensive library for mime-type mapping
|[minimatch](https://github.com/isaacs/minimatch)|0.2.14|a glob matcher in javascript
|[optimist](https://github.com/substack/node-optimist)|0.6.1|Light-weight option parsing with an argv hash. No optstrings attached.
|[q](https://github.com/kriskowal/q)|0.9.7|A library for promises (CommonJS/Promises/A,B,D)
|[rimraf](https://github.com/isaacs/rimraf)|2.2.8|A deep deletion module for node (like `rm -rf`)
|[socket.io](http://socket.io)|0.9.16|Real-time apps made cross-browser & easy with a WebSocket-like API
|[source-map](https://github.com/mozilla/source-map)|0.1.43|Generates and consumes source maps
|[useragent](https://github.com/3rd-Eden/useragent)|2.0.10|Fastest, most accurate & effecient user agent string parser, uses Browserscope's research for parsing

### nightwatch

|name|version|description
|----|-------|-----------
|[ejs](https://github.com/visionmedia/ejs)|0.8.8|Embedded JavaScript templates
|[grunt](http://gruntjs.com/)|0.4.5|The JavaScript Task Runner
|[minimatch](https://github.com/isaacs/minimatch)|0.2.14|a glob matcher in javascript
|[mkpath](https://github.com/jrajav/mkpath)|0.1.0|Make all directories in a path, like mkdir -p
|[optimist](https://github.com/substack/node-optimist)|0.6.1|Light-weight option parsing with an argv hash. No optstrings attached.

### selenium-webdriver

|name|version|description
|----|-------|-----------
|[adm-zip](http://github.com/cthackers/adm-zip)|0.4.4|A Javascript implementation of zip for nodejs. Allows user to create or extract zip files both in memory or to/from disk
|[tmp](http://github.com/raszi/node-tmp)|0.0.24|Temporary file and directory creator
|[xml2js](https://github.com/Leonidas-from-XIV/node-xml2js)|0.4.4|Simple XML to JavaScript object converter.

### wd

|name|version|description
|----|-------|-----------
|[archiver](https://github.com/ctalkington/node-archiver)|0.12.0|a streaming interface for archive generation
|[async](https://github.com/caolan/async)|0.9.0|Higher-order functions and common patterns for asynchronous code
|[lodash](http://lodash.com/)|2.4.1|A utility library delivering consistency, customization, performance, & extras.
|[q](https://github.com/kriskowal/q)|1.0.1|A library for promises (CommonJS/Promises/A,B,D)
|[request](https://github.com/mikeal/request)|2.46.0|Simplified HTTP request client.
|[underscore.string](http://epeli.github.com/underscore.string/)|2.3.3|String manipulation extensions for Underscore.js javascript library.
|[vargs]()|0.1.0|practical variable argument handling

### webdriverio

|name|version|description
|----|-------|-----------
|[archiver](https://github.com/ctalkington/node-archiver)|0.6.1|Creates Archives (ZIP) via Node Streams.
|[async](https://github.com/caolan/async)|0.9.0|Higher-order functions and common patterns for asynchronous code
|[chainit](https://github.com/vvo/chainit)|2.1.1|Turn an asynchronous JavaScript api into an asynchronous chainable JavaScript api.
|[css-parse](https://github.com/visionmedia/css-parse)|1.7.0|CSS parser
|[css-value](https://github.com/visionmedia/css-value)|0.0.1|CSS value parser
|[deepmerge](https://github.com/nrf110/deepmerge)|0.2.7|A library for deep (recursive) merging of Javascript objects
|[pragma-singleton](https://github.com/pragma-dudes/pragma-singleton)|1.0.3|Singleton design pattern implementation which easy to use
|[q](https://github.com/kriskowal/q)|1.1.2|A library for promises (CommonJS/Promises/A,B,D)
|[request](https://github.com/mikeal/request)|2.34.0|Simplified HTTP request client.
|[rgb2hex](https://github.com/christian-bromann/rgb2hex)|0.1.0|lightweight rgb/rgba to hex parser
|[url](https://github.com/defunctzombie/node-url)|0.10.2|The core `url` packaged standalone for use with Browserify.
|[wgxpath](https://github.com/jacobmarble/node-wgxpath)|0.23.0|Wicked Good XPath

## Matrix

|index|intern|karma|nightwatch|selenium-webdriver|wd|webdriverio|
|-----|--------------|-------------|------------------|--------------------------|----------|-------------------|
|adm-zip||||X|||
|archiver|||||X|X|
|async|||||X|X|
|chai|X||||||
|chainit||||||X|
|charm|X||||||
|chokidar||X|||||
|colors||X|||||
|connect||X|||||
|css-parse||||||X|
|css-value||||||X|
|deepmerge||||||X|
|di||X|||||
|diff|X||||||
|digdug|X||||||
|dojo|X||||||
|ejs|||X||||
|examples||X|||||
|glob||X|||||
|graceful-fs||X|||||
|grunt|||X||||
|http-proxy||X|||||
|istanbul|X||||||
|leadfoot|X||||||
|lodash||X|||X||
|log4js||X|||||
|mime||X|||||
|minimatch||X|X||||
|mkpath|||X||||
|nodemod|X||||||
|optimist||X|X||||
|pragma-singleton||||||X|
|q||X|||X|X|
|request|||||X|X|
|rgb2hex||||||X|
|rimraf||X|||||
|socket.io||X|||||
|source-map|X|X|||||
|tmp||||X|||
|underscore.string|||||X||
|url||||||X|
|useragent||X|||||
|vargs|||||X||
|wgxpath||||||X|
|xml2js||||X|||


## Comparison

Far from being finished....

Intern web site contains some comparisons of the frameworks, however
it is [missing some important players and features](https://github.com/theintern/intern/issues/346). 
So I will add some here:

Subjective Rankings:

	3-good
	2-ok
	1-poor
	0-none


| feature 							|	selenium-webdriver	| kommando 	| intern 	|
|-------- 							|------------------		|-----		|--------	|
| Standalone Server  				| 1						| 3			| 1			|
| Documentation - Local run 		| 3 					| 3			| 1			|
| REPL								| 0 					| 2			| ?			|		


### Standalone Server
How much manual work is needed to run 
tests against browsers that require selenium-server-standalone-*.jar.
Download, configure and instantiate support in each 'framework'.

#### selenium-webdriver - 1 -

- (cons) 'To run the tests, you will need to download a copy of the ChromeDriver and make sure it can be found on your PATH.'
- (cons) They don't event updated docs (nor npm nor wiki) after implementation of direct Firefox support.
- However after some downloading of related and compatible version for each of your OSes, you can have it running in lt; 30 mins for all browsers you need.

	TODO: donwload sample code sample

#### intern

- why using pretty old 'selenium-version': '2.41.0' in the example config ?
- based on [this blog post](http://www.sitepen.com/blog/2014/05/23/how-can-i-debug-intern-tests/) you must download all manually as well

#### kommand/vebdrvr
Actually 'installing'  Selenium, Chromedriver, IEDriver and PhantomJS is not node by kommando, but by
[vebrdvr](https://github.com/uxebu/webdrvr) module.

#### Grunt and other tasks 
to automate download of Standalone Server and Drivers 

TODO:

### Documentation - quick start testing with local browsers
Here I ry to evaluate how much time and browsing it took to start first functional test 
in local browser. Intern is in disadvantage here, their docs cover bit more so orientation is more difficult.

#### selenium - 3 - 
running sample from npm readme with native FF support they have now, took under 10 seconds, 
if you have FF installed.

#### kommando - 3 -

Running REPL and starting browser (FF, chrome, Opera) right after install requires no reading of any docs.
This is the main purpose of the kommando module (even if implemented using vebdrvr). 

	$ ./node_modules/.bin/kommando --runner repl --browser chrome
	Starting Selenium server ...
	Selenium server started at: http://192.168.x.x:49408/wd/hub
	Run tests using "browserName=chrome"
	"kommando" / "kommando.browser" provide access to the running browser instance
	kommando>

#### intern

After 30 minutes of quick searching, I have found this topic:
[Running-your-own-WebDriver-server](https://github.com/theintern/intern/wiki/Running-your-own-WebDriver-server).
After another 30 minutes I have still no functional testing sample running.
Another 30mins, cloned tutorial, downloaded full tutorial cannot make tests/functional to run, no errors, just not run.

Gave up, [asking for help ](https://github.com/theintern/intern/issues/347)


