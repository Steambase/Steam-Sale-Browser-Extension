import React from "react"

import "@fontsource/inter"
import "../styles.css"

const PageLayout = ({ children }) => {
    return (
        <div className="w-screen h-screen bg-slate-950">
            <div className="relative flex flex-col">
                <div className="container relative">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    )
}

export default PageLayout;
