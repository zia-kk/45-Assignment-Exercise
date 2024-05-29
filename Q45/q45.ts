type car = {
  manufacture: string;
  modle: string;
  [key: string]: any;
};

function create_car(
  manufacture: string,
  modle: string,
  optional: Record<string, any>
): car {
  return {
    manufacture,
    modle,
    ...optional,
  };
}

const mycar: car = create_car("Toyota", "Crown", {
  color: "Gray",
  year: "2024",
});

console.log(mycar);


/////////////////////////////////////////Al humdulilah completed All  45 Exercise/////////////////////////////