import './content.style.scss';

import TitleAndDescr from '../title-and-descr/title-and-descr.component';
import ImgMain from '../img-main/img-main.component';

const Context = () => {
  return (
    <section className="context">
      <TitleAndDescr/>
      <ImgMain/>
    </section>
  );
};

export default Context;