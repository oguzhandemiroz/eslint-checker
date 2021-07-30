import React from "react";
import _ from "lodash";

function App() {
    return (
        <div>
            <h1>Git Commint Amend {_.join([1, 2, 3], ", ")}</h1>
        </div>
    );
}

export default App;
