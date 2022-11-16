import React, { useState,useEffect } from "react";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import "./styles.scss";


import { filterOptions, portfolioData } from "./utils";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilter] = useState(1);

 
  const searchProjct = (title) => {
   setFilter(title)
    setSearchTerm("");
  };

  const filterSearchData = searchTerm === ""?portfolioData : portfolioData.filter((item) => item.projectName === filterValue);

 
  
  console.log(filterSearchData)

 
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />

      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          <div className="portfolio__content__cards__search">
            <input
              placeholder="Search for project"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => searchProjct(searchTerm)}><BiSearch style={{color: " var(--selected-theme-main-color)"}} size={40} /></button>
          </div>
          
          <div className="portfolio__content__cards__container">
              {filterSearchData.map((item, key) => (
              <div key={`filter2${key}`}><ProjectCard project={item} /></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
