// const todoTitle="Java Script";
// const todoDesc="Middle English descripcioun, from Anglo-French & Latin; Anglo-French, from Latin from describere — see DESCRIBE";

const date=new Date();
const dateDay=date.getDate();
const month=date.getMonth();
const year=date.getFullYear();

// const name=["Cat","Dog"];
// name[0];
// name[1];
// const [Cat,Dog]=name;
// const Cat=name[0];
// const Dog=name[1];
function Card(props){
  const {titleText,todoDes} =props
  console.log(props);
  return <div className="card">
  <h3 className="cardTitle">{titleText}</h3>
  <p className="cardDesc">{todoDes}</p>
  <p className="cardFooter">{dateDay+"-"+month+"-"+year}</p>
</div>
}

export default Card;