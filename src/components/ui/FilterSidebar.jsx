import TextFilters from "../TextModel/TextFilters";

const FilterSidebar = () => {
  return (
    <aside className="filter">
      <h3 className="text-center my-4">Filters</h3>
      <form className="d-grid form-section rounded-1">
        <TextFilters />
      </form>
    </aside>
  );
};

export default FilterSidebar;
