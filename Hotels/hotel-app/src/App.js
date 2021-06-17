import React from "react";
import "./App.css";
import today from "./data";

// Componentes tipo arrow function.
// const Hero = (filters) => {
//   return (
//     <section className="hero is-primary">
//       <div className="hero-body">
//         <div className="container">
//           <h1 className="title">Hoteles</h1>
//           <h2 className="subtitle">
//             {/* String literal */}
//             desde el {`${filters.filters.dateFrom}`}{" "}
//             {console.log(filters.filters.dateFrom)}
//             <strong>dddd, DD de mmmm de AAAA</strong> hasta el{" "}
//             <strong>dddd, DD de mmmm de AAAA</strong>
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

class Hero2 extends React.Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              desde el {`${this.props.filters.dateFrom}`} hasta el
              {` ${this.props.filters.dateTo}`}
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

function App() {
  const filters = {
    dateFrom: today.toLocaleDateString(), // Método LocaleDateString para cambiar la fecha a string
    dateTo: new Date(today.valueOf() + 86400000).toLocaleDateString(),
    country: "Colombia",
    price: 0,
    rooms: 0,
  };
  // console.log(filters);
  return (
    <div>
      {/* <Hero filters={filters} /> */}
      <Hero2 filters={filters} />
      {/* {console.log(filters)} */}
    </div>
  );
}

export default App;
