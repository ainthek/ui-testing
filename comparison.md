# Comparison

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


## Standalone Server
How much manual work is needed to run 
tests against browsers that require selenium-server-standalone-*.jar.
Download, configure and instantiate support in each 'framework'.

### selenium-webdriver - 1 -

- (cons) 'To run the tests, you will need to download a copy of the ChromeDriver and make sure it can be found on your PATH.'
- (cons) They don't event updated docs (nor npm nor wiki) after implementation of direct Firefox support.
- However after some downloading of related and compatible version for each of your OSes, you can have it running in lt; 30 mins for all browsers you need.

	TODO: donwload sample code sample

### intern

- why using pretty old 'selenium-version': '2.41.0' in the example config ?
- based on [this blog post](http://www.sitepen.com/blog/2014/05/23/how-can-i-debug-intern-tests/) you must download all manually as well

### kommand/vebdrvr
Actually 'installing'  Selenium, Chromedriver, IEDriver and PhantomJS is not node by kommando, but by
[vebrdvr](https://github.com/uxebu/webdrvr) module.

### Grunt and other tasks 
to automate download of Standalone Server and Drivers 

TODO:

## Documentation - quick start testing with local browsers
Here I ry to evaluate how much time and browsing it took to start first functional test 
in local browser. Intern is in disadvantage here, their docs cover bit more so orientation is more difficult.

### selenium - 3 - 
running sample from npm readme with native FF support they have now, took under 10 seconds, 
if you have FF installed.

### kommando - 3 -

Running REPL and starting browser (FF, chrome, Opera) right after install requires no reading of any docs.
This is the main purpose of the kommando module (even if implemented using vebdrvr). 

	$ ./node_modules/.bin/kommando --runner repl --browser chrome
	Starting Selenium server ...
	Selenium server started at: http://192.168.x.x:49408/wd/hub
	Run tests using "browserName=chrome"
	"kommando" / "kommando.browser" provide access to the running browser instance
	kommando>

### intern

After 30 minutes of quick searching, I have found this topic:
[Running-your-own-WebDriver-server](https://github.com/theintern/intern/wiki/Running-your-own-WebDriver-server).
After another 30 minutes I have still no functional testing sample running.
Another 30mins, cloned tutorial, downloaded full tutorial cannot make tests/functional to run, no errors, just not run.

Gave up, [asking for help ](https://github.com/theintern/intern/issues/347)












