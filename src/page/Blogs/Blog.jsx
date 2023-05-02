import React, { createRef } from 'react';
import Pdf from "react-to-pdf";


const ref = createRef();
const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div ref={ref} >
                <h1 className='text-center text-6xl font-semibold py-10'>Some important article</h1>

                <div>
                    {/* article 1  */}
                    <div>
                        <h1 className='text-4xl font-mono font-extralight'>1 : Differences between uncontrolled and controlled components.</h1>
                        <p>
                            <br />
                            <span className='text-xl font-mono font-extralight'> Controlled Vs Uncontrolled</span> <br /><br />
                            <span className='text-xl font-mono font-extralight'> Controlled Component: </span><br />

                            Unlike the uncontrolled component, the input form element in the controlled <br />
                            component is handled by the component rather than the DOM. It takes its current  <br />
                            value through props. The changes are notified through callbacks.  <br /><br />

                            <span className='text-xl font-mono font-extralight'>Uncontrolled component:</span><br />

                            Similar to the traditional HTML form inputs, the uncontrolled component <br />
                            can be written using a ref to get form values from the DOM. Thus there <br />
                            is no need to write an event handler for every state update and the HTML <br />
                            elements maintain their own state that will be updated when the input value changes.
                        </p>
                    </div>
                    {/* article 2  */}
                    <div className='py-10'>
                        <h1 className='text-4xl font-mono font-extralight'>2 : How to validate React props using PropTypes?</h1>
                        <p>
                            <br />
                            <span className='text-xl font-mono font-extralight'> To validate React props using PropTypes, follow these steps:</span> <br /><br />
                        </p>

                        <ul className='list-disc'>
                            <li >Install the 'prop-types' package from npm</li>
                            <li>Import the PropTypes library from 'prop-types' into your component file.</li>
                            <li>Define a static propTypes object for your component that types and whether <br />
                                or not they are required. You can use PropTypes to
                                validate strings, numbers, booleans, arrays, <br /> objects, functions, and more.</li>
                            <li>Pass the props to your component as usual, and PropTypes will <br /> automatically validate them against the propTypes you defined.</li>
                            <li>If a prop value does not match the expected data type <br /> or is missing a required prop, a warning message will be printed to the console.</li>
                            <li>Make sure to fix any issues that PropTypes identifies to <br /> ensure that your component receives the expected props.</li>
                        </ul>
                    </div>

                    {/* article 3  */}
                    <div className='py-10'>
                        <h1 className='text-4xl font-mono font-extralight'>3 : Difference between nodejs and express js.</h1>
                        <p> <br />
                            <span className='text-xl font-mono font-extralight'>Node.js: </span> <br /><br />
                        </p>

                        <p>
                            Node.js is an open source and cross-platform runtime environment for <br />
                            executing JavaScript code outside of a browser. You need to remember <br />
                            that NodeJS is not a framework and it’s not a programming language.  <br />
                            Most of the people are confused and understand it’s a framework or a programming language.
                        </p>

                        <p> <br />
                            <span className='text-xl font-mono font-extralight'>Express.js: </span> <br /><br />
                        </p>

                        <p>
                            Express is a small framework that sits on top of Node.js’s web server functionality <br />
                            to simplify its APIs and add helpful new features. It makes it easier <br />
                            to organize your application’s functionality with middle ware and routing. <br />
                            It adds helpful utilities to Node.js’s HTTP objects.
                        </p>
                    </div>

                    {/* article 4  */}
                    <div className='py-10'>
                        <h1 className='text-4xl font-mono font-extralight'>4 : What is a custom hook, and why will you create a custom hook?</h1>
                        <p> <br />
                            <span className='text-xl font-mono font-extralight'>What is a custom hook?</span> <br /><br />
                        </p>

                        <p>
                            In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows  <br />
                            you to reuse stateful logic between components. Custom hooks are a way to extract <br />
                            common functionality from components and reuse it across your application.  <br />
                        </p>

                        <p> <br />
                            <span className='text-xl font-mono font-extralight'>why will you create a custom hook? </span> <br /><br />
                        </p>

                        <p>
                            There are several reasons why you might create a custom hook in React: <br /> <br />
                            <ul className='list-disc'>
                                <li>Reusability</li>
                                <li>Abstraction</li>
                                <li>Composition</li>
                                <li>Encapsulation</li>
                                <li>Code organization</li>
                            </ul>
                        </p>
                    </div>


                </div>
            </div>

            <div className='text-center py-11'>
                <Pdf targetRef={ref}  x={1} y={1} scale={1} filename="importantArtical.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className="btn btn-outline btn-info">Download PDF</button>}
                </Pdf>
            </div>
        </div>
    );
};

export default Blog;