const todoTitle = "Hello Mf";
const dateName = new Date().getDate();
const monthName = new Date().getMonth();
const currentYear = new Date().getFullYear();
const todoDesc = "adghiuwsdafhkloidgfkoreaistgjriue";

function Card(props){
  const {titleText,descText} = props;

  return <div className='card'>
  <h3 className='title'>{titleText}</h3>
  <p className='carddesc'>{descText} </p>
  <p className='date'>{dateName+"/"+ monthName + "/" +currentYear}</p>
</div>
}

export default Card;