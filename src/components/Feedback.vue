<template>


<div id="full-stars-example-two">
    <div class="rating-group">
        <input disabled checked class="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio">
        <label aria-label="1 star" class="rating__label" for="rating3-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
        <input class="rating__input" name="rating3" id="rating3-1" value="2" type="radio" v-model="nota">
        <label aria-label="2 stars" class="rating__label" for="rating3-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
        <input class="rating__input" name="rating3" id="rating3-2" value="4" type="radio" v-model="nota">
        <label aria-label="3 stars" class="rating__label" for="rating3-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
        <input class="rating__input" name="rating3" id="rating3-3" value="6" type="radio" v-model="nota">
        <label aria-label="4 stars" class="rating__label" for="rating3-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
        <input class="rating__input" name="rating3" id="rating3-4" value="8" type="radio" v-model="nota">
        <label aria-label="5 stars" class="rating__label" for="rating3-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
        <input class="rating__input" name="rating3" id="rating3-5" value="10" type="radio" v-model="nota">
    </div>
  <p class="desc" style="font-family: sans-serif; font-size:2.0rem">Senai Food<br/></p>

   <div class="desc"> 

    <textarea name="descricao" id="descricao" placeholder="Digite sua opinião aqui..." v-model="descricao" maxlength="280"> </textarea> 
   
    <button class="bg-dark">Enviar Avaliações</button>
  
  </div>

</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

 

  export default defineComponent({

    name: "feedback",
    props: {

      nota : Number,
      descricao : String

    }

    
  })

</script>

<style> 

.desc {

      display: flex;
      flex-direction: column;
      align-items: center;

}

.desc button{

      padding: 10px 20px;
      background-color: #8B4513; /* Marrom escuro */
      color: #fff; /* Texto branco */
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s ease, transform 0.3s ease;


}

 .desc textarea{

  border-width: 2px;
  width: 500px; 
  height: 100px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #181818;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  text-align: left;
  margin-bottom: 15px;

 }

 .desc button:hover {
      background-color: #000000; /* Marrom mais claro no hover */
    }

    .desc button:active {
      transform: scale(0.95); /* Efeito de escala ao clicar */
    }

 .desc input::placeholder{
  padding: 8px;
  position: absolute;
        top: 0; 
        left: 0;
 }#full-stars-example {

/* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
.rating-group {
  display: inline-flex;
}

/* make hover effect work properly in IE */
.rating__icon {
  pointer-events: none;
}

/* hide radio inputs */
.rating__input {
 position: absolute !important;
 left: -9999px !important;
}

/* set icon padding and size */
.rating__label {
  cursor: pointer;
  padding: 0 0.1em;
  font-size: 2rem;
}

/* set default star color */
.rating__icon--star {
  color: orange;
}

/* set color of none icon when unchecked */
.rating__icon--none {
  color: #eee;
}

/* if none icon is checked, make it red */
.rating__input--none:checked + .rating__label .rating__icon--none {
  color: red;
}

/* if any input is checked, make its following siblings grey */
.rating__input:checked ~ .rating__label .rating__icon--star {
  color: #ddd;
}

/* make all stars orange on rating group hover */
.rating-group:hover .rating__label .rating__icon--star {
  color: orange;
}

/* make hovered input's following siblings grey on hover */
.rating__input:hover ~ .rating__label .rating__icon--star {
  color: #ddd;
}

/* make none icon grey on rating group hover */
.rating-group:hover .rating__input--none:not(:hover) + .rating__label .rating__icon--none {
   color: #eee;
}

/* make none icon red on hover */
.rating__input--none:hover + .rating__label .rating__icon--none {
  color: red;
}
}

#half-stars-example {

/* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
.rating-group {
  display: inline-flex;
}

/* make hover effect work properly in IE */
.rating__icon {
  pointer-events: none;
}

/* hide radio inputs */
.rating__input {
 position: absolute !important;
 left: -9999px !important;
}

/* set icon padding and size */
.rating__label {
  cursor: pointer;
  /* if you change the left/right padding, update the margin-right property of .rating__label--half as well. */
  padding: 0 0.1em;
  font-size: 2rem;
}

/* add padding and positioning to half star labels */
.rating__label--half {
  padding-right: 0;
  margin-right: -0.6em;
  z-index: 2;
}

/* set default star color */
.rating__icon--star {
  color: orange;
}

/* set color of none icon when unchecked */
.rating__icon--none {
  color: #eee;
}

/* if none icon is checked, make it red */
.rating__input--none:checked + .rating__label .rating__icon--none {
  color: red;
}

/* if any input is checked, make its following siblings grey */
.rating__input:checked ~ .rating__label .rating__icon--star {
  color: #ddd;
}

/* make all stars orange on rating group hover */
.rating-group:hover .rating__label .rating__icon--star,
.rating-group:hover .rating__label--half .rating__icon--star {
  color: orange;
}

/* make hovered input's following siblings grey on hover */
.rating__input:hover ~ .rating__label .rating__icon--star,
.rating__input:hover ~ .rating__label--half .rating__icon--star {
  color: #ddd;
}

/* make none icon grey on rating group hover */
.rating-group:hover .rating__input--none:not(:hover) + .rating__label .rating__icon--none {
   color: #eee;
}

/* make none icon red on hover */
.rating__input--none:hover + .rating__label .rating__icon--none {
  color: red;
}
}

#full-stars-example-two {

/* use display:inline-flex to prevent whitespace issues. alternatively, you can put all the children of .rating-group on a single line */
.rating-group {
  display: inline-flex;
}

/* make hover effect work properly in IE */
.rating__icon {
  pointer-events: none;
}

/* hide radio inputs */
.rating__input {
 position: absolute !important;
 left: -9999px !important;
}

/* hide 'none' input from screenreaders */
.rating__input--none {
  display: none
}

/* set icon padding and size */
.rating__label {
  cursor: pointer;
  padding: 0 0.1em;
  font-size: 2rem;
}

/* set default star color */
.rating__icon--star {
  color: orange;
}

/* if any input is checked, make its following siblings grey */
.rating__input:checked ~ .rating__label .rating__icon--star {
  color: #ddd;
}

/* make all stars orange on rating group hover */
.rating-group:hover .rating__label .rating__icon--star {
  color: orange;
}

/* make hovered input's following siblings grey on hover */
.rating__input:hover ~ .rating__label .rating__icon--star {
  color: #ddd;
}
}

body {
padding: 1rem;
text-align: center;
}



</style>