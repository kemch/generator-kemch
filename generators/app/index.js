'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.bgBlue('ABC') + ' generator!'
    ));

    var prompts = [{
      type: 'list',
      name: 'generator',
      message: 'What would you like to do?',
      choices: [{
            name: 'Create a template site',
            value: 'template-site',
            short: 'template site'
        },{
            name: 'Nothing',
            value: 'exit',
            short: 'Nothing'
        }]
    }];

    return this.prompt(prompts).then(function (props) {
        // To access props later use this.props.someAnswer;
        this.props = props;
        if (props.generator == 'exit') {
            this.log('\n\n');
            return
        } else {
            return
        }
    }.bind(this));
  }
});