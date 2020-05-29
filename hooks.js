/**
 * If this component is unmounted after 5 seconds, what will have been logged to the console?
 * And what will the last rendered HTML snippet be?
 */

 /**
  * Console output:
  * =========================
  * Mounted component
  * Counter is 4
  * Exiting
  *
  * Last rendered HTML:
  * =========================
  * <div>5</div>
  */

import { useEffect } from "react";

const switcher = (props) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Mounted component');
        const counter = setInterval(() => {
            if(counter % 2 === 0) {
                console.log(`Counter is ${counter}`);
            }
            setCounter(counter + 1);
        }, 1000);
        return () => {
            clearTimeout(counter);
            console.log("Exiting");
        }
    }, []);

    return (
        <div>
            {counter}
        </div>
    );
};
