// (
//     async () => {

//         const response = await fetch('./data.json');
//         const data = await response.json();

//         let getGenre = () => {
//             let genres = [];
//             data.forEach(element => {
//                 (element['genres']).forEach(genre => {
//                     if (!genres.includes(genre)) {
//                         genres.push(genre);
//                     }
//                 });
//             });
//             return genres.sort();
//         }

//         let getLanguages = () => {
//             let language = [];
//             data.forEach(element => {
//                 if (!language.includes(element.original_language)) {
//                     language.push(element.original_language);
//                 }
//             });
//             return languages.sort();
//         }

//         let getRatings = () => {
//             let ratings = [];
//             data.forEach(element => {
//                 if (!ratings.includes(element.vote_average)) {
//                     ratings.push(+element.vote_average);
//                 }
//             });
//             return ratings.sort();
//         }

//         let getYears = () => {
//             let years = [];
//             data.forEach(element => {
//                 let date = element.release_date.split('-')
//                 let year = date[0]
//                 if (years.includes(+year) == false) {
//                     years.push(+year);
//                 }
//             });
//             return years.sort();
//         }

//         let genres = getGenre();
//         let languages = getLanguages();
//         let ratings = getRatings();
//         let years = getYears();

//         let genreField = document.getElementById('genreField');
//         let yearField = document.getElementById('yearField');
//         let languageField = document.getElementById('languageField');
//         let ratingField = document.getElementById('ratingField');
//         let resultsTable = document.getElementById('resultsTable');

//         const setResultItems = (i, data) => {
//             let movieCellData = document.createElement('div');
//             movieCellData.className = 'movieCellData';
//             let movieCellImg = document.createElement('img');
//             let movieCellDetail = document.createElement('div');
//             movieCellDetail.className = 'movieCellDetail';
//             let movieDetailH2 = document.createElement('h3');
//             let movieDetailPara = document.createElement('p');
//             movieCellImg.src = "https://image.tmdb.org/t/p/w45" + data.poster_path;
//             movieDetailH2.innerHTML = data.title;
//             movieDetailPara.innerHTML = `<span style="border:1px solid black; border-radius:3px; padding:2px;">${data.certification}</span> ${data.genres.map((genre) => genre)} ${Math.floor(data.runtime / 60)}h${data.runtime % 60}m `
//             movieCellData.appendChild(movieCellImg);
//             movieCellData.appendChild(movieCellDetail);
//             movieCellDetail.appendChild(movieDetailH2)
//             movieCellDetail.appendChild(movieDetailPara)
//             let resultsTable = document.getElementById('resultsTable');
//             let row = resultsTable.insertRow();
//             let rankCell = row.insertCell(0);
//             let movieCell = row.insertCell(1);
//             let yearCell = row.insertCell(2);
//             rankCell.innerHTML = i;
//             movieCell.appendChild(movieCellData);
//             yearCell.innerHTML = `${data.release_date.split('-')[0]}`;
//             rankCell.style.textAlign = "center";
//         }
//         const filterChange = () => {
//             let filterData = data.filter((dataObj) => {
//                 return genreField.value !== 'All' ? dataObj.genres.includes(genreField.value) : dataObj;
//             })
//             filterData = filterData.filter((dataObj) => {
//                 return yearField.value !== 'All' ? dataObj.release_date.includes(yearField.value) : dataObj;
//             })
//             filterData = filterData.filter((dataObj) => {
//                 return languageField.value !== 'All' ? dataObj.original_language.includes(languageField.value) : dataObj;
//             })
//             filterData = filterData.filter((dataObj) => {
//                 return ratingField.value !== 'All' ? dataObj.vote_average == ratingField.value : dataObj;
//             })
//             console.log(filterData);
//             resultsTable.innerHTML = '';
//             let loadingDiv = document.createElement('div');
//             loadingDiv.className = 'loadingDiv'
//             let loading = document.createElement('img');
//             loading.src = './loading.gif';
//             // loading.className = 'loadingImg'

//             loadingDiv.appendChild(loading);
//             resultsTable.appendChild(loadingDiv);


//             setTimeout(() => {
//                 resultsTable.innerHTML = `
//                 <thead>
//                     <tr>
//                         <th>Rank</th>
//                         <th width="70%" style="text-align: left;">Movie</th>
//                         <th>Year</th>
//                     </tr>
//                 </thead>
//                 `;
//                 filterData.forEach((data, i) => setResultItems(i + 1, data));
//             }, 3000);
//         }

//         let setOptions = (element, data) => {
//             data.forEach(value => {
//                 let opt = document.createElement('option');
//                 opt.value = value;
//                 opt.text = value;
//                 element.appendChild(opt)
//             });
//             element.addEventListener('change', filterChange);
//         }

//         setOptions(genreField, genres);
//         setOptions(yearField, years);
//         setOptions(languageField, languages);
//         setOptions(ratingField, ratings);

//     }
// )()













// let data = [];
// let certification = [];
// let count = 0;

// fetch('data.json')
//     .then((response) => response.json())
//     .then((json => {
//         // data = JSON.parse(JSON.stringify(json));
//         // for (let index = 0; index < json.length; index++) {
//         //     data[index] = json[index];

//         // }
//         data.push(json);
//         // console.log(json);
//         // console.log(json[0].similar);
//         // console.log(json[0].title);
//         // console.log(json[0].vote_average);
//         // let dt = json[0].release_date.slice(0, 4);
//         // console.log(dt.slice(0, 4));
//         // console.log("Following are simillar ");
//         // console.log(json.length);
//         // (json[0].similar).forEach(element => {
//         //     console.log(element.title);
//         // });
//         (json).forEach(element => {
//             // console.log(element.genres);
//             // if (!genres.includes((element.genres).flat())) {
//             //     genres.push((element.genres).flat())
//             // }
//             // console.log(element["release_date"][:4]);
//             // element["genres"].forEach(element1 => {

//             //     // if (!genres.includes(element1)) {
//             //     //     genres.push((element1))
//             //     // }

//             // });

//             let type = typeof element["genres"];

//             if (type === 'object') {

//                 for (let index = 0; index < element["genres"].length; index++) {
//                     if (!genres.includes(element["genres"][index])) {

//                         genres.push(element["genres"][index]);
//                     }

//                 }

//             } else {
//                 if (!genres.includes(element["genres"])) {

//                     genres.push(element["genres"]);
//                 }
//                 // genres.push(element["genres"][index]);
//             }

//             if (!language.includes(element.original_language)) {
//                 language.push(element.original_language);
//             }

//             if (!ratings.includes(element.vote_average)) {
//                 ratings.push(element.vote_average);
//             }

//             if (!certification.includes(element.certification)) {
//                 certification.push(element.certification);

//             }
//             // console.log(element["genres"], typeof element["genres"]);
//             if (element.certification === undefined) {
//                 // console.log(element);
//                 count += 1;

//             }
//             if (!(years.includes(Number(element.release_date.slice(0, 4))))) {
//                 years.push(Number(element.release_date.slice(0, 4)));
//             }

//             // console.log(element.vote_average);
//         });
//         console.log(years.sort());
//         // console.log(years[0]);
//         console.log(genres.sort());
//         console.log(language.sort());
//         console.log(ratings.sort());
//         // console.log(data[0]);
//     }
//     ));
// // console.log(years)
// console.log(data);
// // console.log(count);
// // data = data[0];



(
    async () => {

        const response = await fetch('./data.json');
        const data = await response.json();

        let extractGenre = () => {
            let allGenres = [];
            data.forEach(element => {
                element.genres.forEach(genre => {
                    if (allGenres.includes(genre) == false) {
                        allGenres.push(genre);
                    }
                });
            });
            return allGenres.sort();
        }

        let extractLanguages = () => {
            let allLanguages = [];
            data.forEach(element => {
                if (allLanguages.includes(element.original_language) == false) {
                    allLanguages.push(element.original_language);
                }
            });
            return allLanguages.sort();
        }

        let extractRatings = () => {
            let allRatings = [];
            data.forEach(element => {
                if (allRatings.includes(element.vote_average) == false) {
                    allRatings.push(+element.vote_average);
                }
            });
            return allRatings.sort();
        }

        let extractYears = () => {
            let allYears = [];
            data.forEach(element => {
                let date = element.release_date.split('-')
                let year = date[0]
                if (allYears.includes(+year) == false) {
                    allYears.push(+year);
                }
            });
            return allYears.sort();
        }

        let genres = extractGenre();
        let languages = extractLanguages();
        let ratings = extractRatings();
        let years = extractYears();

        let genreField = document.getElementById('genreField');
        let yearField = document.getElementById('yearField');
        let languageField = document.getElementById('languageField');
        let ratingField = document.getElementById('ratingField');
        let resultsTable = document.getElementById('resultsTable');

        const setResultItems = (i, data) => {
            let movieCellData = document.createElement('div');
            movieCellData.className = 'movieCellData';
            let movieCellImg = document.createElement('img');
            let movieCellDetail = document.createElement('div');
            movieCellDetail.className = 'movieCellDetail';
            let movieDetailH2 = document.createElement('h3');
            let movieDetailPara = document.createElement('p');
            movieCellImg.src = "https://image.tmdb.org/t/p/w45" + data.poster_path;
            movieDetailH2.innerHTML = data.title;
            movieDetailPara.innerHTML = `<span style="border:1px solid black; border-radius:3px; padding:2px;">${data.certification}</span> ${data.genres.map((genre) => genre)} ${Math.floor(data.runtime / 60)}h${data.runtime % 60}m `
            movieCellData.appendChild(movieCellImg);
            movieCellData.appendChild(movieCellDetail);
            movieCellDetail.appendChild(movieDetailH2)
            movieCellDetail.appendChild(movieDetailPara)
            let resultsTable = document.getElementById('resultsTable');
            let row = resultsTable.insertRow();
            let rankCell = row.insertCell(0);
            let movieCell = row.insertCell(1);
            let yearCell = row.insertCell(2);
            rankCell.innerHTML = i;
            movieCell.appendChild(movieCellData);
            yearCell.innerHTML = `${data.release_date.split('-')[0]}`;
            rankCell.style.textAlign = "center";
        }
        const filterChange = () => {
            let filterData = data.filter((dataObj) => {
                return genreField.value !== 'All' ? dataObj.genres.includes(genreField.value) : dataObj;
            })
            filterData = filterData.filter((dataObj) => {
                return yearField.value !== 'All' ? dataObj.release_date.includes(yearField.value) : dataObj;
            })
            filterData = filterData.filter((dataObj) => {
                return languageField.value !== 'All' ? dataObj.original_language.includes(languageField.value) : dataObj;
            })
            filterData = filterData.filter((dataObj) => {
                return ratingField.value !== 'All' ? dataObj.vote_average == ratingField.value : dataObj;
            })
            console.log(filterData);
            resultsTable.innerHTML = '';
            let loadingDiv = document.createElement('div');
            loadingDiv.className = 'loadingDiv'
            let loading = document.createElement('img');
            loading.src = './loading.gif';
            // loading.className = 'loadingImg'

            loadingDiv.appendChild(loading);
            resultsTable.appendChild(loadingDiv);


            setTimeout(() => {
                resultsTable.innerHTML = `
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th width="70%" style="text-align: left;">Movie</th>
                        <th>Year</th>
                    </tr>
                </thead>
                `;
                filterData.forEach((data, i) => setResultItems(i + 1, data));
            }, 3000);
        }

        let setOptions = (element, data) => {
            data.forEach(value => {
                let opt = document.createElement('option');
                opt.value = value;
                opt.text = value;
                element.appendChild(opt)
            });
            element.addEventListener('change', filterChange);
        }

        setOptions(genreField, genres);
        setOptions(yearField, years);
        setOptions(languageField, languages);
        setOptions(ratingField, ratings);

    }
)()