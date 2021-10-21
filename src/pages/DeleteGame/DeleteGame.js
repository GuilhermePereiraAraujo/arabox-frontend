import { Link } from "react-router-dom";
import { Api } from "../../api/Api";

export default function DeleteGame(props) {
  const id = props.match.params.id;

  const handleDelete = async () => {
    const auth = Boolean(localStorage.getItem("JWT"));
    await Api.buildApiDeleteRequest(Api.deleteGame(id), auth);
  };

  return (
    <div>
      <div>
        <p>Do you want to delete the game?</p>
        <p>The deletion is permanent</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Link to={"/game/" + id}>Return</Link>
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => handleDelete}>Delete</button>
    </div>
  );
}
