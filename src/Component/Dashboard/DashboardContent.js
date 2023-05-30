import React from 'react'
import {Helmet} from "react-helmet";

export const DashboardContent = () => {
  return (
    <>            
            <Helmet>
                <script src="../assets/js/chart_pai.js"></script>
            </Helmet>
        
        <div className="col-12 py-5">
            <div className="app-container w-auto">
                <h1 className="page-heading text-dark fw-bold fs-2 mt-3 text-hover-primary">Statistique</h1>                    
            </div>
        </div>

        <div id="kt_app_content" className="app-content flex-column-fluid">
            <div id="kt_app_content_container" className="app-container container-fluid">
                
                <div className="row g-5 g-xl-8">
                    <div className="col-md-6 col-xl-3">
                        <a href="/#" className="card bg-body hoverable card-xl-stretch mb-xl-8">
                            <div className="card-body">
                                <span className="svg-icon svg-icon-primary svg-icon-3x ms-n1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M18 21.6C16.3 21.6 15 20.3 15 18.6V2.50001C15 2.20001 14.6 1.99996 14.3 2.19996L13 3.59999L11.7 2.3C11.3 1.9 10.7 1.9 10.3 2.3L9 3.59999L7.70001 2.3C7.30001 1.9 6.69999 1.9 6.29999 2.3L5 3.59999L3.70001 2.3C3.50001 2.1 3 2.20001 3 3.50001V18.6C3 20.3 4.3 21.6 6 21.6H18Z" fill="currentColor" />
                                        <path d="M12 12.6H11C10.4 12.6 10 12.2 10 11.6C10 11 10.4 10.6 11 10.6H12C12.6 10.6 13 11 13 11.6C13 12.2 12.6 12.6 12 12.6ZM9 11.6C9 11 8.6 10.6 8 10.6H6C5.4 10.6 5 11 5 11.6C5 12.2 5.4 12.6 6 12.6H8C8.6 12.6 9 12.2 9 11.6ZM9 7.59998C9 6.99998 8.6 6.59998 8 6.59998H6C5.4 6.59998 5 6.99998 5 7.59998C5 8.19998 5.4 8.59998 6 8.59998H8C8.6 8.59998 9 8.19998 9 7.59998ZM13 7.59998C13 6.99998 12.6 6.59998 12 6.59998H11C10.4 6.59998 10 6.99998 10 7.59998C10 8.19998 10.4 8.59998 11 8.59998H12C12.6 8.59998 13 8.19998 13 7.59998ZM13 15.6C13 15 12.6 14.6 12 14.6H10C9.4 14.6 9 15 9 15.6C9 16.2 9.4 16.6 10 16.6H12C12.6 16.6 13 16.2 13 15.6Z" fill="currentColor" />
                                        <path d="M15 18.6C15 20.3 16.3 21.6 18 21.6C19.7 21.6 21 20.3 21 18.6V12.5C21 12.2 20.6 12 20.3 12.2L19 13.6L17.7 12.3C17.3 11.9 16.7 11.9 16.3 12.3L15 13.6V18.6Z" fill="currentColor" />
                                    </svg>
                                </span>
                                <div className="text-gray-900 fw-bold fs-2 mb-2 mt-5">Sexe</div>
                                <div className="fw-semibold text-gray-400">Femme <span className="float-end">154</span></div>
                                <div className="fw-semibold text-gray-400">Homme <span className="float-end">72</span></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <a href="/#" className="card bg-dark hoverable card-xl-stretch mb-xl-8">
                            <div className="card-body">
                                <span className="svg-icon svg-icon-gray-100 svg-icon-3x ms-n1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z" fill="currentColor"></path>
                                        <path opacity="0.3" d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                <div className="text-gray-100 fw-bold fs-2 mb-2 mt-5">Zones</div>
                                <div className="fw-semibold text-gray-100">Rurale<span className="float-end">97</span></div>
                                <div className="fw-semibold text-gray-100">Urbaine<span className="float-end">191</span></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-xl-3">                    
                        <a href="/#" className="card bg-warning hoverable card-xl-stretch mb-xl-8">
                            <div className="card-body">
                                <span className="svg-icon svg-icon-white svg-icon-3x ms-n1">
                                
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor" />
                                        <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor" />
                                        <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor" />
                                        <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor" />
                                    </svg>
                                </span>
                                <div className="text-white fw-bold fs-2 mb-2 mt-5">Parcours</div>
                                <div className="fw-semibold text-white">Emploi<span className="float-end">25</span></div>
                                <div className="fw-semibold text-white">Formation<span className="float-end">11</span></div>
                                <div className="fw-semibold text-white">Entreprenariat<span className="float-end">55</span></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <a href="/#" className="card bg-info hoverable card-xl-stretch mb-5 mb-xl-8">
                            <div className="card-body">
                                <span className="svg-icon svg-icon-white svg-icon-3x ms-n1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M10.9607 12.9128H18.8607C19.4607 12.9128 19.9607 13.4128 19.8607 14.0128C19.2607 19.0128 14.4607 22.7128 9.26068 21.7128C5.66068 21.0128 2.86071 18.2128 2.16071 14.6128C1.16071 9.31284 4.96069 4.61281 9.86069 4.01281C10.4607 3.91281 10.9607 4.41281 10.9607 5.01281V12.9128Z" fill="currentColor" />
                                        <path d="M12.9607 10.9128V3.01281C12.9607 2.41281 13.4607 1.91281 14.0607 2.01281C16.0607 2.21281 17.8607 3.11284 19.2607 4.61284C20.6607 6.01284 21.5607 7.91285 21.8607 9.81285C21.9607 10.4129 21.4607 10.9128 20.8607 10.9128H12.9607Z" fill="currentColor" />
                                    </svg>
                                </span>
                                <div className="text-white fw-bold fs-2 mb-2 mt-5">Situation actuelle</div>
                                <div className="fw-semibold text-white">Chercheur d'Emploi<span className="float-end">73</span></div>
                                <div className="fw-semibold text-white">NEET<span className="float-end">43</span></div>
                                <div className="fw-semibold text-white">Etudiant<span className="float-end">25</span></div>
                                <div className="fw-semibold text-white">En formation<span className="float-end">95</span></div>
                                <div className="fw-semibold text-white">En emploi<span className="float-end">46</span></div>
                                <div className="fw-semibold text-white">En Stage<span className="float-end">0</span></div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="row g-5 g-xl-10 g-xl-10">
                    <div className="col-12">
                        <p className='breadcrumb breadcrumb-separatorless fw-semibold text-dark fs-3'>Nombre Beneficiaire Actuelle 
                            <span className='badge badge-success fw-bolder ms-2'> 218 </span>
                        </p>
                    </div>
                    <div className="col-xl-8 mb-5 mb-xl-0">
                        <div className="card h-md-100">
                            <div className="card-body">
                                <div className="tab-content ps-4 pe-6">
                                    <div id="kt_docs_google_chart_column" class="w-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 ps-xl-1">
                        <div className="row">
                            <div className="col-sm-6 col-xl-12 px-xl-1 mb-5">
                                <div className="card">
                                    <div className="card-body">
                                        <div id="kt_docs_google_chart_pie_sex"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-12 px-xl-1 mb-5">
                                <div className="card">
                                    <div className="card-body">
                                        <div id="kt_docs_google_chart_pie_zones"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-12 px-xl-1 mb-5">
                                <div className="card">
                                    <div className="card-body">
                                        <div id="kt_docs_google_chart_pie_parcours"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-12 px-xl-1">
                                <div className="card">
                                    <div className="card-body">
                                        <div id="kt_docs_google_chart_pie_situation"></div>
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
