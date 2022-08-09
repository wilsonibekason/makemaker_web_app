// export const useStateContext = () => useContext(Context);
import { client, urlFor } from "../client";
import React, { useState, useContext, useEffect, createContext } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Context = createContext({});

export const HomeContext = ({ children }) => {
  const [header, setHeader] = useState([]);
  const [currentIndex, setCurrentIndex] = useState([]);
  const [sections, setSections] = useState([]);
  const [sectionContents, setSectionContents] = useState([]);
  const [aboutContents, setAboutContents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [strengthContent, setStrengthContent] = useState([]);
  const [scoreContent, setScoreContent] = useState([]);
  const [inspireContent, setInspireContent] = useState([]);
  const [reachOut, setReachOut] = useState([]);
  const [socialContent, setSocialContents] = useState([]);
  const [projectSection, setProjectSection] = useState([]);
  const navComponents = ["AboutUs", "Products", "Blogs"];
  // usestate for slider
  const [current, setCurrent] = useState(0);

  const Navcomponents = [
    {
      navItems: ["Home", "AboutUs", "Products", "Services", "ContactUs"],
      navLink: ["", "aboutus", "products", "services", "contactus"],
    },
  ];
  useEffect(() => {
    if (currentIndex.length > 0) {
      setCurrentIndex(currentIndex);
    } else {
      setCurrentIndex(0);
    }
    return () => {
      if (currentIndex.length > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(0);
      }
    };

    return () => {
      if (currentIndex.length > 0) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    };
  }, []);
  useEffect(() => {
    const aboutQuery = '*[_type == "aboutContent"]';
    try {
      client.fetch(aboutQuery).then((data) => setAboutContents(data));
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
    // quering for strengthContents
    const strengthQuery = '*[_type == "strengthContent"]';
    try {
      client.fetch(strengthQuery).then((data) => setStrengthContent(data));
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }

    /// define logic to integrate strengthSchema
    const inspireContentQuery = '*[_type == "inspirationContent"]';
    try {
      client.fetch(inspireContentQuery).then((data) => setInspireContent(data));
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
    // quering for reachOut
    const reachQuery = '*[_type == "reactOut"]';
    try {
      client.fetch(reachQuery).then((data) => setReachOut(data));
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
    // quering for social Contents
    const socialQuery = '*[_type == "social"]';
    try {
      client.fetch(socialQuery).then((data) => setSocialContents(data));
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
    // quering for projectSections Contents
    const projectSectionQuery = '*[_type == "banners"]';
    try {
      client.fetch(projectSectionQuery).then((data) => setProjectSection(data));
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
  }, []);
  const aboutTitle = aboutContents.map((item, index) => item?.title);
  const aboutDesc = aboutContents.map((item, index) => item?.description);
  const aboutImageUrl = aboutContents[0];
  const aboutTitleIcon = aboutContents.map((item, index) => item?.icons);

  const strengthTitle = strengthContent.map((item, index) => item?.title);
  const strengthDesc = strengthContent.map((item, index) => item?.description);
  const strengthHREF = strengthContent[0]?.linkUrl?.map((item, index) => item);

  const strengthDescription = strengthContent[0]?.description;
  const strengthImage = strengthContent[0]?.strengthIcons?.map(
    (strItem, index) => urlFor(strItem?.logoImage)
  );
  //urlFor(strItem?.logoImage)
  const strengthImageCheck = strengthContent[0]?.strengthIcons;
  const strengthTopic = strengthContent[0]?.strengthItem?.map(
    (item, index) => item
  );
  const strengthTitleIcon = strengthContent.map((item, index) => item?.icons);

  // destructure inspireContent items as global variables
  const inspireContentTitle = inspireContent?.map((item) => item?.inspireTitle);
  const inspireContentDesc = inspireContent?.map((item) => item?.description);
  const inspireContentImage = inspireContent?.map((item) =>
    urlFor(item?.inspireImage)
  );

  // destruting reachoutContent items as global variables
  const reachTitle = reachOut?.map((item) => item?.title);
  const reachDesc = reachOut?.map((item) => item?.description);
  const reachImg = reachOut?.map((item) => urlFor(item?.image));

  // destructuring socialContents items as Globsl variables
  const socialTitle = socialContent?.map((item) => item?.title);
  const socialDesc = socialContent?.map((item) => item?.description);
  const socialName = socialContent?.map((item) => item?.socialName);
  const socialLink = socialContent?.map((item) => item?.socialLink);
  /// destructuring projectSectionQuery items as Global variables
  const productSecTitle = projectSection?.map((item) => item?.pageName);
  const productSecDesc = projectSection?.map((item) => item?.desc);
  const productSecImage = projectSection?.map((item) => urlFor(item?.image));
  const ImageSecTitle = projectSection?.map((item) => item?.productNmae);

  const length = header.length;
  // image carousel slide
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Context.Provider
      value={{
        header,
        setHeader,
        currentIndex,
        setCurrentIndex,
        navComponents,
        sections,
        setSections,
        sectionContents,
        setSectionContents,
        aboutContents,
        setAboutContents,
        aboutDesc,
        aboutTitle,
        aboutImageUrl,
        aboutTitleIcon,
        strengthContent,
        strengthTitle,
        strengthDesc,
        strengthHREF,
        strengthTitleIcon,
        strengthImage,
        strengthTopic,
        strengthImageCheck,
        inspireContentImage,
        inspireContentDesc,
        inspireContentTitle,
        reachImg,
        reachTitle,
        reachDesc,
        socialContent,
        socialTitle,
        socialDesc,
        socialLink,
        socialName,
        productSecTitle,
        productSecDesc,
        productSecImage,
        ImageSecTitle,
        Navcomponents,
        length,
        nextSlide,
        prevSlide,
        current,
        BiLeftArrow,
        BiRightArrow,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

//export default Context();
