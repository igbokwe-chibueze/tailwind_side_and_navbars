import { about, contact, home } from "../assets/icons";

export const navLinks = [
    { 
        href: "#home", 
        label: "Home",
        imgURL: home
    },
    { 
        href: "#about-us", 
        label: "About Us", 
        imgURL: about },
    { 
        href: "#contact-us", 
        label: "Contact Us", 
        imgURL: contact },
];

export const navLinks2 = [
    { 
        href: "#home", 
        label: "Home",
        imgURL: home,
        anim: "translate-x-0"
    },
    { 
        href: "#about", 
        label: "About", 
        imgURL: about,
        anim: "translate-x-16"
    },
    { 
        href: "#contact", 
        label: "Contact", 
        imgURL: contact,
        anim: "translate-x-32"
    },
    { 
        href: "#photos", 
        label: "Photos", 
        imgURL: contact,
        anim: "translate-x-48"
    },
    { 
        href: "#settings", 
        label: "Settings", 
        imgURL: contact,
        anim: "translate-x-64"
    },
];