interface Track {
  title: string;
  minutes: number;
}
const calculateTotalListeningTime = (tracks: Track[]): number => {
  const total: number = tracks.reduce((sum, min) => sum + min.minutes, 0);
  return total;
};
const tracks = [
  { title: "Blinding Lights", minutes: 3 },
  { title: "Levitating", minutes: 4 },
  { title: "Peaches", minutes: 3 },
];
console.log(calculateTotalListeningTime(tracks));
const tracks2 = [
  { title: "Flowers", minutes: 3 },
  { title: "Anti-Hero", minutes: 4 },
];
console.log(calculateTotalListeningTime(tracks2));
