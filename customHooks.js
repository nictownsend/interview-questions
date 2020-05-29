/**
 * Please write two custom hooks that could be used to replace useState for boolean properties.
 *
 * 1. hook that returns the current value and a function to toggle it
 * 2. hook that returns the current value, and a function to set it to false, and a function to set it to true
 */

 /**
  * Custom hooks have been created but are not used currently.
  * Please remove comment tags for testing each of the custom hooks and their corresponding buttons in the return of the component.
  */
//  Task 1
function useToggle (initial) {
  const [isTrue, setIsTrue] = useState(initial);

  const toggle = () => setIsTrue(current => !current);

  return [isTrue, toggle];
};

// Task 2
function useToggleTrueFalse (initial) {
  const [isTrue, setIsTrue] = useState(initial);

  const setTrue = () => setIsTrue(true);
  const setFalse = () => setIsTrue(false);

  return [isTrue, setTrue, setFalse];
};


const switcher = (props) => {

    const [toggled, setToggled] = useState(false);
    // const [toggled, toggleContent] = useToggle(false); // Task 1: Custom hook
    // const [toggled, setTrue, setFalse] = useToggleTrueFalse(false); // Task 2: Custom hook

    const toggleContent = () => setToggled(!toggled);

    const toggledMessage = toggled ? "Hide content" : "Show content";

    return (
        <div>
            <button onClick={toggleContent}>{toggledMessage}</button>
            {
              // Task 2: Button for setTrue call on useToggleTrueFalse hook
              // <button onClick={setTrue}>Set True</button>
            }
            {
              // Task 2: Button for setFalse call on useToggleTrueFalse hook
              // <button onClick={setFalse}>Set False</button>
            }
            {toggled && children}
        </div>
    );
};
