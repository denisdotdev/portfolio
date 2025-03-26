import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

import Image from 'next/image'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">À propos</h1>

      <div className="mr-auto ml-auto mb-8 justify-center">
        <Image
          src="/portrait.jpg"
          alt="Denis Lessard"
          style={{
            width: '50%',
            height: 'auto',
          }}
          width={4000}
          height={6000}
          priority={true}
        />
        <span className="text-sm text-center">Photo par <a href="https://www.instagram.com/zoeyy_photographie/">Zoeyy Photographie</a></span>
      </div>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Salut!
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
