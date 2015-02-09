


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

generated Mon Feb  9 10:14:20 CEST 2015

|module| downloads in the last month | 
|------|-----------------------------|
|selenium-webdriver|374945|
|webdriverio|7539|
|wd|89427|
|nightwatch|26239|
|karma|779799|
|intern|7826|
<div>
<svg id="chart" width="800" height="650"><g class="display" transform="translate(80,58)"><g class="gridline" transform="translate(0,0)"><g class="tick" style="opacity: 1;" transform="translate(0,392)"><line x2="680" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-3" y="0"></text></g><g class="tick" style="opacity: 1;" transform="translate(0,341.7306357151009)"><line x2="680" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-3" y="0"></text></g><g class="tick" style="opacity: 1;" transform="translate(0,291.46127143020186)"><line x2="680" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-3" y="0"></text></g><g class="tick" style="opacity: 1;" transform="translate(0,241.19190714530285)"><line x2="680" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-3" y="0"></text></g><g class="tick" style="opacity: 1;" transform="translate(0,190.92254286040378)"><line x2="680" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-3" y="0"></text></g><g class="tick" style="opacity: 1;" transform="translate(0,140.65317857550468)"><line x2="680" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-3" y="0"></text></g><g class="tick" style="opacity: 1;" transform="translate(0,90.38381429060566)"><line x2="680" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-3" y="0"></text></g><g class="tick" style="opacity: 1;" transform="translate(0,40.11445000570659)"><line x2="680" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-3" y="0"></text></g><path class="domain" d="M0,0H0V392H0"></path></g><rect class="bar" x="17.000000000000004" y="203.51753208198525" height="188.48246791801475" width="79.33333333333333" style="fill: #1f77b4;"></rect><rect class="bar" x="130.33333333333334" y="388.2101926265615" height="3.7898073734385207" width="79.33333333333333" style="fill: #aec7e8;"></rect><rect class="bar" x="243.66666666666666" y="347.04561560094334" height="44.954384399056664" width="79.33333333333333" style="fill: #ff7f0e;"></rect><rect class="bar" x="357" y="378.8098215052853" height="13.1901784947147" width="79.33333333333333" style="fill: #ffbb78;"></rect><rect class="bar" x="470.3333333333333" y="0" height="392" width="79.33333333333333" style="fill: #2ca02c;"></rect><rect class="bar" x="583.6666666666666" y="388.0659195510638" height="3.934080448936186" width="79.33333333333333" style="fill: #98df8a;"></rect><text class="bar-label" text-anchor="middle" x="56.666666666666664" dx="0" y="203.51753208198525" dy="-6">374945</text><text class="bar-label" text-anchor="middle" x="170" dx="0" y="388.2101926265615" dy="-6">7539</text><text class="bar-label" text-anchor="middle" x="283.3333333333333" dx="0" y="347.04561560094334" dy="-6">89427</text><text class="bar-label" text-anchor="middle" x="396.6666666666667" dx="0" y="378.8098215052853" dy="-6">26239</text><text class="bar-label" text-anchor="middle" x="510" dx="0" y="0" dy="-6">779799</text><text class="bar-label" text-anchor="middle" x="623.3333333333333" dx="0" y="388.0659195510638" dy="-6">7826</text><g class="x axis" transform="translate(0,392)"><g class="tick" style="opacity: 1;" transform="translate(56.666666666666664,0)"><line y2="6" x2="0"></line><text dy="8" style="text-anchor: end;" y="9" x="0" dx="-8" transform="translate(0,0) rotate(-45)">selenium-webdriver</text></g><g class="tick" style="opacity: 1;" transform="translate(170,0)"><line y2="6" x2="0"></line><text dy="8" style="text-anchor: end;" y="9" x="0" dx="-8" transform="translate(0,0) rotate(-45)">webdriverio</text></g><g class="tick" style="opacity: 1;" transform="translate(283.3333333333333,0)"><line y2="6" x2="0"></line><text dy="8" style="text-anchor: end;" y="9" x="0" dx="-8" transform="translate(0,0) rotate(-45)">wd</text></g><g class="tick" style="opacity: 1;" transform="translate(396.6666666666667,0)"><line y2="6" x2="0"></line><text dy="8" style="text-anchor: end;" y="9" x="0" dx="-8" transform="translate(0,0) rotate(-45)">nightwatch</text></g><g class="tick" style="opacity: 1;" transform="translate(510,0)"><line y2="6" x2="0"></line><text dy="8" style="text-anchor: end;" y="9" x="0" dx="-8" transform="translate(0,0) rotate(-45)">karma</text></g><g class="tick" style="opacity: 1;" transform="translate(623.3333333333333,0)"><line y2="6" x2="0"></line><text dy="8" style="text-anchor: end;" y="9" x="0" dx="-8" transform="translate(0,0) rotate(-45)">intern</text></g><path class="domain" d="M0,6V0H680V6"></path><text x="0" y="0" style="text-anchor: middle; font-weight: bold;" transform="translate(340,95)"></text></g><g class="y axis" transform="translate(0,0)"><g class="tick" style="opacity: 1;" transform="translate(0,392)"><line x2="-6" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-9" y="0">0</text></g><g class="tick" style="opacity: 1;" transform="translate(0,341.7306357151009)"><line x2="-6" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-9" y="0">100,000</text></g><g class="tick" style="opacity: 1;" transform="translate(0,291.46127143020186)"><line x2="-6" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-9" y="0">200,000</text></g><g class="tick" style="opacity: 1;" transform="translate(0,241.19190714530285)"><line x2="-6" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-9" y="0">300,000</text></g><g class="tick" style="opacity: 1;" transform="translate(0,190.92254286040378)"><line x2="-6" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-9" y="0">400,000</text></g><g class="tick" style="opacity: 1;" transform="translate(0,140.65317857550468)"><line x2="-6" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-9" y="0">500,000</text></g><g class="tick" style="opacity: 1;" transform="translate(0,90.38381429060566)"><line x2="-6" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-9" y="0">600,000</text></g><g class="tick" style="opacity: 1;" transform="translate(0,40.11445000570659)"><line x2="-6" y2="0"></line><text dy=".32em" style="text-anchor: end;" x="-9" y="0">700,000</text></g><path class="domain" d="M-6,0H0V392H-6"></path><text x="0" y="0" style="text-anchor: middle; font-weight: bold;" transform="translate(-40,196) rotate(-90)"></text></g></g><defs><style type="text/css">
#chart{
	background-color: #F5F2EB;
	border: 1px solid #CCC;
	font-size: 12px;
}
.bar{
	fill: purple;
	shape-rendering: crispEdges;
}
.bar-label{
	fill: #000;
	text-anchor: middle;
	font-size: 10px;
}
.axis path,
.axis line{
	fill: none;
	stroke: #000;
	shape-rendering: crispEdges;
}
.gridline path,
.gridline line{
	fill: none;
	stroke: #ccc;
	shape-rendering: crispEdges;
}
</style></defs></svg>
</div>

## Modules used

### intern

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

### karma

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

### nightwatch

|name|version|description|path|
|----|-------|-----------|----|
|[ejs](https://github.com/visionmedia/ejs)|0.8.8|Embedded JavaScript templates|./node_modules/ejs/package.json|
|[grunt](http://gruntjs.com/)|0.4.5|The JavaScript Task Runner|./node_modules/grunt/package.json|
|[minimatch](https://github.com/isaacs/minimatch)|0.2.14|a glob matcher in javascript|./node_modules/minimatch/package.json|
|[mkpath](https://github.com/jrajav/mkpath)|0.1.0|Make all directories in a path, like mkdir -p|./node_modules/mkpath/package.json|
|[optimist](https://github.com/substack/node-optimist)|0.6.1|Light-weight option parsing with an argv hash. No optstrings attached.|./node_modules/optimist/package.json|

### selenium-webdriver

|name|version|description|path|
|----|-------|-----------|----|
|[adm-zip](http://github.com/cthackers/adm-zip)|0.4.4|A Javascript implementation of zip for nodejs. Allows user to create or extract zip files both in memory or to/from disk|./node_modules/adm-zip/package.json|
|[tmp](http://github.com/raszi/node-tmp)|0.0.24|Temporary file and directory creator|./node_modules/tmp/package.json|
|[xml2js](https://github.com/Leonidas-from-XIV/node-xml2js)|0.4.4|Simple XML to JavaScript object converter.|./node_modules/xml2js/package.json|

### wd

|name|version|description|path|
|----|-------|-----------|----|
|[archiver](https://github.com/ctalkington/node-archiver)|0.12.0|a streaming interface for archive generation|./node_modules/archiver/package.json|
|[async](https://github.com/caolan/async)|0.9.0|Higher-order functions and common patterns for asynchronous code|./node_modules/async/package.json|
|[lodash](http://lodash.com/)|2.4.1|A utility library delivering consistency, customization, performance, & extras.|./node_modules/lodash/package.json|
|[q](https://github.com/kriskowal/q)|1.0.1|A library for promises (CommonJS/Promises/A,B,D)|./node_modules/q/package.json|
|[request](https://github.com/mikeal/request)|2.46.0|Simplified HTTP request client.|./node_modules/request/package.json|
|[underscore.string](http://epeli.github.com/underscore.string/)|2.3.3|String manipulation extensions for Underscore.js javascript library.|./node_modules/underscore.string/package.json|
|[vargs]()|0.1.0|practical variable argument handling|./node_modules/vargs/package.json|

### webdriverio

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


