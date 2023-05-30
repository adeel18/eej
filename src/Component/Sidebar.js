import React from 'react'

export const Sidebar = (prop) => {
    let eej_img= window.location.origin + '/images/logo_0.png';
    var url = window.location.href;
    var isActive= url.substring(url.lastIndexOf("/") + 1);
    // console.log(isActive);

    return (
      <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
        
        <div className="app-sidebar-logo px-17 border-0 h-auto" id="kt_app_sidebar_logo">          
          <a href="/dashboard"> 
            <img className='img-fluid mt-3' src={eej_img} alt="logo" /> 
          </a>

          <div id="kt_app_sidebar_toggle" className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">            
            <span className="svg-icon svg-icon-2 rotate-180">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="currentColor" />
                <path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="currentColor" />
              </svg>
            </span>            
          </div>          
        </div>
        
        <div className="app-sidebar-menu overflow-hidden flex-column-fluid">          
          <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper hover-scroll-overlay-y my-5" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
            
            <div className="menu menu-column menu-rounded menu-sub-indention px-3 fs-3" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
              <div className={"menu-item menu-accordion "+ (isActive === "dashboard" ? "here show" : "") }>
                <span className="menu-link">
                  <span className="menu-icon">
                    <span className="svg-icon svg-icon-muted svg-icon-1hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6Z" fill="currentColor"/>
                    </svg></span>
                  </span>
                  <a href="/dashboard" className="menu-title">Tableau de bord</a>
                </span>
              </div>

              <div className={"menu-item menu-accordion " + (isActive === "create" ? 'here show' : '') }>										
                <span className="menu-link">
                  <span className="menu-icon">
                    <span className="svg-icon svg-icon-muted svg-icon-1hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6Z" fill="currentColor"/>
                    </svg></span>
                  </span>
                  <a href="/create" className="menu-title">Fiche de Plan d'Action</a>
                </span>
              </div>

              <div className={"menu-item menu-accordion " + (isActive === "extraction" ? 'here show' : '') }>										
                <span className="menu-link">
                  <span className="menu-icon">												
                    <span className="svg-icon svg-icon-muted svg-icon-1hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6Z" fill="currentColor"/>
                    </svg></span>
                  </span>
                  <a href="/extraction" className="menu-title">Extraction</a>
                </span>
              </div>
            </div>
          </div>
        </div>        
        
        <div className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6" id="kt_app_sidebar_footer">
          <b className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100">
            <span className="svg-icon svg-icon-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z" fill="currentColor"></path>
                <rect opacity="0.3" x="8" y="3" width="8" height="8" rx="4" fill="currentColor"></rect>
              </svg>
            </span>
            <span className="btn-label">Admin</span>								
          </b>
        </div>        
      </div>					
    )
}
