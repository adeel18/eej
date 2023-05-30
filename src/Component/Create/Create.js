import React from 'react'
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { CreateContent } from "./CreateContent";
import { Footer } from "../Footer";

export const Create = (prop) => {
  return (
    <div className="d-flex flex-column flex-root app-root">
      <div className="app-page flex-column flex-column-fluid">
        
        <Header/>
        <div className="app-wrapper flex-column flex-row-fluid">
            <Sidebar logo={prop.logo} title={prop.title}/>
          <div className="app-main flex-column flex-row-fluid">
            <div className="d-flex flex-column flex-column-fluid">
              <CreateContent/>
            </div>
          </div>
          <Footer/>
        </div>        
      </div>
    </div>
  )
}
