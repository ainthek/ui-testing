


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

generated Sun Feb  8 13:40:01 CET 2015

|module| downloads in the last month | 
|------|-----------------------------|
|selenium-webdriver|380678|
|webdriverio|7713|
|wd|92636|
|nightwatch|27843|
|intern|8167|

