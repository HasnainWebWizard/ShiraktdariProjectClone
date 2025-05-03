import Link from 'next/link';
function Hero() {
    return (
        <section className="mt-1 w-full h-180 lg:h-auto bg-gradient-to-r from-[#162b18] to-[#214e24] flex justify-center items-center flex-wrap">
            <div id="hero_p1" className="w-[500px] h-auto p-9 lg:relative lg:-left-8 m-1 flex flex-col">
                <h1 className="text-5xl text-white font-medium font-serif">Shirakatdari</h1>
                <div className="w-20 h-1 bg-[#00ff0d] mt-5">
                    {/* here is a blue line */}
                </div>
                <span className="text-2xl font-medium text-white py-5"> Welcome to Shirakatdari.com – Fractional Gold Ownership Made Easy</span>
                <Link href='/'>
                <button className="w-40 h-12 mt-5 mb-5 bg-[#162b18] text-lg font-bold text-white
                    border-3 rounded-sm border-[#00ff0d]">Get Started</button> </Link>
            </div>
            <div id="hero_p2" className="lg:w-[550px] lg:h-[500px] h-[120px] flex justify-center items-center">
                <img src="/img-gold.jpg" alt="img-gold" className="object-contain w-[350px] lg:w-[550px] h-auto mb-20 px-5 py-10 relative lg:top-10" />
            </div>
        </section>
    );
} export default Hero;