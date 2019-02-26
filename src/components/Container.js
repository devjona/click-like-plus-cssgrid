import React from "react";
import Card from "./Card";

// This doesn't need to be defined in a function, can just be module-level
// If you define it inside the function (which is effectively the render function for the component),
// it'll recreate this object every render. Not a huge deal with this example, but it's not
// necessary to keep redefining it
const items = [
  {
    onSale: false,
    altTag: "blueberries",
    filenameString: "blueberries.jpg",
    tag: "desserts",
    title: "Blueberries in Mug"
  },
  {
    onSale: true,
    altTag: "leather chair",
    filenameString: "leather-chair.jpg",
    tag: "furniture",
    title: "Leather Chair"
  },
  {
    onSale: false,
    altTag: "camera",
    filenameString: "camera.jpg",
    tag: "electronics",
    title: "Camera"
  },
  {
    onSale: false,
    altTag: "orange-chair",
    filenameString: "orange-chair.jpg",
    tag: "furniture",
    title: "Orange Chair"
  },
  {
    onSale: false,
    altTag: "potted plant",
    filenameString: "potted-plant.jpg",
    tag: "plants",
    title: "Potted Plants"
  },
  {
    onSale: true,
    altTag: "wood stool",
    filenameString: "wood-stool.jpg",
    tag: "furniture",
    title: "Wood Stool"
  }
];

// I actually think yours is more readable, but at work we usually do
// something like the following. Both are equivalent, good to compare syntax

// const Container = () => (
//   <div className="container">
//     {items.map(item => (
//       <Card key={item.altTag} item={item} />
//     ))}
//   </div>
// );

const Container = props => {
  const cards = items.map(item => {
    return <Card key={item.altTag} item={item} />;
  });

  return <div className="container">{cards}</div>;
};

export default Container;
