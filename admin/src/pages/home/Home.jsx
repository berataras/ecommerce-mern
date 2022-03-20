import {FeaturedInfo, Chart, ListWidget} from '../../components'
import Layout from "../layout/Layout";
import {userData} from "../../api/dummyData";

//css
import './home.css'

export default function Home(props) {
    return (
        <Layout className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <ListWidget title="New Join Members" />
                <ListWidget title="New Join Admin" />
            </div>
        </Layout>
    );
}