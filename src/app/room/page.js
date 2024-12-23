'use client';
import dynamic from 'next/dynamic';

const RoomPage = dynamic(() => import('./RoomPageComponent'), { ssr: false });

export default RoomPage;
