import Link from 'next/link';
import Footer from '@/app/components/Footer';
function AboutUs() {
  return (
    <>
      {/* <h1>This is About Us page</h1> */}
      <nav className="w-full h-auto flex items-center justify-center text-white shadow-[2px_2px_0px_2px_#00ff0d] bg-[#162b18]">
        <section className='flex flex-wrap items-center justify-between w-[90%] lg:w-[80%] px-5 py-3'>

          {/* Logo */}
          <div id="logo" className="font-serif text-3xl font-extrabold">
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
              <Link href="/pages/aboutus" className='block py-1 hover:text-[#00ff0d] text-[#00ff0d]'>About Us</Link>
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
              <Link href="/" className="flex items-center text-[#00ff0d]">
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
            <Link href="/pages/contactus" className='hover:text-[#00ff0d]'>Contact Us</Link>
            <Link href="/pages/login" className='hover:text-[#00ff0d]'>Login</Link>
          </div>

        </section>
      </nav>
      <section id='content'>
        <div className='flex flex-col lg:px-40 px-9 pt-10 pb-10 text-left m-1'>
          <h1 className='lg:text-5xl text-4xl font-serif font-medium'>About US</h1>
          <div className="w-40 h-1 bg-[#00ff0d] mt-5 mb-5">
            {/* here is a green line */}
          </div>
          <p>At Sherakatdari.com, we believe that gold ownership should be accessible to everyone. We are a leading platform that offers fractional gold ownership, empowering individuals to invest in this timeless asset without the need to purchase a full bar. Our mission is to provide a convenient, transparent, and secure way for investors to participate in the gold market and diversify their investment portfolios.</p>
        </div>

        <div className='flex flex-col lg:px-40 px-9 pb-10 text-left m-1'>
          <h1 className='lg:text-4xl text-3xl font-serif font-medium mb-5'>Our Vision</h1>
          <p>Our vision is to revolutionize the way people invest in gold, making it simpler, more affordable, and inclusive. We aim to democratize gold ownership, ensuring that individuals from all walks of life can benefit from the stability and value that gold has to offer. </p>
        </div>

        <div className='flex flex-col lg:px-40 px-9 pb-10 text-left m-1'>
          <h1 className='lg:text-4xl text-3xl font-serif font-medium mb-5'>Our Commitment</h1>
          <ul className='list-none'>
            <li className='mb-5'><b>Transparency and Trust: </b>We are committed to maintaining the highest level of transparency and trust in our operations. Our platform provides comprehensive information about the gold products available for fractional ownership, ensuring that our investors have a clear understanding of their investments.</li>

            <li className='mb-5'><b>Security and Integrity: </b>We prioritize the security and integrity of our investors’ assets. We par className='mb-5'tner with trusted vaulting providers to securely store the gold holdings, implementing robust security mea className='mb-5'sures to safeguard our investors’ interests.</li>

            <li className='mb-5'><b>Exceptional User Experience: </b>We strive to deliver an exceptional user experience through our int className='mb-5'uitive platform, user-friendly interface, and personalized investor dashboard. Our aim is to make the inv className='mb-5'estment process seamless, informative, and enjoyable for our valued investors.</li>

            <li className='mb-5'><b>Expert Support: </b>Our dedicated customer support team is available to assist our investors every step of the way. We are committed to providing timely and knowledgeable support, answering inquiries, and ensuring a smooth investing experience.</li>
          </ul>
        </div>

        <div className='flex flex-col lg:px-40 px-9 pb-10 text-left m-1'>
          <h1 className='lg:text-4xl text-3xl font-serif font-medium mb-5'>Our Offerings</h1>
          <p>At Sherakatdari.com, we offer a wide range of gold products for fractional ownership. Investors can choose from various forms of gold, including bars, coins, and jewelry, allowing for diversification and flexibility in their investment portfolios. We provide detailed information about each product, including weight, purity, and market value, enabling our investors to make informed investment decisions. <br></br><br></br>

            Join us at Sherakatdari.com and unlock the world of fractional gold ownership. Whether you are a seasoned investor looking to diversify your portfolio or a newcomer interested in exploring the potential of gold, we are here to guide you on your investment journey. Start investing in gold today and become a part of this enduring asset class that has stood the test of time. </p>
        </div>
      </section>
      <Footer />
    </>


  );
} export default AboutUs;