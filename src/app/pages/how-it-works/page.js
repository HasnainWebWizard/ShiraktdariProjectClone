import Link from 'next/link';
import Footer from '../../components/Footer';
function HowItWorksPage() {
  return (
    <div>
      <nav className="w-full h-auto flex items-center justify-center text-white shadow-[2px_2px_0px_2px_#00ff0d] bg-[#162b18]">
      <section className='flex flex-wrap items-center justify-between w-[90%] lg:w-[80%] px-5 py-3'>

        {/* Logo */}
        <div id="logo" className="font-serif text-3xl font-extrabold text-[#00ff0d]">
          <Link href='/'>
            Shirkatdari
          </Link>
        </div>

        {/* Mobile Menu Button - only visible on small screens */}
        <div className='lg:hidden group relative left-0 lg:left-15'>
          <span className="material-icons cursor-pointer">
            menu
          </span>

          {/* 👇 Mobile Dropdown Menu */}
          <div className='absolute right-0 top-15 bg-[#212635] text-white shadow-md p-5 hidden group-hover:block w-[300px] text-center'>
            <Link href="/" className='block py-1 hover:text-[#00ff0d]'>Home</Link>
            <Link href="/pages/aboutus" className='block py-1 hover:text-[#00ff0d]'>About Us</Link>
            <Link href="/pages/how-it-works" className='block py-1 hover:text-[#00ff0d] text-[#00ff0d]'>How it Works</Link>
            <Link href="/pages/services" className='block py-1 hover:text-[#00ff0d]'>Services</Link>
            <Link href="/pages/faqs" className='block py-1 hover:text-[#00ff0d]'>FAQ's</Link>
            <Link href="/pages/how-to-pay" className='block py-1 hover:text-[#00ff0d] '>How to Pay</Link>
            <Link href="/pages/contactus" className='block py-1 hover:text-[#00ff0d]'>Contact Us</Link>
            <Link href="/pages/login" className='block py-1 hover:text-[#00ff0d]'>Login</Link>
          </div>
        </div>

        {/* 👇 Desktop Menu - only visible on large screens */}
        <div className='hidden lg:flex font-bold space-x-8'>
          <div className="relative group">
            <Link href="/" className="flex items-center hover:text-[#00ff0d]">
              Home
              <span className="material-icons text-base ml-1">
                keyboard_arrow_down
              </span>
            </Link>
            {/* Dropdown under Home */}
            <div className="absolute left-0 top-full w-screen bg-[#212635] text-white shadow-md p-5 hidden group-hover:block z-50">
              <Link href="/pages/aboutus" className="block py-1 hover:text-[#00ff0d]">About Us</Link>
              {/* Add more links here if needed */}
            </div>
          </div>

          <Link href="/pages/how-it-works" className='hover:text-[#00ff0d] text-[#00ff0d]'>How it Works</Link>
          <Link href="/pages/services" className='hover:text-[#00ff0d]'>Services</Link>
          <Link href="/pages/faqs" className='hover:text-[#00ff0d]'>FAQ's</Link>
          <Link href="/pages/how-to-pay" className='hover:text-[#00ff0d]'>How to Pay</Link>
          <Link href="/pages/contactus" className='hover:text-[#00ff0d]'>Contact Us</Link>
          <Link href="/pages/login" className='hover:text-[#00ff0d]'>Login</Link>
        </div>

      </section>
    </nav>
    
      <section className="flex flex-col justify-center items-center flex-wrap">
        <div className=" flex flex-col justify-center items-center flex-wrap">
          <h1 className="text-5xl font-[400] font-sans pt-15">How it works</h1>
          <div className="w-40 h-1 bg-[#00ff0d] mt-5">
            {/* here is a green line */}
          </div>
          <p className='text-center w-[80%] mt-5'>Investing in fractional gold ownership with Shirakatdari.com is simple and convenient. Our platform is designed to provide you with a seamless and transparent investment experience. Here’s how it works:</p>
        </div>

        <div className="w-[85%] h-auto flex justify-center items-center  flex-wrap mt-10 mb-20">

          <div className="w-[100%] lg:w-[50%] h-auto border-2 border-[#00ff0d] flex flex-col justify-center items-center
                rounded px-5 py-5 m-5">
             <span className="material-symbols-outlined text-[#00ff0d]">
              contacts
             </span>
             <h1 className=" text-center text-2xl font-serif font-[300]">Create an Account</h1>
          </div>
          
          <div className="w-[100%] lg:w-[50%] h-auto border-2 border-[#00ff0d] flex flex-col justify-center items-center
                rounded px-5 py-5 m-5">
             <span className="material-symbols-outlined text-[#00ff0d]">
              contacts
             </span>
             <h1 className=" text-center text-2xl font-serif font-[300]">Create an Account</h1>
          </div>

          <div className="w-[100%] lg:w-[50%] h-auto border-2 border-[#00ff0d] flex flex-col justify-center items-center
                rounded px-5 py-5 m-5">
             <span className="material-symbols-outlined text-[#00ff0d]">
              contacts
             </span>
             <h1 className=" text-center text-2xl font-serif font-[300]">Create an Account</h1>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default HowItWorksPage;
