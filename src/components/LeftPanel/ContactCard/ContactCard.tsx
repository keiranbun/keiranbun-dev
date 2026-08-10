import emailIcon from "../../../assets/ContactCard/email-color.svg";
import gitIcon from "../../../assets/ContactCard/git-color.svg";
import linkedInIcon from "../../../assets/ContactCard/linkedin-color.svg";
import locationIcon from "../../../assets/ContactCard/location-color.svg";

const ContactCard = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl underline underline-offset-4 decoration-2">
        Contact
      </h1>
      <div>
        <ContactRow
          imgSource={emailIcon}
          title="Email"
          text="bunyan.keiran@gmail.com"
          link="mailto:bunyan.keiran@gmail.com"
        />
        <ContactRow
          imgSource={linkedInIcon}
          title="LinkedIn"
          text="Keiran Bunyan"
          link="https://www.linkedin.com/in/keiran-bunyan-181522334/"
        />
        <ContactRow
          imgSource={gitIcon}
          title="GitHub"
          text="keiranbun"
          link="https://github.com/keiranbun"
        />
        <ContactRow imgSource={locationIcon} title="Location" text="Brisbane" />
      </div>
    </div>
  );
};

type ContactRowType = {
  imgSource: string;
  title: string;
  text: string;
  link?: string;
};

const ContactRow = ({ imgSource, text, link = "", title }: ContactRowType) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <img src={imgSource} className="w-8" title={title} />

      {link ? (
        <a href={link} target="_blank">
          <p>{text}</p>
        </a>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default ContactCard;
