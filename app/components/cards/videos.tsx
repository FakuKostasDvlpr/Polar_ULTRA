export default function Videos() {
    return (
        <>
            <div className="headline container flex justify-center items-center mx-auto gap-20 flex-wrap">
                <div className="flex justify-center m-4 gap-6">
                    <div className="rounded-lg shadow-lg bg-white max-w-md">
                        <a href="#!">
                            <video width="120" height="140" autoPlay muted className="object-cover object-center w-[70vw] h-[50vh] rounded-lg">
                                <source src="https://polar-ops.vercel.app/obras1.mp4" type="video/mp4" />
                            </video>
                        </a>
                    </div>
                    <div className="rounded-lg shadow-lg bg-white max-w-md">
                        <a href="#!">
                            <video width="80" height="90" autoPlay muted className="object-cover object-center w-[70vw] h-[50vh] rounded-lg">
                                <source src="https://polar-ops.vercel.app/obras3.mp4" type="video/mp4" />
                            </video>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
