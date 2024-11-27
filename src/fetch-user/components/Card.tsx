import { User } from "./user";
const Card = ({ name, email, picture }: User) => {
  return (
    <>
      <div className="card m-3" style={{ maxWidth: "18rem" }}>
        <img src={picture.large} alt="" className="card-img-top" />
        <div className="card-body">
          <p className="card-title">
            {name.title + " " + name.first + " " + name.last}
          </p>
          <p className="card-text">Email: {email}</p>
          <button className="btn btn-primary">Go somewehere</button>
        </div>
      </div>
    </>
  );
};

export default Card;
