# react-news-app

Uses React, Redux, Immutable, Express

1. Install dependencies app
```
npm i
```
2. Install dependencies server
```
cd simple_api
npm i
```
3. Run webpack dev server
```
npm start
```
4. Go to localhost:8080

<hr>

Functionality of the application:

* The educational project, whose goal is to unite the best practices from the world of React

Functionality of the code:

* Used decorator, a pattern that allows you to render the functionality of the component and re-use it in other components
* Uses third-party components react-select and react-day-picker, the dependencies between them
<p align="center">
    <a href="http://www.picshare.ru/view/8340646/" target="_blank"><img src="http://www.picshare.ru/uploads/171103/RY8uqi9x0H.jpg" border="0" width="700" height="211"></a>
</p>

* Uses prop-types
* Uses animation react-addons-css-transition-group
* Uses Redux for managing business logic, implemented the removal of articles
* Uses selectors, a pattern that allows you to use reselect and flexibly manage the store state of components
* Uses the ability to comment on articles and added client-side form validation
* The application was rewritten to immutable js
<p align="center">
    <a href="http://www.picshare.ru/view/8340631/" target="_blank"><img src="http://www.picshare.ru/uploads/171103/XP7NBRJ2R4.jpg" border="0" width="700" height="334"></a>
</p>

* Connected server on the Express , articles and comments loaded with it, add the mechanism of proxy
* Added Loader, analysis of three response states from the server START, SUCCESS, FAIL
* Implemented asynchronous AC control due to redux-thunk
* Optimization through customization shouldComponentUpdate
* Added routing, we also work with advanced router settings - match object, play with children, render, NavLink, withRouter
<p align="center">
    <a href="http://www.picshare.ru/view/8340614/" target="_blank"><img src="http://www.picshare.ru/uploads/171103/57Qd3G46HX.jpg" border="0" width="700" height="315"></a>
</p>

* Uses API history HTML5
* Added comments pagination
<p align="center">
    <a href="http://www.picshare.ru/view/8340636/" target="_blank"><img src="http://www.picshare.ru/uploads/171103/c0g6PAkdwm.jpg" border="0" width="700" height="241"></a>
</p>

* Implemented redirect and asynchronous redirect react-router-redux
* Implemented multilanguage site using context
<p align="center">
    <a href="http://www.picshare.ru/view/8340642/" target="_blank"><img src="http://www.picshare.ru/uploads/171103/965KPs8qs1.jpg" border="0" width="700" height="354"></a>
</p>









