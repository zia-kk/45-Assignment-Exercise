let myguests_List: string[] = [
  "Sir Zia Khan",
  "Sir Ameen Alam",
  "Sir Mobashir Ali",
  "Sir Usama",
];
for (let i = 0; i < myguests_List.length; i++) {
  console.log(
    `Dear Respected Sir!:` +
      myguests_List[i] +
      `,\n we invited you on a Dinner.\n\n Thank You`
  );
}

export{myguests_List}
