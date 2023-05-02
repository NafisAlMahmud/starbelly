import React from "react";

const Blogs = () => {
  return (
    <div>
      <>
        <div className="my-conntainer mt-16  mb-10">
          <div className="blog-title">
            <h2 className="text-center text-4xl font-semibold">Blogs</h2>
          </div>
          <div className="qna text-left text-2xl">
            <div className="border border-x-yellow-500 mt-2"></div>
            <h3 className="font-bold mt-8">
              1. When should you use context API?
            </h3>

            <h2>
              Context API in React js is a way to manage and share state between
              components without having to pass props down manually through
              every every level of the component tree.When multiple components
              need access to the same data or state. When you need to pass data
              to components that are not directly connected in the component
              tree.
            </h2>
            <h3 className="font-bold mt-8">2. What is a custom hook?</h3>
            <h2>
              In React, a custom hook is a JavaScript function that uses one or
              more built-in hooks to implement some behavior or functionality
              that can be reused across multiple components. Custom hooks follow
              a naming convention of using the word "use" in the beginning of
              the function name.
            </h2>
            <h3 className="font-bold mt-8">3. What is useRef?</h3>
            <h2>
              In React, useRef is a hook that allows you to create a mutable
              reference to a DOM element or a value that persists across
              re-renders of a component. Custom hooks follow a naming convention
              of using the word "use" in the beginning of the function name,
              such as useWindowSize or useFetchData. They are regular
              JavaScript.
            </h2>
            <h3 className="font-bold mt-8">4. What is useMemo? </h3>
            <h2>
              In React, useMemo is a hook that allows you to memoize the result
              of a function, so that it is only re-computed when its
              dependencies have changed. useMemo returns the previously computed
              value, which can be useful for avoiding expensive computations.
            </h2>
          </div>
        </div>
      </>
    </div>
  );
};

export default Blogs;
