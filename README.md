


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

	npm install --save-dev jscoverage
	npm install --save-dev blanket

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

Most of the Selenium WebDriver Wire Protocol is already implemented and wrapped in useful commands.

Adding helper functions, or more complicated sets 
and combinations of existing commands is simple and really useful

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

generated Fri Feb 13 17:22:59 CEST 2015

Included here is not comparable, some of them are
full stack things some of them are modules reused by others etc...

However the numbers tell something (TODO: separate and chart)

| module| downloads in the last month | 
|------	|-----------------------------|
|selenium-webdriver|405110|
|browserstack-webdriver|2278|
|webdriverio|9339|
|wd|95869|
|kommando|121|
|webdrvr|160|
|nightwatch|28370|
|karma|838058|
|leadfoot|8835|
|intern|8595|
|testardo|209|
|mocha|1629761|
|jscoverage|16939|
|blanket|47358|

## Modules used

### blanket

|name|version|description
|----|-------|-----------
|[esprima](http://esprima.org)|1.0.4|ECMAScript parsing infrastructure for multipurpose analysis
|[falafel]()|0.1.6|transform the ast on a recursive walk
|[xtend](https://github.com/Raynos/xtend)|2.1.2|extend like a boss

### browserstack-webdriver

|name|version|description
|----|-------|-----------
|[keep-alive-agent](https://github.com/ceejbot/keep-alive-agent)|0.0.1|a keep-alive agent for http and https

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
|[di]()|0.0.1|Dependency Injection for Node.js. Heavily inspired by AngularJS.
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

### kommando

|name|version|description
|----|-------|-----------
|[address]()|0.0.3|Get current machine IP, MAC and DNS servers.
|[async](https://github.com/caolan/async)|0.8.0|Higher-order functions and common patterns for asynchronous code
|[cabbie](https://github.com/ForbesLindesay/cabbie)|0.0.9|A webdriver client
|[chai-as-promised](https://github.com/domenic/chai-as-promised)|4.1.1|Extends Chai with assertions about promises.
|[chai](http://chaijs.com)|1.10.0|BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
|[coffee-script](http://coffeescript.org)|1.9.0|Unfancy JavaScript
|[cucumber](http://github.com/cucumber/cucumber-js)|0.4.7|The official JavaScript implementation of Cucumber.
|[freeport](https://github.com/daaku/nodejs-freeport)|1.0.4|Find a free port.
|[glob](https://github.com/isaacs/node-glob)|3.2.11|a little globber
|[jasmine-node](https://github.com/mhevery/jasmine-node)|1.14.5|DOM-less simple JavaScript BDD testing framework for Node
|[leadfoot](http://github.com/theintern/leadfoot)|1.2.1|Leadfoot. A JavaScript client library that brings cross-platform consistency to the Selenium WebDriver API.
|[lodash](http://lodash.com/)|2.4.1|A utility library delivering consistency, customization, performance, & extras.
|[mocha](https://github.com/visionmedia/mocha)|1.18.2|simple, flexible, fun test framework
|[nesh](http://danielgtaylor.github.io/nesh/)|1.5.1|An enhanced, extensible shell for Node.js
|[optimist](https://github.com/substack/node-optimist)|0.6.1|Light-weight option parsing with an argv hash. No optstrings attached.
|[saucelabs](https://github.com/holidayextras/node-saucelabs)|0.1.1|A wrapper around Sauce Labs REST API
|[selenium-webdriver](https://code.google.com/p/selenium/)|2.41.0|The official WebDriver JavaScript bindings from the Selenium project
|[wd](https://github.com/admc/wd)|0.2.27|WebDriver/Selenium 2 node.js client
|[webdrvr](https://github.com/uxebu/webdrvr)|2.41.0-0|NPM wrapper for Selenium Webdriver including Chromedriver / IEDriver / IOSDriver / Ghostdriver

### leadfoot

|name|version|description
|----|-------|-----------
|[dojo]()|2.0.0-alpha4|

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
|[css-value]()|0.0.1|CSS value parser
|[deepmerge](https://github.com/nrf110/deepmerge)|0.2.7|A library for deep (recursive) merging of Javascript objects
|[pragma-singleton](https://github.com/pragma-dudes/pragma-singleton)|1.0.3|Singleton design pattern implementation which easy to use
|[q](https://github.com/kriskowal/q)|1.1.2|A library for promises (CommonJS/Promises/A,B,D)
|[request](https://github.com/mikeal/request)|2.34.0|Simplified HTTP request client.
|[rgb2hex](https://github.com/christian-bromann/rgb2hex)|0.1.0|lightweight rgb/rgba to hex parser
|[url](https://github.com/defunctzombie/node-url)|0.10.2|The core `url` packaged standalone for use with Browserify.
|[wgxpath](https://github.com/jacobmarble/node-wgxpath)|0.23.0|Wicked Good XPath

## Matrix

|index|blanket|browserstack-webdriver|intern|karma|kommando|leadfoot|nightwatch|selenium-webdriver|wd|webdriverio|
|-----|---------------|------------------------------|--------------|-------------|----------------|----------------|------------------|--------------------------|----------|-------------------|
|address|||||X||||||
|adm-zip||||||||X|||
|archiver|||||||||X|X|
|async|||||X||||X|X|
|cabbie|||||X||||||
|coffee-script|||||X||||||
|colors||||X|||||||
|connect||||X|||||||
|css-parse||||||||||X|
|css-value||||||||||X|
|cucumber|||||X||||||
|deepmerge||||||||||X|
|di||||X|||||||
|diff|||X||||||||
|digdug|||X||||||||
|dojo|||X|||X|||||
|ejs|||||||X||||
|esprima|X||||||||||
|examples||||X|||||||
|falafel|X||||||||||
|freeport|||||X||||||
|glob||||X|X||||||
|graceful-fs||||X|||||||
|grunt|||||||X||||
|http-proxy||||X|||||||
|chai|||X||X||||||
|chai-as-promised|||||X||||||
|chainit||||||||||X|
|charm|||X||||||||
|chokidar||||X|||||||
|istanbul|||X||||||||
|jasmine-node|||||X||||||
|keep-alive-agent||X|||||||||
|leadfoot|||X||X||||||
|lodash||||X|X||||X||
|log4js||||X|||||||
|mime||||X|||||||
|minimatch||||X|||X||||
|mkpath|||||||X||||
|mocha|||||X||||||
|nesh|||||X||||||
|nodemod|||X||||||||
|optimist||||X|X||X||||
|pragma-singleton||||||||||X|
|q||||X|||||X|X|
|request|||||||||X|X|
|rgb2hex||||||||||X|
|rimraf||||X|||||||
|saucelabs|||||X||||||
|selenium-webdriver|||||X||||||
|socket.io||||X|||||||
|source-map|||X|X|||||||
|tmp||||||||X|||
|underscore.string|||||||||X||
|url||||||||||X|
|useragent||||X|||||||
|vargs|||||||||X||
|wd|||||X||||||
|webdrvr|||||X||||||
|wgxpath||||||||||X|
|xml2js||||||||X|||
|xtend|X||||||||||


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

	TODO: download sample code sample

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

Update: 2015/02/10 -  reading the answer (Thank) and googling I have found this
<http://www.sitepen.com/blog/2014/04/23/dojo-faq-how-can-i-run-dojo-tests-locally-with-intern/> article.
After not believing this is really what intern offers, 
I have 'managed' to start server MANULLLY with actually typing the word 'java' 
(GRRRRRR, just compare wit the bare selenium-webdriver, 
which [ 'they' do not consider to be a test framework ](https://github.com/theintern/intern/issues/346#issuecomment-73727973), and after previous positive KARMA, seems unbelievable achievement..

After "pruning my environment" (as vaguely suggested in article), to my guessed minimum:

	{ browserName: 'firefox' }

or 

	{ browserName: 'chrome' }

and having test-code:

	define([
		'intern!object',
	], function (registerSuite) {
	     registerSuite({
	        name: 'minimal demo',
	        'of getting google': function () {
	            return this.remote.get('http://www.google.com');
	        }
	    });
	});	

and running:

	(GRRRRRR) java -jar $SELENIUM_SERVER_JAR -port 4444

and 
	
	node_modules/.bin/intern-runner config=tests/intern


I have finally seen 'flash' of google.com webpage , 
after series of blinking URLs....
Success withing 48 hours in not bad. Or ? Going to sleep (today).

<!-- ;-)))))
### Bullshit and 'flame war starters'

- How popular is intern on stackoverflow (propagated by SitePen, Dojo, Snover, .... team as support channel) - ha ha ha, just in case I do not include stats nor question nor answers.... but is is joke compared to community around something 'real'
-->

### Coverage


#### Mocha

- support of coverage reporting using 5 years old [tj's node-jscoverage](https://github.com/tj/node-jscoverage)
- tj claims in README.txt that node module [jscoverage npm module](https://www.npmjs.com/package/jscoverage) DOES NOT WORK
- [jscoverage npm module](https://www.npmjs.com/package/jscoverage)
	- it has 16158 downloads in the last month 
	- and git [gub repo seems more recent](https://github.com/fishbar/jscoverage/graphs/code-frequency) even if not active
	- readme covers instruction how to test  
- tj's version does not uninstall on OSX 10.9.5
- a lot of outdated? infos on web, including this one http://seejohncode.com/2012/03/13/setting-up-mocha-jscoverage/

[asking for help](https://groups.google.com/forum/#!topic/mochajs/zawMtAIb-A0)

Finally I have decided to ignore mochas docs and tj's repo and tried very simple one minute setup and example:

	npm install --save-dev jscoverage

	mocha -r jscoverage -R spec tests/mocha/test.js

	Coverage result
	  ✓ tests/mocha/test.js	line[100%]  branch[100%]
	  ⁍ lib/module.js	line[ 66%]  branch[100%]

	  1 passing (5ms)

After trying tests on my other Win (MINGW) machine, neeeded to [quickly patch
jscoverage](https://github.com/ainthek/jscoverage/commit/3fcca79f3bf684fbf617f9ddb950c1d951ca9481).

And also received link from boneskull about  [blanket](https://www.npmjs.com/package/blanket), 
so will try it.


