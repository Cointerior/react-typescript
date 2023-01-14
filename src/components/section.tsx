import { ReactNode } from "react"

type SectionProps = {
    title?: any,
    children: ReactNode
}

const Section = ({ children, title = "Hi Slim" }: SectionProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    )
}

export default Section