import React from 'react'

export const Table = () => {
  return (
    <body id="kt_app_body" className="app-default">
		<div className="card pt-4 mb-6 mb-xl-9">
			<div className="card-body pt-0 pb-5">
				
				<table className="table align-middle table-row-dashed gy-5" id="kt_table_customers_payment">
					
					<thead className="border-bottom border-gray-200 fs-7 fw-bold">
						<tr className="text-start text-muted text-uppercase gs-0">
							<th className="min-w-100px">Invoice No.</th>
							<th>Status</th>
							<th>Amount</th>
							<th className="min-w-100px">Date</th>
							<th className="text-end min-w-100px pe-4">Actions</th>
						</tr>
					</thead>
					<tbody className="fs-6 fw-semibold text-gray-600">
						<tr>
							<td>
								<a href="#" className="text-gray-600 text-hover-primary mb-1">4214-3561</a>
							</td>
							<td>
								<span className="badge badge-light-success">Successful</span>
							</td>
							<td>$1,200.00</td>
							<td>14 Dec 2020, 8:43 pm</td>
							<td className="pe-0 text-end">
								<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
								<span className="svg-icon svg-icon-5 m-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
									</svg>
								</span></a>
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
									<div className="menu-item px-3">
										<a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
									</div>
									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<a href="#" className="text-gray-600 text-hover-primary mb-1">2437-8847</a>
							</td>
							<td>
								<span className="badge badge-light-success">Successful</span>
							</td>
							<td>$79.00</td>
							<td>01 Dec 2020, 10:12 am</td>
							<td className="pe-0 text-end">
								<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
								<span className="svg-icon svg-icon-5 m-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
									</svg>
								</span></a>
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
									<div className="menu-item px-3">
										<a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
									</div>
									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<a href="#" className="text-gray-600 text-hover-primary mb-1">3605-6453</a>
							</td>
							<td>
								<span className="badge badge-light-success">Successful</span>
							</td>
							<td>$5,500.00</td>
							<td>12 Nov 2020, 2:01 pm</td>
							<td className="pe-0 text-end">
								<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
								<span className="svg-icon svg-icon-5 m-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
									</svg>
								</span></a>
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
									<div className="menu-item px-3">
										<a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
									</div>
									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<a href="#" className="text-gray-600 text-hover-primary mb-1">6380-6771</a>
							</td>
							<td>
								<span className="badge badge-light-warning">Pending</span>
							</td>
							<td>$880.00</td>
							<td>21 Oct 2020, 5:54 pm</td>
							<td className="pe-0 text-end">
								<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
								<span className="svg-icon svg-icon-5 m-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
									</svg>
								</span></a>
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
									<div className="menu-item px-3">
										<a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
									</div>
									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<a href="#" className="text-gray-600 text-hover-primary mb-1">1003-5648</a>
							</td>
							<td>
								<span className="badge badge-light-success">Successful</span>
							</td>
							<td>$7,650.00</td>
							<td>19 Oct 2020, 7:32 am</td>
							<td className="pe-0 text-end">
								<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
								<span className="svg-icon svg-icon-5 m-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
									</svg>
								</span></a>
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
									<div className="menu-item px-3">
										<a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
									</div>
									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<a href="#" className="text-gray-600 text-hover-primary mb-1">7581-5741</a>
							</td>
							<td>
								<span className="badge badge-light-success">Successful</span>
							</td>
							<td>$375.00</td>
							<td>23 Sep 2020, 12:38 am</td>
							<td className="pe-0 text-end">
								<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
								<span className="svg-icon svg-icon-5 m-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
									</svg>
								</span></a>
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
									<div className="menu-item px-3">
										<a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
									</div>
									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<a href="#" className="text-gray-600 text-hover-primary mb-1">9510-7944</a>
							</td>
							<td>
								<span className="badge badge-light-success">Successful</span>
							</td>
							<td>$129.00</td>
							<td>11 Sep 2020, 3:18 pm</td>
							<td className="pe-0 text-end">
								<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
								<span className="svg-icon svg-icon-5 m-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
									</svg>
								</span></a>
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
									<div className="menu-item px-3">
										<a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
									</div>
									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<a href="#" className="text-gray-600 text-hover-primary mb-1">1378-3231</a>
							</td>
							<td>
								<span className="badge badge-light-danger">Rejected</span>
							</td>
							<td>$450.00</td>
							<td>03 Sep 2020, 1:08 am</td>
							<td className="pe-0 text-end">
								<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
								<span className="svg-icon svg-icon-5 m-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
									</svg>
								</span></a>
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
									<div className="menu-item px-3">
										<a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
									</div>
									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<a href="#" className="text-gray-600 text-hover-primary mb-1">9209-6844</a>
							</td>
							<td>
								<span className="badge badge-light-warning">Pending</span>
							</td>
							<td>$8,700.00</td>
							<td>01 Sep 2020, 4:58 pm</td>
							<td className="pe-0 text-end">
								<a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
								<span className="svg-icon svg-icon-5 m-0">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
									</svg>
								</span></a>
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
									<div className="menu-item px-3">
										<a href="../../demo1/dist/apps/customers/view.html" className="menu-link px-3">View</a>
									</div>
									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
    </body>
  )
}
