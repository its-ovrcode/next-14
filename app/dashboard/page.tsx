import clsx from "clsx"
import Link from "next/link"
import React from "react"

const dashboardItems = [
	{
		name: "Invoices",
		href: "/dashboard/invoices",
		brief: "Create, edit, and send invoices to your customers.",
	},
	{
		name: "Customers",
		href: "/dashboard/customers",
		brief: "Manage your customers and their information.",
	},
]

const DashboardPage = () => {
	return (
		<div className="w-full px-10 pt-6">
			<div className="w-full flex gap-6">
				{dashboardItems.map(i => (
					<Link className="w-full" href={i.href}>
						<div
							className={clsx(
								"border border-[#252525] hover:bg-[#1a1a1a] cursor-pointer flex  flex-col items-start justify-between  px-8 py-6 h-fit w-full rounded-lg"
							)}
							key={i.name}>
							<h4 className="text-4xl">{i.name}</h4>
							<p>{i.brief}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default DashboardPage
