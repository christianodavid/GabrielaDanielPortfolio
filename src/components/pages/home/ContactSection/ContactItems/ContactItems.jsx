import styles from "./ContactItems.module.css";
import MenuLink from "../../../../ui/MenuLink/MenuLink";

const ContactItems = ({ data }) => {
  return (
    <div className={styles.contact_item__container}>
      <MenuLink href={data.link} target="_blank">
        <img
          className={styles.contact_item__image}
          src={`svg/${data.icon}.svg`}
          alt={data.heading}
        />
      </MenuLink>
      <MenuLink href={data.link} target="_blank">
        {data.heading}
      </MenuLink>
      <MenuLink href={data.link} target="_blank">
        {data.subheading}
      </MenuLink>
    </div>
  );
};

export default ContactItems;
