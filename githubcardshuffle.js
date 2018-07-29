let freshdeck=[];
let cardsuit=[" of Spades ", " of Diamonds ", " of Hearts ", " of Clubs "];
let cardface=["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
function buildDeck(){
   for(let a=0; a<4; a++){
      for(let b=0; b<13; b++){
         freshdeck.push(cardface[b] + cardsuit[a]);
      }
   }
   return freshdeck;
}

buildDeck();

let lefthandcards=[];
let righthandcards=[];
function cutForShuffle(thedeck, myleft, myright){
   let y=Math.floor(Math.random()*9)
   let z=22+y;
   for (let a=0; a<z; a++){
      myleft.push(thedeck[a]);
   }
   for (let b=z; b<52; b++){
      myright.push(thedeck[b]);
   }
   return [myleft, myright];
}

cutForShuffle(freshdeck, lefthandcards, righthandcards);

let riffleddeck=[];
let riffleddeckswap=[];
function shuffleTheCards(myleft, myright){

  if(riffleddeckswap.length>0){
    while(riffleddeckswap.length>0){
      riffleddeckswap.shift();
    }
  }

  while(myleft.length>4 && myright.length>4){

    let y=Math.ceil(Math.random()*4);
    let z=Math.ceil(Math.random()*4);
    
    if(myleft.length-myright.length>4){
      y=4;
      z=1;
    }

    else if(myright.length-myleft.length>4){
      y=1;
      z=4;
    } 
      
    for(let a=0; a<y; a++){
      riffleddeck.push(myleft[a]);
    }

    for(let b=0; b<y; b++){
      myleft.shift();
    }

    for(let c=0; c<z; c++){
      riffleddeck.push(myright[c]);
    }

    for(let d=0; d<z; d++){
      myright.shift();
    }
  }

  if(myleft.length<5 || myright.length<5){

    for(let e=0; e<myleft.length; e++){
      riffleddeck.push(myleft[e]);
    }

    for(let f=0; f<myright.length; f++){
      riffleddeck.push(myright[f]);
    }
/*why didn't these 2 for loops work to empty the arrays lefthandcards[] and righthandcards[] when they were passed to the function as myleft and myright?
    for(let g=0; g<myleft.length; g++){
      myleft.shift();
    }

    for(let h=0; h<myright.length; h++){
      myright.shift();
    }
*/
  }

  while(myleft.length>0){
    myleft.shift();
  }

  while(myright.length>0){
    myright.shift();
  }
  
  let riffleddeckstrip1=[];
  let riffleddeckstrip2=[];
  let riffleddeckstrip3=[];
  let riffleddeckstrip4=[];
  
  let i=11+Math.ceil(Math.random()*4);
  for (let j=0; j<i; j++){
    riffleddeckstrip1.push(riffleddeck[j]);
  }
  for (let k=0; k<i; k++){
    riffleddeck.shift();
  }

  let l=11+Math.ceil(Math.random()*4);
  for(let m=0; m<l; m++){
    riffleddeckstrip2.push(riffleddeck[m]);
  }
  for (let n=0; n<l; n++){
    riffleddeck.shift();
  }

  let o=11+Math.ceil(Math.random()*4);
  for (let p=0; p<o; p++){
    riffleddeckstrip3.push(riffleddeck[p]);
  }
  for (let q=0; q<o; q++){
    riffleddeck.shift();
  }

  for (let r=0; r<riffleddeck.length; r++){
    riffleddeckstrip4.push(riffleddeck[r]);
  }
  while(riffleddeck.length>0){
    riffleddeck.shift();
  }

  for (let s=0; s<riffleddeckstrip4.length; s++){
    riffleddeckswap.push(riffleddeckstrip4[s]);
  }
  while(riffleddeckstrip4.length>0){
    riffleddeckstrip4.shift();
  }

  for (let t=0; t<riffleddeckstrip3.length; t++){
    riffleddeckswap.push(riffleddeckstrip3[t]);
  }
  while(riffleddeckstrip3.length>0){
    riffleddeckstrip3.shift();
  }

  for (let u=0; u<riffleddeckstrip2.length; u++){
    riffleddeckswap.push(riffleddeckstrip2[u]);
  }
  while(riffleddeckstrip2.length>0){
    riffleddeckstrip2.shift();
  }
  
  for (let v=0; v<riffleddeckstrip1.length; v++){
    riffleddeckswap.push(riffleddeckstrip1[v]);
  }
  while(riffleddeckstrip1.length>0){
    riffleddeckstrip1.shift();
  }

}



shuffleTheCards(lefthandcards, righthandcards);

//console.log(riffleddeck);
//console.log("1)lefthandcards length: "+lefthandcards.length);
//console.log("1)righthandcards length: "+righthandcards.length);
console.log("1)Cards left in lefthandcards: "+lefthandcards);
console.log("1)Cards left in righthandcards: "+righthandcards);
console.log("1)The number of cards in the riffled deck is "+riffleddeckswap.length);
console.log("1)The cards in the final riffleddeckswap are "+riffleddeckswap);

cutForShuffle(riffleddeckswap, lefthandcards, righthandcards);
shuffleTheCards(lefthandcards, righthandcards);

//console.log("2)lefthandcards length: "+lefthandcards.length);
//console.log("2)righthandcards length: "+righthandcards.length);
console.log("2)Cards left in lefthandcards: "+lefthandcards);
console.log("2)Cards left in righthandcards: "+righthandcards);
console.log("2)The number of cards in the riffled deck is "+riffleddeckswap.length);
console.log("2)The cards in the riffleddeck are "+riffleddeckswap);

cutForShuffle(riffleddeckswap, lefthandcards, righthandcards);
shuffleTheCards(lefthandcards, righthandcards);

//console.log("3)lefthandcards length: "+lefthandcards.length);
//console.log("3)righthandcards length: "+righthandcards.length);
console.log("3)Cards left in lefthandcards: "+lefthandcards);
console.log("3)Cards left in righthandcards: "+righthandcards);
console.log("3)The number of cards in the riffled deck is "+riffleddeckswap.length);
console.log("3)The cards in the riffleddeck are "+riffleddeckswap);