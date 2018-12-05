/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
    });

});
function Results(){
        var name = $("#name").val();
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var score = 0;
        q1Result = q1Result.toLowerCase();
        q2Result = q2Result.toLowerCase();
        q3Result = q3Result.toLowerCase();
        q4Result = q4Result.toLowerCase();
        console.log(q1Result);
        if(q1Result === "reading"){
            score = score + 1;
        }
        else if(q1Result === "sports"){
            score = score - 1;
        }
        else if(q1Result === "sleeping"){
            score = score;
        }
        else{
            score = score;
        }
        if(q2Result === "hot"){
            score = score -1;
        }
        else if(q2Result === "cold"){
            score = score + 1;
        }
        else if(q2Result === "indifferent"){
            score = score;
        }
        else{
            score=score;
        }
        if(q3Result === "cat"){
            score = score + 1;
        }
        else if(q3Result === "dog"){
            score = score -1;
        }
        else if(q3Result === "neither"){
            score = score;
        }
        else{
            score = score;
        }
        if(q4Result === "alone"){
            score = score + 1;
        }
        else if(q4Result === "groups"){
            score = score -1;
        }
        else if(q4Result === "either"){
            score = score;
        }
        else{
            score = score;
        }
        if(((q1Result !== "reading" && q1Result !== "sports" && q1Result !== "sleeping") || (q2Result !== "hot" && q2Result !== "cold" && q2Result !== "indifferent") || (q3Result !== "cat" && q3Result !== "dog" && q3Result !== "neither") || (q4Result !== "group" && q4Result !== "alone" && q4Result !== "either")) || (name === "")){
           $("#resultHTML").html("Please double check that you filled out the test correctly");
        }
        else if(score < -2){
            $("#resultHTML").html("Congratulations " + name + ", the results indicate that you are most like the season SUMMER!");
        }
        else if(score > 2){
            $("#resultHTML").html("Congratulations " + name + ", the results indicate that you are most like the season WINTER!");
        }
        else if(score >= -2 && score < 0){
            $("#resultHTML").html("Congratulations " + name + ", the results indicate that you are most like the season SPRING!");
        }
        else{
            $("#resultHTML").html("Congratulations " + name + ", the results indicate that you are most like the season FALL!");
        }
        
};
$("button").click(function(){
    Results();
    
});