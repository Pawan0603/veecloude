import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (

        <footer className="w-screen px-5 py-8 flex justify-between border-t bg-[#f9f9fa]">
            <p>© VeeCloud.vercel.app</p>
            <div className='flex gap-5'>
                <Link target='_blank' href={'https://www.facebook.com/pawan.thakre.39948'}><Facebook size={20} className='text-gray-400 hover:text-blue-400'/></Link>
                <Link target='_blank' href={'https://www.instagram.com/pawanthakre_/'}><Instagram size={20} className='text-gray-400 hover:text-blue-400'/></Link>
                <Link target='_blank' href={'https://github.com/Pawan0603'}><Github size={20} className='text-gray-400 hover:text-blue-400'/></Link>
                <Link target='_blank' href={'https://www.linkedin.com/in/pawan-thakre-12b99a2b8/'}><Linkedin size={20} className='text-gray-400 hover:text-blue-400'/></Link>
            </div>
        </footer>
    )
}

export default Footer