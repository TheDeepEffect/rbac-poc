import { Outlet } from "react-router-dom"

const Org=()=>{
    return <div>
        List of Orgs
        <div className="singleOrg">
            <Outlet/>
        </div>
    </div>
}

export default Org;