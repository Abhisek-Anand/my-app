import React from 'react';
import { Card } from '../Card/Card';
import { Footer } from '../Footer/Footer';
import { HeaderText } from '../HeaderText/HeaderText';
import { Image } from '../Image/Image';
import { SearchHeader } from '../SearchHeader/SearchHeader';
import './page.css';

type User = {
  name: string;
};

export const Page: React.VFC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <div className="page">
      <section>
        <div className="headerSection">
          <HeaderText primary label="Flight Booking System" />
          <Image height="50rem" width="50rem" />
        </div>
        <hr/>
        <SearchHeader/>
        <HeaderText label="Search Results:" size="medium" />
        <div className="flight-search-widget">
          <Card flightCompany="Indigo" source="Goa" destination="Pune" />
          <Card flightCompany="Vistara" source="Goa" destination="Pune" />
          <Card flightCompany="Air India" source="Goa" destination="Pune" />
        </div>
        <Footer footerText="@2022 Copyright:" linkText="www.primary.link" link="www.primary.link" />
      </section>
    </div>
  );
};
