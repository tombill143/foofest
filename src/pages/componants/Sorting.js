const Sorting = ({ sorting }) => {
  return (
    <section class="head">
      <h2>Performing Bands</h2>
      <p>Sort by:</p>
      <div class="sort_by">
        <button id="sort_by_name" data-sort="Name" data-action="sort" data-sort-direction="asc">
          Name A-Z
        </button>
        <button id="sort_by__name" data-sort="NameName" data-action="sort" data-sort-direction="desc">
          Name Z-A
        </button>
      </div>
    </section>
  );
};
export default Sorting;
