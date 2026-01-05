import Helmet from "react-helmet";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const MetaData = ({ title, description, image, keywords }) => {
    const location = useLocation();
    const defaultDescription = "Rixon is a leading software company and software agency in the UK and USA, delivering innovative digital solutions for over six years. We specialize in custom software development, AI-driven applications, web development, mobile apps, and e-commerce platforms. Trusted software agency serving clients across the UK, USA, and globally.";
    const defaultKeywords = "software company, software agency, software development company, custom software development, software agency UK, software company USA, web development, app development, AI applications, e-commerce, digital solutions, UI/UX design, tech agency, software solutions";
    const defaultImage = "/logo.png";
    const siteUrl = "https://www.rixon.agency";
    
    // Build full URL with current path
    const currentPath = location.pathname === '/' ? '' : location.pathname;
    const fullUrl = `${siteUrl}${currentPath}`;
    
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const metaImage = image || defaultImage;
    const fullImageUrl = metaImage.startsWith('http') ? metaImage : `${siteUrl}${metaImage}`;
    const pageTitle = title === "Home" ? "Rixon - Leading Software Company & Software Agency | UK & USA" : `${title} | Rixon`;

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={fullImageUrl} />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={fullImageUrl} />
            
            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Rixon" />
            <link rel="canonical" href={fullUrl} />
        </Helmet>
    );
};

MetaData.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.string,
};

export default MetaData;