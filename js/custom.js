var assetPrice=document.getElementById("assetSlider"),assetOutput=document.getElementById("assetFigure"),rates=[4.99,11.99,19.99],calcRate=rates[0],yearsValue=document.getElementById("yearSlider"),yearsOutput=document.getElementById("yearsFigure");yearsOutput.innerHTML=yearsValue.value,assetOutput.innerHTML=assetPrice.value;var yearsCalc=Number(document.getElementById("yearsFigure").innerHTML),assetPriceCalc=Number(document.getElementById("assetFigure").innerHTML);console.log(yearsCalc),console.log(assetPriceCalc),$('select[name="credithistory"]').change(function(){"excellent"==$(this).val()&&(calcRate=rates[0],compRate.innerHTML=6.34),"average"==$(this).val()&&(calcRate=rates[1],compRate.innerHTML=13.44),"impaired"==$(this).val()&&(calcRate=rates[2],compRate.innerHTML=21.55)});var z=Math.pow(1+calcRate/100/12,12*yearsCalc),calcPayments=Math.ceil((assetPriceCalc+990)*z*(calcRate/100/12)/(z-1)/4.33);console.log(calcPayments),calcRepayments.innerHTML=calcPayments;var totalPayable=Math.ceil(4.33*calcPayments*(12*yearsCalc));function blink_text(){$(".blink").fadeOut(500),$(".blink").fadeIn(500)}displayTotalPayable.innerHTML=totalPayable,assetPrice.oninput=function(){assetOutput.innerHTML=this.value;var e=Number(document.getElementById("displayRate").innerHTML),t=Number(document.getElementById("assetFigure").innerHTML),a=Number(document.getElementById("yearsFigure").innerHTML),n=Math.pow(1+e/100/12,12*a),i=Math.ceil((t+990)*n*(e/100/12)/(n-1)/4.33);calcRepayments.innerHTML=i;var l=Math.ceil(4.33*i*(12*a));displayTotalPayable.innerHTML=l},yearsValue.oninput=function(){yearsOutput.innerHTML=this.value;var e=Number(document.getElementById("displayRate").innerHTML),t=Number(document.getElementById("assetFigure").innerHTML),a=Number(document.getElementById("yearsFigure").innerHTML),n=Math.pow(1+e/100/12,12*a),i=Math.ceil((t+990)*n*(e/100/12)/(n-1)/4.33);calcRepayments.innerHTML=i;var l=Math.ceil(4.33*i*(12*a));displayTotalPayable.innerHTML=l},displayRate.innerHTML=calcRate,creditHistory.oninput=function(){setTimeout(function(){displayRate.innerHTML=calcRate},100),setTimeout(function(){var e=Number(document.getElementById("displayRate").innerHTML),t=Number(document.getElementById("assetFigure").innerHTML),a=Number(document.getElementById("yearsFigure").innerHTML),n=Math.pow(1+e/100/12,12*a),i=Math.ceil((t+990)*n*(e/100/12)/(n-1)/4.33);calcRepayments.innerHTML=i},100);var e=Math.ceil(4.33*calcPayments*(12*yearsCalc));displayTotalPayable.innerHTML=e},setInterval(blink_text,1e3);var rangerPrice=57500,i30nPrice=34e3,mazda3Price=2e4,harleyPrice=24490,monthlyRate=.004158333333333333,wbcRate=.0074916666666666664;$('select[name="carSelector"]').change(function(){if("wildtrak"==$(this).val()){document.getElementById("carBox").src="/images/ranger.png",document.getElementById("features").innerHTML="<li>2019 Ford Ranger Wildtrak</li><li>Twin Turbo Diesel</li><li>Black Styling Pack</li>",document.getElementById("carPrice").innerHTML=rangerPrice;var e=Math.pow(1+monthlyRate,60),t=Math.ceil((rangerPrice+990)*e*monthlyRate/(e-1)/4.33),a=Math.pow(1+wbcRate,60),n=Math.ceil((rangerPrice+990)*a*wbcRate/(a-1)/4.33);console.log(n),console.log(e),console.log(a);var i=n-t,l=Math.ceil(260*t);document.getElementById("repayments").innerHTML=t,document.getElementById("savingPerWeek").innerHTML=i,document.getElementById("savingPerWeek").innerHTML=i,document.getElementById("displayTotalPayableExamples").innerHTML=l}if("i30n"==$(this).val()){document.getElementById("carPrice").innerHTML=i30nPrice,document.getElementById("carBox").src="/images/i30n.png",document.getElementById("features").innerHTML="<li>2018 Hyundai i30n</li><li>2.0l Turbo</li><li>6 Speed Manual</li>";e=Math.pow(1+monthlyRate,60),t=Math.ceil((i30nPrice+990)*e*monthlyRate/(e-1)/4.33),a=Math.pow(1+wbcRate,60),i=(n=Math.ceil((i30nPrice+990)*a*wbcRate/(a-1)/4.33))-t,l=Math.ceil(260*t);document.getElementById("repayments").innerHTML=t,document.getElementById("savingPerWeek").innerHTML=i,document.getElementById("savingPerWeek").innerHTML=i,document.getElementById("displayTotalPayableExamples").innerHTML=l}if("mazda3"==$(this).val()){document.getElementById("carPrice").innerHTML=mazda3Price,document.getElementById("carBox").src="/images/mazda3.png",document.getElementById("features").innerHTML="<li>2015 Mazda3 SP25</li><li>Automatic Trans</li><li></li>";e=Math.pow(1+monthlyRate,60),t=Math.ceil((mazda3Price+990)*e*monthlyRate/(e-1)/4.33),a=Math.pow(1+wbcRate,60),i=(n=Math.ceil((mazda3Price+990)*a*wbcRate/(a-1)/4.33))-t,l=Math.ceil(260*t);document.getElementById("repayments").innerHTML=t,document.getElementById("savingPerWeek").innerHTML=i,document.getElementById("savingPerWeek").innerHTML=i,document.getElementById("displayTotalPayableExamples").innerHTML=l}if("harley"==$(this).val()){document.getElementById("carPrice").innerHTML=harleyPrice,document.getElementById("carPrice").innerHTML=mazda3Price,document.getElementById("carBox").src="/images/harley.png",document.getElementById("features").innerHTML="<li>2016 Harley Davidson</li><li>Softail</li><li></li>";e=Math.pow(1+monthlyRate,60),t=Math.ceil((harleyPrice+990)*e*monthlyRate/(e-1)/4.33),a=Math.pow(1+wbcRate,60),i=(n=Math.ceil((harleyPrice+990)*a*wbcRate/(a-1)/4.33))-t,l=Math.ceil(260*t);document.getElementById("repayments").innerHTML=t,document.getElementById("savingPerWeek").innerHTML=i,document.getElementById("savingPerWeek").innerHTML=i,document.getElementById("displayTotalPayableExamples").innerHTML=l}});