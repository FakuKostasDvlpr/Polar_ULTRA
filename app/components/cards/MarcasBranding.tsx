import Image from "next/image";
export default function MarcasBranding() {
    return (
        <>
        <div className="flex justify-center text-center items-center p-3">
            <p id="selling" className="text-white font-bold text-3xl underline">Marcas Lideres</p>
        </div>
        <div className="flex items-center justify-center">
            <div className="flex justify-center items-center bg-white transition-all rounded-xl cursor-pointer">
            <Image width={300} height={300} className="rounded-xl" src="/img/premium-tech.jpg" alt={"Marcas"} />
            </div>
        </div>
        </>
    );
}
