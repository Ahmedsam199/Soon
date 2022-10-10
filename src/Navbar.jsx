import { SocialIcon } from "react-social-icons";
const Navbar = () => {
    return ( <>
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto px-auto p-5">
        {/* ICons */}
    <div className="flex flex-row items-center">
<SocialIcon url="https://www.facebook.com/profile.php?id=100028667796336" fgColor="gray" bgColor="transparent" />
<SocialIcon url="https://www.instagram.com/eq.a7/" fgColor="gray" bgColor="transparent"/>
<SocialIcon url="https://github.com/Ahmedsam199" fgColor="gray" bgColor="transparent"/>
    </div>
<div className="flex flex-row items-center cursor-pointer">
    <SocialIcon className="cursor-pointer" fgColor="gray" bgColor="transparent" network="email" />
    <p className="uppercase hidden md:inline-flex text-sm text-gray-500">Contact Me</p>
</div>

    </header>
    </> );
}
 
export default Navbar;