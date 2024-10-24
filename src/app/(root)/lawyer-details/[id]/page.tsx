'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Bell, Search, MoreHorizontal, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SubHeader from '@/components/SubHeader'
import HeaderBox from '@/components/ui/HeaderBox'

export default function LawyerDetailsAllocation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderBox/>

      <main className="container mx-auto px-4 py-8">
        {/* <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Lawyer Details & Allocation</h1>
          <div className="flex items-center space-x-4">
            <Image src="/placeholder.svg?height=50&width=100" alt="75 Years Logo" width={100} height={50} />
            <Image src="/placeholder.svg?height=50&width=100" alt="DISHA Logo" width={100} height={50} />
          </div>
        </div> */}
        <SubHeader title='Lawyer Details & Allocation'/>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="shadow-md">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <dl className="grid grid-cols-2 gap-4">
                {[
                  { label: "Name", value: "Pranav Ikhar" },
                  { label: "Mobile no.", value: "9736487487" },
                  { label: "Email", value: "xyz@gmail.com" },
                  { label: "Gender", value: "Male" },
                  { label: "DOB", value: "2/4/2003" },
                  { label: "Date of Joining", value: "5/4/2023" },
                ].map((item, index) => (
                  <div key={index}>
                    <dt className="font-medium text-gray-500">{item.label}</dt>
                    <dd className="mt-1">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle>Additional Details</CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <dl className="grid grid-cols-2 gap-4">
                {[
                  { label: "EN no.", value: "MH/3663/2008" },
                  { label: "Year of Practice", value: "7" },
                  { label: "Language", value: "Hindi" },
                  { label: "Associated with", value: "DLSA" },
                  { label: "BAR Council Reg.", value: "Nagpur" },
                  { label: "Practice Area", value: "UTPs Cases" },
                ].map((item, index) => (
                  <div key={index}>
                    <dt className="font-medium text-gray-500">{item.label}</dt>
                    <dd className="mt-1">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6 shadow-md">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle>Court Details</CardTitle>
          </CardHeader>
          <CardContent className="bg-white p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-500">#</TableHead>
                  <TableHead className="text-gray-500">Type</TableHead>
                  <TableHead className="text-gray-500">Name</TableHead>
                  <TableHead className="text-gray-500">State</TableHead>
                  <TableHead className="text-gray-500">District</TableHead>
                  <TableHead className="text-gray-500">Pincode</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>CC</TableCell>
                  <TableCell>Wardha District Court</TableCell>
                  <TableCell>Maharastara</TableCell>
                  <TableCell>Wardha</TableCell>
                  <TableCell>442001</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-md">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle>Advocate Details</CardTitle>
          </CardHeader>
          <CardContent className="bg-white p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-500">State</TableHead>
                  <TableHead className="text-gray-500">District</TableHead>
                  <TableHead className="text-gray-500">Block</TableHead>
                  <TableHead className="text-gray-500">Panchayat</TableHead>
                  <TableHead className="text-gray-500">Village</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Maharastra</TableCell>
                  <TableCell>Wardha</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-md">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle>Complaint Report</CardTitle>
          </CardHeader>
          <CardContent className="bg-white">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-500">Total Complaint Registered</h3>
                <p>-</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-500">Total Advised Enabled</h3>
                <p>-</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" className="bg-gray-300 text-gray-700">Back</Button>
          <Button className="bg-blue-600 text-white hover:bg-purple-600">Allocate</Button>
        </div>
      </main>
    </div>
  )
}