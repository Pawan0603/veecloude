import { NextResponse } from 'next/server';

export async function POST(request) {
    let rooms = [];
  try {
    const body = await request.json();
    console.log(body.data)

    // Generate a random 6-digit room code using numbers and capital letters
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let roomCode = '';
    for (let i = 0; i < 6; i++) {
      roomCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    rooms.push(roomCode)

    return NextResponse.json({ success: true, data: roomCode},{status: 200})
    

  } catch (error) {
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
