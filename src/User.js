import React, { useState, useEffect } from "react";
import facade from "./apiFacade.js";

function User() {
  let obj = { wName: "" };

  const [wife, setWife] = useState(obj);

  const onChange = (evt) => {
    const value = evt.target.value;
    wife.wName = value;
    setWife({ ...wife });
  };

  const handleSubmit = (evt) => {
    evt.preventdefault();
    facade.addWife(wife);
    setWife({...obj})
  };

  return (
    <div>
      <h1>Du er logget ind som user og har adgang til denne side</h1>
      <h3> Du kan tilføje en kone her </h3>

      <form>
        <h4></h4>
        <label>
          Kone
          <input id="wName" value={wife.wName} onChange={onChange} />
        </label>
        <p>{wife.wName} </p>

        <button onClick={handleSubmit} className="btn btn-info">
          Save
        </button>
      </form>
    </div>
  );
}

export default User;