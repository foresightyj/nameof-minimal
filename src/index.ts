import nameof from "ts-nameof.macro";

interface Model {
  Data: {
    Title: string;
  }[];
}

const m: Model = {
  Data: [
    {
      Title: "hihi",
    },
  ],
};

const i = 1;
console.log(nameof.full(m.Data[nameof.interpolate(i)].Title));
