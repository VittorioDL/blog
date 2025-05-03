import Image from "next/image";
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-white p-4 w-full">
      <div className="mx-auto flex items-center justify-center">
        {/* LOGO */}
        <Link href="/" className="">
          <Image 
            src="/images/wolf_transparent.png" 
            alt="Logo" 
            width={100} 
            height={100} />
        </Link>

        {/* NOME BLOG */}
        <Link href="/" className="text-5xl md:text-7xl font-playfair font-semibold text-green-900">
          The Noticer
        </Link>
      </div>  
    </nav>
  )
}

export default Navbar
