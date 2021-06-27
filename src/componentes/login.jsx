import React, { useRef } from "react";
import "../css/login.css";

export default function Login(props) {
  const refUsuario = useRef(null);
  const refClave = useRef(null);
  const handleLogin = () => {
    const data = {
      usuario: refUsuario.current.value,
      clave: refClave.current.value,
    };
    console.log(data);
  };

  return (
    <div className="login">
      <h1 style={{ color: "white" }}> Pandello </h1>
      <div className="row">
        <div className="col-sm-4 offset-4 mt-5">
          <div className="card pt-5">
            <div className="card-header text-center">
              <h3>💳 LOGIN</h3>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  📧
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  aria-label="usuario"
                  aria-describedby="basic-addon1"
                  ref={refUsuario}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  🔐
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  aria-label="clave"
                  aria-describedby="basic-addon2"
                  ref={refClave}
                />
              </div>

              <button
                onClick={handleLogin}
                className="btn btn-info btn-lg btn-block"
              >
                {" "}
                LogIn{" "}
              </button>

              <div className="card-footer">
                <span>¿No tienes una cuenta?</span>{" "}
                <a href="http://"> Registrate </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
