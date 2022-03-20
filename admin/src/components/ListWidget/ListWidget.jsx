import "./listWidget.css"
import {Visibility} from "@mui/icons-material";

function ListWidget({title}) {
    return (
        <div className="listWidget">
            <span className="widgetTitle">{title}</span>
            <ul className="widgetList">

                <li className="widgetListItem">
                    <img src="https://images.pexels.com/photos/9991246/pexels-photo-9991246.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetImage"/>
                    <div className="widgetUser">
                        <span className="widgetUserName">Anna Lora</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetButton">
                        <Visibility className="widgetIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetListItem">
                    <img src="https://images.pexels.com/photos/9991246/pexels-photo-9991246.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetImage"/>
                    <div className="widgetUser">
                        <span className="widgetUserName">Anna Lora</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetButton">
                        <Visibility className="widgetIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetListItem">
                    <img src="https://images.pexels.com/photos/9991246/pexels-photo-9991246.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetImage"/>
                    <div className="widgetUser">
                        <span className="widgetUserName">Anna Lora</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetButton">
                        <Visibility className="widgetIcon" />
                        Display
                    </button>
                </li>

            </ul>
        </div>
    );
}

export default ListWidget;