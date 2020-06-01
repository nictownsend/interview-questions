/**
 * Please write two custom hooks that could be used to replace useState for boolean properties.
 * 
 * 1. hook that returns the current value and a function to toggle it
 * 2. hook that returns the current value, and a function to set it to false, and a function to set it to true
 */

// Original switcher component with useState
const switcher = (props) => {

    const [toggled, setToggled] = useState(false);

    const toggleContent = () => setToggled(!toggled);

    const toggledMessage = toggled ? "Hide content" : "Show content";

    return (
        <div>
            <button onClick={toggleContent}>{toggledMessage}</button>
            {toggled && props.children}
        </div>
    );
};

/**
 * Please see also the code with unit test on 
 * https://codesandbox.io/s/toggle-custom-hooks-v2wxq?file=/src/App.test.js
 * 
 * To run test on codesandbox switch from the "Browser" tab to the "Tests" one.
 */

// 1. hook that returns the current value and a function to toggle it
const useToggle = (state) => {
    const [on, setOnState] = useState(state)
    const toggle = () => setOnState(o => !o)
  
    return {on, toggle}
}

// Example to implement the hook in the original "switcher" component
function SwitcherWithUseToggle({children}) {
    const {on: toggled, toggle: toggleContent} = useToggle(false)

    const toggledMessage = toggled ? "Hide content" : "Show content";

    return (
        <div>
            <button onClick={toggleContent}>{toggledMessage}</button>
            {toggled && children}
        </div>
    );
}


// 2. hook that returns the current value, and a function to set it to false, and a function to set it to true
const useSetToggle = (state) => {
    const [on, setOnState] = useState(state)
    const setOn = () => setOnState(true)
    const setOff = () => setOnState(false)
  
    return {on, setOn, setOff}
}

// Example to implement the hook in the original "switcher" component
function SwitcherWithUseSetToggle({children}) {
    const {on: toggled, setOn: toggleSetOn, setOff: toggleSetOff} = useSetToggle(false)

    const toggleContent = toggled ? toggleSetOff : toggleSetOn
    const toggledMessage = toggled ? "Hide content" : "Show content";

    return (
        <div>
            <button onClick={toggleContent}>{toggledMessage}</button>
            {toggled && children}
        </div>
    );
}


// Then components can be used like 
{/* <section>
        <SwitcherWithUseToggle>
            <p>Content visible</p>
        </SwitcherWithUseToggle>
        <hr />
        <SwitcherWithUseSetToggle>
            <p>Content visible</p>
        </SwitcherWithUseSetToggle>
</section> */}


