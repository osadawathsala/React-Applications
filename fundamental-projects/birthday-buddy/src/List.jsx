import Person from './Person';
const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <section key={person.id}>
            <Person {...person} />
          </section>
        );
      })}
    </section>
  );
};

export default List;
