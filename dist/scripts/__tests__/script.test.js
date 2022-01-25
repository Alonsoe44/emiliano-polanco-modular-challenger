import ButtonComponent from "../components/button.js";
import personajesGrupo from "../charactersLogic/personajes.js";
import Card from "../components/card.js";

const [King, Fighter, Asesor, Squire] = personajesGrupo;
const {
  nombre: jofreyNombre,
  familia: familiaJofrey,
  edad: edadJofrey,
  vivo: estadoJofrey,
  anyosReinado: reinadoJofrey,
} = new King("Joffrey", "Baratheon", 16, 2);

describe("Given a Button", () => {
  describe("When it is clicked", () => {
    test("Then it should call a function", () => {
      const container = document.createElement("div");
      const action = jest.fn();

      const button = new ButtonComponent(container, "", "aa", action);
      button.element.click();

      expect(action).toHaveBeenCalled();
    });
  });
});

describe("Given a Card class", () => {
  describe("When it is injected", () => {
    test("Then it should create his own element ", () => {
      const container = document.createElement("div");

      new Card(
        container,
        [
          ["static/joffrey.jpg", "king image"],
          [`${jofreyNombre} ${familiaJofrey}`, edadJofrey, estadoJofrey],
          "👑",
          ["Years as king"],
          [reinadoJofrey],
        ],
        "king"
      );

      expect(container.querySelector("li")).not.toBeNull();
    });
  });
});
