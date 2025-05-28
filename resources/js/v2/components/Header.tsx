

const links = [
    {
        name:"Home",
        url:"/",
        slug:"home"
    },
    {
        name:"About",
        url:"#about",
        slug:""
    },
    {
        name:"Services",
        url:"#services",
        slug:"services"
    },
    {
        name:"Events",
        url:"#events",
        slug:"events"
    },
    {
        name:"Contact Us",
        url:"#contact",
        slug:"contact-us"
    }
]

export default function Header(){
    return (
        <div className="bg-primary w-full">
            <div className="max-w-[1196px] mx-auto flex h-[136px] items-center px-4 gap-16">
                <a href="/" className="flex items-center">
                    <div className="">
                        <img src="/assets/logo-full.png"/>
                    </div>
                </a>
                <nav className="flex items-center">
                    {links.map(link => (
                        <a className="text-white lg:text-lg font-semibold block min-w-[156px] flex-1" href={link.url} key={link.slug}>{link.name}</a>
                    ))}
                </nav>
            </div>
        </div>
    )
}