/**
 * Questions:
 * What aria attributes would you add to improve accessibility of this widget?
 * What considerations would be needed for keyboard users?
 * 
 * 
 * SOLUTION:
 * In this code snippet we have to consider screen readers.
 * 
 * I added alt (description) to image tag for screen readers. Then the screen readers can read the description.
 * 
 * The div "button" should have a role, tabindex and onKeyDown 
 * if the "button" has to be kept as a div element, then it should be something like 
 * 
 * <div role="button" tabindex="0" onClick={triggerAlert} onKeyDown={triggerAlert}>A trigger</div>
 * 
 * The role="button" is required to recognize that the div is a button, 
 * the tabindex attribute has to be used to make the button to be focusable 
 * and reachable from screen readers and keyboards, 
 * the onKeyDown event has to be added for enabling an action of hitting "Enter" or "Space" key on the keyboard.
 * 
 * But instead of using a div element I'd recommend to replace it with a button element 
 * and improve a name of the button for better user description. We can have something like
 * 
 * <button onClick={triggerAlert}>Trigger alert</button> 
 * 
 * then the button will be descriptive and accessable for the screen readers. 
 * The button element has accessibility built in by the browser.
 * 
 * When the screen reader is on the button and "Enter" or "Space" key on a keyboard is hit, the alert will be fired.
 * Hitting "ESC" or "Enter" key closes the open alert pop-up.
 */

const ImageWithAlert = (props) => {

    const triggerAlert = () => alert('Button pressed');

    return (
        <div>
            <button onClick={triggerAlert}>Trigger alert</button>
            <img src="flower.jpg" alt="a beautiful picture of sunflowers"/>
        </div>
    );
};