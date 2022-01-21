// if (recipe == 'SPANISH') {
//     fudge = SPANISH_FUDGE;
//     amt = base * SPANISH_FUDGE;
//     sugar = 2 * bottom(amt) + top(amt) * 1.17;
//  } else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
//     fudge = (recipe == 'FRENCH') ? FRENCH_FUDGE : ENGLISH_FUDGE;
//     amt = base * fudge;
//     sugar = 2 * bottom(amt) + top(amt) * 1.17;
//     if (recipe == 'FRENCH') {
//         chocolate = 7;
//     }
//  } else {
//     fudge = 1;
//     amt = base;
//     sugar = 2 * bottom(amt) + top(amt) * 1.17;
//  }
 

switch(recipe) {
   case "SPANISH":
      fudge = SPANISH_FUDGE;
      amt = base * SPANISH_FUDGE;
      sugar = 2 * bottom(amt) + top(amt) * 1.17;
      break;
   case "FRENCH":
      fudge = FRENCH_FUDGE;
      amt = base * FRENCH_FUDGE;
      sugar = 2 * bottom(amt) + top(amt) * 1.17;
      chocolate = 7;
      break;
   case "ENGLISH":
      fudge = ENGLISH_FUDGE;
      amt = base * ENGLISH_FUDGE;
      sugar = 2 * bottom(amt) + top(amt) * 1.17;
      break;
   default:
      fudge = 1;
      amt = base;
      sugar = 2 * bottom(amt) + top(amt) * 1.17;
}
