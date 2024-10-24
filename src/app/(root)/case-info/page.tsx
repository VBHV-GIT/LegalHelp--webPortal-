'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Bell, Search, MoreHorizontal, Menu, Calendar, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import HeaderBox from '@/components/ui/HeaderBox'
import SubHeader from '@/components/SubHeader'

const caseStats = [
  { title: "Civil Cases", count: "11063698", color: "bg-[#ff7f50]", icon: Clock },
  { title: "Criminal Cases", count: "33335529", color: "bg-[#9370db]", icon: Clock },
  { title: "Total Cases", count: "44399227", color: "bg-[#20b2aa]", icon: Clock },
]

const oldCaseStats = [
  { title: "Civil Cases More Than 1 Year Old", count: "6649406", percentage: "60.1%", color: "bg-[#daa520]", icon: Calendar },
  { title: "Criminal Cases More Than 1 Year Old", count: "20901865", percentage: "62.7%", color: "bg-[#87ceeb]", icon: Calendar },
  { title: "Cases More Than 1 Year Old", count: "27551271", percentage: "62.05%", color: "bg-[#ff69b4]", icon: Calendar },
]

const pendingCasesData = [
  { period: "0 to 1 Years", civil: { count: 4414292, percentage: 39.9 }, criminal: { count: 12433664, percentage: 37.3 }, total: { count: 16847956, percentage: 37.9 } },
  { period: "1 to 3 Years", civil: { count: 2314485, percentage: 20.92 }, criminal: { count: 6803415, percentage: 20.41 }, total: { count: 9117900, percentage: 20.5 } },
  { period: "3 to 5 Years", civil: { count: 1828550, percentage: 16.53 }, criminal: { count: 5479747, percentage: 16.44 }, total: { count: 7308297, percentage: 16.4 } },
  { period: "5 to 10 Years", civil: { count: 1737208, percentage: 15.7 }, criminal: { count: 5482338, percentage: 16.45 }, total: { count: 7219546, percentage: 16.2 } },
  { period: "10 to 20 Years", civil: { count: 633447, percentage: 5.73 }, criminal: { count: 2664471, percentage: 7.99 }, total: { count: 3297918, percentage: 7.4 } },
]

export default function CaseInfo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
<HeaderBox/>
        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto">
           <SubHeader title='Case Info'/>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {caseStats.map((stat, index) => (
                <div key={index} className={`${stat.color} rounded-lg p-4 text-white`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-3xl font-bold">{stat.count}</div>
                      <div className="text-sm">{stat.title}</div>
                    </div>
                    <stat.icon className="h-8 w-8" />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {oldCaseStats.map((stat, index) => (
                <div key={index} className={`${stat.color} rounded-lg p-4 text-white`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-3xl font-bold">{stat.count}</div>
                      <div className="text-sm">{stat.title}</div>
                      <div className="text-lg font-semibold">{stat.percentage}</div>
                    </div>
                    <stat.icon className="h-8 w-8" />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="caseNo" className="block text-sm font-medium text-gray-700 mb-1">Search Case :</label>
                <Input id="caseNo" placeholder="Enter Case No." />
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year :</label>
                <Input id="year" placeholder="Search Year" />
              </div>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-blue-600 text-white">Particulars</TableHead>
                    <TableHead className="bg-green-500 text-white">Civil</TableHead>
                    <TableHead className="bg-orange-500 text-white">Criminal</TableHead>
                    <TableHead className="bg-blue-600 text-white">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={4} className="bg-green-100 font-semibold">Pending Cases</TableCell>
                  </TableRow>
                  {pendingCasesData.map((row, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <TableCell>{row.period}</TableCell>
                      <TableCell className="text-blue-600">
                        {row.civil.count.toLocaleString()} <span className="text-gray-500">({row.civil.percentage}%)</span>
                      </TableCell>
                      <TableCell className="text-blue-600">
                        {row.criminal.count.toLocaleString()} <span className="text-gray-500">({row.criminal.percentage}%)</span>
                      </TableCell>
                      <TableCell className="text-blue-600">
                        {row.total.count.toLocaleString()} <span className="text-gray-500">({row.total.percentage}%)</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}