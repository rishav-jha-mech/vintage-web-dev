console.log("Hello Console");
    
document.getElementById("dikhana").style.display = "none";
function check(){
    
    /*BOHOT UNEFFICIENT CODE HOGA YEH */
    document.getElementById("dikhana").style.display = "block";
    let x1="0"; 
    x1= document.quiz.question1.value;
    let x2="0"; 
    x2= document.quiz.question2.value;
    let x3="0"; 
    x3= document.quiz.question3.value;
    let x4="0"; 
    x4= document.quiz.question4.value;
    let x5="0"; 
    x5= document.quiz.question5.value;
    let x6="0"; 
    x6= document.quiz.question6.value;
    let x7="0"; 
    x7= document.quiz.question7.value;
    let x8="0"; 
    x8= document.quiz.question8.value;
    let x9="0"; 
    x9= document.quiz.question9.value;
    let x10="0"; 
    x10= document.quiz.question10.value;    
    var right=0;
    var unat=0;
    var wrong=0;
{   if(x1=="black"){right++; document.getElementById('cross1').style.display = 'none';
                             document.getElementById('unattempted1').style.display = 'none';}
    else if(x1=="green"){wrong++;  document.getElementById('tick1').style.display = 'none'; document.getElementById('unattempted1').style.display = 'none';}
    else if(x1=="blue"){wrong++;   document.getElementById('tick1').style.display = 'none'; document.getElementById('unattempted1').style.display = 'none';}
    else if(x1=="red") {wrong++;   document.getElementById('tick1').style.display = 'none'; document.getElementById('unattempted1').style.display = 'none'; }
    else{unat++;                   document.getElementById('tick1').style.display = 'none';
                                   document.getElementById('cross1').style.display = 'none'; }
}
    if(x2=="batman"){right++;               document.getElementById('cross2').style.display = 'none'; document.getElementById('unattempted2').style.display = 'none'; }
    else if(x2=="captainamerica") {wrong++; document.getElementById('tick2').style.display = 'none'; document.getElementById('unattempted2').style.display = 'none'; }
    else if(x2=="ironman")        {wrong++; document.getElementById('tick2').style.display = 'none'; document.getElementById('unattempted2').style.display = 'none'; }
    else if(x2=="captainmarvel")  {wrong++; document.getElementById('tick2').style.display = 'none'; document.getElementById('unattempted2').style.display = 'none'; }
    else{unat++;                            document.getElementById('tick2').style.display = 'none';
                                            document.getElementById('cross2').style.display = 'none';}

    if(x3=="thor_ragnarok"){right++; document.getElementById('cross3').style.display = 'none'; document.getElementById('unattempted3').style.display = 'none';  }
    else if(x3=="captain_america_2011"){wrong++; document.getElementById('tick3').style.display = 'none'; document.getElementById('unattempted3').style.display = 'none'; }
    else if(x3=="avengers")            {wrong++; document.getElementById('tick3').style.display = 'none'; document.getElementById('unattempted3').style.display = 'none'; }
    else if(x3=="ironman3")            {wrong++; document.getElementById('tick3').style.display = 'none'; document.getElementById('unattempted3').style.display = 'none'; }
    else{unat++;                    document.getElementById('tick3').style.display = 'none';
                                   document.getElementById('cross3').style.display = 'none'; }

    if(x4=="cillianmurphy"){right++; document.getElementById('cross4').style.display = 'none'; document.getElementById('unattempted4').style.display = 'none';  }    
    else if(x4=="chrisevans")         {wrong++; document.getElementById('tick4').style.display = 'none'; document.getElementById('unattempted4').style.display = 'none'; }
    else if(x4=="bendictcumberbatch") {wrong++; document.getElementById('tick4').style.display = 'none'; document.getElementById('unattempted4').style.display = 'none'; }
    else if(x4=="christianbale")      {wrong++; document.getElementById('tick4').style.display = 'none'; document.getElementById('unattempted4').style.display = 'none'; }
    else{unat++;                    document.getElementById('tick4').style.display = 'none';
                                   document.getElementById('cross4').style.display = 'none'; }

    if(x5=="coldplay"){right++; document.getElementById('cross5').style.display = 'none'; document.getElementById('unattempted5').style.display = 'none';  }
    else if(x5=="bts")            {wrong++; document.getElementById('tick5').style.display = 'none'; document.getElementById('unattempted5').style.display = 'none'; }
    else if(x5=="onedirection")   {wrong++; document.getElementById('tick5').style.display = 'none'; document.getElementById('unattempted5').style.display = 'none'; }
    else if(x5=="ledzeppelin")    {wrong++; document.getElementById('tick5').style.display = 'none'; document.getElementById('unattempted5').style.display = 'none'; }
    else{unat++;                    document.getElementById('tick5').style.display = 'none';
                                   document.getElementById('cross5').style.display = 'none'; }


    if(x6=="killingpeople"){right++; document.getElementById('cross6').style.display = 'none'; document.getElementById('unattempted6').style.display = 'none';  }
    else if(x6=="webdevelopment") {wrong++; document.getElementById('tick6').style.display = 'none'; document.getElementById('unattempted6').style.display = 'none'; }
    else if(x6=="pubg")           {wrong++; document.getElementById('tick6').style.display = 'none'; document.getElementById('unattempted6').style.display = 'none'; }
    else if(x6=="music")          {wrong++; document.getElementById('tick6').style.display = 'none'; document.getElementById('unattempted6').style.display = 'none'; }
    else{unat++;                    document.getElementById('tick6').style.display = 'none';
                                   document.getElementById('cross6').style.display = 'none'; }

    if(x7=="nikhilsharma"){right++; document.getElementById('cross7').style.display = 'none'; document.getElementById('unattempted7').style.display = 'none';  }
    else if(x7=="vishnuraj")         {wrong++; document.getElementById('tick7').style.display = 'none'; document.getElementById('unattempted7').style.display = 'none'; }
    else if(x7=="parichaydutta")     {wrong++; document.getElementById('tick7').style.display = 'none'; document.getElementById('unattempted7').style.display = 'none'; }
    else if(x7=="lakshmikantmalani") {wrong++; document.getElementById('tick7').style.display = 'none'; document.getElementById('unattempted7').style.display = 'none'; }
    else{unat++;                    document.getElementById('tick7').style.display = 'none';
                                   document.getElementById('cross7').style.display = 'none'; }
    
    if(x8=="panditji"){right++; document.getElementById('cross8').style.display = 'none'; document.getElementById('unattempted8').style.display = 'none';  }
    else if(x8=="eminem")   {wrong++; document.getElementById('tick8').style.display = 'none'; document.getElementById('unattempted8').style.display = 'none'; }
    else if(x8=="divine")   {wrong++; document.getElementById('tick8').style.display = 'none'; document.getElementById('unattempted8').style.display = 'none'; }
    else if(x8=="banzaji")  {wrong++; document.getElementById('tick8').style.display = 'none'; document.getElementById('unattempted8').style.display = 'none'; }
    else{unat++;                    document.getElementById('tick8').style.display = 'none';
                                   document.getElementById('cross8').style.display = 'none'; }

    if(x9=="bnm"){right++; document.getElementById('cross9').style.display = 'none'; document.getElementById('unattempted9').style.display = 'none';  }
    else if(x9=="bnn")      {wrong++; document.getElementById('tick9').style.display = 'none'; document.getElementById('unattempted9').style.display = 'none'; }
    else if(x9=="bno")      {wrong++; document.getElementById('tick9').style.display = 'none'; document.getElementById('unattempted9').style.display = 'none'; }
    else if(x9=="bnp")      {wrong++; document.getElementById('tick9').style.display = 'none'; document.getElementById('unattempted9').style.display = 'none'; }
    else{unat++;                    document.getElementById('tick9').style.display = 'none';
                                   document.getElementById('cross9').style.display = 'none'; }


    if(x10=="1500lc"){right++; document.getElementById('cross10').style.display = 'none'; document.getElementById('unattempted10').style.display = 'none'; }
    else if(x10=="69lc")    {wrong++; document.getElementById('tick10').style.display = 'none'; document.getElementById('unattempted10').style.display = 'none'; }
    else if(x10=="10lc")    {wrong++; document.getElementById('tick10').style.display = 'none'; document.getElementById('unattempted10').style.display = 'none'; }
    else if(x10=="40lc")    {wrong++; document.getElementById('tick10').style.display = 'none'; document.getElementById('unattempted10').style.display = 'none'; }
    else{unat++;                    document.getElementById('tick10').style.display = 'none';
                                   document.getElementById('cross10').style.display = 'none'; }


    let per= ((right/10)*100).toFixed(2);

    
document.getElementById("attempt").innerHTML = (10-unat) ;    
document.getElementById("unattempt").innerHTML = unat ;    
document.getElementById("coan").innerHTML = right ;    
document.getElementById("wran").innerHTML = wrong;
document.getElementById("accu").innerHTML = per+" %";


}