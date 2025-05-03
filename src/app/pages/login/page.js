import Link from 'next/link';
import Footer from '../../components/Footer';
function Login() {
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
            <Link href="/pages/contactus" className='hover:text-[#00ff0d]'>Contact Us</Link>
            <Link href="/pages/login" className='hover:text-[#00ff0d] text-[#00ff0d]'>Login</Link>
          </div>

        </section>
      </nav>

      <section className="w-[100%] h-150 bg-[#E0E0E0] mt-1 flex justify-center items-center ">
        <form className='bg-white sm:w-[95%] lg:w-[40%] h-120 rounded-2xl  p-10 flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-serif text-center mb-5'>Login</h1>
          <div className='font-[600] text-[#6e6a6a] mt-5 '>Username or E-mail <br />
            <input type='mail' required className='sm:w-[90%] lg:w-[480px] h-10 rounded border border-[#cecece] hover:border-[#acacac] font-[520] text-[#595555] pl-2'></input>
          </div>
          <div className='font-[600] text-[#6e6a6a] mt-5'>Password <br />
            <input type='password' required className='sm:w-[90%] lg:w-[480px] h-10 rounded border border-[#cecece] hover:border-[#acacac] font-[520] text-[#595555] pl-2'></input>
          </div>
          <div id='radio' className='flex items-center sm:w-[100%] my-5'>
            <input type="checkbox" className="transition-normal appearance-none w-5 h-5 border-2 border-[#00ff0d] rounded-none checked:bg-[#01d40b] relative " />
            <p className='pl-5 text-[#8b8585] '>Keep me signed in</p>
          </div>
          <div id='btns' className='w-[100%] h-15 flex justify-between items-center'>
            <button className='w-[46%] h-12 bg-[#162B18]  hover:bg-[#01d40b] text-white rounded-md flex justify-center items-center'>Login</button>
            <button className='w-[47%] h-12 bg-[#EEEEEE] hover:bg-[#e6e5e5] text-[#595555] rounded-md flex justify-center items-center shadow hover:shadow'>Sign Up</button>
          </div>
          <Link href={'./forgetpassword'}>
            <p className='text-[#8b8585] mt-5 '>Forgot your password?</p>
          </Link>

        </form>
      </section>
      <Footer />
    </div>
  );
} export default Login;