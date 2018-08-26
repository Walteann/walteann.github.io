# Walteann Portfólio

  <a href="https://walteann.github.io/walteann">https://walteann.github.io/walteann<a>

  <p> portfólio </p>

  <a href="https://github.com/Walteann/walteann">https://github.com/Walteann/walteann</a>

### Build do Angular 6 agora cria uma subpasta em dist.

<p>para colocar no gh-pages segue os passos</p>

<pre>
  <code>ng build --prod --base-href "https://USERNAME.github.io/NOMEDOPROJETO/"</code>

  <code>ng build --prod --base-href "https://walteannn.github.io/walteann/"</code>

  <code>npx ngh --dir=href/NOMEDOPROJETO</code>

  <code>npx ngh --dir=href/walteann</code>
</pre>

<p>Então o deploy é feito, e na branch gh-pages que é criada no github recebe o deploy sem a subpasta</p>


### Comandos para remover gh-pages

<pre>
  <code>git push origin gh-pages --delete</code>
</pre>


# WalteannGithub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

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
