import Link from 'next/link';
import Footer from '@/app/components/Footer';
function ContactUs() {
  return (
    <>
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
              <Link href="/pages/how-it-works" className='block py-1 hover:text-[#00ff0d]'>How it Works</Link>
              <Link href="/pages/services" className='block py-1 hover:text-[#00ff0d]'>Services</Link>
              <Link href="/pages/faqs" className='block py-1 hover:text-[#00ff0d]'>FAQ's</Link>
              <Link href="/pages/how-to-pay" className='block py-1 hover:text-[#00ff0d]'>How to Pay</Link>
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

            <Link href="/pages/how-it-works" className='hover:text-[#00ff0d]'>How it Works</Link>
            <Link href="/pages/services" className='hover:text-[#00ff0d]'>Services</Link>
            <Link href="/pages/faqs" className='hover:text-[#00ff0d]'>FAQ's</Link>
            <Link href="/pages/how-to-pay" className='hover:text-[#00ff0d]'>How to Pay</Link>
            <Link href="/pages/contactus" className='hover:text-[#00ff0d] text-[#00ff0d]'>Contact Us</Link>
            <Link href="/pages/login" className='hover:text-[#00ff0d]'>Login</Link>
          </div>
        </section>

      </nav>
      <div className='flex flex-col justify-center items-center px-10 pt-10 pb-5 text-center'>
        <h1 className='lg:text-5xl text-5xl font-serif'>Contact Us</h1>
        <div className="w-40 h-1 bg-amber-300 mt-5 mb-5">
          {/* here is a green line */}
        </div>
      </div>

      <section className='w-[100%] h-auto flex jutify-center items-center flex-col lg:flex-row pb-15 pt-10 bg-[#f7f7f7] overflow-hidden'>
        <section className='w-[100%] lg:w-[500px] h-auto flex flex-col border border-[#00ff0d] bg-[#162B18] text-[white] p-10 overflow-hidden rounded-2xl lg:ml-10'>
          <h1 className='text-3xl'>Contact Information</h1>
          <p>Say something to start a live chat!</p>
          <div className=" list-none w-50 mt-10">
            <li className="pt-5">
              ✉ info@shirakatdari.com</li>
            <li className="pt-5">
              📞 +92 336 9737199</li>
            <li className="pt-5">
              🔴 Lahore, Pakistan</li>
          </div>

          <div id="anchors" className=" w-30 pt-5 h-aut flex items-center justify-between ">
            <Link href='https://facebook.com'>
              <img src="/facebook.png" className="w-7 h-7"></img>
            </Link>
            <Link href='https://linkedin.com'>
              <img src="/linkedin.png" className="w-7 h-7"></img>
            </Link>
            <Link href='https://facebook.com'>
              <img src="/twitter.png" className="w-7 h-7"></img>
            </Link>
          </div>

          <div className='w-40 h-40 bg-[#ffffff3a] rounded-full relative left-60 top-20 animate-pulse'>
            <div className='w-20 h-20 bg-[#ffffff3a] rounded-full relative -left-5 animate-bounce'></div>
          </div>

        </section>

        <form id='main_container' className=' h-full w-full flex justify-center items-center flex-col flex-wrap p-10 '>
          <section className='flex flex-wrap flex-row relative lg:left-15'>
            <div className='w-[100%] lg:w-[400px] h-auto border-[#00ff0d] bg-[#FBFBFB] text-[black] p-0 overflow-hidden m-1'>
              <div className='flex flex-col bg-[#FBFBFB] m-1'>
                <label className='font-semibold mb-3'>First Name <span className='text-red-500'>*</span></label>
                <input placeholder='Enter your first name' required className='border-b-1 border-[#000000] pb-2 pl-2'></input>
                <div className='hidden bg-[#F9E4E8] text-[#E04562] rounded mt-2'>
                  This field is required. Please enter text.</div>
              </div>
            </div>
            <div className='w-[100%] lg:w-[400px] h-auto border-[#00ff0d] bg-[#FBFBFB] text-[black] p-0 overflow-hidden m-1'>
              <div className='flex flex-col bg-[#FBFBFB] m-1'>
                <label className='font-semibold mb-3'>Last Name <span className='text-red-500'>*</span></label>
                <input placeholder='Enter your first name' required className='border-b-1 border-[#000000] pb-2 pl-2'></input>
                <div className='hidden bg-[#F9E4E8] text-[#E04562] rounded mt-2'>
                  This field is required. Please enter text.</div>
              </div>
            </div>
            <div className='w-[100%] lg:w-[400px] h-auto border-[#00ff0d] bg-[#FBFBFB] text-[black] p-0 overflow-hidden m-1'>
              <div className='flex flex-col bg-[#FBFBFB] m-1'>
                <label className='font-semibold mb-3'>Email <span className='text-red-500'>*</span></label>
                <input placeholder='Enter your first name' required type='email' className='border-b-1 border-[#000000] pb-2 pl-2'></input>
                <div className='hidden bg-[#F9E4E8] text-[#E04562] rounded mt-2'>
                  This field is required. Please enter text.</div>
              </div>
            </div>
            <div className='w-[100%] lg:w-[400px] h-auto border-[#00ff0d] bg-[#FBFBFB] text-[black] p-0 overflow-hidden m-1'>
              <div className='flex flex-col bg-[#FBFBFB] m-1'>
                <label className='font-semibold mb-3'>Phone Number <span className='text-red-500'>*</span></label>
                <input placeholder='Enter your first name' required type='number' className='border-b-1 border-[#000000] pb-2 pl-2'></input>
                <div className='hidden bg-[#F9E4E8] text-[#E04562] rounded mt-2'>
                  This field is required. Please enter text.</div>
              </div>
            </div>

            <div className='w-[100%] lg:w-[400px] h-auto border-[#00ff0d] bg-[#FBFBFB] text-[black] p-0 overflow-hidden m-1'>
              <div className='flex flex-col bg-[#FBFBFB] m-1'>
                <label className='font-semibold mb-3'>Select Subject? <span className='text-red-500'>*</span></label>
                <div className='flex justify-evenly items-center'>
                  <label><input type='radio' name='special' required className='border-b-1 border-[#000000] pb-2 mr-2' />
                  General Inquiry
                  </label>
                  <label><input type='radio' name='special' className='border-b-1 border-[#000000] pb-2 mr-2' />
                    Consultation </label>
                </div>
                <div className='hidden bg-[#F9E4E8] text-[#E04562] rounded mt-2'>
                  This field is required. Please enter text.</div>
              </div>
            </div>

            <div className='w-[100%] lg:w-[400px] h-auto border-[#00ff0d] bg-[#FBFBFB] text-[black] p-0 overflow-hidden m-1'>
              <div className='flex flex-col bg-[#FBFBFB] m-1'>
                <label className='font-semibold mb-3'>Message <span className='text-red-500'>*</span></label>
                <input placeholder='Write your message' required className='border-b-1 border-[#000000] pb-2 pl-2'></input>
                <div className='hidden bg-[#F9E4E8] text-[#E04562] rounded mt-2'>
                  This field is required. Please enter text.</div>
              </div>
            </div>
          </section>
          <button className='px-3 py-2 mt-5 rounded bg-[#162B18] text-white hover:bg-[#00ff0d]'>Send Message</button>
        </form>   
      </section>

      <Footer />
    </>
  );
} export default ContactUs;