General Requirements for the HTML:

1. Three icons at the top

   - MIDDLE ICON will be highlighted always

2. main image -> for the dog

   - Image information on top of the image.
     1. name, age of the Dog
     2. bio of the Dog
   - Either LIKE or NOPE ON TOP OF THE IMAGE

3. Two clickable icon below the image.
   - First Icon: Cross Icon
   - Second Icon: Heart Icon

**FUNCTIONALITIES:**

1. When user click on the ❌,

   - Nope should appear on top of the image

2. When user click on the 💖,

   - Like should appear on top of the image

3. When either of the icon is clicked, the next image should be rendered after 1 or 2 second.

<!-- BREAKDOWN -->

**HTML and CSS**

_FIRST TASK:_

1. Have the three icons in the header.✅
2. Highlight the middle one.✅

_SECOND TASK:_

1. Have the dog image rendered on the page.✅
2. Have the text on top of the image, at the left bottom of the image.✅

_THIRD TASK:_

1. Have the heart and cross icon below the image on the page.✅

**JAVASCRIPT**

1. add Dogs data to the data file✅
2. store dogs images to the dogs folder✅

<!-- HIGH LEVEL OVERVIEW FOR FUNCTIONALITY -->

1. When user click on the heart icon, Like image will appear on top of the dog's image.
2. When user click on the cross icon, Nope image will appear on the top of the dog's image.
3. When either NOPE or LIKE has been appeared on the dog's image, both the heart and cross icon will be disabled, UNTIL the new image has appeared.
4. STEP#1 till STEP#3, WILL repeat itself, until all the data has been appeared on the page.

_FIRST TASK:_

<!-- Render the html along with DOG container on the page, when the app starts. -->

1. Render the html from Dog class, which will render the data.✅

<!-- How to loop through data and render it dynamically using Dog Class. -->✅

1. Attach an event listener to the heart icon.
   - When click on it, "Heart Icon" msg will be printed on console.✅
     <!-- How to make the new Dog data render on the page, when click on the heart icon -->

**Breakdown:**

1.  getNewDog() => gives new dog object.
2.  getDogHtml() => will create an html for the dog object, and when called will render the html on the page.
3.  render() => will render the html from the _getDogHtml()_, function.

<!-- How, When, where to call the getNewDog() -->

=> Somehow attach the getNewDog() with the getDogHtml(), so when render() gets called, it will call the getNewDog(), which then call the getDogHtml() with the new object.

1. Call dog's instance each time, when click on the button

<!-- Return an empty object, when the array is empty -->✅

**NEXT GOAL: Make the dog data gets rendered when click on either of the icon.**✅

1. Attach an event listener for the nope-icon
2. Call the same function which was called when click on the Heart icon.

**NEXT GOAL: Make the image gets rendered on the dog image, when click on heart or nope icon.**

<!-- BREAKDOWN -->

*BEFORE THAT: Check if either of the button was clicked, then set **hasBeenSwiped to true**, then move towards rendering the image either like or nope image*✅

_remember: to use the **hasBeenLiked** property alter according to the clicked icon and then have the image source accordingly._

1. hasBeenLiked's property value is getting changed according to the clicked icon. ✅

**Style the image which show up, when clicked on the button accordingly.**

<!-- Breakdown -->

1. First have the image rendered when clicked on any of the icon.✅

**Next Step: Style the image, so it appear on top of the Dog Image**✅

**Next Step: After the image has been displayed, either LIKE or NOPE, both the buttons would be disabled.**

1.
