import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/homepage/jobs/jobUnit.css';

interface Props {
  img: string,
  name: string,
  url: string
};

/**
 * ? Component unit of Job
 * @param img: Image's job or project, name: Name's job or project, url: URL to website
 * @returns Component unit of job
 */
const Job: FC<Props> =  ({ img, name, url }) => {

  const { t } = useTranslation("globals");

  return (
    <div className='job-unit-container'>
      <img src={ img } width='300' height='250' alt={name}/>
      <h3>{ name }</h3>
      <a href={ url } target='_blank'> { t("jobs-section.job-btn") } </a>
    </div>
  )
};

export default Job;