import Link from 'next/link';
import Footer from '@/app/components/Footer';
function Faqs() {
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
            <Link href="/pages/faqs" className='hover:text-[#00ff0d] text-[#00ff0d]'>FAQ's</Link>
            <Link href="/pages/how-to-pay" className='hover:text-[#00ff0d]'>How to Pay</Link>
            <Link href="/pages/contactus" className='hover:text-[#00ff0d]'>Contact Us</Link>
            <Link href="/pages/login" className='hover:text-[#00ff0d]'>Login</Link>
          </div>

        </section>
      </nav>
      <div className='flex flex-col justify-center items-center px-10 pt-10 pb-5 text-center'>
        <h1 className='lg:text-5xl text-5xl font-serif'>FAQs</h1>
        <div className="w-40 h-1 bg-amber-300 mt-5 mb-5">
          {/* here is a green line */}
        </div>
      </div>
      <ul id='faqs' className='py-10 px-10 lg:py-10 lg:px-38'>
       <li className=' mb-5'><h1 className='text-2xl font-sans font-semibold'>What is fractional gold ownership?</h1><br></br>
       <p>Fractional gold ownership allows you to invest in a fraction or share of a larger unit of gold. Instead of purchasing a whole gold bar or coin, you can buy a smaller portion, which gives you the benefits of owning gold without the need for a large capital outlay.</p>
       </li>

       <li className=' mb-5'><h1 className='text-2xl font-sans font-semibold'>How does fractional gold ownership work?</h1><br></br>
       <p>When you invest in fractional gold ownership, you purchase a specified fraction or percentage of a gold asset. The ownership is recorded electronically, and the value of your investment fluctuates based on the current market price of gold. You can track the performance of your investment through your personalized investor dashboard.</p>
       </li>

       <li className=' mb-5'><h1 className='text-2xl font-sans font-semibold'>How is the value of my fractional gold ownership calculated?</h1><br></br>
       <p>The value of your fractional gold ownership is calculated based on the current market price of gold and the fraction or percentage of the gold asset that you own. As the price of gold fluctuates, the value of your investment will correspondingly change.</p>
       </li>

       <li className=' mb-5'><h1 className='text-2xl font-sans font-semibold'>Can I take physical possession of the gold I invest in?</h1><br></br>
       <p>Shirakatdari.com primarily offers fractional ownership of gold for investment purposes. The physical gold is securely stored in trusted vaulting facilities. However, if you have specific requirements or larger investment holdings, please contact our customer support team to discuss possible options.</p>
       </li>

       <li className=' mb-5'><h1 className='text-2xl font-sans font-semibold'>Is my investment in fractional gold ownership secure?</h1><br></br>
       <p>At Shirakatdari.com, we prioritize the security and integrity of our investors’ assets. The gold is stored in trusted vaulting facilities with robust security measures in place. We also employ advanced encryption and authentication methods to protect your personal and financial information.</p>
       </li>

       <li className=' mb-5'><h1 className='text-2xl font-sans font-semibold'>What fees are associated with fractional gold ownership?</h1><br></br>
       <p>Shirakatdari.com charges a nominal fee for facilitating fractional gold ownership. The fee structure is transparent and will be clearly communicated during the investment process. Additionally, please note that there may be other fees associated with certain transactions, such as buying or selling gold shares, which will also be outlined before you confirm your transactions.</p>
       </li>
       
       <li className=' mb-5'><h1 className='text-2xl font-sans font-semibold'>How do I track the performance of my fractional gold ownership?</h1><br></br>
       <p>You can track the performance of your fractional gold ownership through your personalized investor dashboard on Shirakatdari.com. The dashboard provides real-time updates on the value of your holdings, historical performance data, and other relevant information to help you monitor your investment.</p>
       </li>

       <li className=' mb-5'><h1 className='text-2xl font-sans font-semibold'>What is the audit process for the gold held in custody?</h1><br></br>
       <p>To ensure transparency and accountability, we conduct regular audits of the gold held in custody. Independent auditors verify the existence and purity of the gold assets in our vaulting facilities. These audits help maintain the integrity of the fractional gold ownership program and provide assurance to our investors.</p>
       </li>

       <li className=' mb-5'><h1 className='text-2xl font-sans font-semibold'>Is fractional gold ownership a good investment?</h1><br></br>
       <p>Fractional gold ownership can be a valuable addition to an investment portfolio. Gold has a long history of maintaining its value and acting as a hedge against inflation and market volatility. However, as with any investment, it’s important to conduct your own research, assess your risk tolerance, and consult with a financial advisor to determine if fractional gold ownership aligns with your investment goals. </p>
       </li>

       <li className=' mb-5'><h1 className='text-2xl font-sans font-semibold'>Can I buy and sell fractional gold shares at any time?</h1><br></br>
       <p>Yes, you can buy and sell fractional gold shares at any time during our business hours 9:00 AM to 6:00 PM PK Time. Our platform provides you with the flexibility to manage your investments according to your needs and market conditions.</p>
       </li>
      </ul>
      <Footer />
    </>
  );
} export default Faqs;