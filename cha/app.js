d3.csv("xuma_forfudan.csv", function(data) {
    var dictionary = data;
    var button = d3.select("#button");
    var form = d3.select("#form");
    button.on("click", runEnter);
    form.on("submit", runEnter);

    // Defining the function
    function runEnter() {
        d3.select("tbody").html("")
        d3.event.preventDefault();
        var inputValue = d3.select("#user-input").property("value");
        var filteredDictionary =
            dictionary.filter(dictionary => dictionary.char.includes(inputValue));
        var output = _.sortBy(filteredDictionary, 'pinyin')
        for (var i = 0; i < filteredDictionary.length; i++) {
            d3.select("tbody").insert("tr").html(
                "<td>" + (output[i]['char']) + "</td>" +
                "<td>" + (output[i]['pinyin']) + "</td>" +
                "<td>" + (output[i]['division']) + "</td>" +
                "<td>" + (output[i]['code']) + "</td>")
        }
    };
});