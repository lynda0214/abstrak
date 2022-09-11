import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Header
import HeaderOne from './common/header/HeaderOne';
import HeaderTwo from './common/header/HeaderTwo';
import HeaderThree from './common/header/HeaderThree';
import HeaderFour from './common/header/HeaderFour';
import SplashHeader from './common/header/SplashHeader';
import StickyHeader from './common/header/StickyHeader';

// About
import AboutOne from './component/about/AboutOne';
import AboutTwo from './component/about/AboutTwo';
import AboutThree from './component/about/AboutThree';
import AboutFour from './component/about/AboutFour';
import AboutFive from './component/about/AboutFive';

// Banner
import BannerOne from './component/banner/BannerOne';
import BannerTwo from './component/banner/BannerTwo';
import BannerThree from './component/banner/BannerThree';
import BannerFour from './component/banner/BannerFour';
import BannerFive from './component/banner/BannerFive';
import SplashBanner from './component/banner/SplashBanner';

// Blog
import BlogData from './data/blog/BlogData.json';
import BlogAuthor from './component/blog/BlogAuthor';
import BlogGridOne from './component/blog/BlogGridOne';
import BlogGridTwo from './component/blog/BlogGridTwo';
import BlogListOne from './component/blog/BlogListOne';
import BlogOne from './component/blog/BlogOne';
import BlogSidebar from './component/blog/BlogSidebar';
import Comment from './component/blog/Comment';

// Brand
import BrandItem from './component/brand/BrandItem';
import BrandOne from './component/brand/BrandOne';

// Case Study
import CaseStudyProp from './component/casestudy/CaseStudyProp';

// Contacts
import ContactLocation from './component/contact/ContactLocation';
import FormOne from './component/contact/FormOne';
import FormTwo from './component/contact/FormTwo';
import FormThree from './component/contact/FormThree';

// Counter Up
import CounterUp from './component/counterup/CounterUp';
import CounterUpOne from './component/counterup/CounterUpOne';
import CounterUpTwo from './component/counterup/CounterUpTwo';

// CTA
import CtaLayoutOne from './component/cta/CtaLayoutOne';
import SplashCta from './component/cta/SplashCta';

// FAQ
import FaqOne from './component/faq/FaqOne';

// Pricing
import PricingOne from "./component/pricing/PricingOne";

// Process
import ProcessOne from './component/process/ProcessOne';

// Project
import ProjectOne from './component/project/ProjectOne';
import ProjectTwo from './component/project/ProjectTwo';
import ProjectThree from './component/project/ProjectThree';
import ProjectFour from './component/project/ProjectFour';
import ProjectFive from './component/project/ProjectFive';

// Service
import ServiceData from './data/service/ServiceMain.json';
import ServiceProp from './component/service/ServiceProp';
import ServicePropOne from './component/service/ServicePropOne';

// Team
import TeamOne from './component/team/TeamOne';

// Testimonial
import TestimonialData from "./data/testimonial/TestimonialData.json";
import TestimonialOne from './component/testimonial/TestimonialOne';
import TestimonialTwo from './component/testimonial/TestimonialTwo';
import TestimonialPropOne from './component/testimonial/TestimonialPropOne';
import TestimonialPropTwo from './component/testimonial/TestimonialPropTwo';

// Video
import VideoOne from './component/video/VideoOne';
import VideoTwo from './component/video/VideoTwo';

// Why Choose
import WhyChooseOne from './component/whychoose/WhyChooseOne';

// Footer
import FooterOne from './common/footer/FooterOne';
import FooterTwo from './common/footer/FooterTwo';
import SplashFooter from './common/footer/SplashFooter';

// Css Import
import './assets/scss/app.scss';

const Separater = ({ title }) => <div
  style={{ background: 'tomato', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{title}</div>;
const allBlogData = BlogData;
const getBlogData = allBlogData.filter(blog => blog.id === 1);
const detailsBlog = getBlogData[0];

const Showcase = () => {
  return (
    <Router>
      <main className="main-wrapper">
        {/* Header */}
        <Separater title="<StickyHeader>"/>
        <StickyHeader/>
        <Separater title="<HeaderOne>"/>
        <HeaderOne/>
        <Separater title="<HeaderTwo>"/>
        <HeaderTwo/>
        <Separater title="<HeaderThree>"/>
        <HeaderThree/>
        <Separater title="<HeaderFour>"/>
        <HeaderFour/>
        <Separater title="<SplashHeader>"/>
        <SplashHeader/>
        {/* About */}
        <Separater title="<AboutOne>"/>
        <AboutOne/>
        <Separater title="<AboutTwo>"/>
        <AboutTwo/>
        <Separater title="<AboutThree>"/>
        <AboutThree/>
        <Separater title="<AboutFour>"/>
        <AboutFour/>
        <Separater title="<AboutFive>"/>
        <AboutFive/>

        {/* Banner */}
        <Separater title="<BannerOne>"/>
        <BannerOne/>
        <Separater title="<BannerTwo>"/>
        <BannerTwo/>
        <Separater title="<BannerThree>"/>
        <BannerThree/>
        <Separater title="<BannerFour>"/>
        <BannerFour/>
        <Separater title="<BannerFive>"/>
        <BannerFive/>
        <Separater title="<SplashBanner>"/>
        <SplashBanner/>

        {/* Blog */}
        <Separater title="<BlogAuthor>"/>
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                <BlogAuthor data={detailsBlog}/>
              </div>
            </div>
          </div>
        </div>
        <Separater title="<BlogGridOne>"/>
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                <BlogGridOne/>
              </div>
            </div>
          </div>
        </div>
        <Separater title="<BlogGridTwo>"/>
        <div className="section-padding-equal">
          <div className="container">
            <div className="row">
              <BlogGridTwo data={getBlogData} colSize="col-lg-4"/>
            </div>
          </div>
        </div>
        <Separater title="<BlogListOne>"/>
        <BlogListOne/>
        <Separater title="<BlogOne>"/>
        <BlogOne/>
        <Separater title="<BlogSidebar>"/>
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-4">
                <BlogSidebar/>
              </div>
            </div>
          </div>
        </div>
        <Separater title="<Comment>"/>
        <Comment/>

        {/* Brand */}
        <Separater title="<BrandItem>"/>
        <div className="row">
          <BrandItem/>
        </div>
        <Separater title="<BrandOne>"/>
        <BrandOne/>

        {/* Case Study */}
        <Separater title="<CaseStudyProp>"/>
        <CaseStudyProp/>

        {/* Contact */}
        <Separater title="<ContactLocation>"/>
        <div className="row">
          <ContactLocation/>
        </div>
        <Separater title="<FormOne>"/>
        <div className="col-xl-5 col-lg-6 offset-xl-1">
          <div className="contact-form-box shadow-box mb--30">
            <h3 className="title">Get a free Keystroke quote now</h3>
            <FormOne/>
          </div>
        </div>
        <Separater title="<FormTwo>"/>
        <div className="col-xl-5 col-lg-6">
          <div className="contact-form-box shadow-box mb--30">
            <h3 className="title">Get a free Abstrak quote now</h3>
            <FormTwo/>
          </div>
        </div>
        <Separater title="<FormThree>"/>
        <div className="col-lg-6">
          <div className="contact-form-box mb--30">
            <h3 className="title">Describe your project</h3>
            <FormThree/>
          </div>
        </div>

        {/* Counter Up */}
        <Separater title="<CounterUp>"/>
        <div className="row">
          <CounterUp colSize="col-sm-6" layoutStyle="counterup-style-2" evenTopMargin=""/>
        </div>
        <Separater title="<CounterUpOne>"/>
        <CounterUpOne/>
        <Separater title="<CounterUpTwo>"/>
        <CounterUpTwo/>

        {/* CTA */}
        <Separater title="<CtaLayoutOne>"/>
        <CtaLayoutOne/>
        <Separater title="<SplashCta>"/>
        <SplashCta/>

        {/* FAQ */}
        <Separater title="<FaqOne>"/>
        <FaqOne/>
        {/* Pricing */}
        <Separater title="<PricingOne>"/>
        <PricingOne/>
        {/* Process */}
        <Separater title="<ProcessOne>"/>
        <ProcessOne/>
        {/* Project */}
        <Separater title="<ProjectOne>"/>
        <ProjectOne/>
        <Separater title="<ProjectTwo>"/>
        <ProjectTwo/>
        <Separater title="<ProjectThree>"/>
        <ProjectThree/>
        <Separater title="<ProjectFour>"/>
        <ProjectFour/>
        <Separater title="<ProjectFive>"/>
        <ProjectFive/>
        {/* Service */}
        <Separater title="<ServiceProp>"/>
        <div className="row">
          <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={ServiceData}/>
        </div>
        <Separater title="<ServicePropOne>"/>
        <div className="row">
          <ServicePropOne colSize="col-lg-4" serviceStyle="service-style-2" itemShow="3" marginTop="yes"/>
        </div>
        {/* Team */}
        <Separater title="<TeamOne>"/>
        <TeamOne/>
        {/* Testimonial */}
        <Separater title="<TestimonialOne>"/>
        <TestimonialOne/>
        <Separater title="<TestimonialTwo>"/>
        <TestimonialTwo/>
        <Separater title="<TestimonialPropOne>"/>
        <div className="row">
          <TestimonialPropOne colSize="col-lg-4" itemShow="3"/>
        </div>
        <Separater title="<TestimonialPropTwo>"/>
        <div className="row">
          <TestimonialPropTwo colSize="col-lg-4" itemShow="3" testimonialData={TestimonialData}/>
        </div>
        {/* Video */}
        <Separater title="<VideoOne>"/>
        <VideoOne/>
        <Separater title="<VideoTwo>"/>
        <VideoTwo/>
        {/* Why Choose */}
        <Separater title="<WhyChooseOne>"/>
        <WhyChooseOne/>
        {/* Footer */}
        <Separater title="<FooterOne>"/>
        <FooterOne/>
        <Separater title="<FooterTwo>"/>
        <FooterTwo/>
        <Separater title="<SplashFooter>"/>
        <SplashFooter/>
      </main>
    </Router>
  );
}

export default Showcase;
