// The petition URL
const link = encodeURI("https://www.change.org/p/london-city-council-approve-the-q-v-on-the-park");

// The petition ID (Automatically extract ID if set to undefined)
let id = undefined;

// Returns a random number between min and max
function signInterval(200, 10000) {
  return Math.random() * (10000 - 200) + 200;
}

// Signing interval in ms
const interval = signInterval(200, 10000);

const express = require('express');
const app = express();

app.get('/ping', (req, res) => res.send(new Date()));

app.listen(3000);

const rp = require('request-promise');

const states = ['ON'];

const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0";

async function sign() {
  const cookieJar = rp.jar();
  const body = await rp({
    method: 'GET',
    uri: link,
    jar: cookieJar,
    headers: {
      'Referer': link,
      'User-agent': userAgent
    }
  });

  if(!id) {
    // handle two formats: "id":xxxxxxxx and "id":"xxxxxxxx"
    let idIndex = body.search(/"id":"?[0-9]+"?/);
    const from = body[idIndex + 5] == '"'? 6: 5
    id = body.substr(idIndex + from, 8);
    
    console.log("Petition id: " + id);
  }
  
  const tokenIndex = body.search(/"csrfToken":"[a-zA-Z0-9_]+"/);
  const token = body.substr(tokenIndex + 13, 32);

    var firstName = ['Agnes', 'Ellis', 'Marie', 'Bethany', 'Hollie', 'Paige', 'Kyla', 'Megan', 'Meg', 'Bea', 'Darcie', 'Emily', 'Robbie', 'John', 'Luann', 'Katelynn', 'Kristin', 'Georgie', 'Deb', 'Dylan', 'Melanie', 'Susanna', 'Maria', 'Ira', 'Mattie', 'Dee', 'Joanne', 'Jo', 'Ellie', 'Elizabeth', 'Liz', 'Beth', 'Jess', 'Jessie', 'Charlotte', 'Breanna', 'Felicity', 'Molly', 'Mary', 'Brittany', 'Sarah', 'Sadie', 'Amanda', 'Stephanie', 'Nicole', 'Ashley', 'Samantha', 'Jennifer', 'Jen', 'Libby', 'Laura', 'Lauren', 'Amber', 'Heather', 'Rachel', 'Emmy', 'Dani', 'Danielle', 'Daniel', 'Lisa', 'Melissa', 'Sara', 'Christine', 'Christina', 'Chris', 'Kris', 'Amy', 'Katie', 'Kate', 'Katy', 'Alison', 'Al', 'Ali', 'Andrea', 'Andy', 'Andrew', 'Crystal', 'Courtney', 'Michelle', 'Misha', 'Erin', 'Anna', 'Ann', 'Kim', 'Karen', 'Lindsey', 'Kimberley', 'Chelsea', 'Kelly', 'Erica', 'Tiffany', 'Angela', 'Angie', 'Rebecca', 'Becca', 'Vanessa', 'Vic', 'Victoria', 'Victor', 'Katherine', 'Catherine', 'Alex', 'Alexa', 'Alexandra', 'Kayla', 'Alyssa', 'Jasmine', 'Hannah', 'Hana', 'Mohammed', 'Jamie', 'Caitlin', 'Christi', 'Kathryn', 'Shannon', 'Jenna', 'Cassandra', 'Cynthia', 'Julia', 'Holly', 'Ariel', 'Brandi', 'Alva', 'Saamiya', 'Fariha', 'Malak', 'Hanan', 'Azalea', 'Tarja', 'Lupe', 'Diya', 'Jin', 'Ming', 'Lien', 'Christopher', 'David', 'Dave', 'Dan', 'Matt', 'Matthew', 'Drew', 'Michael', 'Mick', 'Joshua', 'Arielle', 'James', 'Jim', 'Bob', 'William', 'Will', 'Wil', 'Anthony', 'Tony', 'Joseph', 'Joe', 'Jon', 'Jonathan', 'Nathan', 'Jack', 'Nick', 'Nicholas', 'Cole', 'Robert', 'Adrian', 'Sam', 'Samuel', 'Brandon', 'Ryan', 'Justin', 'Cody', 'Kyle', 'Travis', 'Zak', 'Zach', 'Jason', 'Jay', 'Kevin', 'Stephen', 'Eric', 'Tom', 'Thomas', 'Paul', 'Jeff', 'Jeffrey', 'Ben', 'Benjamin', 'Steven', 'Steve', 'Patrick', 'Dustin', 'Charles', 'Chaz', 'Ricky', 'Richard', 'Tyler', 'Aaron', 'Arin', 'Tim', 'Timothy', 'Sean', 'Mark', 'Alexander', 'Alek', 'Adam', 'Cory', 'Jordan', 'Ken', 'Kenneth', 'Brad', 'Shane', 'Pete', 'Peter', 'Marcus', 'Mo', 'Vincent', 'Derek', 'Shawn', 'Brian', 'Bryan', 'Scott', 'Evan', 'Greg', 'Gregory', 'Jared', 'Ian', 'Edward', 'Ed', 'Corey', 'Jesse', 'Trevor', 'Austin', 'Cameron', 'Devin', 'George', 'Joel', 'Brett', 'Erik', 'Mitchell', 'Casey', 'Keith', 'Ray', 'Phillip', 'Blake', 'Caleb', 'Ethan', 'Dylan', 'Gabe', 'Gabriel', 'Don', 'Donald', 'Chad', 'Ron', 'Ronald', 'Garrett', 'Seth', 'Derrik', 'Amir', 'Jacob', 'Jake', 'Doug', 'Logan', 'Gary', 'Mark', 'Marcus', 'Todd', 'Yaser', 'Hisham', 'Eli'];

    var surName = ['Smith', 'Johnson', 'Brown', 'Wilson', 'Jackson', 'Martin', 'Lee', 'Hill', 'Hall', 'Morris', 'Murphy', 'Davis', 'Moore', 'Williams', 'Williamson', 'Jones', 'Millar', 'Miller', 'Harris', 'Thomas', 'Robinson', 'Anderson', 'White', 'Thompson', 'Baker', 'Mitchell', 'Taylor', 'King', 'Malik', 'Walker', 'Campbell', 'Turner', 'Richmond', 'Phillips', 'Edwards', 'Clark', 'Greene', 'Green', 'Roberts', 'Robertson', 'Scott', 'Collins', 'Carter', 'Lewis', 'Evans', 'Nelson', 'Wright', 'Parker', 'Young', 'Allen', 'Webb', 'Daniels', 'Bell', 'Fisher', 'Fischer', 'Foster', 'Stewart', 'Willis', 'Hunt', 'Ferguson', 'Ford', 'Tucker', 'Gordon', 'Woods', 'Armstrong', 'Barnes', 'Hunter', 'Patterson', 'Matthews', 'Reynolds', 'Owens', 'Henderson', 'Cox', 'Powell', 'Peters', 'Burns', 'Myers', 'McDonald', 'Stephens', 'Arnold', 'Mohammed', 'Payne', 'Grant', 'Austin', 'Lawrence', 'Perry', 'Willem', 'Butler', 'Russell', 'Rogers', 'Harper', 'Hughes', 'Shaw', 'Brooks', 'Elliott', 'Hayes,', 'Dixon', 'Carpenter', 'Crawford', 'Bennett', 'Cooper', 'Fox', 'Hudson', 'Richardson', 'Stone', 'Hart', 'Cole', 'Hamilton', 'Holmes', 'Patterson', 'Woods', 'Sims', 'Day', 'Brent', 'Smyth', 'Woods-Hall', 'Bush', 'Grady', 'Field', 'Baker', 'Lynch', 'White', 'Adamson', 'Goodall', 'McLeod', 'MacLeod', 'MacDonald', 'Hamilton', 'London', 'Cooke', 'Cook', 'Ward', 'Rowland', 'Wilson', 'Roy', 'Gagnon', 'Cloutier', 'Watson', 'Walsh', 'Nadeau', 'Parsons', 'Trudeau', 'Singh', 'Grant', 'Davidson', 'Morin', 'Van', 'Young', 'Leblanc', 'Campbell', 'Gauthier', 'Bouchard', 'Belanger', 'Lavoie', 'Reid', 'Reed', 'Pelletier', 'Levesque', 'Wong', 'Ross', 'Kelly', 'Fortin', 'Murray', 'Girard', 'Graham', 'Chan', 'Woods', 'Wood', 'Ouellet', 'Dube', 'Allen', 'Hebert', 'Cameron'];

    function generateMail() {

        var randMail = ["outlook", "gmail", "live", "aol", "mail", "yahoo", "gmail", "rogers", "execulink", "gmail", "hotmail"];

        return randMail[~~(Math.random() * randMail.length)];
    }

  const res = await rp({
    method: 'POST',
    headers: {
      'X-CSRF-Token': token,
      'Referer': link,
      'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0'
    },
    uri: 'https://www.change.org/api-proxy/-/signatures/14015995',
    jar: cookieJar,
    json: true,
    body: {
      "petition_id": id,
      "country_code": "CA",
      "enable_human_verification": false,
      "page_context": "petitions_show",
      "briteform_token": "briteform_disabled_US_en-US",
      "first_name": firstName[~~(Math.random() * firstName.length)],
      "last_name": surName[~~(Math.random() * surName.length)],
      "email": randStr(5) + "@" + randMail() + ".com",
      "city": "London",
      'state_code': states[~~(Math.random() * states.length)],
      'postal_code': 'N6A'
      "marketing_comms_consent": null,
      "public": true,
    },
    resolveWithFullResponse: true
  });
  console.log("Status: " + res.statusCode);
}

sign()
setInterval(sign, interval);

function randStr(len) {
  let str = "";
  for (let i = 0; i < len; i++) str += "abcdefghijklmopqrstuvwxyz".charAt(Math.floor(Math.random() * 26));
  return str;
}