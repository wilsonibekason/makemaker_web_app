// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
// import schemas
//import social from "./documents/social";
import testimonials from "./documents/testimonials";
import brand from "./documents/brand";
//import contact from './documents/contact';
import contact from "./documents/contact";
import workExperience from "./documents/workExperience";
import logo from "./documents/logo";
import header from "./documents/header";
import sections from "./documents/sections";
import sectionItem from "./documents/sectionItem";
import sectionContent from "./documents/sectionContent";
import aboutContent from "./documents/aboutContent";
import strengthContent from "./documents/strengthContent";
import inspirationContent from "./documents/inspirationContent";
import blockQuote from "./documents/blockQuote";
import ReachOut from "./documents/ReachOut";
import projectsSection from "./documents/projectsSection";
import homeBanner from "./documents/homeBanner";
import aboutHeader from "./about/AboutHeader";
import aboutSection from "./about/aboutSection";
import aboutTip from "./about/aboutTip";
import aboutTeamCard from "./about/aboutTeamCard";
import aboutTeam from "./about/aboutTeam";
import contactHeader from "./contact/contactHeader";
import contactContent from "./contact/contactContent";
import contactCard from "./contact/contactCard";
import contactMore from "./contact/contactMore";
import ad from "./ecommerce/ad";
import brands from "./ecommerce/brands";
import category from "./ecommerce/category";
import page from "./ecommerce/page";
import popup from "./ecommerce/popup";
import product from "./ecommerce/product";
import productVariant from "./ecommerce/productVariant";
import route from "./ecommerce/route";
import socials from "./ecommerce/socials";
import swag from "./ecommerce/swag";
import vendor from "./ecommerce/vendor";
import Text from "./locales/Text";
import String from "./locales/String";
import BlockContent from "./locales/BlockContent";
import blockContent from "./ecommerce/blockContent";
import bannerHome from "./ecommerce/bannerHome";
import productHeader from "./ecommerce/productHeader";
import reviews from "./ecommerce/reviews";
import author from "./blogs/author";
import blockContents from "./blogs/blockContents";
import post from "./blogs/post";
import categorys from "./blogs/categorys";
import blogComments from "./blogs/blogComments";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    //social,
    testimonials,
    brand,
    contact,
    workExperience,
    logo,
    header,
    sections,
    sectionItem,
    sectionContent,
    aboutContent,
    strengthContent,
    inspirationContent,
    //blockQuote,
    ReachOut,
    //projectsSection,
    homeBanner,
    aboutHeader,
    aboutSection,
    aboutTip,
    aboutTeamCard,
    aboutTeam,
    contactHeader,
    contactContent,
    contactCard,
    contactMore,
    bannerHome,
    //ad,
    //brands,
    category,
    //page,
    // popup,
    product,
    productVariant,
    // route,
    // socials,
    // swag,
    //vendor,
    // import for locales
    Text,
    String,
    BlockContent,
    blockContent,
    productHeader,
    reviews,
    author,
    blockContents,
    post,
    categorys,
    blogComments,
  ]),
});
