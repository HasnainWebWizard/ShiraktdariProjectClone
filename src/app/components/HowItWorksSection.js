import Link from 'next/link';
function HowItWorksSection() {
    return (
        <section className="flex flex-col justify-center items-center flex-wrap">
            <div className=" flex flex-col justify-center items-center flex-wrap">
                <h1 className="text-3xl font-[600] font-serif pt-15">How it works</h1>
                <div className="w-40 h-1 bg-[#00ff0d] mt-5">
                    {/* here is a blue line */}
                </div>
            </div>
      <div className=" h-auto flex justify-center items-center flex-wrap ">
                <div className="border-2 border-[#00ff0d] px-10 py-10 flex flex-col justify-center items-center
                rounded  mt-5 mb-3 mx-1">
                    <div>
                    <span className="material-symbols-outlined text-[#01d40b]">
                        contacts
                    </span>
                    </div>
                    <h1 className="text-2xl font-serif font-[300] flex flex-wrap">Create an Account</h1>
                </div>
          

          
                <div className="border-2 border-[#00ff0d] px-10 py-10 flex flex-col justify-center items-center
                rounded  mt-5 mb-3  mx-1">
                    <div>
                    <span className="material-symbols-outlined text-[#01d40b]">
                        contacts
                    </span>
                    </div>
                    <h1 className="text-2xl font-serif font-[300] flex flex-wrap">Create an Account</h1>
                </div>
          
                <div className="border-2 border-[#00ff0d] px-10 py-10 flex flex-col justify-center items-center
                rounded  mt-5 mb-3  mx-1">
                    <div>
                    <span className="material-symbols-outlined text-[#01d40b]">
                        contacts
                    </span>
                    </div>
                    <h1 className="text-2xl font-serif font-[300] flex flex-wrap">Create an Account</h1>
                </div>
            </div>
            <Link href={'/pages/login'}>
            <button className="text-xl font-[600] font-sans px-6 py-2 rounded bg-[#01d40b] hover:bg-[#00ff0d] text-white mt-5 mb-15">Create Account</button></Link>
        </section>
    );
}
export default HowItWorksSection;