import React from 'react'
import { getAvailableNewsYears } from '@/lib/news'

export default function ArchivePage() {

    const links = getAvailableNewsYears();

    return (

        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link}>
                            <a href={`/archive/${link}`}>{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
