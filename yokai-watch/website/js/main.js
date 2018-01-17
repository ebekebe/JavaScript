// let yokai = require('./res/yokai.json');
let query;


$(document).ready(function(){
    let yokai = [];

    // Assign Default Values to Query Object
    query = {
        name: null,
        id: null,
        allowed_tribes: null,
        allowed_ranks: null
    };

    // Fetch yokai data from github and populate local list.
    $.ajax({
        url: "https://raw.githubusercontent.com/Digicrest/javascript/master/yokai-watch/json/wibble-wobble/eu/yokai.json",
        context: document.body,
        contentType: "text/plain",
        success: json => {
            json = JSON.parse(json);
            json.forEach(function(element) {
                yokai.push(element);
            }, this);
        },
    });

    // Create Variables from our UI Elements <NodeLists>
    let tribeIcons = document.querySelectorAll('.tribe-icon');
    let rankIcons = document.querySelectorAll('.rank-icon');
    let btnSubmit = document.getElementById('btn-submit');
    let lbl_results = document.getElementById('lbl-results');

    // Add a click event to every element in elements that will toggle greyscale
    function addToggle(elements){
        Array
            .from(elements)
            .forEach(icon => {
                icon.addEventListener('click', e => {
                    $(icon).hasClass('greyscale') ? 
                    $(icon).removeClass('greyscale') : 
                    $(icon).addClass('greyscale')
                }); 
            });
    }
    
    addToggle(tribeIcons);
    addToggle(rankIcons);

    // Set values for our global Query Object based on state of interface elements
    function createQuery(event){
        event.preventDefault();

        // find elements in list that do not have the class greyscale
        let findActive = list => Array.from(list).filter(icon => !$(icon).hasClass('greyscale'));

        let selectedTribes = findActive(tribeIcons).map(n => n.title);
        let selectedRanks = findActive(rankIcons).map(n => n.title);
        let searchTerm = null;

        let tempSearch = $('input')[0].value;
        
        if (tempSearch) {
            searchTerm = tempSearch;
        }

        if (parseInt(searchTerm)) {
            query.id = parseInt(searchTerm);
        } else {
            query.name = searchTerm;
        }
        query.allowed_tribes = selectedTribes;
        query.allowed_ranks = selectedRanks;
        console.log(query);
        queryData();
    }

    function queryData(){
        let results = [];

        // ========================QUERY FUNCTIONS==========================
        let format = str => JSON.stringify(str, null, 2);
        let print = str => console.log(format(str));
            
        let findByStr = (prop, arg) => yokai.filter(element => element[prop].toUpperCase() === arg.toUpperCase());
        let fuzzyFind = (prop, arg) => yokai.filter(element => element[prop].toUpperCase().includes(arg.toUpperCase()));

        // ========================SEARCH BY NAME===========================
        if(query.name !== null){
            let yokaiFoundByName = findByStr("name", query.name)[0];

            // If input matches a yokai name exactly, add to results
            if (yokaiFoundByName) { 
                results.push(yokaiFoundByName);
            } 
            // Otherwise if the input is found within a yokais name, return all matches
            else { 
                let yokaiFoundByFuzzy = fuzzyFind("name", query.name);

                if(yokaiFoundByFuzzy.length > 0){
                    yokaiFoundByFuzzy.forEach(yokai => results.push(yokai));
                }
            }
        }

        // ========================SEARCH BY ID=============================
        if(query.id !== null){
            let yokaiFoundByID = yokai.filter(n => n.id === query.id)[0];
            if(yokaiFoundByID){
                results.push(yokaiFoundByID);
            }
        }

        // ============================CLEAN UP=============================
        // first remove any yokai we have found so far that are being filtered via icons
        let prefilterCount = results.length;
        results = 
          results
            .filter(yokai => 
              query.allowed_tribes.includes(yokai.tribe) &&
              query.allowed_ranks.includes(yokai.rank));
        
        if (prefilterCount > results.length) {
            console.log((prefilterCount - results.length) + " yokai were found, but are not of the tribe or rank selected.");
        }

        // ===================APPLY ADDITIONAL FILTERS======================
        if (query.name === null && query.id === null) {
            yokai.filter(y =>
                (y.tribe === "Boss" && (query.allowed_ranks.length === 0 || query.allowed_ranks.length === rankIcons.length))
                ? query.allowed_tribes.includes(y.tribe) 
                : query.allowed_tribes.includes(y.tribe) && query.allowed_ranks.includes(y.rank)
            )
            .forEach(y => results.push(y));
        }        
        
        // ===================SCRAPE IMAGES======================
        

        console.log($.ajax({
            url: 'http://yokaiwatch.wikia.com/wiki/Jibanyan',
            dataType: 'json',
            method: 'GET',
            contentType: 'application/json; charset=utf-8',
            crossDomain: true
        }));

        print(results);
        lbl_results.textContent = format(results);
        query = {
            name: null,
            id: null,
            allowed_tribes: null,
            allowed_ranks: null
        };
    }
    
    btnSubmit.addEventListener('click', e => createQuery(e));
});