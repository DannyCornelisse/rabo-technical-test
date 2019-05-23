

# RaboTechnicalTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Frontend deciscion log
- Angular Material was chosen to quickly scaffold components for the UI, providing fast development
- Down-side of angular materials is the inflexibility in terms of styling, with the danger of resorting to pseudo-selectors such as ::ng-deep. However, for this technical test I decided to accept this.
- Papa was chosen to parse csv to json/js. In my investigation for a solution I mainly encoutered manual parsing of csv strings to json/js, mostly using String.prototype.replace in combination with regular expressions. In the light of time constraints I chose Papa to parse the csv to js, which is maintained and regularly updated by its developers. Also, manual parsing of csv may introduce errors.
- Angular cli was used to quickly generate new components, services and modules

## Deploying app 
Preferably, this app is automatically deployed to a staging/production environment everytime the master/develop branch is updated (push/merge). Open source tool: Jenkins.
requirements: 
- run `ng test --single-run=true` for unit tests 
- run `ng e2e` for end-to-end testing

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
