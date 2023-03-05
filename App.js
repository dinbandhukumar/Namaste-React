const heading = React.createElement("h1",
    {
        id:'Hello',
        className:'class'
    },

    "Namaste Everyone from JavaScript!");
    
    const root = ReactDOM.createRoot(document.getElementById("root"));

    //Passing react element inside a root
    root.render(heading);
