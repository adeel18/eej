import React from 'react'

export const CreateContent = () => {
  return (
    <>
        <div className="col-12 py-5">
            <div className="app-container w-auto">
                <h1 className="page-heading text-dark fw-bold fs-2 mt-3 text-hover-primary">Projet de gestion des espaces emploi des jeunes (EEJ)</h1>                    
            </div>
        </div>

        <div className="app-content flex-column-fluid">
            <div className="app-container container-fluid">
                <div className="col-12">
                    <div className="card mb-6 mb-xl-9">
                        <div className="card-body">
                            <h2 className='text-center mb-5'>Fiche de Plan d'Action</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className='col-form-label fw-semibold fs-6'>Nom et prénom du conseiller animateur :</label>
                                    <input type="text" name="Fullname" className="form-control form-control-lg" placeholder="Nom et prénom du conseiller animateur" />
                                </div>
                                <div className="col-md-6">
                                    <label className='col-form-label fw-semibold fs-6'>EEJ d'affectation :</label>
                                    <input type="text" name="Assignment" className="form-control form-control-lg" placeholder="EEJ d'affectation" />
                                </div>
                                <div className="col-md-6">
                                    <label className='col-form-label fw-semibold fs-6'>Date :</label>
                                    <input type="text" name="Date" className="form-control flatpickr-input" placeholder="Date" />
                                </div>
                                <div className="col-md-6">
                                    <label className='col-form-label fw-semibold fs-6'>Référence  :</label>
                                    <input type="text" name="Reference" className="form-control form-control-lg" placeholder="Référence" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card h-md-100">
                            <div className="card-body pb-5">
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Nom et prénom :</label>
                                    <div className="col-lg-8 fv-row">
                                        <input type="text" name="website" className="form-control form-control-lg" placeholder="Nom et prénom"  />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Date de naissance :</label>
                                    <div className="col-lg-8 fv-row">
                                        <input name="dateofbirth" placeholder="Date de naissance" className="form-control flatpickr-input" defaultValue="" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">CIN :</label>
                                    <div className="col-lg-8 fv-row">
                                        <input type="text" name="website" className="form-control form-control-lg" placeholder="CIN"  />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Adresse :</label>
                                    <div className="col-lg-8 fv-row">
                                    <textarea className="form-control" name="store_address"></textarea>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Commune :</label>
                                    <div className="col-lg-8 fv-row pt-2">
                                        <label className="form-check form-check-custom form-check-inline me-5 float-start">
                                            <input className="form-check-input" name="commune[]" type="checkbox" defaultValue="Rurale"/>
                                            <span className="fw-semibold ps-2 fs-6">URB</span>
                                        </label>
                                        <label className="form-check form-check-custom form-check-inline float-start">
                                            <input className="form-check-input" name="commune[]" type="checkbox" defaultValue="Urbaine"/>
                                            <span className="fw-semibold ps-2 fs-6">RUR</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Province :</label>
                                    <div className="col-lg-8 fv-row">
                                        <input type="text" name="website" className="form-control form-control-lg" placeholder="Province"  />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Permis de conduite :</label>
                                    <div className="col-lg-8 fv-row">
                                        <label className="form-check form-check-custom form-check-inline me-5 mb-2 float-start">
                                            <input className="form-check-input" name="driving-license[]" type="checkbox" defaultValue="A"/>
                                            <span className="fw-semibold ps-2 fs-6">A</span>
                                        </label>
                                        <label className="form-check form-check-custom form-check-inline me-5 mb-2 float-start">
                                            <input className="form-check-input" name="driving-license[]" type="checkbox" defaultValue="B"/>
                                            <span className="fw-semibold ps-2 fs-6">B</span>
                                        </label>
                                        <label className="form-check form-check-custom form-check-inline me-5 mb-2 float-start">
                                            <input className="form-check-input" name="driving-license[]" type="checkbox" defaultValue="C"/>
                                            <span className="fw-semibold ps-2 fs-6">C</span>
                                        </label>
                                        <label className="form-check form-check-custom form-check-inline me-5 mb-2 float-start">
                                            <input className="form-check-input" name="driving-license[]" type="checkbox" defaultValue="D"/>
                                            <span className="fw-semibold ps-2 fs-6">D</span>
                                        </label>
                                        <label className="form-check form-check-custom form-check-inline me-5 mb-2 float-start">
                                            <input className="form-check-input" name="driving-license[]" type="checkbox" defaultValue="EB"/>
                                            <span className="fw-semibold ps-2 fs-6">EB</span>
                                        </label>
                                        <label className="form-check form-check-custom form-check-inline me-5 mb-2 float-start">
                                            <input className="form-check-input" name="driving-license[]" type="checkbox" defaultValue="EC"/>
                                            <span className="fw-semibold ps-2 fs-6">EC</span>
                                        </label>
                                        <label className="form-check form-check-custom form-check-inline me-5 mb-2 float-start">
                                            <input className="form-check-input" name="driving-license[]" type="checkbox" defaultValue="ED"/>
                                            <span className="fw-semibold ps-2 fs-6">ED</span>
                                        </label>
                                        <label className="form-check form-check-custom form-check-inline me-5 mb-2 float-start">
                                            <input className="form-check-input" name="driving-license[]" type="checkbox" defaultValue="Sans"/>
                                            <span className="fw-semibold ps-2 fs-6">Sans</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="card h-md-100">
                            <div className="card-body pb-5">
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Sexe :</label>
                                    <div className="col-lg-8 fv-row pt-2">
                                        <label className="form-check form-check-custom form-check-inline me-5 float-start">
                                            <input className="form-check-input" name="sexe[]" type="checkbox" defaultValue="Rurale"/>
                                            <span className="fw-semibold ps-2 fs-6">URB</span>
                                        </label>
                                        <label className="form-check form-check-custom form-check-inline float-start">
                                            <input className="form-check-input" name="sexe[]" type="checkbox" defaultValue="Urbaine"/>
                                            <span className="fw-semibold ps-2 fs-6">RUR</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Age :</label>
                                    <div className="col-lg-8 fv-row">
                                        <input type="text" name="website" className="form-control form-control-lg" placeholder="Age"  />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Téléphone :</label>
                                    <div className="col-lg-8 fv-row">
                                        <input type="text" name="website" className="form-control form-control-lg" placeholder="Téléphone"  />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Email :</label>
                                    <div className="col-lg-8 fv-row">
                                        <input type="email" name="website" className="form-control form-control-lg" placeholder="Email"  />
                                    </div>
                                </div>    
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Situation actuel :</label>
                                    <div className="col-lg-8 fv-row">
                                        <div className="form-check form-check-custom mb-2 me-3 float-start">
                                            <input className="form-check-input" type="radio" name="SituationRadio" id="Jobseeker"/>
                                            <label className="form-check-label" htmlFor="Jobseeker">Chercheur d'Emploi</label>
                                        </div>
                                        <div className="form-check form-check-custom mb-2 me-3 float-start">
                                            <input className="form-check-input" type="radio" name="SituationRadio" id="Training"/>
                                            <label className="form-check-label" htmlFor="Training">En formation</label>
                                        </div>
                                        <div className="form-check form-check-custom mb-2 me-3 float-start">
                                            <input className="form-check-input" type="radio" name="SituationRadio" id="Neet"/>
                                            <label className="form-check-label" htmlFor="Neet">NEET</label>
                                        </div>
                                        <div className="form-check form-check-custom mb-2 me-3 float-start">
                                            <input className="form-check-input" type="radio" name="SituationRadio" id="Student"/>
                                            <label className="form-check-label" htmlFor="Student">Etudiant</label>
                                        </div>                                        
                                        <div className="form-check form-check-custom mb-2 me-3 float-start">
                                            <input className="form-check-input" type="radio" name="SituationRadio" id="Internship"/>
                                            <label className="form-check-label" htmlFor="Internship">En Stage</label>
                                        </div>
                                        <div className="form-check form-check-custom mb-2 me-3 float-start">
                                            <input className="form-check-input" type="radio" name="SituationRadio" id="Employed"/>
                                            <label className="form-check-label" htmlFor="Employed">En emploi</label>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-lg-4 col-form-label fw-semibold fs-6">Situation Familliale :</label>
                                    <div className="col-lg-8 fv-row">
                                        <div className="form-check form-check-custom mb-2 me-3 float-start">
                                            <input className="form-check-input" type="radio" name="SituationFamilyRadio" id="Single"/>
                                            <label className="form-check-label" htmlFor="Single">Célibataire(e)</label>
                                        </div>
                                        <div className="form-check form-check-custom mb-2 me-3 float-start">
                                            <input className="form-check-input" type="radio" name="SituationFamilyRadio" id="Bride"/>
                                            <label className="form-check-label" htmlFor="Bride">Marié(e)</label>
                                        </div>
                                        <div className="form-check form-check-custom mb-2 me-3 float-start">
                                            <input className="form-check-input" type="radio" name="SituationFamilyRadio" id="Divorce"/>
                                            <label className="form-check-label" htmlFor="Divorce">Divorcé(e)</label>
                                        </div>
                                        <div className="form-check form-check-custom mb-2 me-3 float-start">
                                            <input className="form-check-input" type="radio" name="SituationFamilyRadio" id="Widower"/>
                                            <label className="form-check-label" htmlFor="Widower">Veuf(e)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6 py-3">
                       
                        <li className="nav-item">
                            <a className="nav-link btn btn-flex btn-active-light-success ms-0 active" data-bs-toggle="tab" href="#kt_tab_pane_1">
                                <span className="d-flex flex-column align-items-start">
                                    <span className="svg-icon svg-icon-muted svg-icon-2hx">
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.3" y="6" width="16" height="3" rx="1.5" fill="currentColor"/>
                                        <rect opacity="0.3" y="12" width="8" height="3" rx="1.5" fill="currentColor"/>
                                        <rect width="12" height="3" rx="1.5" fill="currentColor"/>
                                        </svg>
                                    </span>
                                    <span className="fs-4 fw-bold mt-2">1- Profil</span>
                                </span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link btn btn-flex btn-active-light-success ms-0" data-bs-toggle="tab" href="#kt_tab_pane_2">
                                <span className="d-flex flex-column align-items-start">
                                    <span className="svg-icon svg-icon-muted svg-icon-2hx">
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="6" width="16" height="3" rx="1.5" fill="currentColor"/>
                                        <rect opacity="0.3" y="12" width="8" height="3" rx="1.5" fill="currentColor"/>
                                        <rect opacity="0.3" width="12" height="3" rx="1.5" fill="currentColor"/>
                                        </svg>
                                    </span>
                                    <span className="fs-4 fw-bold mt-2">2- Analyse de la situation du bénéficiaire (Constats)</span>
                                </span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link btn btn-flex btn-active-light-success ms-0" data-bs-toggle="tab" href="#kt_tab_pane_3">
                                <span className="d-flex flex-column align-items-start">
                                    <span className="svg-icon svg-icon-muted svg-icon-2hx">
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.3" y="6" width="16" height="3" rx="1.5" fill="currentColor"/>
                                        <rect y="12" width="8" height="3" rx="1.5" fill="currentColor"/>
                                        <rect opacity="0.3" width="12" height="3" rx="1.5" fill="currentColor"/>
                                        </svg>
                                    </span>
                                    <span className="fs-4 fw-bold mt-2">3- Orientation</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                            <div className="card mb-6 mb-xl-9">
                                <div className="card-header border-0">
                                    <div className="card-title">
                                        <h2>Etudes, formations et diplômes: </h2>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pb-5">
                                    <table className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                        <tbody className='fs-5'>
                                            <tr>
                                                <th className='fw-bold'>Niveau scolaire :</th>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold'>Formation / Diplôme</th>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold'>Spécialité</th>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold'>Année</th>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>                                       
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header border-0">
                                    <div className="card-title">
                                        <h2>Expérience professionnelle </h2>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pb-5">
                                    <table className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                        <tbody className='fs-5'>
                                            <tr>
                                                <th className='fw-bold'>Emploi-métier</th>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold'>Secteur d'activité</th>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th className='fw-bold'>Durée (en mois)</th>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>                                 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                            <div className="card">
                                <div className="card-header border-0">
                                    <div className="card-title">
                                        <h2>Expérience professionnelle </h2>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pb-5">
                                    <table className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                        <tbody className='fs-5'>
                                            <tr>
                                                <td> 
                                                <p className='mb-1 fw-bold'>Employabilité:</p>
                                                (Profil demandé ou non sur le marché et chances d'insertion)
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td> 
                                                <p className='mb-1 fw-bold'>Autonomie en recherche d'emploi </p>
                                                (Niveaux de maitrise des techniques de recherche d'emploi, engagement de l'action, …)
                                                </td>
                                                <td>
                                                <p className='fw-bold'>NON </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Prédispositions entreprenariales:
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td> 
                                                    Besoins d'accompagnement  identifiés:
                                                </td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
                            <div className="card pt-9 mb-6 mb-xl-9">
                                <div className="card-body pt-0 pb-5 col-md-6 mx-auto">
                                    <table className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                        <tbody className='fs-5'>
                                            <tr>
                                                <td className='mb-1 fw-bold'>Parcours:</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="card-body pt-0 pb-5 col-md-6 mx-auto">
                                    <table className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                        <div className="card-header border-0">
                                            <div className="card-title">
                                                <h3>Emplois-métiers cibles idéntifiés (1 ou 2) pour les parcours A et B : </h3>
                                            </div>
                                        </div>
                                        <tbody className='fs-5'>
                                            <tr>
                                                <td className='mb-1 fw-bold'>Emploi-Métier 1 :</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className='mb-1 fw-bold'>Emploi-Métier 2 :</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header border-0">
                                    <div className="card-title">
                                        <h2>Atelier </h2>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pb-5">
                                    <div className="row">
                                        <div className='col-xl-8'>
                                            <table className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                                <thead className='fs-5'>
                                                    <th className='fw-bold'>Thèmes / Actions à réaliser avec l'appui du Conseiller Animateur</th>
                                                    <th className='fw-bold'>Date de réalisation</th>
                                                </thead>
                                                <tbody className='fs-6'>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            La préparation des écrits de postulation
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            La préparation d’un entretien d’embauche
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            L'envoi de candidatures spontanées aux entreprises
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            L’information sur le marché du travail
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            L’information sur les attentes et les exigences des entreprises
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Des notions sur la législation du travail nationale
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Identification des atouts et des insuffisances 
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Les secteurs d’activités porteurs
                                                        </td>
                                                        <td> - </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Les emplois métiers très demandés
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Les dispositifs de formation à l’emploi existants
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            L’entreprenariat, ses avantages, ses opportunités et ses exigences
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Les activités porteuses
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='fw-bold'>
                                                            Les dispositifs d'accompagnement à l'entreprenariat
                                                        </td>
                                                        <td> - </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <div className="col-md-6 py-4">
                                                <table className='table gy-5 gs-7 border rounded'>
                                                    <tbody>
                                                        <tr>
                                                            <td className='text-center'>
                                                                <p>
                                                                <img src="../../images/signature.png" alt="icon" />
                                                                </p>        
                                                                <hr className='border' />
                                                                Signature du conseiller Animateur
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className='col-xl-4'>
                                            <table className="table table-striped table-row-bordered gy-5 gs-7 border rounded">
                                                <thead className='fw-bold fs-5'>
                                                    <th>Actions à réaliser en autonome</th>
                                                </thead>
                                                <tbody className='fs-6'>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <div className="col-md-6 col-xl-12 py-4 float-end">
                                                <table className='table gy-5 gs-7 border rounded'>
                                                    <tbody>
                                                        <tr>
                                                            <td className='text-center'>
                                                                <p>
                                                                    <img src="../../images/signature.png" alt="icon" />
                                                                </p>
                                                                <hr className='border' />
                                                                Signature du conseiller Animateur
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                        <div className="col-12">
                                            <p className='my-1 fs-5 fw-bold text-center'>Validation du Coordinateur Provincial de l'EEJ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    </>
  )
}
