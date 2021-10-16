import "./Card.css";

// Wrapper component
function Card(props) {
  // this allows for any other css format to be applied to
  // children inside Card
  const classes = "card " + props.className;

  // props.children is a parameter implicitly passed to all components
  // for a wrapper, we make it explicit as to display anything
  // in the composition
  return <div className={classes}>{props.children}</div>;
}

export default Card;
