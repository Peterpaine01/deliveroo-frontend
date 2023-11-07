import { useEffect, useState } from "react";
import deliverooLogo from "./assets/img/logo-teal.svg";
import axios from "axios";

import "./App.css";
import Header from "./assets/components/Header";
import Category from "./assets/components/Category";
import Panier from "./assets/components/Panier";

const App = () => {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--fklc4pfyn242.code.run/"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  console.log(data.categories);
  // console.log(categories);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Header logo={deliverooLogo} data={data} />
      <main>
        <div className="container">
          <div className="meals">
            <div className="sections">
              {data.categories.map((category, index) => {
                return (
                  <>
                    {category.meals.length != 0 && (
                      <section key={category.name} className={category.name}>
                        <Category category={category} index={index} />
                      </section>
                    )}
                  </>
                );
              })}
            </div>
            <aside>
              <Panier />
            </aside>
          </div>
        </div>
      </main>

      <br />
    </div>
  );
};

export default App;
