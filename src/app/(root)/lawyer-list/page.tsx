'use client'

import { useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Bell, Search, MoreHorizontal, Menu, Edit, Calendar } from 'lucide-react'
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
import lawyer from '../../../public/icons/Track Case widget.png'

const lawyerData = [
  {
    id: 1,
    name: "Pranav Pathekar",
    gender: "Male",
    dob: "23/5/2002",
    enrollmentNo: "MH/1726/2023",
    associatedWith: "DLSA",
    noOfCases: 16,
    state: "Maharastra",
    district: "Wardha",
    dateOfJoining: "1/1/2023",
    status: "Active"
  },
  {
    id: 2,
    name: "Anjali Sharma",
    gender: "Female",
    dob: "15/4/1990",
    enrollmentNo: "DL/0987/2015",
    associatedWith: "LSA",
    noOfCases: 24,
    state: "Delhi",
    district: "New Delhi",
    dateOfJoining: "10/6/2018",
    status: "Inactive"
  },
  {
    id: 3,
    name: "Rahul Verma",
    gender: "Male",
    dob: "12/11/1985",
    enrollmentNo: "UP/1345/2012",
    associatedWith: "DLSA",
    noOfCases: 30,
    state: "Uttar Pradesh",
    district: "Lucknow",
    dateOfJoining: "5/9/2016",
    status: "Pending"
  },
  {
    id: 4,
    name: "Sneha Iyer",
    gender: "Female",
    dob: "8/2/1993",
    enrollmentNo: "TN/2234/2018",
    associatedWith: "NGO",
    noOfCases: 18,
    state: "Tamil Nadu",
    district: "Chennai",
    dateOfJoining: "3/3/2020",
    status: "Active"
  },
  {
    id: 5,
    name: "Arjun Mehta",
    gender: "Male",
    dob: "25/9/1988",
    enrollmentNo: "RJ/8765/2010",
    associatedWith: "LADC",
    noOfCases: 22,
    state: "Rajasthan",
    district: "Jaipur",
    dateOfJoining: "20/7/2015",
    status: "On Leave"
  }
];


export default function LawyerAvailabilityList() {
  const [enNo, setEnNo] = useState('')
  const [name, setName] = useState('')
  const router = useRouter()

  const handleEdit = (lawyerId: number) => {
    router.push(`/lawyer-details/${lawyerId}`)
  }
  const searchParams = useSearchParams();
  const statusFromQuery = searchParams.get('status');
  const idFromQuery = searchParams.get('id');

  return (
    <div className="min-h-screen bg-gray-100">
     {/* <HeaderBox/> */}

      <main className="container mx-auto px-4 py-8">
        <SubHeader title='List of Lawyers'/>

        <div className="mb-8">
          <Image src={lawyer} alt="Lawyers Illustration" width={300} height={200} className="w-full max-w-md mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="enNo" className="block text-sm font-medium text-gray-700 mb-1">Search by EN No :</label>
            <Input 
              id="enNo" 
              placeholder="Enter EN No." 
              value={enNo}
              onChange={(e) => setEnNo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name :</label>
            <Input 
              id="name" 
              placeholder="Enter Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-blue-600 text-white">Name</TableHead>
                <TableHead className="bg-blue-600 text-white">Gender</TableHead>
                <TableHead className="bg-blue-600 text-white">DOB</TableHead>
                <TableHead className="bg-blue-600 text-white">Enrollment no.</TableHead>
                <TableHead className="bg-blue-600 text-white">Associated with</TableHead>
                <TableHead className="bg-blue-600 text-white">No. Of Cases</TableHead>
                <TableHead className="bg-blue-600 text-white">State</TableHead>
                <TableHead className="bg-blue-600 text-white">District</TableHead>
                <TableHead className="bg-blue-600 text-white">Date of Joining</TableHead>
                <TableHead className="bg-blue-600 text-white">Status</TableHead>
                <TableHead className="bg-blue-600 text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
           <TableBody>
        {lawyerData.map((lawyer, index) => {
          const isMatch = idFromQuery && String(lawyer.id) === idFromQuery;
          const statusToDisplay = isMatch && statusFromQuery ? statusFromQuery : lawyer.status;

          return (
            <TableRow key={lawyer.id}>
              {/* <TableCell>{index + 1}</TableCell>
               */}
              <TableCell>{lawyer.name}</TableCell>
              <TableCell>{lawyer.gender}</TableCell>
              <TableCell>{lawyer.dob}</TableCell>
              <TableCell>{lawyer.enrollmentNo}</TableCell>
              <TableCell>{lawyer.associatedWith}</TableCell>
              <TableCell>{lawyer.noOfCases}</TableCell>
              <TableCell>{lawyer.state}</TableCell>
              <TableCell>{lawyer.district}</TableCell>
              <TableCell>{lawyer.dateOfJoining}</TableCell>
              <TableCell>
                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                  {statusToDisplay}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(lawyer.id)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}