## This is source file for README.md
## DO NOT TRY TO RUN.
## Sorry but it may use a 'proprietary tools'
## I have no time to polish and publish.

echo "

# ui-testing 2019

After 4 years I have returned to the same mission and it is time
to summarize current stutus. In the start of year 2015 I have reviewed 11 frameworks
that I considered significant players, so lets see what is the status now.
Old review is here on 2015 branch. 

Quick look at npmtrends and statistics:

<https://www.npmtrends.com/selenium-webdriver-vs-browserstack-webdriver-vs-wd-vs-webdriverio-vs-kommando-vs-nightwatch-vs-karma-vs-leadfoot-vs-intern-vs-jscoverage>

Discontinued frameworks are:

- browserstack-webdriver
- kommando
- blanket
- jscoverage


Wd stayed stucked with Selenium 2 version and JsonWireProtocol (which is obsolete) 
and now we have selenium version 4 
see <https://techbeacon.com/app-dev-testing/selenium-30-40-50-roadmap-finally-unveiled> 
for info about changes.

So we end up with half players out of game, just after 4 years.

## 2019 players

- protractor
- cypress
- testcafe
- ....

- puppeteer

<https://www.npmtrends.com/nightwatch-vs-webdriverio-vs-cypress-vs-testcafe>

# ui-testing 2015

Experiments and reviews of various ui testing frameworks

## How this repo was setup
  
	mkdir ui-testing
	cd ui-testing

	echo '{ "name":"ui-testing"}' > package.json

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

	echo "node_modules" > .gitignore

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

# blanket
A seamless JavaScript code coverage library.

- <https://www.npmjs.com/package/blanket>

# jscoverage
a javascript coverage tool, can be used in node dev, and browser side js dev

- <https://www.npmjs.com/package/jscoverage>
- [Quick Windows (MINGW) Fix](https://github.com/ainthek/jscoverage)

## NPM Stats

generated $(date)

Included here is not comparable, some of them are
full stack things some of them are modules reused by others etc...

However the numbers tell something (TODO: separate and chart)

| module| downloads in the last month | 
|------	|-----------------------------|
$(
	s=$(
	npm_stats selenium-webdriver;
	npm_stats browserstack-webdriver;
	npm_stats webdriverio;
	npm_stats wd;
	npm_stats kommando;
	npm_stats webdrvr;
	npm_stats nightwatch;
	npm_stats karma;
	npm_stats leadfoot;
	npm_stats intern;
	npm_stats testardo;
	
	npm_stats mocha;

	npm_stats jscoverage;
	npm_stats blanket;
	
	)

	echo "$s" | md-table '\;'

	#echo "<div>"
	# fixme: http://stackoverflow.com/questions/13808020/include-an-svg-hosted-on-github-in-markdown
	# echo "$s" | awk -F";" '{print $2" "$1}' | ../data2chart/bin/chart bar # FIXME: broken layout when published on github
	#echo "</div>"
)

## Modules used

$(
	for m in $(ls -1 node_modules)
	do
		pushd node_modules/$m > /dev/null 

		echo "### $m"
		echo ""
		list_node_modules | list_node_modules_filter_nested | list_node_modules_package_json  | list_node_modules_doc | cut -d"|" -f1,2,3,4
		echo ""
		
		list_node_modules | list_node_modules_filter_nested | awk-basename | sufix "\tX" > ../../$m.modules
		popd >/dev/null


	done
)

## Matrix

$(
	join-paste *.modules | md-table | md-table-header "|" | sed "3d" | sed "s;n/a;;g" | sed "s;\.modules;;g" | sed "1 s;\.txt;;"
	rm *.modules
)


$(
	cat ./comparison.md | md-shift-header 1
)

"