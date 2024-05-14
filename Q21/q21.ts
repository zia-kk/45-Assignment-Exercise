type data={
    name: string;
    modle: number;
    price: number;
};

const mobile:data={

    name: "Vivo",
    modle: 2020,
    price: 38000,
}

const tablet:data={
     name: "iPad pro",
     modle: 2024,
     price: 96000,
};

console.log(`i have one ${mobile.name} mobile for sale its modle:${mobile.modle}, price: ${mobile.price} `);
console.log(`i have one ${tablet.name} Tablet for sale its modle:${tablet.modle}, price: ${tablet.price} `);
