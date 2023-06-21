import { useEffect, useRef, useState } from "react"
import NavElement from "./NavElement"

const Nav = ({ navList }: { navList: string[] }) => {


    const [props, setProps] = useState<Position>()

    const hoverElement: any = useRef(null) //!!IMPORTANTE ARREGLAR

    useEffect(() => moveBox(), [props])

    function hideBox() {
        hoverElement.current.style.opacity = 0
    }

    function moveBox() {
        hoverElement.current.style.opacity = 1
        hoverElement.current.style.left = props?.left + 'px'
        hoverElement.current.style.top = props?.top + 'px'
        hoverElement.current.style.width = props?.width + 'px'
        hoverElement.current.style.height = props?.height + 'px'
    }

    return (
        <ul className="flex justify-center text-white">
            <div ref={hoverElement} className='hover-box' />
            {navList.map((navLink: string, i: number) => {
                return (<NavElement key={i} to={navLink} setProps={setProps} hideBox={hideBox} />)
            })}
        </ul>
    )
}

export default Nav