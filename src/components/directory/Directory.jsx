import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./directory.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: "hats",
          imgURL:
            "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
          id: 1,
        },
        {
          title: "jackets",
          imgURL:
            "https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          id: 2,
        },
        {
          title: "sneakers",
          imgURL:
            "https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          id: 3,
        },
        {
          title: "womens",
          imgURL:
            "https://images.unsplash.com/photo-1498032087969-fd7d126f9d0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          id: 4,
          size: "large",
        },
        {
          title: "mens",
          imgURL:
            "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          id: 5,
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, id, imgURL, size }) => {
          return (
            <MenuItem key={id} title={title} imgURL={imgURL} size={size} />
          );
        })}
      </div>
    );
  }
}

export default Directory;
