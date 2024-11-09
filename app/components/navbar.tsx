import Link from "next/link";

export function Navbar(){
    return(
<header className="body-font bg-stone-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link href="/" className="mr-5 font-semibold text-stone-500 hover:text-gray-900">Home</Link>
      <Link href="/about" className="mr-5 font-semibold text-stone-500 hover:text-gray-900">About</Link>
      <Link href="/contact" className="mr-5 font-semibold text-stone-500 hover:text-gray-900">Contact</Link>
      
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
     
      <span className="ml-3 text-3xl font-bold font-mono text-stone-700">Mavia Yousuf</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
       <span className="font-semibold text-stone-500">Contact: 0322-5312580</span>
    </div>
  </div>
</header>);}
