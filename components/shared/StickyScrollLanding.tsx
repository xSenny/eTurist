import {StickyScroll} from "@/components/ui/sticky-scroll-reveal";

const content = [
    {
        title: "Conectează-ți Afacerea",
        description:
            " Descoperă o platformă integrată, simplu de folosit, care îți oferă posibilitatea de a-ți promova afacerea locală și de a atrage o audiență diversificată de turiști. Amplifică prezența ta în turism și consolidează legătura cu comunitatea în doar câteva clicuri!",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-bold text-xl">
                Conectează-ți Afacerea
            </div>
        ),
    },
    {
        title: "Atrage Turisti cu Ușurință",
        description:
            "Simplifică promovarea atracțiilor turistice locale. Prezintă-ți cu mândrie punctele de interes și atrage vizitatori din întreaga lume, oferindu-le o experiență autentică și memorabilă.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-bold text-xl">
                Atrage Turisti cu Ușurință
            </div>
        ),
    },
    {
        title: "Administrează Reputația cu Încredere",
        description:
            "Gestionează reputația afacerii tale cu ușurință și profesionalism. Prin intermediul platformei noastre, poți monitoriza recenziile, interacționa cu clienții și construi o reputație solidă în comunitatea turistică, consolidând încrederea în brandul tău.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-bold text-xl">
                Administrează Reputația cu Încredere
            </div>
        ),
    },
    {
        title: "Susține Afacerile Locale",
        description:
            "Suntem dedicați sprijinirii companiilor mici. Oferim instrumente eficiente pentru promovarea afacerilor locale, contribuind astfel la creșterea economică și dezvoltarea durabilă a comunității.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-bold text-xl">
                Susține Afacerile Locale
            </div>
        ),
    },
    {
        title: "Creează Experiențe Memorabile",
        description:
            "Cu ajutorul nostru, transformă călătoriile în experiențe unice și autentice. Descoperă, conectează-te și amplifică Moldova, aducând magia turismului în fiecare colț al țării, și creând amintiri de neuitat pentru vizitatorii tăi!",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white font-bold text-xl" >
                Creează Experiențe Memorabile
            </div>
        ),
    },
    {
        title: "",
        description:
            "",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">

            </div>
        ),
    },
    {
        title: "",
        description:
            "",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">

            </div>
        ),
    },
];

const StickyScrollLanding = () => {


    return (
        <StickyScroll content={content}/>
    )
}

export default StickyScrollLanding;