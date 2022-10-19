import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"

export default function App () {
    return (
        <div>
            <Info />
            <About />
            <Interests />
        </div>
    )
}