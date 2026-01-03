import Helmet from "react-helmet";
import PropTypes from 'prop-types';

const MetaData = ({ title, description, image }) => {
    const defaultDescription = "For over six years, Rixon has been delivering innovative digital solutions with creativity, precision, and excellence. We specialize in AI-driven applications, sophisticated e-commerce platforms, and custom web and mobile solutions. Our comprehensive end-to-end service spans design, development, automation, and deployment, with successful collaborations across the UK, USA, Gulf regions, Australia, Canada, France, and Italy.";
    const defaultImage = "/logo.png";
    const siteUrl = "https://www.rixon.agency";
    
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;
    const fullImageUrl = metaImage.startsWith('http') ? metaImage : `${siteUrl}${metaImage}`;
    const pageTitle = title === "Home" ? "Rixon - Innovative Digital Solutions & Tech Agency" : `${title} | Rixon`;

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content="web development, app development, AI applications, e-commerce, digital solutions, UI/UX design, custom software, tech agency" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={fullImageUrl} />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={fullImageUrl} />
            
            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Rixon" />
            <link rel="canonical" href={siteUrl} />
        </Helmet>
    );
};

MetaData.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
};

export default MetaData;