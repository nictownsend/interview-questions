/**
 * What aria attributes would you add to improve accessibility of this widget?
 *
 * What considerations would be needed for keyboard users?
 */

const switcher = (props) => {

    const triggerAlert = () => alert('Button pressed');

    return (
        <div role="main">
            <div role="button" tabindex="0" onClick={triggerAlert}>A trigger</div>
            <img aria-label="Photograph of a Rose taken by Damien McDonnell" src="flower.jpg" alt="Photograph of a Rose" />
        </div>
    );
};
