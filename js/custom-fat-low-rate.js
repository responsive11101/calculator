
// calc presets
var assetPrice = document.getElementById("assetSlider");
var assetOutput = document.getElementById("assetFigure");
var rates = [5.89, 11.99, 19.99];
            var calcRate = rates[0];
            var yearsValue = document.getElementById("yearSlider");
            var yearsOutput = document.getElementById("yearsFigure");
            
          
            yearsOutput.innerHTML = yearsValue.value;
            assetOutput.innerHTML = assetPrice.value;
          
            var yearsCalc = Number(document.getElementById("yearsFigure").innerHTML);
            var assetPriceCalc = Number(document.getElementById("assetFigure").innerHTML);
            console.log(yearsCalc);
            console.log(assetPriceCalc);
            
                    
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
                                    
                        
             
            