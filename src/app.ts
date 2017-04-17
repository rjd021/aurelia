import {Router, RouterConfiguration} from 'aurelia-router';


export class App {

  router : Router;
  message = 'Hello World!';
    constructor() {}

  configureRouter(config: RouterConfiguration, router: Router) : void{
    config.title = 'Aurelia Routing';
    config.options.root = '/';

    config.map([
      {route: ['','home'], name: 'home', moduleId: './home', nav: true, title: 'Home'},

      {route: 'about', name: 'about', moduleId: './about', nav: true, title: 'About'},
      
      {route: 'account', name: 'account', moduleId: './account', nav: true, title: 'Account'}

       ]);

    this.router = router;
  }

}


