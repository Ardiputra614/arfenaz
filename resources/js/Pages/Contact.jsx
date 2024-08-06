import HomeLayout from "@/Components/layout/HomeLayout";
import { Head } from "@inertiajs/react";

const Contact = ({ title }) => {
    return (
        <>
            <Head title={title} />
            <HomeLayout>
                <section className="pb-7 relative block bg-white">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{ height: "80px" }}
                    >
                        {/* <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg> */}
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold ">
                                    Kontak kami
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                                    Pemesanan website hubungi kami sini!
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-28 h-28 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fa fa-whatsapp text-5xl"></i>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold">
                                    whatsapp
                                </h6>
                                <p className="mt-2 mb-4 text-gray-500">
                                    <a href="https://wa.me/6287864705663">
                                        (+62) 878-6470-5663
                                    </a>
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-28 h-28 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fa fa-envelope text-5xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold">
                                    Email
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    <a href="mailto:arfenaz@gmail.com">
                                        arfenaz@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-28 h-28 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fa fa-map text-5xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold">
                                    Lokasi
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Kalikabong, Purbalingga, Jawa Tengah,
                                    Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </HomeLayout>
        </>
    );
};

export default Contact;
