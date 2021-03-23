import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmo(myemoj) {
  return (
    <Entry
      key={myemoj.id}
      name={myemoj.name}
      meaning={myemoj.meaning}
      imgURL={myemoj.imgURL}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>La letra L</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmo)}</dl>
    </div>
  );
}

export default App;
