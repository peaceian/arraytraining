classic = new Array();
i = 0;
classic[i++] = 'Minds are like parachutes. They only function when they are open.';
classic[i++] = 'Troubles are like babies. They only grow if you nurse them.';
classic[i++] = 'The love you give away is the love you keep.'
classic[i++] = 'What is hard, isn\'t fun. What is fun, isn\'t hard.';
classic[i++] = 'An optimist sees an opportunity in every calamity. A pessimist sees a calamity in every opportunity.';
classic[i++] = 'Houses are built of bricks and stone, but homes are made love alone.';
classic[i++] = 'Will a person gain anything if he wins the whole world but loses his life?';
classic[i++] = 'I had no shoes and complained until I met a man who had no feet.';
classic[i++] = 'Never put off till tomorrow what you can do today.';
classic[i++] = 'Throw out a minnow to catch a whale.';
classic[i++] = 'Birds of a feather flock together.';
classic[i++] = 'Rome was not built in a day.';
classic[i++] = 'A burnt child dreads the fire.';
classic[i++] = 'Business before pleasure.';
classic[i++] = 'Every cloud has a silver lining.';
classic[i++] = 'A drowning man will catch at a straw.';
classic[i++] = 'Charity begins at home.';
classic[i++] = 'No cross. no crown.';
classic[i++] = 'Don\'t count your chickens before they are hatched.';
classic[i++] = 'All roads lead to Rome.';
classic[i++] = 'It is no use crying over spilt milk.= There is no use crying over spilt milk.= Let bygones be bygones';
classic[i++] = 'All work and no play makes Jack a dull boy.';
classic[i++] = '(The)Walls have ears.';
classic[i++] = 'Early to bed and early to rise makes a man healthy, wealthy and wise.';
classic[i++] = 'Fine feathers make fine birds.';
classic[i++] = 'No smoke without fire. There is no smoke without fire.';
classic[i++] = 'Speech is silver, silence is golden.';
classic[i++] = 'Two halves make a whole.';
classic[i++] = 'More haste, less speed. Haste makes waste.';
classic[i++] = 'Make hay while the sun shines.';
//i = 0, the i++ means the i plus 1, next 1 plus 1,...and so on.
index = Math.floor(Math.random()*classic.length);//隨機產生0~length的小數，用floor將小數無條件捨去變成整數。
document.write(classic[index]);//輸出索引值
//The Math.floor() method rounds a number DOWN to the nearest integer.
//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive). 


