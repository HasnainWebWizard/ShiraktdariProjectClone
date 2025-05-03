import Link from 'next/link';
function Imgdiv() {
    return (
        <section className="w-full h-auto">
            <div className=" w-full h-full bg-[url('/coins_img.jpg')] bg-cover bg-center bg-fixed ">
                <div className="w-full h-full bg-[#00000080] flex justify-center items-center py-20">
                    <div className="w-[85%] h-[65%] bg-[#00000080] px-13 pt-10 pb-10 text-white text-center text-4xl border-2 border-[#00ff0d] flex flex-col justify-evenly items-center">
                    GROW YOUR PORTFOLIO BY USING GOLD AS A HEDGE AGAINST THE FROTHY MARKET.
                    <Link href={'/pages/login'}>
                    <button className="text-xl  font-bold font-sans border-3 w-50 h-auto px-2 py-3 border-[#00ff0d]">Create Account</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Imgdiv;