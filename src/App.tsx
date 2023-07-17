import { NavBar } from "@shared/components";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="page">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="page">
//       <div className="title">LOGIN</div>

//       <table className="table-auto w-full hover">
//         <thead>
//           <tr>
//             <th>Song</th>
//             <th>Artist</th>
//             <th>Year</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
//             <td>Malcolm Lockyer</td>
//             <td>1961</td>
//           </tr>
//           <tr>
//             <td>Witchy Woman</td>
//             <td>The Eagles</td>
//             <td>1972</td>
//           </tr>
//           <tr>
//             <td>Shining Star</td>
//             <td>Earth, Wind, and Fire</td>
//             <td>1975</td>
//           </tr>
//         </tbody>
//       </table>

//       <br />

//       <input type="text" value="prova" />
//       <input type="number" value="2" />
//       <input type="email" value="prova" />
//       <input type="password" value="prova" />

//       <br />

//       <input type="text" className="error" />

//       <br />

//       <button className="btn">Default</button>
//       <button className="btn" disabled>
//         Default
//       </button>

//       <br />

//       <button className="btn outline">Outline</button>
//       <button className="btn outline" disabled>
//         Outline
//       </button>

//       <br />

//       <button className="btn dark">Dark</button>
//       <button className="btn dark" disabled>
//         Dark
//       </button>

//       <br />

//       <button className="btn danger">Danger</button>
//       <button className="btn danger" disabled>
//         Danger
//       </button>

//       <br />

//       <button className="btn primary">Primary</button>
//       <button className="btn primary" disabled>
//         Primary
//       </button>

//       <br />

//       <button className="btn accent">Accent</button>
//       <button className="btn accent" disabled>
//         Accent
//       </button>

//       <br />

//       <button className="btn success">Success</button>
//       <button className="btn success" disabled>
//         Success
//       </button>

//       <br />

//       <button className="btn success lg">Text LG</button>
//       <button className="btn success lg" disabled>
//         Text LG
//       </button>
//     </div>
//   );
// }

export default App;
