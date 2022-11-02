import React from "react"
import Header from "./components/header/structure/index"
import Main from "./components/main/structure/index"
import Footer from "./components/footer/structure/index"
import GlobStyled from "./styled"

export default function App() {
    return (<> <GlobStyled/> < Header /> <Main/> < Footer /> </>)
}