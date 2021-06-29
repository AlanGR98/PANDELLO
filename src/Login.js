import React from 'react';
import imagen from "./images/Usuario_final.png";

const Login = (props) => {
    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSingup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError } = props;
    return (
        <div class="login">
            <div class="sub-login">
                <div class="head">
                    <img src={imagen} height="40px" width="40px" id="img_l" />
                    <h3>Pandello</h3>

                </div>

                <div class="main">
                    <input type="email" name="" id="nombre" required value={email}
                        onChange={(e) => setEmail(e.target.value)}></input><span class="barra"></span>
                    <p className="errorMsg">{emailError}</p>
                    <label for="">Correo</label>
                </div>
                <div class="main">
                    <input type="password" name="" id="password" required value={password}
                        onChange={(e) => setPassword(e.target.value)}></input><span class="barra"></span>
                    <p className="errorMsg">{passwordError}</p>
                    <label for="">Password</label>
                </div>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button className="btn-li"  onClick={handleLogin} >SingIn</button>
                            <p className="cambia">¿No tienes una cuenta? <span className="cambio" onClick={() => setHasAccount(!hasAccount)}>Registrate</span></p>
                        </>

                    ) : (
                        <>
                            <button className="btn-lo" onClick={handleSingup}>SingUp</button>
                            <p className="cambia">¿Ya tienes cuenta? <span className="cambio" onClick={() => setHasAccount(!hasAccount)}>Inicia Sesion</span></p>
                        </>
                    )}
                </div>

            </div>

        </div>


    )

};

export default Login;