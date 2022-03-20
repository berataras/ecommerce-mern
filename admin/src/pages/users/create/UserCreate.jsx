import "./userCreate.css"
import Layout from "../../layout/Layout";
import {PageHeader, CustomInput, CustomSelect, CustomRadio, CustomButton} from "../../../components";

function UserCreate() {
    const customSelectOptions = [
        {value: 'yes', text: 'Yes'},
        {value: 'no', text: 'No'},
    ];
    return (
        <Layout className="createUser">
            <PageHeader title="New User" buttonActive={false} />
            <form className="createUserForm">
                <CustomInput label="Username" placeholder="john" />
                <CustomInput label="Full Name" placeholder="John Walker" />
                <CustomInput label="Email" placeholder="john@gmail.com" type="email" />
                <CustomInput label="Password" placeholder="****" type="password" />
                <CustomInput label="Phone" placeholder="+1 123 456 78" />
                <CustomInput label="Address" placeholder="New York | USA" />

                <div className="createUserFormItem">
                    <CustomRadio name="gender" id="male" label="male" />
                    <CustomRadio name="gender" id="males" label="males" />
                </div>

                <CustomSelect label="Active" options={customSelectOptions} />
                <CustomButton text="Create" />
            </form>
        </Layout>
    );
}

export default UserCreate;