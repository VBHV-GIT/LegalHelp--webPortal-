'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Bell, Search, MoreHorizontal, Menu, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import HeaderBox from '@/components/ui/HeaderBox'
import SubHeader from '@/components/SubHeader'

const caseData = [
  { name: "XYZ", gender: "Female", firNo: "253/33232", policeStation: "Ram Nagar", offence: "420", reviewStatus: "Review" },
  { name: "XYZ", gender: "Female", firNo: "253/33232", policeStation: "Ram Nagar", offence: "420", reviewStatus: "Review" },
  { name: "XYZ", gender: "Female", firNo: "253/33232", policeStation: "Ram Nagar", offence: "420", reviewStatus: "Review" },
  { name: "XYZ", gender: "Female", firNo: "253/33232", policeStation: "Ram Nagar", offence: "420", reviewStatus: "Review" },
  { name: "XYZ", gender: "Female", firNo: "253/33232", policeStation: "Ram Nagar", offence: "420", reviewStatus: "Review" },
  { name: "XYZ", gender: "Female", firNo: "253/33232", policeStation: "Ram Nagar", offence: "420", reviewStatus: "Review" },
]

export default function UtpApplication() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
<HeaderBox/>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto">
          <SubHeader title='List of UTP Application'/>

            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State :</label>
                  <Select>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="state1">State 1</SelectItem>
                      <SelectItem value="state2">State 2</SelectItem>
                      <SelectItem value="state3">State 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">District :</label>
                  <Select>
                    <SelectTrigger id="district">
                      <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="district1">District 1</SelectItem>
                      <SelectItem value="district2">District 2</SelectItem>
                      <SelectItem value="district3">District 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="court" className="block text-sm font-medium text-gray-700 mb-1">Court :</label>
                  <Select>
                    <SelectTrigger id="court">
                      <SelectValue placeholder="Select Court" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="court1">Court 1</SelectItem>
                      <SelectItem value="court2">Court 2</SelectItem>
                      <SelectItem value="court3">Court 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="caseNo" className="block text-sm font-medium text-gray-700 mb-1">Case No. :</label>
                  <Input id="caseNo" placeholder="Enter Case No." />
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Fir/Crime No.</TableHead>
                    <TableHead>Name of police station</TableHead>
                    <TableHead>Offence under section</TableHead>
                    <TableHead>Review</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {caseData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.gender}</TableCell>
                      <TableCell>{item.firNo}</TableCell>
                      <TableCell>{item.policeStation}</TableCell>
                      <TableCell>{item.offence}</TableCell>
                      <TableCell>
                        <Button 
                          variant="link" 
                          className={
                            index % 3 === 0 ? "text-green-600" :
                            index % 3 === 1 ? "text-blue-600" :
                            "text-red-600"
                          }
                        >
                          {item.reviewStatus}
                        </Button>
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