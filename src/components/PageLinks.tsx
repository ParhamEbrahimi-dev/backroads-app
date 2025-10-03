import { pageLinks } from "../data";
import PageLink from "./PageLink";

type classParam = {
    ulClassName: string,
    aClassName: string
}

const PageLinks = ({ ulClassName, aClassName }: classParam) => {
    return (
        <ul className={ulClassName} id="nav-links">
            {pageLinks.map((link) => {
                return <PageLink key={link.id} {...link} aClassName={aClassName} />
            })}

        </ul>
    )
}

export default PageLinks;