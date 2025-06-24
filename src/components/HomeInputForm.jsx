const HomeInputForm = ({ htmlFor, type, id, label }) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
};

export default HomeInputForm;
