import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Item = ({ items, handleDelete, handleEdit }) => {
  const { id, amount, charge } = items;
  return (
    <>
      <div className="item" key={id}>
        <div className="info">
          <span className="charge">{charge}</span>
          <span className="amount">{amount}</span>
        </div>
        <div className="btn-functions">
          <button
            className="btn-edit"
            aria-label="edit"
            onClick={() => {
              handleEdit(id);
            }}
          >
            <MdEdit />
          </button>
          <button
            className="btn-delete"
            aria-label="delete"
            onClick={() => handleDelete(id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};
export default Item;
