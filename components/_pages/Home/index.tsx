import React from "react";

import BlogCard from "../../_ui/BlogCard";
import styles from "./styles.module.scss";
import image1 from "../../../assets/image/img1.jpg";
import image2 from "../../../assets/image/img2.jpg";
import image3 from "../../../assets/image/img3.jpg";
import image4 from "../../../assets/image/img4.jpg";
import image5 from "../../../assets/image/img5.jpg";
import image6 from "../../../assets/image/img6.jpg";
import image7 from "../../../assets/image/img7.png";
import avatar from "../../../assets/image/testimonial-2.jpg";

export const blogList = [
  {
    id: "1",
    image: image1,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    avatar: avatar,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus nec pretium mi.\nCurabitur facilisis ornare velit non.",
    content:
      "Engineers previously rolled the rocket back to the Vehicle Assembly Building (VAB) Sept. 26 ahead of Hurricane Ian and after waving off two previous launch attempts Aug.\n 29 due to a faulty temperature sensor, and Sept. 4 due to a liquid hydrogen leak at an interface between the rocket and mobile launcher.\n Prior to rolling back to the VAB, teams successfully repaired the leak and demonstrated updated tanking procedures. While in the VAB, teams performed standard maintenanceto repair minor damage to the foam and cork on the thermal protection system and recharge or replace batteries throughout the system.\n A limited number of seats inside the auditorium will be available during briefings to previously credentialed on-site journalists on a first-come, first-served basis.\n The deadline has passed for media accreditation for in-person coverage of this launch.",
  },
  {
    id: "2",
    image: image2,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    className: "desktop:col-span-2",
    avatar: avatar,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus nec pretium mi.\nCurabitur facilisis ornare velit non.",
    content:
      "Engineers previously rolled the rocket back to the Vehicle Assembly Building (VAB) Sept. 26 ahead of Hurricane Ian and after waving off two previous launch attempts Aug.\n 29 due to a faulty temperature sensor, and Sept. 4 due to a liquid hydrogen leak at an interface between the rocket and mobile launcher.\n Prior to rolling back to the VAB, teams successfully repaired the leak and demonstrated updated tanking procedures. While in the VAB, teams performed standard maintenanceto repair minor damage to the foam and cork on the thermal protection system and recharge or replace batteries throughout the system.\n A limited number of seats inside the auditorium will be available during briefings to previously credentialed on-site journalists on a first-come, first-served basis.\n The deadline has passed for media accreditation for in-person coverage of this launch.",
  },
  {
    id: "3",
    image: image3,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    avatar: avatar,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus nec pretium mi.\nCurabitur facilisis ornare velit non.",
    content:
      "Engineers previously rolled the rocket back to the Vehicle Assembly Building (VAB) Sept. 26 ahead of Hurricane Ian and after waving off two previous launch attempts Aug.\n 29 due to a faulty temperature sensor, and Sept. 4 due to a liquid hydrogen leak at an interface between the rocket and mobile launcher.\n Prior to rolling back to the VAB, teams successfully repaired the leak and demonstrated updated tanking procedures. While in the VAB, teams performed standard maintenanceto repair minor damage to the foam and cork on the thermal protection system and recharge or replace batteries throughout the system.\n A limited number of seats inside the auditorium will be available during briefings to previously credentialed on-site journalists on a first-come, first-served basis.\n The deadline has passed for media accreditation for in-person coverage of this launch.",
  },
  {
    id: "4",
    image: image4,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    avatar: avatar,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus nec pretium mi.\nCurabitur facilisis ornare velit non.",
    content:
      "Engineers previously rolled the rocket back to the Vehicle Assembly Building (VAB) Sept. 26 ahead of Hurricane Ian and after waving off two previous launch attempts Aug.\n 29 due to a faulty temperature sensor, and Sept. 4 due to a liquid hydrogen leak at an interface between the rocket and mobile launcher.\n Prior to rolling back to the VAB, teams successfully repaired the leak and demonstrated updated tanking procedures. While in the VAB, teams performed standard maintenanceto repair minor damage to the foam and cork on the thermal protection system and recharge or replace batteries throughout the system.\n A limited number of seats inside the auditorium will be available during briefings to previously credentialed on-site journalists on a first-come, first-served basis.\n The deadline has passed for media accreditation for in-person coverage of this launch.",
  },
  {
    id: "5",
    image: image5,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    avatar: avatar,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus nec pretium mi.\nCurabitur facilisis ornare velit non.",
    content:
      "Engineers previously rolled the rocket back to the Vehicle Assembly Building (VAB) Sept. 26 ahead of Hurricane Ian and after waving off two previous launch attempts Aug.\n 29 due to a faulty temperature sensor, and Sept. 4 due to a liquid hydrogen leak at an interface between the rocket and mobile launcher.\n Prior to rolling back to the VAB, teams successfully repaired the leak and demonstrated updated tanking procedures. While in the VAB, teams performed standard maintenanceto repair minor damage to the foam and cork on the thermal protection system and recharge or replace batteries throughout the system.\n A limited number of seats inside the auditorium will be available during briefings to previously credentialed on-site journalists on a first-come, first-served basis.\n The deadline has passed for media accreditation for in-person coverage of this launch.",
  },
  {
    id: "6",
    image: image6,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    avatar: avatar,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus nec pretium mi.\nCurabitur facilisis ornare velit non.",
    content:
      "Engineers previously rolled the rocket back to the Vehicle Assembly Building (VAB) Sept. 26 ahead of Hurricane Ian and after waving off two previous launch attempts Aug.\n 29 due to a faulty temperature sensor, and Sept. 4 due to a liquid hydrogen leak at an interface between the rocket and mobile launcher.\n Prior to rolling back to the VAB, teams successfully repaired the leak and demonstrated updated tanking procedures. While in the VAB, teams performed standard maintenanceto repair minor damage to the foam and cork on the thermal protection system and recharge or replace batteries throughout the system.\n A limited number of seats inside the auditorium will be available during briefings to previously credentialed on-site journalists on a first-come, first-served basis.\n The deadline has passed for media accreditation for in-person coverage of this launch.",
  },
  {
    id: "7",
    image: image7,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    avatar: avatar,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus nec pretium mi.\nCurabitur facilisis ornare velit non.",
    content:
      "Engineers previously rolled the rocket back to the Vehicle Assembly Building (VAB) Sept. 26 ahead of Hurricane Ian and after waving off two previous launch attempts Aug.\n 29 due to a faulty temperature sensor, and Sept. 4 due to a liquid hydrogen leak at an interface between the rocket and mobile launcher.\n Prior to rolling back to the VAB, teams successfully repaired the leak and demonstrated updated tanking procedures. While in the VAB, teams performed standard maintenanceto repair minor damage to the foam and cork on the thermal protection system and recharge or replace batteries throughout the system.\n A limited number of seats inside the auditorium will be available during briefings to previously credentialed on-site journalists on a first-come, first-served basis.\n The deadline has passed for media accreditation for in-person coverage of this launch.",
  },
  {
    id: "8",
    image: image1,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    avatar: avatar,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus nec pretium mi.\nCurabitur facilisis ornare velit non.",
    content:
      "Engineers previously rolled the rocket back to the Vehicle Assembly Building (VAB) Sept. 26 ahead of Hurricane Ian and after waving off two previous launch attempts Aug.\n 29 due to a faulty temperature sensor, and Sept. 4 due to a liquid hydrogen leak at an interface between the rocket and mobile launcher.\n Prior to rolling back to the VAB, teams successfully repaired the leak and demonstrated updated tanking procedures. While in the VAB, teams performed standard maintenanceto repair minor damage to the foam and cork on the thermal protection system and recharge or replace batteries throughout the system.\n A limited number of seats inside the auditorium will be available during briefings to previously credentialed on-site journalists on a first-come, first-served basis.\n The deadline has passed for media accreditation for in-person coverage of this launch.",
  },
  {
    id: "9",
    image: image2,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    avatar: avatar,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus nec pretium mi.\nCurabitur facilisis ornare velit non.",
    content:
      "Engineers previously rolled the rocket back to the Vehicle Assembly Building (VAB) Sept. 26 ahead of Hurricane Ian and after waving off two previous launch attempts Aug.\n 29 due to a faulty temperature sensor, and Sept. 4 due to a liquid hydrogen leak at an interface between the rocket and mobile launcher.\n Prior to rolling back to the VAB, teams successfully repaired the leak and demonstrated updated tanking procedures. While in the VAB, teams performed standard maintenanceto repair minor damage to the foam and cork on the thermal protection system and recharge or replace batteries throughout the system.\n A limited number of seats inside the auditorium will be available during briefings to previously credentialed on-site journalists on a first-come, first-served basis.\n The deadline has passed for media accreditation for in-person coverage of this launch.",
  },
  {
    id: "10",
    image: image3,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    avatar: avatar,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus nec pretium mi.\nCurabitur facilisis ornare velit non.",
    content:
      "Engineers previously rolled the rocket back to the Vehicle Assembly Building (VAB) Sept. 26 ahead of Hurricane Ian and after waving off two previous launch attempts Aug.\n 29 due to a faulty temperature sensor, and Sept. 4 due to a liquid hydrogen leak at an interface between the rocket and mobile launcher.\n Prior to rolling back to the VAB, teams successfully repaired the leak and demonstrated updated tanking procedures. While in the VAB, teams performed standard maintenanceto repair minor damage to the foam and cork on the thermal protection system and recharge or replace batteries throughout the system.\n A limited number of seats inside the auditorium will be available during briefings to previously credentialed on-site journalists on a first-come, first-served basis.\n The deadline has passed for media accreditation for in-person coverage of this launch.",
  },
  {
    id: "11",
    image: image4,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    avatar: avatar,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus nec pretium mi.\nCurabitur facilisis ornare velit non.",
    content:
      "Engineers previously rolled the rocket back to the Vehicle Assembly Building (VAB) Sept. 26 ahead of Hurricane Ian and after waving off two previous launch attempts Aug.\n 29 due to a faulty temperature sensor, and Sept. 4 due to a liquid hydrogen leak at an interface between the rocket and mobile launcher.\n Prior to rolling back to the VAB, teams successfully repaired the leak and demonstrated updated tanking procedures. While in the VAB, teams performed standard maintenanceto repair minor damage to the foam and cork on the thermal protection system and recharge or replace batteries throughout the system.\n A limited number of seats inside the auditorium will be available during briefings to previously credentialed on-site journalists on a first-come, first-served basis.\n The deadline has passed for media accreditation for in-person coverage of this launch.",
  },
];

const HomePage: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.blogWrapper}>
        {blogList.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
