const HomeInputForm = ({ htmlFor, type, id, label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default HomeInputForm;
