import React from 'react';
import ContentCard from './component/ContentCard';
import ContentHeader from './component/ContentHeader';
import ContentMenu from './component/ContentMenu';
import ContentSearch from './component/ContentSearch';
import style from './Content.module.scss';

const Content = () => {
  return (
    <div>
      <ContentHeader />

      <ContentSearch />

      <ContentMenu />

      <ContentCard />
    </div>
  );
};

export default Content;
