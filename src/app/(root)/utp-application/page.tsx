'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import HeaderBox from '@/components/ui/HeaderBox';
import SubHeader from '@/components/SubHeader';
import { Input } from "@/components/ui/input";
import axios from 'axios';


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


export default function UtpApplication() {
  const [cases, setCases] = useState<CaseDetails[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch data on mount
  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await axios.get('http://localhost:8888/cases'); // Call the API endpoint
        const data = res.data.data;
        console.log(data);
        if (res.status === 200) {
          setCases(data); // Set the fetched data
        }
      } catch (error) {
        console.error('Error fetching cases:', error);
      }
    };

    fetchCases();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <HeaderBox /> */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto">
            <SubHeader title='List of UTP Application' />
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className='font-bold' >
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
                        <Button 
                          variant="link" 
                          className={
                            index % 3 === 0 ? "text-green-600" :
                            index % 3 === 1 ? "text-blue-600" :
                            "text-red-600"
                          }
                        >
                          View
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
  );
}
