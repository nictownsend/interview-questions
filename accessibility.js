/**
 * What aria attributes would you add to improve accessibility of this widget?
 * 
 * What considerations would be needed for keyboard users?
 */

const switcher = (props) => {

    const triggerAlert = () => alert('Button pressed');

    return (
        <div>
            <div onClick={triggerAlert}>A trigger</div>
            <img src="flower.jpg"/>
        </div>
    );
};