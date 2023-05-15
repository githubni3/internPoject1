/* toggle between hiding and showing the edit_option_list */

function toggleList(n) {
  document.getElementsByClassName("edit_option_list")[n-1].classList.toggle("show");
}

// Close the edit_option_list menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.post_edit')) {
    var dropdowns = document.getElementsByClassName("edit_option_list");
    // console.log(dropdowns)
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (!openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const follow = (n) =>{
  const btn = document.getElementsByClassName("follow_btn")[n-1];
  if(btn.classList.contains('followed')){
    btn.innerHTML = 'follow';
    btn.classList.remove('followed');
  }
  else{
    btn.innerHTML = 'followed';
    btn.classList.add('followed');
  }
}


// function to stop scrolling of window it will execute when modal is open 

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
  window.onscroll = function() {};
}


const closeModal =()=>{
  document.getElementById('outer_modal').classList.replace('show','hide');
  document.getElementById('homePageImg').classList.toggle('blur');
  document.getElementById('content').classList.toggle('blur');
  enableScroll();
}

const login = ()=>{
  document.getElementById('outer_modal').classList.replace('hide','show');
  document.getElementById('homePageImg').classList.toggle('blur');
  document.getElementById('content').classList.toggle('blur');
  disableScroll();
}



// function to switch betweemn signup form to signIn form and vice-versa

const changeForm = ()=>{
  const forms = document.getElementsByClassName('modalForm');
  const side = document.getElementsByClassName('side');

  if(forms[0].classList.contains('hide')){
    forms[0].classList.remove('hide');
    forms[1].classList.add('hide')
    side[0].classList.remove('hide');
    side[1].classList.add('hide')
  }
  else{
    forms[1].classList.remove('hide');
    forms[0].classList.add('hide')
    side[1].classList.remove('hide');
    side[0].classList.add('hide')
  }
}

const toggleMenu = ()=>{
  document.getElementsByClassName("drop_list")[0].classList.toggle("show");
}


// funtion for closing and opting the form modal on mobile device

const close_mob_login = () =>{
  document.getElementById("mob_modal").classList.toggle('show_mob_modal')
}
const mob_login = () =>{
  document.getElementById("mob_modal").classList.toggle('show_mob_modal')
}



// funtion to change the signiup and signin forms in mobile device

const mob_changeForm = (n)=>{
  const forms = document.getElementsByClassName('mob_modalForm');
  forms[0].classList.toggle('hide');
  forms[1].classList.toggle('hide');
  if(n===1){
    document.getElementById('mob_form_title').innerHTML = 'Welcome back!'
  }
  else{
    document.getElementById('mob_form_title').innerHTML = 'Create Account'

  }
}