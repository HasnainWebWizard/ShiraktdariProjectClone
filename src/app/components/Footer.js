import Link from "next/link";
function Footer() {
    return (
        <>
        <section className="lg:p-10 bg-[#162b18]">
            <div className="text-white font-bold flex pt-10 pb-10 items-start list-none flex-wrap">
                <div className=" pb-10  pr-5 pl-10 lg:pl-15 w-110 h-auto">
                    <h1 className="text-3xl font-serif">Shirakatdari</h1>
                    <h1 className="font-medium pt-5">Our networks are managed from our London offices. Our live service is hosted in the cloud. </h1>
                    <div id="anchors" className=" w-30 pt-5 h-aut flex items-center justify-between">
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
                </div>
                <div className=" pb-10 pl-10 pr-5 w-100  lg:pl-20">
                    <li className="text-2xl font-medium ">Quick Links</li>
                    <li className="pt-5">Home</li>
                    <li className="pt-5">About Us</li>
                    <li className="pt-5">FAQs</li>
                    <li className="pt-5">Contact Us</li>
                </div>
                <div className=" pb-10 pr-10 w-100 pl-10 lg:pl-15">
                    <li className="text-2xl font-bold">Contact Us</li>
                    <li className="pt-5">
                        ✉ info@shirakatdari.com</li>
                    <li className="pt-5">
                        📞 +92 336 9737199</li>
                    <li className="pt-5">
                        🔴 Lahore, Pakistan</li>
                </div>
            </div>
        </section>
        <div className="bg-[#000000] text-white flex justify-center items-center text-center font-semibold p-2 flex-wrap">
        <div className="pt-2 pb-3 flex justify-center items-center">
            ©2024 Shirakatdari |
        </div>
        <div className="pt-2 pb-3 pl-1 text-[#e42f65] hover:text-[#2C3365] flex justify-center items-center">
            Powered by NexaForge Technologies
        </div>
    </div>
    </>

    );
} export default Footer;