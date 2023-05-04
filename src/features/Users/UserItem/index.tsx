import { Attribute } from "api/types";
import Button from "components/shared/Button";
import { useState } from "react";
import classes from "./UserItem.module.css";

type IUserItemProps = {
  id?: number;
  reference: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  department?: string;
  manager?: string;
  image?: string;
  bio: string;
  attributes?: Attribute[];
};

const UserItem = ({
  first_name,
  last_name,
  email,
  job_title,
  image,
  bio,
  reference,
  username,
}: IUserItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleHiddenContent = () => {
    setIsExpanded(!isExpanded);
  };

  const imageSrc = image ?? "https://picsum.photos/300/300";
  const usersEmail = email ?? "email@yahoo.com";
  const userBio = !!bio ? bio : "Sorry there is no bio at the moment - please check later";
  return (
    <>
      <div className="col col3">
        <div className={classes["item-col"]}>
          <header className={classes.header}>
            <figure className={classes["image-wrapper"]}>
              <img src={imageSrc} alt={job_title} />
            </figure>
            <div className={classes["name-wrapper"]}>
              <p className={classes.name}>{first_name}</p>
              <p className={classes.name}>{last_name}</p>
              <div className={classes["username-wrapper"]}>
                <p>Username:</p>
                <p>{username}</p>
              </div>
              <div className={classes["username-wrapper"]}>
                <p>Reference:</p>
                <p>{reference}</p>
              </div>
            </div>
          </header>
          <div className={classes.content}>
            <h4>Job title:</h4>
            <p className={classes.position}>{job_title}</p>
            <p className={classes.email}>{usersEmail}</p>
          </div>
          <footer className={classes.footer}>
            <div className={classes["button-wrapper"]}>
              <Button onClick={handleToggleHiddenContent} type="button">
                {!isExpanded ? "Read more" : "Read less"}
              </Button>
              {isExpanded && (
                <div data-testid="hidden-content" className={classes["expanded-content"]}>
                  <p>{userBio}</p>
                </div>
              )}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default UserItem;
