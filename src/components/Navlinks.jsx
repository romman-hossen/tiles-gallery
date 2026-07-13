import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = ({href,children}) => {
    const pathname = usePathname()
    const isActive = pathname === href;
    return (
       <Link className={`${isActive ? ' text-primary' : ''}`} href={href}>{children}</Link>
    );
};

export default Navlinks;