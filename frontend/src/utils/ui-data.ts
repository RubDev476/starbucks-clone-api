import type { MainSectionProps, AccordionItemProps } from "../types/components-props";

import { faFacebook, faInstagram, faYoutube, faPinterest, faSpotify, faXTwitter} from "@fortawesome/free-brands-svg-icons";

export const MAIN_SECTIONS: MainSectionProps[] = [
    {
        urlImg: "/main/sb.webp",
        alt: "A single Coffee bean centered on a green background.",
        title: "Small bean, big impact",
        description: "Here's to the farmers, roasters and baristas who work relentlessly to craft the perfect cup.",
        btnAction: "Explore their stories",
        typeSection: "main-1",
        reverse: false
    },
    {
        urlImg: "/main/one-coffee.jpg",
        alt: "Two bags of Coffee with colorful illustrations: one reads Milano Sole and the other reads Milano Luna.",
        title: "One Coffee. Two distinct roasts.",
        description: "Enjoy Starbucks® Milano Sole light roast with notes of vanilla custard and sweet pomegranate. Or Starbucks® Milano Luna dark roast with notes of dark chocolate truffle and black walnut.",
        btnAction: "Order now",
        typeSection: "main-2",
        reverse: true
    },
    {
        urlImg: "/main/treat-awaits.webp",
        alt: "Pumpkin Spice Latte surrounded by leaves on a checkered background",
        title: "Your treat awaits",
        description: "Fall in love with Starbucks® Rewards member perks, like a free drink with qualifying purchase during your first week. Valid for one-time use.*",
        btnAction: "Join now",
        typeSection: "main-1",
        reverse: false
    },
    {
        urlImg: "/main/find-all.webp",
        alt: "Three hot creamy drinks in mugs: one Coffee with whipped cream, one Coffee with froth and drizzle, and one tea with a frothy top.",
        title: "Find your fall",
        description: "Embrace fall in full flavor with a Pumpkin Spice Latte, Apple Crisp Oatmilk Macchiato or Chai Latte.",
        btnAction: "Order now",
        typeSection: "main-3",
        reverse: true
    },
    {
        urlImg: "/main/pecan-perfection.webp",
        alt: "A creamy hot Coffee drink with a frothy top in a glass mug next to an iced creamy Coffee drink with a foamy top in a tall glass.",
        title: "Pecan perfection",
        description: "Say hello to the nutty new nondairy Pecan Crunch Oatmilk Latte, your comforting companion for a crisp fall day.",
        btnAction: "Order now",
        typeSection: "main-3",
        reverse: false
    },
    {
        urlImg: "/main/apple.webp",
        alt: "A round, flaky pastry with a wavy texture on top set against a geometric pattern.",
        title: "Apple of autumn’s eye",
        description: "The only thing better than the return of the irresistible Baked Apple Croissant is that it’s here to stay.",
        btnAction: "Order now",
        typeSection: "main-4",
        reverse: true
    },
    {
        urlImg: "/main/pumpkin.jpg",
        alt: "A Starbucks gift card with the words, “Hey pumpkin” displayed with an illustrated Pumpkin Spice Latte next to a pumpkin.",
        title: "Because PSL is baaack",
        description: "Share the love of pumpkin spice with a Starbucks eGift.",
        btnAction: "Send an eGift",
        typeSection: "main-5",
        reverse: false
    },
]

export const ACCORDION_ITEMS: AccordionItemProps[] = [
    {
        btnTitle: 'About Us',
        links: [
            {
                href: '#',
                title: 'Our Company'
            },
            {
                href: '#',
                title: 'Our Coffee'
            },
            {
                href: '#',
                title: 'Stories and News'
            },
            {
                href: '#',
                title: 'Starbucks Archive'
            },
            {
                href: '#',
                title: 'Investor Relations'
            },
            {
                href: '#',
                title: 'Customer Service'
            },
            {
                href: '#',
                title: 'Contact Us'
            },
        ]
    },
    {
        btnTitle: 'Careers',
        links: [
            {
                href: '#',
                title: 'Culture and Values'
            },
            {
                href: '#',
                title: 'Inclusion, Diversity, and Equity'
            },
            {
                href: '#',
                title: 'College Achievement Plan'
            },
            {
                href: '#',
                title: 'Alumni Community'
            },
            {
                href: '#',
                title: 'U.S Careers'
            },
            {
                href: '#',
                title: 'International Careers'
            }       
        ]
    },
    {
        btnTitle: 'Social Impact',
        links: [
            {
                href: '#',
                title: 'People'
            },
            {
                href: '#',
                title: 'Planet'
            },
            {
                href: '#',
                title: 'Environmental and Social Impact Reporting'
            }  
        ]
    },
    {
        btnTitle: 'For Business Partners',
        links: [
            {
                href: '#',
                title: 'Landlord Support Center'
            },
            {
                href: '#',
                title: 'Suppliers'
            },
            {
                href: '#',
                title: 'Corporate Gift Card Sales'
            },
            {
                href: '#',
                title: 'Office and Foodservice Coffee'
            }    
        ]
    },
    {
        btnTitle: 'Order and Pick Up',
        links: [
            {
                href: '#',
                title: 'Order on the App'
            },
            {
                href: '#',
                title: 'Order on the Web'
            },
            {
                href: '#',
                title: 'Delivery'
            },
            {
                href: '#',
                title: 'Order and Pick Up Options'
            },
            {
                href: '#',
                title: 'Explore and Find Coffee for Home'
            }       
        ]
    }
]

export const SOCIAL_MEDIA_ICONS = [
    {
        label: 'spotify',
        icon: faSpotify
    },
    {
        label: 'facebook',
        icon: faFacebook
    },
    {
        label: 'pinterest',
        icon: faPinterest
    },
    {
        label: 'instagram',
        icon: faInstagram
    },
    {
        label: 'youtube',
        icon: faYoutube
    },
    {
        label: 'x-twitter',
        icon: faXTwitter
    },
]
