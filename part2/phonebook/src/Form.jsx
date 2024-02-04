const Form = ({
  persons,
  setPersons,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
}) => {
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      return alert(`${newName} is already aded to phonebook`);
    }

    console.log(newName);

    setPersons(persons.concat({ name: newName, number: newNumber }));
    console.log(persons);

    // filterPersons();
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:{" "}
          <input
            type="number"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;