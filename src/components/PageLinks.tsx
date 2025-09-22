import { pageLinks } from "../data";

type classParam = {
    ulClassName: string,
    aClassName: string
}

const PageLinks = ({ ulClassName, aClassName }: classParam) => {
    return (
        <ul className={ulClassName} id="nav-links">
            {pageLinks.map((link) => {
                const { id, href, text } = link
                return (
                    <li key={id}>
                        <a href={href} className={aClassName}>{text}</a>
                    </li>
                )
            })}

        </ul>
    )
}

export default PageLinks;