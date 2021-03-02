const Form = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) => {
  return (
    <>
      <form className="app-form" onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              name="charge"
              id="charge"
              placeholder="(e.g. rent)"
              autoComplete="off"
              value={charge}
              onChange={handleCharge}
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="amount"
              id="amount"
              placeholder="(e.g. 900)"
              autoComplete="off"
              onChange={handleAmount}
              value={amount}
            />
          </div>
        </div>
        <div className="btns">
          {edit ? (
            <button className="submit"> Edit </button>
          ) : (
            <button className="submit"> Submit </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
