var questions = [{ques: "What is your gender?", ques_note: "", choices: ['Male', 'Female', 'Transgender (M - F)', 'Transgender (F - M)', 'Non-binanry', 'Gender fluid', 'Other'], type: "radio", width: '265px'},
                {ques: "How old are you?", ques_note: "", choices: ['18 - 30', '31 - 45', '46 - 60', '60+'], type: "radio", width: '265px'},
                {ques: "How do you Identify your self?", ques_note: "", choices: ['Straight', 'Gay', 'Lesbian', 'Bisexual', 'Asexual', 'I don’t know', 'Other'], type: "radio", width: '265px'},
                {ques: "What is your relationship status?", ques_note: "", choices: ['Single', 'In a relationship', 'Married', 'Divorced', 'Widowed', 'Other'], type: "radio", width: '265px'},
                {ques: "When was the last time you thought about suicide?", ques_note: "", choices: ['Never', 'Over a year ago', 'Over 3 months ago','Over a month ago', 'Over 2 weeks ago', 'In the last 2 weeks'], type: "radio", width: '265px'},
                {ques: "Which religion do you identify with?", ques_note: "", choices: ['Christianity', 'Judaism', 'Islam','Hindu', 'Spiritual', 'Other'], type: "radio", width: '265px'},
                {ques: "Have you ever been in counseling or therapy before?", ques_note: "", choices: ['Yes', 'No'], type: "radio", width: '265px'},
                {ques: "Are you currently experiencing overwhelming sadness, grief, or depression?", ques_note: "", choices: ['Yes', 'No'], type: "radio", width: '265px'},
                {ques: "Are you currently employed?", ques_note: "", choices: ['Yes', 'No'], type: "radio", width: '265px'},
                {ques: "Are you currently taking any medication?", ques_note: "", choices: ['Yes', 'No'], type: "radio", width: '265px'},
                {ques: "Are you currently experiencing anxiety, panic attacks or have any phobias?", ques_note: "", choices: ['Yes', 'No'], type: "radio", width: '265px'},
                {ques: "Are you currently experiencing any chronic pain?", ques_note: "", choices: ['Yes', 'No'], type: "radio", width: '265px'},
                {ques: "Would you like to remain anonymous during therapy?", ques_note: "", choices: ['Yes', 'No'], type: "radio", width: '265px'},
                {ques: "I'm financially impacted by the Coronavirus outbreak?", ques_note: "", choices: ['Yes', 'No'], type: "radio", width: '265px'},
                {ques: "How would you rate your current financial status?", ques_note: "", choices: ['Very Good', 'Good', 'Fair', 'Poor', 'Very Bad'], type: "radio", width: '265px'},
                {ques: "How would you rate your current sleeping habits?", ques_note: "", choices: ['Very Good', 'Good', 'Fair', 'Poor', 'Very Bad'], type: "radio", width: '265px'},
                {ques: "How would you rate your current physical health?", ques_note: "", choices: ['Very Good', 'Good', 'Fair', 'Poor', 'Very Bad'], type: "radio", width: '265px'},
                {ques: "How would you rate your current eating habits?", ques_note: "", choices: ['Very Good', 'Good', 'Fair', 'Poor', 'Very Bad'], type: "radio", width: '265px'},
                {ques: "Little interest or pleasure in doing things.", ques_note: "Over the past 4 weeks, how often have you been bothered by the following problem", choices: ['Not at all', 'Several days', 'A month', 'Half day', 'Every day'], type: "radio", width: '265px'},
                {ques: "Feeling down, depressed or hopeless.", ques_note: "Over the past 4 weeks, how often have you been bothered by the following problem", choices: ['Not at all', 'Several days', 'A month', 'Half day', 'Every day'], type: "radio", width: '265px'},
                {ques: "How hard have these issues been for you to do your job, to take care of things at home, or to get along with others?", ques_note: "Over the past 4 weeks, how often have you been bothered by the following problem", choices: ['Not at all', 'Several days', 'A month', 'Half day', 'Every day'], type: "radio", width: '265px'},
                {ques: "Feeling tired or having little energy", ques_note: "Over the past 4 weeks, how often have you been bothered by the following problem", choices: ['Not at all', 'Several days', 'A month', 'Half day', 'Every day'], type: "radio", width: '265px'},
                {ques: "Moving or speaking so slowly that other people could have noticed? Or the opposite -being restless that you have been moving around a lot.", ques_note: "Over the past 4 weeks, how often have you been bothered by the following problem", choices: ['Not at all', 'Several days', 'A month', 'Half day', 'Every day'], type: "radio", width: '265px'},
                {ques: "Thought of hurt your self", ques_note: "Over the past 4 weeks, how often have you been bothered by the following problem", choices: ['Not at all', 'Several days', 'A month', 'Half day', 'Every day'], type: "radio", width: '265px'},
                {ques: "Thoughts that you would be better off dead or of hurting yourself in some way.", ques_note: "Over the past 4 weeks, how often have you been bothered by the following problem", choices: ['Not at all', 'Several days', 'A month', 'Half day', 'Every day'], type: "radio", width: '265px'},
                {ques: "Trouble falling asleep, staying asleep, or sleeping too much.", ques_note: "Over the past 4 weeks, how often have you been bothered by the following problem", choices: ['Not at all', 'Several days', 'A month', 'Half day', 'Every day'], type: "radio", width: '265px'},
                {ques: "Poor appetite or overeating.", ques_note: "Over the past 4 weeks, how often have you been bothered by the following problem", choices: ['Not at all', 'Several days', 'A month', 'Half day', 'Every day'], type: "radio", width: '265px'},
                {ques: "Which best describes the nature of the counseling you are seeking?", ques_note: "", choices: ['Mental health counseling from a Christian perspective', 'Spiritual counseling on primarily faith-based matters', 'Holistic counseling addressing both psychological and spiritual components', 'Other'], type: "radio", width: '926px'},
                {ques: "Please mark all that applies to you", ques_note: "You can choose more than one option", choices: ['I’m a student', 'I’m a veteran', 'I’m disabled', 'I’m unemployed', 'I’m employed but low income'], type: "checkbox", width: '280px'},
                {ques: "Please select your option", ques_note: "You can choose more than one option", choices: ['Trauma and abuse', 'Family conflicts', 'Parenting issues', 'Family problems', 'Eating disorders', 'Compulsions/OCD', 'Attachment issues', 'Guilt and shame', 'Self esteem', 'Domestic violence', 'Isolation/loneliness', 'Career difficulties', 'Mood disorders', 'Sleeping disorders', 'Bipolar disorder'], type: "checkbox", width: '265px'},
                {ques: "Please select your option", ques_note: "You can choose more than one option", choices: ['Intimacy-related issues', 'Process addiction (porn,gambling)', 'Divorce and separation', 'Drug and alcohol addiction', 'Antisocial personality', 'Dependent personality', 'Money and financial issues', 'Compassion fatigue', 'Compassion fatigue', 'Anger management'], type: "checkbox", width: '455px'},];
var ques_counter = 0;

var selections = []  //selected answers stored here

function getStarted(){
document.getElementsByClassName('home')[0].style.display = 'none';
document.getElementsByClassName('getstarted_screen')[0].style.display = 'block';
document.getElementById('f1').style.display = 'none';
document.getElementById('f2').style.display = 'none';
document.getElementById('f3').style.display = 'none';
}

//triggered when "start now" button is clicked
function startnow(){
document.getElementsByClassName('initial_screen')[0].style.display = "none";
$(".qa").show();
$("#progress").css("display","flex");
question()
}

//triggered when radio btn is clicked
function selected(value){

selections[ques_counter] = value
ques_counter += 1

animationfunc();
setTimeout(() => {
  question()
}, 500);
console.log(selections)  //console
}

function animationfunc(){
  $("#ques_ans").removeClass("enter-animation").addClass("leave-animation").removeClass("enter-animation_reverse");
  setTimeout(() => {
  $("#ques_ans").removeClass("leave-animation").addClass("enter-animation");
  }, 500);
}
function reverseanimationfunc(){
  if(ques_counter<0){
    return;
  }
  $("#ques_ans").removeClass("enter-animation_reverse").addClass("leave-animation_reverse");
  setTimeout(() => {
  $("#ques_ans").removeClass("leave-animation_reverse").addClass("enter-animation_reverse");
  }, 500);
  
}

//triggered when next btn is clicked
function next_ques(){
  // animationfunc();
let selected_checkboxes = []
questions[ques_counter].choices.map((val, index) => {
if(document.getElementById(`flexRadioDefault${index+1}`).checked){
selected_checkboxes.push(document.getElementById(`flexRadioDefault${index+1}`).value)
}
})
if(selected_checkboxes.length === 0){
// alert("Please select atleast one.")
// toast.show();
// $(".toast-container").addClass("show");
$(".toast-container").removeClass("d-none");
$(".toast").addClass("show");
$(".toast").removeClass("hide");
setTimeout(function() {
  $(".toast").addClass("hide");
  $(".toast").removeClass("show");
  $(".toast-container").addClass("d-none");
  }, 3000);
$(".toast-btn-close").click(function(){
$(".toast").addClass("hide");
// $(".toast").addClass("fade");
})
} else {
// $(".toast-container").addClass("show");
$(".toast-container").addClass("d-none");
$(".toast").removeClass("show");
$(".toast").addClass("hide");
selections[ques_counter] = selected_checkboxes
ques_counter += 1
console.log(selections) //console
if((ques_counter) !== questions.length){
animationfunc();
setTimeout(() => {
  question()
}, 500);
}}
}
function prev_ques(){
ques_counter -= 1
reverseanimationfunc();
setTimeout(() => {
  question()
}, 500);
console.log(ques_counter);
}

//question and choices generator
function question(){
let choices_buttons = ''
let val
if(ques_counter !== 0){
document.getElementById('back-div').style.display = 'block'
document.getElementById('tooltip').style.display = 'inline-flex'
document.getElementById('tooltip').innerHTML = `${ques_counter>0 ? Math.round((((550/questions.length)/550)*ques_counter)*100):0}% completed. Great going!`
document.getElementById('progress_bar').style.width = `${($(".p-div").width()/questions.length)*ques_counter}px`
console.log($(".p-div").width());
}else{
document.getElementById('back-div').style.display = 'none'
document.getElementById('progress_bar').style.width = '0px'
// document.getElementById('back').style.display = 'none'
document.getElementById('tooltip').style.display = 'none'
}
document.getElementById('question_ans').innerHTML = questions[ques_counter].ques
document.getElementById('question_ans_note').innerHTML = questions[ques_counter].ques_note
if(questions[ques_counter].type === "radio"){
document.getElementById("nq").style.display = 'none'
questions[ques_counter].choices.map((val, index) => {
  console.log(val);
  console.log(selections[ques_counter] );
if(selections[ques_counter] === val){
choices_buttons += `<div onclick="selected()" id="choicesbtn" class="choice-btn"><input (\'${val}\')" style="cursor: 'pointer';" type='radio' class="radio" onclick="fade()" name="flexRadioDefault" id="flexRadioDefault${index+1}" checked><label for="flexRadioDefault${index+1}" style=" cursor: pointer;font-weight: 700;font-size: 18px;margin-left: 10px; color: rgba(255, 255, 255, 0.9); ">${val}</label></div>`
}else{
choices_buttons += `<div onclick="selected()" id="choicesbtn" class="choice-btn"><input (\'${val}\')" style="cursor: pointer;" type="radio" class="radio" onclick="fade()" name="flexRadioDefault" id="flexRadioDefault${index+1}"><label for="flexRadioDefault${index+1}" style=" cursor: pointer;font-weight: 700;font-size: 18px;margin-left: 10px; color: rgba(255, 255, 255, 0.9); ">${val}</label></div>`
}
})
} else {
if(questions.length === ques_counter+1){
document.getElementById("nq").style.display = 'none'
$('#signin_bottom').removeClass('d-none'); 
} else {
document.getElementById("nq").style.display = 'flex'
$('#signin_bottom').addClass('d-none'); 
// document.getElementById("signin_bottom").style.display = 'none'
}
questions[ques_counter].choices.map((val, index) => {
if((selections.length !== ques_counter) && selections[ques_counter].includes(val)){
choices_buttons += `<div id="choicesbtn" class="choice-btn2" style=" cursor: pointer;"><input style=" cursor: pointer;" class="form-check-input" type="checkbox" value="${val}" id="flexRadioDefault${index+1}" checked><label class="form-check-label" for="flexRadioDefault${index+1}" style=" cursor: pointer;font-weight: 700;font-size: 13px;margin-left: 10px; color: rgba(255, 255, 255, 0.9); width: ${questions[ques_counter].width}">${val}</label></div>`
}else{
choices_buttons += `<div id="choicesbtn" class="choice-btn2" style=" width=50%; cursor: pointer;"><input style=" cursor: pointer; class="form-check-input" type="checkbox" value="${val}" id="flexRadioDefault${index+1}"><label class="form-check-label" for="flexRadioDefault${index+1}" style=" cursor: pointer;font-weight: 700;font-size: 13px;margin-left: 10px;color: rgba(255, 255, 255, 0.9); width: ${questions[ques_counter].width}">${val}</label></div>`
}
})
}
document.getElementById('btn_grp').innerHTML = choices_buttons
console.log(questions[ques_counter].width);
}

// var pc= document.getElementById("pricing-carousel");
// var pcont= document.getElementById("pricing-cont");
// var pch= document.querySelectorAll(".pricing-card-holder");

var x = window.matchMedia("(max-width: 992px)");
var y = window.matchMedia("(min-width: 993px)");
var progressbar_width;
carousel_switch(x);
pc_switch(y);

function carousel_switch(x){
  if(x.matches){
    $("#pricing-carousel").addClass("carousel slide");
    $("#pricing-cont").removeClass("pc-cont").addClass("carousel-inner");
    $(".pricing-card-holder").addClass("carousel-item");
    $("#pc-2").removeClass("card-active");
  }
}
function pc_switch(y){
  if(y.matches){
    $("#pricing-carousel").removeClass("carousel slide");
    $("#pricing-cont").addClass("pc-cont").addClass("carousel-inner");
    $(".pricing-card-holder").removeClass("carousel-item");
    $("#pc-2").addClass("card-active");
  }
}



$(window).resize(function(){
  carousel_switch(x);
  pc_switch(y);
  progressbar_width=($(".p-div").width()/questions.length)*ques_counter
  $("#progress_bar").width(progressbar_width);
});

function textchange(val){
  var id= document.getElementsByClassName("toc-dropdown-text")[val];
  $("#dropdownMenuButton1").html(id.innerHTML);
  // console.log(id.innerHTML);
}

$(".sm-active").keyup(function(){
  var characterCount = $(this).val();
  $(this).text(characterCount);
  if(characterCount!="")
  {
    $(".sm-form-btn").removeClass("disabled");
  }
  else{
    $(".sm-form-btn").addClass("disabled")
  }
});

  console.log($(".sm-active").innerHTML);

  $(".nav-item").click(function(){
    $(this).prevAll().children(".nav-link").removeClass("nav-link-active");    
    $(this).nextAll().children(".nav-link").removeClass("nav-link-active");    
    $(this).children(".nav-link").addClass("nav-link-active");    
  });
