const getState = ({ getStore, getActions, setStore }) => {
  // Helper to fetch and process details from a list of URLs
  const fetchDetails = async (urls, parseDetails) => {
    try {
      const data = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
      );
      return data.map(parseDetails);
    } catch (error) {
      console.error("Error fetching details:", error);
      throw error;
    }
  };

  return {
    store: {
      demo: [
        { title: "FIRST", background: "white", initial: "white" },
        { title: "SECOND", background: "white", initial: "white" },
      ],
      peopleInfo: [],
      planetsInfo: [],
      vehiclesInfo: [],
      favorites: [],
    },

    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, "yellow");
      },

      changeColor: (index, color) => {
        const store = getStore();
        const demo = store.demo.map((item, i) => ({
          ...item,
          background: i === index ? color : item.background,
        }));
        setStore({ demo });
      },

      // Fetch and store Star Wars data
      getPeople: async () => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/people/`);
          const data = await response.json();
          const peopleUrls = data.results.map((result) => result.url);
          const charactersDetails = await fetchDetails(peopleUrls, (data) => ({
            uid: data.result.uid,
            name: data.result.properties.name,
            birth_year: data.result.properties.birth_year,
            gender: data.result.properties.gender,
            height: data.result.properties.height,
            eye_color: data.result.properties.eye_color,
            hair_color: data.result.properties.hair_color,
            image: `https://starwars-visualguide.com/assets/img/characters/${data.result.uid}.jpg`,
            description1: `Height: ${data.result.properties.height} cm`,
            description2: `Eye Color: ${data.result.properties.eye_color}`,
            description3: `Hair Color: ${data.result.properties.hair_color}`,
          }));
          setStore({ peopleInfo: charactersDetails });
        } catch (error) {
          console.error("Error fetching people data:", error);
        }
      },

      getPlanets: async () => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/planets/`);
          const data = await response.json();
          const planetsUrls = data.results.map((result) => result.url);
          const planetsDetails = await fetchDetails(planetsUrls, (data) => ({
            uid: data.result.uid,
            name: data.result.properties.name,
            population: data.result.properties.population,
            climate: data.result.properties.climate,
            terrain: data.result.properties.terrain,
            gravity: data.result.properties.gravity,
            orbital_period: data.result.properties.orbital_period,
            image: `https://starwars-visualguide.com/assets/img/planets/${data.result.uid}.jpg`,
            description1: `Population: ${data.result.properties.population}`,
            description2: `Climate: ${data.result.properties.climate}`,
            description3: `Terrain: ${data.result.properties.terrain}`,
          }));
          setStore({ planetsInfo: planetsDetails });
        } catch (error) {
          console.error("Error fetching planets data:", error);
        }
      },

      getVehicles: async () => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/vehicles/`);
          const data = await response.json();
          const vehiclesUrls = data.results.map((result) => result.url);
          const vehiclesDetails = await fetchDetails(vehiclesUrls, (data) => ({
            uid: data.result.uid,
            name: data.result.properties.model,
            manufacturer: data.result.properties.manufacturer,
            vehicle_class: data.result.properties.vehicle_class,
            cargo_capacity: data.result.properties.cargo_capacity,
            max_atmosphering_speed:
              data.result.properties.max_atmosphering_speed,
            length: data.result.properties.length,
            image: `https://starwars-visualguide.com/assets/img/vehicles/${data.result.uid}.jpg`,
            description1: `Model: ${data.result.properties.model}`,
            description2: `Manufacturer: ${data.result.properties.manufacturer}`,
            description3: `Vehicle Class: ${data.result.properties.vehicle_class}`,
          }));
          setStore({ vehiclesInfo: vehiclesDetails });
        } catch (error) {
          console.error("Error fetching vehicles data:", error);
        }
      },

      addFavorites: (selectedItem) => {
        const { favorites } = getStore();
        if (!favorites.includes(selectedItem)) {
          setStore({ favorites: [...favorites, selectedItem] });
        }
      },

      deleteFavorites: (selectedFavorite) => {
        const { favorites } = getStore();
        setStore({
          favorites: favorites.filter((item) => item !== selectedFavorite),
        });
      },
    },
  };
};

export default getState;
