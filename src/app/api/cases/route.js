import dbConnect from '../../../../lib/dbConnect'; 
import Case from '../../../models/Case';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await dbConnect();
  try {
    const cases = await Case.find({});
    return NextResponse.json({ success: true, data: cases });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const newCase = await Case.create(body);
    return NextResponse.json({ success: true, data: newCase });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function DELETE(req) {
  await dbConnect();
  try {
    const { id } = await req.json(); // Assuming ID is passed in request body for deletion
    await Case.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Case deleted successfully.' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}