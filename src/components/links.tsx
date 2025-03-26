import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string, name: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:denislessard91@gmail.com',
      name: 'Gmail'
    },
    {
      icon: SiGithub,
      href: 'https://github.com/denisdotdev',
      name: 'Github'
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/denislessard/',
      name: 'LinkedIn'
    },
    {
      icon: SiMedium,
      href: 'https://medium.com/@DenisL',
      name: 'Medium'
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href} aria-label={link.name}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
