import Link from 'next/link';
import Footer from '@/app/components/Footer';
function Services() {
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
            <Link href="/pages/services" className='hover:text-[#00ff0d] text-[#00ff0d]'>Services</Link>
            <Link href="/pages/faqs" className='hover:text-[#00ff0d]'>FAQ's</Link>
            <Link href="/pages/how-to-pay" className='hover:text-[#00ff0d]'>How to Pay</Link>
            <Link href="/pages/contactus" className='hover:text-[#00ff0d]'>Contact Us</Link>
            <Link href="/pages/login" className='hover:text-[#00ff0d]'>Login</Link>
          </div>
        </section>
      </nav>

      <div className='flex flex-col justify-center items-center px-10 pt-10 pb-5 text-center'>
        <h1 className='lg:text-5xl text-5xl font-serif'>Services</h1>
        <div className="w-40 h-1 bg-[#00ff0d] mt-5 mb-5">
          {/* here is a green line */}
        </div>
        <p>Get Started Today with a minimum Rs 1,000 only</p>
      </div>

      <section className='w-full h-auto flex items-center justify-center flex-wrap
      //bg-red-600
        py-10 px-5'>
        <div className='h-auto w-140 border border-[#00ff0d]'>
          <div className=' p-10'>
            <h1 className='lg:text-3xl text-3xl font-serif'>Gold Bars:</h1>
            <div className="w-40 h-1 bg-[#00ff0d] mt-5 mb-5">
              {/* here is a green line */}
            </div>
            <p>At Shirakatdari.com, Investing in gold bars offers a tangible and secure way to own fractional units of this precious metal. We offer a variety of gold bar sizes, ranging from small bars to larger ones, allowing you to tailor your investment to your budget and goals.</p>
          </div>
          <div className=' p-10 '>
            <h1 className='lg:text-3xl text-3xl font-serif'>Gold Jewelry:</h1>
            <div className="w-40 h-1 bg-[#00ff0d] mt-5 mb-5">
              {/* here is a green line */}
            </div>
            <p>At Shirakatdari.com, convert your gold bars into stunning jewelry pieces. Our expert craftsmen will skillfully transform your valuable gold bars into exquisite and personalized jewelry designs. Experience the joy of wearing a unique piece of jewelry that holds both investment value and sentimental significance. With meticulous attention to detail, we will create a beautiful and timeless piece that reflects your personal style. Trust our craftsmanship and turn your gold bars into cherished jewelry that will be treasured for years to come.

              At Shirakatdari.com, we take pride in offering a seamless and personalized Gold to jewelry conversion service. Our dedicated team of experts will guide you through each step, ensuring that your vision is brought to life with precision and artistry. Experience the joy of wearing a unique piece of jewelry that holds both sentimental and investment value.</p>
          </div>

        </div>
        <div className='h-auto w-140 bg-[#162B18] border border-[#162B18]'>
          <div className=' p-10'>
            <h1 className='lg:text-3xl text-4xl font-serif text-[white]'>Buy Back</h1>
            <div className="w-40 h-1 bg-[#00ff0d] mt-5 mb-5">
              {/* here is a green line */}
            </div>
            <p className=' text-[white]'>At Shirakatdari.com, Investing in gold bars offers a tangible and secure way to own fractional units of this precious metal. We offer a variety of gold bar sizes, ranging from small bars to larger ones, allowing you to tailor your investment to your budget and goals.</p>
          </div>
          <div className=' p-10 '>
            <h1 className='lg:text-3xl text-4xl font-serif text-[white]'>Gold Jewelry:</h1>
            <div className="w-40 h-1 bg-[#00ff0d] mt-5 mb-5">
              {/* here is a green line */}
            </div>
            <p className=' text-[white]'>At Shirakatdari.com, convert your gold bars into stunning jewelry pieces. Our expert craftsmen will skillfully transform your valuable gold bars into exquisite and personalized jewelry designs. Experience the joy of wearing a unique piece of jewelry that holds both investment value and sentimental significance. With meticulous attention to detail, we will create a beautiful and timeless piece that reflects your personal style. Trust our craftsmanship and turn your gold bars into cherished jewelry that will be treasured for years to come.

              At Shirakatdari.com, we take pride in offering a seamless and personalized Gold to jewelry conversion service. Our dedicated team of experts will guide you through each step, ensuring that your vision is brought to life with precision and artistry. Experience the joy of wearing a unique piece of jewelry that holds both sentimental and investment value.</p>
          </div>
        </div>
      </section>

      <section className="w-full h-100 bg-cover bg-center bg-fixed flex justify-center items-center"
        style={{ backgroundImage: "url('/golden.jpg')" }}>
        <div className=' w-[90%] h-[90%] lg:w-[70%] lg:h-[80%] border border-[#00ff0d] bg-[#281801d2] flex justify-center items-center p-5'>
          <h1 className='lg:text-3xl text-4xl font-serif text-[white]'>
            NO MATTER HOW MUCH YOU INVEST, REST ASSURED WE ARE NOT WASTING YOUR MONEY ON SENSELESS FEES.</h1>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Services;