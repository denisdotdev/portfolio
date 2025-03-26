import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Denis Lessard</h1>
      <p className="mt-2 text-lg sm:text-xl">Développeur web</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Bienvenue! Sur ce site, vous trouverez plus d&apos;informmation sur moi et le travail que j&apos;ai accompli.</p>
      </div>

      <Links />
    </div>
  )
}
