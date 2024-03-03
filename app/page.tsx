import { Polarizado } from "./components/Heros/Polarizados";
import { Service } from "./components/Heros/Service";
import { Header } from "./components/navbar/Header";
import { LampDemo } from "./components/ui/lamp";
import Contacts from "./components/Heros/Contact"

export default function Home() {
  return (
    <>
      <Header/>
      <LampDemo/>
      <Service/>
      <Polarizado/>
      <Contacts/>
      <div className = "group fixed bottom-0 right-0 p-10 flex items-end justify-end w-24 h-24 transition duration-300 ease-in-out hover:scale-110">
		<a href="https://api.whatsapp.com/send?phone=541170450396" target="_blank" className = "cursor-pointer text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-green-500 to-green-300 z-50 absolute  ">
			<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
		</a>
	</div>
    </>
  );
}
