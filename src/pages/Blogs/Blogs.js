import React from 'react';

const Blogs = () => {
    return (
        <div className='m-8'>
            <h2 className='text-xl font-semibold'>Question-1 : When should you use context api?  </h2>
            <p className='text-lg mb-3'>Ansewer : Context api manage our component state.Context api helps share data between component to component easily thats we can't do it easily by props.When we share complex data componet to component for this context api is very useful we can do it easily.We can also share specific states with multiple components instead through props manually</p>
            <h2 className='text-xl font-semibold'>Question-2 : What is custom hooks?</h2>
            <p className='text-lg mb-3'>Ansewer: Custom hooks is a fuction. custom hooks helps us to share same logic in multiple components. Custom hooks can be called from different components, allowing us to reuse the same code in different parts of our application. It allow us to abstract component logic into reusable functions </p>
            <h2 className='text-xl font-semibold'>Question-3 : What is useRef?</h2>
            <p className='text-lg mb-3'>Ansewer: UseRef is hooks in react js.Through this We can access dom element directy.It can store dom element mutable value when we update this dom element value the compone can't be re render.</p>
            <h2 className='text-xl font-semibold'>Question-4 : What is useMemo?</h2>
            <p className='text-lg mb-3'>Ansewer: UseMemo is a hook that returns a momoized value.UseMemo hooks remember the return values of a function and only forget them when the objects on which the function depends change.When the component re-render the value can't calculated again it gives momoized value through this useMeme hooks.this can improve performance.</p>
        </div>
    );
};

export default Blogs;