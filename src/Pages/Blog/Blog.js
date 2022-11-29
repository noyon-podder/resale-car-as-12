import React from "react";
import Title from "../../components/Title/Title";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <Title>Our Blog</Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            {" "}
            <img
              src="https://miro.medium.com/max/1400/1*L6VRj89-jxhxDp6NDOmYrA.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              There are four main types of state you need to properly manage in
              your React apps: Local state Global state Server state URL state
              Let's cover each of these in detail: Local (UI) state – Local
              state is data we manage in one or another component.
              <br />
              Global (UI) state – Global state is data we manage across multiple
              components. Global state is necessary when we want to get and
              update data anywhere in our app, or in multiple components at
              least.
              <br />
              
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            {" "}
            <img
              src="https://miro.medium.com/max/1400/1*BfcQCnoGhGMrac2JMYTLPQ.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              How does prototypical inheritance work?
            </h2>
            <p>
            Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
              <br />
              
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            {" "}
            <img
              src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1094584/retina_1708x683_staging.toptal.net_qa_how-to-write-testable-code-and-why-it-matters-25bff356169b7ee5f878b7b591b84afa.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              What is a unit test? Why should we write unit tests?
            </h2>
            <p>
            Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.
              <br />
              
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            {" "}
            <img
              src="https://presence.agency/wp-content/uploads/2020/07/1_lC1kj3IeXoE8Z3OCKJoWkw.jpeg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              React vs. Angular vs. Vue?
            </h2>
            <p>
            <strong>Angular</strong>, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework.  <br />
            <strong>React</strong>, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp)
              <br />
              <strong>Vue</strong>, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
