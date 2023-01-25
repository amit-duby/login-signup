function Home(props) {
  console.log("Home", props.data);
  return (
    <>
      <div className="add-to-cord">
        
        <img className="img"
          src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?w=740&t=st=1673542318~exp=1673542918~hmac=37b015d115abedfd21d348d388dd9fd0304a68c5353604fa0946582fb8154530"
          alt=""
        />
        <span className="shop">{props.data.length}</span>
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.theiphonewiki.com/w/images/7/77/IPhone_5c_white.png"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span> phone: i phone</span>
          <br></br>
          <span> price: $2000.00</span>
        </div>
        <div className="cord-wrapper item">
          <button
            type="button"
            onClick={() =>
              props.addToCortHandler({ price: 10000, name: "i phone 11" })
            }
          >
            add to cort
          </button>
        </div>
      </div>
    </>
  );
}

// add to card

export default Home;
