import React from 'react';

export const Login = (prop) => {
    return (
        <div className="col-md-4 col-lg-3 mx-auto mt-5 text-center">
            <img src={prop.logo} alt={prop.logo}/> 
            <form action="/#">
                <div className="form-group">
                    <input type="email" className="form-control mb-2" placeholder="Nom d'utilisateur" id="email" />
                    <input type="password" className="form-control mb-2" placeholder="Mot de passe" id="pwd"/>
                    <a href="/reinitialiser" className="btn btn-primary mb-2 w-100">
                        <img src={prop.loginIcon} alt={prop.loginIcon}/> Connexion</a>
                    <a href="!#" className=''>Mot de passe oublié?</a>
                </div> 
            </form>
        </div>
    )
}
