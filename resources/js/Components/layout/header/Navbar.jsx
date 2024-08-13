import { Link } from "@inertiajs/react";
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";

export function NavbarPage() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand>
                <Link href="/">
                    {/* <img
                    src="/favicon.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite React Logo"
                /> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Arfenaz
                    </span>
                </Link>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                {/* <NavbarLink>
                    <Link href="/about">About</Link>
                </NavbarLink> */}
                {/* <NavbarLink href="#">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink> */}
                <NavbarLink>
                    <Link href="/contact">Contact</Link>
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
