import './menu-link.styles.scss';

const MenuLink = ({ icon, label, url }) => {
  return (
    <div className="menu-link">
      <div className="icon">
        {icon}
      </div>
      <a className="label" href = {url}>
        {label}
      </a>
    </div>
  );
};

export default MenuLink;