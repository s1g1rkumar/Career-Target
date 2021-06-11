import React, { useState, useEffect } from "react";
import {} from "react-router-dom";

function Compiler() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const handleInputs = (e) => {
    setCode(e.target.value);
  };
  const postCode = async (e) => {
    // e.preventDefault();
    const result = await fetch("/compiler", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(code),
    }); //fetch close
    const res = await result.json();
    console.log(res, result.status);
    if (result.status === 200) {
      window.alert(res);
      setOutput(res);
    } else {
      window.alert("fail to load data");
    }
  };
  useEffect(() => {
    postCode();
  }, []);
  return (
    <>
      <div className="container">
        <div className="col-12 border" id="editor">
          <form method="post">
            <textarea
              name="plainEditor"
              id="plainEditor"
              cols="155"
              rows="11"
              onChange={handleInputs}
              placeholder="write your code here"
            ></textarea>
            <button className="btn btn-info btn-lg offset-5 pl-5 pr-5">
              Run
            </button>
          </form>
        </div>
        <div className="col-12 border" id="output">
          <form>
            <textarea
              name="plainEditor"
              id="plainEditor"
              cols="155"
              rows="11"
              placeholder="your result"
              value={output}
            ></textarea>
          </form>
        </div>
      </div>
    </>
  );
}

export default Compiler;
