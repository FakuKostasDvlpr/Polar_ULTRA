import "../../globals.css"
export default function ObrasTipo() {
    return (
        <>
           <div className="headline mb-14 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-row flex gap-[3rem] mt-10 flex-wrap justify-center items-center ">
            <div
                className="rounded-xl flex flex-col cursor-pointer group relative overflow-hidden card px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store" width="34" height="34" viewBox="0 0 24 24" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" /><path d="M5 21l0 -10.15" /><path d="M19 21l0 -10.15" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /></svg>
                    </span>
                    <p className="items-center text-center font-bold text-white mt-10">Locales</p>
                    <div
                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        
                    </div>
                </div>
            </div>
            <div
                className="rounded-xl cursor-pointer group relative overflow-hidden card px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-door" width="34" height="34" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 12v.01" /><path d="M3 21h18" /><path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" /></svg>
                    </span>
                    <p className="items-center text-center font-bold text-white mt-10">Vidrios</p>

                    <div className="pt-5 text-base font-semibold leading-7">
                    </div>
                </div>
            </div>
            <div
                className="rounded-xl cursor-pointer group relative overflow-hidden card px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chalkboard" width="34" height="34" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1" /><path d="M11 16m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
                    </span>
                    <p className="items-center text-center font-bold text-white mt-10">Vidrieras</p>
                    <div className="pt-5 text-base font-semibold leading-7">
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}