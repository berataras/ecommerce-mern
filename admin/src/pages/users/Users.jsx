import './users.css'
import Layout from "../layout/Layout";
import {PageHeader, Table} from "../../components";

function Users() {
    return (
        <Layout>
            <PageHeader title="Users" link="/users/create" />
            <Table />
        </Layout>
    );
}

export default Users;