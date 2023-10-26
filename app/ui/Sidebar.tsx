"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { clsx } from "clsx"
const navItems = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Invoices",
		href: "/dashboard/invoices",
	},
	{
		name: "Customers",
		href: "/dashboard/customers",
	},
]

const Sidebar = () => {
	const pathname = usePathname()
	return (
		<div className="w-fit border-r border-[#252525] h-screen flex flex-col justify-between py-10 px-6 pr-10  ">
			{/* Logo */}
			<p className="text-2xl">ACME</p>
			<ul className="flex flex-col gap-1">
				{navItems.map(item => (
					<li
						key={item.href}
						className={clsx(
							"text-[18px] rounded-md hover:bg-[#252525]  px-4 py-1",
							{
								"bg-[#252525]": pathname === item.href,
							}
						)}>
						<Link href={item.href}>{item.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Sidebar
