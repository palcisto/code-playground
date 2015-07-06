# Code Playground

My personal sandbox for tinkering w/ various web technologies (ie. Middleman app, JS test unit testing with Karma and Mocha, Angular, React, and more).
## Prequisites 

* ruby
* git
* [Node.JS](https://nodejs.org/) /[NPM](https://www.npmjs.com/)

## Installation

1. Run `$ gem install bundler`to install Bundler if you don't already have it installed
2. Run `$ bundle install` to install Middleman and other gem dependencies
3. Run `$ npm install` to install Unit test suite, bower, and bower packages (ie. Foundation, jQuery, AngularJs, etc.)

# Middleman Template: ZURB Foundation #

middleman-zurb-foundation is a minimal [Middleman](http://middlemanapp.com/) project template with the [SASS](http://sass-lang.com/) version of the [ZURB Foundation](http://foundation.zurb.com/) Framework.

## Installation ##

Make sure to have:

1. ruby
1. git
1. middleman ($ `gem install middleman`)
1. bower ($ `npm install -g bower`)


Clone into ~/.middleman (you'll have to create this directory if it's not already there). You can then use it with the `--template` flag on `middleman init`.

1. $ `git clone git://github.com/axyz/middleman-zurb-foundation.git ~/.middleman/zurb-foundation`

Then create a new project using zurb-foundation template.

1. $ `middleman init my_new_project --template=zurb-foundation`
1. $ `cd my_new_project`
1. $ `bower install`
1. $ `bundle exec middleman`

Now you can start hacking on `source` directory and watch live changes on [localhost:4567](http://localhost:4567).

For more help follow [Middleman's project template instructions](http://middlemanapp.com/getting-started/welcome/) or feel free to hit me up on [Twitter](http://twitter.com/axyz).

## ZURB Foundation License ##

Copyright (c) 2011 ZURB, http://www.zurb.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
