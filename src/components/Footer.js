import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (

        <footer className="w-screen px-5 py-8 flex justify-between border-t bg-[#f9f9fa]">
            <p>© VeeCloud.vercel.app</p>
            <div className='flex gap-5'>
                <Link href={'#'}><Facebook size={20} className='text-gray-400 hover:text-blue-400'/></Link>
                <Link href={'#'}><Instagram size={20} className='text-gray-400 hover:text-blue-400'/></Link>
                <Link href={'#'}><Github size={20} className='text-gray-400 hover:text-blue-400'/></Link>
                <Link href={'#'}><Linkedin size={20} className='text-gray-400 hover:text-blue-400'/></Link>
            </div>
        </footer>
    )
}

export default Footer