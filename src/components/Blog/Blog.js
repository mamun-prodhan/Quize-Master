import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item text-start">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button collapsed fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            What is the purpose of React Router ?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            Routing is a process in which a user is directed to different pages
                            based on their action or request. ReactJS Router is mainly used for
                            developing Single Page Web Applications. React Router is used to
                            define multiple routes in the application. When a user types a
                            specific URL into the browser, and if this URL path matches any
                            'route' inside the router file, the user will be redirected to that
                            particular route.
                        </div>
                    </div>
                </div>
                <div className="accordion-item text-start">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            How does Context API works ?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                        
                    >
                        <div className="accordion-body">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                        </div>
                    </div>
                </div>
                <div className="accordion-item text-start">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Explain UseRef Hooks ?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue useRef(initialValue). The object can persist a value for a full lifetime of the component.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;