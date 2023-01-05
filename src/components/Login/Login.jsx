import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState();
  const [gmail, setGmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  function getRandomStr(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXVZ" + "abcdefghijklmnopqrstuvwxvz";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  return (
    <div className="login__main_block">
      <input
        type="text"
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Gmail"
        onChange={e => setGmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={e => setPassword2(e.target.value)}
      />
      <button>Login</button>
      <button>Goole</button>
      <button>GitHub</button>
    </div>
  );
};

export default Login;
