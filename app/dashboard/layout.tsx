import Link from "next/link"
import React from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="pt-8 w-full">
			<div className="bg-[#1f1f1f] flex justify-between px-10 items-center w-full mr-10 h-14">
				<Link href={"/dashboard"}>
					<h3 className="font-bold text-xl">Dashboard</h3>
				</Link>

				<div className="text-indigo-500   hover:text-white font-semibold">
					Visit Store
				</div>
			</div>
			<div className="w-full">{children}</div>
		</div>
	)
}

export default DashboardLayout
