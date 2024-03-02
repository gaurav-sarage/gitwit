const { default: Link } = require("next/link")

const Features = () => {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div className="mx-auto max-w-lg text-center lg:mx-0">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Find projects based on your interests. 
                        </h2>
                        <p className="mt-4 text-black">
                            Lorem ipsem dolor sit amet consectur adipisicing elit. Lorem ipsem dolor sit amet consectur adipisicing elit.Lorem ipsem dolor sit amet consectur adipisicing elit.
                        </p>
                        <Link href="/" className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-black">
                            Get Started Today
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <Link href="/projects/web" className="block rounded-lg border p-4">
                            <h2 className="mt-2 font-bold">
                                Web Development
                            </h2>
                            <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                            </p>
                        </Link>
                        <Link href="/projects/app" className="block rounded-lg border p-4">
                            <h2 className="mt-2 font-bold">
                                App Development
                            </h2>
                            <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                            </p>
                        </Link>
                        <Link href="/projects/blockchain" className="block rounded-lg border p-4">
                            <h2 className="mt-2 font-bold">
                                Blockchain Development
                            </h2>
                            <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                            </p>
                        </Link>
                        <Link href="/projects/ai" className="block rounded-lg border p-4">
                            <h2 className="mt-2 font-bold">
                                Generative AI
                            </h2>
                            <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                            </p>
                        </Link>
                        <Link href="/cyber" className="block rounded-lg border p-4">
                            <h2 className="mt-2 font-bold">
                                Cybersecurity
                            </h2>
                            <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                            </p>
                        </Link>
                        <Link href="/projects/cloud" className="block rounded-lg border p-4">
                            <h2 className="mt-2 font-bold">
                                Cloud & DevOps
                            </h2>
                            <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                                Lorem ipsem dolor sit amet
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Features;