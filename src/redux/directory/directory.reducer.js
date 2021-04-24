const INITIAL_STATE = {
  sections: [
    {
      title: "backpacks",
      imgURL:
        "https://images.unsplash.com/photo-1591476123043-a8b38a6effab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80",
      id: 1,
      size: "large",
      linkURL: "shop/backpacks",
    },
    {
      title: "knifies",
      imgURL:
        "https://images.unsplash.com/photo-1617607712510-91a0991ce458?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
      id: 2,
      linkURL: "shop/knifies",
    },
    {
      title: "footwears",
      imgURL:
        "https://images.unsplash.com/photo-1575987116913-e96e7d490b8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      id: 3,
      linkURL: "shop/footwears",
    },
    {
      title: "outwears",
      imgURL:
        "https://images.unsplash.com/photo-1578945064939-d4471005910d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
      id: 4,
      // size: "large",
      linkURL: "shop/outwears",
    },
    {
      title: "essential gears",
      imgURL:
        "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80",
      id: 5,
      size: "large",
      linkURL: "shop/essential_gears",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
