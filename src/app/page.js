'use client';
import Image from "next/image";
import { React, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Loader1 from "@/components/loader/Loader1";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";



export default function Home() {
  const [roomCode, setRoomCode] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const EnterUserName = () => {
    let btn = document.getElementById("userNameformButton");
    btn.click();
  }

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUserName(e.target.value);
      // for temp. userId set in future i change the logic of userId
      setUserId(`${e.target.value + Date.now().toString()}`);
    }
  }

  // checking username available are not in the localstorage & set username
  useEffect(() => {
    if (typeof window != 'undefined') {
      let UN = localStorage.getItem("userName");
      if (UN) {
        setUserName(UN)
      } else {
        EnterUserName();
      }
    }
  }, []);

  const saveUserName = (e) => {
    e.preventDefault();
    if (typeof window != "undefined") {
      localStorage.setItem("userName", userName);
    }
  }

  const startMeeting = async () => {
    console.log("startmeeting")
    if (userName === null) {
      EnterUserName();
      return
    }
    setLoading(true);
    try {
      // Create the payload for JWT
      const payload = {
        userName: userName,
        userId: userId
      };

      // Create JWT token
      const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/enterRoom`, {
        data: payload
      });

      console.log(response.data.data)
      // redirecting user to room page with payload
      if (response.data.success === true) {
        setRoomCode(response.data.data);
        let BTN = document.getElementById("copyCodeBtn");
        BTN.click();
      } else {
        console.log("Error...🔴🔴🔴🔴🔴")
      }
    } catch (error) {
      console.error("Error starting meeting:", error);
    } finally {
      setLoading(false);
    }
  }

  const EnterRoom = () => {
    setLoading(true);
    if (roomCode != null) {
      router.push(`/room?roomId=${roomCode}&userId=${userId}&userName=${userName}`);
    }
  }

  const CopyCode = (text) => {
    navigator.clipboard.writeText(text)
    toast({
      description: "Room Code has copied to clipboard",
    })
  }

  const handleJoinMeeting = (e) => {
    e.preventDefault();
    if (userName === null) {
      EnterUserName();
      return
    }

    router.push(`/room?roomId=${roomCode}&userId=${userId}&userName=${userName}`)
  }



  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <>
          {loading === true && <Loader1 />}
          <div className="flex flex-col md:flex-row w-screen min-h-[calc(100vh-60px)] items-center md:justify-center ">
            <div className="md:w-[50%] flex flex-col items-center justify-center gap-3 p-7">
              <h1 className="text-3xl md:text-4xl">Video Call and Meeting for Everyone</h1>
              <p className="text-gray-600 text-lg md:text-center">Connect, collaborate, and communicate seamlessly<br />with our secure video calling platform.</p>
              <div className="flex gap-3 mt-5">


                <button
                  onClick={startMeeting}
                  id="NewMeetingBtn"
                  className="relative flex items-center px-4 py-2 sm:px-6 sm:py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                >
                  <span
                    className="absolute top-0 right-0 inline-block w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                  >
                    <span
                      className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                  </span>
                  <span
                    className="absolute bottom-0 rotate-180 left-0 inline-block w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                  >
                    <span
                      className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                  </span>
                  <span
                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                  ></span>
                  <span
                    className="relative w-full text-left text-white text-sm sm:text-base transition-colors duration-200 ease-in-out group-hover:text-white"
                  >New Meeting</span
                  >
                </button>


                <form onSubmit={handleJoinMeeting} className="flex gap-4 items-center">
                  <div>
                    <input
                      onChange={(e) => { setRoomCode(e.target.value) }}
                      type="text"
                      placeholder="Enter room code here"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <button type="submit" className="hover:text-blue-600">Join</button>
                </form>
              </div>

            </div>

            <div className="md:w-[50%] flex items-center justify-center">
              <Image src={'/videocallbg.png'} className="w-[90%]" width={500} height={500} alt="wideo call image photo" />
            </div>

          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button
                id="userNameformButton"
                className="hidden"
              >
                EnterUserName
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>VeeCloude</DialogTitle>
                <DialogDescription>
                  Enter your username Befor you join or create a new meeting.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={saveUserName}>
                <div className="grid gap-4 py-4">
                  {/* <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    onChange={handleChange}
                    id="name"
                    name="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div> */}
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      onChange={handleChange}
                      id="username"
                      name="username"
                      placeholder="your name"
                      className="col-span-3"
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit" className='bg-blue-500 hover:bg-blue-700'>Save</Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          {/* this is copy room code card. */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="hidden" id="copyCodeBtn">Share</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>VeeCloude</DialogTitle>
                <DialogDescription>
                  Copy code and share your friend
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    // defaultValue="https://ui.shadcn.com/docs/installation"
                    value={roomCode}
                    readOnly
                  />
                </div>
                <Button onClick={() => { CopyCode(roomCode) }} size="sm" className="px-3">
                  <span className="sr-only">Copy</span>
                  <Copy />
                </Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button onClick={EnterRoom} type="button" variant="secondary">
                    Enter Room
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      </motion.div>
    </AuroraBackground>
  );
}
