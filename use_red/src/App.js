import React, { useReducer } from "react";

function Count() {
  const dogs = [
    {
      name: "Harry",
      image: "https://images.dog.ceo/breeds/vizsla/n02100583_10960.jpg",
    },
    {
      name: "Hermione",
      image: "https://images.dog.ceo/breeds/husky/n02110185_1511.jpg",
    },
  ];

  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action === "praiseHarry") {
        return { ...state, HarryPraises: state.HarryPraises + 1 };
      } else if (action === "praiseHermione") {
        return { ...state, HermionePraises: state.HermionePraises + 1 };
      } else {
        return state;
      }
    },
    {
      HarryPraises: 0,
      HermionePraises: 0,
    }
  );

  return (
    <div className="App">
      <div className="row mt-5">
        {dogs.map((dog) => (
          <div key={dog.name} className="card mx-auto col-4">
            <img className="card-img-top" src={dog.image} alt={dog.name} />
            <div className="card-body">
              <h4 className="card-title">{dog.name}</h4>
              <p className="card-text">
                {dog.name} has been praised {state[dog.name + "Praises"]}  
                times!
              </p>
              <button
                onClick={() => dispatch("praise" + dog.name)}
                className="btn btn-primary"
              >
                Praise
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;
