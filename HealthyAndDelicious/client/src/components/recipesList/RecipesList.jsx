import React from 'react';
import './RecipesList.scss';

const RecipesList = () => {
  return (
    <div className="containerDashboard">
      <div className="contentDashboardList">
        <div className="dashboardContent">
          <img
            className="dashboardImg"
            src="/bg.jpg"
            alt=""
          />
          <div className="dashboardInformation">
            <h3 className="dashboardInformationTitle">Title</h3>
            <p className="dashboardInformationDescription">
              Descriptionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <button className="dashboardButton">Whole Recipe</button>
        </div>
        <div className="dashboardContent">
          <img
            className="dashboardImg"
            src="/bg.jpg"
            alt=""
          />
          <div className="dashboardInformation">
            <h3 className="dashboardInformationTitle">Title</h3>
            <p className="dashboardInformationDescription">
              Descriptionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <button className="dashboardButton">Whole Recipe</button>
        </div>
        <div className="dashboardContent">
          <img
            className="dashboardImg"
            src="/bg.jpg"
            alt=""
          />
          <div className="dashboardInformation">
            <h3 className="dashboardInformationTitle">Title</h3>
            <p className="dashboardInformationDescription">
              Descriptionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <button className="dashboardButton">Whole Recipe</button>
        </div>
        <div className="dashboardContent">
          <img
            className="dashboardImg"
            src="/bg.jpg"
            alt=""
          />
          <div className="dashboardInformation">
            <h3 className="dashboardInformationTitle">Title</h3>
            <p className="dashboardInformationDescription">
              Descriptionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <button className="dashboardButton">Whole Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default RecipesList;
