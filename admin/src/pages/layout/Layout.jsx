import "./layout.css"
import {Close, Menu} from "@mui/icons-material";
import {useContext} from "react";
import {Context} from "../../context/Context";

function Layout({children, className}) {
    const {value, setValue} = useContext(Context);

    function clickHandler(status){
        setValue(status)
    }
    return (
        <div className={`layout ${className}`}>
            {children}

            {value === 'active' ?
                <Close onClick={() => clickHandler('')} className="sidebarOpenButton" /> :
                <Menu onClick={() => clickHandler('active')} className="sidebarOpenButton" />
            }
        </div>
    );
}

export default Layout;