import Modal from "@oussop/easy-modal/dist";
import { useState } from "react";
import { Link } from "react-router-dom";
import HomeForm from "./HomeForm.jsx";

const HomeMainContainer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEmployeeCreated = () => {
    setShowModal(true);
  };

  function closeModal() {
    setShowModal(false);
  }

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    modalContent: {
      backgroundColor: "#ffffff",
      padding: "3px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      position: "relative",
      paddingLeft: "30px",
      borderRadius: "15px",
    },
  };

  return (
    <div>
      <div className="container">
        <Link to="/list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <HomeForm onEmployeeCreated={handleEmployeeCreated} />
      </div>
      <Modal isOpen={showModal} onClose={closeModal} style={modalStyles}>
        <button
          onClick={closeModal}
          type="button"
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            background: "black",
            color: "white",
            border: "none",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          &times;
        </button>
        <p style={{ textAlign: "center" }}>Employee Created!</p>
      </Modal>
    </div>
  );
};

export default HomeMainContainer;
