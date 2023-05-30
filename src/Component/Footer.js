import React from 'react'

export const Footer = () => {
  return (
    <>
        <div className="app-footer">
            <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                <div className="text-dark order-2 order-md-1">
                    <span className="text-muted fw-semibold me-1">{new Date().getFullYear()}©</span>
                    <a href="!#" target="_blank" className="text-gray-800 text-hover-primary">Injaz Mobilite' develop.
                    Inc. All rights reserved.</a>
                </div>
                <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1 ">
                    <li className="menu-item d-none">
                        {/* <a href="!#" target="_blank" className="menu-link px-2">Home</a> */}
                    </li>                   
                </ul>
            </div>
        </div>
    </>
  )
}
