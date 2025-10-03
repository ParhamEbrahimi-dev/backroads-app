
type pageLinkType = {
    href: string,
    aClassName: string,
    text: string
}

const PageLink = ({ href, aClassName, text }: pageLinkType) => {
    return (
        <li>
            <a href={href} className={aClassName}>{text}</a>
        </li>
    )
}

export default PageLink;