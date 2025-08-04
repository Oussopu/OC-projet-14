import filterIcon from "../assets/img/sort-icon.svg";

const CustomHeaderComponent = (props) => {
  const onFilterClicked = () => {
    const { column } = props;
    const { colId } = column;

    const gridApi = props.api;

    const currentSort = gridApi.getSortModel();

    const isColumnSorted = currentSort.some((sort) => sort.colId === colId);

    let newSortOrder = "asc";
    if (isColumnSorted) {
      const currentSortOrder = currentSort.find(
        (sort) => sort.colId === colId,
      ).sort;
      newSortOrder = currentSortOrder === "asc" ? "desc" : "asc";
    }

    gridApi.setSortModel([{ colId, sort: newSortOrder }]);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1 }}>{props.displayName}</div>
      <button
        onClick={onFilterClicked}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Sort"
        type="button"
      >
        <img
          src={filterIcon}
          alt="Sort"
          style={{ width: "14px", height: "14px" }}
        />
      </button>
    </div>
  );
};

export default CustomHeaderComponent;
