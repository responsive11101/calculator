
// calc presets
var assetPrice = document.getElementById("assetSlider");
var assetOutput = document.getElementById("assetFigure");
var rates = [7.99, 11.99, 19.99];
            var calcRate = rates[0];
            var yearsValue = document.getElementById("yearSlider");
            var yearsOutput = document.getElementById("yearsFigure");
            
          
            yearsOutput.innerHTML = yearsValue.value;
            assetOutput.innerHTML = assetPrice.value;
          
            var yearsCalc = Number(document.getElementById("yearsFigure").innerHTML);
            var assetPriceCalc = Number(document.getElementById("assetFigure").innerHTML);
            console.log(yearsCalc);
            console.log(assetPriceCalc);
            
             $('select[name="credithistory"]').change(function(){
                if ($(this).val() == "excellent"){
                    calcRate = rates[0];
                    compRate.innerHTML = 9.34;
                }
                if ($(this).val() == "average"){
                    calcRate = rates[1];
                    compRate.innerHTML = 13.44;
                }
                if ($(this).val() == "impaired"){
                    calcRate = rates[2];
                    compRate.innerHTML = 21.55;
                }
             });
                    
            // initial calculation
            var z = Math.pow(1 + (calcRate/100/12), (yearsCalc * 12));
            var calcPayments = Math.ceil(((assetPriceCalc + 990) * z * (calcRate/100/12)/(z - 1)/4.33));
            console.log(calcPayments);         
            calcRepayments.innerHTML = calcPayments;
            var totalPayable = Math.ceil(calcPayments * 4.33 * (yearsCalc * 12));
            displayTotalPayable.innerHTML = totalPayable;
            
            
            assetPrice.oninput = function() {
                assetOutput.innerHTML = this.value;
                var rateForCalc = Number(document.getElementById("displayRate").innerHTML);
                var assetPriceCalc = Number(document.getElementById("assetFigure").innerHTML);
                var yearsCalc = Number(document.getElementById("yearsFigure").innerHTML);
                var z = Math.pow(1 + (rateForCalc/100/12), (yearsCalc * 12));
                var calcPayments = Math.ceil(((assetPriceCalc + 990) * z * (rateForCalc/100/12)/(z - 1)/4.33));   
                calcRepayments.innerHTML = calcPayments;
                var totalPayable = Math.ceil(calcPayments * 4.33 * (yearsCalc * 12));
                displayTotalPayable.innerHTML = totalPayable;
            }
            
            
            yearsValue.oninput = function() {
                yearsOutput.innerHTML = this.value;
                var rateForCalc = Number(document.getElementById("displayRate").innerHTML);
                var assetPriceCalc = Number(document.getElementById("assetFigure").innerHTML);
                var yearsCalc = Number(document.getElementById("yearsFigure").innerHTML);
                var z = Math.pow(1 + (rateForCalc/100/12), (yearsCalc * 12));
                var calcPayments = Math.ceil(((assetPriceCalc + 990) * z * (rateForCalc/100/12)/(z - 1)/4.33));   
                calcRepayments.innerHTML = calcPayments;
                var totalPayable = Math.ceil(calcPayments * 4.33 * (yearsCalc * 12));
                displayTotalPayable.innerHTML = totalPayable;
            }
            
            displayRate.innerHTML = calcRate;
          
            creditHistory.oninput = function() {
                setTimeout(function() {
                displayRate.innerHTML = calcRate; }, 100);
                    setTimeout(function() {
                        var rateForCalc = Number(document.getElementById("displayRate").innerHTML);
                        var assetPriceCalc = Number(document.getElementById("assetFigure").innerHTML);
                        var yearsCalc = Number(document.getElementById("yearsFigure").innerHTML);
                        var z = Math.pow(1 + (rateForCalc/100/12), (yearsCalc * 12));
                        var calcPayments = Math.ceil(((assetPriceCalc + 990) * z * (rateForCalc/100/12)/(z - 1)/4.33)); 
                        calcRepayments.innerHTML = calcPayments;
                    }, 100);
                        var totalPayable = Math.ceil(calcPayments * 4.33 * (yearsCalc * 12));
                        displayTotalPayable.innerHTML = totalPayable;
                }
                                    
                        
             
            
            function blink_text() {
                $('.blink').fadeOut(500);
                $('.blink').fadeIn(500);
            }
            setInterval(blink_text, 1000);
            
            var rangerPrice = 57500;
            var i30nPrice = 34000;
            var mazda3Price = 20000;
            var harleyPrice = 24490;
            var monthlyRate = 0.00415833333333333333333333333333;
            var wbcRate = 0.00749166666666666666666666666667;
           
         
            
                $('select[name="carSelector"]').change(function(){
                    if ($(this).val() == "wildtrak"){
                        document.getElementById("carBox").src="/images/ranger.png";
                        document.getElementById("features").innerHTML= '<li>2019 Ford Ranger Wildtrak</li><li>Twin Turbo Diesel</li><li>Black Styling Pack</li>';
                        document.getElementById("carPrice").innerHTML = rangerPrice;
                        var x = Math.pow(1 + monthlyRate, 60);
                        var payments = Math.ceil(((rangerPrice + 990) * x * monthlyRate)/(x - 1)/4.33);
                        var y = Math.pow(1 + wbcRate, 60);
                        var wbcPayments = Math.ceil(((rangerPrice + 990) * y * wbcRate)/(y - 1)/4.33);
                        console.log(wbcPayments);
                        console.log(x);
                        console.log(y);
                        var savings = wbcPayments - payments;
                        var totalPayableEstimate = Math.ceil(payments * 260);
                       
                        document.getElementById("repayments").innerHTML = payments;
                        document.getElementById("savingPerWeek").innerHTML = savings;
                        document.getElementById("savingPerWeek").innerHTML = savings;
                        document.getElementById("displayTotalPayableExamples").innerHTML = totalPayableEstimate;
                        
                    };
                    if ($(this).val() == "i30n"){
                       document.getElementById("carPrice").innerHTML = i30nPrice; 
                       document.getElementById("carBox").src="/images/i30n.png";
                       document.getElementById("features").innerHTML= '<li>2018 Hyundai i30n</li><li>2.0l Turbo</li><li>6 Speed Manual</li>';
                        var x = Math.pow(1 + monthlyRate, 60);
                        var payments = Math.ceil(((i30nPrice + 990) * x * monthlyRate)/(x - 1)/4.33);
                        var y = Math.pow(1 + wbcRate, 60);
                        var wbcPayments = Math.ceil(((i30nPrice + 990) * y * wbcRate)/(y - 1)/4.33);
                        var savings = wbcPayments - payments;
                        var data = [
                            ['Savings', wbcPayments*260-payments*260],
                        
                        ];
                        var totalPayableEstimate = Math.ceil(payments * 260);

                        document.getElementById("repayments").innerHTML = payments;
                        document.getElementById("savingPerWeek").innerHTML = savings;
                        document.getElementById("savingPerWeek").innerHTML = savings;
                        document.getElementById("displayTotalPayableExamples").innerHTML = totalPayableEstimate;
                    };
                    
                    if ($(this).val() == "mazda3"){
                        document.getElementById("carPrice").innerHTML = mazda3Price;
                        document.getElementById("carBox").src="/images/mazda3.png";
                       document.getElementById("features").innerHTML= '<li>2015 Mazda3 SP25</li><li>Automatic Trans</li><li></li>';
                        var x = Math.pow(1 + monthlyRate, 60);
                        var payments = Math.ceil(((mazda3Price + 990) * x * monthlyRate)/(x - 1)/4.33);
                        var y = Math.pow(1 + wbcRate, 60);
                        var wbcPayments = Math.ceil(((mazda3Price + 990) * y * wbcRate)/(y - 1)/4.33);
                        var savings = wbcPayments - payments;
                        var totalPayableEstimate = Math.ceil(payments * 260);
  
                        document.getElementById("repayments").innerHTML = payments;
                        document.getElementById("savingPerWeek").innerHTML = savings;
                        document.getElementById("savingPerWeek").innerHTML = savings;
                        document.getElementById("displayTotalPayableExamples").innerHTML = totalPayableEstimate;
                    };
                    
                    if ($(this).val() == "harley"){
                        document.getElementById("carPrice").innerHTML = harleyPrice;
                        document.getElementById("carPrice").innerHTML = mazda3Price;
                        document.getElementById("carBox").src="/images/harley.png"
                       document.getElementById("features").innerHTML= '<li>2016 Harley Davidson</li><li>Softail</li><li></li>';
                        var x = Math.pow(1 + monthlyRate, 60);
                        var payments = Math.ceil(((harleyPrice + 990) * x * monthlyRate)/(x - 1)/4.33);
                        var y = Math.pow(1 + wbcRate, 60);
                        var wbcPayments = Math.ceil(((harleyPrice + 990) * y * wbcRate)/(y - 1)/4.33);
                        var savings = wbcPayments - payments;
                        var totalPayableEstimate = Math.ceil(payments * 260);
  
                        document.getElementById("repayments").innerHTML = payments;
                        document.getElementById("savingPerWeek").innerHTML = savings;
                        document.getElementById("savingPerWeek").innerHTML = savings;
                        document.getElementById("displayTotalPayableExamples").innerHTML = totalPayableEstimate;
                    };
                    
                    
                });
       