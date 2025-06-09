const Category_xx = ({ categories }) => {
    return(
        <div class="btn-container">
        <button type="button" class="filter-btn" data-id="all" onClick={()=>categories('all')}>
          all
        </button>
        <button type="button" class="filter-btn" data-id="breakfast" onClick={()=>categories('breakfast')}>
          breakfast
        </button>
        <button type="button" class="filter-btn" data-id="lunch" onClick={()=>categories('lunch')}>
          lunch
        </button>
        <button type="button" class="filter-btn" data-id="shakes" onClick={()=>categories('shakes')}>
          shakes
        </button>
        <button type="button" class="filter-btn" data-id="dinner" onClick={()=>categories('dinner')}>
          dinner
        </button>
        </div>
    );
};

export default Category_xx;