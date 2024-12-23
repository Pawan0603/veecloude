'use client';
import React, { useRef, useEffect } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSearchParams } from 'next/navigation';

function RoomPageComponent() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get('roomId');
  const userName = searchParams.get('userName');
  const userId = searchParams.get('userId');
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async () => {
      const appID = 946300796;
      const serverSecret = process.env.NEXT_PUBLIC_SERVER_SECRET;

      if (!serverSecret || !roomId || !userId || !userName) {
        console.error('Missing required parameters or environment variables.');
        return;
      }

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        userId,
        userName
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: containerRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    };

    if (typeof window !== 'undefined') {
      myMeeting();
    }
  }, [roomId, userId, userName]);

  if (!roomId || !userId || !userName) {
    return <div>Error: Missing required parameters!</div>;
  }

  return (
    <div>
      <div
        ref={containerRef}
        className="w-screen h-[calc(100vh-90px)] flex items-center justify-center"
      />
    </div>
  );
}

export default RoomPageComponent;
