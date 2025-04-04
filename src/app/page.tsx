import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Denis Lessard</h1>
      <p className="mt-2 text-lg sm:text-xl">Développeur web pigiste</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Développeur web passionné et créatif, je transforme vos idées en expériences numériques captivantes. Spécialisé dans la création de sites web sur mesure, je combine expertise technique et sensibilité esthétique pour concevoir des solutions qui répondent précisément à vos besoins.</p> <p>Explorez mon portfolio pour découvrir comment je peux donner vie à vos projets. </p>
      </div>
      <Links />
    </div>
  )
}
