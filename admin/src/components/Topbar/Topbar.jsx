import './topbar.css'
import {NotificationsNoneOutlined, SettingsOutlined} from '@mui/icons-material';

function Topbar(props) {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">react | admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarItem">
                        <NotificationsNoneOutlined />
                        <div className="topIconBag">2</div>
                    </div>
                    <div className="topbarItem">
                        <SettingsOutlined />
                    </div>
                    <div className="topbarItem">
                        <img src="https://images.pexels.com/photos/9024609/pexels-photo-9024609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="avatar" className="topAvatar"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;