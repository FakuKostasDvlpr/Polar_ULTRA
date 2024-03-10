"use client"
import { RevealWrapper } from 'next-reveal'

export default function Contacts() {
    return (
        
        <section id="contacto" class="headline bg-[#020617] border-dashed ">
                <div class="container px-6 py-12 mx-auto">
                    <div>
                        <p class="font-medium text-blue-500 dark:text-blue-400">Centro de contacto</p>

                        <h1 class="mt-2 text-5xl font-semibold text-white">Encontranos</h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-400"></p>
                    </div>

                    <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1 m-5">
                <RevealWrapper delay={300} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="left" reset={true} >
                            <div class="gap-2">
                                <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                                <h2 class="mt-4 text-xl font-medium text-white ">Email</h2>
                                <p class="mt-2 text-md font-bold text-blue-500 dark:text-blue-400">Pamelaximenacalicchio@gmail.com</p>
                            </div>
                            <div class="gap-2">
                                <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4B8AF1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                                        <path d="M11 4h2" />
                                        <path d="M12 17v.01" />
                                    </svg>
                                </span>
                                <h2 class="mt-4 text-xl font-medium text-white ">Telefono</h2>
                                <p class="mt-2 text-md font-bold text-gray-500 ">1122722249</p>
                            </div>

                            <div>
                                <span class="inline-block p-3 text-blue-400 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-hour-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7v5" /><path d="M12 12l2 -3" /></svg>
                                </span>

                                <h2 class="mt-4 text-xl font-medium text-white">Horarios de atencion</h2>
                                <p class="mt-2 text-md font-bold text-gray-500">09:00am / 17:00pm</p>
                            </div>

        </RevealWrapper>
                        </div>
                        <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-[60vh]">
                            <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Serrano 87 buenos aires argentina&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </section>

    );
}
