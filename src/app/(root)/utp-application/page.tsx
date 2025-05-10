'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SubHeader from '@/components/SubHeader';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface CaseDetails {
  _id: string;
  name: string;
  caseType: string;
  underSection: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  email: string;
  state: string;
  city: string;
  street: string;
  zipCode: string;
  incidentDate: string;
  incidentState: string;
  incidentCity: string;
  incidentStreet: string;
}

const cases: CaseDetails[] = [
  {
    _id: "1",
    name: "Ravi Kumar",
    gender: "Male",
    incidentCity: "Mumbai",
    underSection: "IPC 302",
    caseType: "Murder",
    dateOfBirth: "1990-04-15",
    phoneNumber: "9876543210",
    email: "ravi@example.com",
    state: "Maharashtra",
    city: "Mumbai",
    street: "Andheri West",
    zipCode: "400053",
    incidentDate: "2023-12-01",
    incidentState: "Maharashtra",
    incidentStreet: "Juhu Road"
  },
  {
    _id: "2",
    name: "Sunita Singh",
    gender: "Female",
    incidentCity: "Delhi",
    underSection: "IPC 420",
    caseType: "Fraud",
    dateOfBirth: "1988-09-10",
    phoneNumber: "9123456789",
    email: "sunita@example.com",
    state: "Delhi",
    city: "New Delhi",
    street: "Karol Bagh",
    zipCode: "110005",
    incidentDate: "2023-10-15",
    incidentState: "Delhi",
    incidentStreet: "Connaught Place"
  },
  {
    _id: "3",
    name: "Amit Verma",
    gender: "Male",
    incidentCity: "Bangalore",
    underSection: "IPC 376",
    caseType: "Sexual Assault",
    dateOfBirth: "1985-01-20",
    phoneNumber: "9988776655",
    email: "amit@example.com",
    state: "Karnataka",
    city: "Bangalore",
    street: "MG Road",
    zipCode: "560001",
    incidentDate: "2023-08-05",
    incidentState: "Karnataka",
    incidentStreet: "Brigade Road"
  },
  {
    _id: "4",
    name: "Pooja Sharma",
    gender: "Female",
    incidentCity: "Kolkata",
    underSection: "IPC 498A",
    caseType: "Domestic Violence",
    dateOfBirth: "1992-07-25",
    phoneNumber: "9876547890",
    email: "pooja@example.com",
    state: "West Bengal",
    city: "Kolkata",
    street: "Park Street",
    zipCode: "700016",
    incidentDate: "2023-07-10",
    incidentState: "West Bengal",
    incidentStreet: "Salt Lake"
  },
  {
    _id: "5",
    name: "Mohit Chauhan",
    gender: "Male",
    incidentCity: "Hyderabad",
    underSection: "IPC 307",
    caseType: "Attempt to Murder",
    dateOfBirth: "1983-11-30",
    phoneNumber: "8765432109",
    email: "mohit@example.com",
    state: "Telangana",
    city: "Hyderabad",
    street: "Banjara Hills",
    zipCode: "500034",
    incidentDate: "2023-06-20",
    incidentState: "Telangana",
    incidentStreet: "Begumpet"
  }, 
{
  _id: "6",
  name: "Neha Gupta",
  gender: "Female",
  incidentCity: "Chennai",
  underSection: "IPC 354",
  caseType: "Harassment",
  dateOfBirth: "1995-03-22",
  phoneNumber: "9012345678",
  email: "neha@example.com",
  state: "Tamil Nadu",
  city: "Chennai",
  street: "T Nagar",
  zipCode: "600017",
  incidentDate: "2023-11-12",
  incidentState: "Tamil Nadu",
  incidentStreet: "Anna Salai"
},
{
  _id: "7",
  name: "Rahul Mehta",
  gender: "Male",
  incidentCity: "Pune",
  underSection: "IPC 379",
  caseType: "Theft",
  dateOfBirth: "1991-05-08",
  phoneNumber: "9345678910",
  email: "rahul@example.com",
  state: "Maharashtra",
  city: "Pune",
  street: "Kothrud",
  zipCode: "411038",
  incidentDate: "2023-09-18",
  incidentState: "Maharashtra",
  incidentStreet: "FC Road"
},
{
  _id: "8",
  name: "Anjali Desai",
  gender: "Female",
  incidentCity: "Ahmedabad",
  underSection: "IPC 406",
  caseType: "Criminal Breach of Trust",
  dateOfBirth: "1987-12-12",
  phoneNumber: "9823012345",
  email: "anjali@example.com",
  state: "Gujarat",
  city: "Ahmedabad",
  street: "Navrangpura",
  zipCode: "380009",
  incidentDate: "2023-05-28",
  incidentState: "Gujarat",
  incidentStreet: "CG Road"
},
{
  _id: "9",
  name: "Deepak Reddy",
  gender: "Male",
  incidentCity: "Visakhapatnam",
  underSection: "IPC 323",
  caseType: "Assault",
  dateOfBirth: "1989-02-17",
  phoneNumber: "9988771122",
  email: "deepak@example.com",
  state: "Andhra Pradesh",
  city: "Visakhapatnam",
  street: "Dwaraka Nagar",
  zipCode: "530016",
  incidentDate: "2023-04-09",
  incidentState: "Andhra Pradesh",
  incidentStreet: "Beach Road"
},
{
  _id: "10",
  name: "Sneha Patil",
  gender: "Female",
  incidentCity: "Nagpur",
  underSection: "IPC 509",
  caseType: "Insult to Modesty",
  dateOfBirth: "1994-06-19",
  phoneNumber: "9765432180",
  email: "sneha@example.com",
  state: "Maharashtra",
  city: "Nagpur",
  street: "Sadar",
  zipCode: "440001",
  incidentDate: "2023-03-14",
  incidentState: "Maharashtra",
  incidentStreet: "Sitabuldi"
}

];

export default function UtpApplication() {
  const [selectedCase, setSelectedCase] = useState<CaseDetails | null>(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto">
            <SubHeader title='List of UTP Application' />
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className='font-bold'>
                    <TableHead>Name</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Name of police station</TableHead>
                    <TableHead>Offence under section</TableHead>
                    <TableHead>Review</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cases.map((item, index) => (
                    <TableRow key={item._id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.gender}</TableCell>
                      <TableCell>{item.incidentCity} Police Station</TableCell>
                      <TableCell>{item.underSection}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="link"
                              className={
                                index % 3 === 0 ? "text-green-600" :
                                index % 3 === 1 ? "text-blue-600" :
                                "text-red-600"
                              }
                              onClick={() => setSelectedCase(item)}
                            >
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                            <DialogHeader>
                              <DialogTitle className="text-xl font-bold">Case Details</DialogTitle>
                            </DialogHeader>
                            {selectedCase && (
                              <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                                <div><strong>Name:</strong> {selectedCase.name}</div>
                                <div><strong>Gender:</strong> {selectedCase.gender}</div>
                                <div><strong>Date of Birth:</strong> {selectedCase.dateOfBirth}</div>
                                <div><strong>Email:</strong> {selectedCase.email}</div>
                                <div><strong>Phone:</strong> {selectedCase.phoneNumber}</div>
                                <div><strong>Case Type:</strong> {selectedCase.caseType}</div>
                                <div><strong>Under Section:</strong> {selectedCase.underSection}</div>
                                <div><strong>Address:</strong> {selectedCase.street}, {selectedCase.city}, {selectedCase.state}, {selectedCase.zipCode}</div>
                                <div><strong>Incident Date:</strong> {selectedCase.incidentDate}</div>
                                <div><strong>Incident Location:</strong> {selectedCase.incidentStreet}, {selectedCase.incidentCity}, {selectedCase.incidentState}</div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
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
  );
}
