import HomeLayout from "@/Components/layout/HomeLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

const Home = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    // console.log(form);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/sendemail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            alert("Email sent successfully");
        } else {
            alert("Failed to send email");
        }
    };

    return (
        <HomeLayout title="Arfenaz Jasa Pembuatan website Purbalingga Indonesia">
            <Head title="Arfenaz | Jasa Pembuatan website Purbalingga Indonesia" />
            <Hero />
            <Services />
            <Featured />
            {/* <Team /> */}
            <Finisher />
            {/* <Contact
        form={form}
        setForm={setForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      /> */}
            <ContactUs />
        </HomeLayout>
    );
};

/// Page Sections
const Hero = () => (
    <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
            minHeight: "75vh",
        }}
    >
        <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
        >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-black"
            ></span>
        </div>
        <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                        <h1 className="text-white font-semibold text-5xl">
                            Arfenaz
                        </h1>
                        <p
                            data-aos="zoom-out-right"
                            className="mt-4 text-lg text-gray-300"
                        >
                            Arfenaz adalah perusahaan perangkat lunak yang
                            berjalan di bidang website. Dimana berbagai layanan
                            berbasis website disediakan sesuai keingin pelanggan
                            dengan simpel, menarik dan modern
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
        >
            <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
                <polygon
                    className="text-gray-300 fill-current"
                    points="2560 0 2560 100 0 100"
                ></polygon>
            </svg>
        </div>
    </div>
);

const Services = () => (
    <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="transition-transform duration-300 transform hover:scale-105 hover:bg-red-600 hover:text-white relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                            <div className="hover: text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                                    />
                                </svg>
                            </div>
                            <h6 className="text-xl font-semibold">
                                Rangka Kerja
                            </h6>
                            <p className="mt-2 mb-4">
                                Kami memiliki tim profesional yang siap
                                mengerjakan projek sesuai keinginan pelanggan,
                                riset, desain, coding, & testing
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="transition-transform duration-300 transform hover:scale-105 hover:bg-red-600 hover:text-white relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </div>
                            <h6 className="text-xl font-semibold">
                                Gratis revisi
                            </h6>
                            <p className="mt-2 mb-4">
                                Kami memberikan 2 kali revisi gratis kepada
                                pelanggan yang minta adanya perubahan entah
                                fitur ataupun desain.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="transition-transform duration-300 transform hover:scale-105 hover:bg-red-600 hover:text-white relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                                    />
                                </svg>
                            </div>
                            <h6 className="text-xl font-semibold">Solusi</h6>
                            <p className="mt-2 mb-4">
                                Memberikan solusi terbaik atas pertanyaan anda
                                tentang projek yang dikerjakan sesuai keinginan
                                anda
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                        <svg
                            data-aos="zoom-out-right"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                            />
                        </svg>
                    </div>
                    <div
                        data-aos="zoom-out-right"
                        className="text-3xl mb-2 font-semibold leading-normal"
                    >
                        Bekerja dengan hati
                    </div>
                    <div
                        data-aos="zoom-out-right"
                        className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
                    >
                        Kami memiliki tim profesional yang bekerja dengan
                        sepenuh hati supaya hasil maksimal dan sesuai keinginan
                        anda. Berbagai pengalaman yang kami punya siap
                        memberikan terbaik dan bisa bersaing dengan yang lain.
                    </div>
                    <div
                        data-aos="zoom-out-right"
                        className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
                    >
                        <b className="font-bold">
                            <i>Team work, Professional & Perfect</i>
                        </b>{" "}
                        adalah moto kami yang selalu diterapkan dalam pengerjaan
                        sebuah projek yang ada. 2 tahun lebih kami hadir sebagai
                        salah satu penyedia layanan pembuatan website terbaik di
                        Kabupaten Purbalinga. Dengan segala koneksi, karya, ilmu
                        dan pengalaman yang kami punya siap memberikan yang
                        terbaik untuk anda
                    </div>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                        <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                            className="w-full align-middle rounded-t-lg"
                        />
                        <blockquote className="relative p-8 mb-4">
                            <svg
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 583 95"
                                className="absolute left-0 w-full block"
                                style={{
                                    height: "95px",
                                    top: "-94px",
                                }}
                            >
                                <polygon
                                    points="-30,95 583,95 583,65"
                                    className="text-pink-600 fill-current"
                                ></polygon>
                            </svg>
                            <h4 className="text-xl font-bold text-white">
                                Layanan terbaik
                            </h4>
                            <p className="text-md font-light mt-2 text-white">
                                Karya terbaik selalu hadir dengan berbagai
                                inovasi masa kini yang tentu terbaik. Mari
                                bergabung bersama kami!
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Featured = () => (
    <section className="relative py-20">
        <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
        >
            <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
                <polygon
                    className="text-white fill-current"
                    points="2560 0 2560 100 0 100"
                ></polygon>
            </svg>
        </div>

        <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img
                        alt="..."
                        className="max-w-full rounded-lg shadow-lg"
                        src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                        <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                                />
                            </svg>
                        </div>
                        <div
                            data-aos="fade-out-right"
                            className="text-3xl font-semibold"
                        >
                            Perkembangan Perusahaan
                        </div>
                        <div data-aos="fade-out-right">
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                Kami memiliki banyak tujuan dan mimpi yang
                                sedang kami tuju yaitu memberikan kemudahan bagi
                                masyarakat lewat layanan website yang kami
                                sediakan dan bisa bersaing di kancah nasional
                                ataupun global.
                            </p>
                        </div>
                        <ul className="list-none mt-6">
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <i className="fas fa-fingerprint"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-600">
                                            Desain terbaik dan menarik
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <i className="fab fa-html5"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-600">
                                            Teknologi yang lebih modern
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <i className="far fa-paper-plane"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-600">
                                            Kemudahan akses
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <i className="far fa-paper-plane"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-600">
                                            Harga terjangkau
                                        </h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Team = () => (
    <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold">
                        Here are our heroes
                    </h2>
                    <p className="text-lg leading-relaxed m-4 text-gray-600">
                        According to the National Oceanic and Atmospheric
                        Administration, Ted, Scambos, NSIDClead scentist, puts
                        the potentially record maximum.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                        <img
                            alt="..."
                            src={"../assets/img/team-1-800x800.jpg"}
                            className="shadow-lg rounded-full max-w-full mx-auto"
                            style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold">Ryan Tompson</h5>
                            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                Web Developer
                            </p>
                            <div className="mt-6">
                                <button
                                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button
                                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button
                                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-dribbble"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                        <img
                            alt="..."
                            src={"../assets/img/team-2-800x800.jpg"}
                            className="shadow-lg rounded-full max-w-full mx-auto"
                            style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold">Romina Hadid</h5>
                            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                Marketing Specialist
                            </p>
                            <div className="mt-6">
                                <button
                                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-google"></i>
                                </button>
                                <button
                                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                        <img
                            alt="..."
                            src={"../assets/img/team-3-800x800.jpg"}
                            className="shadow-lg rounded-full max-w-full mx-auto"
                            style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold">Alexa Smith</h5>
                            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                UI/UX Designer
                            </p>
                            <div className="mt-6">
                                <button
                                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-google"></i>
                                </button>
                                <button
                                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button
                                    className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-instagram"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                        <img
                            alt="..."
                            src={"../assets/img/team-4-470x470.png"}
                            className="shadow-lg rounded-full max-w-full mx-auto"
                            style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold">Jenna Kardi</h5>
                            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                Founder and CEO
                            </p>
                            <div className="mt-6">
                                <button
                                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-dribbble"></i>
                                </button>
                                <button
                                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-google"></i>
                                </button>
                                <button
                                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button
                                    className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                >
                                    <i className="fab fa-instagram"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Finisher = () => (
    <section className="relative block bg-gray-900">
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

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-24">
            <div className="flex flex-wrap text-center justify-center">
                <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold text-white">
                        Bangun sesuatu dengan kami
                    </h2>
                    <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                        Kami siap hadirkan karya-karya terbaik dan modern sesuai
                        perkembangan zaman saat ini
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                            />
                        </svg>
                    </div>
                    <h6 className="text-xl mt-5 font-semibold text-white">
                        Layanan tidak biasa
                    </h6>
                    <p className="mt-2 mb-4 text-gray-500">
                        Desain simpel, menarik dan modern dengan fitur terbaik
                    </p>
                </div>
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                            />
                        </svg>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                        Kembangkan pasar Anda
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                        Membantu anda memperluas jaringan internet dan
                        kembangkan pasar anda bersama kami
                    </p>
                </div>
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                        Waktu peluncuran
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                        Peluncuran yang sesuai dengan waktu yang ditentukan
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const Contact = ({ form, setForm, handleSubmit, handleChange }) => (
    <section className="relative block py-24 lg:pt-0 bg-gray-900">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                        <div className="flex-auto p-5 lg:p-10">
                            <h4 className="text-2xl font-semibold">
                                Want to work with us?
                            </h4>
                            <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                Complete this form and we will get back to you
                                in 24 hours.
                            </p>
                            <div className="relative w-full mb-3 mt-8">
                                <label
                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="full-name"
                                >
                                    Full Name
                                </label>
                                <input
                                    value={form.name}
                                    onChange={handleChange}
                                    name="name"
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Full Name"
                                    style={{ transition: "all .15s ease" }}
                                />
                            </div>

                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    name="email"
                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Email"
                                    style={{ transition: "all .15s ease" }}
                                />
                            </div>

                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    value={form.message}
                                    onChange={handleChange}
                                    name="message"
                                    rows={4}
                                    cols={80}
                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Type a message..."
                                />
                            </div>
                            <div className="text-center mt-6">
                                <button
                                    onClick={handleSubmit}
                                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ContactUs = () => {
    return (
        <>
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
                                Kalikabong, Purbalingga, Jawa Tengah, Indonesia
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
