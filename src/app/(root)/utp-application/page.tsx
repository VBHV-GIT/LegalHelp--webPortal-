'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import HeaderBox from '@/components/ui/HeaderBox';
import SubHeader from '@/components/SubHeader';
import { Input } from "@/components/ui/input";

export default function UtpApplication() {
  const [cases, setCases] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch data on mount
  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await fetch('/api/cases'); // Call the API endpoint
        const data = await res.json();
        if (data.success) {
          setCases(data.data); // Set the fetched data
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
                  {cases.map((item, index) => (
                    <TableRow key={item._id}>
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
  );
}
