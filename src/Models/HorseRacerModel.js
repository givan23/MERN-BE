import HorseRacer from "./HorseRacerSchema";

export const horseRacerModel = () => {
    return new HorseRacer({
        code: 1,
        result: {
            disciplineDescription: "Campionato del mondo di ippica",
            winningRacerName: ["Artax","Scalto","Furia"],
            winningOdds: [301,330,315],
            placeTwoRacerName: ["Artax","Scalto","Furia"],
            placeTwoOdds: [210,200,255],
            placeThreeRacerName: ["Artax","Scalto","Furia"],
            placeThreeOdds: [150,160,175],
        }
    });
};