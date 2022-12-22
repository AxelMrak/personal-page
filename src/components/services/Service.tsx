import { FC } from "react";
import { useTranslation } from "react-i18next";
import '../../styles/homepage/services/service.css';

interface Props {
	name: string;
  description: string;
  img: string;
	tech: Array<any>;
}
/**
 * ? Component unit of service who is rendered in Services container component
 * @param Name: Name's service, Description: Description's service, Img: Image's service
 * @returns Service unit component
 */
const Service: FC<Props> = ({ name, description, img, tech }) => {

	const { t } = useTranslation("globals");

	return (
		<div className="service-unit-container">
			<h3>{ name }</h3>
      <img src={ img } alt={ name } width='100' height='100'/>
      <p>{ description }</p>
			<div className="service-unit-tech">
				<h4>{ t("services-section.techs") }</h4>
				{
					tech.map( img => 
						<img src={ img.img } alt={ `Techs of ${name}` } width='80'/>
						)
				}
			</div>
		</div>
	);
}

export default Service;
