<!-- .slide: data-background="reveal.js/img/bg-1.png" -->
<!-- .slide: class="title" -->
</br>
</br>
## Webinar: Tips and Tricks for Developing and Debugging Apps
Kelly Hutchins and Heather Gonzago

----

<!-- .slide: data-background="reveal.js/img/bg-4.png" -->
<img style="margin: -75px 0px" src="images/go-to-webinar.png">

----

<!-- .slide: data-background="reveal.js/img/bg-4.png" -->
</br>
</br>

### **Slides and demos can be accessed at:**

## <a href="https://shorturl.at/lrtN8" target="_blank">https://shorturl.at/lrtN8</a>

----

Ever have one of those days where nothing seems to work?
<img style="height: 625px;" src="images/frustrated.jpeg">

----

You keep staring at the same code, but you have nothing...
<img src="images/code-flying.jpeg">

----

Debugging tools === Productive programmers
</br></br>
<img src="images/debug-happy.png">

----
### **Things we'll discuss**
</br>
- Setting up your development environment
- Troubleshoot web application
- Popular browser developer tools
- Give us your questions

----

<!-- .slide: data-background="reveal.js/img/bg-3.png" -->
</br></br>
## **Setting up your development environment**

----

### **JavaScript IDE/Source code editor**
</br>
- Lots of choices
  - Atom, Brackets, WebStorm, Sublime, VSCode
- Debugging support
- Extensions

----

### Extensions
 - Beautify, Prettier 
 - EsLint
 - Bracket colorizer
 - Themes
  
<img src="images/pretty.gif" />
  

----
### Font
</br>
  - Programming font with ligatures
  - Fira Code, Hasklig, Cascadia  

  <img src="images/ligatures.png"/>

----

### **Code snippets/Emmet**
</br>
<img style="float:right" src="https://github.com/Esri/arcgis-js-vscode-snippets/raw/master/./images/code-snippets.gif" alt="example">
- Templates for reuseable code
- [ArcGIS API for JavaScript snippets](https://marketplace.visualstudio.com/items?itemName=Esri.arcgis-jsapi-snippets&ssr=false#overview)
- [Snippet generator](https://pawelgrzybek.com/snippet-generator/)
- - Emmett
 - Save keystrokes
 - HTML, CSS abbreviations
 - [Plug-in page](https://emmet.io/download/)

----

### **TypeScript/Babel**
</br>
<a href="./Demos/babel-demo/readme.md" target="_blank">
  <img style="float: right; width:761px; height:447px" src="images/intellisense.png">
</a>
- Code assist
- ES6
- <a href="https://developers.arcgis.com/javascript/latest/guide/typescript-setup/" target="_blank">TypeScript setup</a>

----
<!-- .slide: data-background="reveal.js/img/bg-3.png" -->

## **Demo: Code Assist**
  - Show code assist 
  - Show emmet 

----

### **Local web server**
</br>
- Setup IIS or Apache
  - Visit [http://localhost](http://localhost)
- Local dev server with live reload:
 - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
 - [local-web-server](https://www.npmjs.com/package/local-web-server)
 - [http-server](https://www.npmjs.com/package/http-server)
<!-- .slide: data-background="reveal.js/img/bg-3.png" -->
----

### ** Starter App **
</br>

<a target="_blank" href="https://jsapi-414-template-app.surge.sh/"><img style="float: right; width:761px; height:447px" src="images/cliapp.png">
</a>
- TypeScript
- WebPack
- [ArcGIS API JS Template App](https://github.com/odoe/jsapi-cli-template-app)

----

<!-- .slide: data-background="reveal.js/img/bg-3.png" -->
</br></br>
## **Troubleshooting your web application**

----

### **Narrow down the problem**
</br>
<img style="float: right"; src="images/onion.jpg">

Debugging tools can help determine:
- Is it code related?
- Is the issue on the client (API) or server?
- Is there a performance issue?
- Is the issue with the data?

----

<!-- .slide: data-background="reveal.js/img/bg-2.png" -->
## **Browser developer tools**

<img style="width: 60%; margin: none; background: none; border: none" src="images/chrome-dev-tools.png">

----
<!-- .slide: data-background="reveal.js/img/bg-2.png" -->
### **Debugging: code issues**
</br>
- Common examples of application-level problems:
  - Modules out of order
  - View, Map, Layer not ready
  - Typos (yes, it happens quite often)

----
<!-- .slide: data-background="reveal.js/img/bg-2.png" -->
### Modules out of order

Multiple errors can stem from wrong module order
<img src="images/module-order.png">
<img src="images/module-order-2.png">

----
<!-- .slide: data-background="reveal.js/img/bg-2.png" -->
### Not getting the results you expect

- Has the view containing the map fully loaded before executing code?
- Has the <a href= "https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=intro-layers" target="_blank">layer</a> fully loaded before performing specific functions?

<pre style="display:inline-block; padding: 5px; margin: 10px auto; width: 100%;"><code data-trim> 
// Create a MapView instance (for 2D viewing)
var view = new MapView({
  map: myMap,  // References a Map instance
  container: "viewDiv"  // References the ID of a DOM element
});

view.when(function(){
 // All the resources in the MapView and the map have loaded. Now execute additional processes
}, function(error){
 // Use the errback function to handle when the view doesn't load properly
 console.log("The view's resources failed to load: ", error);
});

</code></pre>

----
<!-- .slide: data-background="reveal.js/img/bg-3.png" -->
</br>
</br>
### Demo: Debugging code using breakpoints

----

### ** Debugging: Network requests**

</br>
<img style="float: right;" src="images/network.png">

- Records all network requests
- Inspect network traffic if not getting the correct results, e.g.
  - Search widget not displaying properly
  - Geoprocessing task not executing as expected
  - Querying layer features
  
----
<!-- .slide: data-background="reveal.js/img/bg-3.png" -->
</br>
</br>
### Demo: Network requests

----
<!-- .slide: data-background="reveal.js/img/bg-2.png" -->
### Console

- View logged messages
  <a href="./Demos/js-demo/index.html"><img src="images/consoleerror.png"/></a>
- Run JavaScript
  
  <a target="_blank" href="https://developers.arcgis.com/javascript/latest/sample-code/webmap-basic/live/index.html"><img src="images/latlong.png"/></a>

----

<!-- .slide: data-background="reveal.js/img/bg-2.png" -->
### CSS: Color Themes

- Detect user color scheme preferences 
  - CSS media feature (light, dark, no-preference)
- Emulate via dev tools
  
  <a href="./Demos/js-demo/index.html"><img src="./images/theme-prefs.png" style="float:right;"> </a>
----
<!-- .slide: data-background="reveal.js/img/bg-2.png" -->
#### CSS: Inspect Styles  

- Inspect element css
- View classes applied to selected element
<img src="./images/computed-css.png">
- <a target="_blank" href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html">View widget styles</a>

----

<!-- .slide: data-background="reveal.js/img/bg-4.png" -->
</br>
## Questions?
</br>
</br>
[https://github.com/hgonzago/tips-tricks-webinar](https://github.com/hgonzago/tips-tricks-webinar)