import Item from "./Item";
const List = ({ bill, handleDelete, handleEdit }) => {
  return (
    <>
      {bill.map((items) => {
        return (
          <Item
            key={items.id}
            items={items}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
    </>
  );
};

export default List;
