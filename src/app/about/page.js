'use client'
import React from 'react'
// import Loader1 from '@/components/loader/Loader1'

function About() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">About VeeCloude</h1>
      <p className="text-lg mb-4">Welcome to VeeCloude, your premier video calling web application. Our platform allows you to connect with friends, family, and colleagues seamlessly through high-quality video calls.</p>
      <p className="text-lg mb-4">With VeeCloude, you can enjoy:</p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">High-definition video and audio calls</li>
        <li className="mb-2">Group video calls with up to 50 participants</li>
        <li className="mb-2">Screen sharing and collaboration tools</li>
        <li className="mb-2">End-to-end encryption for secure communication</li>
        <li className="mb-2">Cross-platform support for web, mobile, and desktop</li>
      </ul>
      <p className="text-lg">Thank you for choosing VeeCloude. We are committed to providing you with the best video calling experience.</p>
    </div>
  )
}

export default About