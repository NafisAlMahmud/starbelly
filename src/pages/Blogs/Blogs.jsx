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
              1. What is differences between uncontrolled and controlled
              components.?
            </h3>

            <h2>
              In the context of a system or process, uncontrolled components
              refer to elements that are not governed or regulated by any
              specific set of rules, standards, or protocols. In contrast,
              controlled components are those that are managed and governed by
              established rules, regulations, or protocols.
              <br />
              Controlled components, on the other hand, are those that are
              managed and regulated according to established standards or
              protocols. Examples of controlled components might include the use
              of standardized operating procedures, quality control measures, or
              regulatory compliance frameworks.
            </h2>
            <h3 className="font-bold mt-8">
              2.How to validate React props using PropTypes?
            </h3>
            <h2>
              React provides a utility called PropTypes that can be used to
              validate the type and presence of props passed to a component.
              Here are the steps to validate React props using PropTypes. Import
              PropTypes from the 'prop-types' package at the top of your
              component file: Define your component as usual, and declare a
              static propTypes object at the bottom of your component file
            </h2>
            <h3 className="font-bold mt-8">
              3. Tell us the difference between nodejs and express js?
            </h3>
            <h2>
              Node.js and Express.js are two distinct technologies that are
              often used together to build server-side applications. Here's an
              overview of the differences between the two:
              <br />
              Node.js: Node.js is a runtime environment for executing JavaScript
              code outside of a web browser. It is built on the V8 JavaScript
              engine from Google Chrome and allows developers to run JavaScript
              code on the server side. Node.js provides an event-driven,
              non-blocking I/O model that enables efficient and scalable
              server-side applications. Node.js has a vast ecosystem of modules
              and packages that developers can use to build their applications.
              Node.js is often used for building backend services, command-line
              tools, and real-time applications.
              <br />
              <br />
              Express.js: Express.js is a popular web framework for Node.js that
              simplifies the process of building server-side applications. It
              provides a set of features for building web applications, such as
              routing, middleware, and templates. Express.js is lightweight and
              unopinionated, which means that it provides developers with a lot
              of flexibility in how they structure their applications.
            </h2>
            <h3 className="font-bold mt-8">
              4. What is a custom hook, and why will you create a custom hook?
            </h3>
            <h2>
              A custom hook in React is a reusable function that contains some
              stateful or stateless logic and can be used across multiple
              components. Custom hooks allow developers to abstract and reuse
              code that is common across components, reducing code duplication
              and improving maintainability.
            </h2>
          </div>
        </div>
      </>
    </div>
  );
};

export default Blogs;
