function Total(props) {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises[0].exercises +
        props.exercises[1].exercises +
        props.exercises[2].exercises}
    </p>
  );
}

export default Total;
