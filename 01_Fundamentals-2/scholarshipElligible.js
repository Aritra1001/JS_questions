let mathScore = 93;
let englishScore = 85;
let scienceScore = 77;

let elligibleForScholarship =
  (mathScore > 80 && englishScore > 80) ||
  (mathScore > 80 && scienceScore > 80) ||
  (englishScore > 80 && scienceScore > 80);

let qualifiesForScienceFair = mathScore + scienceScore + englishScore >= 250;

let elligibleForAward = elligibleForScholarship || qualifiesForScienceFair;
console.log(elligibleForAward);
