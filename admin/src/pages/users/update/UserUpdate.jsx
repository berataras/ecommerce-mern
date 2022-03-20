import "./userUpate.css"
import {UserShowWidget, UserUpdateWidget} from "./components";
import {Link} from 'react-router-dom';
import Layout from "../../layout/Layout";
import {PageHeader} from "../../../components";

function UserUpdate(props) {
    return (
        <Layout className="user">
            <PageHeader title="Edit User" link="/users/create" />
            <div className="userContainer">
                <UserShowWidget />
                <UserUpdateWidget />
            </div>
        </Layout>
    );
}

export default UserUpdate;