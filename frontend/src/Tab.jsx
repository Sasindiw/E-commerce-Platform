function Tab(props) {
  const handleClick = (e) => {
    props.onTabClick(props._id);
  };

  if (props._id === props.selectedCategoryId) {
    return (
      <button className="border border-[#d8d4d4] px-2 py-1 rounded-md hover:bg-gray-800 hover:text-white ">
        {props.name}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="border border-[#d8d4d4] px-2 py-1 rounded-md hover:bg-gray-800 hover:text-white "
    >
      {props.name}
    </button>
  );
}

export default Tab;
