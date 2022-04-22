const cors = require("cors")
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())   //eta hocche arekta miidleware eta chara server site er data amra client site e pabo na.
app.use(express.json())   //eta hocche arekta middlware eta diye aamder post data jokhon aashbe tokhon eta take json e convert kore dibe.eta user na korle error dibe.data ashbe na.
app.get("/", (req, res) => {
    res.send("BISMILLAH, i can code Node now,Yayy !!! also added auto restart")
});

const users = [
    { id: 1, name: "shabana", email: "shabana@gmail.com", phone: "01788888888" },
    { id: 2, name: "shabnoor", email: "shabnoor@gmail.com", phone: "01788888888" },
    { id: 3, name: "shuchorita", email: "shuchorita@gmail.com", phone: "01788888888" },
    { id: 4, name: "sabila", email: "sabila@gmail.com", phone: "01788888888" },
    { id: 5, name: "shohana", email: "shohana@gmail.com", phone: "01788888888" },
    { id: 6, name: "sabikun", email: "sabikun@gmail.com", phone: "01788888888" },
    { id: 7, name: "sofia", email: "sofia@gmail.com", phone: "01788888888" },
]
// app.get("/users", (req, res) => {
//     res.send(users)
// });
app.get("/users", (req, res) => {
    // filter by search query parameter
    if (req.query.name) {   //amra jerokom users theke id diye user ke find kore ber kore anchi. sekhane amra find user korechi karon ekjoner ektai id.ar amra ekhane query diye search diye ber kore antechi name diye.query hocche ? mark er por jodi keu kichu diye search kore jemon amra ekhane name diye search korar kaj kortechi.tai joid keu name diye search kortechi setake query diye nicchi.ebong amader amader name diye serach kore ber korar karone amader user er name same hote pare oneker ebong sekhetre onek result ashte pare tai amra ekhane filter use korechi.
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }
});
app.get("/user/:id", (req, res) => {   //ekahne amader user er pore je ongsho ta ache seta holo dynamic.mane je user er id diye search dibe se user ke pabe. ar ei id ta holo amamder users array er index.tai eikhane user/id mane 1,2,3 jai dek amader array te totogulo thakle segulo pabe.
    //find by api parameter
    console.log(req.params)
    const id = parseInt(req.params.id)  //eta hoccche amra user er por je dynamic onghso ta diye search dibo seta.ei id ta hocche amader ke se rquest pathabe je ei id te keu ache kina.mane ekhane req.params.id ta hocche amrajerokon useParams diye pore nitam dynamic vabe name same thakto. etao hocche /user/id jei id ta amra dichi etai seta name ta same thakte hobe nahole params porte parbe na.
    const user = users.find(u => u.id === id)
    //uporer line e amra user ke pabo seta obosshoi users e thakbe. tai amra users er upor find chalabo ebong amra user pabo.sekhane amra dekhbo je amra je id diye search kortechi se id ebong amader user e thaka id match kore kina. match korle seta return korbe.ebong evabe dynamic vabe user pawar valo upay.
    res.send(user)
    //tarpr amader jodi kono result return kore mane match kore tarmane se holo response amader user je request koreche setar response.tahole amra ekhan theke take mane response pawagele take send kore dibo. 
})
app.post("/user", (req, res) => {  //ekhane amra post recieve korbo.
    console.log(req.body)
    const user = req.body   //amader user ashbe hocche req er body te .mane amader data gulo ashbe req er body te.
    user.id = users.length + 1;   //ekhane amra amader user er id set korlam jehehtu amader user amra users e rakhbo tai amader user ke users er length cheye ek baraya dite hobe id.
    users.push(user)
    res.send(user)
})
app.get("/fruits", (req, res) => {
    res.send(["apple", "mango", "lichi", "guava", "jackfruit"])
});
app.get("/fruit/mango/fazli", (req, res) => {
    res.send("sour sour mango flavour")
})
app.listen(port, () => {
    console.log("Listening to port", port)
})