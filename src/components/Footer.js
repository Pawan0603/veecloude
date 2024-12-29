import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (

        <footer className="w-screen px-5 py-8 flex justify-between border-t">
            <p>© VeeCloud.vercel.app</p>
            <div className='flex gap-5'>
                <Link href={'#'}><Facebook className='text-blue-500'/></Link>
                <Link href={'#'}><Instagram className='text-pink-500'/></Link>
                <Link href={'#'}><Github className='text-green-500'/></Link>
                <Link href={'#'}><Linkedin className='text-blue-600'/></Link>
            </div>
        </footer>
    )
}

export default Footer