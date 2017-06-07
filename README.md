# recipe-helper
Optimizing the recipe flow for novice chefs by augmenting a mobile device using the Leap Motion API.

Interested in the design process? Read the [case study](https://medium.com/portfolio-carrie-mah/the-recipe-helper-834686422f52)

## Instructions on how to run:

**Viewing the layout**:
* Download the repository
* In the reveal.js folder, open `index.html`

**Editing the code**:
* Requires a browser (optimal on Google Chrome)
* Requires the [Leap Motion](https://developer.leapmotion.com/) SDK
* Requires [Node.js](https://nodejs.org/en/) & [Grunt](http://gruntjs.com/getting-started) to run [Reveal.js](https://github.com/hakimel/reveal.js)
* In the [reveal.js folder](https://github.com/missCarrieMah/recipe-helper/tree/master/reveal.js), run `grunt serve`
* Plug in your leap motion, ensure you're in a lighted area and you're ready to go!

## Gestures:

See [instructions.png](https://github.com/missCarrieMah/recipe-helper/blob/master/reveal.js/img/instructions.png) for a diagram

* [Swipe](https://developer.leapmotion.com/documentation/javascript/api/Leap.SwipeGesture.html#SwipeGesture) left or right to navigate pages (left goes back, right goes forward)
* [Swipe](https://developer.leapmotion.com/documentation/javascript/api/Leap.SwipeGesture.html#SwipeGesture) up or down to get more information about the ingredients (equivalent measurement units and ingredient substitutions)
* Move finger in a [circular motion](https://developer.leapmotion.com/documentation/javascript/api/Leap.CircleGesture.html#CircleGesture) on Slide 4 to start or pause the receipe time progress bar
* Tap finger in a [down-upwards motion](https://developer.leapmotion.com/documentation/javascript/api/Leap.KeyTapGesture.html#KeyTapGesture) on Slide 5 to start or pause the instructitional
