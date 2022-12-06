import { useParams } from "react-router-dom";

const AdminSettings=()=>{
    const{adminType}=useParams();

    if(adminType==="sp"){
            return <div className="adminSettings">
            Service Providers Admins Settings Page
        </div>

    }else if(adminType==="org"){
            return <div className="adminSettings">
            Organization Admins Settings Page
        </div>

    }
    return <div className="adminSettings">
    Something went wrong!
</div>
}
export default AdminSettings;