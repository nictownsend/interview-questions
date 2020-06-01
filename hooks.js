/**
 * If this component is unmounted after 5 seconds, what will have been logged to the console?
 * And what will the last rendered HTML snippet be?
 */

import { useState, useEffect } from "react";

// Original component
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

/**
 * I have to confirm that this is a very interesting problem 
 * using react useEffect hook and "callback" function in it.
 * 
 * When I went through the code I found out that the code uses state variable of "counter" 
 * and it also uses the same variable name of "counter" for "setInterval". 
 * The "counter" for "setInterval" represents the setInterval ID and we don't know what id number it'll be
 * before running the code.
 * So when the code is executed and component is unmounted after 5 seconds, "Mounted component" and "Exiting" 
 * will always be logged to the console. There can also be logged "Counter is ..." 
 * between "Mounted component" and "Exiting". It depends on the value of "counter" for "setInterval".
 * If the value of "counter" for "setInterval" is an even number then "Counter is ..." is logged.
 * 
 * e.g. 
 * Mounted component 
 * Counter is 32 
 * Counter is 32 
 * Counter is 32 
 * Counter is 32 
 * Exiting 
 * 
 * otherwise there will be no "Counter is ..."
 * 
 * Having the same name variables of the "counter" in this case causes an issue. 
 * When we call "counter" inside of the setInterval function we have access to the value of "counter" 
 * for "setInterval" not the state variable of "counter". 
 * Also to know that the "counter" for "setInterval" overshadows the state variable of "counter".
 * When we call "setCount" we pass into it the "counter" for "setInterval" not the state variable of "counter". 
 * Because of this above, the number which renders on the webpage will be the "counter" for "setInterval" plus 1. 
 * So if the "counter" for "setInterval" is 32, the number rendered on html is 33.
 * We also need to remember that the setInterval function is created just ones in the time when a component is mounted in our case,
 * because we pass an empty array [] as a second argument to useEffect.
 */

 /**
  * I'm not sure what was the main intention of creating this code, but if it was for logging 
  * something like
  * 
  * e.g.
  * Mounted component 
  * Counter is 0 
  * Counter is 2 
  * Exiting 
  * 
  * to the console then we can use the following code for it.
  * 
  * The code can also be seen and tested on 
  * https://codesandbox.io/s/setinterval-in-useeffect-msby3?file=/src/App.js:84-667
  */

 const Counter = () => {
    const [counter, setCounter] = useState(0);
  
    // extracting callback from setInterval and assigning it into current ref of "savedCallback"
    // causes that every render saves the latest callback into current ref and then we can call ref in setInterval
    const savedCallback = useRef();
    const intervalCallback = () => {
      // now we have access to the state of "counter"
      if (counter % 2 === 0) {
        console.log(`Counter is ${counter}`);
      }
      setCounter(counter + 1);
    };
    
    // will be set up every time when the component is rendered, 
    // because no second argument is passed into useEffect. 
    useEffect(() => {
      savedCallback.current = intervalCallback;
    });
  
    useEffect(() => {
      console.log("Mounted component");
      const counter = setInterval(() => savedCallback.current(), 1000);
      return () => {
        clearTimeout(counter);
        console.log("Exiting");
      };
    }, []);
    
    // number 4 will be rendered after 5 seconds
    return <div>{counter}</div>;
  };
