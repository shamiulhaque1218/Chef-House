// eslint-disable-next-line no-unused-vars
import React from 'react';

const Blog = () => {
    return (
        <div className='text-center p-6 text-xl'>
            <p className='text-rose-400 p-6'>1. Differences between uncontrolled and controlled components</p>
            <p className='text-violet-400 p-2'> Uncontrolled components refer to components that manage their own state internally, without relying on external state management.On the other hand, controlled components rely on external state management to manage their data. This means that the parent component is responsible for storing and updating the data for the controlled component. </p>
            <p className='text-rose-400 p-6'>2. How to validate React props using PropTypes</p>
            <p className='text-violet-400 p-2'> React provides a built-in library called PropTypes that allows us to define the types and shapes of the props that are passed to a component. PropTypes can help catch errors early on during development by providing warnings in the console if the type of a prop is incorrect</p>
            <p className='text-rose-400 p-6'>3. Difference between nodejs and express js</p>
            <p className='text-violet-400 p-2'> Node.js is a JavaScript runtime that allows you to run JavaScript on the server-side. It provides a runtime environment that allows developers to build server-side applications in JavaScript, including web applications, command-line tools, and server-side APIs.On the other hand, Express.js is a web application framework built on top of Node.js. It provides a set of high-level APIs that simplify the process of building web applications in Node.js. Express.js provides tools for routing, middleware management and more, which can help you quickly build robust and scalable web applications.</p>
            <p className='text-rose-400 p-6'>4. What is a custom hook, and why will you create a custom hook?</p>
            <p className='text-violet-400 p-2'> A custom hook in React is a reusable function that encapsulates common logic that can be shared across multiple components. Custom hooks allow you to extract complex logic into a separate function that can be used across multiple components in our application.Custom hooks are created by prefixing the name of the hook with the word "use". This naming convention is important, as it tells React that the function is a hook and should follow the rules of hooks.</p>
        </div>
    );
};

export default Blog;