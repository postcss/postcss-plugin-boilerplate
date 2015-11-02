var path     = require('path');
var fs       = require('fs-promise');
var gituser  = require('git-user-info')();
var gconfig  = fs.readFileSync('.git/config', 'utf8');
var inquirer = require('./inquirer');
var exec     = require('child-process-promise').exec;

var questions = [
    {
        name:    'title',
        message: 'Plugin name: '
    },
    {
        name:    'description',
        message: 'Plugin description:'
    },
    {
        name:    'keywords',
        message: 'Plugin keywords: postcss, css, postcss-plugin,'
    },
    {
        name:    'name',
        message: 'Your name:',
        default: gituser.name
    },
    {
        name:    'email',
        message: 'Your email:',
        default: gituser.email
    },
    {
        name:    'username',
        message: 'GitHub username:',
        default: (gconfig.match(/([^\n:]+)\/postcss-/) || [])[1]
    }
];

var name;
var repo;
var url;

inquirer.prompt(questions).then(function (results) {
    // update keywords as array
    var keywords = results.keywords.trim().split(/\s*,\s*/);

    name = 'postcss-' + results.title.replace(/[^\w-]/g, '').toLowerCase();
    repo = results.username + '/' + name;
    url  = 'https://github.com/' + repo;

    return fs.readJson('package.json').then(function (package) {
        // update package description
        package.name = name;

        package.keywords = package.keywords.concat(keywords);

        if (results.description) package.description = results.description;

        if (results.name) {
            package.author = results.name;

            if (results.email) package.author += ' <' + results.email + '>';
        } else delete package.author;

        // update package urls
        package.repository = repo;

        package.bugs.url = url + '/issues';

        package.homepage = 'git+' + url + '.git#readme';

        // update package development dependencies
        package.devDependencies = {
            'chai': '^3.4.0',
            'gulp': '^3.9.0',
            'gulp-eslint': '^1.0.0',
            'gulp-mocha': '^2.1.3',
        };

        // remove install script
        delete package.scripts.postinstall;

        var parsed = function (input, output) {
            return fs.readFileSync(input, 'utf8')
            .replace(/PLUGIN_TITLE/g, results.title)
            .replace(/PLUGIN_NAME/g, name)
            .replace(/PLUGIN_DESC/g, results.description)
            .replace(/GITHUB_NAME/g, results.username)
            .replace(/AUTHOR_NAME/g, results.name)
            .replace(/AUTHOR_EMAIL/g, results.email);
        };

        var readme  = parsed('lib/README.md');
        var indexjs = parsed('index.js');
        var testjs  = parsed('test/test.js');
        var license = parsed('LICENSE');

        // remove setup directories and update package
        return Promise.all([
            fs.remove('.git'),
            fs.remove('lib'),
            fs.remove('node_modules'),
            fs.writeJson('package.json', package),
            fs.outputFile('README.md', readme),
            fs.outputFile('index.js', indexjs),
            fs.outputFile('test/test.js', testjs),
            fs.outputFile('license', license)
        ]);
    }).then(function () {
        return exec('git init');
    }).then(function () {
        return exec('git remote add origin git@github.com:' + repo + '.git');
    }).then(function () {
        console.log('Configuring...');

        return exec('npm install');
    });
});
