import {TitleBar} from './ui/TitleBar';

export class BaseApp{

    constructor(title) {
        this.title = title;        
        this.titleBar = new TitleBar("Fleet Manager");
        this.routeMap = {};
        this.defaultRoute = null;
    }

    addRoute(pageName, pageObject, defaultRoute = false){

        this.titleBar.addLink(pageName, '');
        this.routeMap[pageName] = pageObject;

        if(defaultRoute){
            this.defaultRoute = pageName;
        }
    }

    activateRoute(route){

        let pageContainer = this.titleBar.element.find('.page-content');
        pageContainer.empty();

        this.routeMap[route].addTo(pageContainer); 
    }

    initIn(target){

        this.titleBar.addTo(target);
        this.titleBar.element.find('.mdl-navigation__link').click( evt => {

            let route = (evt.target.innerHTML).trim();
            this.activateRoute(route);
            // console.log(route);
        });

        if(this.defaultRoute)
            this.activateRoute(this.defaultRoute);
    }
}