'use strict';
//Require dependencies
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {

  prompting() {

    this.log(yosay(
      'Welcome to the simple ' + chalk.bgBlue('ionfire') + ' generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'name',
        message: 'Project name? (no spaces)',
        default: this.appname,
        validate: function(str) {
          const regex = new RegExp("[\\s]");

          return Boolean(str) && !regex.test(str);
        }        
      },
      {
        type: 'input',
        name: 'author',
        message: 'The author name?'
      },
      {
        type: 'input',
        name: 'packageName',
        message: 'Your package name? (ex: com.companyname.appname)',
        validate: function(str) {
          const regex = new RegExp(
            '^(?:@[a-z0-9-~][a-z0-9-._~]*/)?[a-z0-9-~][a-z0-9-._~]*$'
          );
          return Boolean(str) && regex.test(str);
        }        
      },
      {
        type: 'input',
        name: 'apiKey',
        message: 'Your Firebase API Key?'
      },
      {
        type: 'input',
        name: 'authDomain',
        message: 'Your Firebase Auth Domain?'
      },
      {
        type: 'input',
        name: 'databaseURL',
        message: 'Your Firebase Database URL?'
      },
      {
        type: 'input',
        name: 'projectId',
        message: 'Your Firebase Project ID?'
      },
      {
        type: 'input',
        name: 'storageBucket',
        message: 'Your Firebase Storage Bucket?'
      },
      {
        type: 'input',
        name: 'messagingSenderId',
        message: 'Your Firebase Messaging Sender Id?'
      },
      {
        type: 'input',
        name: 'facebookAppId',
        message: 'Your Facebook App ID?'
      },
      {
        type: 'input',
        name: 'facebookAppName',
        message: 'Your Facebook App name?'
      },
      {
        type: 'input',
        name: 'googleReversedId',
        message: 'Your Google Reversed ID? (iOS)'
      },
      {
        type: 'input',
        name: 'googleWebClientId',
        message: 'Your Google Web Client ID?'
      },
      {
        type: 'confirm',
        name: 'initGit',
        default: true,
        message: 'Would you like to initialize a git repo here?'
      }
    ];

    return this.prompt(prompts)
      .then(function (props) {
        this.props = props;
      }.bind(this));
  }

  configuring() {
    if (this.props.initGit) {
      this.composeWith(require.resolve('generator-git-init'), {
        commit: 'Initial commit by generator-ionfire'
      });
    }
  }

  writing() {
    var toCopy = [
      "./src/app/app.component.ts",
      "./src/app/app.html",
      "./src/app/app.module.ts",
      "./src/app/app.scss",
      "./src/app/main.ts",
      "./src/assets/icon/favicon.ico",
      "./src/assets/imgs/logo.png",
      "./src/assets/imgs/facebook-icon.png",
      "./src/assets/imgs/google-icon.png",
      "./src/assets/imgs/thumbnail.svg",
      "./src/models/item.model.ts",
      "./src/models/user.model.ts",
      "./src/services/loading.service.ts",
      "./src/services/toast.service.ts",
      "./src/pages/home/home.html",
      "./src/pages/home/home.module.ts",
      "./src/pages/home/home.scss",
      "./src/pages/home/home.ts",
      "./src/pages/item/item.html",
      "./src/pages/item/item.module.ts",
      "./src/pages/item/item.scss",
      "./src/pages/item/item.ts",
      "./src/pages/login/login.module.ts",
      "./src/pages/login/login.scss",
      "./src/pages/register/register.html",
      "./src/pages/register/register.module.ts",
      "./src/pages/register/register.scss",
      "./src/pages/register/register.ts",
      "./src/theme/variables.scss",
      "./src/manifest.json",
      "./src/service-worker.js",
      "./resources/android/icon/drawable-hdpi-icon.png",
      "./resources/android/icon/drawable-ldpi-icon.png",
      "./resources/android/icon/drawable-mdpi-icon.png",
      "./resources/android/icon/drawable-xhdpi-icon.png",
      "./resources/android/icon/drawable-xxhdpi-icon.png",
      "./resources/android/icon/drawable-xxxhdpi-icon.png",
      "./resources/android/splash/drawable-land-hdpi-screen.png",
      "./resources/android/splash/drawable-land-ldpi-screen.png",
      "./resources/android/splash/drawable-land-mdpi-screen.png",
      "./resources/android/splash/drawable-land-xhdpi-screen.png",
      "./resources/android/splash/drawable-land-xxhdpi-screen.png",
      "./resources/android/splash/drawable-land-xxxhdpi-screen.png",
      "./resources/android/splash/drawable-port-hdpi-screen.png",
      "./resources/android/splash/drawable-port-ldpi-screen.png",
      "./resources/android/splash/drawable-port-mdpi-screen.png",
      "./resources/android/splash/drawable-port-xhdpi-screen.png",
      "./resources/android/splash/drawable-port-xxhdpi-screen.png",
      "./resources/android/splash/drawable-port-xxxhdpi-screen.png",
      "./resources/ios/icon/icon-40.png",
      "./resources/ios/icon/icon-40@2x.png",
      "./resources/ios/icon/icon-40@3x.png",
      "./resources/ios/icon/icon-50.png",
      "./resources/ios/icon/icon-50@2x.png",
      "./resources/ios/icon/icon-60.png",
      "./resources/ios/icon/icon-60@2x.png",
      "./resources/ios/icon/icon-60@3x.png",
      "./resources/ios/icon/icon-72.png",
      "./resources/ios/icon/icon-72@2x.png",
      "./resources/ios/icon/icon-76.png",
      "./resources/ios/icon/icon-76@2x.png",
      "./resources/ios/icon/icon-83.5@2x.png",
      "./resources/ios/icon/icon-1024.png",
      "./resources/ios/icon/icon-small.png",
      "./resources/ios/icon/icon-small@2x.png",
      "./resources/ios/icon/icon-small@3x.png",
      "./resources/ios/icon/icon.png",
      "./resources/ios/icon/icon@2x.png",
      "./resources/ios/splash/Default-568h@2x~iphone.png",
      "./resources/ios/splash/Default-667h.png",
      "./resources/ios/splash/Default-736h.png",
      "./resources/ios/splash/Default-Landscape-736h.png",
      "./resources/ios/splash/Default-Landscape@~ipadpro.png",
      "./resources/ios/splash/Default-Landscape@2x~ipad.png",
      "./resources/ios/splash/Default-Landscape~ipad.png",
      "./resources/ios/splash/Default-Portrait@~ipadpro.png",
      "./resources/ios/splash/Default-Portrait@2x~ipad.png",
      "./resources/ios/splash/Default-Portrait~ipad.png",
      "./resources/ios/splash/Default@2x~iphone.png",
      "./resources/ios/splash/Default@2x~universal~anyany.png",
      "./resources/ios/splash/Default~iphone.png",
      "./resources/icon.png",
      "./resources/icon.png.md5",
      "./resources/README.md",
      "./resources/splash.png",
      "./resources/splash.png.md5",
      "./.editorconfig",
      "./tsconfig.json",
      "./tslint.json",
    ];
    
    var toCopyTpl = [
      "./src/app/app.firebase.config.ts",
      "./src/pages/login/login.html",
      "./src/pages/login/login.ts",
      "./src/index.html",
      "./ionic.config.json",
      "./package-lock.json",
      "./package.json",
      "./config.xml"
    ];

    var i;
    for (i = 0; i < toCopy.length; i++) {
      this.fs.copy(this.templatePath(toCopy[i]), this.destinationPath(toCopy[i]));
    }
    for (i = 0; i < toCopyTpl.length; i++) {
      this.fs.copyTpl(this.templatePath(toCopyTpl[i]), this.destinationPath(toCopyTpl[i]), this.props);
    }

    this.fs.copy(this.templatePath('./__gitignore'), this.destinationPath('./.gitignore'));
  }

  install() {
    this.npmInstall();
  }
}
