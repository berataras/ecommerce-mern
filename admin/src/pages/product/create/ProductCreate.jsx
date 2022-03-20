import "./productCreate.css"
import Layout from "../../layout/Layout";
import {CustomButton, CustomInput, CustomSelect, PageHeader} from "../../../components";

function ProductCreate() {
    const customSelectOptions = [
        {value: 'yes', text: 'Yes'},
        {value: 'no', text: 'No'}
    ];
    return (
        <Layout className="ProductsCreate">
            <PageHeader title="Create Product" buttonActive={false} />
                <form className="addProductForm">
                    <div className="addProductItem">
                        <label>Image</label>
                        <input type="file" id="file" />
                    </div>
                    <CustomInput label="Name" placeholder="Apple Airpods" />
                    <CustomInput label="Stock" placeholder="123" />

                    <CustomSelect options={customSelectOptions} label="Active" />

                    <CustomButton text="Create" />
                </form>
        </Layout>
    );
}

export default ProductCreate;