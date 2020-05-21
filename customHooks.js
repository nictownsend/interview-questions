/**
 * Please write two custom hooks that could be used to replace useState for boolean properties.
 * 
 * 1. hook that returns the current value and a function to toggle it
 * 2. hook that returns the current value, and a function to set it to false, and a function to set it to true
 */

const switcher = (props) => {

    const [toggled, setToggled] = useState(false);

    const toggleContent = () => setToggled(!toggled);

    const toggledMessage = toggled ? "Hide content" : "Show content";

    return (
        <div>
            <button onClick={toggleContent}>{toggledMessage}</button>
            {toggled && children}
        </div>
    );
};