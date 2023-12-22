//children viene usato come props ed il contenuto viene passato come figlio
//se facciamo il console.log di props.children vedremo il contenuto
const tabButton = ({ children, onClick }) => {
  return (
    <li>
      {/* props.children è built in react, non la dobbiamo dichiarare per forza ma è sempre disponibile */}
      {/* contiene al suo interno qualsiasi tipo di contenuto, qualsiasi riferimento dal componente padre */}
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default tabButton;