## Comments for Mobile Nav 1

##### c001
Source: https://gist.github.com/octocat/9257657

##### c002
We can turn this on to verify that the DOM can properly access JS functions.

#### c003
The code here comes from a [pen](https://codepen.io/eduardoboucas/pen/BNyKwO) by Eduardo Boucas. Although code in *vendor.scss* is usually not modified, we have made changes here to better suit our purposes for this exercise.

#### c004
Because we cannot wrap the *icon* that toggles the mobile menu with ` .y-wrap `, we use a percentage that is half of the difference between 100% and the width of ` .y-wrap `.

#### c005
Whenever we use ` position: fixed `, we create more work for ourselves. This is the case for our navigation because we are combining three separate nav elements, all of which use ` position: fixed `. If we did not need a fixed navigation area, we could greatly simplify things by placing the nav elements inside of a wrapper control where they land on the page with less code. The nav elements are separate so we can provide a better user experience regardless of the device size – in other words, we need a way to control how we show and hide a mobile menu. This also means that we need to use ` z-index `, which adds to the complexity of coding the UI. Aside from these issues, ` position: fixed ` creates more work for us when building a responsive site because if we ever change ` font-size `, for example, in an fixed area, we will most likely have to adjust the positioning of this area. The moral of the story is this: ` position: fixed ` should be avoided as much as possible. There are times when we have to use it but it should be a last resort since it adds extra work and complexity to our code.

#### c006
It may not be immediately obvious but this class also includes the style definitions that create what the user perceives to be the entire navigation area.

#### c007
*Sizer* is for development only and should be turned off before launch.

#### c008
This pseudo elements adds a white-to-transparent gradient which allows the text to fade out just before passing beneath the navigation.

#### c009
An ID is prefixed with ` t- ` to indicate that it is the *target* of a function in JavaScript. The name that follows the prefix is name of the class that is assigned to the same element. For example, ` id="t-navitems" class="navitems" `. IDs should never be styled.

#### c010
Any website with readable text will need a point defined at which its contents no longer continue to fill the width of the viewport.
