import React from 'react'
import { Sidebar} from '../../Component/Sidebar';
import { Header} from '../../Component/Header';
import { ExtractionContent } from "./ExtractionContent";
import { Footer } from "../Footer";

export const Extraction = (prop) => {
  return (      
    <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
      <div className="app-page flex-column flex-column-fluid">
        
        <Header/>
        <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <Sidebar logo={prop.logo} title={prop.title}/>
          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <div className="d-flex flex-column flex-column-fluid">
              <ExtractionContent/>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
