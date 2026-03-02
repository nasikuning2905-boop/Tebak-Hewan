export type Question = {
  id: number;
  question: string;
  emoji: string;
  options: string[];
  answer: string;
};

export const daratanQuestions: Question[] = [
  { id: 1, question: "Hewan apakah ini? Dia punya belalai yang panjang!", emoji: "🐘", options: ["Gajah", "Jerapah", "Singa", "Kuda"], answer: "Gajah" },
  { id: 2, question: "Hewan apakah ini? Dia suka makan pisang dan bergelantungan!", emoji: "🐒", options: ["Kucing", "Monyet", "Harimau", "Sapi"], answer: "Monyet" },
  { id: 3, question: "Hewan apakah ini? Dia adalah raja hutan yang mengaum keras!", emoji: "🦁", options: ["Serigala", "Beruang", "Singa", "Zebra"], answer: "Singa" },
  { id: 4, question: "Hewan apakah ini? Lehernya sangat panjang untuk makan daun di pohon tinggi!", emoji: "🦒", options: ["Kuda Nil", "Jerapah", "Unta", "Badak"], answer: "Jerapah" },
  { id: 5, question: "Hewan apakah ini? Dia punya belang hitam dan oranye di tubuhnya!", emoji: "🐅", options: ["Kucing", "Cheetah", "Harimau", "Macan Tutul"], answer: "Harimau" },
  { id: 6, question: "Hewan apakah ini? Dia suka melompat dan punya kantung di perutnya!", emoji: "🦘", options: ["Kelinci", "Kangguru", "Katak", "Tupai"], answer: "Kangguru" },
  { id: 7, question: "Hewan apakah ini? Dia punya cula di hidungnya dan badannya besar!", emoji: "🦏", options: ["Gajah", "Kuda Nil", "Badak", "Banteng"], answer: "Badak" },
  { id: 8, question: "Hewan apakah ini? Dia suka makan wortel dan telinganya panjang!", emoji: "🐇", options: ["Kelinci", "Tikus", "Kucing", "Anjing"], answer: "Kelinci" },
  { id: 9, question: "Hewan apakah ini? Dia punya leher pendek tapi larinya sangat cepat seperti kuda bergaris!", emoji: "🦓", options: ["Kuda", "Keledai", "Zebra", "Sapi"], answer: "Zebra" },
  { id: 10, question: "Hewan apakah ini? Dia suka berguling di lumpur dan badannya sangat besar!", emoji: "🦛", options: ["Babi", "Kuda Nil", "Badak", "Gajah"], answer: "Kuda Nil" },
];

export const lautanQuestions: Question[] = [
  { id: 1, question: "Hewan apakah ini? Dia sangat pintar dan suka melompat dari air!", emoji: "🐬", options: ["Hiu", "Paus", "Lumba-lumba", "Anjing Laut"], answer: "Lumba-lumba" },
  { id: 2, question: "Hewan apakah ini? Dia punya 8 lengan dan bisa menyemprotkan tinta!", emoji: "🐙", options: ["Cumi-cumi", "Gurita", "Bintang Laut", "Ubur-ubur"], answer: "Gurita" },
  { id: 3, question: "Hewan apakah ini? Dia punya gigi yang tajam dan sirip di punggungnya!", emoji: "🦈", options: ["Hiu", "Paus", "Pari", "Kuda Laut"], answer: "Hiu" },
  { id: 4, question: "Hewan apakah ini? Dia membawa rumahnya ke mana-mana dan berenang lambat!", emoji: "🐢", options: ["Kepiting", "Penyu", "Kerang", "Udang"], answer: "Penyu" },
  { id: 5, question: "Hewan apakah ini? Dia adalah hewan terbesar di lautan dan menyemprotkan air dari kepalanya!", emoji: "🐳", options: ["Paus", "Hiu", "Lumba-lumba", "Gurita"], answer: "Paus" },
  { id: 6, question: "Hewan apakah ini? Dia berjalan menyamping dan punya capit yang kuat!", emoji: "🦀", options: ["Udang", "Kepiting", "Gurita", "Kerang"], answer: "Kepiting" },
  { id: 7, question: "Hewan apakah ini? Bentuknya seperti bintang dan menempel di karang!", emoji: "⭐", options: ["Ubur-ubur", "Kuda Laut", "Bintang Laut", "Bulu Babi"], answer: "Bintang Laut" },
  { id: 8, question: "Hewan apakah ini? Kepalanya seperti kuda tapi dia hidup di air!", emoji: "🐎", options: ["Kuda Nil", "Kuda Laut", "Ikan Pari", "Belut"], answer: "Kuda Laut" },
  { id: 9, question: "Hewan apakah ini? Badannya transparan dan bisa menyengat!", emoji: "🪼", options: ["Cumi-cumi", "Gurita", "Ubur-ubur", "Anemon"], answer: "Ubur-ubur" },
  { id: 10, question: "Hewan apakah ini? Dia punya kumis panjang dan suka berjemur di atas es!", emoji: "🦭", options: ["Anjing Laut", "Singa Laut", "Beruang Kutub", "Pinguin"], answer: "Anjing Laut" },
];
