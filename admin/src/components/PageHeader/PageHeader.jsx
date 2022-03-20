import "./pageHeader.css"
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

function PageHeader({title, buttonTitle, link, buttonActive}) {
    return (
        <div className="pageHeader">
            <h1 className="pageTitle">{title}</h1>
            {buttonActive &&
                <Link to={link}>
                    <button className="pageAddButton">{buttonTitle}</button>
                </Link>
            }
        </div>
    );
}

PageHeader.defaultProps = {
    buttonTitle: "Create",
    buttonActive: true
}

PageHeader.propTypes = {
    title: PropTypes.string,
    buttonTitle: PropTypes.string,
    link: PropTypes.string,
    buttonActive: PropTypes.bool
}

export default PageHeader;