import Image from "next/image";
import { RevealWrapper } from "next-reveal";
export default function MarcasBranding() {
    return (
        <>
<RevealWrapper delay={300} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="bottom" reset={true} >
        <div className="flex justify-center text-center items-center p-3">
            <p id="selling" className="text-white font-bold text-3xl underline">Marcas Lideres</p>
        </div>
        <div className="flex items-center justify-center">
            <div className="flex justify-center items-center bg-white transition-all rounded-xl cursor-pointer">
            <Image width={300} height={300} className="rounded-xl" src="/img/premium-tech.jpg" alt={"Marcas"} />
            </div>
        </div>
</RevealWrapper>
        </>
    );
}
