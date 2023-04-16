let genres = [];
let years = [];
let language = [];
let ratings = [];
let data = [];
let certification = [];
let count = 0;

fetch('data.json')
    .then((response) => response.json())
    .then((json => {
        // data = JSON.parse(JSON.stringify(json));
        // for (let index = 0; index < json.length; index++) {
        //     data[index] = json[index];

        // }
        data.push(json);
        // console.log(json);
        // console.log(json[0].similar);
        // console.log(json[0].title);
        // console.log(json[0].vote_average);
        // let dt = json[0].release_date.slice(0, 4);
        // console.log(dt.slice(0, 4));
        // console.log("Following are simillar ");
        // console.log(json.length);
        // (json[0].similar).forEach(element => {
        //     console.log(element.title);
        // });
        (json).forEach(element => {
            // console.log(element.genres);
            // if (!genres.includes((element.genres).flat())) {
            //     genres.push((element.genres).flat())
            // }
            // console.log(element["release_date"][:4]);
            // element["genres"].forEach(element1 => {

            //     // if (!genres.includes(element1)) {
            //     //     genres.push((element1))
            //     // }

            // });

            let type = typeof element["genres"];

            if (type === 'object') {

                for (let index = 0; index < element["genres"].length; index++) {
                    if (!genres.includes(element["genres"][index])) {

                        genres.push(element["genres"][index]);
                    }

                }

            } else {
                if (!genres.includes(element["genres"])) {

                    genres.push(element["genres"]);
                }
                // genres.push(element["genres"][index]);
            }

            if (!language.includes(element.original_language)) {
                language.push(element.original_language);
            }

            if (!ratings.includes(element.vote_average)) {
                ratings.push(element.vote_average);
            }

            if (!certification.includes(element.certification)) {
                certification.push(element.certification);

            }
            // console.log(element["genres"], typeof element["genres"]);
            if (element.certification === undefined) {
                // console.log(element);
                count += 1;

            }
            if (!(years.includes(Number(element.release_date.slice(0, 4))))) {
                years.push(Number(element.release_date.slice(0, 4)));
            }

            // console.log(element.vote_average);
        });
        console.log(years.sort());
        // console.log(years[0]);
        console.log(genres.sort());
        console.log(language.sort());
        console.log(ratings.sort());
        // console.log(data[0]);
    }
    ));
// console.log(years)
console.log(data);
// console.log(count);
// data = data[0];