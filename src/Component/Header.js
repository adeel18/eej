import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {

    return (      
		<div id="kt_app_header" className="app-header">
			
			<div className="app-container container-fluid d-flex align-items-stretch justify-content-between">
				<div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper"> 					
					<div className="app-header-menu app-header-mobile-drawer align-items-stretch">
						<div className="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" data-kt-menu="true">
							{/* 
							<div className="menu-item menu-lg-down-accordion me-0 me-lg-2 here menu-here-bg">
								<span className="menu-link">
									<span className="menu-title">Dashboards</span>
									<span className="menu-arrow d-lg-none"></span>
								</span>
							</div>
							<div className="menu-item menu-lg-down-accordion me-0 me-lg-2">
								<span className="menu-link">
									<span className="menu-title">Fiche de Plan d'Action</span>
									<span className="menu-arrow d-lg-none"></span>
								</span>
							</div>							
							<div className="menu-item menu-lg-down-accordion me-0 me-lg-2">
								<span className="menu-link">
									<span className="menu-title">Extraction</span>
									<span className="menu-arrow d-lg-none"></span>
								</span>
							</div>
							*/}
						</div>
					</div>
				
					<div className="app-header-menu">						
						<div className="menu menu-rounded my-5 fw-semibold">
							<div className="menu-item menu-lg-down-accordion me-0 me-lg-2">
								<span className="menu-link">
									<Link to="/" className="menu-title">Logout</Link>
								</span>
							</div>							
						</div>
					</div>				
				</div>
			</div>
		</div>
    )
}
