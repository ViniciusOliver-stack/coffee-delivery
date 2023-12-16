import { ReactNode } from "react"

interface BenefitsProps {
    title: string
    color: string
    icon: ReactNode
}

export function Benefits({title, icon, color}: BenefitsProps) {
    return(
        <>
            <li className="flex items-center gap-3">
                <div className={`${color} p-2 rounded-full bg-yellow-dark`}>
                    {icon}
                </div>
                <p>{title}</p>
            </li>
        </>
    )
}