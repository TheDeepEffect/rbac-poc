import { Outlet } from "react-router-dom"

const SP=()=>{
    return <div className="SPList">
        List of Service Providers
        <div className="individualSp">
            <Outlet/>
        </div>
    </div>
}

export default SP;