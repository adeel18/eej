import React from 'react';

export const LoginNom = (prop) => {
  return (
        <div className="col-md-4 col-lg-3 mx-auto mt-5 text-center">
            <img src={prop.logo} alt={"prop.logo"}/> 
            <form action="/#">
                <div className="form-group">
                    <input type="email" className="form-control mb-2" placeholder="Nom d'utilisateur" id="email" />
                    <a href="/dashboard" className="btn btn-primary">réinitialiser le mot de passe</a>
                </div> 
            </form>
        </div>
  )
}
